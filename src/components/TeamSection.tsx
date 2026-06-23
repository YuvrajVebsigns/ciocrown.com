'use client';

import { useEffect, useRef } from 'react';

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>('.about-animate'));

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
      item.style.setProperty('--delay', `${index * 120}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-crown-section" ref={sectionRef}>
      <div className="about-crown-container">
        <div className="about-crown-layout">
          <div className="about-crown-left about-animate">
            <span className="about-crown-subtitle">ABOUT CIO CROWN</span>

            <h2 className="about-crown-title">
              Where India’s
              <br />
              Technology Leaders
              <br />
              Connect.
            </h2>

            <div className="about-crown-stats">
              <div>
                <strong>Pan-India</strong>
                <span>CIOs & CTOs</span>
              </div>

              <div>
                <strong>ICT</strong>
                <span>Engagement</span>
              </div>
            </div>
          </div>

          <div className="about-crown-right">
            <div className="about-crown-card about-animate">
              <span className="about-crown-card-count">01</span>
              <p>
                CIO Crown is a meticulously curated gathering of pan-India CIOs, CTOs and Corporate
                Technology Professionals looking to explore, discover, and collaborate through
                highly interactive formats designed to provide a deeper understanding of new
                emerging technologies and leadership issues that are needed to excel in their
                workplace.
              </p>
            </div>

            <div className="about-crown-card about-animate">
              <span className="about-crown-card-count">02</span>
              <p>
                Hosted by CORE Media, CIO Crown is the only independent event on the international
                ICT engagement circuit. It is a mecca of ICT engagement for the CIO and ICT vendor
                community with sessions designed to be more relevant, engaging and interactive for
                delegates and vendors.
              </p>
            </div>

            <div className="about-crown-card about-animate">
              <span className="about-crown-card-count">03</span>
              <p>
                A uniquely conceptualised pioneering platform, CIO Crown seeks to bring together the
                sharpest corporate CIO minds from India for Technology, Business, Brand and
                Community Engagement.
              </p>
            </div>

            <div className="about-crown-card about-animate">
              <span className="about-crown-card-count">04</span>
              <p>
                It is also a destination to develop and strengthen relationships with powerful peers
                and industry leaders in an environment built for discussions, relationship building
                and advancing business conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
