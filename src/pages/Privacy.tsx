import { Link } from "react-router-dom";
import { ArrowLeft, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Film className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">Cine App</span>
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
          
          <p className="text-muted-foreground mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cine App recopila información mínima necesaria para proporcionar nuestros servicios, 
              incluyendo preferencias de películas favoritas almacenadas localmente en tu dispositivo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Uso de la Información</h2>
            <p className="text-muted-foreground leading-relaxed">
              La información recopilada se utiliza exclusivamente para mejorar tu experiencia 
              en la aplicación y personalizar las recomendaciones de películas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Almacenamiento de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tus datos de favoritos se almacenan localmente en tu dispositivo. 
              No compartimos información personal con terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad, 
              puedes contactarnos a través de nuestros canales oficiales.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
