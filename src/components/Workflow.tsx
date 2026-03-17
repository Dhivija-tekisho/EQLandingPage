import React from 'react';
import { motion } from 'motion/react';
import {
  Link2,
  Mail,
  Search,
  BrainCircuit,
  FileEdit,
  Send,
  BarChart
} from 'lucide-react';

const steps = [
  { icon: <Link2 />, label: "Connect", desc: "Gmail or Outlook" },
  { icon: <Mail />, label: "Arrives", desc: "Email received" },
  { icon: <Search />, label: "Classify", desc: "AI Categorization" },
  { icon: <BrainCircuit />, label: "RAG", desc: "Knowledge retrieval" },
  { icon: <FileEdit />, label: "Draft", desc: "AI generation" },
  { icon: <Send />, label: "Approve", desc: "One-click send" },
  { icon: <BarChart />, label: "Monitor", desc: "SLA & Analytics" }
];

export default function Workflow() {

  return (
    <section id="workflow" className="pt-10 pb-2 px-6 md:px-12 lg:px-24 overflow-hidden animated-glow" style={{ '--glow-color': 'rgba(168, 85, 247, 0.12)' } as React.CSSProperties}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">How it <span className="text-gradient">Works</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A seamless workflow from connection to completion.
          </p>
        </div>

        {/* ── Workflow Steps ── */}
        <div className="relative mb-10">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#4C28DC]/0 via-[#4C28DC]/20 to-[#4C28DC]/0 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-6 group-hover:bg-[#4C28DC] group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 text-[#4C28DC] group-hover:text-white transition-colors" })}
                </div>
                <div className="text-xs font-bold text-[#4C28DC] uppercase tracking-widest mb-2">Step {index + 1}</div>
                <h3 className="font-bold mb-1">{step.label}</h3>
                <p className="text-xs text-white/40">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
