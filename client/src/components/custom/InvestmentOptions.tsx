import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InvestmentOptions() {
  return (
    <section id="investments" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Opportunities</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Investment Options</h2>
          <p className="text-lg text-muted-foreground font-light">
            Choose the investment path that aligns with your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Option 1: Commercial Renewal */}
          <div className="group bg-white rounded-sm overflow-hidden border border-border/50 hover:border-accent/50 transition-colors">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
               {/* Placeholder for image */}
               <div className="absolute inset-0 bg-neutral-400 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6 right-6">
                 <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">From €250,000</span>
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-medium mb-4">Commercial Renewal</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Conversion of commercial properties to residential use, offering a lower entry threshold in prime areas.
              </p>
              <Button variant="link" className="p-0 text-accent hover:text-accent/80 font-medium">
                View Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Option 2: Residential Real Estate */}
          <div className="group bg-white rounded-sm overflow-hidden border border-border/50 hover:border-accent/50 transition-colors">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
               {/* Placeholder for image */}
               <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6 right-6">
                 <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">From €250,000</span>
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-medium mb-4">Residential Real Estate</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Invest in residential properties in non-restricted areas. Ideal for personal use or rental income.
              </p>
              <Button variant="link" className="p-0 text-accent hover:text-accent/80 font-medium">
                View Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Option 3: Prime Locations */}
          <div className="group bg-white rounded-sm overflow-hidden border border-border/50 hover:border-accent/50 transition-colors">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
               {/* Placeholder for image */}
               <div className="absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6 right-6">
                 <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">From €800,000</span>
               </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-medium mb-4">Prime Locations</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Premium properties in high-demand areas like Athens, Thessaloniki, Mykonos, and Santorini.
              </p>
              <Button variant="link" className="p-0 text-accent hover:text-accent/80 font-medium">
                View Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
