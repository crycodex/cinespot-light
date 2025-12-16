import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import appPreview from "@/assets/app-preview.png";

const HeroSection = () => {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Nueva versión disponible
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Cine</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}App
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubre películas, guarda tus favoritas y disfruta del cine desde
              cualquier lugar. Tu compañera perfecta para los amantes del
              séptimo arte.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToDownload}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 shadow-[var(--shadow-glow)]"
              >
                <Download className="w-5 h-5" />
                Descargar para Android
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToDownload}
                className="border-border hover:bg-muted gap-2 px-8"
              >
                <Download className="w-5 h-5" />
                Descargar para iOS
              </Button>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl scale-110 rounded-full" />
              
              {/* Phone mockup */}
              <div className="relative animate-float">
                <img
                  src={appPreview}
                  alt="Cine App Preview"
                  className="w-64 md:w-80 rounded-3xl shadow-2xl border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
