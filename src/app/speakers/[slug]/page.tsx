// 'use client';

// const keynoteSpeakers = [
//   {
//     name: 'Ashdin Doctor',
//     title: 'The Habit Coach & Author',
//     company: '',
//     image: '/assets/speakers/Ashdin.png',
//   },
//   {
//     name: 'Rajesh Srivastava',
//     title: 'Author',
//     company: '',
//     image: '/assets/speakers/Rajesh.png',
//   },
// ];
// const speakers = [
//   {
//     name: 'Aarti Singh',
//     title: 'Enterprise CIO',
//     company: 'Mahindra Group',
//     image: '/assets/speakers/Aarti.png',
//   },
//   {
//     name: 'Anoop Mathur',
//     title: 'Founder',
//     company: 'CORE Media',
//     image: '/assets/speakers/Anoop.png',
//   },
//   {
//     name: 'Ankur Chavan',
//     title: 'Senior Director IT',
//     company: 'Biocon',
//     image: '/assets/speakers/2025/ankur-chavan.png',
//   },
//   {
//     name: 'Ashu Kakkar',
//     title: 'CIO',
//     company: 'L&T Technology Services',
//     image: '/assets/speakers/2025/ashu-kakkar.png',
//   },
//   {
//     name: 'Chandresh Dedhia',
//     title: 'Head of IT',
//     company: 'Zepto',
//     image: '/assets/speakers/2025/chandresh-dedhia.png',
//   },
//   {
//     name: 'Dr. Nitin Paranjape',
//     title: 'Productivity Maverick',
//     company: '',
//     image: '/assets/speakers/2025/dr-nitin-paranjape.png',
//   },
//   {
//     name: 'Harsh Jha',
//     title: 'Head Of IT',
//     company: 'Nuvama Group',
//     image: '/assets/speakers/2025/harsh-jha.png',
//   },
//   {
//     name: 'Hilal Khan',
//     title: 'CIO',
//     company: 'Honda Cars India',
//     image: '/assets/speakers/2025/hilal-khan.png',
//   },
//   {
//     name: 'Jyothirlatha B',
//     title: 'CTO',
//     company: 'Godrej Capital',
//     image: '/assets/speakers/2025/jyothirlatha-b.png',
//   },
//   {
//     name: 'Kunal Mehta',
//     title: 'CIO',
//     company: 'Arvind Fashions',
//     image: '/assets/speakers/2025/kunal-mehta.png',
//   },
//   {
//     name: 'Kunal Pande',
//     title: 'Partner',
//     company: 'KPMG',
//     image: '/assets/speakers/2025/kunal-pande.png',
//   },
//   {
//     name: 'Pankaj Khare',
//     title: 'CIO',
//     company: 'IndusInd Bank',
//     image: '/assets/speakers/2025/pankaj-khare.png',
//   },
//   {
//     name: 'Pavan Deevi',
//     title: 'Senior Vice President',
//     company: 'Broadridge India',
//     image: '/assets/speakers/2025/pavan-deevi.png',
//   },
//   {
//     name: 'Rajesh Choudhary',
//     title: 'CIO',
//     company: 'CSB Bank',
//     image: '/assets/speakers/2025/rajesh-choudhary.png',
//   },
//   {
//     name: 'Ramesh Narayanaswamy',
//     title: 'CTO',
//     company: 'Aditya Birla Capital',
//     image: '/assets/speakers/2025/ramesh-narayanaswamy.png',
//   },
//   {
//     name: 'Sankaranarayanan Raghavan',
//     title: 'Chief Technology and Data Officer',
//     company: 'IndiaFirst Life',
//     image: '/assets/speakers/2025/sankaranarayanan-raghavan.png',
//   },
//   {
//     name: 'Sudeep Agrawal',
//     title: 'CIO',
//     company: 'Reliance Infra',
//     image: '/assets/speakers/2025/sudeep-agrawal.png',
//   },
// ];

// const partnerSpeakers = [
//   {
//     name: 'Ajit Aloz',
//     title: 'President Sales - APAC',
//     company: 'Anunta',
//     image: '/assets/speakers/2025/ajit-aloz.png',
//   },
//   {
//     name: 'Ankesh Kumar',
//     title: 'Director - Chief Of Marketing',
//     company: 'Ingram Micro',
//     image: '/assets/speakers/2025/ankesh-kumar.png',
//   },
//   {
//     name: 'Balaji Uppili',
//     title: 'President & Chief Business Officer, India & UK',
//     company: 'Neurealm',
//     image: '/assets/speakers/2025/balaji-uppili.png',
//   },
//   {
//     name: 'Dr. Mohan Chandrasekaran',
//     title: 'Founder & CEO',
//     company: 'AdStringO',
//     image: '/assets/speakers/2025/dr-mohan-chandrasekaran.png',
//   },
//   {
//     name: 'Ekansh Sood',
//     title: 'VP - Sales',
//     company: 'Zarthi',
//     image: '/assets/speakers/2025/ekansh-sood.png',
//   },
//   {
//     name: 'Murad Wagh',
//     title: 'Area VP, Solution Consulting',
//     company: 'ServiceNow',
//     image: '/assets/speakers/2025/murad-wagh.png',
//   },
//   {
//     name: 'Nikhil Parab',
//     title: 'Lead Strategic Enterprise Engagement',
//     company: 'Nvidia',
//     image: '/assets/speakers/2025/nikhil-parab.png',
//   },
//   {
//     name: 'Sajan Paul',
//     title: 'Area VP & Managing Director, India & SAARC',
//     company: 'Juniper Networks',
//     image: '/assets/speakers/2025/sajan-paul.png',
//   },
//   {
//     name: 'Saravanan Palanivel',
//     title: 'Head - Cloud Engineering India',
//     company: 'Oracle',
//     image: '/assets/speakers/2025/saravanan-palanivel.png',
//   },
//   {
//     name: 'Sreekanth Krishnan',
//     title: 'Director, Client Partner',
//     company: 'NTT DATA',
//     image: '/assets/speakers/2025/sreekanth-krishnan.png',
//   },
//   {
//     name: 'Vish Mehta',
//     title: 'Regional Head of Product Management',
//     company: 'Freshworks',
//     image: '/assets/speakers/2025/vish-mehta.png',
//   },
//   {
//     name: 'Vijay Iyer',
//     title: 'Services BU Director and Regional Manager- West',
//     company: 'DigitalTrack Solutions',
//     image: '/assets/speakers/2025/vijay-iyer.png',
//   },
//   {
//     name: 'Yrieix Garnier',
//     title: 'VP - Product',
//     company: 'Datadog',
//     image: '/assets/speakers/2025/yrieix-garnier.png',
//   },
// ];

// function SpeakerCard({
//   name,
//   title,
//   company,
//   image,
// }: {
//   name: string;
//   title: string;
//   company: string;
//   image?: string;
// }) {
//   return (
//     <article className="speaker2025-card">
//       <div className="speaker2025-avatar">
//         {image ? <img src={image} alt={name} /> : <span>{name.charAt(0)}</span>}
//       </div>

//       <div className="speaker2025-info">
//         <h3>{name}</h3>
//         <p>{title}</p>
//         {company ? <strong>{company}</strong> : null}
//       </div>
//     </article>
//   );
// }

// export default function SpeakersPage() {
//   return (
//     <main className="speakers2025-page">
//       <section className="speakers2025-hero">
//         <span className="speakers2025-badge">Speakers 2025</span>
//         <h1>
//           Digital Genius Awards &<span> Healthcare Honors 2025</span>
//         </h1>
//         <p>Meet the keynote speakers, industry leaders, and partner speakers.</p>
//       </section>

//       <section className="speakers2025-section">
//         <div className="speakers2025-container">
//           <div className="speakers2025-heading">
//             <span>Keynote Speakers</span>
//             <h2>Featured Voices</h2>
//           </div>

//           <div className="speakers2025-grid keynote-grid">
//             {keynoteSpeakers.map((speaker) => (
//               <SpeakerCard key={speaker.name} {...speaker} />
//             ))}
//           </div>

//           <div className="speakers2025-heading">
//             <span>Speakers</span>
//             <h2>Industry Leaders</h2>
//           </div>

//           <div className="speakers2025-grid">
//             {speakers.map((speaker) => (
//               <SpeakerCard
//                 key={speaker.name}
//                 {...speaker}
//                 image={`/assets/speakers/2025/${speaker.name
//                   .toLowerCase()
//                   .replaceAll(' ', '-')
//                   .replaceAll('.', '')}.png`}
//               />
//             ))}
//           </div>

//           <div className="speakers2025-heading">
//             <span>Partner Speakers</span>
//             <h2>Partner Perspectives</h2>
//           </div>

//           <div className="speakers2025-grid">
//             {partnerSpeakers.map((speaker) => (
//               <SpeakerCard
//                 key={speaker.name}
//                 {...speaker}
//                 image={`/assets/speakers/2025/${speaker.name
//                   .toLowerCase()
//                   .replaceAll(' ', '-')
//                   .replaceAll('.', '')}.png`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

const FALLBACK_SPEAKER_IMAGE = '/assets/team/1.jpg';

const keynoteSpeakers = [
  {
    name: 'Ashdin Doctor',
    title: 'The Habit Coach & Author',
    company: '',
    image: '/assets/speakers/Ashdin.png',
  },
  {
    name: 'Rajesh Srivastava',
    title: 'Author',
    company: '',
    image: '/assets/speakers/Rajesh.png',
  },
];

const speakers = [
  {
    name: 'Aarti Singh',
    title: 'Enterprise CIO',
    company: 'Mahindra Group',
    image: '/assets/speakers/Aarti.png',
  },
  {
    name: 'Anoop Mathur',
    title: 'Founder',
    company: 'CORE Media',
    image: '/assets/speakers/Anoop.png',
  },
  {
    name: 'Ankur Chavan',
    title: 'Senior Director IT',
    company: 'Biocon',
    image: '/assets/speakers/2025/ankur-chavan.png',
  },
  {
    name: 'Ashu Kakkar',
    title: 'CIO',
    company: 'L&T Technology Services',
    image: '/assets/speakers/2025/ashu-kakkar.png',
  },
  {
    name: 'Chandresh Dedhia',
    title: 'Head of IT',
    company: 'Zepto',
    image: '/assets/speakers/2025/chandresh-dedhia.png',
  },
  {
    name: 'Dr. Nitin Paranjape',
    title: 'Productivity Maverick',
    company: '',
    image: '/assets/speakers/2025/dr-nitin-paranjape.png',
  },
  {
    name: 'Harsh Jha',
    title: 'Head Of IT',
    company: 'Nuvama Group',
    image: '/assets/speakers/2025/harsh-jha.png',
  },
  {
    name: 'Hilal Khan',
    title: 'CIO',
    company: 'Honda Cars India',
    image: '/assets/speakers/2025/hilal-khan.png',
  },
  {
    name: 'Jyothirlatha B',
    title: 'CTO',
    company: 'Godrej Capital',
    image: '/assets/speakers/2025/jyothirlatha-b.png',
  },
  {
    name: 'Kunal Mehta',
    title: 'CIO',
    company: 'Arvind Fashions',
    image: '/assets/speakers/2025/kunal-mehta.png',
  },
  {
    name: 'Kunal Pande',
    title: 'Partner',
    company: 'KPMG',
    image: '/assets/speakers/2025/kunal-pande.png',
  },
  {
    name: 'Pankaj Khare',
    title: 'CIO',
    company: 'IndusInd Bank',
    image: '/assets/speakers/2025/pankaj-khare.png',
  },
  {
    name: 'Pavan Deevi',
    title: 'Senior Vice President',
    company: 'Broadridge India',
    image: '/assets/speakers/2025/pavan-deevi.png',
  },
  {
    name: 'Rajesh Choudhary',
    title: 'CIO',
    company: 'CSB Bank',
    image: '/assets/speakers/2025/rajesh-choudhary.png',
  },
  {
    name: 'Ramesh Narayanaswamy',
    title: 'CTO',
    company: 'Aditya Birla Capital',
    image: '/assets/speakers/2025/ramesh-narayanaswamy.png',
  },
  {
    name: 'Sankaranarayanan Raghavan',
    title: 'Chief Technology and Data Officer',
    company: 'IndiaFirst Life',
    image: '/assets/speakers/2025/sankaranarayanan-raghavan.png',
  },
  {
    name: 'Sudeep Agrawal',
    title: 'CIO',
    company: 'Reliance Infra',
    image: '/assets/speakers/2025/sudeep-agrawal.png',
  },
];

const partnerSpeakers = [
  {
    name: 'Ajit Aloz',
    title: 'President Sales - APAC',
    company: 'Anunta',
    image: '/assets/speakers/2025/ajit-aloz.png',
  },
  {
    name: 'Ankesh Kumar',
    title: 'Director - Chief Of Marketing',
    company: 'Ingram Micro',
    image: '/assets/speakers/2025/ankesh-kumar.png',
  },
  {
    name: 'Balaji Uppili',
    title: 'President & Chief Business Officer, India & UK',
    company: 'Neurealm',
    image: '/assets/speakers/2025/balaji-uppili.png',
  },
  {
    name: 'Dr. Mohan Chandrasekaran',
    title: 'Founder & CEO',
    company: 'AdStringO',
    image: '/assets/speakers/2025/dr-mohan-chandrasekaran.png',
  },
  {
    name: 'Ekansh Sood',
    title: 'VP - Sales',
    company: 'Zarthi',
    image: '/assets/speakers/2025/ekansh-sood.png',
  },
  {
    name: 'Murad Wagh',
    title: 'Area VP, Solution Consulting',
    company: 'ServiceNow',
    image: '/assets/speakers/2025/murad-wagh.png',
  },
  {
    name: 'Nikhil Parab',
    title: 'Lead Strategic Enterprise Engagement',
    company: 'Nvidia',
    image: '/assets/speakers/2025/nikhil-parab.png',
  },
  {
    name: 'Sajan Paul',
    title: 'Area VP & Managing Director, India & SAARC',
    company: 'Juniper Networks',
    image: '/assets/speakers/2025/sajan-paul.png',
  },
  {
    name: 'Saravanan Palanivel',
    title: 'Head - Cloud Engineering India',
    company: 'Oracle',
    image: '/assets/speakers/2025/saravanan-palanivel.png',
  },
  {
    name: 'Sreekanth Krishnan',
    title: 'Director, Client Partner',
    company: 'NTT DATA',
    image: '/assets/speakers/2025/sreekanth-krishnan.png',
  },
  {
    name: 'Vish Mehta',
    title: 'Regional Head of Product Management',
    company: 'Freshworks',
    image: '/assets/speakers/2025/vish-mehta.png',
  },
  {
    name: 'Vijay Iyer',
    title: 'Services BU Director and Regional Manager- West',
    company: 'DigitalTrack Solutions',
    image: '/assets/speakers/2025/vijay-iyer.png',
  },
  {
    name: 'Yrieix Garnier',
    title: 'VP - Product',
    company: 'Datadog',
    image: '/assets/speakers/2025/yrieix-garnier.png',
  },
];

type SpeakerCardProps = {
  name: string;
  title: string;
  company: string;
  image?: string;
};

function SpeakerCard({ name, title, company, image }: SpeakerCardProps) {
  const [imageSrc, setImageSrc] = useState(image || FALLBACK_SPEAKER_IMAGE);

  useEffect(() => {
    setImageSrc(image || FALLBACK_SPEAKER_IMAGE);
  }, [image]);

  function handleImageError() {
    if (imageSrc !== FALLBACK_SPEAKER_IMAGE) {
      setImageSrc(FALLBACK_SPEAKER_IMAGE);
    }
  }

  return (
    <article className="speaker2025-card">
      <div className="speaker2025-avatar">
        <img src={imageSrc} alt={name} loading="lazy" onError={handleImageError} />
      </div>

      <div className="speaker2025-info">
        <h3>{name}</h3>
        <p>{title}</p>

        {company ? <strong>{company}</strong> : null}
      </div>
    </article>
  );
}

export default function SpeakersPage() {
  return (
    <main className="speakers2025-page">
      <section className="speakers2025-hero">
        <span className="speakers2025-badge">Speakers 2025</span>

        <h1>
          Digital Genius Awards &amp;
          <span> Healthcare Honors 2025</span>
        </h1>

        <p>Meet the keynote speakers, industry leaders, and partner speakers.</p>
      </section>

      <section className="speakers2025-section">
        <div className="speakers2025-container">
          <div className="speakers2025-heading">
            <span>Keynote Speakers</span>
            <h2>Featured Voices</h2>
          </div>

          <div className="speakers2025-grid keynote-grid">
            {keynoteSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>

          <div className="speakers2025-heading">
            <span>Speakers</span>
            <h2>Industry Leaders</h2>
          </div>

          <div className="speakers2025-grid">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>

          <div className="speakers2025-heading">
            <span>Partner Speakers</span>
            <h2>Partner Perspectives</h2>
          </div>

          <div className="speakers2025-grid">
            {partnerSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
