import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[500px] flex flex-col items-center justify-center pb-0 overflow-hidden pt-16">
      {/* Background Decorative Elements */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 max-w-5xl mx-auto tracking-tight">
            AI That Manages Your Inbox <span className="text-gradient">Before You Even Open It</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-4 leading-relaxed">
            EmailQ orchestrates your entire email workflow. From smart classification to RAG-powered drafts and SLA tracking—let AI handle the noise while you focus on what matters.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <button className="btn-primary flex items-center gap-2 group">
              Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-4xl md:text-4xl font-semibold text-gray-400 pt-6">Discover the features</p>
          </div>
        </motion.div>

        {/* Scrolling Features */}
        <div className="relative w-full overflow-hidden mb-2 pt-6">
          <div className="flex gap-4 animate-scroll">
            {[
              'Smart Inbox',
              'AI Draft Responses',
              'Quick Reply Suggestions',
              'Knowledge Base Integration',
              'AI Communication Personas',
              'Auto Inbox Cleanup',
              'Email Analytics',
              'Email Accounts',
              'AI Learning (Dynamic RAG)',
              'Custom System Prompt',
              'SLA Breach Alerts',
            ].concat([
              'Smart Inbox',
              'AI Draft Responses',
              'Quick Reply Suggestions',
              'Knowledge Base Integration',
              'AI Communication Personas',
              'Auto Inbox Cleanup',
              'Email Analytics',
              'Email Accounts',
              'AI Learning (Dynamic RAG)',
              'Custom System Prompt',
              'SLA Breach Alerts',
            ]).map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 whitespace-nowrap hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/30 transition-all"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
