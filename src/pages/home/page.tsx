import { useEffect } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import DemoSection from './components/DemoSection';
import CaseSection from './components/CaseSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <ServicesSection />
      <DemoSection />
      <CaseSection />
      <ProcessSection />
      <FAQSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
