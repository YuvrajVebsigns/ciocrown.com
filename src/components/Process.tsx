'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function CIOPowerListProcess() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>('.delegate-animate'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item, index) => {
      item.style.setProperty('--delay', `${index * 130}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="delegates-section" ref={sectionRef}>
      <div className="delegates-container">
        <div className="delegates-heading delegate-animate">
          <span className="delegates-badge">
            <Image src="/assets/icon.png" alt="Delegates Profile" width={18} height={18} />
            Delegates Profile
          </span>

          <h2 className="delegates-main-title">
            India’s Most Influential
            <span>CIOs & Technology Leaders</span>
          </h2>

          <p className="delegates-description">
            CIO Crown 2025 will see participation from over 200+ CIOs, senior business and
            technology leaders from across India.
          </p>
        </div>

        <div className="delegates-layout">
          <div className="delegates-card delegate-animate">
            <span className="delegates-count">200+</span>
            <h3>CIOs & Senior Leaders</h3>
            <p>
              CIO Crown 2025 will see participation from over 200+ CIOs, Senior business and
              technology leaders from across India. These leaders will come together to explore
              solutions for today’s biggest technological challenges, foster deep collaboration and
              generate new ideas for dealing with the current business environment.
            </p>
          </div>

          <div className="delegates-card delegate-animate">
            <span className="delegates-count">Pan-India</span>
            <h3>Key Industry Verticals</h3>
            <p>
              These CIOs & ICT Business Leaders will be from all key industry verticals from across
              India ranging from Automotive, Banking, Financial Services, Insurance, IT/ITES,
              Logistics, Manufacturing, Media & Entertainment, Pharma/Healthcare, Retail/FMCG to
              Telecom.
            </p>
          </div>

          <div className="delegates-card delegates-card-large delegate-animate">
            <span className="delegates-count">Leadership Forum</span>
            <h3>Designed for Deeper Business Conversations</h3>
            <p>
              These executives invest their time only in forums that help them get the right mix and
              deeper understanding of new technologies and leadership issues. Therefore, CIO Crown
              is high on their list as it is designed to help them in an environment built for
              discussions, updates and for advancing business conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
