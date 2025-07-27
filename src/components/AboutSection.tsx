const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:order-1 flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop"
                  alt="Person coding"
                  className="w-80 h-96 object-cover rounded-xl shadow-soft border border-border/50"
                />
                <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2 lg:order-2 bg-gradient-card rounded-xl p-8 shadow-soft border border-border/50">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  <strong className="text-primary">Program:</strong> I'm a second-year Computer Science student at York University with a strong focus on practical software development and product-led thinking.
                </p>
                
                <p>
                  <strong className="text-primary">Why CS:</strong> I've always been fascinated by the people behind the software you use daily. I chose this field because I wanted to be in a space where I could build tools, ideas, and opportunities that matter.
                </p>
                
                <p>
                  <strong className="text-primary">Learning Philosophy:</strong> I believe the best code isn't the most clever — it's the most useful. I learn through iteration, entrepreneurship, and solving real digital problems that people actually face.
                </p>
                
                <p>
                  <strong className="text-primary">Entrepreneurship Experience:</strong> I run a performance-based marketing agency where I build automation tools and help small businesses scale. This has taught me both coding and product instincts that I apply to all my projects.
                </p>
                
                <p>
                  <strong className="text-primary">Values:</strong> Hard work, responsibility, curiosity, simplicity, utility, and transparency guide everything I build. I believe in creating software that just works.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                  <p className="text-lg font-medium text-foreground italic">
                    "I believe the best code isn't the most clever — it's the most useful. I've applied this through both academic projects and my marketing agency, where I build automation tools and help small businesses scale."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;