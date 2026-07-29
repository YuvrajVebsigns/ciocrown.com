'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      <section className="social-media-section" style={{ padding: '40px 24px' }}>
        <div className="social-media-container">
          <div className="social-media-row">
            <div className="social-media-content">
              <h2>About CIO-Crown</h2>

              <p className="social-media-highlight">
                <strong>Theme 2025:</strong> Orchestrating the Intelligent Enterprise:
                <strong> Moving the Growth Needle</strong>
              </p>

              <p>
                In a world defined by relentless disruption, enterprises can no longer rely solely
                on digital transformation—they must evolve into intelligent enterprises. These are
                organizations that harness the full power of data, artificial intelligence,
                automation, and agile platforms to continuously sense, respond, and adapt to change
                while driving meaningful business growth.
              </p>

              <p>
                <strong>Orchestrating the Intelligent Enterprise</strong> is not just about
                implementing smart technologies—it is about strategically aligning people,
                processes, and platforms to amplify outcomes. It requires a unified vision,
                enterprise-wide collaboration, and the ability to make real-time, data-driven
                decisions. In this evolving landscape, the CIO and Digital Leader plays the pivotal
                role of chief orchestrator, integrating technologies, bridging business and IT, and
                driving innovation at scale.
              </p>

              <p>
                The theme <strong>Moving the Growth Needle</strong> emphasizes the shift from
                operational efficiency to measurable business impact. Growth today depends on
                intelligence through smarter customer engagement, intelligent automation, predictive
                operations, and innovation powered by emerging technologies such as Generative AI,
                edge computing, cloud-native platforms, and advanced analytics.
              </p>

              <p>
                At the centre of this transformation stands the CIO and Digital Leader, empowered to
                architect the digital foundation that enables agility, foresight, and resilience.
                Modern technology leaders are transforming fragmented systems into intelligent
                enterprise platforms, unlocking real-time insights for faster decision-making,
                empowering a future-ready workforce, embedding security and trust by design, and
                driving business innovation with scalable digital capabilities.
              </p>

              <p>
                CIO Crown 2025 brings together visionary CIOs, industry leaders, and digital
                transformation experts to explore the next playbook for enterprise growth through
                intelligent systems and strategic orchestration. The platform showcases how
                forward-thinking organizations are turning intelligence into competitive advantage
                while building scalable engines of sustainable growth.
              </p>

              <p>
                The question is no longer what technology can do—but how CIOs and Digital Leaders
                can harness its full potential to lead with intelligence, purpose, and speed,
                creating measurable business value while moving the growth needle for their
                enterprises.
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
