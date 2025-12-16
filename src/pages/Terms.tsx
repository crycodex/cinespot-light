import { Link } from "react-router-dom";
import { ArrowLeft, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>
          
          <p className="text-muted-foreground mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al descargar y usar Cine App, aceptas estos términos y condiciones en su totalidad. 
              Si no estás de acuerdo con alguna parte, no debes usar la aplicación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Uso de la Aplicación</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cine App es una aplicación gratuita para descubrir información sobre películas. 
              El contenido mostrado proviene de The Movie Database (TMDB) y está sujeto a sus propios términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo el contenido de la aplicación, incluyendo diseño, código y gráficos, 
              es propiedad de Cine App o sus licenciantes y está protegido por leyes de derechos de autor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cine App se proporciona "tal cual" sin garantías de ningún tipo. 
              No nos hacemos responsables por cualquier daño derivado del uso de la aplicación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Modificaciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios serán efectivos inmediatamente después de su publicación.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;
