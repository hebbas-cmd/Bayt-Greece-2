import heroBg from "@assets/generated_images/luxury_greek_villa_overlooking_the_sea_at_sunset.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <img
          src={heroBg}
          alt="Luxury Greek Villa"
          className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-3xl space-y-8">
          <div className="inline-block px-4 py-1.5 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Golden Visa Advisory
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-tight">
            Greece Residence <br />
            <span className="italic text-accent-foreground/90">by Investment</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-xl leading-relaxed">
            I help families across the MENA region secure permanent European residency through strategic real estate investment in Greece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-medium px-8 h-14 text-lg rounded-sm">
              Check Eligibility
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary font-medium px-8 h-14 text-lg rounded-sm bg-transparent">
              <Download className="mr-2 w-5 h-5" />
              Program Overview
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
}
