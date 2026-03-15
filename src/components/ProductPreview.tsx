import React from 'react';
import { motion } from 'motion/react';

export default function ProductPreview() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for the <span className="text-gradient">modern workspace</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A beautiful, intuitive interface that feels right at home in your daily workflow.
          </p>
        </div>


      </div>
    </section>
  );
}
