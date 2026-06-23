'use client';

import { CheckCircle, Users, Award, Search, ClipboardCheck, MessageSquare } from 'lucide-react';

const processSteps = [
  'Combining data on achievements till date.',
  'Analyzing involvement in associations and industry groups.',
  'Random sampling of social media engagement.',
  'Inputs from executives on key achievements in the last 12 months.',
  'Leadership assessment for interpersonal skills and emotional intelligence.',
  'Juror interviews to prepare the final winners list.',
];

const eligibility = [
  'Resident of India at the time of application.',
  'Applicants reporting directly to CIO/CDO/ICT Leader/Senior ICT Decision Maker can apply.',
  'Minimum 10 years of full-time work experience.',
  'Application only once per applicant is permissible.',
  'Currently employed within a company or organization.',
  'Valid documentation of current work experience and personal details.',
  'Required permission from current employer organization.',
];

export default function ProcessPage() {
  return (
    <main className="process-page">
      <section className="process-hero">
        <div className="process-container">
          <span className="process-badge">PROCESS</span>

          <h1>LeaderNext Award Selection Process</h1>

          <p>
            LeaderNext is a transformative platform dedicated to honouring the brightest technology
            minds of India who are poised to take on future CXO roles.
          </p>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container process-grid">
          <div className="process-card large-card">
            <Award className="process-icon" size={38} />
            <h2>About LeaderNext</h2>
            <p>
              India’s leading CIOs and business leaders play a key role in selecting the LeaderNext
              award winners. The jury represents rich leadership experience backed by technical and
              digital expertise.
            </p>
            <p>
              Jury members define the selection criteria, interview candidates, evaluate leadership
              potential, and approve the final winners.
            </p>
          </div>

          <div className="process-card highlight-card">
            <Users className="process-icon" size={38} />
            <h2>Evaluation Focus</h2>
            <p>
              Candidates are evaluated based on career achievements, professional expertise,
              leadership capability, and readiness to join the C-Suite.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <div className="section-heading">
            <span>How It Works</span>
            <h2>Complete Evaluation Process</h2>
          </div>

          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-item" key={step}>
                <div className="timeline-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-content">
                  <Search size={22} />
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section eligibility-section">
        <div className="process-container">
          <div className="section-heading">
            <span>Eligibility Criteria</span>
            <h2>LeaderNext 2026 Applicants</h2>
          </div>

          <div className="eligibility-grid">
            {eligibility.map((item) => (
              <div className="eligibility-card" key={item}>
                <CheckCircle size={22} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-cta">
        <div className="process-container cta-box">
          <ClipboardCheck size={42} />
          <h2>Ready to Apply for LeaderNext 2026?</h2>
          <p>
            Make sure your documentation, employer approval, and professional achievements are ready
            before submitting your application.
          </p>
          <a href="/register" className="process-btn">
            Apply Now <MessageSquare size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
