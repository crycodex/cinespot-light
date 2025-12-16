import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold">Cine App</span>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Términos y Condiciones
            </Link>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cine App. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
