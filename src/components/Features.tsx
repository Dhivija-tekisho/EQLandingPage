import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Inbox, Tag, AlertTriangle, Trash2, MailCheck,
  FileText, Zap, UserCircle2, BrainCircuit,
  Mail, Database, Link2, Terminal, LayoutList,
  BarChart3, BellRing, CalendarClock, ThumbsUp, ShieldCheck,
} from 'lucide-react';

/** Convert a feature title to a URL-safe id, e.g. "AI Draft Responses" → "ai-draft-responses" */
const toSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

type Feature = { icon: React.ReactNode; title: string; description: string };
type FeatureGroup = {
  id: string;
  category: string;
  tagline: string;
  accent: string;
  cols: number;
  features: Feature[];
};

const featureGroups: FeatureGroup[] = [
  {
    id: 'inbox',
    category: 'Inbox Intelligence',
    tagline: 'Triage, prioritize & stay at zero',
    accent: '#6366f1',
    cols: 3,
    features: [
      {
        icon: <Inbox className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Smart Inbox',
        description: 'Surfaces the most critical emails first based on your historical behavior.',
      },
      {
        icon: <Tag className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Intelligent Categorization',
        description: 'Auto-classify emails into custom buckets like "Urgent" or "Invoice" using AI.',
      },
      {
        icon: <AlertTriangle className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Priority Detection',
        description: 'AI surfaces high-priority emails by reading urgency signals in real time.',
      },
      {
        icon: <Trash2 className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Auto Inbox Cleanup',
        description: 'Archive or delete irrelevant emails automatically with custom rule sets.',
      },
      {
        icon: <MailCheck className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Inbox Zero Assistance',
        description: 'Smart nudges and workflows to help you reach and maintain Inbox Zero.',
      },
    ],
  },
  {
    id: 'ai',
    category: 'AI Generation',
    tagline: 'Draft, reply & communicate faster',
    accent: '#6366f1',
    cols: 2,
    features: [
      {
        icon: <FileText className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'AI Draft Responses',
        description: 'Context-aware replies that sound like you — ready for one-click approval.',
      },
      {
        icon: <Zap className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Quick Reply Suggestions',
        description: 'Instant short-reply options so you can respond to routine emails in seconds.',
      },
      {
        icon: <UserCircle2 className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'AI Communication Personas',
        description: 'Define distinct AI writing styles per team — warm support, precise legal.',
      },
      {
        icon: <BrainCircuit className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'AI Learning (Dynamic RAG)',
        description: 'Continuously improves using your feedback through a Dynamic RAG pipeline.',
      },
    ],
  },
  {
    id: 'connect',
    category: 'Connectivity & Config',
    tagline: 'Integrate, extend & customize',
    accent: '#6366f1',
    cols: 3,
    features: [
      {
        icon: <Mail className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Gmail Integration',
        description: 'Full OAuth2 Gmail sync — labels, threads, and drafts without leaving EmailQ.',
      },
      {
        icon: <Database className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Knowledge Base Integration',
        description: 'Ground every AI reply in your internal docs, FAQs, and company wikis.',
      },
      {
        icon: <Link2 className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Multi Emails Connection',
        description: 'Manage personal, professional, and department accounts from one workspace.',
      },
      {
        icon: <Terminal className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Custom System Prompt',
        description: 'Fine-tune AI behavior with natural language to match your brand voice.',
      },
      {
        icon: <LayoutList className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Customize Departments/Categories',
        description: 'Build categories tailored to your structure — Finance to Customer Success.',
      },
    ],
  },
  {
    id: 'analytics',
    category: 'Analytics & Control',
    tagline: 'Track, alert & stay compliant',
    accent: '#6366f1',
    cols: 3,
    features: [
      {
        icon: <BarChart3 className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Email Analytics',
        description: 'Real-time dashboards on volume, response times, and team performance.',
      },
      {
        icon: <BellRing className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'SLA Breach Alerts',
        description: 'Instant alerts when critical emails are nearing or have breached deadlines.',
      },
      {
        icon: <CalendarClock className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Scheduling Reminders',
        description: 'Detect meeting requests from emails and auto-create calendar reminders.',
      },
      {
        icon: <ThumbsUp className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Feedback',
        description: 'Rate AI drafts to directly shape how the model learns and improves.',
      },
      {
        icon: <ShieldCheck className="w-5 h-5" style={{ color: '#6366f1' }} />,
        title: 'Security & Privacy',
        description: 'Enterprise-grade encryption and zero data retention keep emails private.',
      },
    ],
  },
];

/* ─── Small feature card ──────────────────────────────────────── */
function FeatureCard({
  feature,
  accent,
  delay,
  fromLeft,
}: {
  feature: Feature;
  accent: string;
  delay: number;
  fromLeft: boolean;
}) {
  return (
    <motion.div
      id={toSlug(feature.title)}
      initial={{ opacity: 0, x: fromLeft ? -20 : 20, y: 8 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass-card p-4 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 cursor-default scroll-mt-24"
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 border"
        style={{ background: `${accent}18`, borderColor: `${accent}35` }}
      >
        {feature.icon}
      </div>
      <h3 className="text-sm font-bold mb-1 leading-snug">{feature.title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

/* ─── Branch label ────────────────────────────────────────────── */
function BranchLabel({
  group,
  align,
}: {
  group: FeatureGroup;
  align: 'left' | 'right';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-1 h-full justify-center ${align === 'right' ? 'items-end text-right' : 'items-start text-left'} pt-2`}
    >
      <span
        className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
        style={{ background: `${group.accent}18`, color: group.accent, border: `1px solid ${group.accent}35` }}
      >
        {group.category}
      </span>
      <p className="text-gray-400 text-xs mt-1 max-w-[180px] leading-relaxed">{group.tagline}</p>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────────── */
export default function Features() {
  // Scroll to the feature card matching the URL hash (e.g. /features#smart-inbox)
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1); // strip the '#'
      if (!hash) return;
      // Small delay to let framer-motion mount the elements first
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Brief highlight pulse
          el.style.transition = 'box-shadow 0.4s ease';
          el.style.boxShadow = '0 0 0 2px rgba(99,102,241,0.7), 0 0 24px rgba(99,102,241,0.35)';
          setTimeout(() => { el.style.boxShadow = ''; }, 1800);
        }
      }, 400);
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#6366f1]/10 border border-[#6366f1]/30 text-indigo-400 mb-5"
          >
            Full Feature Set
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-display mb-5"
          >
            Everything you need to{' '}
            <span className="text-gradient">master your inbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            19 features across 4 intelligence pillars — branching from a single, unified platform.
          </motion.p>
        </div>

        {/* ── Tree ── */}
        <div className="relative">
          {/* ── Continuous trunk line (desktop) ── */}
          <div
            className="absolute hidden md:block top-0 bottom-0 left-1/2 -translate-x-px w-px"
            style={{
              background:
                'linear-gradient(to bottom, #6366f1 0%, #8b5cf6 33%, #10b981 66%, #f59e0b 100%)',
              opacity: 0.22,
            }}
          />

          <div className="flex flex-col gap-0">
            {featureGroups.map((group, gIdx) => {
              const isLeft = gIdx % 2 === 0; // left group → cards on LEFT, label on RIGHT

              return (
                <div key={group.id} className="relative">
                  {/* ── Trunk node dot ── */}
                  <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-5 z-20">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="w-3.5 h-3.5 rounded-full border-2 bg-[#0a0e27]"
                      style={{
                        borderColor: group.accent,
                        boxShadow: `0 0 10px ${group.accent}90, 0 0 20px ${group.accent}40`,
                      }}
                    />
                  </div>

                  {/* ── Horizontal branch arm ── */}
                  <div
                    className={`hidden md:block absolute top-[26px] h-px w-8 z-10
                      ${isLeft ? 'right-1/2 mr-[7px]' : 'left-1/2 ml-[7px]'}`}
                    style={{
                      background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, ${group.accent}, transparent)`,
                    }}
                  />

                  {/* ── 3-column tree row: [left col] [trunk col] [right col] ── */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 pb-12 md:pb-16 pt-2">

                    {/* LEFT COLUMN */}
                    <div className="md:w-[46%] flex flex-col justify-center">
                      {isLeft ? (
                        /* Cards on left */
                        <div
                          className={`grid gap-3 ${
                            group.cols === 3
                              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                              : 'grid-cols-1 sm:grid-cols-2'
                          }`}
                        >
                          {group.features.map((f, i) => (
                            <FeatureCard
                              key={i}
                              feature={f}
                              accent={group.accent}
                              delay={i * 0.06}
                              fromLeft={true}
                            />
                          ))}
                        </div>
                      ) : (
                        /* Label on left (right-branching groups) - full height centering */
                        <div className="flex items-center justify-end pr-6 h-full min-h-[160px]">
                          <BranchLabel group={group} align="right" />
                        </div>
                      )}
                    </div>

                    {/* TRUNK SPACER (desktop) */}
                    <div className="hidden md:block md:w-[8%]" />

                    {/* RIGHT COLUMN */}
                    <div className="md:w-[46%] flex flex-col justify-center">
                      {isLeft ? (
                        /* Label on right (left-branching groups) - full height centering */
                        <div className="flex items-center justify-start pl-6 h-full min-h-[160px]">
                          <BranchLabel group={group} align="left" />
                        </div>
                      ) : (
                        /* Cards on right */
                        <div
                          className={`grid gap-3 ${
                            group.cols === 3
                              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                              : 'grid-cols-1 sm:grid-cols-2'
                          }`}
                        >
                          {group.features.map((f, i) => (
                            <FeatureCard
                              key={i}
                              feature={f}
                              accent={group.accent}
                              delay={i * 0.06}
                              fromLeft={false}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
