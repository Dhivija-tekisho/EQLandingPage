import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, PenLine, Search, Clock, ChevronRight, Zap } from 'lucide-react';

const agents = [
  {
    id: 'classification',
    icon: Brain,
    name: 'Classification Agent',
    tagline: 'Persona-aware email triage',
    description:
      'Reads every incoming email and intelligently categorises it by intent, urgency, and persona context—so the right emails always surface first.',
    models: ['gpt-4o-mini', 'llama3'],
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.35)',
    gradient: 'from-[#6366f1]/20 to-[#4f46e5]/5',
    border: 'border-[#6366f1]/40',
    capabilities: [
      'Intent & urgency detection',
      'Persona-aware triage',
      'Department routing',
      'Priority scoring',
    ],
    stat: { label: 'Accuracy', value: '98.4%' },
  },
  {
    id: 'reply',
    icon: PenLine,
    name: 'Reply Generation Agent',
    tagline: 'Single-user & Team-org drafting',
    description:
      'Drafts context-rich, tone-matched replies for both individual users and multi-department organisations, powered by your persona and communication style.',
    models: ['gpt-4o-mini', 'llama3'],
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.35)',
    gradient: 'from-[#a855f7]/20 to-[#9333ea]/5',
    border: 'border-[#a855f7]/40',
    capabilities: [
      'Tone & persona matching',
      'Team-org drafting',
      'Multi-language support',
      'Signature generation',
    ],
    stat: { label: 'Drafts / day', value: '10k+' },
  },
  {
    id: 'rag',
    icon: Search,
    name: 'RAG Retrieval Agent',
    tagline: 'Vector search for knowledge base context',
    description:
      'Queries your embedded knowledge base via semantic vector search to pull the most relevant documents and inject rich context into every AI-generated reply.',
    models: ['HuggingFace', 'Pinecone'],
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.35)',
    gradient: 'from-[#06b6d4]/20 to-[#0891b2]/5',
    border: 'border-[#06b6d4]/40',
    capabilities: [
      'Semantic vector search',
      'Knowledge base ingestion',
      'Dynamic RAG updates',
      'Context injection',
    ],
    stat: { label: 'Retrieval speed', value: '<120ms' },
  },
  {
    id: 'automation',
    icon: Clock,
    name: 'Background Automation Agent',
    tagline: '6 scheduled / event-driven jobs',
    description:
      'Silently orchestrates 6 recurring and event-triggered background jobs—handling SLA breach alerts, inbox cleanup, reminders, and more via pg-boss.',
    models: ['pg-boss'],
    color: '#10b981',
    glow: 'rgba(16,185,129,0.35)',
    gradient: 'from-[#10b981]/20 to-[#059669]/5',
    border: 'border-[#10b981]/40',
    capabilities: [
      'SLA breach alerts',
      'Inbox cleanup jobs',
      'Scheduling reminders',
      'Event-driven triggers',
    ],
    stat: { label: 'Jobs managed', value: '6 active' },
  },
];



export default function Agents() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[20%] w-[35%] h-[35%] bg-[#6366f1]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[15%] w-[30%] h-[30%] bg-[#a855f7]/10 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-[-5%] w-[20%] h-[40%] bg-[#06b6d4]/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#a5b4fc] text-sm font-semibold mb-6 tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5" /> AI-Powered Backend
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Meet the <span className="text-gradient">Intelligence Layer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Four specialised AI agents work in concert behind the scenes—classifying, drafting, retrieving, and automating so you never miss a beat.
          </p>
        </motion.div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {agents.map((agent, idx) => {
            const Icon = agent.icon;
            const isActive = active === agent.id;
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                onClick={() => setActive(isActive ? null : agent.id)}
                className={`relative cursor-pointer rounded-2xl border backdrop-blur-md transition-all duration-300 overflow-hidden group
                  ${isActive ? agent.border : 'border-white/10 hover:border-white/20'}
                  bg-[#1a1f3a]/60 shadow-xl`}
                style={{
                  boxShadow: isActive
                    ? `0 0 0 1px ${agent.color}55, 0 8px 40px ${agent.glow}`
                    : undefined,
                }}
              >
                {/* Gradient top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${agent.color}, transparent)`,
                    opacity: isActive ? 1 : 0.4,
                  }}
                />

                {/* Subtle bg gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 p-7">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      {/* Icon circle */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{ background: `${agent.color}22`, border: `1px solid ${agent.color}44` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: agent.color }} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold font-display text-white leading-tight">
                          {agent.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-0.5">{agent.tagline}</p>
                      </div>
                    </div>

                    {/* Stat badge */}
                    <div
                      className="text-right flex-shrink-0 ml-3"
                      style={{ color: agent.color }}
                    >
                      <div className="text-xl font-bold font-display">{agent.stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{agent.stat.label}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {agent.description}
                  </p>



                  {/* Expandable capabilities */}
                  <button
                    className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                    style={{ color: agent.color }}
                    onClick={(e) => { e.stopPropagation(); setActive(isActive ? null : agent.id); }}
                  >
                    <ChevronRight
                      className="w-4 h-4 transition-transform duration-300"
                      style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    />
                    {isActive ? 'Hide capabilities' : 'View capabilities'}
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="caps"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 grid grid-cols-2 gap-2">
                          {agent.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 rounded-lg px-3 py-2 border border-white/8"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: agent.color }}
                              />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
