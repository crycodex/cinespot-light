import { Link } from "react-router-dom";
import { ArrowLeft, Film, Shield, Database, Lock, Eye, Share2, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Film className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">CinemaPedia</span>
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
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <p className="text-sm">
                Última actualización: {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-card/50 border border-border rounded-xl p-6 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              En CinemaPedia, tu privacidad es nuestra prioridad. Esta política describe cómo recopilamos, 
              usamos y protegemos tu información personal cuando utilizas nuestra aplicación. 
              Nos comprometemos a ser transparentes sobre nuestras prácticas de privacidad.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">1. Información que Recopilamos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CinemaPedia está diseñada con la privacidad en mente. Recopilamos únicamente la información 
                    mínima necesaria para proporcionar nuestros servicios:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Datos de preferencias:</strong> Películas marcadas como favoritas, 
                      configuraciones de la aplicación y preferencias de visualización almacenadas localmente en tu dispositivo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Datos de uso:</strong> Información sobre cómo interactúas con la aplicación 
                      (sin identificar personalmente) para mejorar la experiencia del usuario.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Información técnica:</strong> Tipo de dispositivo, sistema operativo y versión 
                      de la aplicación para garantizar compatibilidad y rendimiento óptimo.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4 text-sm italic">
                    <strong>Importante:</strong> No recopilamos información personal identificable como nombres, 
                    direcciones de correo electrónico o números de teléfono, a menos que nos la proporciones voluntariamente.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">2. Uso de la Información</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos la información recopilada exclusivamente para los siguientes propósitos:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Proporcionar y mejorar nuestros servicios de descubrimiento de películas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Personalizar tu experiencia dentro de la aplicación.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Analizar el uso de la aplicación para identificar y corregir errores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Desarrollar nuevas funcionalidades y características.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">3. Almacenamiento y Seguridad de Datos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La seguridad de tus datos es fundamental para nosotros:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Almacenamiento local:</strong> Tus datos de favoritos y preferencias 
                      se almacenan exclusivamente en tu dispositivo usando tecnologías seguras de almacenamiento local.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Sin servidores externos:</strong> No transmitimos ni almacenamos 
                      tus datos personales en servidores externos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Protección de datos:</strong> Implementamos medidas de seguridad 
                      técnicas y organizativas para proteger tus datos contra acceso no autorizado.</span>
                    </li>
                  </ul>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Nota importante:</strong> Si desinstalas la aplicación, 
                      todos los datos almacenados localmente se eliminarán permanentemente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Share2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">4. Compartir Información con Terceros</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">No vendemos, alquilamos ni compartimos tu información personal con terceros.</strong> 
                    La única excepción es cuando utilizamos servicios de terceros para funcionalidades específicas:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 mt-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">The Movie Database (TMDB):</strong> Utilizamos la API de TMDB para 
                      obtener información sobre películas. Esta interacción no incluye datos personales identificables.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Servicios de análisis:</strong> Podemos utilizar servicios de análisis 
                      anónimos para mejorar la aplicación, sin identificar usuarios individuales.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">5. Tus Derechos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tienes derecho a:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Acceder a tus datos almacenados localmente en la aplicación.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Eliminar tus datos en cualquier momento desinstalando la aplicación o usando las opciones de la aplicación.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Obtener una copia de tus datos si es técnicamente posible.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Oponerte al procesamiento de datos para fines de análisis.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">6. Cambios a esta Política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras prácticas 
                    o por razones legales, operativas o regulatorias. Te notificaremos sobre cambios significativos mediante 
                    una actualización en la aplicación o en nuestro sitio web. Te recomendamos revisar esta política periódicamente.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">7. Contacto</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Si tienes preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad o el manejo 
                    de tus datos personales, puedes contactarnos a través de:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nuestros canales oficiales de soporte en la aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nuestro sitio web oficial</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                    Nos comprometemos a responder a tus consultas en un plazo razonable.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
