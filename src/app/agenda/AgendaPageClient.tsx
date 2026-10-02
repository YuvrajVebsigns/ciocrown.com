'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  fetchWebsitePageBySlug,
  type WebsitePage,
  type WebsitePageContentBlock,
} from '@/services/pages.service';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getAgendaPdfUrl(page: WebsitePage): string | null {
  const blocks = [...(page.content?.blocks ?? []), ...(page.sections ?? [])];

  for (const block of blocks) {
    if (!isRecord(block.data) || !Array.isArray(block.data.testimonials)) continue;

    for (const testimonial of block.data.testimonials) {
      if (!isRecord(testimonial) || typeof testimonial.quote !== 'string') continue;

      try {
        const url = new URL(testimonial.quote.trim());
        if (url.protocol === 'https:' && url.pathname.toLowerCase().endsWith('.pdf')) {
          return url.toString();
        }
      } catch {
        continue;
      }
    }
  }

  return null;
}

function renderContentBlock(block: WebsitePageContentBlock, index: number) {
  const key = typeof block.id === 'string' ? block.id : `agenda-block-${index}`;
  const type = typeof block.type === 'string' ? block.type.toLowerCase() : '';
  const data = isRecord(block.data) ? block.data : {};
  const text = typeof data.text === 'string' ? data.text.trim() : '';

  if (type === 'header' && text) {
    return typeof data.level === 'number' && data.level > 2 ? (
      <h3 key={key}>{text}</h3>
    ) : (
      <h2 key={key}>{text}</h2>
    );
  }

  if (type === 'paragraph' && text) {
    return <p key={key} dangerouslySetInnerHTML={{ __html: text }} />;
  }

  if (type === 'list' && Array.isArray(data.items)) {
    const items = data.items.filter((item): item is string => typeof item === 'string');
    return items.length ? (
      <ul key={key} className="overview-list">
        {items.map((item, itemIndex) => (
          <li key={`${key}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    ) : null;
  }

  if (type === 'image' && isRecord(data.file) && typeof data.file.url === 'string') {
    return (
      <Image
        key={key}
        src={data.file.url}
        alt={typeof data.caption === 'string' ? data.caption : 'Agenda image'}
        width={1200}
        height={800}
        unoptimized
      />
    );
  }

  if (type === 'quote' && text) {
    return <blockquote key={key}>{text}</blockquote>;
  }

  if (type === 'delimiter') {
    return <hr key={key} />;
  }

  return text ? <p key={key} dangerouslySetInnerHTML={{ __html: text }} /> : null;
}

export default function AgendaPageClient() {
  const [page, setPage] = useState<WebsitePage | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadAgendaPage() {
      try {
        const response = await fetchWebsitePageBySlug('agenda');
        if (!isMounted) return;

        if (!response.success || !response.data) {
          throw new Error(response.message || 'Unable to load the agenda page.');
        }

        setPage(response.data);
      } catch (cause: unknown) {
        if (isMounted) {
          setError(cause instanceof Error ? cause.message : 'Unable to load the agenda page.');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadAgendaPage();

    return () => {
      isMounted = false;
    };
  }, []);

  const contentBlocks = page?.content?.blocks ?? [];
  const agendaPdfUrl = page ? getAgendaPdfUrl(page) : null;

  if (isLoading) {
    return (
      <main className="agenda-pdf-page">
        <p role="status">Loading agenda...</p>
      </main>
    );
  }

  if (agendaPdfUrl) {
    return (
      <main className="agenda-pdf-page">
        <iframe
          className="agenda-pdf-viewer"
          src={`${agendaPdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="CIO CROWN event agenda PDF"
        />
      </main>
    );
  }

  return (
    <main className="agenda-page">
      <article className="agenda-page-content">
        {error ? (
          <p role="alert">{error}</p>
        ) : page ? (
          <>
            <h1>{page.title}</h1>
            {page.shortDescription ? <p>{page.shortDescription}</p> : null}
            <p role="status">The agenda PDF is not available yet.</p>
            {contentBlocks.map(renderContentBlock)}
            {contentBlocks.length === 0 ? <p>Agenda details are not available yet.</p> : null}
          </>
        ) : null}
      </article>
    </main>
  );
}
