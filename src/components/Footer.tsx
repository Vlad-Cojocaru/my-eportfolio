import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name and title */}
          <h3 className="text-2xl font-bold mb-4">Vlad Cojocaru</h3>
          <p className="text-lg mb-8 opacity-90">
            Aspiring Software Engineer | Entrepreneur | Problem-Solver
          </p>
          
          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="mailto:vlad.cojocaru@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              vlad.cojocaru@gmail.com
            </a>
            
            <span className="hidden sm:inline text-primary-foreground/50">|</span>
            
            <a 
              href="https://linkedin.com/in/VladCojocaru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            
            <span className="hidden sm:inline text-primary-foreground/50">|</span>
            
            <a 
              href="https://github.com/VladCojocaru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
          </div>
          
          {/* Footer info */}
          <div className="border-t border-primary-foreground/20 pt-6 space-y-2 text-sm opacity-80">
            <p>Last updated: {currentDate}</p>
            <p className="italic">
              "This portfolio is a living document and reflects my growth and goals as a software developer."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;