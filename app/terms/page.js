import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "VugyVugy Terms of Service - Legal terms and conditions for using our application",
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-extrabold text-vugy-text-primary mb-4">Terms of Service</h1>
          <p className="text-vugy-text-secondary text-sm mb-8">
            <strong>Last Updated:</strong> June 6, 2026
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                By accessing or using VugyVugy's website or desktop application ("Service"), you agree to be bound by these Terms of Service ("Terms").
                If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">2. Description of Service</h2>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                VugyVugy is a free desktop application that allows users to:
              </p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li>Assign custom sound effects to keyboard keypresses</li>
                <li>Create and manage sound playlists</li>
                <li>Customize keyboard audio feedback</li>
                <li>Use pre-loaded meme sounds</li>
              </ul>
              <p className="text-vugy-text-secondary leading-relaxed mt-4">
                The Service is provided "as is" for entertainment and productivity purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">3. License and Usage Rights</h2>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3">3.1 License Grant</h3>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use VugyVugy for personal or commercial purposes,
                subject to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3">3.2 Permitted Use</h3>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">You may:</p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li>Install VugyVugy on multiple devices you own</li>
                <li>Use it for personal entertainment or work productivity</li>
                <li>Share the download link with others</li>
              </ul>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">3.3 Prohibited Use</h3>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">You may NOT:</p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li>Reverse engineer, decompile, or disassemble the application</li>
                <li>Redistribute modified versions without permission</li>
                <li>Remove or alter copyright notices or branding</li>
                <li>Use the Service for illegal activities</li>
                <li>Use the Service to harass, annoy, or disturb others in shared workspaces</li>
                <li>Claim the software as your own work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">4. User Responsibilities</h2>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3">4.1 Workplace Consideration</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                You are responsible for ensuring your use of VugyVugy is appropriate for your environment.
                Please be considerate of others in shared workspaces and comply with your organization's policies regarding software and noise.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">4.2 System Requirements</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                You are responsible for ensuring your system meets the minimum requirements to run VugyVugy.
                We provide the application for Windows and Linux, but cannot guarantee compatibility with all system configurations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">5. Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3">5.1 Our Property</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                VugyVugy, including its name, logo, design, code, and bundled sound effects, is owned by the creator(s) and is protected by copyright
                and other applicable intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">5.2 Open Source</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                VugyVugy may include open-source components. These components are subject to their respective licenses,
                which can be found in the application's credits or documentation.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">5.3 Bundled Sounds</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                The pre-loaded sound effects included with VugyVugy are provided for your use within the application.
                These sounds may be subject to various licenses and should not be extracted for use in other projects without verification of their licensing terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">6. Disclaimers and Limitations</h2>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3">6.1 No Warranty</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                VugyVugy is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied.
                We do not guarantee that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">6.2 Limitation of Liability</h3>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                To the maximum extent permitted by law, we shall not be liable for any:
              </p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Damage to your computer system or data</li>
                <li>Workplace issues arising from use of the application</li>
                <li>Any damages exceeding $10 USD</li>
              </ul>

              <h3 className="text-xl font-semibold text-vugy-text-primary mb-3 mt-6">6.3 Use at Your Own Risk</h3>
              <p className="text-vugy-text-secondary leading-relaxed">
                You acknowledge that using sound effects while typing may:
              </p>
              <ul className="list-disc list-inside text-vugy-text-secondary space-y-2 ml-4 mt-2">
                <li>Annoy coworkers or family members</li>
                <li>Be inappropriate in professional settings</li>
                <li>Get you in trouble with your manager 😅</li>
                <li>Distract you from work (but in a fun way)</li>
              </ul>
              <p className="text-vugy-text-secondary leading-relaxed mt-4">
                We're not responsible for any awkward situations that arise from your use of VugyVugy. Use responsibly!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">7. Updates and Modifications</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                We may update VugyVugy from time to time to add features, fix bugs, or improve performance.
                Updates may be automatic or require manual download. We are not obligated to provide updates but will do our best to maintain the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">8. Termination</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                We reserve the right to terminate or suspend access to the Service at any time, with or without notice,
                for any reason including violation of these Terms. Upon termination, you must cease all use of VugyVugy and may delete the application from your devices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">9. Privacy</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                Your use of VugyVugy is also governed by our <Link href="/privacy" className="text-vugy-accent hover:underline">Privacy Policy</Link>,
                which explains how we collect and use data. By using the Service, you consent to our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">10. Governing Law</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of your jurisdiction,
                without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of your local jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">11. Changes to Terms</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the "Last Updated" date.
                Continued use of VugyVugy after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">12. Severability</h2>
              <p className="text-vugy-text-secondary leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary,
                and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">13. Contact Information</h2>
              <p className="text-vugy-text-secondary leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-vugy-primary/5 rounded-lg p-4 text-vugy-text-secondary">
                <p><strong>Email:</strong> support@vugyvugy.site</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-bold text-vugy-text-primary mb-4">Summary</h2>
              <div className="bg-vugy-accent/10 rounded-lg p-6">
                <p className="text-vugy-text-primary font-semibold mb-3">The Friendly Version:</p>
                <ul className="text-vugy-text-secondary space-y-2">
                  <li>✅ VugyVugy is free to use for personal or work purposes</li>
                  <li>✅ Don't reverse engineer or claim it as your own</li>
                  <li>✅ Be considerate of others in shared spaces</li>
                  <li>✅ We're not responsible if your boss gets annoyed by meme sounds 😄</li>
                  <li>✅ We provide no warranties, but we'll try our best to keep it working</li>
                  <li>✅ Have fun, vibe responsibly!</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
