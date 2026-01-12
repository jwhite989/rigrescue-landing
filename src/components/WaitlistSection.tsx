import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
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

const usStates = [
  { name: 'Alabama', abbr: 'AL' },
  { name: 'Alaska', abbr: 'AK' },
  { name: 'Arizona', abbr: 'AZ' },
  { name: 'Arkansas', abbr: 'AR' },
  { name: 'California', abbr: 'CA' },
  { name: 'Colorado', abbr: 'CO' },
  { name: 'Connecticut', abbr: 'CT' },
  { name: 'Delaware', abbr: 'DE' },
  { name: 'Florida', abbr: 'FL' },
  { name: 'Georgia', abbr: 'GA' },
  { name: 'Hawaii', abbr: 'HI' },
  { name: 'Idaho', abbr: 'ID' },
  { name: 'Illinois', abbr: 'IL' },
  { name: 'Indiana', abbr: 'IN' },
  { name: 'Iowa', abbr: 'IA' },
  { name: 'Kansas', abbr: 'KS' },
  { name: 'Kentucky', abbr: 'KY' },
  { name: 'Louisiana', abbr: 'LA' },
  { name: 'Maine', abbr: 'ME' },
  { name: 'Maryland', abbr: 'MD' },
  { name: 'Massachusetts', abbr: 'MA' },
  { name: 'Michigan', abbr: 'MI' },
  { name: 'Minnesota', abbr: 'MN' },
  { name: 'Mississippi', abbr: 'MS' },
  { name: 'Missouri', abbr: 'MO' },
  { name: 'Montana', abbr: 'MT' },
  { name: 'Nebraska', abbr: 'NE' },
  { name: 'Nevada', abbr: 'NV' },
  { name: 'New Hampshire', abbr: 'NH' },
  { name: 'New Jersey', abbr: 'NJ' },
  { name: 'New Mexico', abbr: 'NM' },
  { name: 'New York', abbr: 'NY' },
  { name: 'North Carolina', abbr: 'NC' },
  { name: 'North Dakota', abbr: 'ND' },
  { name: 'Ohio', abbr: 'OH' },
  { name: 'Oklahoma', abbr: 'OK' },
  { name: 'Oregon', abbr: 'OR' },
  { name: 'Pennsylvania', abbr: 'PA' },
  { name: 'Rhode Island', abbr: 'RI' },
  { name: 'South Carolina', abbr: 'SC' },
  { name: 'South Dakota', abbr: 'SD' },
  { name: 'Tennessee', abbr: 'TN' },
  { name: 'Texas', abbr: 'TX' },
  { name: 'Utah', abbr: 'UT' },
  { name: 'Vermont', abbr: 'VT' },
  { name: 'Virginia', abbr: 'VA' },
  { name: 'Washington', abbr: 'WA' },
  { name: 'West Virginia', abbr: 'WV' },
  { name: 'Wisconsin', abbr: 'WI' },
  { name: 'Wyoming', abbr: 'WY' },
];

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [state, setState] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);

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

    try {
      await addToWaitlist({
        email: email.trim(),
        role,
        state: state.trim() || undefined,
        painPoint: painPoint.trim() || undefined,
      });

      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when RigRescue launches.",
      });

      setEmail('');
      setRole('');
      setState('');
      setPainPoint('');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.';

      toast({
        title: 'Unable to join waitlist',
        description:
          errorMessage.includes('already on the waitlist')
            ? 'This email is already registered. Check your inbox for updates!'
            : errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-card text-foreground border-0 focus:ring-2 focus:ring-accent outline-none text-base appearance-none cursor-pointer"
            >
              <option value="">
                State (Optional)
              </option>
              {usStates.map((s) => (
                <option key={s.abbr} value={s.abbr}>
                  {s.name} ({s.abbr})
                </option>
              ))}
            </select>

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
