import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Workflow from '../components/Workflow';
import Features from '../components/Features';
import Agents from '../components/Agents';
import UseCasesPage from '../pages/UseCasesPage';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.transition = 'box-shadow 0.4s ease';
        el.style.boxShadow = '0 0 0 2px rgba(139,92,246,0.75), 0 0 28px rgba(139,92,246,0.35)'; // matches #8b5cf6
        setTimeout(() => {
          el.style.boxShadow = '';
        }, 1800);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Hero />
      <Problem />
      <Workflow />
      <div id="features">
        <Features />
      </div>
      <div id="agents">
        <Agents />
      </div>
      <UseCasesPage />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}

