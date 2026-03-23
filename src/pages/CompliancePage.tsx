import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold font-display text-white/90 mb-4">{title}</h2>
    <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h3 className="text-white/80 font-semibold mb-2">{title}</h3>
    <div className="space-y-2 text-gray-400">
      {children}
    </div>
  </div>
);

const Divider = () => <div className="border-t border-white/5 my-10" />;

export default function CompliancePage() {
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
            <ShieldCheck className="w-4 h-4" /> Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            Compliance
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Compliance and Regulatory Framework
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">

          <div className="text-sm text-gray-400 mb-10 pb-10 border-b border-white/5 space-y-2">
            <p><span className="text-white/60 font-semibold inline-block w-24">Company:</span> <span className="text-white/90 font-medium">Tekisho Infotech Pvt. Ltd.</span></p>
            <p><span className="text-white/60 font-semibold inline-block w-24">Product:</span> EmailQ.AI – AI Email Workflow & Inbox Automation Platform</p>
            <p><span className="text-white/60 font-semibold inline-block w-24">Last Updated:</span> March 10, 2026</p>
          </div>

          <Section title="1. Introduction">
            <SubSection title="1.1 Purpose and Scope">
              <p>
                This Compliance and Regulatory Framework ("Compliance Document") describes how Tekisho Infotech Pvt. Ltd. ("EmailQ", "we", "us", "our") maintains compliance with applicable laws, regulations, standards, and industry best practices in the operation of our AI-powered email workflow automation and inbox management platform (the "Service" or "Platform").
              </p>
              <p className="font-semibold text-white/80 mt-4 mb-2">Scope of Compliance Coverage:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <li>Data protection and privacy regulations worldwide</li>
                <li>Information security standards and frameworks</li>
                <li>Telecommunications and communication regulations</li>
                <li>Financial services and payment processing standards</li>
                <li>International trade and export control laws</li>
                <li>Intellectual property and licensing requirements</li>
                <li>Accessibility standards</li>
                <li>Environmental and social responsibility commitments</li>
              </ul>
            </SubSection>

            <SubSection title="1.2 Our Commitment to Compliance">
              <p>EmailQ is committed to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {[
                  { title: 'Legal Compliance', desc: 'Meeting or exceeding applicable legal and regulatory requirements.' },
                  { title: 'Proactive Approach', desc: 'Monitoring regulatory changes and adapting our practices accordingly.' },
                  { title: 'Continuous Improvement', desc: 'Regularly reviewing and strengthening our compliance program.' },
                  { title: 'Transparency', desc: 'Providing clear information about our compliance practices.' }
                ].map(item => (
                  <div key={item.title} className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <p className="font-semibold text-[#a78bfa] mb-1">{item.title}</p>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SubSection>

            <SubSection title="1.3 Compliance Governance Structure">
              <ul className="space-y-3 mt-2">
                <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-1.5 flex-shrink-0" /><div><strong className="text-white/80">Executive Leadership:</strong> CEO, CTO, and senior leadership oversee risk management and compliance.</div></li>
                <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-1.5 flex-shrink-0" /><div><strong className="text-white/80">Compliance Function:</strong> Internal security and privacy leads oversee operational compliance.</div></li>
                <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-1.5 flex-shrink-0" /><div><strong className="text-white/80">Data Protection Oversight:</strong> Responsible teams ensure adherence to privacy regulations and policies.</div></li>
              </ul>
            </SubSection>
          </Section>

          <Section title="2. Data Protection and Privacy Compliance">
            <SubSection title="2.1 Global Privacy Compliance Framework">
              <p className="mb-4">EmailQ aligns its privacy practices with major global privacy laws and frameworks.</p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#8b5cf6] pl-3">
                  <p className="font-semibold text-white/90">2.1.1 General Data Protection Regulation (GDPR) – EU/UK</p>
                  <p className="text-xs mt-1"><span className="text-green-400 font-semibold block mb-1">Compliance Status:</span> Privacy practices aligned with GDPR principles including transparency, data minimization, and user rights.</p>
                </div>
                <div className="border-l-2 border-[#8b5cf6] pl-3">
                  <p className="font-semibold text-white/90">2.1.2 California Consumer Privacy Act (CCPA/CPRA) – United States</p>
                  <p className="text-xs mt-1"><span className="text-green-400 font-semibold block mb-1">Compliance Status:</span> Processes implemented to support consumer data rights and transparency obligations.</p>
                </div>
                <div className="border-l-2 border-[#8b5cf6] pl-3">
                  <p className="font-semibold text-white/90">2.1.3 Digital Personal Data Protection Act (DPDP Act) – India</p>
                  <p className="text-xs mt-1"><span className="text-green-400 font-semibold block mb-1">Compliance Status:</span> Platform practices aligned with the DPDP Act, 2023 requirements for consent, purpose limitation, and data security.</p>
                </div>
              </div>
            </SubSection>

            <SubSection title="2.2 Privacy Compliance Processes">
              <p>EmailQ maintains structured processes for privacy management including:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Data mapping and classification</li>
                <li>Privacy impact assessments for new features</li>
                <li>User data access and deletion request handling</li>
                <li>Defined response timelines for data subject requests</li>
              </ul>
            </SubSection>

            <SubSection title="2.3 Privacy Compliance Certifications">
              <div className="bg-white/5 rounded-lg p-4 mt-2 border border-white/10">
                <p><strong className="text-white/70">Current:</strong> Internal privacy compliance reviews aligned with global frameworks.</p>
                <p className="mt-2"><strong className="text-white/70">Planned:</strong> ISO 27701 privacy management framework (target implementation 2026).</p>
              </div>
            </SubSection>
          </Section>

          <Section title="3. Information Security Compliance">
            <SubSection title="3.1 Security Frameworks and Standards">
              <ul className="space-y-2 mt-2">
                <li><strong className="text-white/80">ISO 27001:</strong> Security management implementation in progress (target 2026).</li>
                <li><strong className="text-white/80">SOC 2 Type II:</strong> Security and operational controls implementation in progress.</li>
                <li><strong className="text-white/80">NIST Cybersecurity Framework:</strong> Security controls aligned with NIST best practices.</li>
                <li><strong className="text-white/80">CIS Critical Security Controls:</strong> Implemented version 8 security controls.</li>
              </ul>
            </SubSection>

            <SubSection title="3.2 Security Controls Implementation">
              <div className="space-y-3 mt-2">
                {[
                  { label: 'Access Control', desc: 'Role-based access control (RBAC), employee authentication controls, and optional SSO support.' },
                  { label: 'Encryption', desc: 'TLS encryption for data in transit and strong encryption standards for stored data.' },
                  { label: 'Network Security', desc: 'Firewall protection, DDoS mitigation, and vulnerability monitoring.' },
                  { label: 'Application Security', desc: 'Secure development lifecycle practices and OWASP Top 10 mitigation.' },
                  { label: 'Backup & Recovery', desc: 'Regular backups and disaster recovery readiness testing.' }
                ].map(item => (
                  <p key={item.label}><strong className="text-[#a78bfa]">{item.label}:</strong> {item.desc}</p>
                ))}
              </div>
            </SubSection>

            <SubSection title="3.3 Physical and Environmental Security">
              <p>Platform infrastructure is hosted on reputable cloud providers with physical security controls including 24/7 monitoring and restricted access facilities.</p>
            </SubSection>
          </Section>

          <Section title="4. Industry-Specific Compliance">
            <p>EmailQ follows SaaS platform best practices and responsible AI principles including fairness, transparency, and accountability in automated email processing features.</p>
          </Section>

          <Section title="5. Telecommunications and Communication Compliance">
            <p>When integrations are used for communication services, EmailQ adheres to relevant messaging and communication policies applicable to those services.</p>
          </Section>

          <Section title="6. Financial and Payment Compliance">
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Payments for EmailQ subscriptions are processed through authorized payment providers such as Razorpay.</li>
              <li>EmailQ does not store full credit card numbers, CVV data, or bank credentials.</li>
              <li>Payment processors maintain PCI-DSS compliant infrastructure.</li>
            </ul>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-white/90 font-bold mb-3">7. International Trade and Export Controls</h3>
              <p className="text-sm text-gray-400">EmailQ complies with applicable international trade restrictions and export control laws including sanctions and restricted entity requirements.</p>
            </div>
            <div>
              <h3 className="text-white/90 font-bold mb-3">8. Employment and Labor Compliance</h3>
              <p className="text-sm text-gray-400">Tekisho Infotech Pvt. Ltd. complies with applicable labor and employment laws including workplace safety, non-discrimination, and employee welfare regulations.</p>
            </div>
            <div>
              <h3 className="text-white/90 font-bold mb-3">9. Intellectual Property Compliance</h3>
              <p className="text-sm text-gray-400">EmailQ protects company intellectual property including trademarks, software code, and proprietary technologies while complying with third-party and open-source licensing requirements.</p>
            </div>
            <div>
              <h3 className="text-white/90 font-bold mb-3">10. Accessibility Compliance</h3>
              <p className="text-sm text-gray-400">EmailQ aims to align with accessibility best practices including WCAG 2.1 Level AA standards to ensure usability for individuals with disabilities.</p>
            </div>
          </div>

          <Section title="11. Environmental and Social Responsibility">
            <p>EmailQ promotes responsible technology practices including energy-efficient cloud infrastructure usage and inclusive workplace policies.</p>
          </Section>

          <Section title="12. Compliance Monitoring and Auditing">
            <p>Compliance activities include internal monitoring, security logging, periodic risk reviews, and independent security assessments where appropriate.</p>
          </Section>

          <Section title="13. Incident Response and Breach Notification">
            <p>EmailQ maintains an internal security incident response plan to detect, respond to, and mitigate potential security incidents.</p>
            <p className="mt-2">Where required by law, affected users and authorities will be notified within legally mandated timelines.</p>
          </Section>

          <Section title="14. Third-Party and Vendor Compliance">
            <p>Third-party service providers are evaluated through vendor risk assessments and contractual data protection obligations.</p>
          </Section>

          <Section title="15. Training and Awareness">
            <p>Employees receive periodic training related to data protection, security practices, and compliance responsibilities.</p>
          </Section>

          <Section title="16. Compliance Reporting and Transparency">
            <p>EmailQ aims to maintain transparency regarding security and privacy practices through documentation, policies, and communication with customers.</p>
          </Section>

          <Divider />

          <Section title="17. Contact Information">
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
              <p className="font-semibold text-white/90 mb-1">Company: <span className="text-gray-400 font-normal">Tekisho Infotech Pvt. Ltd.</span></p>
              <p className="font-semibold text-white/90 mb-3">Product: <span className="text-gray-400 font-normal">EmailQ.AI – AI Email Workflow Automation Platform</span></p>
              
              <p className="font-semibold text-white/90 mb-1">Email:</p>
              <p className="text-gray-400 mb-3 hover:text-white transition-colors"><a href="mailto:contact@tekisho.ai">contact@tekisho.ai</a></p>

              <p className="font-semibold text-white/90 mb-1">Address:</p>
              <p className="text-gray-400">
                505 A, 5th Floor, Techno 1<br />
                Gachibowli Road, Raidurg<br />
                Hyderabad, Telangana - 500032<br />
                India
              </p>
            </div>
          </Section>

          <div className="mt-16 text-center">
            <p className="font-semibold text-gray-500 uppercase tracking-widest text-xs">END OF COMPLIANCE DOCUMENT</p>
          </div>

        </div>

      </div>
    </div>
  );
}
