import { Target, User, Code, MessageSquare } from "lucide-react";

const GoalsSection = () => {
  const skills = {
    languages: ["Java", "Python", "SQL", "JavaScript", "RISC-V Assembly", "Bash", "Verilog"],
    frameworks: ["Spring Boot", "React", "Spring MVC", "Tailwind CSS"],
    tools: ["GitHub", "Make.com", "Webhooks", "GoHighLevel CRM", "Docker", "Railway"],
    soft: ["Initiative", "Problem-solving", "Communication", "Leadership", "Collaboration"]
  };

  const goals = [
    {
      category: "Career Objective",
      description: "Become a developer who builds high-utility tools that people actually use and depend on.",
      icon: Target
    },
    {
      category: "Personal Growth",
      description: "Continue building and testing ideas as an entrepreneur while developing technical expertise.",
      icon: User
    },
    {
      category: "Technical Focus",
      description: "Master full-stack development while maintaining focus on user experience and practical solutions.",
      icon: Code
    },
    {
      category: "Communication",
      description: "Develop strong collaboration skills and the ability to translate technical concepts for diverse audiences.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="goals" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Goals & Personal Growth
          </h2>
          
          {/* Goals Header Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=300&fit=crop"
                alt="Night sky representing aspirations"
                className="w-full max-w-2xl h-64 object-cover rounded-xl shadow-soft border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-accent/10 rounded-xl"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Goals */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Dreams & Goals</h3>
              
              {goals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-2">
                          {goal.category}
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Skills Matrix */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Skills Matrix</h3>
              
              <div className="space-y-6">
                <div className="group bg-gradient-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-glow hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-1">
                  <h4 className="font-semibold text-lg text-primary mb-4 group-hover:text-accent transition-colors duration-300">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="group bg-gradient-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-glow hover:border-accent/20 transition-all duration-500 transform hover:-translate-y-1">
                  <h4 className="font-semibold text-lg text-primary mb-4 group-hover:text-accent transition-colors duration-300">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="group bg-gradient-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-glow hover:border-secondary/20 transition-all duration-500 transform hover:-translate-y-1">
                  <h4 className="font-semibold text-lg text-primary mb-4 group-hover:text-secondary transition-colors duration-300">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground border border-secondary rounded-full text-sm font-medium hover:bg-secondary hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="group bg-gradient-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-glow hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-1">
                  <h4 className="font-semibold text-lg text-primary mb-4 group-hover:text-accent transition-colors duration-300">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-110 hover:shadow-soft transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values & Strengths */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-foreground mb-4">Values & Strengths</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground">
                <strong className="text-primary">Learning through Real-World Application:</strong> I believe in learning by doing. My internship experience at CanDeal, combined with running my own agency, has taught me more about practical software development than classroom theory alone.
              </p>
              
              <p className="text-foreground">
                <strong className="text-primary">EQ Focus:</strong> I prioritize self-awareness and responsibility in both my personal growth and professional relationships. Understanding myself and taking ownership of my work helps me be a better teammate and developer.
              </p>
              
              <p className="text-foreground">
                <strong className="text-primary">Continuous Iteration:</strong> Whether it's code, business processes, or personal skills, I believe in constant improvement through feedback, reflection, and adaptation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;