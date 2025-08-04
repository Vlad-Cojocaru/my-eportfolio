const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Me?
          </h2>
          
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get to know me better through this brief introduction about my journey, values, and what drives me in software engineering.
          </p>
          
          <div className="relative">
            <div className="relative max-w-4xl mx-auto">
              <div className="w-full rounded-2xl shadow-2xl border-4 border-primary/20 relative z-10 overflow-hidden">
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/16nwafb82i.js" async type="module"></script>
                <style>
                  {`
                    wistia-player[media-id='16nwafb82i']:not(:defined) { 
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/16nwafb82i/swatch'); 
                      display: block; 
                      filter: blur(5px); 
                      padding-top:56.25%; 
                    }
                  `}
                </style>
                <wistia-player media-id="16nwafb82i" aspect="1.7777777777777777"></wistia-player>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-primary/20 rounded-2xl blur-xl opacity-60"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Video controls enhancement */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Click to play • Full screen available • ~2 minutes
              </p>
            </div>
          </div>
          
          {/* Additional context */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Passion-Driven</h3>
              <p className="text-sm text-muted-foreground">Learn about my motivation and what drives me in software engineering</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Problem-Solving</h3>
              <p className="text-sm text-muted-foreground">See how I approach challenges and create innovative solutions</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Team Player</h3>
              <p className="text-sm text-muted-foreground">Discover my collaborative approach and communication style</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 