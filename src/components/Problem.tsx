import React from 'react';
import { motion } from 'motion/react';
import { Inbox, Clock, AlertCircle } from 'lucide-react';

const problems = [
  {
    title: "Noise takes over",
    description: "Low-value messages crowd out email that still needs a response."
  },
  {
    title: "Manual triage slows work",
    description: "Time goes into sorting before action even begins."
  },
  {
    title: "Delayed replies lose momentum",
    description: "Critical follow-ups cool down when inbox review takes too long."
  }
];

export default function Problem() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] animated-glow" style={{ '--glow-color': 'rgba(99, 102, 241, 0.15)' } as React.CSSProperties}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold tracking-widest mb-6 uppercase">
            The inbox problem
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 max-w-4xl mx-auto leading-tight">
            Important email rarely gets missed because it is unimportant. <br className="hidden lg:block"/>
            <span className="text-gradient">It gets missed because everything arrives at once.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            EmailQ surfaces what needs action, reduces low-value noise, and helps users respond faster without losing control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 lg:p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl hover:from-white/[0.12] hover:border-white/20 shadow-xl"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white tracking-tight">{problem.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-[220px]">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-12 lg:mt-16 max-w-4xl border-l-[3px] border-white/10 pl-6 md:pl-8 py-2 relative">
          <p className="text-xs md:text-sm font-bold tracking-widest text-[#8f90a6] uppercase mb-3">SOUND FAMILIAR?</p>
          <blockquote className="text-lg md:text-xl lg:text-2xl font-light italic text-gray-300 leading-relaxed mb-4">
            “I saw it. I meant to reply. Then three more threads arrived.”
          </blockquote>
          <p className="text-base md:text-lg text-[#8b5cf6] font-medium">
            EmailQ makes the next response easier to see and easier to send.
          </p>
        </div>
      </div>
    </section>
  );
}
