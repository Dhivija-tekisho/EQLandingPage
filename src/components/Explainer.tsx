import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const demos = [
  {
    title: "AI Email Processing",
    description: "Watch as EmailQ instantly reads, summarizes, and categorizes incoming mail in real-time.",
    video: `${BASE_URL}videos/ai-email-processing.mp4`
  },
  {
    title: "Smart Reply Generation",
    description: "See how RAG-based intelligence pulls from your docs to draft the perfect technical response.",
    video: `${BASE_URL}videos/smart-reply-generation.mp4`
  },
  {
    title: "Inbox Cleanup Automation",
    description: "Automatically unsubscribe from noise and archive low-priority mail without lifting a finger.",
    video: `${BASE_URL}videos/inbox-cleanup.mp4`
  },
  {
    title: "SLA Monitoring",
    description: "Real-time dashboards for organizations to track response health and team performance.",
    video: `${BASE_URL}videos/sla-monitoring.mp4`
  }
];

export default function Explainer() {
  return (
    <section className="pt-16 pb-10 px-6 md:px-12 lg:px-24 bg-[#4C28DC]/5 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">See it in action</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the power of automated email orchestration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="glass-card overflow-hidden aspect-video relative group border border-white/10 hover:border-[#4C28DC]/30 transition-all">
                <video
                  src={demo.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#4C28DC] rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Live Demo</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4C28DC]" />
                  {demo.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{demo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
