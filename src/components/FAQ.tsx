import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const emptyFunction = () => {};

const faqs = [
  {
    question: "What exactly is EmailQ and who is it built for?",
    answer: "EmailQ is an AI-powered inbox orchestration platform designed to eliminate email overwhelm. It surfaces critical messages, suppresses noise, and drafts context-aware replies. It's built for customer support teams, sales reps, busy parents, remote workers, and anyone whose inbox is slowing them down."
  },
  {
    question: "Do I need any technical knowledge to use EmailQ?",
    answer: "Not at all. EmailQ integrates cleanly into your existing workflow with just a few clicks. Our onboarding takes under 5 minutes, and the AI actively learns from your habits without requiring any complex configuration or technical setup."
  },
  {
    question: "How accurate is the AI email categorization?",
    answer: "Highly accurate. EmailQ uses advanced Natural Language Processing to understand the context, urgency, and intent of every message. It categorizes emails instantly and continuously refines its accuracy based on your feedback and historical actions."
  },
  {
    question: "Can EmailQ draft replies to my emails automatically?",
    answer: "Yes! EmailQ generates context-rich draft responses that sound just like you. For organizations, it can even pull information directly from your uploaded knowledge bases and company wikis, so you just have to click 'Approve'."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl mb-4 overflow-hidden transition-all duration-300 hover:border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-white font-medium text-lg pr-8">{question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Frequently Asked <span className="text-[#a78bfa]">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
