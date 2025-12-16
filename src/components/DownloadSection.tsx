import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Descarga Cine App
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Disponible para Android e iOS. Empieza a descubrir películas hoy mismo.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 gap-3 px-8 py-6 text-base"
            >
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Disponible en</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 gap-3 px-8 py-6 text-base"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Descárgala en</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Descargas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">4.8</div>
              <div className="text-sm text-muted-foreground mt-1">Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground mt-1">Películas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
