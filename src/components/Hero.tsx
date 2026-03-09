import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/20 blur-[120px] rounded-full"></div>
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
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            EmailQ orchestrates your entire email workflow. From smart classification to RAG-powered drafts and SLA tracking—let AI handle the noise while you focus on what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="btn-primary flex items-center gap-2 group w-full sm:w-auto">
              Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Product Walkthrough Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="glass-card p-2 md:p-4 overflow-hidden shadow-2xl shadow-indigo-500/10">
            <div className="aspect-video bg-indigo-950/50 rounded-xl relative group cursor-pointer overflow-hidden">
              <video
                src="/videos/hero-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Floating UI Elements for visual interest */}
              <div className="absolute top-10 left-10 glass-card p-5 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-[11px] text-white/40 uppercase tracking-wider font-bold">AI Status</div>
                    <div className="text-sm font-semibold">Classifying 42 new emails...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
