import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold font-display text-white/90 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
      {children}
    </div>
  </div>
);

const Divider = () => <div className="border-t border-white/5 my-10" />;

export default function PrivacyPolicyPage() {
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
            <Shield className="w-4 h-4" /> Privacy Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            EmailQ.AI – AI Email Workflow & Inbox Automation Platform
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">
          
          <div className="text-sm text-gray-400 mb-10 pb-10 border-b border-white/5 space-y-4">
            <p className="font-semibold text-white/80">
              Tekisho Infotech Pvt. Ltd.<br />
              505 A, 5th Floor, Techno 1<br />
              Gachibowli Road, Raidurg<br />
              Hyderabad, Telangana – 500032, India
            </p>
            <p>
              <span className="text-white/60">Phone:</span> +91 9059443516<br />
              <span className="text-white/60">Email:</span> contact@tekisho.ai
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p><span className="text-white/60">Version:</span> 1.0</p>
              <p><span className="text-white/60">Last Updated:</span> March 10, 2026</p>
              <p><span className="text-white/60">Effective Date:</span> March 10, 2026</p>
            </div>
          </div>

          <Section title="1. Introduction">
            <p>
              Tekisho Infotech Private Limited ("Tekisho", "we", "us", or "our") operates EmailQ, an AI-powered email workflow automation and inbox management platform (the "Service" or "Platform").
            </p>
            <p>
              EmailQ enables individuals and organizations to manage email communication more efficiently through AI-powered email processing, automated workflows, intelligent categorization, inbox prioritization, and collaboration features.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when individuals or organizations access or use the Service.
            </p>
          </Section>

          <Section title="2. Scope and Roles">
            <p>
              This Privacy Policy applies to all EmailQ websites and applications that link to this policy and to all users who create an account or interact with the platform.
            </p>
            <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="font-semibold text-white/90 mb-2">Customer / User:</p>
              <p className="mb-4">The individual or organization using EmailQ who determines how email communication or workflow data is processed within the platform.</p>
              
              <p className="font-semibold text-white/90 mb-2">Tekisho's Role:</p>
              <ul className="list-disc leading-relaxed list-inside space-y-2 mb-4">
                <li><strong className="text-white/80">Data Fiduciary (Controller)</strong> for account information, billing information, authentication data, platform administration, and security monitoring.</li>
                <li><strong className="text-white/80">Data Processor</strong> for emails processed through the platform, workflow automation data, and collaboration data.</li>
              </ul>
              <p className="text-xs text-white/50 italic">
                This structure aligns with the Digital Personal Data Protection Act, 2023 (India).
              </p>
            </div>
          </Section>

          <Section title="3. Information We Collect">
            <div className="space-y-4 mt-2">
              <div>
                <p className="font-semibold text-white/80 mb-1">Account Information:</p>
                <ul className="list-disc list-inside ml-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company or organization name</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white/80 mb-1">Email Data Processed by the Platform:</p>
                <ul className="list-disc list-inside ml-2">
                  <li>Email subject lines</li>
                  <li>Sender and recipient email addresses</li>
                  <li>Message content</li>
                  <li>Labels or categories applied to emails</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white/80 mb-1">Payment and Billing Information:</p>
                <p>Tekisho does not store full credit card numbers, CVV, UPI credentials, or bank account details. Payments are securely processed by authorized payment processors.</p>
              </div>
              <div>
                <p className="font-semibold text-white/80 mb-1">Communications:</p>
                <p>We may collect customer support requests, feedback, and communications with our team.</p>
              </div>
            </div>
          </Section>

          <Section title="4. Information Collected Automatically">
            <p>When you access EmailQ we may automatically collect:</p>
            <ul className="list-disc list-inside ml-2 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device and operating system</li>
              <li>Log records and timestamps</li>
              <li>Platform usage data</li>
              <li>Session duration</li>
            </ul>
            <p className="mt-4">This data is used for security, analytics, and service improvement.</p>
          </Section>

          <Section title="5. How We Use Information">
            <p>We use information to:</p>
            <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
              <li>Provide and maintain the EmailQ platform</li>
              <li>Authenticate users and manage accounts</li>
              <li>Process subscriptions and payments</li>
              <li>Enable AI-powered email workflows</li>
              <li>Provide customer support</li>
              <li>Improve product performance</li>
              <li>Detect fraud or unauthorized activity</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 font-semibold text-[#8b5cf6]">
              Tekisho does not sell personal data and does not use email data for third-party advertising.
            </p>
          </Section>

          <Section title="6. AI Processing and Data Limitations">
            <p>EmailQ may use AI systems to analyze, categorize, and prioritize emails.</p>
            <p className="mt-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200">
              AI-generated insights may occasionally contain inaccuracies. Users should review automated recommendations before making critical decisions.
            </p>
          </Section>

          <Section title="7. Payment Processing">
            <p>Payments are processed through Razorpay or other authorized processors compliant with PCI-DSS standards.</p>
            <p className="mt-2">Tekisho retains only limited transaction metadata required for accounting, support, and dispute resolution.</p>
          </Section>

          <Section title="8. Data Security">
            <p>We implement security safeguards including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 mb-4">
              {['Encryption in transit (TLS/SSL)', 'Role-based access control', 'System monitoring and logging', 'Security assessments', 'Employee confidentiality training'].map(item => (
                <div key={item} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  {item}
                </div>
              ))}
            </div>
            <p className="italic text-white/50">However, no digital system can guarantee absolute security.</p>
          </Section>

          <Section title="9. Data Sharing">
            <p className="font-semibold text-white/80 mb-2">We do not sell personal data.</p>
            <p>Information may be shared with trusted service providers for infrastructure, payment processing, analytics, and monitoring.</p>
            <p className="mt-2">We may also disclose data if required by law.</p>
          </Section>

          <Section title="10. Data Retention">
            <div className="space-y-3 mt-3">
              {[
                { label: 'Active accounts', desc: 'retained during subscription' },
                { label: 'Cancelled accounts', desc: 'retained up to 90 days' },
                { label: 'Backups', desc: 'retained up to 180 days' },
                { label: 'Legal and tax records', desc: 'retained up to 7 years' },
              ].map(item => (
                <div key={item.label} className="border-l-2 border-[#8b5cf6] pl-3 py-1">
                  <span className="font-semibold text-white/80">{item.label}</span> – {item.desc}
                </div>
              ))}
            </div>
            <p className="mt-4">After retention periods, data is securely deleted or anonymized.</p>
          </Section>

          <Section title="11. User Rights">
            <p>Users may have rights to:</p>
            <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
              <li>Access their personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion (subject to legal requirements)</li>
              <li>Withdraw consent</li>
              <li>Object to marketing communications</li>
            </ul>
            <p className="mt-4 p-3 bg-white/5 rounded-lg inline-block border border-white/10">
              Requests can be submitted to <a href="mailto:contact@tekisho.ai" className="text-[#8b5cf6] hover:underline">contact@tekisho.ai</a> and will be addressed within 30 days.
            </p>
          </Section>

          <Section title="12. Cookies">
            <p>
              EmailQ uses cookies for authentication, maintaining sessions, remembering user preferences, and monitoring performance.
            </p>
            <p className="mt-2">Users may manage cookies through browser settings.</p>
          </Section>

          <Section title="13. International Data Transfers">
            <p>
              Data is primarily processed in India. When international transfers occur, appropriate safeguards are applied.
            </p>
          </Section>

          <Section title="14. Children's Privacy">
            <p>
              EmailQ is not intended for individuals under 18 years of age.
            </p>
          </Section>

          <Section title="15. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically. Continued use of the service after updates constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="16. Grievance Redressal">
            <p>Privacy-related concerns can be sent to:</p>
            <p className="mt-2 text-[#8b5cf6] font-semibold"><a href="mailto:contact@tekisho.ai" className="hover:underline">contact@tekisho.ai</a></p>
            <p className="mt-1 text-white/60">Response time: within 30 days.</p>
          </Section>

          <Divider />

          <Section title="17. Contact Information">
             <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="font-semibold text-white/90 mb-1">Company: <span className="text-gray-400 font-normal">Tekisho Infotech Pvt. Ltd.</span></p>
              <p className="font-semibold text-white/90 mb-3">Product: <span className="text-gray-400 font-normal">EmailQ.AI – AI Email Workflow Automation Platform</span></p>
              
              <p className="font-semibold text-white/90 mb-1">Address:</p>
              <p className="text-gray-400">
                505 A, 5th Floor, Techno 1<br />
                Gachibowli Road, Raidurg<br />
                Hyderabad, Telangana – 500032<br />
                India
              </p>
            </div>
          </Section>

          <div className="mt-16 text-center bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 p-6 rounded-2xl">
            <p className="font-bold text-[#a78bfa] mb-2 uppercase tracking-widest text-sm">Acknowledgment</p>
            <p className="text-white/80">By using EmailQ.AI, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
