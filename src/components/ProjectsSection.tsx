import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import leadstreamDesktop from "@/assets/leadstream-desktop.jpg";
import leadstreamMobile from "@/assets/leadstream-mobile.jpg";
import eportfolioImage from "@/assets/EportfolioImage.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lead Stream App",
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
      title: "E-Portfolio",
      techStack: ["TypeScript", "React", "Tailwind CSS", "Cursor AI", "Vite"],
      description: "A modern, responsive personal portfolio showcasing my development skills and projects.",
      details: "Built with TypeScript for type safety and better development experience. Features a clean, modern UI using Tailwind CSS with custom gradients and animations. Developed with Cursor AI assistance for rapid prototyping and code optimization. Includes interactive components, smooth scrolling navigation, and responsive design that works seamlessly across all devices.",
      images: {
        desktop: eportfolioImage,
        mobile: eportfolioImage
      },
      featured: true,
      date: "July 2025"
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
                  <div className={`flex flex-col lg:flex-row gap-8 items-start ${
                    project.title === "E-Portfolio" ? "lg:flex-row-reverse" : ""
                  }`}>
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
                        {project.title !== "E-Portfolio" && (
                          <Button variant="hero" className="group" asChild>
                            <a href="/demo">
                              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        <Button variant="outline" className="group" asChild>
                          <a href="https://github.com/Vlad-Cojocaru" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Project Images - Different layouts for different projects */}
                    <div className="lg:w-1/2 relative">
                      {project.title === "E-Portfolio" ? (
                        // E-Portfolio: Single image layout
                        <div className="relative mt-8">
                          <img
                            src={project.images.desktop}
                            alt={`${project.title} screenshot`}
                            className="w-full rounded-lg shadow-xl border-4 border-border/40"
                          />
                        </div>
                      ) : (
                        // Lead Stream App: Superimposed layout
                        <>
                          {/* Desktop Image */}
                          <div className="relative z-10">
                            <img
                              src={project.images.desktop}
                              alt={`${project.title} desktop view`}
                              className="w-full rounded-lg shadow-xl border-4 border-border/40"
                            />
                          </div>
                          
                          {/* Mobile Image - Superimposed */}
                          <div className="absolute -right-4 -bottom-4 z-20 w-32 h-56">
                            <img
                              src={project.images.mobile}
                              alt={`${project.title} mobile view`}
                              className="w-full h-full object-cover object-top rounded-lg shadow-xl border-4 border-border/40"
                            />
                          </div>
                        </>
                      )}
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
                      <Button variant="outline" className="group" asChild>
                        <a href="https://github.com/Vlad-Cojocaru" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          View Code
                        </a>
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