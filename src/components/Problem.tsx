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
    <section className="pt-16 pb-16 px-6 md:px-12 lg:px-24 bg-white/[0.02] animated-glow" style={{ '--glow-color': 'rgba(99, 102, 241, 0.15)' } as React.CSSProperties}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Email was built for a different era. <br />
            <span className="text-gradient">EmailQ brings it into the AI era</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
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
              className="glass-card p-4 hover:bg-white/[0.1] transition-all duration-300 group border border-white/5 hover:border-[#6366f1]/30 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center border border-[#6366f1]/20 group-hover:scale-110 transition-transform flex-shrink-0">
                {React.cloneElement(problem.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">{problem.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
