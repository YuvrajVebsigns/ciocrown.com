'use client';

import Image from 'next/image';
import type { WebsiteSponsor } from '@/services/sponsors.service';

function getTierClass(tier?: string) {
  if (!tier) return 'event-sponsor-tier-default';
  return `event-sponsor-tier-${tier.toLowerCase()}`;
}

export default function EventSponsorsSection({ sponsors }: { sponsors: WebsiteSponsor[] }) {
  if (sponsors.length === 0) return null;

  const sizeClass =
    sponsors.length === 1 ? 'single' : sponsors.length === 2 ? 'double' : 'multiple';

  return (
    <section
      className={`event-sponsors-section event-sponsors-section--${sizeClass}`}
      aria-labelledby="event-sponsors-heading"
    >
      <div className="event-details-sidebar-card event-sponsors-card">
        <h3 id="event-sponsors-heading">Event Sponsors</h3>
        <p>Our partners supporting this event.</p>

        <div className="event-sponsors-grid">
          {sponsors.map((sponsor) => (
            <article key={sponsor.id} className="event-sponsor-card">
              <div className="event-sponsor-logo-wrap">
                {sponsor.logoUrl ? (
                  <Image
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    width={160}
                    height={56}
                    className="event-sponsor-logo"
                    unoptimized={sponsor.logoUrl.startsWith('http')}
                  />
                ) : (
                  <span className="event-sponsor-logo-fallback" aria-hidden="true">
                    {sponsor.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="event-sponsor-meta">
                <strong className="event-sponsor-name">{sponsor.name}</strong>
                {sponsor.tier ? (
                  <span className={`event-sponsor-tier ${getTierClass(sponsor.tier)}`}>
                    {sponsor.tier}
                  </span>
                ) : null}
                {sponsor.description ? (
                  <p className="event-sponsor-description">{sponsor.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
