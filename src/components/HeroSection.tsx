import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/vlad-profile.jpg";
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
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
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                vlad.cojocaru@gmail.com
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="group">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary/20 animate-float">
                <img 
                  src={profileImage} 
                  alt="Vlad Cojocaru" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-xl animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;