import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import leadstreamDesktop from "@/assets/leadstream-desktop.jpg";
import leadstreamMobile from "@/assets/leadstream-mobile.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lead Stream Pro",
      techStack: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      description: "A real-time lead-management portal that keeps your CRM and database perfectly in sync.",
      details: "Leverages Spring Data JPA for CRUD and custom joins, Jackson for JSON payloads, and a modular React/Tailwind UI for a responsive workflow. Features webhook integration for real-time synchronization between external CRMs and internal database.",
      images: {
        desktop: leadstreamDesktop,
        mobile: leadstreamMobile
      },
      featured: true
    },
    {
      title: "Content Calendar",
      techStack: ["Java", "Spring Boot", "Spring MVC", "JDBC", "PostgreSQL"],
      description: "Designed and developed a REST API for a content calendar application, implementing CRUD functionality using Spring MVC.",
      details: "Integrated PostgreSQL database via Spring Data JDBC for data persistence and scalability. Utilized Docker for containerization and deployment. Enhanced code reliability with input validation and error handling. Optimized for production deployment using Railway.",
      date: "January 2025"
    },
    {
      title: "Destiny Adventure Game",
      techStack: ["JavaScript", "HTML", "CSS"],
      description: "Created a web-based adventure game with a graphical interface.",
      details: "Combined knowledge of JavaScript functional programming for an interactive user experience. Features dynamic storytelling, character progression, and engaging visual elements.",
      date: "June 2021"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  project.featured 
                    ? "bg-gradient-card border-2 border-primary/20 shadow-glow" 
                    : "bg-gradient-card border border-border/50 shadow-soft"
                } rounded-xl p-8 hover:shadow-elegant transition-all duration-300`}
              >
                {project.featured && (
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Project Info */}
                    <div className="lg:w-1/2 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                          <span className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm rounded-full font-medium">
                            Featured
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-lg text-primary font-semibold mb-3">
                          {project.description}
                        </p>
                        
                        <p className="text-foreground leading-relaxed">
                          {project.details}
                        </p>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="hero" className="group">
                          <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="group">
                          <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          View Code
                        </Button>
                      </div>
                    </div>
                    
                    {/* Project Images */}
                    <div className="lg:w-1/2 space-y-4">
                      <div className="relative">
                        <img
                          src={project.images.desktop}
                          alt={`${project.title} desktop view`}
                          className="w-full rounded-lg shadow-soft border border-border/50"
                        />
                        <div className="absolute top-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium text-muted-foreground">
                          Desktop View
                        </div>
                      </div>
                      
                      <div className="relative max-w-xs mx-auto">
                        <img
                          src={project.images.mobile}
                          alt={`${project.title} mobile view`}
                          className="w-full rounded-lg shadow-soft border border-border/50"
                        />
                        <div className="absolute top-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium text-muted-foreground">
                          Mobile View
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {!project.featured && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      {project.date && (
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-lg text-primary font-semibold">
                      {project.description}
                    </p>
                    
                    <p className="text-foreground leading-relaxed">
                      {project.details}
                    </p>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="group">
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        View Code
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;