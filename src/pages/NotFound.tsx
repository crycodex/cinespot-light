import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Film, ArrowLeft, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridScan } from "@/components/GridScan";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Grid Scan Animation */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-[2]" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 border-b border-border bg-card/30 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Film className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">CinemaPedia</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-destructive/10 mb-8">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Página no encontrada</h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            <br />
            Puedes volver al inicio o explorar otras secciones de nuestra aplicación.
          </p>

          {/* Route info (dev only) */}
          {location.pathname && (
            <div className="bg-card/50 border border-border rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground">
                Ruta intentada: <code className="text-foreground font-mono">{location.pathname}</code>
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link to="/">
                <Home className="w-5 h-5" />
                Volver al Inicio
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.history.back()} className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Volver Atrás
            </Button>
          </div>

          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">O visita nuestras páginas principales:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/privacy">Política de Privacidad</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/terms">Términos y Condiciones</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
