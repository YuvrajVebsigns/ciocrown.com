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
  { name: 'Ingram', logo: '/assets/partner2026/Ingram.jpg' },
  { name: 'Juniper', logo: '/assets/partner2026/juniper.jpg' },
  { name: 'Neurealm', logo: '/assets/partner2026/neurealm.jpg' },
  // { name: 'NTT', logo: '/assets/partner2026/Ingram.jpg' },
  { name: 'Oracle', logo: '/assets/partner2026/oracle.jpg' },
];

const associatePartners = [
  { name: 'AdStringO', logo: '/assets/partner2026/adstring.jpg' },
  { name: 'Archon', logo: '/assets/partner2026/Archon.webp' },
  { name: 'Barracuda', logo: '/assets/partner2026/Barracuda.webp' },
  // { name: 'CBY', logo: '/assets/partner2026/Ingram.jpg' },
  // { name: 'COMnet', logo: '/assets/partner2026/Ingram.jpgg' },
  { name: 'Datadog', logo: '/assets/partner2026/datadog.jpg' },
  // { name: 'Digital Track', logo: '/assets/partners/2025/digital-track.png' },
  { name: 'IceWarp', logo: '/assets/partner2026/iceWarp.webp' },
  { name: 'Karnival', logo: '/assets/partner2026/karnival.jpg' },
  { name: 'NeoSoft', logo: '/assets/partner2026/partner_3.png' },
  { name: 'New Era', logo: '/assets/partner2026/new era.jpg' },
  { name: 'Rubrik', logo: '/assets/partner2026/Rubrik.webp' },
  { name: 'ServiceNow', logo: '/assets/partner2026/service now.jpg' },
  { name: 'SymphonyAI', logo: '/assets/partner2026/SY.webp' },
  { name: 'Tata Communication', logo: '/assets/partner2026/Tata-Communication.webp' },
  { name: 'Zarthi', logo: '/assets/partner2026/zarthi.jpg' },
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
