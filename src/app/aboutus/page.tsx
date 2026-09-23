'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      <section className="social-media-section" style={{ padding: '40px 24px' }}>
        <div className="social-media-container">
          <div className="social-media-row">
            <div className="social-media-content">
              <h2>About CIO CROWN</h2>

              <p>
                CIO Crown is a meticulously curated gathering of pan-India CIOs, CTOs and Corporate
                Technology Professionals looking to explore, discover, and collaborate through
                highly interactive formats designed to provide a deeper understanding of new
                emerging technologies and leadership issues that are needed to excel in their
                workplace.
              </p>

              <p>
                Hosted by CORE Media, CIO Crown is the only independent event on the international
                ICT engagement circuit. It is a mecca of ICT engagement for the CIO and ICT vendor
                community with sessions designed to be more relevant, engaging and interactive for
                delegates and vendors.
              </p>

              <p>
                It creates an atmosphere for conversations around business that continue through the
                event and beyond.
              </p>

              <p>
                A uniquely conceptualised pioneering platform, CIO Crown seeks to bring together the
                sharpest corporate CIO minds from India for Technology, Business, Brand and
                Community Engagement.
              </p>

              <p>
                It is also a destination to develop and strengthen relationships with powerful peers
                and industry leaders in an environment built for discussions, relationship building
                and advancing business conversations.
              </p>

              <div className="social-media-back">
                <Link href="/" className="social-media-back-btn">
                  ← Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
