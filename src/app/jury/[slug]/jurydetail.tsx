'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchWebsitePageBySlug } from '@/services/pages.service';

type JuryMember = {
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

const FALLBACK_JURY_IMAGE = '/assets/team/1.jpg';

export default function JuryPage() {
  const params = useParams();

  const rawSlug = params?.slug;

  const slug: string = Array.isArray(rawSlug)
    ? rawSlug[0] || ''
    : typeof rawSlug === 'string'
      ? rawSlug
      : '';

  const [juryMembers, setJuryMembers] = useState<JuryMember[]>([]);
  const [pageTitle, setPageTitle] = useState('Jury');
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

        // console.log('Fetching jury page:', slug);

        const response = await fetchWebsitePageBySlug(slug);

        // console.log('JURY PAGE API RESPONSE:', response);

        if (!mounted) {
          return;
        }

        const page = response?.data;

        if (!page) {
          throw new Error(`No page data found for slug: ${slug}`);
        }

        if (page.title) {
          setPageTitle(page.title);
        }

        if (page.shortDescription) {
          setPageDescription(page.shortDescription);
        }

        const foundJuryMembers: JuryMember[] = [];

        /*
         * Read jury members from content.blocks
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

                foundJuryMembers.push({
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
         * Fallback to sections
         */
        if (foundJuryMembers.length === 0) {
          if (page.sections && Array.isArray(page.sections)) {
            page.sections.forEach((section) => {
              const testimonials = section.data?.testimonials;

              if (Array.isArray(testimonials)) {
                testimonials.forEach((item) => {
                  const testimonial = item as Testimonial;

                  if (typeof testimonial.author !== 'string' || !testimonial.author.trim()) {
                    return;
                  }

                  foundJuryMembers.push({
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
         * IMPORTANT:
         * Do NOT use author/name for deduplication.
         *
         * Multiple jury members can have the same role/title.
         *
         * We only remove an exact duplicate when the same
         * image URL appears more than once.
         */
        const uniqueJuryMembers = Array.from(
          new Map(
            foundJuryMembers.map((member, index) => [
              member.image || `${member.name}-${member.title}-${index}`,
              member,
            ]),
          ).values(),
        );

        // console.log('FOUND JURY MEMBERS:', uniqueJuryMembers);

        if (mounted) {
          setJuryMembers(uniqueJuryMembers);
        }
      } catch (err) {
        // console.error('Failed to load jury page:', err);

        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load jury page.');
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
        <span className="speakers2025-badge">Jury 2025</span>

        <h1>{pageTitle}</h1>

        {pageDescription && <p>{pageDescription}</p>}
      </section>

      {/* JURY MEMBERS */}
      <section className="speakers2025-section">
        <div className="speakers2025-container">
          {loading && <div className="speakers2025-loading">Loading jury members...</div>}

          {!loading && error && <div className="speakers2025-error">{error}</div>}

          {!loading && !error && juryMembers.length > 0 && (
            <>
              <div className="speakers2025-heading">
                <span>Jury 2025</span>

                <h2>Jury Members</h2>
              </div>

              <div className="speakers2025-grid">
                {juryMembers.map((member, index) => (
                  <article
                    className="speaker2025-card"
                    key={`${member.name}-${member.image || index}`}
                  >
                    <div className="speaker2025-avatar">
                      <img
                        src={member.image || FALLBACK_JURY_IMAGE}
                        alt={member.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = FALLBACK_JURY_IMAGE;
                        }}
                      />
                    </div>

                    <div className="speaker2025-info">
                      <h3>{member.name}</h3>

                      {member.title && <p>{member.title}</p>}

                      {member.company && <strong>{member.company}</strong>}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {!loading && !error && juryMembers.length === 0 && (
            <div className="speakers2025-error">No jury data found for this page.</div>
          )}
        </div>
      </section>
    </main>
  );
}
