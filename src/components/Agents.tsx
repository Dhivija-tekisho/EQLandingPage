import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, PenLine, Search, Mic, ChevronRight, Zap } from 'lucide-react';

const agents = [
  {
    id: 'classification',
    icon: Brain,
    name: 'Classification Agent',
    tagline: 'Persona-aware email triage',
    description:
      'Reads every incoming email and intelligently categorises it by intent, urgency, and persona context—so the right emails always surface first.',
    models: ['gpt-4o-mini', 'llama3'],
    color: '#4C28DC',
    glow: 'rgba(76,40,220,0.35)',
    gradient: 'from-[#4C28DC]/20 to-[#4C28DC]/5',
    border: 'border-[#4C28DC]/40',
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
    color: '#4C28DC',
    glow: 'rgba(76,40,220,0.35)',
    gradient: 'from-[#4C28DC]/20 to-[#4C28DC]/5',
    border: 'border-[#4C28DC]/40',
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
    color: '#4C28DC',
    glow: 'rgba(76,40,220,0.35)',
    gradient: 'from-[#4C28DC]/20 to-[#4C28DC]/5',
    border: 'border-[#4C28DC]/40',
    capabilities: [
      'Semantic vector search',
      'Knowledge base ingestion',
      'Dynamic RAG updates',
      'Context injection',
    ],
    stat: { label: 'Retrieval speed', value: '<120ms' },
  },
  {
    id: 'voice',
    icon: Mic,
    name: 'Voice Agent',
    tagline: 'Real-time conversational AI',
    description:
      'A multi-modal AI assistant that allows you to manage your inbox via natural voice commands. Summarise, draft, and send emails just by speaking.',
    models: ['Whisper-v3', 'Vapi'],
    color: '#4C28DC',
    glow: 'rgba(76,40,220,0.35)',
    gradient: 'from-[#4C28DC]/20 to-[#4C28DC]/5',
    border: 'border-[#4C28DC]/40',
    capabilities: [
      'Natural language understanding',
      'Voice-to-text drafting',
      'Audio inbox summaries',
      'Hands-free orchestration',
    ],
    stat: { label: 'Latency', value: '<200ms' },
  },
];





export default function Agents() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-24 pt-0 pb-10 relative overflow-hidden">
      {/* Background atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[20%] w-[35%] h-[35%] bg-[#4C28DC]/12 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[15%] w-[30%] h-[30%] bg-[#4C28DC]/10 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-[-5%] w-[20%] h-[40%] bg-[#4C28DC]/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Meet the <span className="text-gradient">Intelligence Layer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Four specialised AI agents work in concert behind the scenes—classifying, drafting, retrieving, and voice orchestrating so you never miss a beat.
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
