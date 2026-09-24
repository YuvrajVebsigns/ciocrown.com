'use client';

import { useEffect, useState } from 'react';
import { fetchWebsitePageBySlug } from '@/services/pages.service';

type Speaker = {
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

type WebsitePage = {
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

type SpeakerSection = {
  heading: string;
  slug: string;
  speakers: Speaker[];
};

const FALLBACK_SPEAKER_IMAGE = '/assets/logo/logo2.png';

const SPEAKER_PAGES = [
  {
    slug: 'keynote-speakers',
    heading: 'Keynote Speakers',
  },
  {
    slug: 'speaker-2025',
    heading: 'Speakers 2025',
  },
  {
    slug: 'partner-speakers',
    heading: 'Partner Speakers',
  },
];

function extractSpeakers(page: WebsitePage | undefined): Speaker[] {
  if (!page) {
    return [];
  }

  const foundSpeakers: Speaker[] = [];

  /*
   * Read speakers from:
   * content.blocks[].data.testimonials[]
   */
  if (page.content?.blocks && Array.isArray(page.content.blocks)) {
    page.content.blocks.forEach((block) => {
      const testimonials = block.data?.testimonials;

      if (!Array.isArray(testimonials)) {
        return;
      }

      testimonials.forEach((item) => {
        const testimonial = item as Testimonial;

        if (typeof testimonial.author !== 'string' || !testimonial.author.trim()) {
          return;
        }

        foundSpeakers.push({
          name: testimonial.author.trim(),

          title: typeof testimonial.role === 'string' ? testimonial.role.trim() : '',

          company: typeof testimonial.quote === 'string' ? testimonial.quote.trim() : '',

          image:
            typeof testimonial.avatar === 'string' && testimonial.avatar.trim()
              ? testimonial.avatar.trim()
              : undefined,
        });
      });
    });
  }

  /*
   * Fallback:
   * sections[].data.testimonials[]
   */
  if (foundSpeakers.length === 0) {
    if (page.sections && Array.isArray(page.sections)) {
      page.sections.forEach((section) => {
        const testimonials = section.data?.testimonials;

        if (!Array.isArray(testimonials)) {
          return;
        }

        testimonials.forEach((item) => {
          const testimonial = item as Testimonial;

          if (typeof testimonial.author !== 'string' || !testimonial.author.trim()) {
            return;
          }

          foundSpeakers.push({
            name: testimonial.author.trim(),

            title: typeof testimonial.role === 'string' ? testimonial.role.trim() : '',

            company: typeof testimonial.quote === 'string' ? testimonial.quote.trim() : '',

            image:
              typeof testimonial.avatar === 'string' && testimonial.avatar.trim()
                ? testimonial.avatar.trim()
                : undefined,
          });
        });
      });
    }
  }

  return foundSpeakers;
}

function removeDuplicateSpeakers(speakers: Speaker[]): Speaker[] {
  return Array.from(
    new Map(speakers.map((speaker) => [speaker.name.toLowerCase(), speaker])).values(),
  );
}

export default function SpeakersPage() {
  const [speakerSections, setSpeakerSections] = useState<SpeakerSection[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadSpeakerPages() {
      try {
        setLoading(true);
        setError('');

        /*
         * Fetch all 3 backend pages
         */
        const responses = await Promise.all(
          SPEAKER_PAGES.map((page) => fetchWebsitePageBySlug(page.slug)),
        );

        if (!mounted) {
          return;
        }

        /*
         * Create separate sections
         */
        const sections: SpeakerSection[] = SPEAKER_PAGES.map((pageConfig, index) => {
          const page = responses[index]?.data as WebsitePage | undefined;

          const speakers = removeDuplicateSpeakers(extractSpeakers(page));

          return {
            heading: pageConfig.heading,
            slug: pageConfig.slug,
            speakers,
          };
        });

        setSpeakerSections(sections);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load speaker data.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadSpeakerPages();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="speakers2025-page">
      {/* HERO */}
      <section className="speakers2025-hero">
        <span className="speakers2025-badge">Speakers</span>

        <h1>Our Speakers</h1>

        <p>Meet the distinguished technology leaders, keynote speakers and partner speakers.</p>
      </section>

      {/* SPEAKER SECTIONS */}
      <section className="speakers2025-section">
        <div className="speakers2025-container">
          {/* LOADING */}
          {loading && <div className="speakers2025-loading">Loading speakers...</div>}

          {/* ERROR */}
          {!loading && error && <div className="speakers2025-error">{error}</div>}

          {/* THREE SECTIONS */}
          {!loading &&
            !error &&
            speakerSections.map((section) => (
              <div className="speaker-category-section" key={section.slug}>
                <div className="speakers2025-heading">
                  <span>Our Distinguished Voices</span>

                  <h2>{section.heading}</h2>
                </div>

                {section.speakers.length > 0 ? (
                  <div className="speakers2025-grid">
                    {section.speakers.map((speaker, index) => (
                      <article
                        className="speaker2025-card"
                        key={`${section.slug}-${speaker.name}-${index}`}
                      >
                        <div className="speaker2025-avatar">
                          <img
                            src={speaker.image || FALLBACK_SPEAKER_IMAGE}
                            alt={speaker.name}
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.src = FALLBACK_SPEAKER_IMAGE;
                            }}
                          />
                        </div>

                        <div className="speaker2025-info">
                          <h3>{speaker.name}</h3>

                          {speaker.title && <p>{speaker.title}</p>}

                          {speaker.company && <strong>{speaker.company}</strong>}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="speakers2025-error">No speakers found in this section.</div>
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
