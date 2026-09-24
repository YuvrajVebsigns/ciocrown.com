'use client';

import { useEffect, useState } from 'react';
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

type JuryPageData = {
  title?: string;
  shortDescription?: string;
  content?: {
    blocks?: Array<{
      type?: string;
      data?: Record<string, unknown>;
    }>;
  };
  sections?: Array<{
    type?: string;
    data?: Record<string, unknown>;
  }>;
};

type JurySection = {
  heading: string;
  slug: string;
  members: JuryMember[];
};

const FALLBACK_JURY_IMAGE = '/assets/team/1.jpg';

const JURY_PAGES = [
  {
    slug: 'jury-digital-genius-2026',
    heading: 'Independent Jury for Digital Genius Awards 2026',
  },
  {
    slug: 'jury-healthcare-2026',
    heading: 'Independent Jury for Healthcare Honors 2026',
  },
];

function extractJuryMembers(page: JuryPageData | undefined): JuryMember[] {
  if (!page) {
    return [];
  }

  const foundMembers: JuryMember[] = [];

  const readTestimonials = (testimonials: unknown) => {
    if (!Array.isArray(testimonials)) {
      return;
    }

    testimonials.forEach((item) => {
      const testimonial = item as Testimonial;

      if (typeof testimonial.author !== 'string' || !testimonial.author.trim()) {
        return;
      }

      foundMembers.push({
        name: testimonial.author.trim(),

        title: typeof testimonial.role === 'string' ? testimonial.role.trim() : '',

        company: typeof testimonial.quote === 'string' ? testimonial.quote.trim() : '',

        image:
          typeof testimonial.avatar === 'string' && testimonial.avatar.trim()
            ? testimonial.avatar.trim()
            : undefined,
      });
    });
  };

  /*
   * 1. Read from content.blocks
   */
  if (page.content?.blocks && Array.isArray(page.content.blocks)) {
    page.content.blocks.forEach((block) => {
      const testimonials = block.data?.testimonials;

      readTestimonials(testimonials);
    });
  }

  /*
   * 2. Read from sections
   */
  if (page.sections && Array.isArray(page.sections)) {
    page.sections.forEach((section) => {
      const testimonials = section.data?.testimonials;

      readTestimonials(testimonials);
    });
  }

  /*
   * Remove duplicate members inside the same page.
   *
   * Use name + title + company + image rather than
   * name alone because two members can potentially
   * have similar names.
   */
  return Array.from(
    new Map(
      foundMembers.map((member, index) => [
        `${member.name}-${member.title}-${member.company}-${member.image || index}`,
        member,
      ]),
    ).values(),
  );
}

export default function JuryPage() {
  const [jurySections, setJurySections] = useState<JurySection[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadJuryPages() {
      try {
        setLoading(true);
        setError('');

        /*
         * Fetch both Jury pages
         */
        const responses = await Promise.all(
          JURY_PAGES.map((page) => fetchWebsitePageBySlug(page.slug)),
        );

        if (!mounted) {
          return;
        }

        /*
         * Create separate sections for each Jury page
         */
        const sections: JurySection[] = JURY_PAGES.map((pageConfig, index) => {
          const page = responses[index]?.data as JuryPageData | undefined;

          return {
            heading: pageConfig.heading,
            slug: pageConfig.slug,
            members: extractJuryMembers(page),
          };
        });

        setJurySections(sections);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load Jury members.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadJuryPages();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="speakers2025-page">
      {/* HERO */}
      <section className="speakers2025-hero">
        <span className="speakers2025-badge">Jury 2026</span>

        <h1>Jury 2026</h1>

        <p>
          Meet the distinguished Jury members of the Digital Genius Awards and Healthcare Jury 2026.
        </p>
      </section>

      {/* JURY SECTIONS */}
      <section className="speakers2025-section">
        <div className="speakers2025-container">
          {/* LOADING */}
          {loading && <div className="speakers2025-loading">Loading Jury members...</div>}

          {/* ERROR */}
          {!loading && error && <div className="speakers2025-error">{error}</div>}

          {/* TWO JURY SECTIONS */}
          {!loading &&
            !error &&
            jurySections.map((section) => (
              <div className="jury-category-section" key={section.slug}>
                <div className="speakers2025-heading">
                  <span>Jury 2026</span>

                  <h2>{section.heading}</h2>
                </div>

                {section.members.length > 0 ? (
                  <div className="speakers2025-grid">
                    {section.members.map((member, index) => (
                      <article
                        className="speaker2025-card"
                        key={`${section.slug}-${member.name}-${index}`}
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
                ) : (
                  <div className="speakers2025-error">No Jury members found in this section.</div>
                )}
                <br />
                <br />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
