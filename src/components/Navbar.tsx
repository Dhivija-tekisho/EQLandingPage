import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F0A1E]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Mail className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight font-display">EmailQ</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How it works</a>
          <a href="#solutions" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">Sign In</button>
          <button className="btn-primary py-2 text-sm">Get Started</button>
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
          className="md:hidden absolute top-full left-0 right-0 bg-[#0F0A1E] border-b border-white/10 p-6 flex flex-col gap-6"
        >
          <a href="#features" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#workflow" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
          <a href="#solutions" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
          <button className="btn-primary w-full">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
}
