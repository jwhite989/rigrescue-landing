import { useState } from 'react';
import { useMutation, useAction } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

const TeamSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = useMutation(api.contacts.submitContact);
  const sendEmail = useAction(api.sendEmail.sendContactEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: 'Please fill in all fields',
        description: 'Name, email, and message are required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContact({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      
      sendEmail({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }).catch((error) => {
        console.error("Failed to send email:", error);
      });

      toast({
        title: 'Message sent! ✉️',
        description: "We'll get back to you soon.",
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.';

      toast({
        title: 'Unable to send message',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Questions? Get in touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:ring-2 focus:ring-primary outline-none text-base"
                  required
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:ring-2 focus:ring-primary outline-none text-base"
                  required
                />
                <textarea
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground border border-border focus:ring-2 focus:ring-primary outline-none text-base resize-none"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
