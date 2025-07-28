import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "/lovable-uploads/643ca919-1139-498b-97ab-e8f4ec2e13e1.png";
import heroBg from "@/assets/hero-tech-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 225, 235, 0.85), rgba(220, 225, 235, 0.85)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              Vlad Cojocaru
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Aspiring Software Engineer | Entrepreneur | Problem-Solver
            </h2>
            
            <p className="text-lg lg:text-xl text-foreground mb-8 max-w-2xl leading-relaxed">
              "Building tech that works, not just compiles."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="mailto:vlad.cojocaru@gmail.com">
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  vlad.cojocaru@gmail.com
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://github.com/Vlad-Cojocaru" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://www.linkedin.com/in/vlad-cojocaru-b091b3253/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-glow border-4 border-primary/20 animate-float">
                <img 
                  src={profileImage} 
                  alt="Vlad Cojocaru" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;