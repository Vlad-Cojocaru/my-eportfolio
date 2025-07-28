import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const CareerSection = () => {
  return (
    <section id="career" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Career & Education
          </h2>
          
          {/* Career Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop"
                alt="Programming workspace"
                className="w-full max-w-2xl h-64 object-cover rounded-xl shadow-soft border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education Card */}
            <div className="group bg-gradient-card rounded-xl p-8 shadow-soft border border-border/50 hover:shadow-elegant hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-primary">York University</h4>
                  <p className="text-muted-foreground">Honours Bachelor of Science</p>
                  <p className="text-foreground">Major in Computer Science (Co-op program)</p>
                  <p className="text-sm text-muted-foreground">Expected Graduation: May 2028</p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-foreground"><strong>GPA:</strong> 7.81/9.0 (Present year)</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Relevant Courses: Data Structures & Algorithms, Advanced OOP (Java), 
                    Software Tools (C/Unix/Bash), Computer Organization (Verilog, RISC-V Assembly)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience Card */}
            <div className="group bg-gradient-card rounded-xl p-8 shadow-soft border border-border/50 hover:shadow-elegant hover:border-accent/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-primary">Markets Tech Intern</h4>
                  <p className="text-muted-foreground">CanDeal</p>
                  <p className="text-sm text-muted-foreground mb-2">Financial technology and trading systems</p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-lg text-primary">Freelance/Agency Development</h4>
                  <p className="text-muted-foreground">Social Media Marketing Agency</p>
                  <p className="text-sm text-foreground">
                    Running a performance-based marketing agency, building automation tools 
                    for clients, and helping small businesses scale their operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resume Download */}
          <div className="text-center">
            <div className="bg-gradient-card rounded-xl p-8 shadow-soft border border-border/50 inline-block">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Complete Resume</h3>
              <p className="text-muted-foreground mb-6">
                Download my full resume with detailed experience, projects, and technical skills.
              </p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/Vlad Cojocaru Resume.pdf" download="Vlad Cojocaru Resume.pdf">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;