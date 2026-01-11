import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,30%,20%)] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RigRescue Logo" className="h-12 w-auto" />
            <div>
              <span className="text-lg font-bold text-[hsl(220,15%,95%)]">
                RigRescue
              </span>
              <p className="text-sm text-[hsl(220,15%,70%)]">
                Roadside breakdowns, solved.
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-[hsl(220,15%,70%)] hover:text-[hsl(220,15%,95%)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[hsl(220,15%,70%)] hover:text-[hsl(220,15%,95%)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@rigrescue.com"
              className="text-[hsl(220,15%,70%)] hover:text-[hsl(220,15%,95%)] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-[hsl(220,15%,30%)] text-center">
          <p className="text-sm text-[hsl(220,15%,50%)]">
            © 2026 RigRescue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
