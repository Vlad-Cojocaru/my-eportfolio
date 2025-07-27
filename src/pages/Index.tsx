import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import GoalsSection from "@/components/GoalsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <CareerSection />
      <ProjectsSection />
      <GoalsSection />
      <Footer />
    </div>
  );
};

export default Index;
