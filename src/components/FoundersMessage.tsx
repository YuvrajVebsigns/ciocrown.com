'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FoundersMessage() {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(32px)',
  });

  return (
    <section ref={sectionRef} className="founder-message-section">
      <div className="founder-message-container">
        <div className="founder-content">
          <span className="founder-eyebrow">Founder’s Message</span>

          <h2 className="founder-title">
            Building connections in a <span>digital world.</span>
          </h2>

          <p className="founder-description">
            For 13 years, CORE Media has innovated at the intersection of ICT and marketing. We
            don’t just deliver messages; we build bespoke ecosystems that drive meaningful impact
            for India’s leading stakeholders.
          </p>

          <div className="founder-quote">
            <Quote size={24} />
            <p>
              We innovate to build relationships that deliver exceptional results, every single
              time.
            </p>
          </div>

          <div className="founder-author">
            <div>
              <h3>Anoop Mathur</h3>
              <span>Founder, CORE MEDIA</span>
            </div>

            <Link href="/#contact-section" className="founder-btn">
              Partner With Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="founder-image-wrapper">
          <div className="founder-image-frame">
            <Image
              src="/assets/team/Anoop-Mathur.png"
              alt="Anoop Mathur - Founder"
              width={520}
              height={620}
              className="founder-image"
              priority
            />
          </div>

          <div className="founder-experience-card">
            <strong>13+</strong>
            <span>Years of Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
