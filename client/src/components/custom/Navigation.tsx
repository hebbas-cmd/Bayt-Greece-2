import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Program Overview", href: "/#overview" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Investment Options", href: "/#investments" },
    { name: "Process", href: "/#process" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // If it's a hash link on the home page, we might need manual scrolling if not already handled by browser
    if (href.startsWith("/#") && location === "/") {
      const element = document.querySelector(href.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-border/40 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
                "w-10 h-10 border-2 flex items-center justify-center transition-colors",
                 isScrolled ? "border-primary text-primary" : "border-white text-white"
            )}>
              <span className="font-display font-bold text-xl">A</span>
            </div>
            <span className={cn(
              "font-display font-bold text-xl tracking-tight uppercase",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Aegean Residency
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors",
                isScrolled ? "text-primary" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant={isScrolled ? "outline" : "secondary"}
            className={cn(
                isScrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "bg-white/10 text-white hover:bg-white/20 border-0"
            )}
          >
            <Globe className="w-4 h-4 mr-2" />
            EN
          </Button>
          <Button 
            className={cn(
                "font-medium",
                isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"
            )}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary font-medium text-lg py-2 border-b border-border/50"
              onClick={() => handleNavClick(link.href)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4 bg-primary text-white">Contact Us</Button>
        </div>
      )}
    </nav>
  );
}
