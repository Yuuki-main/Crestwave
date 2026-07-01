import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StartingPoints from "./components/StartingPoints";
import WorkingMethods from "./components/WorkingMethods";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StartingPoints />
      <WorkingMethods />
      <CTABanner />
      <Footer />
    </main>
  );
}
