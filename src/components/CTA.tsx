import React from 'react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center glass-card p-12 md:p-24 border-indigo-500/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display">Stop Managing Email. <br /><span className="text-gradient">Let AI Handle It.</span></h2>
        </motion.div>
      </div>
    </section>
  );
}
