import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Explainer from './components/Explainer';
import Workflow from './components/Workflow';
import UserTypes from './components/UserTypes';
import Pricing from './components/Pricing';
import ProductPreview from './components/ProductPreview';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Explainer />
        <Workflow />
        <UserTypes />
        <ProductPreview />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
