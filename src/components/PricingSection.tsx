import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "Owner-Operator Drivers",
    price: "Free",
    period: "Forever",
    description: "You only pay the tech's service rate.",
    features: [
      "Find nearby techs",
      "Unlimited requests",
      "Real-time tracking",
      "Save favorite techs",
      "Job history",
    ],
    highlighted: false,
    badge: null,
  },
  {
    title: "Independent Techs",
    price: "$29",
    period: "/month",
    description: "Beta users lock in this rate forever.",
    features: [
      "Unlimited job opportunities",
      "Instant notifications",
      "No per-job commissions",
      "Build your rating",
      "Digital invoicing (soon)",
    ],
    highlighted: true,
    badge: "Free for 6 months",
  },
  {
    title: "Fleet Managers",
    price: "$199",
    period: "/month",
    description: "Beta partners get 50% off for 12 months.",
    features: [
      "Manage unlimited drivers",
      "Approved vendor routing",
      "Real-time job tracking",
      "Analytics dashboard",
      "Payment processing (soon)",
    ],
    highlighted: false,
    badge: "Custom pricing available",
  },
  {
    title: "Shop Owners",
    price: "$99",
    period: "/month",
    description: "Beta partners get 50% off for 12 months.",
    features: [
      "Manage 2-10+ techs",
      "Receive fleet job requests",
      "Assign and track jobs",
      "Performance analytics",
      "Digital invoicing (soon)",
    ],
    highlighted: false,
    badge: "Scales with team size",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple Pricing.{" "}
            <span className="text-primary">No Hidden Fees.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.title}
              className={`rounded-2xl p-6 flex flex-col animate-fade-in-up ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-4 ring-accent/50 shadow-xl scale-105"
                  : "bg-card text-card-foreground card-shadow border border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.badge && (
                <div
                  className={`text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <h3
                className={`text-lg font-bold mb-4 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.title}
              </h3>

              <div className="mb-4">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.highlighted
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <div className="space-y-3 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-accent" : "text-success"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
