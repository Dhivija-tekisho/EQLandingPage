import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Menu, X, ChevronDown } from 'lucide-react';

const features = [
  { label: 'Smart Inbox',                     slug: 'smart-inbox' },
  { label: 'Auto Inbox Cleanup',              slug: 'auto-inbox-cleanup' },
  { label: 'AI Draft Responses',              slug: 'ai-draft-responses' },
  { label: 'Quick Reply Suggestions',         slug: 'quick-reply-suggestions' },
  { label: 'AI Communication Personas',       slug: 'ai-communication-personas' },
  { label: 'AI Learning (Dynamic RAG)',       slug: 'ai-learning-dynamic-rag' },
  { label: 'Voice Agent',                     slug: 'voice-agent' },
  { label: 'Email Accounts',                  slug: 'email-accounts' },
  { label: 'Knowledge Base Integration',      slug: 'knowledge-base-integration' },
  { label: 'Custom System Prompt',            slug: 'custom-system-prompt' },
  { label: 'Customize Departments/Categories',slug: 'customize-departments-categories' },
  { label: 'Email Analytics',                 slug: 'email-analytics' },
  { label: 'SLA Breach Alerts',               slug: 'sla-breach-alerts' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.features-dropdown')) {
        setIsFeaturesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#000000]/90 backdrop-blur-lg py-0' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="EmailQ Logo" className="h-15 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</Link>
          <div className="relative features-dropdown flex items-center gap-1">
            <Link 
              to="/#features"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Features
            </Link>
            <button 
              onClick={() => setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${isFeaturesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isFeaturesDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-0 w-80 glass-card p-4 shadow-2xl"
              >
                <div className="grid grid-cols-1 gap-1 max-h-96 overflow-y-auto pr-1">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      to={`/#${feature.slug}`}
                      onClick={() => setIsFeaturesDropdownOpen(false)}
                      className="px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#6366f1]/10 rounded-lg transition-all flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/40 group-hover:bg-[#8b5cf6] transition-colors flex-shrink-0" />
                      {feature.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          <Link to="/#agents" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Agents</Link>
          <Link to="/#use-cases" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Use Cases</Link>
        </div>

        <div className="hidden md:flex items-center gap-4 mr-12">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">Sign In</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#000000] border-b border-white/10 p-6 flex flex-col gap-6"
        >
          <Link to="/" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/#features" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
          <Link to="/#agents" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Agents</Link>
          <Link to="/#use-cases" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Use Cases</Link>
        </motion.div>
      )}
    </nav>
  );
}
