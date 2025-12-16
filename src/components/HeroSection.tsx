import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import appPreview from "../assets/hero.png";
import { GridScan } from "@/components/GridScan";

const HeroSection = () => {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">


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
          className="pointer-events-auto"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 md:ml-16 justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Versión.1.0.0 disponible
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Cine</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                mapedia
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubre películas, guarda tus favoritas y disfruta del cine desde
              cualquier lugar. Tu compañera perfecta para los amantes del
              séptimo arte.
            </p>

            {/* CTA Botones - "Ir a Descarga" */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToDownload}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 shadow-[var(--shadow-glow)]"
              >
                <Download className="w-5 h-5" />
                Descargar Gratis
              </Button>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl scale-110 rounded-full" />
              
              {/* Phone mockup */}
              <div className="relative animate-float border-2 border-border rounded-3xl">
                <img
                  src={appPreview}
                  alt="CinemaPedia Preview"
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
