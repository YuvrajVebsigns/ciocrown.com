// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import { fetchWebsitePageBySlug } from '@/services/pages.service';

// type JuryMember = {
//   name: string;
//   title: string;
//   company: string;
//   image?: string;
// };

// type Testimonial = {
//   author?: string;
//   role?: string;
//   quote?: string;
//   avatar?: string;
// };

// const FALLBACK_JURY_IMAGE = '/assets/team/1.jpg';

// const VALID_JURY_SLUGS = [
//   'jury-healthcare-2026',
//   'jury-digital-genius-2026',
// ];

// export default function JuryPage() {
//   const params = useParams();

//   const rawSlug = params?.slug;

//   const slug: string = Array.isArray(rawSlug)
//     ? rawSlug[0] || ''
//     : typeof rawSlug === 'string'
//       ? rawSlug
//       : '';

//   const [juryMembers, setJuryMembers] = useState<JuryMember[]>([]);
//   const [pageTitle, setPageTitle] = useState('Jury');
//   const [pageDescription, setPageDescription] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!slug) {
//       setLoading(false);
//       setError('Jury page slug is missing.');
//       return;
//     }

//     let mounted = true;

//     async function loadPage() {
//       try {
//         setLoading(true);
//         setError('');
//         setJuryMembers([]);
//         setPageTitle('Jury');
//         setPageDescription('');

//         console.log('Fetching jury page:', slug);

//         /*
//          * Supported Jury pages:
//          *
//          * /jury/jury-healthcare-2026
//          * /jury/jury-digital-genius-2026
//          *
//          * The same component handles both APIs.
//          */
//         if (!VALID_JURY_SLUGS.includes(slug)) {
//           throw new Error(`Invalid jury page slug: ${slug}`);
//         }

//         const response = await fetchWebsitePageBySlug(slug);

//         console.log('JURY PAGE API RESPONSE:', response);

//         if (!mounted) {
//           return;
//         }

//         const page = response?.data;

//         if (!page) {
//           throw new Error(
//             `No page data found for slug: ${slug}`
//           );
//         }

//         /*
//          * PAGE TITLE
//          */
//         if (page.title) {
//           setPageTitle(page.title);
//         }

//         /*
//          * PAGE DESCRIPTION
//          */
//         if (page.shortDescription) {
//           setPageDescription(page.shortDescription);
//         }

//         const foundJuryMembers: JuryMember[] = [];

//         /*
//          * Helper function to read testimonials.
//          */
//         const readTestimonials = (
//           testimonials: unknown
//         ) => {
//           if (!Array.isArray(testimonials)) {
//             return;
//           }

//           testimonials.forEach((item) => {
//             const testimonial = item as Testimonial;

//             if (
//               typeof testimonial.author !== 'string' ||
//               !testimonial.author.trim()
//             ) {
//               return;
//             }

//             foundJuryMembers.push({
//               name: testimonial.author.trim(),

//               title:
//                 typeof testimonial.role === 'string'
//                   ? testimonial.role.trim()
//                   : '',

//               company:
//                 typeof testimonial.quote === 'string'
//                   ? testimonial.quote.trim()
//                   : '',

//               image:
//                 typeof testimonial.avatar === 'string' &&
//                 testimonial.avatar.trim()
//                   ? testimonial.avatar.trim()
//                   : undefined,
//             });
//           });
//         };

//         /*
//          * 1. Read jury members from content.blocks
//          */
//         if (
//           page.content?.blocks &&
//           Array.isArray(page.content.blocks)
//         ) {
//           page.content.blocks.forEach((block) => {
//             const testimonials = block.data?.testimonials;

//             readTestimonials(testimonials);
//           });
//         }

//         /*
//          * 2. Fallback to sections
//          */
//         if (foundJuryMembers.length === 0) {
//           if (
//             page.sections &&
//             Array.isArray(page.sections)
//           ) {
//             page.sections.forEach((section) => {
//               const testimonials = section.data?.testimonials;

//               readTestimonials(testimonials);
//             });
//           }
//         }

//         const uniqueJuryMembers = Array.from(
//           new Map(
//             foundJuryMembers.map((member, index) => [
//               member.image ||
//                 `${member.name}-${member.title}-${member.company}-${index}`,
//               member,
//             ])
//           ).values()
//         );

//         console.log(
//           'FOUND JURY MEMBERS:',
//           uniqueJuryMembers
//         );

//         if (mounted) {
//           setJuryMembers(uniqueJuryMembers);
//         }
//       } catch (err) {
//         console.error(
//           'Failed to load jury page:',
//           err
//         );

//         if (mounted) {
//           setError(
//             err instanceof Error
//               ? err.message
//               : 'Failed to load jury page.'
//           );
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     }

//     loadPage();

//     return () => {
//       mounted = false;
//     };
//   }, [slug]);

//   /*
//    * Dynamic badge based on the current Jury page.
//    */
//   const juryBadge =
//     slug === 'jury-healthcare-2026'
//       ? 'Healthcare Jury 2026'
//       : slug === 'jury-digital-genius-2026'
//         ? 'Digital Genius Jury 2026'
//         : 'Jury 2026';

//   /*
//    * Dynamic section heading.
//    */
//   const jurySectionTitle =
//     slug === 'jury-healthcare-2026'
//       ? 'Healthcare Jury Members'
//       : slug === 'jury-digital-genius-2026'
//         ? 'Digital Genius Jury Members'
//         : 'Jury Members';

//   return (
//     <main className="speakers2025-page">
//       {/* HERO */}
//       <section className="speakers2025-hero">
//         <span className="speakers2025-badge">
//           {juryBadge}
//         </span>

//         <h1>{pageTitle}</h1>

//         {pageDescription && (
//           <p>{pageDescription}</p>
//         )}
//       </section>

//       {/* JURY MEMBERS */}
//       <section className="speakers2025-section">
//         <div className="speakers2025-container">

//           {loading && (
//             <div className="speakers2025-loading">
//               Loading jury members...
//             </div>
//           )}

//           {!loading && error && (
//             <div className="speakers2025-error">
//               {error}
//             </div>
//           )}

//           {!loading &&
//             !error &&
//             juryMembers.length > 0 && (
//               <>
//                 <div className="speakers2025-heading">
//                   <span>{juryBadge}</span>

//                   <h2>{jurySectionTitle}</h2>
//                 </div>

//                 <div className="speakers2025-grid">
//                   {juryMembers.map(
//                     (member, index) => (
//                       <article
//                         className="speaker2025-card"
//                         key={`${member.name}-${member.image || index}`}
//                       >
//                         <div className="speaker2025-avatar">
//                           <img
//                             src={
//                               member.image ||
//                               FALLBACK_JURY_IMAGE
//                             }
//                             alt={member.name}
//                             loading="lazy"
//                             onError={(event) => {
//                               event.currentTarget.src =
//                                 FALLBACK_JURY_IMAGE;
//                             }}
//                           />
//                         </div>

//                         <div className="speaker2025-info">
//                           <h3>{member.name}</h3>

//                           {member.title && (
//                             <p>{member.title}</p>
//                           )}

//                           {member.company && (
//                             <strong>
//                               {member.company}
//                             </strong>
//                           )}
//                         </div>
//                       </article>
//                     )
//                   )}
//                 </div>
//               </>
//             )}

//           {!loading &&
//             !error &&
//             juryMembers.length === 0 && (
//               <div className="speakers2025-error">
//                 No jury data found for this page.
//               </div>
//             )}

//         </div>
//       </section>
//     </main>
//   );
// }

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

const FALLBACK_JURY_IMAGE = '/assets/team/1.jpg';

const HEALTHCARE_JURY_SLUG = 'jury-healthcare-2026';
const DIGITAL_GENIUS_JURY_SLUG = 'jury-digital-genius-2026';

export default function JuryPage() {
  const params = useParams();

  const rawSlug = params?.slug;

  const slug: string = Array.isArray(rawSlug)
    ? rawSlug[0] || ''
    : typeof rawSlug === 'string'
      ? rawSlug
      : '';

  const [juryMembers, setJuryMembers] = useState<JuryMember[]>([]);
  const [pageTitle, setPageTitle] = useState('Jury 2026');
  const [pageDescription, setPageDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    /*
     * Only the Healthcare Jury URL is used on the website.
     *
     * Both APIs are loaded from this single page:
     *
     * /api/v1/website/pages/jury-healthcare-2026
     * /api/v1/website/pages/jury-digital-genius-2026
     */
    if (slug !== HEALTHCARE_JURY_SLUG) {
      setLoading(false);
      setError('Jury page not found.');
      return;
    }

    let mounted = true;

    async function loadJuryPages() {
      try {
        setLoading(true);
        setError('');
        setJuryMembers([]);
        setPageTitle('Jury 2026');
        setPageDescription('');

        // console.log('Fetching Healthcare Jury API:', HEALTHCARE_JURY_SLUG);

        // console.log('Fetching Digital Genius Jury API:', DIGITAL_GENIUS_JURY_SLUG);

        /*
         * Call BOTH APIs.
         */
        const [healthcareResponse, digitalGeniusResponse] = await Promise.all([
          fetchWebsitePageBySlug(HEALTHCARE_JURY_SLUG),
          fetchWebsitePageBySlug(DIGITAL_GENIUS_JURY_SLUG),
        ]);

        // console.log('HEALTHCARE JURY API RESPONSE:', healthcareResponse);

        // console.log('DIGITAL GENIUS JURY API RESPONSE:', digitalGeniusResponse);

        if (!mounted) {
          return;
        }

        const healthcarePage = healthcareResponse?.data as JuryPageData | undefined;

        const digitalGeniusPage = digitalGeniusResponse?.data as JuryPageData | undefined;

        if (!healthcarePage && !digitalGeniusPage) {
          throw new Error('No Jury page data found.');
        }

        /*
         * Use the Healthcare page as the main page
         * for title and description.
         */
        if (healthcarePage?.title) {
          setPageTitle(healthcarePage.title);
        }

        if (healthcarePage?.shortDescription) {
          setPageDescription(healthcarePage.shortDescription);
        }

        const foundJuryMembers: JuryMember[] = [];

        /*
         * Helper function to read testimonials
         * from either API response.
         */
        const readTestimonials = (testimonials: unknown) => {
          if (!Array.isArray(testimonials)) {
            return;
          }

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
        };

        /*
         * Helper function to extract Jury members
         * from one complete API page.
         */
        const extractJuryMembers = (page: JuryPageData | undefined) => {
          if (!page) {
            return;
          }

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
           * 2. Fallback to sections
           */
          if (page.sections && Array.isArray(page.sections)) {
            page.sections.forEach((section) => {
              const testimonials = section.data?.testimonials;

              readTestimonials(testimonials);
            });
          }
        };

        /*
         * Extract Healthcare Jury members.
         */
        extractJuryMembers(healthcarePage);

        /*
         * Extract Digital Genius Jury members.
         */
        extractJuryMembers(digitalGeniusPage);

        // console.log('ALL JURY MEMBERS BEFORE DEDUPE:', foundJuryMembers);

        /*
         * Remove exact duplicate members.
         *
         * Do NOT dedupe only by author/name because
         * multiple Jury members may have the same role.
         */
        const uniqueJuryMembers = Array.from(
          new Map(
            foundJuryMembers.map((member, index) => [
              member.image || `${member.name}-${member.title}-${member.company}-${index}`,
              member,
            ]),
          ).values(),
        );

        // console.log('ALL JURY MEMBERS AFTER DEDUPE:', uniqueJuryMembers);

        if (mounted) {
          setJuryMembers(uniqueJuryMembers);
        }
      } catch (err) {
        // console.error('Failed to load Jury pages:', err);

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
  }, [slug]);

  return (
    <main className="speakers2025-page">
      {/* HERO */}
      <section className="speakers2025-hero">
        <span className="speakers2025-badge">Jury 2026</span>

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
                <span>Jury 2026</span>

                <h2>Independent Jury for Digital Genius Awards 2026</h2>
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
            <div className="speakers2025-error">No jury data found.</div>
          )}
        </div>
      </section>
    </main>
  );
}
