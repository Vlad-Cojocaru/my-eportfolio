import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const DemoInProgress = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Back Button */}
          <div className="mb-8 flex justify-start">
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
          
          {/* Main Content */}
          <div className="bg-gradient-card rounded-xl p-12 shadow-soft border border-border/50">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-gradient-primary rounded-full">
                <Construction className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Live Demo In the Works!
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8">
              We're currently building something amazing for you
            </p>
            
            {/* Status */}
            <div className="flex items-center justify-center gap-2 mb-8 text-accent">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Coming Soon</span>
            </div>
            
            {/* Description */}
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                The live demo for this project is currently under development. We're working hard to bring you the best possible experience.
              </p>
              <p>
                In the meantime, you can check out the source code on GitHub or explore other projects in the portfolio.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="hero" asChild>
                <a href="https://github.com/Vlad-Cojocaru" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  Back to Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInProgress; 