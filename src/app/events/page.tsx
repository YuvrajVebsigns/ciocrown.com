// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// // import { ArrowUpRight } from 'lucide-react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { useEffect, useState } from 'react';
// import { fetchWebsiteEvents, WebsiteEvent } from '@/services/events.service';

// function getStoredWebsiteId(): string | undefined {
//   if (typeof window === 'undefined') return undefined;

//   try {
//     const raw = window.localStorage.getItem('websiteAuth');
//     if (!raw) return undefined;

//     const parsed: unknown = JSON.parse(raw);
//     if (typeof parsed === 'object' && parsed !== null && 'websiteId' in parsed) {
//       const websiteId = (parsed as { websiteId?: unknown }).websiteId;
//       return typeof websiteId === 'string' ? websiteId : undefined;
//     }
//   } catch {
//     return undefined;
//   }

//   return undefined;
// }

// // type EventItem = {
// //   category: string;
// //   title: string;
// //   image: string;
// // };

// export default function EventsPage() {
//   const [events, setEvents] = useState<WebsiteEvent[] | null>(null);

//   useEffect(() => {
//     fetchWebsiteEvents(getStoredWebsiteId())
//       .then((data) => {
//         if (Array.isArray(data) && data.length) setEvents(data);
//         else setEvents([]);
//       })
//       .catch(() => setEvents([]));
//   }, []);

//   const heroMediaRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-right',
//     initialTransform: 'translateX(40px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const heroContentRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-left',
//     initialTransform: 'translateX(-40px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const leftRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-left',
//     initialTransform: 'translateX(-40px)',
//     threshold: 0.12,
//     once: false,
//   });

//   const rightRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-right',
//     initialTransform: 'translateX(40px)',
//     threshold: 0.12,
//     once: false,
//   });

//   return (
//     <>
//       <section className="blog-hero">
//         <div className="blog-hero-media" ref={heroMediaRef}>
//           <Image
//             src="/assets/blogs/blog-1.webp"
//             alt="Events"
//             fill
//             priority
//             className="blog-hero-image"
//           />
//         </div>

//         <div className="blog-hero-overlay"></div>

//         <div className="blog-hero-content" ref={heroContentRef}>
//           <h1>Event Calendar</h1>

//           <div className="blog-breadcrumb">
//             <Link href="/" className="blog-breadcrumb-home">
//               🏦 Home
//             </Link>

//             <span>&gt;</span>

//             <p>Events</p>
//           </div>
//         </div>
//       </section>

//       <section className="project-section">
//         <div className="project-container">
//           {/* <div className="project-heading">
//             <h2 className="project-title">
//               Our Work <span>Highlights.</span>
//             </h2>
//           </div> */}

//           {/* <div className="project-top-bar">
//             <h6 className="project-subtitle">⬢ Custom Event Platforms</h6>

//             <Link href="/events" className="talk-btn">
//               <span>More Events</span>

//               <div className="talk-btn-icon">
//                 <ArrowUpRight size={18} />
//               </div>
//             </Link>
//           </div> */}

//           <div className="project-grid">
//             {events === null ? (
//               <div className="events-loading">Loading events…</div>
//             ) : events.length === 0 ? (
//               <div className="events-empty">No events available at the moment.</div>
//             ) : (
//               events.map((item: WebsiteEvent, index: number) => {
//                 const title = String(item.title ?? item.name ?? item.eventName ?? 'Event');
//                 const slug =
//                   item.id && typeof item.id === 'string'
//                     ? String(item.id)
//                     : title
//                         .toLowerCase()
//                         .replace(/\s+/g, '-')
//                         .replace(/[^a-z0-9-]/g, '');

//                 const imageSrc = String(
//                   item.image ?? item.heroImage ?? item.banner ?? '/assets/blogs/blog-1.webp',
//                 );
//                 const category = String(item.category ?? 'Events');

//                 return (
//                   <Link key={slug} href={`/events/${slug}`}>
//                     <div className="project-card" ref={index === 0 ? leftRef : rightRef}>
//                       <div className="project-image-wrap">
//                         <Image src={imageSrc} alt={title} fill className="project-image" />
//                       </div>

//                       <div className="project-overlay">
//                         <span className="project-category">{category}</span>

//                         <div className="project-content">
//                           <h3>{title}</h3>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Duplicate the two events below (downside) with animations */}
//       {/* <section className="project-section">
//         <div className="project-container">
//           <div className="project-top-bar">
//             <h6 className="project-subtitle">⬢ More Events</h6>
//           </div>

//           <div className="project-grid">
//             {Array.from({ length: 2 }, () => customEvents)
//               .flat()
//               .map((item, index) => {
//                 const variant = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';

//                 return <AnimatedEventCard key={`${item.title}-dup-${index}`} item={item} index={index} variant={variant} />;
//               })}
//           </div>
//         </div>
//       </section> */}
//     </>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import {
  fetchWebsiteEvents,
  getWebsiteEventImage,
  type WebsiteEvent,
} from '@/services/events.service';

function getStoredWebsiteId(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  try {
    const raw = window.localStorage.getItem('websiteAuth');
    if (!raw) return undefined;

    const parsed: unknown = JSON.parse(raw);

    if (typeof parsed === 'object' && parsed !== null && 'websiteId' in parsed) {
      const websiteId = (parsed as { websiteId?: unknown }).websiteId;
      return typeof websiteId === 'string' ? websiteId : undefined;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function getEventTitle(event: WebsiteEvent): string {
  return event.title || 'Event';
}

function getEventSlug(event: WebsiteEvent): string {
  if (event.slug) return event.slug;
  if (event.id) return event.id;

  return getEventTitle(event)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function getEventCategory(event: WebsiteEvent): string {
  return event.type || event.category || 'Events';
}

type EventFilter = 'all' | 'online' | 'offline';

function getEventMode(event: WebsiteEvent): Exclude<EventFilter, 'all'> | null {
  const rawEvent = event as Record<string, unknown>;
  const onlineValue = rawEvent.isOnline ?? rawEvent.online;

  if (onlineValue === true) return 'online';
  if (onlineValue === false) return 'offline';

  const values = [
    rawEvent.type,
    rawEvent.category,
    rawEvent.mode,
    rawEvent.eventType,
    rawEvent.format,
    rawEvent.location,
  ]
    .map((value) => (typeof value === 'string' ? value.toLowerCase() : ''))
    .filter(Boolean)
    .join(' ');

  if (/online|virtual|webinar|remote|digital/.test(values)) return 'online';
  if (/offline|physical|in-person|in person|onsite|on-site/.test(values)) return 'offline';

  return null;
}

export default function EventsPage() {
  const [events, setEvents] = useState<WebsiteEvent[] | null>(null);
  const [eventFilter, setEventFilter] = useState<EventFilter>('all');

  useEffect(() => {
    fetchWebsiteEvents(getStoredWebsiteId())
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setEvents([]);
      });
  }, []);

  const heroMediaRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-right',
    initialTransform: 'translateX(40px)',
    threshold: 0.12,
    once: false,
  });

  const heroContentRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  const leftRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  const rightRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-right',
    initialTransform: 'translateX(40px)',
    threshold: 0.12,
    once: false,
  });

  const filteredEvents =
    events?.filter((event) => eventFilter === 'all' || getEventMode(event) === eventFilter) ?? null;

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-media" ref={heroMediaRef}>
          <Image
            src="/assets/blogs/blog-1.webp"
            alt="Events"
            fill
            priority
            className="blog-hero-image"
          />
        </div>

        <div className="blog-hero-overlay" />

        <div className="blog-hero-content" ref={heroContentRef}>
          <h1>Event Calendar</h1>

          <div className="blog-breadcrumb">
            <Link href="/" className="blog-breadcrumb-home">
              <Image
                src="/assets/home/home.png" // Replace with your image path
                alt="Home"
                width={38}
                height={48}
                className="blog-home-icon"
              />
              <span>Home</span>
            </Link>

            <span>&gt;</span>

            <p>Event</p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-container">
          <div className="event-filters" role="group" aria-label="Filter events">
            {(['all', 'online', 'offline'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                className={`event-filter-button ${eventFilter === filter ? 'active' : ''}`}
                aria-pressed={eventFilter === filter}
                onClick={() => setEventFilter(filter)}
              >
                {filter === 'all' ? 'All' : filter === 'online' ? 'Online' : 'Offline'}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {events === null ? (
              // <div className="events-loading">Loading events…</div>
              <div className="speakers2025-loader-wrapper">
                <div className="speakers2025-loader"></div>
              </div>
            ) : filteredEvents?.length === 0 ? (
              <div className="events-empty">No events available at the moment.</div>
            ) : (
              filteredEvents?.map((item, index) => {
                const title = getEventTitle(item);
                const slug = getEventSlug(item);
                const imageSrc = getWebsiteEventImage(item);
                const category = getEventCategory(item);

                return (
                  <Link key={item.id || slug} href={`/events/${slug}`}>
                    <div className="project-card" ref={index % 2 === 0 ? leftRef : rightRef}>
                      <div className="project-image-wrap">
                        <Image
                          src={imageSrc}
                          alt={title}
                          fill
                          className="project-image"
                          unoptimized={imageSrc.startsWith('http')}
                        />
                      </div>

                      <div className="project-overlay">
                        <span className="project-category">{category}</span>

                        <div className="project-content">
                          <h3>{title}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
