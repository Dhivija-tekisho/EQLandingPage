import React from 'react';
import { motion } from 'motion/react';
import { Building2, User, Check } from 'lucide-react';

const orgFeatures = [
  "Department routing",
  "SLA monitoring",
  "Knowledge vault",
  "Analytics dashboard"
];

const empFeatures = [
  "AI reply drafts",
  "Smart inbox",
  "Action item detection",
  "Follow-up reminders"
];

export default function UserTypes() {
  return (
    <section id="use-cases" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Tailored for your role</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're managing a team or your own productivity, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Organization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Building2 size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#6366f1]/20 flex items-center justify-center mb-8 border border-[#6366f1]/30">
                <Building2 className="text-[#6366f1] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">For Organizations</h3>
              <p className="text-gray-400 mb-8 text-lg">Scale your customer support and internal communications with enterprise-grade orchestration.</p>
              <ul className="space-y-4">
                {orgFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-[#6366f1]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#6366f1]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Employee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden group border-[#a855f7]/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <User size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-[#a855f7]/20 flex items-center justify-center mb-8 border border-[#a855f7]/30">
                <User className="text-[#a855f7] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">For Individual</h3>
              <p className="text-gray-400 mb-8 text-lg">Supercharge your personal productivity and never let an important email slip through the cracks.</p>
              <ul className="space-y-4">
                {empFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-[#a855f7]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#a855f7]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
