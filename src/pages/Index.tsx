import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default Index;
