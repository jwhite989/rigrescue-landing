import { Mail } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Built By Someone Who's{' '}
            <span className="text-primary">Lived This Problem</span>
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow border border-border">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              RigRescue was created by someone who spent 10 years as both a
              truck driver and a mobile diesel mechanic.
            </p>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="italic">
                "I've been the driver stranded at a rest stop at 2 AM, calling
                every shop within 50 miles."
              </p>
              <p className="italic">
                "I've been the independent tech trying to grow a business
                without a marketing budget, missing opportunities I never knew
                existed."
              </p>
              <p className="italic">
                "I've seen how broken this system is from every angle."
              </p>
            </div>

            <p className="text-xl font-bold text-primary mb-8">
              So we're fixing it.
            </p>

            <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <a href="mailto:rigrescue26@gmail.com" className="font-medium">
                Questions? Email us directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
