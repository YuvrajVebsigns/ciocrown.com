'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function AboutUsSection() {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
  });

  // const cards = [
  //   {
  //     image: '/assets/aboutus/technology-dark.png',
  //     title: 'Data & AI',
  //     description:
  //       'Harnessing data, AI, automation, and agile platforms to continuously sense, respond, and adapt.',
  //   },
  //   {
  //     image: '/assets/aboutus/leadership.png',
  //     title: 'CIO as Orchestrator',
  //     description:
  //       'Integrating technologies, bridging business and IT, and driving innovation at enterprise scale.',
  //   },
  //   {
  //     image: '/assets/aboutus/winner.png',
  //     title: 'Business Growth',
  //     description: 'Moving beyond efficiency to measurable business impact and value creation.',
  //   },
  //   {
  //     image: '/assets/aboutus/recognized.png',
  //     title: 'Agility & Resilience',
  //     description:
  //       'Architecting digital foundations that enable foresight, adaptability, security, and trust.',
  //   },
  //   {
  //     image: '/assets/aboutus/learn.png',
  //     title: 'Future-Ready Enterprise',
  //     description:
  //       'Building intelligent platforms, adaptive workplaces, and scalable digital capabilities.',
  //   },
  // ];

  return (
    <section ref={sectionRef} className="aboutus-section theme-section">
      <div className="theme-bg-orb theme-orb-one" />
      <div className="theme-bg-orb theme-orb-two" />

      <div className="aboutus-container theme-container">
        <div className="aboutus-heading theme-heading">
          <div className="aboutus-label">
            <Image
              src="/assets/icon.png"
              alt="Theme 2025"
              width={20}
              height={20}
              className="aboutus-label-icon"
            />
            <span className="aboutus-label-text">THEME 2025</span>
          </div>
          <br />
          <h4 className="aboutus-title theme-title">
            Orchestrating the Intelligent Enterprise
            <br />
            <span>Moving the Growth Needle</span>
          </h4>
        </div>

        <div className="theme-content-card">
          <p>
            In a world defined by relentless disruption, enterprises can no longer rely solely on
            digital transformation—they must evolve into intelligent enterprises. These are
            organizations that harness the full power of data, AI, automation, and agile platforms
            to continuously sense, respond, and adapt to change while driving meaningful business
            growth.
          </p>

          <p>
            “Orchestrating the Intelligent Enterprise” is not just about implementing smart
            technologies—it is about strategically aligning people, processes, and platforms to
            amplify outcomes. It requires a unified vision, enterprise-wide collaboration, and the
            ability to make real-time, data-driven decisions.
          </p>

          <p>
            The CIO and Digital Leader plays the pivotal role of chief orchestrator—integrating
            technologies, bridging business and IT, and driving innovation at scale.
          </p>

          <p>
            This theme, “Moving the Growth Needle,” underscores the shift from operational
            efficiency to measurable business impact. Growth today depends on smarter customer
            engagement, intelligent automation, predictive operations, and innovation fuelled by
            emerging technologies like GenAI, edge computing, and cloud-native architectures.
          </p>

          <p>
            At the centre of this transformation stands the CIO and Digital Leader, empowered and
            expected to architect the digital fabric that enables agility, foresight, and
            resilience.
          </p>

          <p>
            This year, CIO Crown 2025 will bring together visionary CIOs, industry leaders, and
            transformation experts to explore the new playbook for enterprise growth—led by
            intelligent systems and strategic orchestration.
          </p>

          <p className="theme-final-note">
            The question is no longer what technology can do—but how CIOs and Digital Leaders can
            harness its full potential to lead with intelligence, purpose, and speed for business
            value.
          </p>
        </div>

        {/* <div className="aboutus-grid theme-grid">
          {cards.map((card, index) => (
            <div key={card.title} className={`aboutus-card theme-card theme-stagger-${index + 1}`}>
              <div className="aboutus-image-wrapper theme-icon-wrap">
                <img src={card.image} alt={card.title} className="aboutus-image theme-icon" />
              </div>

              <h3 className="aboutus-card-title">{card.title}</h3>
              <p className="aboutus-card-description">{card.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
