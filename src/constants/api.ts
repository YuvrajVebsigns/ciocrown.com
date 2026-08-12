export { API_BASE_URL } from './app.constants';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
  },
  WEBSITE: {
    CONTACTS: '/api/v1/website/contacts',
    PAGES: {
      BASE: '/api/v1/website/pages',
      BY_SLUG: (slug: string) => `/api/v1/website/pages/${encodeURIComponent(slug)}`,
    },
    ATTENDEES: {
      REGISTER: '/api/v1/website/attendees/register',
    },
    EVENTS: {
      BASE: '/api/v1/website/events',
      BY_ID: (id: string) => `/api/v1/website/events/${encodeURIComponent(id)}`,
    },
    ANALYTICS: {
      TRACK: '/api/v1/website/analytics/track',
    },
    BLOG_COMMENTS: {
      BASE: (id: string) => `/api/v1/website/blogs/${encodeURIComponent(id)}/comments`,
    },
    NOMINATIONS: '/api/v1/website/nominations',
    SUBSCRIBES: '/api/v1/website/subscribes',
    SPONSORS: {
      BASE: '/api/v1/website/sponsors',
      BY_ID: (id: string) => `/api/v1/website/sponsors/${encodeURIComponent(id)}`,
    },
  },
  USERS: {
    BASE: '/users',
    BY_ID: (id: string) => `/users/${id}`,
  },
  MEDIA: {
    BASE: '/media',
    UPLOAD: '/media/upload',
  },
} as const;
