import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Play, ChevronRight, ChevronLeft } from 'lucide-react';

const BASE_URL = (import.meta as any).env.BASE_URL;

const demos = [
  {
    title: "AI Email Processing",
    description: "Watch as EmailQ instantly reads, summarizes, and categorizes incoming mail in real-time.",
    video: `${BASE_URL}videos/ai-email-processing.mp4`
  },
  {
    title: "Smart Reply Generation",
    description: "See how RAG-based intelligence pulls from your docs to draft the perfect technical response.",
    video: `${BASE_URL}videos/smart-reply-generation.mp4`
  },
  {
    title: "Inbox Cleanup Automation",
    description: "Automatically unsubscribe from noise and archive low-priority mail without lifting a finger.",
    video: `${BASE_URL}videos/inbox-cleanup.mp4`
  },
  {
    title: "SLA Monitoring",
    description: "Real-time dashboards for organizations to track response health and team performance.",
    video: `${BASE_URL}videos/sla-monitoring.mp4`
  }
];

const AUTO_PLAY_INTERVAL = 8000; // 8 seconds per slide

export default function Explainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % demos.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + demos.length) % demos.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // Update progress every 50ms
    const step = (interval / AUTO_PLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="pt-2 pb-2 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-black to-[#4C28DC]/10 border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4 relative">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-2 tracking-tight">
            See it in <span className="text-[#4C28DC]">action</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Experience the power of automated email orchestration through our live interactive walkthroughs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-center justify-center">
          {/* Main Display Area */}
          <div className="lg:col-span-7 relative group">
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 shadow-xl shadow-[#4C28DC]/15"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <video
                    src={demos[activeIndex].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Video Info Overlay (Mobile Only) */}
                  <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                    <h3 className="text-xl font-bold text-white mb-2">{demos[activeIndex].title}</h3>
                    <p className="text-sm text-gray-300">{demos[activeIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#4C28DC] z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#4C28DC] z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Active Indicator Pulse */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                <div className="w-2 h-2 bg-[#4C28DC] rounded-full animate-pulse shadow-[0_0_8px_#4C28DC]"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Live Demo</span>
              </div>
            </div>
          </div>

          {/* Side Tabs Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`w-full text-left p-3 rounded-lg transition-all relative group overflow-hidden ${
                  activeIndex === index 
                    ? "bg-[#4C28DC]/10 border border-[#4C28DC]/30 ring-1 ring-[#4C28DC]/30" 
                    : "bg-transparent border border-white/5 hover:border-white/10"
                }`}
              >
                {/* Progress Bar Background */}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 h-1 bg-[#4C28DC]/20 w-full" />
                )}
                {/* Active Progress Bar */}
                {activeIndex === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-[#4C28DC] z-10"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-lg transition-colors ${
                    activeIndex === index ? "bg-[#4C28DC] text-white" : "bg-white/5 text-gray-500"
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${
                      activeIndex === index ? "text-white" : "text-gray-400"
                    }`}>
                      {demo.title}
                    </h3>
                    {activeIndex === index && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-sm text-gray-400 mt-2 leading-relaxed"
                      >
                        {demo.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
