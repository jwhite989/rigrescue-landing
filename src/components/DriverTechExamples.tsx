import { MapPin, Wrench, Navigation, Clock, CheckCircle2, Phone, Star, AlertTriangle } from "lucide-react";

const ExperienceMockups = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            See Both Sides
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driver view shows nearby techs with rich profiles; tech view shows incoming job details with everything needed to roll.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Driver perspective - Tech list */}
          <div className="bg-card rounded-3xl p-8 card-shadow border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Driver view</p>
                <h3 className="text-lg font-semibold text-foreground">Nearby techs available</h3>
              </div>
            </div>

            <div className="relative mx-auto max-w-lg">
              <div className="bg-foreground rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  <div className="bg-secondary px-6 py-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">9:42</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-3 bg-success rounded-sm" />
                    </div>
                  </div>

                  {/* Tech List */}
                  <div className="p-4 space-y-3 bg-secondary/30 h-[500px] overflow-y-auto">
                    {/* Tech 1 - Closest */}
                    <div className="bg-card rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Wrench className="w-6 h-6 text-success" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-foreground">Alex Richards</p>
                          <p className="text-xs text-muted-foreground">Certified Diesel Tech</p>
                        </div>
                        <span className="text-xs font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">Closest</span>
                      </div>

                      <div className="space-y-2 text-xs mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground font-semibold">4.9</span>
                          <span className="text-muted-foreground">(127 jobs)</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>2.1 mi away · ETA 8 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-success font-medium">Available now</span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground mb-3">
                        Mobile diagnostics, jumpstarts, tire changes
                      </div>

                      <button className="w-full h-10 gradient-accent rounded-lg flex items-center justify-center text-sm font-semibold text-accent-foreground shadow">
                        Request This Tech
                      </button>
                    </div>

                    {/* Tech 2 */}
                    <div className="bg-card rounded-2xl p-4 shadow-md border border-border">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Wrench className="w-6 h-6 text-success" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-foreground">Mike's Mobile Repair</p>
                          <p className="text-xs text-muted-foreground">ASE Certified · 12 yrs exp</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground font-semibold">4.8</span>
                          <span className="text-muted-foreground">(89 jobs)</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>4.3 mi away · ETA 15 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-success font-medium">Available now</span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground mb-3">
                        Engine repairs, electrical, brakes
                      </div>

                      <button className="w-full h-10 gradient-accent rounded-lg flex items-center justify-center text-sm font-semibold text-accent-foreground shadow">
                        Request This Tech
                      </button>
                    </div>

                    {/* Tech 3 */}
                    <div className="bg-card rounded-2xl p-4 shadow-md border border-border">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Wrench className="w-6 h-6 text-success" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-foreground">Sarah's Diesel Service</p>
                          <p className="text-xs text-muted-foreground">Master Technician</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground font-semibold">5.0</span>
                          <span className="text-muted-foreground">(43 jobs)</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>6.8 mi away · ETA 22 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-success font-medium">Available now</span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground mb-3">
                        Full diagnostics, DEF systems, PM services
                      </div>

                      <button className="w-full h-10 gradient-accent rounded-lg flex items-center justify-center text-sm font-semibold text-accent-foreground shadow">
                        Request This Tech
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech perspective - Job list */}
          <div className="bg-card rounded-3xl p-8 card-shadow border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Tech view</p>
                <h3 className="text-lg font-semibold text-foreground">Incoming job requests</h3>
              </div>
            </div>

            <div className="relative mx-auto max-w-lg">
              <div className="bg-foreground rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  <div className="bg-secondary px-6 py-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">9:42</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-6 h-3 bg-success rounded-sm" />
                    </div>
                  </div>

                  {/* Job List */}
                  <div className="p-4 space-y-3 bg-secondary/30 h-[500px] overflow-y-auto">
                    {/* Job 1 - New */}
                    <div className="bg-card rounded-2xl p-4 shadow-lg border-2 border-success/30">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm font-bold text-foreground">Flat tire repair</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>I-80 Exit 147 · 3.4 mi away</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">New</span>
                      </div>

                      <div className="space-y-2 text-xs text-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>Requested 2 mins ago · ETA 15 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>Maria Santos (owner-operator)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span>Low shoulder, 53' trailer, needs wheel swap</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button className="h-10 rounded-lg bg-muted text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
                          Pass
                        </button>
                        <button className="h-10 rounded-lg gradient-accent text-accent-foreground font-semibold text-sm shadow">
                          Accept & Navigate
                        </button>
                      </div>
                    </div>

                    {/* Job 2 - Older request */}
                    <div className="bg-card rounded-2xl p-4 shadow-md border border-border">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm font-bold text-foreground">Engine won't start</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Rest Area MM 132 · 5.8 mi away</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">8 mins ago</span>
                      </div>

                      <div className="space-y-2 text-xs text-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>ETA 22 min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>Jake Miller (independent)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span>Possible fuel issue, truck cranks but won't fire</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button className="h-10 rounded-lg bg-muted text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
                          Pass
                        </button>
                        <button className="h-10 rounded-lg gradient-accent text-accent-foreground font-semibold text-sm shadow">
                          Accept & Navigate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMockups;
