import { Film, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

const Navbar = () => {
  const { scrollDirection, scrollY } = useScrollDirection();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ${
        isHidden 
          ? "-translate-y-full" 
          : "translate-y-0"
      } ${
        isScrolled
          ? "top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl rounded-2xl bg-card/90 backdrop-blur-lg border border-border shadow-lg"
          : "top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className={`${isScrolled ? "px-4" : "container mx-auto px-4"}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className={`text-primary transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`} />
            <span className={`font-bold transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}>
              Cine App
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Descargar
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* CTA */}
            <Button
              size="sm"
              onClick={() => scrollToSection("download")}
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Descargar
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("features")}
                className="text-left px-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Características
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className="text-left px-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Tecnología
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-left px-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Descargar
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
