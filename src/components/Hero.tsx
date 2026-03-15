import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6366f1]/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#a855f7]/15 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-8 max-w-4xl mx-auto">
            AI That Manages Your Inbox <span className="text-gradient">Before You Even Open It</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            EmailQ orchestrates your entire email workflow. From smart classification to RAG-powered drafts and SLA tracking—let AI handle the noise while you focus on what matters.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mb-12">
            <button className="btn-primary flex items-center gap-2 group">
              Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-2xl md:text-3xl font-semibold text-gray-400">Discover the features</p>
          </div>
        </motion.div>

        {/* Scrolling Features */}
        <div className="relative w-full overflow-hidden mb-20">
          <div className="flex gap-4 animate-scroll">
            {[
              'Smart Inbox',
              'Intelligent Categorization',
              'Priority Detection',
              'AI Draft Responses',
              'Quick Reply Suggestions',
              'Knowledge Base Integration',
              'AI Communication Personas',
              'Auto Inbox Cleanup',
              'Email Analytics',
              'Gmail Integration',
              'AI Learning (Dynamic RAG)',
              'Security & Privacy',
              'Inbox Zero Assistance',
              'Customize Departments/Categories',
              'Custom System Prompt',
              'Multi Emails Connection',
              'Feedback',
              'SLA Breach Alerts',
              'Scheduling Reminders'
            ].concat([
              'Smart Inbox',
              'Intelligent Categorization',
              'Priority Detection',
              'AI Draft Responses',
              'Quick Reply Suggestions',
              'Knowledge Base Integration',
              'AI Communication Personas',
              'Auto Inbox Cleanup',
              'Email Analytics',
              'Gmail Integration',
              'AI Learning (Dynamic RAG)',
              'Security & Privacy',
              'Inbox Zero Assistance',
              'Customize Departments/Categories',
              'Custom System Prompt',
              'Multi Emails Connection',
              'Feedback',
              'SLA Breach Alerts',
              'Scheduling Reminders'
            ]).map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 whitespace-nowrap hover:bg-[#6366f1]/10 hover:border-[#6366f1]/30 transition-all"
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
