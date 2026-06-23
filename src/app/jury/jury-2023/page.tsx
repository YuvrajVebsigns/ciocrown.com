'use client';

export default function Jury2023() {
  const juryMembers = [
    {
      id: 1,
      name: 'Jury Member 1',
      title: 'Position Title',
      company: 'Company Name',
      image: '/assets/team/Anoop-Mathur.png',
      linkedIn: 'https://linkedin.com',
    },
    {
      id: 2,
      name: 'Jury Member 2',
      title: 'Position Title',
      company: 'Company Name',
      image: '/assets/team/Anoop-Mathur.png',
      linkedIn: 'https://linkedin.com',
    },
    {
      id: 3,
      name: 'Jury Member 3',
      title: 'Position Title',
      company: 'Company Name',
      image: '/assets/team/Anoop-Mathur.png',
      linkedIn: 'https://linkedin.com',
    },
    {
      id: 4,
      name: 'Jury Member 4',
      title: 'Position Title',
      company: 'Company Name',
      image: '/assets/team/Anoop-Mathur.png',
      linkedIn: 'https://linkedin.com',
    },
    {
      id: 5,
      name: 'Jury Member 5',
      title: 'Position Title',
      company: 'Company Name',
      image: '/assets/team/Anoop-Mathur.png',
      linkedIn: 'https://linkedin.com',
    },
  ];

  return (
    <div className="jury-page">
      <div className="jury-container">
        <h1 className="jury-title">JURY 2023</h1>
        <div className="jury-grid">
          {juryMembers.map((member) => (
            <div key={member.id} className="jury-card">
              <div className="jury-hexagon">
                <img src={member.image} alt={member.name} className="jury-image" />
              </div>
              <div className="jury-info">
                <h3 className="jury-name">{member.name}</h3>
                <p className="jury-position">{member.title}</p>
                <p className="jury-company">{member.company}</p>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jury-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
