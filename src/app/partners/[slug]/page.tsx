'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchWebsitePageBySlug } from '@/services/pages.service';

type Partner = {
  name: string;
  title: string;
  company: string;
  image?: string;
};

type Testimonial = {
  author?: string;
  role?: string;
  quote?: string;
  avatar?: string;
};

const FALLBACK_PARTNER_IMAGE = '/assets/team/1.jpg';

export default function PartnersPage() {
  const params = useParams();

  const rawSlug = params?.slug;

  const slug: string = Array.isArray(rawSlug)
    ? rawSlug[0] || ''
    : typeof rawSlug === 'string'
      ? rawSlug
      : '';

  const [partners, setPartners] = useState<Partner[]>([]);
  const [pageTitle, setPageTitle] = useState('Partners');
  const [pageDescription, setPageDescription] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let mounted = true;

    async function loadPage() {
      try {
        setLoading(true);
        setError('');

        // console.log('Fetching partner page:', slug);

        const response = await fetchWebsitePageBySlug(slug);

        // console.log('PARTNER PAGE API RESPONSE:', response);

        if (!mounted) {
          return;
        }

        const page = response?.data;

        if (!page) {
          throw new Error(`No page data found for slug: ${slug}`);
        }

        /*
         * Page title
         */
        if (page.title) {
          setPageTitle(page.title);
        }

        /*
         * Page description
         */
        if (page.shortDescription) {
          setPageDescription(page.shortDescription);
        }

        /*
         * Partners are stored in:
         *
         * content.blocks[].data.testimonials[]
         *
         * Each item:
         *
         * author -> name
         * role   -> designation
         * quote  -> company
         * avatar -> image
         */

        const foundPartners: Partner[] = [];

        /*
         * Read partners from content.blocks
         */
        if (page.content?.blocks && Array.isArray(page.content.blocks)) {
          page.content.blocks.forEach((block) => {
            const testimonials = block.data?.testimonials;

            if (Array.isArray(testimonials)) {
              testimonials.forEach((item) => {
                const testimonial = item as Testimonial;

                if (typeof testimonial.author !== 'string' || !testimonial.author.trim()) {
                  return;
                }

                foundPartners.push({
                  name: testimonial.author.trim(),

                  title: typeof testimonial.role === 'string' ? testimonial.role.trim() : '',

                  company: typeof testimonial.quote === 'string' ? testimonial.quote.trim() : '',

                  image:
                    typeof testimonial.avatar === 'string' && testimonial.avatar.trim()
                      ? testimonial.avatar.trim()
                      : undefined,
                });
              });
            }
          });
        }

        /*
         * Fallback:
         * Read partners from sections[]
         *
         * This is useful if the backend returns
         * the data in sections but not blocks.
         */
        if (foundPartners.length === 0) {
          if (page.sections && Array.isArray(page.sections)) {
            page.sections.forEach((section) => {
              const testimonials = section.data?.testimonials;

              if (Array.isArray(testimonials)) {
                testimonials.forEach((item) => {
                  const testimonial = item as Testimonial;

                  if (typeof testimonial.author !== 'string' || !testimonial.author.trim()) {
                    return;
                  }

                  foundPartners.push({
                    name: testimonial.author.trim(),

                    title: typeof testimonial.role === 'string' ? testimonial.role.trim() : '',

                    company: typeof testimonial.quote === 'string' ? testimonial.quote.trim() : '',

                    image:
                      typeof testimonial.avatar === 'string' && testimonial.avatar.trim()
                        ? testimonial.avatar.trim()
                        : undefined,
                  });
                });
              }
            });
          }
        }

        /*
         * Remove duplicate partners.
         *
         * The API may contain the same
         * testimonials in both content.blocks
         * and sections.
         */
        const uniquePartners = Array.from(
          new Map(
            foundPartners.map((partner, index) => [
              partner.image || `${partner.name}-${index}`,
              partner,
            ]),
          ).values(),
        );

        // console.log('FOUND PARTNERS:', uniquePartners);

        if (mounted) {
          setPartners(uniquePartners);
        }
      } catch (err) {
        // console.error('Failed to load partner page:', err);

        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load partner page.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadPage();

    return () => {
      mounted = false;
    };
  }, [slug]);

  return (
    <main className="speakers2025-page">
      {/* HERO */}
      <section className="speakers2025-hero">
        <span className="speakers2025-badge">Partners 2025</span>

        <h1>{pageTitle}</h1>

        {pageDescription && <p>{pageDescription}</p>}
      </section>

      {/* PARTNERS */}
      <section className="speakers2025-section">
        <div className="speakers2025-container">
          {/* LOADING */}
          {loading && <div className="speakers2025-loading">Loading partners...</div>}

          {/* ERROR */}
          {!loading && error && <div className="speakers2025-error">{error}</div>}

          {/* PARTNER GRID */}
          {!loading && !error && partners.length > 0 && (
            <>
              <div className="speakers2025-heading">
                <span>Partners 2025</span>

                <h2>Partners</h2>
              </div>

              <div className="speakers2025-grid">
                {partners.map((partner, index) => (
                  <article className="speaker2025-card" key={`${partner.name}-${index}`}>
                    <div className="speaker2025-avatar">
                      <img
                        src={partner.image || FALLBACK_PARTNER_IMAGE}
                        alt={partner.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = FALLBACK_PARTNER_IMAGE;
                        }}
                      />
                    </div>

                    <div className="speaker2025-info">
                      <h3>{partner.name}</h3>

                      {partner.title && <p>{partner.title}</p>}

                      {partner.company && <strong>{partner.company}</strong>}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* NO DATA */}
          {!loading && !error && partners.length === 0 && (
            <div className="speakers2025-error">No partner data found for this page.</div>
          )}
        </div>
      </section>
    </main>
  );
}
