// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// // import { useRef } from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// export default function FoundersMessage() {
//   const sectionRef = useScrollAnimation<HTMLDivElement>({
//     animationClass: 'animate-fade-in-up',
//     initialTransform: 'translateY(40px)',
//   });

//   return (
//     <section ref={sectionRef} className="founder-message-section">
//       <div className="founder-message-container">
//         {/* LEFT SIDE IMAGE */}
//         <div className="founder-image-wrapper">
//           <div className="founder-image-frame">
//             <Image
//               src="/assets/team/Anoop-Mathur.png"
//               alt="Anoop Mathur - Founder"
//               width={500}
//               height={500}
//               className="founder-image"
//               priority
//             />
//           </div>
//         </div>

//         {/* RIGHT SIDE CONTENT */}
//         <div className="founder-content">
//           {/* LABEL */}
//           <div className="founder-label">
//             <span className="founder-label-icon">♟</span>
//             <span className="founder-label-text">Founder’s Message</span>
//           </div>

//           {/* TITLE */}
//           {/* <h2 className="founder-title">
//             Building Connections in a<br />
//             <span>Digital World.</span>
//           </h2> */}

//           {/* DESCRIPTION */}
//           <p className="founder-description">
//             For 13 years, CORE Media has innovated at the intersection of ICT and marketing. We
//             don’t just deliver messages; we build bespoke ecosystems that drive impactful results
//             for India’s leading stakeholders.
//           </p>

//           {/* QUOTE */}
//           <blockquote className="founder-quote">
//             <p>
//               “We innovate to build relationships that deliver exceptional results, every single
//               time.”
//             </p>
//           </blockquote>

//           {/* AUTHOR */}
//           <div className="founder-author">
//             <h3>Anoop Mathur</h3>
//             <span>Founder, CORE MEDIA</span>
//           </div>

//           {/* BUTTON */}
//           <Link href="/#contact-section" className="founder-btn">
//             <span>Partner With Us</span>
//             <div className="founder-btn-icon">
//               <ArrowUpRight size={22} />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FoundersMessage() {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
  });

  return (
    <section ref={sectionRef} className="founder-message-section">
      <div className="founder-message-container">
        {/* LEFT SIDE IMAGE */}
        <div className="founder-image-wrapper">
          <div className="founder-image-frame">
            <Image
              src="/assets/team/AnoopMathur.png"
              alt="Anoop Mathur - Founder"
              width={500}
              height={500}
              className="founder-image"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="founder-content">
          {/* LABEL */}
          <div className="founder-label">
            <span className="founder-label-icon">♟</span>
            <span className="founder-label-text">Founder’s Message</span>
          </div>
          <br />

          {/* DESCRIPTION */}
          <p className="founder-description">
            <strong>Anoop Mathur</strong>, a seasoned entrepreneur and visionary, has been at the
            forefront of the technology and media landscape for over 17 years.
          </p>

          <p className="founder-description">
            As the Founder of <strong>CORE MEDIA - Centre Of Recognition &amp; Excellence</strong>,
            operating since June 2012 in Mumbai, India, he has pioneered a multi-platform new-age
            niche media company.
          </p>

          <p className="founder-description">
            <strong>CORE MEDIA</strong> focuses on curating proprietary marketing event brands with
            a dedicated emphasis on ICT Enterprises, CIO Community, and Technology Start-ups.
          </p>

          <p className="founder-description">
            The organization&apos;s reach extends to more than 100,000 ICT Decision Makers,
            influencing the B2B technology space with innovative media and marketing products. (
            <a href="https://www.core-mediagroup.com/" target="_blank" rel="noopener noreferrer">
              www.core-mediagroup.com
            </a>
            )
          </p>

          <p className="founder-description">
            In addition to his role at CORE Media, Anoop is the Founder and Managing Partner of{' '}
            <strong>CXO Capital</strong>, a dynamic entity based in Dubai, United Arab Emirates.
            Established in August 2023, CXO Capital specializes in providing market intelligence,
            advisory, consulting services, marketing strategies, and bespoke engagements and events
            tailored for Information and Communications Technology (ICT) enterprises in the Middle
            East and Africa regions. (
            <a href="https://www.cxo-capital.com/" target="_blank" rel="noopener noreferrer">
              www.cxo-capital.com
            </a>
            )
          </p>

          <p className="founder-description">
            He is also the Founder &amp; Managing Partner of{' '}
            <strong>ANOOP MATHUR CAPITAL LLP</strong> since June 2021, a privately owned boutique
            wealth management family office in Mumbai, India. Specializing in building diversified
            portfolios encompassing early-stage start-ups, real estate, and capital markets, ANOOP
            MATHUR CAPITAL leverages a profound network cultivated over 24 years of corporate,
            media, and technology entrepreneurship and investments.
          </p>

          <p className="founder-description">
            His commitment to fostering entrepreneurship extends to being a Private Investor in
            various ventures, including roles as a Partner at <strong>Cloud Surfer LLP</strong>, a
            new-age training academy for on-demand cloud certification courses, and a Director on
            the Board of <strong>Rainmaker360</strong>, a niche channel partner engagement services
            company.
          </p>

          <p className="founder-description">
            Anoop has been actively involved in contributing to the startup ecosystem. As a Private
            Investor at <strong>100X.VC</strong>, <strong>Indian Angel Network</strong>,{' '}
            <strong>Inflection Point Ventures</strong>, and <strong>CIO Angel Network</strong>, he
            supports emerging ventures aiming to be the first source of funding for technology
            entrepreneurs at the seed stage.
          </p>

          <p className="founder-description">
            Furthermore, he has played a pivotal role in transforming the B2B technology startup
            ecosystem through <strong>B2B 1K Ventures (Brand Hub Marketing)</strong>, a brand
            capital that connects early-stage technology companies with brand investments, positive
            guidance, and industry CIO or CTO connects.
          </p>

          <p className="founder-description">
            With a track record of over two decades, Anoop continues to be a driving force in the
            realms of entrepreneurship, wealth management, and technology innovation, leaving an
            indelible mark on the global business landscape.
          </p>

          {/* AUTHOR */}
          <div className="founder-author">
            <h3>Anoop Mathur</h3>
            <span>Founder, CORE MEDIA</span>
          </div>
          <br />
          {/* BUTTON */}
          <Link href="/#contact-section" className="talk-btn">
            <span>Partner With Us</span>

            <div className="talk-btn-icon">
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
