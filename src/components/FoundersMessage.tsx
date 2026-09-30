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
//               src="/assets/team/AnoopMathur.png"
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
//           <br />
//           {/* TITLE */}
//           {/* <h2 className="founder-title">
//             Building Connections in a<br />
//             <span>Digital World.</span>
//           </h2> */}
//           {/* DESCRIPTION */}
//           <p className="founder-description">
//             Anoop Mathur, a seasoned entrepreneur and visionary, has been at the forefront of the
//             technology and media landscape for over 17 years.
//           </p>{' '}
//           <p className="founder-description">
//             As the Founder of CORE MEDIA - Centre Of Recognition & Excellence, operating since June
//             2012 in Mumbai, India, he has pioneered a multi-platform new-age niche media company.
//           </p>
//           {/* QUOTE */}
//           {/* <blockquote className="founder-quote">
//             <p>
//               “We innovate to build relationships that deliver exceptional results, every single
//               time.”
//             </p>
//           </blockquote> */}
//           <div className="founder-readmore-wrap">
//             <Link href="/foundermessage" className="founder-readmore-btn">
//               Read more
//             </Link>
//           </div>
//           <br />
//           {/* AUTHOR */}
//           <div className="founder-author">
//             <h3>Anoop Mathur</h3>
//             <span>Founder, CORE MEDIA</span>
//           </div>
//           <br />
//           {/* BUTTON */}
//           <Link href="/#contact-section" className="talk-btn">
//             <span>Partner With Us</span>

//             <div className="talk-btn-icon">
//               <ArrowUpRight size={18} />
//             </div>
//           </Link>
//           {/* <Link href="/#contact-section" className="founder-btn">
//             <span></span>
//             <div className="talk-btn-icon">
//               <ArrowUpRight size={18} />
//             </div>
//           </Link> */}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FaLinkedinIn } from 'react-icons/fa';

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
            Anoop Mathur, a seasoned entrepreneur and visionary, has been at the forefront of the
            technology and media landscape for over 17 years.
          </p>

          <p className="founder-description">
            As the Founder of CORE MEDIA - Centre Of Recognition & Excellence, operating since June
            2012 in Mumbai, India, he has pioneered a multi-platform new-age niche media company.
          </p>

          {/* READ MORE */}
          <div className="founder-readmore-wrap">
            <Link href="/foundermessage" className="founder-readmore-btn">
              Read more
            </Link>
          </div>

          <br />

          {/* AUTHOR */}
          <div className="founder-author">
            <h3>Anoop Mathur</h3>

            <div className="founder-author-row">
              <span>Founder, CORE MEDIA</span>

              <a
                href="https://www.linkedin.com/in/mathuranoop/"
                className="founder-linkedin-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anoop Mathur on LinkedIn"
              >
                <FaLinkedinIn size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <br />

          {/* ACTION BUTTONS */}
          <div className="founder-action-row">
            {/* PARTNER BUTTON */}
            <Link href="/#contact-section" className="talk-btn">
              <span>Partner With Us</span>

              <div className="talk-btn-icon">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
