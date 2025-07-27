const VisionSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Vision
          </h2>
          
          <div className="space-y-8">
            {/* Main vision content */}
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 bg-gradient-card rounded-xl p-8 shadow-soft border border-border/50">
                <div className="space-y-6 text-lg leading-relaxed text-foreground">
                  <p>
                    <strong className="text-primary">Vision of Impact:</strong> I want to build technology that democratizes opportunity, not gatekeeps it. My goal is to create applications and systems that people actually find useful and open daily.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Long-term Goal:</strong> To write code that powers something people open every day and think "this just works." Whether that's internal tools that save teammates hours of manual work, or consumer apps that improve how people manage their daily lives.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Ethical Reflections:</strong> I believe being a good developer isn't just about technical skills. You have to consider data privacy, digital accessibility, environmental costs of infrastructure, and the communities your app serves.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Values as a Developer:</strong> The best software happens through iteration, collaboration, and staying humble enough to admit your first implementation probably isn't your best one. I value user feedback, agility, and continuous learning.
                  </p>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=350&h=450&fit=crop"
                    alt="Innovation and ideas"
                    className="w-72 h-80 object-cover rounded-xl shadow-soft border border-border/50"
                  />
                  <div className="absolute inset-0 bg-gradient-accent/10 rounded-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Highlighted quote */}
            <div className="bg-gradient-primary text-primary-foreground rounded-xl p-8 shadow-glow transform hover:scale-105 transition-all duration-300">
              <blockquote className="text-xl lg:text-2xl font-semibold text-center leading-relaxed">
                "I want my code to help level the playing field — whether that's internal tools that save time or public apps that unlock new possibilities."
              </blockquote>
            </div>
            
            {/* Additional insights */}
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=350&h=400&fit=crop"
                    alt="Team collaboration"
                    className="w-72 h-72 object-cover rounded-xl shadow-soft border border-border/50"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-gradient-card rounded-xl p-8 shadow-soft border border-border/50">
                <p className="text-lg leading-relaxed text-foreground">
                  <strong className="text-primary">What Drives Me:</strong> Entrepreneurship isn't just a buzzword for me — it's a sandbox for testing ideas. Running my agency has taught me more about real-world software development than I initially expected. I believe the best way to become a better engineer is to try things yourself, iterate rapidly, and learn from both successes and failures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;