const technologies = [
  { name: "Flutter", description: "Framework UI multiplataforma" },
  { name: "Dart", description: "Lenguaje de programación" },
  { name: "Riverpod", description: "Gestión de estado reactiva" },
  { name: "Dio", description: "Cliente HTTP" },
  { name: "Drift", description: "Base de datos SQLite" },
  { name: "GoRouter", description: "Navegación declarativa" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construida con las mejores tecnologías
          </h2>
          <p className="text-muted-foreground text-lg">
            Arquitectura limpia y tecnologías modernas para una experiencia fluida.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Architecture badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Clean Architecture", "SOLID", "Repository Pattern", "Offline First"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
