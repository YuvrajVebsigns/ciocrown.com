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
          {/* TITLE */}
          {/* <h2 className="founder-title">
            Building Connections in a<br />
            <span>Digital World.</span>
          </h2> */}

          {/* DESCRIPTION */}
          <p className="founder-description">
            At CORE Media, our journey has always been driven by a simple belief—meaningful
            connections create meaningful business outcomes. For over 14 years, we have been
            bringing together technology leaders, enterprises, innovators, and solution providers,
            creating platforms that inspire collaboration, recognize excellence, and accelerate
            business growth across the ICT ecosystem.
          </p>
          <p className="founder-description">
            {' '}
            Every brand, platform, and initiative we have built reflects our customer-first
            philosophy. From proprietary events and executive communities to bespoke marketing
            programs and digital engagement solutions, our focus has remained constant: helping our
            clients deliver the right message to the right audience through experiences that are
            relevant, engaging, and result-oriented.
          </p>
          <p className="founder-description">
            In today&apos;s fast-evolving digital landscape, expectations continue to rise,
            challenging us to innovate with purpose. This commitment has enabled us to create
            community-driven platforms that foster meaningful relationships, facilitate strategic
            conversations, and generate measurable business impact.
          </p>
          <p className="founder-description">
            Our success is built on long-term partnerships founded on trust, collaboration, and
            shared growth. We believe that every interaction should create value beyond business
            transactions, strengthening relationships that endure and opportunities that inspire
            progress.
          </p>
          <p className="founder-description">
            As we continue to evolve, our commitment remains unwavering—to create ideas that matter,
            build communities that thrive, and empower businesses to connect, grow, and lead with
            confidence.
          </p>
          <p className="founder-description">
            Partner with CORE Media, and together, let&apos;s connect the dots to create the future
            of business.
          </p>
          {/* <p className="founder-description">
            Thank you for being part of our journey. We look forward to shaping the future of
            technology engagement together.
          </p> */}

          {/* QUOTE */}
          {/* <blockquote className="founder-quote">
            <p>
              “We innovate to build relationships that deliver exceptional results, every single
              time.”
            </p>
          </blockquote> */}

          {/* <div className="founder-readmore-wrap">
            <Link href="/aboutus" className="founder-readmore-btn">
              Read more
            </Link>
          </div> */}

          {/* AUTHOR */}
          {/* <div className="founder-author">
            <h3>Anoop Mathur</h3>
            <span>Founder, CORE MEDIA</span>
          </div> */}

          {/* BUTTON */}
          <Link href="/#contact-section" className="founder-btn">
            <span>Partner With Us</span>
            <div className="founder-btn-icon">
              <ArrowUpRight size={22} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
