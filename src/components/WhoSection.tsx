import { Truck, Wrench, Building2, Factory, Check } from "lucide-react";

const personas = [
  {
    icon: Truck,
    title: "Owner-Operators",
    description:
      "You're on the road and don't have a shop on retainer. You need help fast.",
    features: [
      "See available techs near you",
      "Compare ratings and distance",
      "Request help with one tap",
      "Track arrival in real-time",
    ],
    availability: "February 2026",
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Independent Techs",
    description:
      "You're building your business and need more customers without cold calling.",
    features: [
      "Get job requests from nearby drivers",
      "All job details upfront",
      "Accept what fits your schedule",
      "Build reputation through ratings",
    ],
    availability: "February 2026",
    color: "success",
  },
  {
    icon: Building2,
    title: "Fleet Managers",
    description:
      "You manage company drivers and need fast coordination with your approved vendors.",
    features: [
      "Receive breakdown alerts from drivers",
      "Route to preferred vendors instantly",
      "Track all active jobs in real-time",
      "Analytics on response times and costs",
    ],
    availability: "Q2 2026",
    color: "accent",
  },
  {
    icon: Factory,
    title: "Shop Owners",
    description:
      "You run a mobile service operation and want more fleet contracts and better job coordination.",
    features: [
      "Receive job requests from fleet partners",
      "Assign jobs to your available techs",
      "Manage multiple active jobs at once",
      "Track your team's locations",
    ],
    availability: "Q2 2026",
    color: "primary",
  },
];

const WhoSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built For <span className="text-primary">Everyone</span> In The
            Industry
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  persona.color === "primary"
                    ? "bg-primary/10"
                    : persona.color === "success"
                    ? "bg-success/10"
                    : "bg-accent/10"
                }`}
              >
                <persona.icon
                  className={`w-7 h-7 ${
                    persona.color === "primary"
                      ? "text-primary"
                      : persona.color === "success"
                      ? "text-success"
                      : "text-accent"
                  }`}
                />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {persona.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {persona.description}
              </p>

              <div className="space-y-2 flex-grow">
                {persona.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <span
                  className={`text-sm font-semibold ${
                    persona.color === "primary"
                      ? "text-primary"
                      : persona.color === "success"
                      ? "text-success"
                      : "text-accent"
                  }`}
                >
                  Available: {persona.availability}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
