import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import AgentsPage from './pages/AgentsPage';
import UseCasesPage from './pages/UseCasesPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden selection:bg-[#8b5cf6]/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
