import { useState } from 'react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

const roles = [
  'Owner-operator / Independent driver',
  'Company driver (OTR)',
  'Company driver (Regional/Local)',
  'Independent mobile diesel tech',
  'Shop owner with mobile service',
  'Fleet manager / Dispatcher',
  'Other',
];

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [state, setState] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !role) {
      toast({
        title: 'Please fill in required fields',
        description: 'Email and role are required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when RigRescue launches.",
    });

    setEmail('');
    setRole('');
    setState('');
    setPainPoint('');
    setIsSubmitting(false);
  };

  return (
    <section
      id="waitlist"
      className="py-20 lg:py-32 gradient-hero relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Get Notified <span className="text-accent">When We Launch!</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            We're starting with owner-operators and independent techs. Fleet and
            shop management tools coming after.
          </p>
          <p className="text-primary-foreground/90 mb-8 font-medium">
            Be one of the first to get access:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-accent outline-none text-base"
              required
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-card text-foreground border-0 focus:ring-2 focus:ring-accent outline-none text-base appearance-none cursor-pointer"
              required
            >
              <option value="" disabled>
                I am a...
              </option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <input
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-accent outline-none text-base"
            />

            <textarea
              placeholder="What's your biggest pain point with breakdowns today? (Optional)"
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              rows={3}
              className="w-full px-5 py-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-accent outline-none text-base resize-none"
            />

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Get Early Access'}
            </Button>
          </form>

          <p className="mt-6 text-primary-foreground/60 text-sm">
            250+ drivers and techs already on the waitlist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
