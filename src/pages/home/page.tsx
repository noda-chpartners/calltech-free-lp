import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import DemoSection from './components/DemoSection';
import ProcessSection from './components/ProcessSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <ServicesSection />
      <DemoSection />
      <ProcessSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}