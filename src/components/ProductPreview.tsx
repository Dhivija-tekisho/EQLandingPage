import React from 'react';
import { motion } from 'motion/react';

export default function ProductPreview() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for the <span className="text-gradient">modern workspace</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A beautiful, intuitive interface that feels right at home in your daily workflow.
          </p>
        </div>

        <div className="relative">
          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-2 overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=800&fit=crop" 
                alt="Email inbox management" 
                className="rounded-xl w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-2 overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" 
                alt="Analytics and SLA monitoring dashboard" 
                className="rounded-xl w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
