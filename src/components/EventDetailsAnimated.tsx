'use client';

import Link from 'next/link';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { downloadWebsiteReport } from '@/services/reports.service';
import { ApiError } from '@/services/apiFetch';
import { fetchWebsitePageBySlug, type WebsitePage } from '@/services/pages.service';

type Section = {
  heading: string;
  body: string;
};

type AgendaItem = {
  time?: string;
  title?: string;
  speaker?: string;
  description?: string;
};

type FeaturedEvent = {
  title: string;
  author: string;
  date: string;
  comments?: string;
  heroImage: string;
  badge?: string;
  summary?: string;
  sections: Section[];
  quote?: string;
  quoteAuthor?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getAgendaPdfUrl(page: WebsitePage): string | null {
  const blocks = [...(page.content?.blocks ?? []), ...(page.sections ?? [])];

  for (const block of blocks) {
    if (!isRecord(block.data) || !Array.isArray(block.data.testimonials)) {
      continue;
    }

    for (const testimonial of block.data.testimonials) {
      if (!isRecord(testimonial)) continue;

      if (typeof testimonial.quote !== 'string') continue;

      try {
        const url = new URL(testimonial.quote.trim());

        if (url.protocol === 'https:' && url.pathname.toLowerCase().endsWith('.pdf')) {
          return url.toString();
        }
      } catch {
        continue;
      }
    }
  }

  return null;
}

function AnimatedEventSection({ section }: { section: Section }) {
  const sectionRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section key={section.heading} className="event-details-section" ref={sectionRef}>
      <h2>{section.heading}</h2>

      <p>{section.body}</p>
    </section>
  );
}

export default function EventDetailsAnimated({
  featuredEvent,
  readableSlug,
}: {
  featuredEvent: FeaturedEvent;
  readableSlug: string;
  agenda: AgendaItem[];
}) {
  const [isDownloading, setIsDownloading] = useState(false);

  const [showDownloadForm, setShowDownloadForm] = useState(false);

  const [agendaPdfUrl, setAgendaPdfUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+91',
    companyName: '',
    designation: '',
    industry: '',
  });

  const [formError, setFormError] = useState('');

  const heroRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-right',
    initialTransform: 'translateX(-24px)',
  });

  const metaRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(24px)',
  });

  const quoteRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in',
    initialTransform: 'translateY(24px)',
  });

  /* =========================================================
     LOAD AGENDA PDF
  ========================================================= */

  useEffect(() => {
    const loadAgendaPdf = async () => {
      try {
        const response = await fetchWebsitePageBySlug('agenda');

        if (!response.success || !response.data) {
          setAgendaPdfUrl(null);
          return;
        }

        const pdfUrl = getAgendaPdfUrl(response.data);

        setAgendaPdfUrl(pdfUrl);
      } catch (error) {
        // console.error('Unable to load agenda PDF:', error);
        setAgendaPdfUrl(null);
      }
    };

    loadAgendaPdf();
  }, []);

  /* =========================================================
     DOWNLOAD AGENDA
  ========================================================= */

  const handleDownloadAgenda = () => {
    // Do not open the form when no agenda exists.
    if (!agendaPdfUrl) {
      return;
    }

    setFormError('');
    setShowDownloadForm(true);
  };

  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     DOWNLOAD FORM SUBMIT
  ========================================================= */

  const handleDownloadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDownloading || !agendaPdfUrl) {
      return;
    }

    setFormError('');

    try {
      setIsDownloading(true);

      const downloadUrl = await downloadWebsiteReport({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        countryCode: formData.countryCode,
        companyName: formData.companyName,
        designation: formData.designation,
        industry: formData.industry,

        // Fixed report ID for the event agenda
        reportId: '6abf755696e36c5cdb48933d',
      });

      setShowDownloadForm(false);

      window.open(downloadUrl, '_blank');
    } catch (error: unknown) {
      if (error instanceof ApiError && error.statusCode === 404) {
        setShowDownloadForm(false);
        window.open(agendaPdfUrl, '_blank');
      } else {
        setFormError('Unable to download the agenda. Please try again.');
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <div className="event-details-hero" ref={heroRef}>
        <div className="event-details-image-wrap">
          <Image
            src={featuredEvent.heroImage}
            alt={featuredEvent.title}
            fill
            priority
            className="event-details-image"
            unoptimized={featuredEvent.heroImage.startsWith('http')}
          />
        </div>

        <div className="event-details-headline">
          <span className="event-details-badge">{featuredEvent.badge}</span>

          <h1>{featuredEvent.title}</h1>

          <div className="event-details-breadcrumb">
            <Link href="/">Home</Link>

            <span>&gt;</span>

            <Link href="/events">Events</Link>

            <span>&gt;</span>

            <p>{readableSlug}</p>
          </div>
        </div>
      </div>

      {/* =========================================================
          META
      ========================================================= */}

      <div className="event-details-meta-grid" ref={metaRef}>
        <div className="event-details-meta-card">
          <span className="event-details-meta-label">Authored by</span>

          <strong>{featuredEvent.author}</strong>
        </div>

        <div className="event-details-meta-card">
          <span className="event-details-meta-label">Date Released</span>

          <strong>{featuredEvent.date}</strong>
        </div>
      </div>

      {/* =========================================================
          ARTICLE
      ========================================================= */}

      <article className="event-details-article">
        {featuredEvent.summary && <p className="event-details-intro">{featuredEvent.summary}</p>}

        {/* =========================================================
            AGENDA

            Agenda is displayed ONLY when a valid PDF exists
            in the backend.
        ========================================================= */}

        {agendaPdfUrl && (
          <section className="event-details-agenda">
            <div className="event-details-agenda-heading">
              <h2>Agenda</h2>

              <div className="event-details-agenda-actions">
                <button
                  type="button"
                  onClick={handleDownloadAgenda}
                  disabled={isDownloading}
                  className="event-details-download-btn"
                >
                  Download Agenda
                </button>
              </div>
            </div>

            {/* =====================================================
                AGENDA TABLE

                Currently hidden. Keep this container if the table
                is required later.
            ===================================================== */}

            <div id="event-details-agenda-table" className="event-details-agenda-table-wrap">
              {/* Agenda table can be enabled here later if required. */}
            </div>

            {/* =====================================================
                AGENDA PDF
            ===================================================== */}

            <div id="event-details-agenda-pdf" className="event-agenda-inline">
              <div className="event-agenda-inline-header">
                <h3>Event Agenda</h3>
              </div>

              <iframe
                className="event-agenda-pdf-viewer"
                src={`${agendaPdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="CIO CROWN 2026 Event Agenda"
              />
            </div>
          </section>
        )}

        {/* =========================================================
            QUOTE
        ========================================================= */}

        {featuredEvent.quote && (
          <div className="event-details-quote" ref={quoteRef}>
            <div className="event-details-quote-mark">“</div>

            <p>{featuredEvent.quote}</p>

            <span>— {featuredEvent.quoteAuthor}</span>
          </div>
        )}

        {/* =========================================================
            SECTIONS
        ========================================================= */}

        {featuredEvent.sections.map((section) => (
          <AnimatedEventSection key={section.heading} section={section} />
        ))}
      </article>

      {/* =========================================================
          DOWNLOAD FORM MODAL

          This modal can only exist when agendaPdfUrl exists.
      ========================================================= */}

      {showDownloadForm && agendaPdfUrl && (
        <div
          className="event-download-modal-overlay"
          onClick={() => {
            if (!isDownloading) {
              setShowDownloadForm(false);
            }
          }}
        >
          <div className="event-download-modal" onClick={(e) => e.stopPropagation()}>
            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="event-download-modal-close"
              onClick={() => {
                if (!isDownloading) {
                  setShowDownloadForm(false);
                }
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* HEADER */}

            <div className="event-download-modal-header">
              <span>Agenda</span>

              <h2>Download Event Agenda</h2>

              <p>Please fill in your details to download the complete agenda.</p>
            </div>

            {/* FORM */}

            <form className="event-download-form" onSubmit={handleDownloadSubmit}>
              <div className="event-download-form-grid">
                {/* FIRST NAME */}

                <div className="event-download-field">
                  <label htmlFor="firstName">
                    First Name <span>*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                {/* LAST NAME */}

                <div className="event-download-field">
                  <label htmlFor="lastName">
                    Last Name <span>*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="event-download-field">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="event-download-field">
                  <label htmlFor="phoneNumber">
                    Phone Number <span>*</span>
                  </label>

                  <div className="event-download-phone">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleFormChange}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                      <option value="+65">+65</option>
                    </select>

                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phoneNumber}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>

                {/* COMPANY */}

                <div className="event-download-field">
                  <label htmlFor="companyName">
                    Company Name <span>*</span>
                  </label>

                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                {/* DESIGNATION */}

                <div className="event-download-field">
                  <label htmlFor="designation">
                    Designation <span>*</span>
                  </label>

                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    placeholder="Enter designation"
                    value={formData.designation}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                {/* INDUSTRY */}

                <div className="event-download-field event-download-field-full">
                  <label htmlFor="industry">
                    Industry <span>*</span>
                  </label>

                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Please select an industry</option>

                    <option value="Automotive">Automotive</option>

                    <option value="Banking">Banking</option>

                    <option value="BFSI">BFSI</option>

                    <option value="Healthcare">Healthcare</option>

                    <option value="IT / ITES">IT / ITES</option>

                    <option value="Manufacturing">Manufacturing</option>

                    <option value="Retail / FMCG">Retail / FMCG</option>

                    <option value="Telecom">Telecom</option>

                    <option value="Media & Entertainment">Media & Entertainment</option>

                    <option value="Pharma">Pharma</option>

                    <option value="Logistics">Logistics</option>

                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* ERROR */}

              {formError && <p className="event-download-form-error">{formError}</p>}

              {/* SUBMIT */}

              <button type="submit" className="event-download-submit" disabled={isDownloading}>
                {isDownloading ? 'Preparing Download...' : 'Download Agenda'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
