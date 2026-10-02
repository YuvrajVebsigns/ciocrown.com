'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Country } from 'react-phone-number-input';
import Link from 'next/link';
import { City, Country as CountryData, State } from 'country-state-city';

import CountryCodeSelect, { getDialCodeFromCountry } from '@/components/CountryCodeSelect';

import { submitAttendeeRegistration } from '@/services/attendees.service';
import { fetchWebsiteEvents } from '@/services/events.service';

/* =========================================================
   TYPES
   ========================================================= */

type EventItem = {
  _id: string;
  name: string;
};

/* =========================================================
   REGISTRATION OPTIONS
   ========================================================= */

const INFORMATION_OPTIONS = [
  'Need More Information',
  'Partnership opportunities',
  'CIO Delegate Registration',
  'Speaker Opportunities',
];

const INDUSTRY_OPTIONS = [
  'Industry Verticals',
  'ASSET MANAGEMENT (AMC)',
  'AUTOMOBILES & AUTO ANCILLARIES',
  'BANKING',
  'CHEMICALS',
  'DIVERSIFIED GROUP',
  'E-COMMERCE',
  'EDUCATION',
  'ENGINEERING',
  'FINANCIAL SERVICES',
  'FMCG',
  'HEALTHCARE & PHARMA',
  'INSURANCE',
  'IT, BPO & ITES',
  'MANUFACTURING',
  'MEDIA & ENTERTAINMENT',
  'NBFC',
  'REAL ESTATE',
  'RETAIL',
  'TELECOM',
  'TRANSPORT & LOGISTICS',
  'TRAVEL & HOSPITALITY',
  'UTILITIES',
  'OTHER',
];

const COUNTRY_OPTIONS = CountryData.getAllCountries()
  .map((country) => country.name)
  .sort((a, b) => a.localeCompare(b));

const ALL_STATES = State.getAllStates();
const ALL_CITIES = City.getAllCities();

const getCountryIsoCode = (countryValue: string) => {
  const normalizedCountry = countryValue.trim();

  if (!normalizedCountry) {
    return '';
  }

  return (
    CountryData.getAllCountries().find(
      (country) => country.name.toLowerCase() === normalizedCountry.toLowerCase(),
    )?.isoCode ?? ''
  );
};

const getStatesForCountry = (countryValue: string) => {
  const countryCode = getCountryIsoCode(countryValue);

  if (!countryCode) {
    return [];
  }

  return ALL_STATES.filter((state) => state.countryCode === countryCode)
    .map((state) => state.name)
    .sort((a, b) => a.localeCompare(b));
};

const getCitiesForState = (countryValue: string, stateValue: string) => {
  const countryCode = getCountryIsoCode(countryValue);
  const matchingState = ALL_STATES.find(
    (state) =>
      state.countryCode === countryCode &&
      state.name.toLowerCase() === stateValue.trim().toLowerCase(),
  );

  if (!countryCode || !matchingState) {
    return [];
  }

  return ALL_CITIES.filter(
    (city) => city.countryCode === countryCode && city.stateCode === matchingState.isoCode,
  )
    .map((city) => city.name)
    .sort((a, b) => a.localeCompare(b));
};

/* =========================================================
   PAGE
   ========================================================= */

export default function RegistrationPage() {
  /* =========================================================
     EVENTS
     ========================================================= */

  const [events, setEvents] = useState<EventItem[]>([]);

  /* =========================================================
     FORM STATE
     ========================================================= */

  const [informationType, setInformationType] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [countryName, setCountryName] = useState('');

  const [country, setCountry] = useState<Country>('IN');

  const [phone, setPhone] = useState('');
  const [landline, setLandline] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [message, setMessage] = useState('');
  const [sponsorConsent, setSponsorConsent] = useState(false);

  const filteredStates = useMemo(() => getStatesForCountry(countryName), [countryName]);
  const filteredCities = useMemo(() => getCitiesForState(countryName, state), [countryName, state]);

  useEffect(() => {
    if (!countryName) {
      setState('');
      setCity('');
      return;
    }

    if (state && !filteredStates.includes(state)) {
      setState('');
    }
  }, [countryName, filteredStates, state]);

  useEffect(() => {
    if (!state) {
      setCity('');
      return;
    }

    if (city && !filteredCities.includes(city)) {
      setCity('');
    }
  }, [city, filteredCities, state]);

  /* =========================================================
     UI STATE
     ========================================================= */

  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  /* =========================================================
     VALIDATION ERRORS
     ========================================================= */

  const [errors, setErrors] = useState<{
    informationType?: string;
    name?: string;
    organization?: string;
    industry?: string;
    jobTitle?: string;
    personalEmail?: string;
    officialEmail?: string;
    city?: string;
    state?: string;
    countryName?: string;
    countryCode?: string;
    phone?: string;
    landline?: string;
    selectedEvent?: string;
  }>({});

  /* =========================================================
     LOAD EVENTS
     ========================================================= */

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetchWebsiteEvents();

        /*
         * The API may return either:
         *
         * [
         *   {
         *     _id: '...',
         *     name: '...'
         *   }
         * ]
         *
         * OR:
         *
         * {
         *   data: [...]
         * }
         *
         * We normalize both formats here.
         */

        const rawResponse: unknown = response;

        let eventData: unknown = rawResponse;

        if (typeof rawResponse === 'object' && rawResponse !== null && 'data' in rawResponse) {
          eventData = (
            rawResponse as {
              data?: unknown;
            }
          ).data;
        }

        if (!Array.isArray(eventData)) {
          setEvents([]);
          return;
        }

        const formattedEvents: EventItem[] = [];

        eventData.forEach((item) => {
          if (typeof item !== 'object' || item === null) {
            return;
          }

          const event = item as {
            _id?: unknown;
            id?: unknown;
            name?: unknown;
            title?: unknown;
          };

          let eventId = '';

          if (typeof event._id === 'string') {
            eventId = event._id;
          } else if (typeof event.id === 'string') {
            eventId = event.id;
          }

          let eventName = '';

          if (typeof event.name === 'string') {
            eventName = event.name;
          } else if (typeof event.title === 'string') {
            eventName = event.title;
          }

          if (!eventId || !eventName) {
            return;
          }

          formattedEvents.push({
            _id: eventId,
            name: eventName,
          });
        });

        setEvents(formattedEvents);
      } catch (error) {
        // console.error('Failed to fetch events:', error);

        setEvents([]);
      }
    };

    loadEvents();
  }, []);

  /* =========================================================
     VALIDATION
     ========================================================= */

  const validate = () => {
    const nextErrors: {
      informationType?: string;
      name?: string;
      organization?: string;
      industry?: string;
      jobTitle?: string;
      personalEmail?: string;
      officialEmail?: string;
      city?: string;
      state?: string;
      countryName?: string;
      countryCode?: string;
      phone?: string;
      landline?: string;
      selectedEvent?: string;
    } = {};

    if (!informationType) {
      nextErrors.informationType = 'Please select an option.';
    }

    if (!name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    } else if (!/^[A-Za-z\s.'-]+$/.test(name.trim())) {
      nextErrors.name = 'Please enter a valid name.';
    }

    if (!organization.trim()) {
      nextErrors.organization = 'Please enter your company name.';
    }

    if (!industry) {
      nextErrors.industry = 'Please select an industry.';
    }

    if (!jobTitle.trim()) {
      nextErrors.jobTitle = 'Please enter your job title.';
    }

    if (!personalEmail.trim()) {
      nextErrors.personalEmail = 'Please enter your personal email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalEmail.trim())) {
      nextErrors.personalEmail = 'Please enter a valid email address.';
    }

    if (!officialEmail.trim()) {
      nextErrors.officialEmail = 'Please enter your official email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(officialEmail.trim())) {
      nextErrors.officialEmail = 'Please enter a valid email address.';
    }

    if (!city) {
      nextErrors.city = 'Please select your city.';
    }

    if (!state) {
      nextErrors.state = 'Please select your state.';
    }

    if (!countryName) {
      nextErrors.countryName = 'Please select your country.';
    }

    if (!country) {
      nextErrors.countryCode = 'Please select a country code.';
    }

    const mobileDigits = phone.replace(/\D/g, '');

    if (!mobileDigits) {
      nextErrors.phone = 'Please enter your mobile number.';
    } else if (mobileDigits.length !== 10) {
      nextErrors.phone = 'Mobile number must contain 10 digits.';
    }

    if (landline.trim() && !/^[0-9+\-\s()]{6,15}$/.test(landline.trim())) {
      nextErrors.landline = 'Please enter a valid landline number.';
    }

    if (!selectedEvent) {
      nextErrors.selectedEvent = 'Please select an event.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  /* =========================================================
     RESET FORM
     ========================================================= */

  const resetForm = () => {
    setInformationType('');
    setName('');
    setOrganization('');
    setIndustry('');
    setJobTitle('');
    setPersonalEmail('');
    setOfficialEmail('');
    setCity('');
    setState('');
    setCountryName('');
    setCountry('IN');
    setPhone('');
    setLandline('');
    setSelectedEvent('');
    setMessage('');
    setSponsorConsent(false);
    setErrors({});
  };

  /* =========================================================
     SUBMIT FORM
     ========================================================= */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const dialCode = getDialCodeFromCountry(country);
      const mobileNumber = phone.replace(/\D/g, '');

      const response = await submitAttendeeRegistration({
        eventId: selectedEvent,
        name: name.trim(),
        fullName: name.trim(),
        email: officialEmail.trim(),
        officialEmail: officialEmail.trim(),
        personalEmail: personalEmail.trim(),
        phoneNumber: mobileNumber,
        mobileNumber,
        landlineNumber: landline.trim(),
        countryCode: dialCode,
        organization: organization.trim(),
        companyName: organization.trim(),
        jobTitle: jobTitle.trim(),
        designation: jobTitle.trim(),
        industryVertical: industry,
        industry,
        city,
        state,
        country: countryName,
        registrationType: informationType,
        needMoreInformation: informationType,
        message: message.trim(),
        suggestion: message.trim(),
        sponsorConsent,
      });

      if (response) {
        setPopupMessage('Registration submitted successfully.');

        resetForm();
      }
    } catch (error) {
      // console.error('Registration submission failed:', error);

      setPopupMessage('Unable to submit registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <main>
      <section className="registration-section">
        <div className="registration-container">
          <div className="registration-wrapper">
            {/* =================================================
                TITLE
                ================================================= */}

            <h1 className="registration-title">CIO CROWN 2026 REGISTRATION</h1>

            <form className="registration-form" onSubmit={handleSubmit} noValidate>
              {/* =================================================
                  1. NEED MORE INFORMATION
                  ================================================= */}

              <label className="registration-label">
                Need More Information
                <select
                  value={informationType}
                  onChange={(e) => setInformationType(e.target.value)}
                >
                  <option value="">Need More Information</option>

                  {INFORMATION_OPTIONS.slice(1).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.informationType && (
                  <span className="registration-error">{errors.informationType}</span>
                )}
              </label>

              {/* =================================================
                  2. FULL NAME
                  ================================================= */}

              <label className="registration-label">
                Your Full Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="registration-error">{errors.name}</span>}
              </label>

              {/* =================================================
                  3. COMPANY NAME
                  ================================================= */}

              <label className="registration-label">
                Your Company Name
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Enter your company name"
                />
                {errors.organization && (
                  <span className="registration-error">{errors.organization}</span>
                )}
              </label>

              {/* =================================================
                  4. INDUSTRY
                  ================================================= */}

              <label className="registration-label">
                Industry Verticals
                <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                  <option value="">Industry Verticals</option>

                  {INDUSTRY_OPTIONS.slice(1).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.industry && <span className="registration-error">{errors.industry}</span>}
              </label>

              {/* =================================================
                  5. JOB TITLE
                  ================================================= */}

              <label className="registration-label">
                Your Job Title
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Enter your job title"
                />
                {errors.jobTitle && <span className="registration-error">{errors.jobTitle}</span>}
              </label>

              {/* =================================================
                  6. PERSONAL EMAIL
                  ================================================= */}

              <label className="registration-label">
                Your Personal Email Id
                <input
                  type="email"
                  value={personalEmail}
                  onChange={(e) => setPersonalEmail(e.target.value)}
                  placeholder="Enter your personal email"
                />
                {errors.personalEmail && (
                  <span className="registration-error">{errors.personalEmail}</span>
                )}
              </label>

              {/* =================================================
                  7. OFFICIAL EMAIL
                  ================================================= */}

              <label className="registration-label">
                Your Official Email Id
                <input
                  type="email"
                  value={officialEmail}
                  onChange={(e) => setOfficialEmail(e.target.value)}
                  placeholder="Enter your official email"
                />
                {errors.officialEmail && (
                  <span className="registration-error">{errors.officialEmail}</span>
                )}
              </label>

              {/* =================================================
                 8. COUNTRY
                  ================================================= */}

              <label className="registration-label">
                Country
                <select
                  value={countryName}
                  onChange={(e) => {
                    setCountryName(e.target.value);
                    setState('');
                    setCity('');
                  }}
                >
                  <option value="">Country</option>

                  {COUNTRY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.countryName && (
                  <span className="registration-error">{errors.countryName}</span>
                )}
              </label>
              {/* =================================================
                  9. STATE
                  ================================================= */}

              <label className="registration-label">
                State
                <select
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setCity('');
                  }}
                  disabled={!countryName || filteredStates.length === 0}
                >
                  <option value="">State</option>

                  {filteredStates.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.state && <span className="registration-error">{errors.state}</span>}
              </label>

              {/* =================================================
                  10. CITY
                  ================================================= */}

              <label className="registration-label">
                City
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!state || filteredCities.length === 0}
                >
                  <option value="">City</option>

                  {filteredCities.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.city && <span className="registration-error">{errors.city}</span>}
              </label>

              {/* =================================================
                  11. MOBILE NUMBER
                  ================================================= */}

              <label className="registration-label">
                Your Mobile Number
                <div className="registration-phone-row">
                  <CountryCodeSelect
                    value={country}
                    onChange={(value) => {
                      setCountry(value as Country);
                    }}
                  />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter mobile number"
                  />
                </div>
                {errors.countryCode && (
                  <span className="registration-error">{errors.countryCode}</span>
                )}
                {errors.phone && <span className="registration-error">{errors.phone}</span>}
              </label>

              {/* =================================================
                  12. LANDLINE NUMBER
                  ================================================= */}

              <label className="registration-label">
                Your LandLine Number
                <input
                  type="tel"
                  value={landline}
                  onChange={(e) => setLandline(e.target.value)}
                  placeholder="Enter landline number"
                />
                {errors.landline && <span className="registration-error">{errors.landline}</span>}
              </label>

              {/* =================================================
                  EVENT
                  ================================================= */}

              <label className="registration-label">
                Select Event
                <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
                  <option value="">Select Event</option>

                  {events.map((eventItem) => (
                    <option key={eventItem._id} value={eventItem._id}>
                      {eventItem.name}
                    </option>
                  ))}
                </select>
                {errors.selectedEvent && (
                  <span className="registration-error">{errors.selectedEvent}</span>
                )}
              </label>

              {/* =================================================
                  MESSAGE / SUGGESTION
                  ================================================= */}

              <label className="registration-label registration-full-width">
                Your Message / <br /> Suggestion
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message or suggestion"
                  className="registration-textarea"
                />
              </label>

              {/* =================================================
                  SPONSOR CONSENT
                  ================================================= */}

              <label className="registration-consent registration-full-width">
                <input
                  type="checkbox"
                  checked={sponsorConsent}
                  onChange={(e) => setSponsorConsent(e.target.checked)}
                />

                <span>
                  I agree to my contact data being passed to sponsors to contact me as follow-up
                  from my attendance of CIO Crown 2026
                </span>
              </label>

              {/* =================================================
                  SUBMIT
                  ================================================= */}

              <div className="registration-button-wrap">
                <button type="submit" className="registration-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </div>
          <div
            className="social-media-back"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30px',
              marginBottom: '20px',
            }}
          >
            <Link
              href="/"
              className="social-media-back-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 24px',
                background: '#8e0101',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.3px',
              }}
            >
              ← Back
            </Link>
          </div>
        </div>

        {/* =====================================================
            POPUP
            ===================================================== */}

        {popupMessage && (
          <div className="registration-popup">
            <span className="registration-popup-dot" />

            <p>{popupMessage}</p>

            <button
              type="button"
              onClick={() => setPopupMessage(null)}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
