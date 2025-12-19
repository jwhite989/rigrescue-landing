import { Zap, DollarSign, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description:
      "What used to take an hour of phone tag now takes minutes. Driver submits request → tech accepts → both navigate to each other. Done.",
    color: "accent",
  },
  {
    icon: DollarSign,
    title: "More Work, Less Downtime",
    description:
      "Drivers get back on the road faster. Independent techs fill gaps in their schedule. Fleets reduce costly delays. Everyone makes more money.",
    color: "success",
  },
  {
    icon: Heart,
    title: "Build Relationships",
    description:
      "Drivers find great techs and save them as favorites. Techs build their reputation with ratings. Fleets discover new reliable vendors for backup.",
    color: "primary",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real-Time Visibility.{" "}
            <span className="text-accent">Zero Phone Tag.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  benefit.color === "accent"
                    ? "bg-accent/10"
                    : benefit.color === "success"
                    ? "bg-success/10"
                    : "bg-primary/10"
                }`}
              >
                <benefit.icon
                  className={`w-10 h-10 ${
                    benefit.color === "accent"
                      ? "text-accent"
                      : benefit.color === "success"
                      ? "text-success"
                      : "text-primary"
                  }`}
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
