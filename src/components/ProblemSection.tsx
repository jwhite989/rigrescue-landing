import { Truck, Wrench, Building2 } from "lucide-react";

const problems = [
  {
    icon: Truck,
    title: "For Drivers",
    description:
      "Your truck won't start at a rest stop. You pull up Google, start calling shops. Half don't answer. Half don't do mobile service. The one who picks up is hours away. Every hour you wait costs money.",
  },
  {
    icon: Wrench,
    title: "For Independent Techs",
    description:
      "You're trying to grow your mobile business, but getting customers means cold calling, Google ads, and hoping someone finds you. Half your time is marketing instead of wrenching.",
  },
  {
    icon: Building2,
    title: "For Fleets",
    description:
      "Your driver breaks down. Now you're playing phone tag between the driver, dispatch, and whatever shop might be available. Nobody knows where anyone is or when help will arrive.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Current System{" "}
            <span className="text-destructive">Wastes Everyone's Time</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl md:text-2xl font-semibold text-foreground">
          There has to be a{" "}
          <span className="text-primary">better way.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
