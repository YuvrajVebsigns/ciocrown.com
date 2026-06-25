// 'use client';

// import Link from 'next/link';
// import { ArrowUpRight, Handshake, Sparkles, Trophy } from 'lucide-react';

// export default function Partners2025() {
//   return (
//     <main className="partners-page">
//       <section className="partners-hero">
//         <div className="partners-container">
//           <span className="partners-badge">PARTNERS 2025</span>
//           <h1>Our Strategic Partners 2025</h1>
//           <p>
//             Showcasing the partners who are helping us create a stronger, future-ready leadership
//             platform for technology and business excellence.
//           </p>
//         </div>
//       </section>

//       <section className="partners-section">
//         <div className="partners-container partners-grid">
//           <div className="partners-card">
//             <Handshake size={38} />
//             <h2>Powerful Partnerships</h2>
//             <p>Building meaningful collaborations with leading organizations and innovators.</p>
//           </div>

//           <div className="partners-card">
//             <Sparkles size={38} />
//             <h2>Future-Ready Vision</h2>
//             <p>Supporting leaders who are shaping the future of enterprise technology.</p>
//           </div>

//           <div className="partners-card">
//             <Trophy size={38} />
//             <h2>Leadership Impact</h2>
//             <p>Recognizing partnership excellence and shared commitment to industry growth.</p>
//           </div>
//         </div>
//       </section>

//       <section className="partners-cta">
//         <div className="partners-container partners-cta-box">
//           <h2>Partner With LeaderNext</h2>
//           <p>Be part of a premium platform celebrating technology leadership and innovation.</p>
//           <Link href="/contact" className="partners-btn">
//             Contact Us <ArrowUpRight size={18} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const premiumPartners = [
  { name: 'Anunta', logo: '/assets/partner2026/partner_logo_2.png' },
  { name: 'Freshworks', logo: '/assets/partner2026/freshworks.webp' },
  { name: 'Ingram', logo: '/assets/partners/2025/ingram.png' },
  { name: 'Juniper', logo: '/assets/partners/2025/juniper.png' },
  { name: 'Neurealm', logo: '/assets/partners/2025/neurealm.png' },
  { name: 'NTT', logo: '/assets/partners/2025/ntt.png' },
  { name: 'Oracle', logo: '/assets/partners/2025/oracle.png' },
];

const associatePartners = [
  { name: 'AdStringO', logo: '/assets/partners/2025/adstringo.png' },
  { name: 'Archon', logo: '/assets/partners/2025/archon.png' },
  { name: 'Barracuda', logo: '/assets/partners/2025/barracuda.png' },
  { name: 'CBY', logo: '/assets/partners/2025/cby.png' },
  { name: 'COMnet', logo: '/assets/partners/2025/comnet.png' },
  { name: 'Datadog', logo: '/assets/partners/2025/datadog.png' },
  { name: 'Digital Track', logo: '/assets/partners/2025/digital-track.png' },
  { name: 'IceWarp', logo: '/assets/partners/2025/icewarp.png' },
  { name: 'Karnival', logo: '/assets/partners/2025/karnival.png' },
  { name: 'NeoSoft', logo: '/assets/partners/2025/neosoft.png' },
  { name: 'New Era', logo: '/assets/partners/2025/new-era.png' },
  { name: 'Rubrik', logo: '/assets/partners/2025/rubrik.png' },
  { name: 'ServiceNow', logo: '/assets/partners/2025/servicenow.png' },
  { name: 'SymphonyAI', logo: '/assets/partners/2025/symphony-ai.png' },
  { name: 'Tata Communication', logo: '/assets/partners/2025/tata-communication.png' },
  { name: 'Zarthi', logo: '/assets/partners/2025/zarthi.png' },
];

export default function Partners2025() {
  return (
    <main className="partners-page">
      <section className="partners-hero">
        <div className="partners-container">
          <span className="partners-badge">PARTNERS 2025</span>

          <h1>Our Strategic Partners 2025</h1>

          <p>
            Showcasing the partners who are helping us create a stronger, future-ready leadership
            platform for technology and business excellence.
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container">
          <div className="partners-heading">
            <span>Premium Partners</span>
            <h2>Driving Enterprise Excellence</h2>
          </div>

          <div className="partners-logo-grid premium-partners-grid">
            {premiumPartners.map((partner) => (
              <div className="partner-logo-card" key={partner.name}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={110}
                  className="partner-logo"
                />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>

          <div className="partners-heading associate-heading">
            <span>Associate Partners</span>
            <h2>Enabling Innovation & Collaboration</h2>
          </div>

          <div className="partners-logo-grid associate-partners-grid">
            {associatePartners.map((partner) => (
              <div className="partner-logo-card" key={partner.name}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={110}
                  className="partner-logo"
                />
                <p>{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-cta">
        <div className="partners-container partners-cta-box">
          <h2>Partner With CIO Crown</h2>
          <p>Be part of a premium platform celebrating technology leadership and innovation.</p>

          <Link href="/#contact-section" className="partners-btn">
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
