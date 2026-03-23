import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold font-display text-white/90 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
      {children}
    </div>
  </div>
);

const Divider = () => <div className="border-t border-white/5 my-10" />;

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest mb-6">
            <Cookie className="w-4 h-4" /> Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            EmailQ.AI – AI Email Workflow & Inbox Automation Platform
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">

          <Section title="Introduction">
            <p>
              This Cookie Policy explains how EmailQ ("we", "us", or "our") uses cookies and similar technologies on our platform.
            </p>
            <p>
              We are committed to being transparent about our use of cookies and protecting your privacy.
            </p>
          </Section>

          <Section title="What Are Cookies?">
            <p>
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website or use an application.
            </p>
            <p>
              They help the website or application recognize your device and remember certain information about your preferences or actions.
            </p>
          </Section>

          <Section title="Cookies We Use">
            <p>
              EmailQ uses only strictly necessary cookies that are essential for the platform to function properly.
            </p>
            <p className="font-semibold text-white/80">
              We do not use optional cookies such as analytics, advertising, or tracking cookies.
            </p>
          </Section>

          <Section title="Strictly Necessary Cookies">
            <p>
              These cookies are essential for accessing and using our services. Without these cookies the platform cannot function properly.
            </p>

            <div className="mt-4 bg-[#8b5cf6]/5 border border-[#8b5cf6]/20 rounded-xl p-5 mb-6">
              <div className="space-y-2">
                <p><span className="text-white/60 font-semibold w-32 inline-block">Cookie Name:</span> <span className="font-mono text-[#a78bfa]">access_token</span></p>
                <p><span className="text-white/60 font-semibold w-32 inline-block">Purpose:</span> Stores authentication token to maintain your logged-in session</p>
                <p><span className="text-white/60 font-semibold w-32 inline-block">Duration:</span> Session / Until logout</p>
                <p><span className="text-white/60 font-semibold w-32 inline-block">Type:</span> HTTP-only</p>
              </div>
            </div>

            <h3 className="text-white/90 font-bold mb-3">Access Token Cookie Details</h3>
            
            <p><strong className="text-white/80">Purpose:</strong> This cookie stores your authentication token allowing you to remain logged in without re-entering credentials repeatedly.</p>
            
            <p className="mt-4 font-bold text-white/80 mb-2">Security:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
              <li><strong className="text-white/70">HttpOnly:</strong> Prevents JavaScript from accessing the cookie (protects against XSS attacks)</li>
              <li><strong className="text-white/70">Secure:</strong> Cookie is transmitted only over HTTPS connections</li>
              <li><strong className="text-white/70">SameSite=Strict:</strong> Protects against CSRF attacks</li>
            </ul>

            <p><strong className="text-white/80">Duration:</strong> The cookie remains active during your session and is removed when you log out or the session expires.</p>
            
            <p className="mt-4"><strong className="text-white/80">Data Stored:</strong> The cookie contains only an encrypted authentication token and does not include personal information such as name or email.</p>
            
            <h3 className="text-white/90 font-bold mt-6 mb-3">Why We Use This Cookie</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                'Maintain logged-in session',
                'Authenticate user identity',
                'Secure accounts from unauthorized access',
                'Enable seamless navigation',
                'Protect against common security vulnerabilities'
              ].map(item => (
                <li key={item} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Cookie Consent">
            <p>
              Strictly necessary cookies do not require consent because they are essential for the service to function.
            </p>
            <p className="bg-white/5 p-3 rounded-lg border border-white/10 mt-2">
              By logging into EmailQ you acknowledge and accept the use of this authentication cookie.
            </p>
          </Section>

          <Section title="Managing Cookies">
            <p>
              While we only use essential cookies you can manage cookies through your browser settings.
            </p>
            <p className="text-orange-300">
              Blocking or deleting cookies may prevent you from logging in or using the platform.
            </p>
            
            <h3 className="text-white/80 font-semibold mt-6 mb-3">Common Browsers</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Chrome</p>
                <p className="text-xs">Settings &gt; Privacy and security &gt; Cookies and other site data</p>
              </div>
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Firefox</p>
                <p className="text-xs">Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</p>
              </div>
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Safari</p>
                <p className="text-xs">Preferences &gt; Privacy &gt; Cookies and website data</p>
              </div>
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Edge</p>
                <p className="text-xs">Settings &gt; Cookies and site permissions &gt; Cookies and site data</p>
              </div>
            </div>
          </Section>

          <Section title="Data Protection and Privacy">
            <p>We store only minimal information required for authentication.</p>
            <p>The token is encrypted and protected using security attributes (HttpOnly, Secure, SameSite).</p>
            <p className="font-semibold mt-2 text-[#a78bfa]">We do not share cookie data with third parties.</p>
          </Section>

          <Section title="Third-Party Cookies">
            <p>
              EmailQ may interact with external services such as Zoom or Google Meet when integrations are used.
            </p>
            <p>
              These providers may set cookies according to their own privacy policies.
            </p>
          </Section>

          <Section title="Updates to This Policy">
            <p>
              We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or platform functionality.
            </p>
            <p>
              When updates occur the 'Last Updated' date will be revised.
            </p>
          </Section>

          <Divider />

          <Section title="Contact Us">
             <p className="mb-4">If you have questions about this Cookie Policy please contact us:</p>
             <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="font-semibold text-white/90 mb-3">EmailQ by Tekisho Infotech</p>
              
              <p className="text-gray-400 mb-4">
                <span className="text-white/70">Email:</span> contact@tekisho.ai<br />
                <span className="text-white/70">Phone:</span> +91 9059443516
              </p>

              <p className="font-semibold text-white/90 mb-1">Address:</p>
              <p className="text-gray-400">
                Tekisho Infotech Pvt. Ltd.<br />
                505 A, 5th Floor, Techno 1<br />
                Gachibowli Road, Raidurg<br />
                Hyderabad, Telangana - 500032<br />
                India
              </p>
            </div>
          </Section>

        </div>

      </div>
    </div>
  );
}
