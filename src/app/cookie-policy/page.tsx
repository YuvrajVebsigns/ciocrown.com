export default function CookiePolicyPage() {
  return (
    <main className="cookie-policy-page min-h-screen bg-[#f7f7f7] px-4 py-16 text-slate-900">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white p-10 shadow-[0_24px_56px_rgba(0,0,0,0.08)]">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-[#8e0101]">Cookie Policy</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            This website uses cookies to provide a better browsing experience, analyze site traffic,
            and personalize content. You may choose to accept all cookies or use essential cookies
            only.
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">What are cookies?</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Cookies are small text files stored on your device when you visit a website. They help
              the site remember your preferences and improve your experience.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Essential Cookies</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              These cookies are necessary for the website to function correctly and cannot be
              disabled. They support core features and the secure operation of the site.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Analytics & Performance Cookies
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              These cookies help us understand how visitors use the website and improve performance.
              You can enable or disable these cookies from the cookie preferences page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
