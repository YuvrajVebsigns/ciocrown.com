'use client';

import Link from 'next/link';
import { ArrowUpRight, Handshake, Sparkles, Trophy } from 'lucide-react';

export default function Partners2024() {
  return (
    <main className="partners-page">
      <section className="partners-hero">
        <div className="partners-container">
          <span className="partners-badge">PARTNERS 2024</span>
          <h1>Our Strategic Partners 2024</h1>
          <p>
            Honouring the partners who contributed to strengthening the 2024 edition with their
            support, credibility, and industry leadership.
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container partners-grid">
          <div className="partners-card">
            <Handshake size={38} />
            <h2>Industry Support</h2>
            <p>Collaborations that helped elevate the platform and expand its reach.</p>
          </div>

          <div className="partners-card">
            <Sparkles size={38} />
            <h2>Innovation Network</h2>
            <p>Partners who enabled meaningful conversations around technology leadership.</p>
          </div>

          <div className="partners-card">
            <Trophy size={38} />
            <h2>Successful Edition</h2>
            <p>Acknowledging the organizations that helped make the 2024 edition memorable.</p>
          </div>
        </div>
      </section>

      <section className="partners-cta">
        <div className="partners-container partners-cta-box">
          <h2>Become a Partner</h2>
          <p>Collaborate with us to shape the next generation of digital leadership.</p>
          <Link href="/contact" className="partners-btn">
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
