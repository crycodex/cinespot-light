import { Film, Search, Heart, Moon, Wifi, Smartphone } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Descubre Películas",
    description: "Explora las más populares, estrenos y próximos lanzamientos.",
  },
  {
    icon: Search,
    title: "Búsqueda Inteligente",
    description: "Encuentra cualquier película por título en segundos.",
  },
  {
    icon: Heart,
    title: "Tus Favoritas",
    description: "Guarda las películas que más te gustan para verlas después.",
  },
  {
    icon: Moon,
    title: "Modo Oscuro",
    description: "Alterna entre temas claro y oscuro según tu preferencia.",
  },
  {
    icon: Wifi,
    title: "Soporte Offline",
    description: "Accede a tus favoritas incluso sin conexión a internet.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description: "Optimizado para cualquier tamaño de pantalla.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-muted-foreground text-lg">
            Una experiencia completa para descubrir y disfrutar del mejor cine.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
