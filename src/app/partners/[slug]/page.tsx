'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchWebsitePageBySlug } from '@/services/pages.service';

type Partner = {
  name: string;
  title: string;
  company: string;
  image?: string;
  website?: string;
};

type Testimonial = {
  author?: string;
  role?: string;
  quote?: string;
  avatar?: string;
  website?: string;
};

type PartnerPageData = {
  title?: string;
  shortDescription?: string;
  content?: {
    blocks?: Array<{
      data?: {
        testimonials?: Testimonial[];
      };
    }>;
  };
  sections?: Array<{
    data?: {
      testimonials?: Testimonial[];
    };
  }>;
};

const FALLBACK_PARTNER_IMAGE = '/assets/logo/logo2.png';
// const PARTNER_WEBSITES: string[] = [
//   'https://www.anunta.com/',
//   'https://www.freshworks.com/',
//   'https://www.ingrammicro.com/',
// ];

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
  const [expandedPartners, setExpandedPartners] = useState<Record<number, boolean>>({});

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

        const response = await fetchWebsitePageBySlug(slug);

        if (!mounted) {
          return;
        }

        const page = response?.data as PartnerPageData | undefined;

        if (!page) {
          throw new Error(`No page data found for slug: ${slug}`);
        }

        if (page.title) {
          setPageTitle(page.title);
        }

        if (page.shortDescription) {
          setPageDescription(page.shortDescription);
        }

        const foundPartners: Partner[] = [];

        /*
         * Read testimonials from content.blocks
         */
        if (page.content?.blocks && Array.isArray(page.content.blocks)) {
          page.content.blocks.forEach((block) => {
            const testimonials = block.data?.testimonials;

            if (!Array.isArray(testimonials)) {
              return;
            }

            testimonials.forEach((testimonial) => {
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

                website:
                  typeof testimonial.website === 'string' && testimonial.website.trim()
                    ? testimonial.website.trim()
                    : undefined,
              });
            });
          });
        }

        /*
         * Fallback:
         * Read testimonials from sections
         */
        if (foundPartners.length === 0) {
          if (page.sections && Array.isArray(page.sections)) {
            page.sections.forEach((section) => {
              const testimonials = section.data?.testimonials;

              if (!Array.isArray(testimonials)) {
                return;
              }

              testimonials.forEach((testimonial) => {
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

                  website:
                    typeof testimonial.website === 'string' && testimonial.website.trim()
                      ? testimonial.website.trim()
                      : undefined,
                });
              });
            });
          }
        }

        /*
         * Remove duplicates
         */
        const uniquePartners = Array.from(
          new Map(
            foundPartners.map((partner, index) => [
              partner.image || `${partner.name}-${partner.title}-${partner.company}-${index}`,
              partner,
            ]),
          ).values(),
        );

        if (mounted) {
          setPartners(uniquePartners);
        }
      } catch (err) {
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

  const toggleReadMore = (index: number) => {
    setExpandedPartners((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

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
          {/* {loading && <div className="speakers2025-loading">Loading partners...</div>} */}

          {loading && (
            <div className="speakers2025-loader-wrapper">
              <div className="speakers2025-loader"></div>
            </div>
          )}

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
                {partners.map((partner, index) => {
                  const isExpanded = expandedPartners[index] || false;

                  const description = [partner.title, partner.company].filter(Boolean).join(' ');

                  return (
                    <article className="speaker2025-card" key={`${partner.name}-${index}`}>
                      <div className="speaker2025-info">
                        {/* 1. HEADING */}
                        <h3>{partner.name}</h3>

                        {/* 2. IMAGE */}
                        <div className="speaker2025-avatar1">
                          <img
                            src={partner.image || FALLBACK_PARTNER_IMAGE}
                            alt={partner.name}
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.src = FALLBACK_PARTNER_IMAGE;
                            }}
                          />
                        </div>

                        {/* 3. DESCRIPTION */}
                        {description && (
                          <>
                            <div
                              className={`speaker2025-description ${isExpanded ? 'expanded' : ''}`}
                            >
                              {description}
                            </div>

                            <div className="speaker2025-actions">
                              <button
                                type="button"
                                className="speaker2025-read-more"
                                onClick={() => toggleReadMore(index)}
                              >
                                {isExpanded ? 'Read Less' : 'Read More'}
                              </button>

                              {partner.title && (
                                <a
                                  href={partner.title}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="speaker2025-visit-button"
                                >
                                  Visit
                                </a>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </article>
                  );
                })}
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
