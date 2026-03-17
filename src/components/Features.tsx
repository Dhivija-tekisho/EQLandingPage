import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Inbox, Trash2, FileText, Zap, UserCircle2, BrainCircuit,
  Mail, Database, Terminal, LayoutList,
  BarChart3, BellRing, Phone
} from 'lucide-react';

/** Convert a feature title to a URL-safe id, e.g. "AI Draft Responses" → "ai-draft-responses" */
const toSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

type Feature = { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  accent: string;
};

const allFeatures: Feature[] = [
  {
    icon: <Inbox className="w-5 h-5" />,
    title: 'Smart Inbox',
    description: 'Surfaces the most critical emails first based on your historical behavior.',
    accent: '#4C28DC',
  },
  {
    icon: <Trash2 className="w-5 h-5" />,
    title: 'Auto Inbox Cleanup',
    description: 'Archive or delete irrelevant emails automatically with custom rule sets.',
    accent: '#4C28DC',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'AI Draft Responses',
    description: 'Context-aware replies that sound like you — ready for one-click approval.',
    accent: '#4C28DC',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Quick Reply Suggestions',
    description: 'Instant short-reply options so you can respond to routine emails in seconds.',
    accent: '#4C28DC',
  },
  {
    icon: <UserCircle2 className="w-5 h-5" />,
    title: 'AI Communication Personas',
    description: 'Define distinct AI writing styles per team — warm support, precise legal.',
    accent: '#4C28DC',
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: 'AI Learning (Dynamic RAG)',
    description: 'Continuously improves using your feedback through a Dynamic RAG pipeline.',
    accent: '#4C28DC',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Voice Agent',
    description: 'An AI assistant (like Siri or Alexa) that responds to your commands and provides information about the application.',
    accent: '#4C28DC',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email Accounts',
    description: 'Full OAuth2 Gmail sync — labels, threads, and drafts without leaving EmailQ.',
    accent: '#4C28DC',
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Knowledge Base Integration',
    description: 'Ground every AI reply in your internal docs, FAQs, and company wikis.',
    accent: '#4C28DC',
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: 'Custom System Prompt',
    description: 'Fine-tune AI behavior with natural language to match your brand voice.',
    accent: '#4C28DC',
  },
  {
    icon: <LayoutList className="w-5 h-5" />,
    title: 'Customize Departments/Categories',
    description: 'Build categories tailored to your structure — Finance to Customer Success.',
    accent: '#4C28DC',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Email Analytics',
    description: 'Real-time dashboards on volume, response times, and team performance.',
    accent: '#4C28DC',
  },
  {
    icon: <BellRing className="w-5 h-5" />,
    title: 'SLA Breach Alerts',
    description: 'Instant alerts when critical emails are nearing or have breached deadlines.',
    accent: '#4C28DC',
  },
];


export default function Features() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
          el.style.boxShadow = '0 0 0 2px rgba(76,40,220,0.7), 0 0 24px rgba(76,40,220,0.35)';
          el.style.borderColor = '#4C28DC';
          setTimeout(() => { 
            el.style.boxShadow = ''; 
            el.style.borderColor = '';
          }, 1800);
        }
      }, 400);
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <section id="features" className="py-12 px-0 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Everything you need to <span className="text-gradient">master your inbox</span>
          </motion.h2>
        </div>

        {/* All Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((feature, fIdx) => (
            <motion.div
              key={fIdx}
              id={toSlug(feature.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: fIdx * 0.05 }}
              className="glass-card p-6 group hover:border-[#4C28DC]/50 transition-all duration-300 hover:-translate-y-1 scroll-mt-32"
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0"
                  style={{ background: `${feature.accent}15`, border: `1px solid ${feature.accent}30` }}
                >
                  {React.cloneElement(feature.icon as React.ReactElement, { 
                    style: { color: feature.accent },
                    className: "w-5 h-5"
                  })}
                </div>
                <h4 className="text-lg font-bold group-hover:text-[#4C28DC] transition-colors">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
