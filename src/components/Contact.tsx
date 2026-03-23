import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6]/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8b5cf6]/10 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about EmailQ? We're here to help you regain control of your inbox. Reach out to our team below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex justify-center w-full">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-gray-300 ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/60 transition-all"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-gray-300 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/60 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@company.com" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/60 transition-all"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/60 transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-4 mt-2 flex items-center justify-center gap-2 group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="font-semibold tracking-wide">Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
