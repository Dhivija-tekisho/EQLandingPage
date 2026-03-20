import React from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, TrendingUp, Crown } from 'lucide-react';

const subscriptionPlans = [
  {
    name: "Free",
    price: "Free",
    icon: <Zap className="w-4 h-4 text-blue-500" />,
    features: ["50 credits/mo", "= 50 emails", "≈ 10 docs"],
    buttonText: "Current",
    current: true
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    icon: <Crown className="w-4 h-4 text-blue-500" />,
    features: ["10k credits/mo", "= 10k emails", "≈ 2k docs"],
    buttonText: "Upgrade",
    current: false
  }
];

const topUpPlans = [
  {
    name: "Small",
    price: "$5",
    icon: <Sparkles className="w-4 h-4 text-blue-500" />,
    features: ["500 credits", "= 500 emails", "Never expires"],
    buttonText: "Buy"
  },
  {
    name: "Medium",
    price: "$15",
    icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
    features: ["2,000 credits", "= 2000 emails", "Never expires"],
    buttonText: "Buy"
  },
  {
    name: "Large",
    price: "$30",
    icon: <Crown className="w-4 h-4 text-blue-500" />,
    features: ["5,000 credits", "= 5000 emails", "Never expires"],
    buttonText: "Buy"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-black/20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Subscription Plans Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold font-display mb-2">Subscription Plans</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-2xl">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`glass-card p-4 flex flex-col relative border ${plan.current ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-white/10'} hover:border-blue-500/50 transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                    {plan.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold font-display">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 text-xs">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all ${plan.current ? 'bg-blue-600/20 text-blue-400 cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* One-Time Top-Up Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold font-display mb-2">Buy Extra Credits</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {topUpPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-4 flex flex-col relative border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                    {plan.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                </div>

                <div className="mb-3">
                  <span className="text-2xl font-bold font-display">{plan.price}</span>
                </div>

                <ul className="space-y-1.5 mb-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white transition-all">
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
