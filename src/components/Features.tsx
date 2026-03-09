import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  MessageSquare, 
  BarChart3, 
  Database, 
  Bot, 
  Settings, 
  Terminal, 
  Activity 
} from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-indigo-400" />,
    title: "AI Classification",
    description: "Automatically categorize incoming mail into custom buckets like 'Urgent', 'Invoice', or 'Meeting Request'."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Smart Inbox",
    description: "A unified view that prioritizes what matters based on your historical behavior and organizational goals."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    title: "Automatic Reply Generation",
    description: "AI drafts context-aware replies that sound like you, ready for your one-click approval."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
    title: "Smart Email Analysis",
    description: "Extract action items, sentiment, and key data points from long threads instantly."
  },
  {
    icon: <Database className="w-6 h-6 text-blue-400" />,
    title: "RAG Based Reply System",
    description: "Connect your knowledge base to ensure AI replies are accurate and grounded in your company data."
  },
  {
    icon: <Bot className="w-6 h-6 text-pink-400" />,
    title: "Smart Reply Agent",
    description: "Autonomous agents that can handle routine inquiries without human intervention."
  },
  {
    icon: <Settings className="w-6 h-6 text-orange-400" />,
    title: "Client App Configuration",
    description: "Deep integration with Gmail, Outlook, and custom IMAP/SMTP providers."
  },
  {
    icon: <Terminal className="w-6 h-6 text-cyan-400" />,
    title: "Smart AI System Prompt",
    description: "Customize the personality and logic of your AI assistant with natural language instructions."
  },
  {
    icon: <Activity className="w-6 h-6 text-red-400" />,
    title: "SLA Monitoring",
    description: "Track response times across your team and get alerts when critical emails are nearing deadlines."
  }
];

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Everything you need to <span className="text-gradient">master your inbox</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Powerful features designed for high-performance teams and busy professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 group hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-indigo-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
