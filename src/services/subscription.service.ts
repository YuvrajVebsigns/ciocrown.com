import { API_ENDPOINTS } from '@/constants/api';
import {
  buildWebsiteAuthHeaders,
  clearWebsiteAuth,
  ensureWebsiteAuth,
  getApiErrorStatus,
  getWebsiteDomain,
} from '@/lib/website-auth';
import { apiFetch } from '@/services/apiFetch';

type SubscriptionPayload = {
  email: string;
  source?: string;
};

type SubscriptionResponse = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

async function postWebsiteSubscription(payload: SubscriptionPayload) {
  const domain = getWebsiteDomain();
  const auth = await ensureWebsiteAuth(domain);

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-website-domain': domain,
  };

  if (auth?.token) {
    Object.assign(headers, buildWebsiteAuthHeaders(auth));
  }

  return apiFetch<SubscriptionResponse>(API_ENDPOINTS.WEBSITE.SUBSCRIBES, {
    method: 'POST',
    requireAuth: false,
    headers,
    body: JSON.stringify(payload),
  });
}

export async function submitWebsiteSubscription(email: string) {
  const payload: SubscriptionPayload = {
    email,
    source: 'footer',
  };

  try {
    return await postWebsiteSubscription(payload);
  } catch (error: unknown) {
    const statusCode = getApiErrorStatus(error);

    if (statusCode === 401) {
      clearWebsiteAuth();
      return await postWebsiteSubscription(payload);
    }

    throw error;
  }
}
