'use client';

const keynoteSpeakers = [
  {
    name: 'Ashdin Doctor',
    title: 'The Habit Coach & Author',
    company: '',
    image: '/assets/speakers/2025/ashdin-doctor.png',
  },
  {
    name: 'Rajesh Srivastava',
    title: 'Author',
    company: '',
    image: '/assets/speakers/2025/rajesh-srivastava.png',
  },
];

const speakers = [
  { name: 'Aarti Singh', title: 'Enterprise CIO', company: 'Mahindra Group' },
  { name: 'Anoop Mathur', title: 'Founder', company: 'CORE Media' },
  { name: 'Ankur Chavan', title: 'Senior Director IT', company: 'Biocon' },
  { name: 'Ashu Kakkar', title: 'CIO', company: 'L&T Technology Services' },
  { name: 'Chandresh Dedhia', title: 'Head of IT', company: 'Zepto' },
  { name: 'Dr. Nitin Paranjape', title: 'Productivity Maverick', company: '' },
  { name: 'Harsh Jha', title: 'Head Of IT', company: 'Nuvama Group' },
  { name: 'Hilal Khan', title: 'CIO', company: 'Honda Cars India' },
  { name: 'Jyothirlatha B', title: 'CTO', company: 'Godrej Capital' },
  { name: 'Kunal Mehta', title: 'CIO', company: 'Arvind Fashions' },
  { name: 'Kunal Pande', title: 'Partner', company: 'KPMG' },
  { name: 'Pankaj Khare', title: 'CIO', company: 'IndusInd Bank' },
  { name: 'Pavan Deevi', title: 'Senior Vice President', company: 'Broadridge India' },
  { name: 'Rajesh Choudhary', title: 'CIO', company: 'CSB Bank' },
  { name: 'Ramesh Narayanaswamy', title: 'CTO', company: 'Aditya Birla Capital' },
  {
    name: 'Sankaranarayanan Raghavan',
    title: 'Chief Technology and Data Officer',
    company: 'IndiaFirst Life',
  },
  { name: 'Sudeep Agrawal', title: 'CIO', company: 'Reliance Infra' },
];

const partnerSpeakers = [
  { name: 'Ajit Aloz', title: 'President Sales - APAC', company: 'Anunta' },
  { name: 'Ankesh Kumar', title: 'Director - Chief Of Marketing', company: 'Ingram Micro' },
  {
    name: 'Balaji Uppili',
    title: 'President & Chief Business Officer, India & UK',
    company: 'Neurealm (formerly GS Lab | GAVS)',
  },
  { name: 'Dr. Mohan Chandrasekaran', title: 'Founder & CEO', company: 'AdStringO' },
  { name: 'Ekansh Sood', title: 'VP - Sales', company: 'Zarthi' },
  { name: 'Murad Wagh', title: 'Area VP, Solution Consulting', company: 'ServiceNow' },
  { name: 'Nikhil Parab', title: 'Lead Strategic Enterprise Engagement', company: 'Nvidia' },
  {
    name: 'Sajan Paul',
    title: 'Area VP & Managing Director, India & SAARC',
    company: 'Juniper Networks',
  },
  {
    name: 'Saravanan Palanivel',
    title: 'Head - Cloud Engineering India, Infrastructure Services',
    company: 'Oracle',
  },
  { name: 'Sreekanth Krishnan', title: 'Director, Client Partner', company: 'NTT DATA' },
  { name: 'Vish Mehta', title: 'Regional Head of Product Management', company: 'Freshworks' },
  {
    name: 'Vijay Iyer',
    title: 'Services BU Director and Regional Manager- West',
    company: 'DigitalTrack Solutions',
  },
  { name: 'Yrieix Garnier', title: 'VP - Product', company: 'Datadog' },
];

function SpeakerCard({
  name,
  title,
  company,
  image,
}: {
  name: string;
  title: string;
  company: string;
  image?: string;
}) {
  return (
    <article className="speaker2025-card">
      <div className="speaker2025-avatar">
        {image ? <img src={image} alt={name} /> : <span>{name.charAt(0)}</span>}
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
          Digital Genius Awards &<span> Healthcare Honors 2025</span>
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
              <SpeakerCard
                key={speaker.name}
                {...speaker}
                image={`/assets/speakers/2025/${speaker.name
                  .toLowerCase()
                  .replaceAll(' ', '-')
                  .replaceAll('.', '')}.png`}
              />
            ))}
          </div>

          <div className="speakers2025-heading">
            <span>Partner Speakers</span>
            <h2>Partner Perspectives</h2>
          </div>

          <div className="speakers2025-grid">
            {partnerSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                {...speaker}
                image={`/assets/speakers/2025/${speaker.name
                  .toLowerCase()
                  .replaceAll(' ', '-')
                  .replaceAll('.', '')}.png`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
