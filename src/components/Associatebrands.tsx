'use client';

import { useEffect, useState } from 'react';

function getTimeLeft() {
  const targetDate = new Date('2026-10-08T00:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function AssociateBrandsPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <main className="associate-brands-page">
      <section className="event-schedule-section">
        <div className="event-schedule-container">
          <div className="event-schedule-heading">
            <span>Event Schedule</span>
            {/* <h2>Save The Date</h2> */}
            <p>October 8 & 9, 2026</p>
          </div>

          <div className="event-countdown-card">
            {countdownItems.map((item) => (
              <div className="event-countdown-box" key={item.label}>
                <strong>{String(item.value).padStart(2, '0')}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="core-about-section">
        <div className="core-about-container">
          <div className="core-about-heading">
            <h2>About CORE Media</h2>
          </div>

          <div className="core-about-text">
            <p>
              CORE Media (Centre of Recognition &amp; Excellence) is a multi-platform new age niche
              media company that owns and operates proprietary marketing event brands in India with
              a focus on ICT Enterprises, CIO Community &amp; Technology Startups.
            </p>

            <p>
              Our products in all have a combined total reach of around 36,000 ICT Decision Makers
              who procure ICT products &amp; services.
            </p>

            <p>
              Our recognized unique brand engagements have touched over 600+ clients over the last
              14 years.
            </p>

            <p>
              CORE Media pioneered both the celebrity CIO engagements and technology startup
              categories.
            </p>

            <p>
              CORE champions B2B IT sellers via the powerful high-touch engagements for growth and
              sales acceleration.
            </p>

            <p>
              CORE Media has the power to influence the end-to-end value chain in the B2B technology
              space with its media &amp; marketing products.
            </p>

            <p>
              Today CORE Media is the highest achieving, most sought-after &amp; fastest-growing IT
              Media &amp; Marketing Company in India within the B2B technology space.
            </p>

            <p className="core-about-highlight">
              We aren&apos;t just a Media Company! We are a Marketing, Branding &amp; Connect
              Company.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
