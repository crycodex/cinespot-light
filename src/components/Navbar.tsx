import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold">Cine App</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection("download")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Descargar
            </button>
          </nav>
          
          {/* CTA */}
          <Button 
            size="sm" 
            onClick={() => scrollToSection("download")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Descargar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
