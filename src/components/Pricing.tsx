import React from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, TrendingUp, Crown, Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "Free",
    icon: <Zap className="w-6 h-6 text-[#4C28DC]" />,
    features: [
      "200K tokens/month",
      "≈ 50 emails",
      "≈ 10 doc uploads"
    ],
    buttonText: "Active Plan",
    current: true
  },
  {
    name: "Starter",
    price: "$5",
    period: "/mo",
    icon: <Sparkles className="w-6 h-6 text-[#4C28DC]" />,
    features: [
      "2.0M tokens/month",
      "≈ 500 emails",
      "≈ 100 doc uploads"
    ],
    buttonText: "Upgrade",
    current: false
  },
  {
    name: "Growth",
    price: "$15",
    period: "/mo",
    icon: <TrendingUp className="w-6 h-6 text-[#4C28DC]" />,
    features: [
      "8.0M tokens/month",
      "≈ 2000 emails",
      "≈ 400 doc uploads"
    ],
    buttonText: "Upgrade",
    current: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    icon: <Crown className="w-6 h-6 text-[#4C28DC]" />,
    features: [
      "40.0M tokens/month",
      "≈ 10000 emails",
      "≈ 2000 doc uploads"
    ],
    buttonText: "Upgrade",
    current: false
  }
];


export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-2">Available Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your email orchestration needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col ${plan.current ? 'border-[#4C28DC]/50 ring-1 ring-[#4C28DC]/50' : ''}`}
            >
              {plan.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#4C28DC] text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Current
                </div>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-white/40 text-sm">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-[#4C28DC] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.current 
                    ? 'bg-white/5 text-white/40 cursor-default' 
                    : 'bg-[#4C28DC] hover:bg-[#3b1fb1] text-white shadow-lg shadow-[#4C28DC]/30'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
