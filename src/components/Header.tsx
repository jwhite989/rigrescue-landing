import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="RigRescue Logo" className="h-10 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </nav>

        <Button
          variant="accent"
          size="sm"
          onClick={() => scrollToSection("waitlist")}
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
