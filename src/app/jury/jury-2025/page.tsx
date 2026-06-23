'use client';

const juryMembers = [
  {
    id: 1,
    name: 'Sankarson Banerjee',
    title: 'Ex-CIO',
    company: 'RBL Bank',
    image: '/assets/jury/t1.webp',
  },
  {
    id: 2,
    name: 'Sreeji Gopinathan',
    title: 'Ex-Global CIO',
    company: 'Lupin',
    image: '/assets/jury/t2.webp',
  },
  {
    id: 3,
    name: 'Vikas Gadre',
    title: 'Sr. Adjunct Faculty',
    company: 'NMIMS',
    image: '/assets/jury/t3.webp',
  },
];

export default function Jury2025() {
  return (
    <main className="jury-page">
      <section className="jury-hero">
        <div className="jury-container">
          <span className="jury-badge">Independent Jury</span>

          <h1 className="jury-title">
            Digital Genius Awards &<span> Healthcare Honors 2025</span>
          </h1>
        </div>
      </section>

      <section className="jury-section">
        <div className="jury-container">
          <div className="jury-grid">
            {juryMembers.map((member) => (
              <article key={member.id} className="jury-card">
                <div className="jury-image-wrap">
                  <img src={member.image} alt={member.name} className="jury-image" />
                </div>

                <div className="jury-info">
                  <h3 className="jury-name">{member.name}</h3>
                  <p className="jury-position">{member.title}</p>
                  <p className="jury-company">{member.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
