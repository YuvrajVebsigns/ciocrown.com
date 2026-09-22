'use client';

// import Link from 'next/link';

export default function DelegatesProfilePage() {
  return (
    <main className="delegates-page">
      {/* Hero Section */}
      {/* <section className="delegates-hero">
        <div className="delegates-hero-overlay" />

        <div className="delegates-hero-content">
          <span className="delegates-eyebrow">CIO CROWN 2026</span>

          <h1>Delegates Profile</h1>

          <p>
            CIO CROWN 2026 will see participation from over 200+ CIOs, senior
            business and technology leaders from across India.
          </p>

          <div className="delegates-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Delegates Profile</span>
          </div>
        </div>
      </section> */}

      {/* Delegates Profile Section */}
      <section className="delegates-section">
        <div className="delegates-container">
          <div className="delegates-heading">
            <span className="delegates-label">DELEGATES PROFILE</span>

            <h2>CIO CROWN 2026</h2>

            <p>
              CIO CROWN 2026 will see participation from over 200+ CIOs, Senior business and
              technology leaders from across India. These leaders will come together to explore
              solutions for today’s biggest technological challenges, foster deep collaboration and
              generate new ideas for dealing with the current business environment.
            </p>

            <p>
              These CIOs &amp; ICT Business Leaders will be from all key industry verticals from
              across India ranging from Automotive, Banking, Financial Services, Insurance, IT/ITES,
              Logistics, Manufacturing, Media &amp; Entertainment, Pharma/Healthcare, Retail/FMCG to
              Telecom.
            </p>

            <p>
              These executives invest their time only in forums that help them get the right mix and
              deeper understanding of new technologies and leadership issues. Therefore, CIO Crown
              is high on their list as it is designed to help them in an environment built for
              discussions, updates and for advancing business conversations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
