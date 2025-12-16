import { Link } from "react-router-dom";
import { ArrowLeft, Film, FileText, CheckCircle2, AlertTriangle, Copyright, Shield, Ban, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
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
              Al descargar, instalar o utilizar CinemaPedia, aceptas estar legalmente vinculado por estos términos y condiciones. 
              Si no estás de acuerdo con alguna parte de estos términos, no debes usar la aplicación. 
              Te recomendamos leer estos términos cuidadosamente antes de usar nuestros servicios.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">1. Aceptación de los Términos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Al acceder y usar CinemaPedia, aceptas estos términos y condiciones en su totalidad. 
                    Estos términos constituyen un acuerdo legalmente vinculante entre tú y CinemaPedia.
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Debes tener al menos 13 años de edad para usar la aplicación, o la edad mínima requerida 
                      en tu jurisdicción para consentir al procesamiento de datos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Si usas la aplicación en nombre de una organización, garantizas que tienes autoridad 
                      para vincular a esa organización a estos términos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Si no estás de acuerdo con estos términos, debes dejar de usar la aplicación inmediatamente.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Film className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">2. Descripción del Servicio</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CinemaPedia es una aplicación gratuita diseñada para ayudarte a descubrir, explorar y gestionar información 
                    sobre películas. Nuestros servicios incluyen:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Búsqueda y descubrimiento de películas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Información detallada sobre películas, incluyendo sinopsis, reparto y calificaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Funcionalidad para guardar películas favoritas localmente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Acceso a información de películas populares y próximos estrenos</span>
                    </li>
                  </ul>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Nota sobre contenido:</strong> La información sobre películas 
                      proviene de The Movie Database (TMDB) y está sujeta a sus propios términos de servicio. 
                      CinemaPedia no es responsable por la exactitud, completitud o disponibilidad de este contenido.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Ban className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">3. Uso Aceptable</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Al usar CinemaPedia, te comprometes a:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Usar la aplicación solo para fines legales y de acuerdo con estos términos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No intentar acceder a áreas no autorizadas de la aplicación o sus sistemas relacionados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No interferir o interrumpir el funcionamiento de la aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No usar la aplicación de manera que pueda dañar, deshabilitar o sobrecargar nuestros servicios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No intentar extraer o recopilar datos de la aplicación mediante métodos automatizados</span>
                    </li>
                  </ul>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-destructive">
                      <strong>Violación de estos términos puede resultar en la terminación inmediata de tu acceso a la aplicación.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Copyright className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">4. Propiedad Intelectual</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Todos los derechos de propiedad intelectual relacionados con CinemaPedia son propiedad nuestra o de nuestros 
                    licenciantes. Esto incluye, pero no se limita a:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>El diseño, código fuente, gráficos, logotipos y otros elementos visuales de la aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Marcas comerciales, nombres comerciales y otros identificadores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Documentación, manuales y materiales relacionados</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Se te otorga una licencia limitada, no exclusiva, no transferible y revocable para usar la aplicación 
                    únicamente para tus fines personales y no comerciales. No puedes copiar, modificar, distribuir, vender o 
                    alquilar ninguna parte de la aplicación sin nuestro consentimiento previo por escrito.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">5. Limitación de Responsabilidad</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CinemaPedia se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo, 
                    expresas o implícitas. En la medida máxima permitida por la ley:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No garantizamos que la aplicación funcionará sin interrupciones o errores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No garantizamos la exactitud, completitud o utilidad de la información proporcionada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No seremos responsables por daños directos, indirectos, incidentales, especiales o consecuentes 
                      derivados del uso o la imposibilidad de usar la aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nuestra responsabilidad total no excederá el monto que hayas pagado por usar la aplicación 
                      (si aplica, actualmente la aplicación es gratuita)</span>
                    </li>
                  </ul>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Algunas jurisdicciones no permiten la exclusión de garantías implícitas 
                      o la limitación de responsabilidad por daños incidentales, por lo que las limitaciones anteriores pueden no 
                      aplicarse a ti.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">6. Exención de Garantías</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    La aplicación y todo su contenido se proporcionan "tal cual" sin garantías de ningún tipo. 
                    Renunciamos expresamente a todas las garantías, ya sean expresas o implícitas, incluyendo pero no 
                    limitándose a garantías de comerciabilidad, idoneidad para un propósito particular y no infracción. 
                    No garantizamos que la aplicación cumplirá con tus requisitos específicos o que será ininterrumpida, 
                    oportuna, segura o libre de errores.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">7. Modificaciones de los Términos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                    Cuando realicemos cambios significativos:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Te notificaremos mediante una actualización en la aplicación o en nuestro sitio web</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Actualizaremos la fecha de "Última actualización" al inicio de estos términos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Los cambios entrarán en vigor inmediatamente después de su publicación</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    El uso continuado de la aplicación después de que los cambios entren en vigor constituye tu aceptación 
                    de los nuevos términos. Si no estás de acuerdo con los términos modificados, debes dejar de usar la aplicación.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">8. Terminación</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Podemos terminar o suspender tu acceso a la aplicación inmediatamente, sin previo aviso, 
                    por cualquier motivo, incluyendo pero no limitándose a:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Violación de estos términos y condiciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Uso fraudulento, ilegal o no autorizado de la aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Razones técnicas o de seguridad</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    También puedes terminar tu uso de la aplicación en cualquier momento simplemente desinstalándola. 
                    Tras la terminación, tu derecho a usar la aplicación cesará inmediatamente.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3">9. Ley Aplicable y Jurisdicción</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estos términos se regirán e interpretarán de acuerdo con las leyes del país donde operamos, 
                    sin dar efecto a ningún principio de conflictos de leyes. Cualquier disputa que surja de o 
                    esté relacionada con estos términos o el uso de la aplicación estará sujeta a la jurisdicción 
                    exclusiva de los tribunales competentes en nuestra jurisdicción.
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
                  <h2 className="text-2xl font-semibold mb-3">10. Contacto</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través de:
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

export default Terms;
