import { MapPin, Wrench, Navigation } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
              Broke Down?{" "}
              <span className="text-accent">Get Help On The Way</span> In
              Minutes.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
              RigRescue connects truck drivers with mobile diesel techs nearby.
              Whether you need help fast or you're a tech looking for more work,
              we're making roadside breakdowns simpler.
            </p>
            <div className="animate-fade-in-up animation-delay-200">
              <Button variant="hero" onClick={scrollToWaitlist}>
                Join the Waitlist - Launching February 2026
              </Button>
            </div>
            <p className="mt-6 text-primary-foreground/60 text-sm animate-fade-in-up animation-delay-300">
              250+ drivers and techs already on the waitlist
            </p>
          </div>

          {/* Map Mockup */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-secondary px-6 py-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-3 bg-success rounded-sm" />
                    </div>
                  </div>

                  {/* Map Area */}
                  <div className="relative h-80 bg-gradient-to-br from-secondary to-muted overflow-hidden">
                    {/* Road Lines */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-0 right-0 h-8 bg-muted-foreground/20 transform -rotate-12" />
                      <div className="absolute top-1/3 left-1/4 right-0 h-6 bg-muted-foreground/15 transform rotate-45" />
                    </div>

                    {/* Driver Pin - Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-lg animate-pulse-glow">
                          <MapPin className="w-6 h-6 text-destructive-foreground" />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-destructive rotate-45 -z-10" />
                      </div>
                      <div className="mt-2 bg-card px-2 py-1 rounded text-xs font-medium text-foreground shadow-md text-center">
                        You
                      </div>
                    </div>

                    {/* Tech Markers */}
                    <div className="absolute top-[20%] left-[25%] animate-float">
                      <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-md">
                        <Wrench className="w-5 h-5 text-success-foreground" />
                      </div>
                      <div className="mt-1 bg-card px-2 py-0.5 rounded text-xs font-medium text-success shadow text-center">
                        2.3 mi
                      </div>
                    </div>

                    <div
                      className="absolute top-[30%] right-[15%] animate-float"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-md">
                        <Wrench className="w-5 h-5 text-success-foreground" />
                      </div>
                      <div className="mt-1 bg-card px-2 py-0.5 rounded text-xs font-medium text-success shadow text-center">
                        5.7 mi
                      </div>
                    </div>

                    <div
                      className="absolute bottom-[25%] left-[15%] animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-md">
                        <Wrench className="w-5 h-5 text-success-foreground" />
                      </div>
                      <div className="mt-1 bg-card px-2 py-0.5 rounded text-xs font-medium text-success shadow text-center">
                        8.1 mi
                      </div>
                    </div>
                  </div>

                  {/* Bottom UI */}
                  <div className="bg-card p-4 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Navigation className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        3 techs available nearby
                      </span>
                    </div>
                    <div className="w-full h-10 gradient-accent rounded-lg flex items-center justify-center">
                      <span className="text-sm font-semibold text-accent-foreground">
                        Request Help Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
