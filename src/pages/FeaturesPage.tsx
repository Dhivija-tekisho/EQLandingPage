import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Features from '../components/Features';
import CTA from '../components/CTA';

export default function FeaturesPage() {
  const location = useLocation();

  // When navigated to /features#some-slug (e.g. from navbar dropdown),
  // scroll to the matching feature card and apply a brief glow pulse.
  useEffect(() => {
    const hash = location.hash.slice(1); // strip leading '#'
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Delay to let React render + framer-motion mount the cards
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Brief indigo glow pulse to highlight the card
        el.style.transition = 'box-shadow 0.4s ease';
        el.style.boxShadow =
          '0 0 0 2px rgba(99,102,241,0.75), 0 0 28px rgba(99,102,241,0.35)';
        setTimeout(() => {
          el.style.boxShadow = '';
        }, 1800);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="pt-8">
      <Features />
      <CTA />
    </div>
  );
}
