import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RigRescue Logo" className="h-12 w-auto" />
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@rigrescue.com"
              className="text-background/60 hover:text-background transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/40">
            © 2025 RigRescue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
