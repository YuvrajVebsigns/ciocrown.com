export type CookiePreferences = {
  essential: true;
  analytics: boolean;
};

const COOKIE_NAME = 'cio_cookie_preferences';

function getCookieValue(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const cookieString = document.cookie;
  const cookieParts = cookieString.split('; ').map((cookie) => cookie.trim());
  const cookieEntry: string | undefined = cookieParts.find((cookie) =>
    cookie.startsWith(`${name}=`),
  );

  if (!cookieEntry) {
    return null;
  }

  const value = cookieEntry.slice(name.length + 1);
  return decodeURIComponent(value);
}

function setCookieValue(name: string, value: string, days = 365) {
  if (typeof document === 'undefined') return;

  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; sameSite=lax; secure`;
}

export function loadCookiePreferences(): CookiePreferences | null {
  const cookieValue = getCookieValue(COOKIE_NAME);
  if (!cookieValue) return null;

  try {
    const parsed = JSON.parse(cookieValue) as CookiePreferences;
    if (typeof parsed?.analytics === 'boolean') {
      return { essential: true, analytics: parsed.analytics };
    }
  } catch {
    return null;
  }

  return null;
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  setCookieValue(COOKIE_NAME, JSON.stringify(preferences));
}

export function clearCookiePreferences() {
  setCookieValue(COOKIE_NAME, '', -1);
}
