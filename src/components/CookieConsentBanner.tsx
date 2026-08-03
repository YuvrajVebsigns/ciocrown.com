'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadCookiePreferences, saveCookiePreferences } from '@/lib/cookie-consent';
import { trackWebsiteAnalytics } from '@/services/analytics.service';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [customizeMode, setCustomizeMode] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const preferences = loadCookiePreferences();
    if (!preferences) {
      setVisible(true);
    } else {
      setAnalyticsEnabled(preferences.analytics);
    }
  }, []);

  const trackConsent = async (analytics: boolean) => {
    try {
      await trackWebsiteAnalytics({
        eventType: 'cookie_consent',
        pageUrl: window.location.href,
        pageTitle: document.title,
        referrer: document.referrer,
        metadata: {
          essential: true,
          analytics,
        },
      });
    } catch (error) {
      //   console.warn('Cookie consent tracking failed', error);
    }
  };

  const acceptAll = () => {
    saveCookiePreferences({ essential: true, analytics: true });
    setAnalyticsEnabled(true);
    setVisible(false);
    void trackConsent(true);
  };

  const acceptEssentialOnly = () => {
    saveCookiePreferences({ essential: true, analytics: false });
    setAnalyticsEnabled(false);
    setVisible(false);
    void trackConsent(false);
  };

  const openCustomize = () => {
    setCustomizeMode(true);
  };

  const closeCustomize = () => {
    setCustomizeMode(false);
  };

  const handleSave = () => {
    saveCookiePreferences({ essential: true, analytics: analyticsEnabled });
    setCustomizeMode(false);
    setVisible(false);
    void trackConsent(analyticsEnabled);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      {!customizeMode ? (
        <div className="cookie-banner__inner">
          <p className="cookie-banner__text">
            We use cookies to enhance your browsing experience, personalize your content, and
            understand site performance.
            <br />
            Click <strong>Accept all</strong> to agree to cookies that help us deliver better
            content and a smoother browsing experience.
            <Link href="/cookie-policy" className="cookie-banner__policy-link">
              View our Cookie Policy
            </Link>{' '}
            to update or disable preferences anytime.
          </p>

          <div className="cookie-banner__actions">
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--primary"
              onClick={acceptAll}
            >
              Accept all
            </button>

            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--secondary"
              onClick={acceptEssentialOnly}
            >
              Essential only
            </button>

            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--tertiary"
              onClick={openCustomize}
            >
              <span className="cookie-banner__button-icon">⚙</span>
              Customize
            </button>
          </div>
        </div>
      ) : (
        <div className="cookie-banner__content">
          <div className="cookie-banner__header">
            <span className="cookie-banner__label">COOKIE PREFERENCES</span>
            <h2 className="cookie-banner__title">Customize your cookie settings</h2>
          </div>

          <div className="cookie-banner__cards">
            <div className="cookie-card cookie-card--essential">
              <div>
                <h3 className="cookie-card__title">Essential Cookies</h3>
                <p className="cookie-card__subtitle">
                  Required for the website to function properly.
                </p>
              </div>
              <span className="cookie-card__pill">Always Active</span>
            </div>

            <div className="cookie-card cookie-card--analytics">
              <div>
                <h3 className="cookie-card__title">Analytics & Performance Cookies</h3>
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
          </div>

          <div className="cookie-banner__footer">
            <button type="button" className="cookie-banner__cancel" onClick={closeCustomize}>
              Cancel
            </button>
            <button type="button" className="cookie-banner__save" onClick={handleSave}>
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
