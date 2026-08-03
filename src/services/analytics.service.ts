import { apiFetch } from '@/services/apiFetch';
import { buildWebsiteAuthHeaders, ensureWebsiteAuth, getWebsiteDomain } from '@/lib/website-auth';
import { API_ENDPOINTS } from '@/constants/api';

export interface AnalyticsTrackPayload {
  eventType: string;
  pageUrl?: string;
  pageTitle?: string;
  referrer?: string;
  metadata?: Record<string, unknown>;
  visitorId?: string;
  sessionId?: string;
}

export type AnalyticsTrackResponse = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

function createClientId() {
  if (typeof window === 'undefined') return 'unknown';
  if ('crypto' in window && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function getVisitorId() {
  const storageKey = 'cio_visitor_id';
  const existingId = window.localStorage.getItem(storageKey);
  if (existingId) return existingId;

  const newId = createClientId();
  window.localStorage.setItem(storageKey, newId);
  return newId;
}

function getSessionId() {
  const storageKey = 'cio_session_id';
  const existingId = window.sessionStorage.getItem(storageKey);
  if (existingId) return existingId;

  const newId = createClientId();
  window.sessionStorage.setItem(storageKey, newId);
  return newId;
}

export async function trackWebsiteAnalytics(payload: AnalyticsTrackPayload) {
  const domain = getWebsiteDomain();
  const auth = await ensureWebsiteAuth(domain);
  const headers = {
    ...buildWebsiteAuthHeaders(auth),
    'x-website-domain': domain,
  };

  const body = {
    visitorId: payload.visitorId ?? getVisitorId(),
    sessionId: payload.sessionId ?? getSessionId(),
    eventType: payload.eventType,
    pageUrl: payload.pageUrl,
    pageTitle: payload.pageTitle,
    referrer: payload.referrer,
    metadata: payload.metadata,
  } as const;

  return apiFetch<AnalyticsTrackResponse>(API_ENDPOINTS.WEBSITE.ANALYTICS.TRACK, {
    method: 'POST',
    requireAuth: false,
    headers,
    body: JSON.stringify(body),
  });
}
