'use client';

import Link from 'next/link';
import { ArrowUpRight, Handshake, Sparkles, Trophy } from 'lucide-react';

export default function Partners2023() {
  return (
    <main className="partners-page">
      <section className="partners-hero">
        <div className="partners-container">
          <span className="partners-badge">PARTNERS 2023</span>
          <h1>Our Strategic Partners 2023</h1>
          <p>
            Celebrating the organizations and collaborators who supported our vision and helped make
            the 2023 edition impactful.
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container partners-grid">
          <div className="partners-card">
            <Handshake size={38} />
            <h2>Trusted Collaborations</h2>
            <p>Partners who joined hands to support innovation, leadership, and excellence.</p>
          </div>

          <div className="partners-card">
            <Sparkles size={38} />
            <h2>Shared Vision</h2>
            <p>Working together to build a powerful platform for future technology leaders.</p>
          </div>

          <div className="partners-card">
            <Trophy size={38} />
            <h2>Impactful Journey</h2>
            <p>Recognizing the contribution of partners in making the 2023 edition successful.</p>
          </div>
        </div>
      </section>

      <section className="partners-cta">
        <div className="partners-container partners-cta-box">
          <h2>Partner With Us</h2>
          <p>Join us in building a stronger leadership and technology ecosystem.</p>
          <Link href="/contact" className="partners-btn">
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
