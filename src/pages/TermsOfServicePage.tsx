import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold font-display text-white/90 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
      {children}
    </div>
  </div>
);

const Divider = () => <div className="border-t border-white/5 my-10" />;

export default function TermsOfServicePage() {
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
            <FileText className="w-4 h-4" /> Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            EmailQ – AI Email Management Platform
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">
          
          <div className="text-sm text-gray-400 mb-10 pb-10 border-b border-white/5 space-y-4">
            <p className="font-semibold text-white/80">
              Tekisho Infotech Pvt. Ltd.<br />
              505 A, 5th Floor, Techno 1, Gachibowli Road,<br />
              Raidurg, Hyderabad, Telangana – 500032, India
            </p>
            <p>
              <span className="text-white/60">Phone:</span> +91 9059443516<br />
              <span className="text-white/60">Email:</span> contact@tekisho.ai
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p><span className="text-white/60">Date:</span> March 10, 2026</p>
            </div>
          </div>

          <Section title="1. Agreement to Terms">
            <p>
              These Terms and Conditions ("Terms") govern your access to and use of EmailQ, an AI-powered email management and productivity platform (the "Service" or "Platform") operated by Tekisho Infotech Private Limited ("Company", "Tekisho", "we", "us", or "our").
            </p>
            <p>
              By accessing, registering for, or using the Service, you ("User", "Customer", "you", or "your") agree to be bound by these Terms, our Privacy Policy, and any other policies referenced herein.
            </p>
            <p className="font-bold text-red-400">
              IMPORTANT: If you do not agree to these Terms, you must not access or use the Service.
            </p>
            
            <h3 className="text-white/80 font-semibold mt-6 mb-2">Individual and Business Users</h3>
            <p>
              EmailQ may be used by both individual professionals and business organizations. References to “Customer” or “User” include both individuals and organizations.
            </p>

            <h3 className="text-white/80 font-semibold mt-6 mb-2">Authority</h3>
            <p>
              If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. If you are using the Service as an individual, you represent that you are legally capable of entering into a binding agreement.
            </p>
          </Section>

          <Section title="2. Description of the Service">
            <p>
              EmailQ is a Software-as-a-Service (SaaS) platform designed to help users manage, organize, and interact with emails using AI-powered tools and automation.
            </p>
            <p className="font-semibold text-white/80 mt-4 mb-2">Core Features may include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>AI-powered email drafting and responses</li>
              <li>Email organization using labels and categories</li>
              <li>Smart inbox prioritization</li>
              <li>Email analytics and insights</li>
              <li>Collaboration tools for teams</li>
              <li>Email automation and workflows</li>
              <li>Integrations with third-party platforms</li>
            </ul>

            <h3 className="text-white/80 font-semibold mt-6 mb-2">Service Modifications</h3>
            <p>
              Tekisho reserves the right to modify, enhance, suspend, or discontinue any part of the Service at any time.
            </p>
          </Section>

          <Section title="3. Eligibility and Account Registration">
            <p>
              You must be at least 18 years old and provide accurate registration information. You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.
            </p>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree to use the Service only for lawful purposes. You must not:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                'Violate laws or regulations',
                'Upload malware or malicious code',
                'Attempt unauthorized access',
                'Reverse engineer the platform',
                'Use scraping or bots without permission',
                'Infringe intellectual property rights',
                'Impersonate others',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  {item}
                </div>
              ))}
            </div>
          </Section>

          <Section title="5. Subscription, Billing, and Payments">
            <p>
              EmailQ may offer multiple subscription plans. Payments may be processed through Razorpay or other authorized payment providers.
            </p>
            
            <h3 className="text-white/80 font-semibold mt-6 mb-2">Auto-Renewal</h3>
            <p>Subscriptions renew automatically unless cancelled before the renewal date.</p>
            
            <h3 className="text-white/80 font-semibold mt-6 mb-2">Taxes</h3>
            <p>All fees are exclusive of applicable taxes including GST.</p>
          </Section>

          <Section title="6. Cancellation and Refunds">
            <p>
              You may cancel your subscription at any time through your account. Refund requests must be submitted within five (5) business days of payment and are subject to review.
            </p>
            <p className="font-semibold text-white/80 mt-4 mb-2">Refunds may not be issued for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Late requests</li>
              <li>Partial billing periods</li>
              <li>Extensive platform usage</li>
              <li>Account suspension due to violations</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              All intellectual property rights in the platform belong to Tekisho Infotech Private Limited. Users retain ownership of the data they upload.
            </p>
          </Section>

          <Section title="8. Availability and Support">
            <p>
              The Service is provided on an “as available” basis. While we aim for high uptime, uninterrupted service is not guaranteed.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              Users may terminate their accounts at any time. Tekisho may suspend or terminate access for violations, non-payment, or security risks.
            </p>
            <h3 className="text-white/80 font-semibold mt-6 mb-2">Data Retention</h3>
            <p>
              Following termination, user data may be retained for up to 90 days for account recovery or export before permanent deletion.
            </p>
          </Section>

          <Section title="10. Disclaimers and Limitation of Liability">
            <p className="uppercase font-semibold tracking-wide text-white/70">
              The Service is provided “AS IS” and “AS AVAILABLE” without warranties of any kind.
            </p>
            
            <h3 className="text-white/80 font-semibold mt-6 mb-2">AI and Automation Disclaimer</h3>
            <p className="bg-orange-500/10 border border-orange-500/20 text-orange-200 p-3 rounded-lg">
              EmailQ uses AI systems to generate and organize email content. AI-generated outputs may contain inaccuracies and should be reviewed before use.
            </p>

            <h3 className="text-white/80 font-semibold mt-6 mb-2">Limitation of Liability</h3>
            <p>
              Tekisho’s total liability shall not exceed the fees paid by the user in the previous 12 months or INR 10,000, whichever is lower.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify Tekisho from claims arising from misuse of the Service, violation of these Terms, or violation of applicable laws.
            </p>
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by the laws of India. Any disputes shall fall under the jurisdiction of courts located in Hyderabad, Telangana.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              Tekisho may update these Terms periodically. Continued use of the Service after updates constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="14. General Provisions">
            <div className="space-y-4">
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Entire Agreement</p>
                <p>These Terms represent the complete agreement between you and Tekisho.</p>
              </div>
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Severability</p>
                <p>If any provision is invalid, the remaining provisions remain enforceable.</p>
              </div>
              <div className="border-l-2 border-[#8b5cf6] pl-3">
                <p className="font-semibold text-white/80">Assignment</p>
                <p>Users may not transfer their rights without consent.</p>
              </div>
            </div>
          </Section>

          <Divider />

          <Section title="15. Contact Information">
             <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="font-semibold text-white/90 mb-1">Company: <span className="text-gray-400 font-normal">Tekisho Infotech Private Limited</span></p>
              <p className="font-semibold text-white/90 mb-3">Product: <span className="text-gray-400 font-normal">EmailQ – AI Email Management Platform</span></p>
              
              <p className="font-semibold text-white/90 mb-1">Address:</p>
              <p className="text-gray-400 mb-3">
                Tekisho Infotech Pvt. Ltd.<br />
                505 A, 5th Floor, Techno 1<br />
                Gachibowli Road, Raidurg<br />
                Hyderabad, Telangana – 500032
              </p>

              <p className="font-semibold text-white/90 mb-1">Contact:</p>
              <p className="text-gray-400">
                Email: contact@tekisho.ai<br />
                Phone: +91 9059443516
              </p>
            </div>
          </Section>

          <div className="mt-16 text-center bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 p-6 rounded-2xl">
            <p className="font-bold text-[#a78bfa] mb-2 uppercase tracking-widest text-sm">Acknowledgment</p>
            <p className="text-white/80">By accessing or using EmailQ, you confirm that you have read, understood, and agree to these Terms and Conditions.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
