import { useState } from "react";
import { Truck, Wrench, Building2, Users, MapPin, Bell, Check, Navigation } from "lucide-react";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState<"independent" | "fleet">("independent");

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real-Time Connection.{" "}
            <span className="text-primary">Zero Phone Tag.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-xl p-1.5 inline-flex gap-1 card-shadow">
            <button
              onClick={() => setActiveTab("independent")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                activeTab === "independent"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For Independent Drivers & Techs
            </button>
            <button
              onClick={() => setActiveTab("fleet")}
              className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                activeTab === "fleet"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For Fleets & Shops
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "independent" && (
          <div className="animate-fade-in-up">
            <p className="text-center text-lg text-muted-foreground mb-8">
              Simple, Fast, Direct — <span className="text-accent font-semibold">Available February 2026</span>
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Driver Side */}
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Driver Side</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "Your truck breaks down" },
                    { icon: Navigation, text: "Open app, see available techs nearby" },
                    { icon: Bell, text: "Select tech, describe issue, send request" },
                    { icon: Check, text: "Track tech's arrival in real-time" },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-foreground">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Side */}
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Tech Side</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { text: 'Toggle "on duty" when available' },
                    { text: "Receive request with location/issue" },
                    { text: "Accept or pass with one tap" },
                    { text: "Navigate to breakdown" },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-success">{index + 1}</span>
                      </div>
                      <p className="text-foreground">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Perfect for: Owner-operators, independent techs, anyone who needs to move fast without corporate approval
            </p>
          </div>
        )}

        {activeTab === "fleet" && (
          <div className="animate-fade-in-up">
            <p className="text-center text-lg text-muted-foreground mb-8">
              Coordinated, Controlled, Trackable — <span className="text-accent font-semibold">Available Q2 2026</span>
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Truck,
                  title: "Company Driver",
                  color: "primary",
                  steps: [
                    "Truck breaks down",
                    "Open app, report breakdown",
                    "Request goes to fleet manager",
                    "Track assigned tech's arrival",
                  ],
                },
                {
                  icon: Users,
                  title: "Fleet Manager",
                  color: "accent",
                  steps: [
                    "Receive breakdown alert",
                    "See approved vendors within radius",
                    "Select vendor and route job",
                    "Track tech's progress and ETA",
                  ],
                },
                {
                  icon: Building2,
                  title: "Shop Owner",
                  color: "success",
                  steps: [
                    "Receive job request from fleet",
                    "See which techs are available",
                    "Assign to appropriate tech",
                    "Tech gets job details and routing",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Tech",
                  color: "primary",
                  steps: [
                    "Receive assigned job from shop",
                    "Navigate to breakdown",
                    "Everyone sees your location",
                    "Complete job, get rated",
                  ],
                },
              ].map((role, roleIndex) => (
                <div
                  key={role.title}
                  className="bg-card rounded-2xl p-6 card-shadow border border-border"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        role.color === "primary"
                          ? "bg-primary/10"
                          : role.color === "accent"
                          ? "bg-accent/10"
                          : "bg-success/10"
                      }`}
                    >
                      <role.icon
                        className={`w-5 h-5 ${
                          role.color === "primary"
                            ? "text-primary"
                            : role.color === "accent"
                            ? "text-accent"
                            : "text-success"
                        }`}
                      />
                    </div>
                    <h4 className="font-bold text-foreground">{role.title}</h4>
                  </div>
                  <div className="space-y-3">
                    {role.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            role.color === "primary"
                              ? "bg-primary/10"
                              : role.color === "accent"
                              ? "bg-accent/10"
                              : "bg-success/10"
                          }`}
                        >
                          <span
                            className={`text-xs font-bold ${
                              role.color === "primary"
                                ? "text-primary"
                                : role.color === "accent"
                                ? "text-accent"
                                : "text-success"
                            }`}
                          >
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-sm text-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Perfect for: Company fleets with vendor contracts, shops servicing multiple fleet accounts
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
