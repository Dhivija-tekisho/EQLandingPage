import React from 'react';
import { motion } from 'motion/react';
import { Inbox, Clock, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: <Inbox className="w-6 h-6 text-red-400" />,
    title: "Too Many Emails",
    description: "The average professional receives 121 emails per day. Most of it is noise that drains your cognitive energy."
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-400" />,
    title: "Slow Response Times",
    description: "Manual drafting takes time. Delayed responses lead to missed opportunities and frustrated clients."
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-yellow-400" />,
    title: "Missed Important Messages",
    description: "Critical action items get buried under newsletters and notifications. One missed email can cost thousands."
  }
];

export default function Problem() {
  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Email was built for a different era. <span className="text-white/40">EmailQ brings it into the AI era</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Traditional inboxes are passive lists of messages. EmailQ turns your inbox into an active orchestration engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-white/[0.08] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
