'use client';

import { useEffect, useState } from 'react';

// const associateBrands = [
//   {
//     name: 'CIO Angel Network',
//     logo: '/assets/Associatedbrands/CAN.png',
//   },
//   {
//     name: 'B2B 1K Ventures',
//     logo: '/assets/Associatedbrands/b2b.png',
//   },
//   {
//     name: 'Brand Three',
//     logo: '/assets/Associatedbrands/CAN.png',
//   },
//   {
//     name: 'Brand Four',
//     logo: '/assets/Associatedbrands/b2b.png',
//   },
//   {
//     name: 'Brand Five',
//     logo: '/assets/Associatedbrands/b2b.png',
//   },
// ];

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
      {/* <section className="associate-brands-hero">
        <div className="associate-brands-container">
          <div className="associate-brands-label">
            <span>⬢</span>
            Associate Brands
          </div>

          <h1>
            Our Trusted <span>Associate Brands</span>
          </h1>
        </div>
      </section> */}

      {/* <section className="associate-brands-section">
        <div className="associate-brands-container">
          <div className="associate-brands-grid">
            {associateBrands.map((brand, index) => (
              <div className="associate-brand-card" key={index}>
                <div className="associate-brand-logo-box">
                  <img src={brand.logo} alt={brand.name} />
                </div>

                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="event-schedule-section">
        <div className="event-schedule-container">
          <div className="event-schedule-heading">
            <span>Event Schedule</span>
            <h2>Save The Date</h2>
            <p>8 October 2026</p>
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
    </main>
  );
}
