import { API_ENDPOINTS } from '@/constants/api';
import {
  buildWebsiteAuthHeaders,
  clearWebsiteAuth,
  ensureWebsiteAuth,
  getApiErrorStatus,
} from '@/lib/website-auth';
import { apiFetch } from '@/services/apiFetch';

/** Matches backend RegisterAttendeeDto and the full website registration form payload. */
export type RegisterAttendeeApiBody = {
  eventId: string;
  name: string;
  fullName?: string;
  email: string;
  officialEmail?: string;
  personalEmail?: string;
  countryCode: string;
  phoneNumber: string;
  mobileNumber?: string;
  landlineNumber?: string;
  organization: string;
  companyName?: string;
  jobTitle?: string;
  designation?: string;
  industryVertical?: string;
  industry?: string;
  city?: string;
  state?: string;
  country?: string;
  registrationType?: string;
  needMoreInformation?: string;
  message?: string;
  suggestion?: string;
  sponsorConsent?: boolean;
};

export type AttendeeRegistrationInput = {
  eventId: string;
  name: string;
  fullName?: string;
  email: string;
  officialEmail?: string;
  personalEmail?: string;
  phoneNumber: string;
  countryCode?: string;
  mobileNumber?: string;
  landlineNumber?: string;
  organization: string;
  companyName?: string;
  jobTitle?: string;
  designation?: string;
  industryVertical?: string;
  industry?: string;
  city?: string;
  state?: string;
  country?: string;
  registrationType?: string;
  needMoreInformation?: string;
  message?: string;
  suggestion?: string;
  sponsorConsent?: boolean;
};

type RegistrationResponse = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

function buildRegisterAttendeeBody(input: AttendeeRegistrationInput): RegisterAttendeeApiBody {
  return {
    eventId: input.eventId,
    name: input.name,
    fullName: input.fullName ?? input.name,
    email: input.email,
    officialEmail: input.officialEmail ?? input.email,
    personalEmail: input.personalEmail ?? input.email,
    countryCode: input.countryCode ?? '+91',
    phoneNumber: input.phoneNumber,
    mobileNumber: input.mobileNumber ?? input.phoneNumber,
    landlineNumber: input.landlineNumber ?? '',
    organization: input.organization,
    companyName: input.companyName ?? input.organization,
    jobTitle: input.jobTitle ?? '',
    designation: input.designation ?? input.jobTitle ?? '',
    industryVertical: input.industryVertical ?? input.industry ?? '',
    industry: input.industry ?? input.industryVertical ?? '',
    city: input.city ?? '',
    state: input.state ?? '',
    country: input.country ?? '',
    registrationType: input.registrationType ?? '',
    needMoreInformation: input.needMoreInformation ?? input.registrationType ?? '',
    message: input.message ?? '',
    suggestion: input.suggestion ?? input.message ?? '',
    sponsorConsent: input.sponsorConsent ?? false,
  };
}

function assertRegistrationSaved(response: RegistrationResponse) {
  if (response.success === false) {
    throw new Error(response.message || 'Registration was not saved.');
  }
}

async function postAttendeeRegistration(body: RegisterAttendeeApiBody) {
  const auth = await ensureWebsiteAuth();

  return apiFetch<RegistrationResponse>(API_ENDPOINTS.WEBSITE.ATTENDEES.REGISTER, {
    method: 'POST',
    requireAuth: false,
    headers: buildWebsiteAuthHeaders(auth),
    body: JSON.stringify(body),
  });
}

export async function submitAttendeeRegistration(input: AttendeeRegistrationInput) {
  const body = buildRegisterAttendeeBody(input);

  try {
    const response = await postAttendeeRegistration(body);
    assertRegistrationSaved(response);
    return response;
  } catch (error: unknown) {
    const statusCode = getApiErrorStatus(error);

    if (statusCode === 401) {
      clearWebsiteAuth();
      const response = await postAttendeeRegistration(body);
      assertRegistrationSaved(response);
      return response;
    }

    throw error;
  }
}
