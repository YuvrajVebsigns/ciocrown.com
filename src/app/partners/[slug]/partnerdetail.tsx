'use client';

import { useEffect, useState } from 'react';
import { fetchWebsitePageBySlug, WebsitePage } from '@/services/pages.service';

type PartnerDetailClientProps = {
  slug: string;
};

export default function PartnerDetailClient({ slug }: PartnerDetailClientProps) {
  const [page, setPage] = useState<WebsitePage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPage() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchWebsitePageBySlug(slug);

        if (!isMounted) return;

        if (response?.success && response.data) {
          setPage(response.data);
          return;
        }

        setError(response?.message ?? 'Unable to load partner page.');
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : 'Unable to load partner page. Please try again.',
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPage();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  /* ---------------------------------------------
   * LOADING
   * --------------------------------------------- */

  if (isLoading) {
    return (
      <main className="winners-detail-page">
        <section className="winners-detail-card">
          <p className="winners-kicker">Loading partner...</p>

          <p>Fetching page data for {slug}.</p>
        </section>
      </main>
    );
  }

  /* ---------------------------------------------
   * ERROR
   * --------------------------------------------- */

  if (error) {
    return (
      <main className="winners-detail-page">
        <section className="winners-detail-card">
          <p className="winners-kicker">Unable to load partner</p>

          <p>{error}</p>
        </section>
      </main>
    );
  }

  /* ---------------------------------------------
   * NO PAGE
   * --------------------------------------------- */

  if (!page) {
    return (
      <main className="winners-detail-page">
        <section className="winners-detail-card">
          <p className="winners-kicker">Partner page not found</p>

          <p>No partner page was returned for the slug {slug}.</p>
        </section>
      </main>
    );
  }

  /* ---------------------------------------------
   * PAGE SECTIONS
   * --------------------------------------------- */

  const pageSections: unknown[] = Array.isArray(page.sections)
    ? page.sections
    : Array.isArray(page.content?.blocks)
      ? page.content.blocks
      : [];

  /* ---------------------------------------------
   * GET ITEMS FROM SECTION
   * --------------------------------------------- */

  const getSectionItems = (section: unknown) => {
    if (Array.isArray(section)) {
      return section as unknown[];
    }

    const sectionRecord = section as Record<string, unknown>;

    const data = sectionRecord.data as Record<string, unknown> | undefined;

    const candidates: unknown[] = [];

    if (data && typeof data === 'object') {
      candidates.push(
        data.testimonials,
        data.items,
        data.members,
        data.partners,
        data.speakers,
        data.winners,
        data.rows,
        data.blocks,
        data.values,
      );
    }

    candidates.push(
      sectionRecord.testimonials,
      sectionRecord.items,
      sectionRecord.members,
      sectionRecord.partners,
      sectionRecord.speakers,
      sectionRecord.winners,
      sectionRecord.rows,
      sectionRecord.blocks,
      sectionRecord.values,
    );

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate as unknown[];
      }
    }

    return [];
  };

  /* ---------------------------------------------
   * PARTNER SECTIONS
   * --------------------------------------------- */

  const partnerSections = pageSections
    .map((section) => {
      const sectionRecord = section as Record<string, unknown>;

      const sectionData = sectionRecord.data as Record<string, unknown> | undefined;

      const partners = getSectionItems(section);

      return {
        title:
          typeof sectionData?.sectionTitle === 'string'
            ? sectionData.sectionTitle
            : typeof sectionData?.title === 'string'
              ? sectionData.title
              : typeof sectionRecord.title === 'string'
                ? sectionRecord.title
                : typeof sectionRecord.type === 'string'
                  ? sectionRecord.type
                  : (page.title ?? 'Partners'),

        partners,
      };
    })
    .filter((section) => section.partners.length > 0);

  /* ---------------------------------------------
   * PAGE
   * --------------------------------------------- */

  return (
    <main className="winners-detail-page">
      {/* PAGE HEADER */}
      <section className="winners-detail-card">
        <p className="winners-kicker">Partner Profile</p>

        <h1>{page.title}</h1>

        {page.shortDescription ? (
          <p className="winners-detail-summary">{page.shortDescription}</p>
        ) : null}
      </section>

      {/* PARTNER SECTIONS */}
      {partnerSections.length > 0 ? (
        partnerSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="winner-section-block">
            {/* SECTION HEADER */}
            <div className="winner-section-header winner-section-header--centered">
              <p className="winner-section-kicker">{section.title || 'Partner Profiles'}</p>

              <h2>{section.title || 'Partner Profiles'}</h2>

              <span>{section.partners.length} partners</span>

              <h3>Partners 2025</h3>
            </div>

            {/* PARTNER GRID */}
            <div className="winner-section-grid">
              {section.partners.map((partnerItem, index) => {
                const entry = partnerItem as Record<string, unknown>;

                const partnerName =
                  typeof entry.author === 'string' && entry.author.trim()
                    ? entry.author.trim()
                    : typeof entry.name === 'string' && entry.name.trim()
                      ? entry.name.trim()
                      : 'Partner Name';

                const partnerRole =
                  typeof entry.role === 'string'
                    ? entry.role.trim()
                    : typeof entry.title === 'string'
                      ? entry.title.trim()
                      : '';

                const partnerCompany =
                  typeof entry.quote === 'string'
                    ? entry.quote.trim()
                    : typeof entry.company === 'string'
                      ? entry.company.trim()
                      : '';

                const partnerImage =
                  typeof entry.avatar === 'string' && entry.avatar.trim()
                    ? entry.avatar.trim()
                    : typeof entry.image === 'string' && entry.image.trim()
                      ? entry.image.trim()
                      : '/assets/default-winner.png';

                return (
                  <article
                    key={`${section.title}-${partnerName}-${index}`}
                    className="winner-profile-card winner-profile-card--red"
                  >
                    {/* IMAGE */}
                    <div className="winner-profile-media">
                      <img
                        src={partnerImage}
                        alt={partnerName}
                        className="winner-profile-image"
                        onError={(event) => {
                          event.currentTarget.src = '/assets/default-winner.png';
                        }}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="winner-profile-body">
                      <h3>{partnerName}</h3>

                      {partnerRole ? (
                        <p className="winner-profile-category">{partnerRole}</p>
                      ) : null}

                      {partnerCompany ? (
                        <p className="winner-profile-company">{partnerCompany}</p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))
      ) : (
        <section className="winner-section-block">
          <p>No partner cards were found for this page.</p>
        </section>
      )}
    </main>
  );
}
