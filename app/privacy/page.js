import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "VugyVugy Privacy Policy - How we collect, use, and protect your data",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-vugy-bg">
      {/* Header */}
      <header className="border-b border-vugy-primary/10 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-vugy-primary hover:text-vugy-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-extrabold text-vugy-text-primary mb-4">Privacy Policy</h1>
          <p className="text-vugy-text-secondary text-sm mb-8">
            <strong>Last Updated:</strong> June 6, 2026
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">1. Introduction</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                Welcome to VugyVugy ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you use our website and desktop application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3">2.1 Anonymous Usage Analytics</h3>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                We collect anonymous analytics data to understand how users interact with VugyVugy:
              </p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li>Page views and visit counts</li>
                <li>Download events (platform and format)</li>
                <li>Performance metrics (page load times)</li>
                <li>General device information (operating system, browser type)</li>
              </ul>
              <p className="text-vugy-text-secondary leading-relaxed mt-4">
                <strong>Important:</strong> We use Aptabase for analytics, which is privacy-focused and does not collect personal identifiable information (PII).
                No IP addresses, email addresses, or personal data are tracked.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">2.2 Local Storage</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                We use browser localStorage to remember if you've visited or downloaded before. This data stays on your device and is never sent to our servers.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">2.3 Application Data</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                The VugyVugy desktop application stores your sound preferences and playlists locally on your device.
                We do not have access to this data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                We use the collected anonymous data to:
              </p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li>Understand which features are most popular</li>
                <li>Improve application performance and user experience</li>
                <li>Track download statistics for different platforms</li>
                <li>Identify and fix technical issues</li>
                <li>Make informed decisions about future development</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">4. Data Sharing and Third Parties</h2>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                We do not sell, rent, or share your data with third parties for marketing purposes. We use the following third-party services:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">5. Cookies and Tracking</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                We do not use advertising cookies or tracking pixels. We only use localStorage (browser storage) to remember your preferences
                and whether you've visited before. You can clear this data anytime through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">6. Data Security</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                We implement appropriate security measures to protect the limited data we collect. Since we collect minimal and anonymous data,
                the risk to your privacy is very low. All data transmission occurs over secure HTTPS connections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">7. Your Rights</h2>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li><strong>Access:</strong> Request information about data we've collected (though we collect minimal anonymous data)</li>
                <li><strong>Deletion:</strong> Clear your browser's localStorage to remove local tracking</li>
                <li><strong>Opt-out:</strong> Use browser extensions to block analytics if desired</li>
                <li><strong>Portability:</strong> Since we don't collect personal data, there's nothing to export</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">8. Children's Privacy</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                VugyVugy is not intended for children under 13. We do not knowingly collect data from children.
                If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">9. International Users</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                VugyVugy is available worldwide. By using our service, you consent to the transfer and processing of data
                in accordance with this privacy policy, regardless of your location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">10. Changes to This Policy</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                We may update this privacy policy from time to time. We will notify users of significant changes by updating
                the "Last Updated" date at the top of this page. Continued use of VugyVugy after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">11. Contact Us</h2>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-vugy-primary/5 rounded-lg p-4 text-vugy-text-secondary">
                <p><strong>Email:</strong> contact@vugyvugy.site</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">Summary</h2>
              <div className="bg-vugy-accent/10 rounded-lg p-6">
                <p className="text-vugy-text-primary font-semibold mb-3">In Plain English:</p>
                <ul className="text-vugy-text-secondary space-y-2">
                  <li>✅ We collect minimal, anonymous usage data</li>
                  <li>✅ We do not collect personal information (no emails, names, or addresses)</li>
                  <li>✅ We do not sell or share your data</li>
                  <li>✅ Your sound preferences stay on your device</li>
                  <li>✅ You can clear tracking data anytime from your browser</li>
                  <li>✅ We're privacy-focused developers just like you</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
