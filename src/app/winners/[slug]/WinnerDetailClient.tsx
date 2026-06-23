// 'use client';

// import { useEffect, useState } from 'react';
// import { fetchWebsitePageBySlug, WebsitePage } from '@/services/pages.service';

// type WinnerDetailClientProps = {
//   slug: string;
//   kicker?: string;
// };

// export default function WinnerDetailClient({ slug, kicker }: WinnerDetailClientProps) {
//   const [page, setPage] = useState<WebsitePage | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let isMounted = true;

//     async function loadPage() {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await fetchWebsitePageBySlug(slug);
//         if (!isMounted) return;

//         if (response?.success && response.data) {
//           setPage(response.data);
//           return;
//         }

//         setError(response?.message ?? 'Unable to load winner page.');
//       } catch (err: unknown) {
//         setError(
//           err instanceof Error ? err.message : 'Unable to load winner page. Please try again.',
//         );
//       } finally {
//         if (isMounted) setIsLoading(false);
//       }
//     }

//     loadPage();

//     return () => {
//       isMounted = false;
//     };
//   }, [slug]);

//   if (isLoading) {
//     return (
//       <main className="winners-detail-page">
//         <section className="winners-detail-card">
//           <p className="winners-kicker">Loading winner...</p>
//           <p>Fetching page data for {slug}.</p>
//         </section>
//       </main>
//     );
//   }

//   if (error) {
//     return (
//       <main className="winners-detail-page">
//         <section className="winners-detail-card">
//           <p className="winners-kicker">Unable to load winner</p>
//           <p>{error}</p>
//         </section>
//       </main>
//     );
//   }

//   if (!page) {
//     return (
//       <main className="winners-detail-page">
//         <section className="winners-detail-card">
//           <p className="winners-kicker">Winner not found</p>
//           <p>No winner page was returned for the slug {slug}.</p>
//         </section>
//       </main>
//     );
//   }

//   const pageSections = Array.isArray(page.sections) ? page.sections : [];
//   const pageBlocks = Array.isArray(page.content?.blocks) ? page.content.blocks : [];

//   const getSectionItems = (section: unknown) => {
//     if (Array.isArray(section)) {
//       return section as unknown[];
//     }

//     if (typeof section !== 'object' || section === null) {
//       return [];
//     }

//     const sectionRecord = section as Record<string, unknown>;
//     const data = sectionRecord.data as Record<string, unknown> | undefined;
//     const candidates: unknown[] = [];

//     if (data && typeof data === 'object') {
//       candidates.push(
//         data.testimonials,
//         data.items,
//         data.members,
//         data.winners,
//         data.rows,
//         data.blocks,
//         data.values,
//       );
//     }

//     candidates.push(
//       sectionRecord.testimonials,
//       sectionRecord.items,
//       sectionRecord.members,
//       sectionRecord.winners,
//       sectionRecord.rows,
//       sectionRecord.blocks,
//       sectionRecord.values,
//     );

//     for (const candidate of candidates) {
//       if (Array.isArray(candidate)) {
//         return candidate as unknown[];
//       }
//     }

//     return [];
//   };

//   const buildSections = (items: unknown[]) =>
//     items
//       .map((section) => {
//         const sectionRecord = section as Record<string, unknown>;
//         const sectionData = sectionRecord.data as Record<string, unknown> | undefined;
//         const testimonials = getSectionItems(section);

//         return {
//           title:
//             typeof sectionData?.sectionTitle === 'string'
//               ? sectionData.sectionTitle
//               : typeof sectionData?.title === 'string'
//                 ? sectionData.title
//                 : typeof sectionRecord.title === 'string'
//                   ? sectionRecord.title
//                   : typeof sectionRecord.type === 'string'
//                     ? sectionRecord.type
//                     : (page.title ?? 'Winner Profiles'),
//           testimonials,
//         };
//       })
//       .filter((section) => section.testimonials.length > 0);

//   let testimonialSections = buildSections(pageSections);
//   if (testimonialSections.length === 0 && pageBlocks.length > 0) {
//     testimonialSections = buildSections(pageBlocks);
//   }

//   return (
//     <main className="winners-detail-page">
//       <section className="winners-detail-card">
//         <p className="winners-kicker">{kicker ?? 'Winners'}</p>
//         <h1>{page.title}</h1>
//         <p>
//           Showcasing exceptional leaders who are driving digital transformation, business growth,
//           and innovation across industries.
//         </p>
//         {page.shortDescription ? (
//           <p className="winners-detail-summary">{page.shortDescription}</p>
//         ) : null}
//       </section>

//       {testimonialSections && testimonialSections.length > 0 ? (
//         testimonialSections.map((section, sectionIndex) => (
//           <section key={sectionIndex} className="winner-section-block">
//             <div className="winner-section-header winner-section-header--centered">
//               <p className="winner-section-kicker">Winner Profiles</p>
//               <h2>{section.title || 'Winner Profiles'}</h2>
//               <span>{section.testimonials.length} Members</span>
//             </div>

//             <div className="winner-section-grid">
//               {section.testimonials.map((testimonial, index) => {
//                 const entry = testimonial as Record<string, unknown>;
//                 return (
//                   <article
//                     key={`${section.title}-${index}`}
//                     className="winner-profile-card winner-profile-card--red"
//                   >
//                     <div className="winner-profile-media">
//                       <img
//                         src={
//                           typeof entry.avatar === 'string' && entry.avatar
//                             ? entry.avatar
//                             : '/assets/default-winner.png'
//                         }
//                         alt={typeof entry.author === 'string' ? entry.author : 'Winner'}
//                         className="winner-profile-image"
//                       />
//                     </div>

//                     <div className="winner-profile-body">
//                       <h3>{typeof entry.author === 'string' ? entry.author : 'Winner Name'}</h3>
//                       <p className="winner-profile-category">
//                         {/* Company: */}
//                         {typeof entry.role === 'string' ? entry.role.trim() : 'Winner'}
//                       </p>
//                       {typeof entry.quote === 'string' && entry.quote ? (
//                         <p className="winner-profile-company">&quot;{entry.quote}&quot;</p>
//                       ) : null}
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </section>
//         ))
//       ) : (
//         <section className="winner-section-block">
//           <p>No winner cards were found for this page.</p>
//         </section>
//       )}
//     </main>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { fetchWebsitePageBySlug, WebsitePage } from '@/services/pages.service';

type WinnerDetailClientProps = {
  slug: string;
  kicker?: string;
};

type TestimonialSection = {
  title: string;
  testimonials: unknown[];
};

function WinnerCard({
  testimonial,
  sectionTitle,
  index,
}: {
  testimonial: unknown;
  sectionTitle: string;
  index: number;
}) {
  const entry = testimonial as Record<string, unknown>;

  return (
    <article
      key={`${sectionTitle}-${index}`}
      className="winner-profile-card winner-profile-card--red"
    >
      <div className="winner-profile-media">
        <img
          src={
            typeof entry.avatar === 'string' && entry.avatar
              ? entry.avatar
              : '/assets/default-winner.png'
          }
          alt={typeof entry.author === 'string' ? entry.author : 'Winner'}
          className="winner-profile-image"
        />
      </div>

      <div className="winner-profile-body">
        <h3>{typeof entry.author === 'string' ? entry.author : 'Winner Name'}</h3>

        <p className="winner-profile-category">
          {typeof entry.role === 'string' ? entry.role.trim() : 'Winner'}
        </p>

        {typeof entry.quote === 'string' && entry.quote ? (
          <p className="winner-profile-company">&quot;{entry.quote}&quot;</p>
        ) : null}
      </div>
    </article>
  );
}

export default function WinnerDetailClient({ slug, kicker }: WinnerDetailClientProps) {
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

        setError(response?.message ?? 'Unable to load winner page.');
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : 'Unable to load winner page. Please try again.',
        );
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadPage();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <main className="winners-detail-page">
        <section className="winners-detail-card">
          <p className="winners-kicker">Loading winner...</p>
          <p>Fetching page data for {slug}.</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="winners-detail-page">
        <section className="winners-detail-card">
          <p className="winners-kicker">Unable to load winner</p>
          <p>{error}</p>
        </section>
      </main>
    );
  }

  if (!page) {
    return (
      <main className="winners-detail-page">
        <section className="winners-detail-card">
          <p className="winners-kicker">Winner not found</p>
          <p>No winner page was returned for the slug {slug}.</p>
        </section>
      </main>
    );
  }

  const pageSections = Array.isArray(page.sections) ? page.sections : [];
  const pageBlocks = Array.isArray(page.content?.blocks) ? page.content.blocks : [];

  const getSectionItems = (section: unknown) => {
    if (Array.isArray(section)) {
      return section as unknown[];
    }

    if (typeof section !== 'object' || section === null) {
      return [];
    }

    const sectionRecord = section as Record<string, unknown>;
    const data = sectionRecord.data as Record<string, unknown> | undefined;
    const candidates: unknown[] = [];

    if (data && typeof data === 'object') {
      candidates.push(
        data.testimonials,
        data.items,
        data.members,
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

  const buildSections = (items: unknown[]): TestimonialSection[] =>
    items
      .map((section) => {
        const sectionRecord = section as Record<string, unknown>;
        const sectionData = sectionRecord.data as Record<string, unknown> | undefined;
        const testimonials = getSectionItems(section);

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
                    : (page.title ?? 'Winner Profiles'),
          testimonials,
        };
      })
      .filter((section) => section.testimonials.length > 0);

  let testimonialSections = buildSections(pageSections);

  if (testimonialSections.length === 0 && pageBlocks.length > 0) {
    testimonialSections = buildSections(pageBlocks);
  }

  const allTestimonials = testimonialSections.flatMap((section) => section.testimonials);

  const technologyIcons = allTestimonials.filter((item) => {
    const entry = item as Record<string, unknown>;
    const category = String(
      entry.category ?? entry.type ?? entry.group ?? entry.awardCategory ?? '',
    ).toLowerCase();

    return category.includes('technology');
  });

  const businessIcons = allTestimonials.filter((item) => {
    const entry = item as Record<string, unknown>;
    const category = String(
      entry.category ?? entry.type ?? entry.group ?? entry.awardCategory ?? '',
    ).toLowerCase();

    return category.includes('business');
  });

  const showIconSections = technologyIcons.length > 0 || businessIcons.length > 0;

  return (
    <main className="winners-detail-page">
      <section className="winners-detail-card">
        <p className="winners-kicker">{kicker ?? 'Winners'}</p>
        <h1>{page.title}</h1>
        <p>
          Showcasing exceptional leaders who are driving digital transformation, business growth,
          and innovation across industries.
        </p>

        {page.shortDescription ? (
          <p className="winners-detail-summary">{page.shortDescription}</p>
        ) : null}
      </section>

      {showIconSections ? (
        <>
          {technologyIcons.length > 0 ? (
            <section className="winner-section-block">
              <div className="winner-section-header winner-section-header--centered">
                <p className="winner-section-kicker">Winner Profiles</p>
                <h2>TECHNOLOGY ICONS</h2>
                <span>{technologyIcons.length} Members</span>
              </div>

              <div className="winner-section-grid">
                {technologyIcons.map((testimonial, index) => (
                  <WinnerCard
                    key={`technology-${index}`}
                    testimonial={testimonial}
                    sectionTitle="TECHNOLOGY ICONS"
                    index={index}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {businessIcons.length > 0 ? (
            <section className="winner-section-block">
              <div className="winner-section-header winner-section-header--centered">
                <p className="winner-section-kicker">Winner Profiles</p>
                <h2>BUSINESS ICONS</h2>
                <span>{businessIcons.length} Members</span>
              </div>

              <div className="winner-section-grid">
                {businessIcons.map((testimonial, index) => (
                  <WinnerCard
                    key={`business-${index}`}
                    testimonial={testimonial}
                    sectionTitle="BUSINESS ICONS"
                    index={index}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : testimonialSections.length > 0 ? (
        testimonialSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="winner-section-block">
            <div className="winner-section-header winner-section-header--centered">
              <p className="winner-section-kicker">Winner Profiles</p>
              <h2>{section.title || 'Winner Profiles'}</h2>
              <span>{section.testimonials.length} Members</span>
              <h4>TECHNOLOGY ICONS</h4>
            </div>

            <div className="winner-section-grid">
              {section.testimonials.map((testimonial, index) => (
                <WinnerCard
                  key={`${section.title}-${index}`}
                  testimonial={testimonial}
                  sectionTitle={section.title}
                  index={index}
                />
              ))}
            </div>

            <div className="winner-section-header winner-section-header--centered">
              <span>{section.testimonials.length} Members</span>
              <h4>BUSINESS ICONS</h4>
            </div>

            <div className="winner-section-grid">
              {section.testimonials.map((testimonial, index) => (
                <WinnerCard
                  key={`${section.title}-${index}`}
                  testimonial={testimonial}
                  sectionTitle={section.title}
                  index={index}
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <section className="winner-section-block">
          <p>No winner cards were found for this page.</p>
        </section>
      )}
    </main>
  );
}
