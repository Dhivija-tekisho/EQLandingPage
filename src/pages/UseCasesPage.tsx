import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2, User, Headphones, TrendingUp, Briefcase,
  GraduationCap, ShoppingBag, Heart, Users, Laptop,
  CheckCircle2, Mail, Layers, BarChart3,
  BookOpen, Bell, Clock, Star, Shield, Zap
} from 'lucide-react';
import CTA from '../components/CTA';

/* ─── Data ─────────────────────────────────────────────────────────── */

const orgUseCases = [
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Slash response times and deliver high-quality support at scale.',
    benefits: [
      'Auto-categorize tickets by urgency',
      'Generate instant, helpful replies',
      'Track performance via SLA dashboards',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Sales Teams',
    description: 'Focus on closing deals — let AI handle the inbox chasing.',
    benefits: [
      'Prioritise hot leads with AI scoring',
      'Craft persuasive replies in seconds',
      'Get pipeline insights from activity',
    ],
  },
  {
    icon: Users,
    title: 'HR & Recruiting',
    description: 'Streamline communication from application to offer.',
    benefits: [
      'Auto-categorize applications by stage',
      'Coordinate interview scheduling',
      'Faster triage for time-to-hire',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Turn every customer email into a seamless brand experience.',
    benefits: [
      'Auto-reply to shipping inquiries',
      'Escalate complaints before reviews',
      'Categorise returns & refunds instantly',
    ],
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Keep students, faculty, and parents in perfect sync.',
    benefits: [
      'Route student queries to departments',
      'Generate academic support replies',
      'Automate admission inquiry responses',
    ],
  },
  {
    icon: Shield,
    title: 'Legal & Compliance',
    description: 'Stay on top of correspondence with zero missed deadlines.',
    benefits: [
      'Flag high-priority notices immediately',
      'Maintain audit trails of correspondence',
      'Reduce risk of missed communications',
    ],
  },
];

const individualUseCases = [
  {
    icon: Briefcase,
    title: 'Freelancers',
    description: 'More billable hours, less inbox anxiety.',
    benefits: [
      'AI drafts for client inquiries',
      'Prioritise paying clients automatically',
      'Track invoices & payment threads',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Job Seekers',
    description: 'Stay ahead in your search — never miss an opportunity.',
    benefits: [
      'Never miss recruiter deadlines',
      'Respond promptly to invitations',
      'Generate polished follow-up emails',
    ],
  },
  {
    icon: Laptop,
    title: 'Remote Workers',
    description: 'Cut through async overload and stay focused.',
    benefits: [
      'Triage team emails by urgency',
      'Draft async updates & replies fast',
      'Digest summaries of long chains',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Small Business',
    description: 'Run your business communication like a pro team — solo.',
    benefits: [
      'Handle multiple threads at once',
      'Professional responses across topics',
      'Auto-categorise supplier & admin mail',
    ],
  },
  {
    icon: Heart,
    title: 'Busy Parents',
    description: 'Keep your family life organised without the overwhelm.',
    benefits: [
      'Track school events & deadlines',
      'Manage bills & appointments easily',
      'Reminders for time-sensitive emails',
    ],
  },
  {
    icon: Star,
    title: 'Content Creators',
    description: 'Manage brand deals, fan mail, and collabs with ease.',
    benefits: [
      'Prioritise brand deals & sponsorships',
      'Auto-draft collab request replies',
      'Organise fan mail and community',
    ],
  },
];



const orgSteps = [
  { icon: Mail, step: '01', title: 'Create your organisation account', desc: 'Sign up and configure your workspace with your company name and domain.' },
  { icon: Layers, step: '02', title: 'Set up departments & categories', desc: 'Define your team structure — Support, Sales, HR, Finance — so emails route correctly.' },
  { icon: Users, step: '03', title: 'Connect team email accounts', desc: 'Link Gmail or other accounts for every team member in minutes.' },
  { icon: BookOpen, step: '04', title: 'Upload your knowledge base', desc: 'Add FAQs, SOPs, and docs so AI drafts context-rich, accurate replies.' },
  { icon: Bell, step: '05', title: 'Configure SLA & notifications', desc: 'Set breach thresholds and alert rules so nothing critical slips.' },
  { icon: BarChart3, step: '06', title: 'Monitor via analytics dashboard', desc: 'Track response times, team load, and performance across all departments.' },
];

const individualSteps = [
  { icon: Mail, step: '01', title: 'Sign up on EmailQ', desc: 'Create your free account — no credit card required.' },
  { icon: Zap, step: '02', title: 'Connect your Gmail account', desc: 'One-click OAuth integration. No manual setup.' },
  { icon: User, step: '03', title: 'Select your persona', desc: 'Choose Professional, Student, Parent, Job Seeker, or custom.' },
  { icon: Layers, step: '04', title: 'Choose your email categories', desc: 'Pick the categories that matter to you — or let AI suggest them.' },
  { icon: CheckCircle2, step: '05', title: 'Start experiencing inbox peace', desc: "EmailQ handles the triage — you focus on what actually matters." },
];

/* ─── Sub-components ────────────────────────────────────────────────── */

function UseCaseCard({ item, idx, color }: { item: typeof orgUseCases[0]; idx: number; color: string }) {
  const Icon = item.icon;
  const glow = `${color}28`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08 }}
      className="relative rounded-2xl border border-white/10 bg-[#1a1f3a]/60 backdrop-blur-md p-7 flex flex-col gap-5 group hover:border-white/20 transition-all duration-300 overflow-hidden"
      style={{ boxShadow: `0 4px 32px ${glow}` }}
    >
      {/* Top colour bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
      {/* Hover bg glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${color}18, transparent 65%)` }}
      />

      <div className="relative z-10">
        {/* Icon + title */}
        <div className="flex items-center gap-4 mb-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${color}20`, border: `1px solid ${color}40` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg font-display leading-snug">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-0.5">{item.description}</p>
          </div>
        </div>

        {/* Benefits */}
        <ul className="space-y-2.5 mt-4">
          {item.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function StepItem({ item, idx, color }: { item: typeof orgSteps[0]; idx: number; color: string }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="flex items-start gap-5"
    >
      {/* Step number + connector */}
      <div className="flex flex-col items-center gap-0 flex-shrink-0">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-display"
          style={{ background: `${color}20`, border: `1px solid ${color}50`, color }}
        >
          {item.step}
        </div>
        {idx < (orgSteps.length - 1) && (
          <div className="w-px h-8 mt-1" style={{ background: `${color}30` }} />
        )}
      </div>
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4" style={{ color }} />
          <h4 className="font-semibold text-white text-sm">{item.title}</h4>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function UseCasesPage() {
  const [tab, setTab] = useState<'org' | 'individual'>('org');

  const cases = tab === 'org' ? orgUseCases : individualUseCases;
  const steps = tab === 'org' ? orgSteps : individualSteps;
  const accentColor = '#4C28DC';

  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="relative section-padding pb-0 pt-0 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[25%] w-[40%] h-[40%] bg-[#4C28DC]/10 blur-[140px] rounded-full" />
          <div className="absolute top-[20%] right-[10%] w-[25%] h-[30%] bg-[#4C28DC]/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative z-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Built for <span className="text-gradient">every inbox</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              From enterprise support teams to busy parents — EmailQ adapts to your world and handles your email so you don't have to.
            </p>
          </motion.div>

          {/* Tab switcher */}
          <div className="flex justify-center mb-0">
            <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              {([
                { key: 'org', label: 'For Organisations', icon: Building2 },
                { key: 'individual', label: 'For Individuals', icon: User },
              ] as const).map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    tab === key
                      ? 'bg-[#4C28DC] text-white shadow-lg shadow-[#4C28DC]/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Use-case cards ── */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-8">
                {tab === 'org'
                  ? <Building2 className="w-5 h-5 text-[#4C28DC]" />
                  : <User className="w-5 h-5 text-[#4C28DC]" />}
                <h2 className="text-2xl font-bold font-display">
                  {tab === 'org' ? 'Organisation Use Cases' : 'Individual Use Cases'}
                </h2>
                <span
                  className="ml-auto text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}
                >
                  {cases.length} profiles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {cases.map((item, idx) => (
                  <UseCaseCard key={item.title} item={item} idx={idx} color={accentColor} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Getting Started ── */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Getting <span className="text-gradient">Started</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {tab === 'org'
                ? 'Set up your team workspace in under 15 minutes.'
                : 'Up and running in under 5 minutes — no technical setup required.'}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`steps-${tab}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {steps.map((step, idx) => (
                <StepItem key={step.step} item={step} idx={idx} color={accentColor} />
              ))}
            </motion.div>
          </AnimatePresence>


        </div>
      </section>

      <CTA />
    </div>
  );
}
