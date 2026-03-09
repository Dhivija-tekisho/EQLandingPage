import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const demos = [
  {
    title: "AI Email Processing",
    description: "Watch as EmailQ instantly reads, summarizes, and categorizes incoming mail in real-time.",
    video: "/videos/ai-email-processing.mp4"
  },
  {
    title: "Smart Reply Generation",
    description: "See how RAG-based intelligence pulls from your docs to draft the perfect technical response.",
    video: "/videos/smart-reply-generation.mp4"
  },
  {
    title: "Inbox Cleanup Automation",
    description: "Automatically unsubscribe from noise and archive low-priority mail without lifting a finger.",
    video: "/videos/inbox-cleanup.mp4"
  },
  {
    title: "SLA Monitoring",
    description: "Real-time dashboards for organizations to track response health and team performance.",
    video: "/videos/sla-monitoring.mp4"
  }
];

export default function Explainer() {
  return (
    <section className="section-padding bg-indigo-600/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">See it in action</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Experience the power of automated email orchestration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="glass-card overflow-hidden aspect-video relative group">
                <video
                  src={demo.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E] to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Live Demo</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  {demo.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{demo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
