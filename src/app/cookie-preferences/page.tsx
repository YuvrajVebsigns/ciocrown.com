'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadCookiePreferences, saveCookiePreferences } from '@/lib/cookie-consent';

export default function CookiePreferencesPage() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const preferences = loadCookiePreferences();
    if (preferences) {
      setAnalyticsEnabled(preferences.analytics);
    }
  }, []);

  const handleSave = () => {
    saveCookiePreferences({ essential: true, analytics: analyticsEnabled });
  };

  return (
    <main className="cookie-page">
      <div className="cookie-page__container">
        <div className="cookie-page__header">
          <span className="cookie-page__label">COOKIE PREFERENCES</span>
          <div className="cookie-page__title-row">
            <h1 className="cookie-page__title">Cookie Preferences</h1>
          </div>
          <p className="cookie-page__description">
            Manage your cookie settings for this site. Essential cookies are always active to keep
            the website functioning properly.
          </p>
        </div>

        <div className="cookie-page__cards">
          <article className="cookie-card cookie-card--essential">
            <div className="cookie-card__content">
              <div>
                <h2 className="cookie-card__title">Essential Cookies</h2>
                <p className="cookie-card__subtitle">
                  Required for the website to function properly.
                </p>
              </div>

              <span className="cookie-card__pill">Always Active</span>
            </div>
          </article>

          <article className="cookie-card cookie-card--analytics">
            <div className="cookie-card__content">
              <div>
                <h2 className="cookie-card__title">Analytics & Performance Cookies</h2>
                <p className="cookie-card__subtitle">
                  Help us understand visitor usage and optimize site performance.
                </p>
              </div>

              <button
                type="button"
                className={`cookie-card__toggle ${analyticsEnabled ? 'cookie-card__toggle--active' : ''}`}
                onClick={() => setAnalyticsEnabled((value) => !value)}
                aria-pressed={analyticsEnabled}
              >
                {analyticsEnabled ? '✓' : ''}
              </button>
            </div>
          </article>
        </div>

        <div className="cookie-page__actions">
          <Link href="/" className="cookie-page__cancel">
            Cancel
          </Link>
          <button type="button" className="cookie-page__save" onClick={handleSave}>
            Save Preferences
          </button>
        </div>
      </div>
    </main>
  );
}
