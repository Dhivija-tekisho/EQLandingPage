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
    <section id="solutions" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Tailored for your role</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
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
              <div className="w-14 h-14 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-8 border border-indigo-500/30">
                <Building2 className="text-indigo-400 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">For Organizations</h3>
              <p className="text-white/60 mb-8 text-lg">Scale your customer support and internal communications with enterprise-grade orchestration.</p>
              <ul className="space-y-4">
                {orgFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-indigo-400" />
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
            className="glass-card p-10 relative overflow-hidden group border-purple-500/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <User size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mb-8 border border-purple-500/30">
                <User className="text-purple-400 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">For Employees</h3>
              <p className="text-white/60 mb-8 text-lg">Supercharge your personal productivity and never let an important email slip through the cracks.</p>
              <ul className="space-y-4">
                {empFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-400" />
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
