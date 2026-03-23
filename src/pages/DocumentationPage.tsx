import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Shield, Zap, BookOpen, Users, BarChart2, Star, HelpCircle, Rocket } from 'lucide-react';

const Section = ({ icon: Icon, title, children }: { icon?: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="mb-14">
    <div className="flex items-center gap-3 mb-6">
      {Icon && <div className="w-9 h-9 rounded-lg bg-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-[#a78bfa]" /></div>}
      <h2 className="text-2xl font-bold font-display">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-400 leading-relaxed">{children}</div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-white/90 mb-3">{title}</h3>
    <div className="space-y-2 text-gray-400">{children}</div>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8b5cf6] flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const Divider = () => <div className="border-t border-white/5 my-14" />;

export default function DocumentationPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#a78bfa] text-xs font-semibold uppercase tracking-widest mb-6">
            Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            EmailQ — Your <span className="text-gradient">AI-Powered</span> Email Assistant
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Everything you need to know about EmailQ — features, setup, use cases, pricing, and more.
          </p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12">

          {/* What is EmailQ */}
          <Section icon={BookOpen} title="What is EmailQ?">
            <p>
              EmailQ is an intelligent email management platform that transforms how you handle your inbox. Using advanced AI technology, EmailQ automatically organizes, prioritizes, and helps you respond to emails—saving you hours every week and ensuring you never miss what matters most.
            </p>
            <p>
              Think of EmailQ as your personal email assistant that works 24/7, learning your communication style and helping you maintain inbox zero without the stress.
            </p>
          </Section>

          <Divider />

          {/* Who is EmailQ For */}
          <Section icon={Users} title="Who is EmailQ For?">
            <SubSection title="Personal Users">
              <p>Perfect for individuals who want to:</p>
              <ul className="mt-2 space-y-1.5">
                <Bullet>Declutter their personal inbox</Bullet>
                <Bullet>Never miss important emails from family, friends, or service providers</Bullet>
                <Bullet>Quickly find receipts, bills, and travel bookings</Bullet>
                <Bullet>Reduce email overwhelm and stress</Bullet>
              </ul>
            </SubSection>
            <SubSection title="Professionals & Teams">
              <p>Ideal for businesses that need to:</p>
              <ul className="mt-2 space-y-1.5">
                <Bullet>Manage customer inquiries efficiently</Bullet>
                <Bullet>Ensure timely responses to sales leads</Bullet>
                <Bullet>Organize departmental communications</Bullet>
                <Bullet>Track team email performance</Bullet>
                <Bullet>Maintain professional response standards</Bullet>
              </ul>
            </SubSection>
            <SubSection title="Specific Personas">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { label: 'Busy Professionals', desc: 'Focus on high-priority meetings and decisions with ultra-concise communication' },
                  { label: 'Job Seekers', desc: 'Never miss recruiter emails or ATS notifications, respond professionally and promptly' },
                  { label: 'Freelancers', desc: 'Prioritize client leads and invoices, craft replies that move projects forward' },
                  { label: 'Parents & Households', desc: 'Keep track of school updates, bills, and family events without missing a beat' },
                  { label: 'Students', desc: 'Stay on top of course materials, professor emails, and academic deadlines' },
                ].map(p => (
                  <div key={p.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="font-semibold text-white/90 text-sm mb-1">{p.label}</p>
                    <p className="text-xs text-gray-500">{p.desc}</p>
                  </div>
                ))}
              </div>
            </SubSection>
          </Section>

          <Divider />

          {/* Key Features */}
          <Section icon={Star} title="Key Features">
            {[
              {
                emoji: '🎯', name: 'Smart Inbox',
                desc: 'Your inbox is automatically divided into two views:',
                bullets: ['Focus Inbox: Important, actionable emails that need your attention', 'Noise Folder: Low-priority emails, newsletters, and promotions'],
              },
              {
                emoji: '🏷️', name: 'Intelligent Categorization',
                desc: 'Emails are automatically sorted into customizable categories for both personal and team use.',
                bullets: [],
              },
              {
                emoji: '⚡', name: 'Priority Detection',
                desc: 'EmailQ automatically identifies High Priority (urgent) and Normal Priority emails.',
                bullets: [],
              },
              {
                emoji: '✍️', name: 'AI-Generated Draft Responses',
                desc: 'Save time with intelligent reply suggestions:',
                bullets: ['Quick Reply Chips: One-click responses for common scenarios', 'Full Draft Responses: AI crafts complete, contextual replies in your tone', 'Smart Context: Responses draw from your organization\'s knowledge base'],
              },
              {
                emoji: '📚', name: 'Knowledge Base Integration',
                desc: 'Upload documents, policies, and FAQs so AI learns from your materials and generates accurate, company-specific responses.',
                bullets: [],
              },
              {
                emoji: '🤖', name: 'Personalized AI Personas',
                desc: 'Choose how EmailQ communicates: Professional, Job Seeker, Freelancer, Parent/Household, or Student.',
                bullets: [],
              },
              {
                emoji: '🧹', name: 'Auto-Cleanup',
                desc: 'Automatically archive old "noise" emails after a set number of days with suggest, archive, or trash modes.',
                bullets: [],
              },
              {
                emoji: '📊', name: 'Analytics & Insights',
                desc: 'Understand email volume, response times, priority distribution, agent performance, and trends.',
                bullets: [],
              },
              {
                emoji: '🔐', name: 'Secure Gmail Integration',
                desc: 'Direct OAuth connection to your Gmail. Your password stays private, all data is encrypted.',
                bullets: [],
              },
            ].map(f => (
              <div key={f.name} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-4">
                <p className="font-semibold text-white/90 mb-2">{f.emoji} {f.name}</p>
                <p className="text-sm">{f.desc}</p>
                {f.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {f.bullets.map(b => <Bullet key={b}><span className="text-sm">{b}</span></Bullet>)}
                  </ul>
                )}
              </div>
            ))}
          </Section>

          <Divider />

          {/* How it Works */}
          <Section icon={Zap} title="How EmailQ Works">
            <div className="space-y-4">
              {[
                { step: 1, title: 'Connect Your Email', desc: 'Securely connect your Gmail account with one click using OAuth authentication. Your password stays private.' },
                { step: 2, title: 'Set Up Your Categories', desc: 'Choose from default categories or create custom ones that match your workflow.' },
                { step: 3, title: 'Choose Your Persona', desc: 'Select the communication style that best fits you or your brand.' },
                { step: 4, title: 'Add Your Knowledge (Optional)', desc: 'Upload documents, FAQs, policies, or reference materials for more accurate responses.' },
                { step: 5, title: 'Let EmailQ Work', desc: 'EmailQ monitors your inbox, categorizes each email, determines priority, and generates draft responses automatically.' },
                { step: 6, title: 'Review & Respond', desc: 'See quick summaries, choose AI-generated quick replies, edit full draft responses, and send with one click.' },
              ].map(s => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0 text-[#a78bfa] text-sm font-bold">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-white/90">{s.title}</p>
                    <p className="text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* Benefits */}
          <Section icon={BarChart2} title="Benefits at a Glance">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: '⏰', title: 'Save Time', desc: 'Spend minutes instead of hours on email each day.' },
                { emoji: '🎯', title: 'Never Miss Important Emails', desc: 'Priority detection ensures critical messages rise to the top.' },
                { emoji: '📝', title: 'Consistent Communication', desc: 'Maintain professional, on-brand responses even when you\'re busy.' },
                { emoji: '🧘', title: 'Reduce Stress', desc: 'Inbox overwhelm becomes a thing of the past.' },
                { emoji: '👥', title: 'Team Efficiency', desc: 'Ensure customer inquiries are handled promptly with quality responses.' },
                { emoji: '📈', title: 'Data-Driven Insights', desc: 'Understand email patterns and optimize your communication strategy.' },
                { emoji: '🔄', title: 'Continuous Learning', desc: 'EmailQ improves its suggestions from your ongoing feedback.' },
              ].map(b => (
                <div key={b.title} className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="text-lg mb-1">{b.emoji} <span className="font-semibold text-white/90 text-sm">{b.title}</span></p>
                  <p className="text-xs text-gray-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* Use Cases */}
          <Section icon={Users} title="Use Cases">
            {[
              { title: 'Customer Support Teams', bullets: ['Auto-categorize support tickets', 'Generate consistent, helpful responses', 'Reduce response times', 'Track team performance', 'Maintain knowledge base of solutions'] },
              { title: 'Sales Teams', bullets: ['Prioritize hot leads', 'Never miss a follow-up opportunity', 'Craft persuasive, professional replies', 'Focus on closing deals, not email management'] },
              { title: 'Freelancers & Consultants', bullets: ['Quickly respond to client inquiries', 'Prioritize paying clients', 'Track invoices and payments', 'Spend more time on billable work'] },
              { title: 'Job Seekers', bullets: ['Never miss recruiter emails', 'Respond promptly to opportunities', 'Track application status', 'Make a great first impression'] },
              { title: 'Small Business Owners', bullets: ['Handle multiple aspects of business communication', 'Maintain professional responses across departments', 'Scale communication as you grow'] },
              { title: 'Busy Parents', bullets: ['Track school communications', 'Manage bills and appointments', 'Filter out commercial noise', 'Reduce email stress'] },
            ].map(u => (
              <div key={u.title} className="mb-6">
                <h3 className="font-semibold text-white/90 mb-2">{u.title}</h3>
                <ul className="space-y-1.5">
                  {u.bullets.map(b => <Bullet key={b}><span className="text-sm">{b}</span></Bullet>)}
                </ul>
              </div>
            ))}
          </Section>

          <Divider />

          {/* Getting Started */}
          <Section icon={Rocket} title="Getting Started">
            <SubSection title="For Personal Use">
              <ol className="space-y-2 list-decimal list-inside">
                {['Sign up on EmailQ', 'Connect your Gmail account', 'Select your persona (Professional, Student, Parent, etc.)', 'Choose your email categories', 'Start experiencing inbox peace'].map((s, i) => (
                  <li key={i} className="text-sm">{s}</li>
                ))}
              </ol>
            </SubSection>
            <SubSection title="For Teams & Organizations">
              <ol className="space-y-2 list-decimal list-inside">
                {['Create your organization account', 'Set up departments and categories', 'Connect team email accounts', 'Upload company knowledge base', 'Invite team members', 'Configure cleanup and notification preferences', 'Monitor performance through analytics'].map((s, i) => (
                  <li key={i} className="text-sm">{s}</li>
                ))}
              </ol>
            </SubSection>
          </Section>

          <Divider />

          {/* Privacy */}
          <Section icon={Shield} title="Privacy & Security">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Secure OAuth', desc: 'Your Gmail password is never stored or seen.' },
                { title: 'Minimal Data Storage', desc: 'Only essential email metadata is retained.' },
                { title: 'Encrypted Communication', desc: 'All data transmission is encrypted.' },
                { title: 'No Data Selling', desc: 'Your information is never sold to third parties.' },
                { title: 'Compliance Ready', desc: 'Designed with GDPR and privacy regulations in mind.' },
              ].map(p => (
                <div key={p.title} className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="font-semibold text-white/90 text-sm mb-1">🔒 {p.title}</p>
                  <p className="text-xs text-gray-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* Pricing */}
          <Section icon={Star} title="Pricing Tiers">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { tier: 'Free', desc: 'Perfect for trying EmailQ', features: ['100 emails/month', 'Basic categorization', 'AI draft responses', '1 connected email account'] },
                { tier: 'Personal Pro', desc: 'For individuals', features: ['Unlimited emails', 'All AI features', 'Priority support', 'Custom categories', 'Advanced analytics'] },
                { tier: 'Team', desc: 'For small businesses', features: ['Multiple user accounts', 'Shared knowledge base', 'Team analytics', 'Advanced customization', 'Priority support'] },
                { tier: 'Enterprise', desc: 'For large organizations', features: ['Custom integration', 'Advanced security', 'Dedicated account manager', 'Custom AI training', 'SLA guarantees'] },
              ].map(p => (
                <div key={p.tier} className={`border rounded-xl p-5 ${p.tier === 'Personal Pro' ? 'border-[#8b5cf6]/50 bg-[#8b5cf6]/5' : 'border-white/10 bg-white/[0.03]'}`}>
                  <p className="font-bold text-white/90 mb-1">{p.tier}</p>
                  <p className="text-xs text-gray-500 mb-3">{p.desc}</p>
                  <ul className="space-y-1.5">
                    {p.features.map(f => <Bullet key={f}><span className="text-xs">{f}</span></Bullet>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm mt-4 text-gray-500">Contact sales for detailed Enterprise pricing.</p>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section icon={HelpCircle} title="Frequently Asked Questions">
            <div className="space-y-4">
              {[
                { q: 'Does EmailQ read all my emails?', a: 'EmailQ only processes emails to categorize and suggest responses. Your data is secure and never shared.' },
                { q: 'Can EmailQ send emails without my approval?', a: 'No. EmailQ only generates draft responses. You always review and approve before sending.' },
                { q: 'What if EmailQ miscategorizes an email?', a: 'You can easily reclassify emails, and EmailQ learns from your corrections to improve accuracy.' },
                { q: 'Does EmailQ work with email providers other than Gmail?', a: 'Currently, EmailQ supports Gmail. Support for other providers is coming soon.' },
                { q: 'Can I customize the AI\'s communication style?', a: 'Yes! Choose from preset personas or train the AI with your own communication examples.' },
                { q: 'What happens to archived "noise" emails?', a: 'They\'re archived in your Gmail account. You can always search for them or disable auto-cleanup.' },
                { q: 'Is my data secure?', a: 'Absolutely. We use bank-level encryption, secure OAuth authentication, and never sell your data.' },
                { q: 'Can I cancel anytime?', a: 'Yes, cancel anytime with no penalties. Your Gmail account remains fully intact.' },
              ].map(faq => (
                <div key={faq.q} className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                  <p className="font-semibold text-white/90 text-sm mb-2">Q: {faq.q}</p>
                  <p className="text-sm text-gray-400">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* Contact */}
          <Section icon={Mail} title="Contact & Support">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Website', value: 'www.emailq.app' },
                { label: 'Support Email', value: 'support@emailq.app' },
                { label: 'Documentation', value: 'docs.emailq.app' },
                { label: 'Community', value: 'community.emailq.app' },
                { label: 'Twitter / X', value: '@EmailQApp' },
                { label: 'LinkedIn', value: 'EmailQ' },
              ].map(c => (
                <div key={c.label} className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{c.label}</p>
                  <p className="text-sm font-semibold text-white/80">{c.value}</p>
                </div>
              ))}
            </div>
          </Section>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">Work Smarter, Not Harder. Your Inbox, Reimagined.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
