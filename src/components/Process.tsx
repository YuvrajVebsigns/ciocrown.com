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
          <div className="clients-label">
            <Image
              src="/assets/icon.png"
              alt="CIO Crown"
              width={20}
              height={20}
              className="expertise-label-icon"
            />

            <span className="clients-label-text">DELEGATES PROFILE</span>
          </div>

          {/* <h2 className="delegates-main-title">
            India’s Most Influential
            <span>CIOs & Technology Leaders</span>
          </h2>

          <p className="delegates-description">
            CIO Crown 2025 will see participation from over 200+ CIOs, senior business and
            technology leaders from across India.
          </p> */}
        </div>

        <div className="delegates-layout">
          <div className="delegates-card delegate-animate">
            <span className="delegates-count">200+</span>
            <h3>CIOs & Senior Leaders</h3>
            <p>
              CIO CROWN convenes 200+ CIOs and senior business and technology leaders from across
              India for strategic conversations, peer networking, and insights into the technologies
              shaping enterprise transformation.
            </p>
          </div>

          <div className="delegates-card delegate-animate">
            <span className="delegates-count">Pan-India</span>
            <h3>Key Industry Verticals</h3>
            <p>
              An exclusive gathering of CIOs and ICT Business Leaders from India&apos;s leading
              industries, including BFSI, IT/ITES, Manufacturing, Retail, Healthcare, Telecom,
              Automotive, Logistics, and Media.
            </p>
          </div>

          <div className="delegates-card delegates-card-large delegate-animate">
            <span className="delegates-count">Leadership Forum</span>
            <h3>Forum for Strategic Collaboration</h3>
            <p>
              A trusted platform for technology leaders to explore emerging trends, exchange
              perspectives, and shape impactful business conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
