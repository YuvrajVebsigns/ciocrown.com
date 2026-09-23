'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function AboutUsSection() {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
  });

  return (
    <section ref={sectionRef} className="aboutus-section theme-section">
      <div className="theme-bg-orb theme-orb-one" />
      <div className="theme-bg-orb theme-orb-two" />

      <div className="aboutus-container theme-container">
        {/* Heading */}
        <div className="aboutus-heading theme-heading">
          <div className="aboutus-label">
            <Image
              src="/assets/icon.png"
              alt="Theme 2026"
              width={20}
              height={20}
              className="aboutus-label-icon"
            />
            <span className="aboutus-label-text">THEME 2026</span>
          </div>

          <br />

          <h4 className="aboutus-title theme-title">
            The Crowned Enterprise:
            <span> AI, Trust &amp; Leadership for the Next Era of Business</span>
          </h4>

          <p className="theme-subtitle">
            Where India&apos;s Technology Visionaries Shape Tomorrow&apos;s Enterprise
          </p>
        </div>

        {/* Main Theme Content */}
        <div className="theme-content-card">
          <h3>The enterprise is being reimagined.</h3>

          <p>
            Artificial Intelligence is no longer an emerging technology—it is the engine of business
            reinvention. Every decision, every customer interaction, every operation, and every
            innovation is being reshaped by intelligent technologies. Yet technology alone is not
            enough. The enterprises that will lead the next decade will be distinguished by
            visionary leadership, trusted digital ecosystems, resilient operations, and the ability
            to translate AI into sustainable business value.
          </p>

          <p>This is the defining moment for the modern CIO.</p>

          <p>
            No longer custodians of technology, today&apos;s CIOs are architects of growth,
            catalysts of innovation, guardians of trust, and strategic partners to the boardroom.
            Their leadership will determine how organizations navigate disruption, unlock new
            business models, strengthen resilience, and build enterprises that are intelligent by
            design.
          </p>

          <p>
            <strong>CIO CROWN 2026</strong> is an exclusive gathering of India&apos;s most
            influential CIOs, CDOs, CISOs, CTOs, Digital Leaders, and senior IT decision-makers.
            Designed as a premier leadership forum, the conference will bring together the brightest
            minds in technology and business to explore the ideas, strategies, and innovations
            shaping the future of the intelligent enterprise.
          </p>

          <p>
            Over the course of the summit, delegates will engage in visionary keynotes,
            thought-provoking executive dialogues, real-world transformation stories, interactive
            leadership panels, and exclusive networking experiences. Every session is curated to
            deliver practical insights, strategic perspectives, and actionable frameworks that
            enable leaders to move confidently from experimentation to enterprise-wide
            transformation.
          </p>

          {/* Conference Focus */}
          <div className="theme-subsection">
            <h3 className="theme-section-title">Conference Focus</h3>

            <ul className="theme-focus-list">
              <li>Building AI-first enterprises that deliver measurable business outcomes</li>
              <li>Establishing trust through cyber resilience, governance, and responsible AI</li>
              <li>Transforming data into competitive intelligence and business advantage</li>
              <li>Modernizing cloud, infrastructure, and digital platforms for the AI era</li>
              <li>Accelerating productivity through intelligent automation and Agentic AI</li>
              <li>
                Driving innovation while balancing risk, compliance, and operational resilience
              </li>
              <li>
                Redefining leadership for an increasingly autonomous and data-driven enterprise
              </li>
              <li>
                Creating future-ready organizations powered by talent, culture, and continuous
                innovation
              </li>
            </ul>
          </div>

          {/* Why Attend */}
          <div className="theme-subsection">
            <h3 className="theme-section-title">Why Attend</h3>

            <p>
              <strong>CIO CROWN 2026</strong> is more than a conference—it is a leadership movement.
            </p>

            <p>
              It is where India&apos;s technology leaders exchange ideas with peers, engage with
              global visionaries, discover breakthrough innovations, and build strategic
              partnerships that accelerate business transformation. Delegates will gain unparalleled
              insights into emerging technologies, proven implementation strategies, and leadership
              practices that are shaping the world&apos;s most successful enterprises.
            </p>
          </div>

          {/* The Crowned Enterprise */}
          <div className="theme-subsection theme-crowned-enterprise">
            <h3 className="theme-section-title">The Crowned Enterprise</h3>

            <p>
              The future belongs to organizations that can combine intelligence with integrity,
              innovation with resilience, and technology with purposeful leadership.
            </p>

            <p>
              The Crowned Enterprise represents more than digital maturity. It symbolizes
              organizations that lead with vision, earn trust through execution, embrace AI
              responsibly, and continuously create value for customers, employees, and stakeholders.
            </p>

            <p>These are the enterprises that will define the next era of business.</p>

            <p>These are the leaders who will shape the future of enterprises.</p>

            <p className="theme-final-note">
              <strong>Welcome to CIO CROWN 2026.</strong>
              <br />
              Where AI, Trust, and Leadership converge to shape the future of the intelligent
              enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
