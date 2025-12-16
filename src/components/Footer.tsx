import { Film, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import icon from "../assets/icon/icon.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={icon} alt="CinemaPedia" className={`w-8 h-8 rounded`} />
              <span className="text-lg font-bold">CinemaPedia</span>
            </div>
            
            {/* Links */}
            <nav className="flex items-center gap-6 text-sm flex-wrap justify-center">
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
              <a 
                href="mailto:recaldecd@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">¿Tienes preguntas o sugerencias?</span>
              </div>
              <a 
                href="mailto:recaldecd@gmail.com?subject=Consulta sobre CinemaPedia"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                recaldecd@gmail.com
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} CinemaPedia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
