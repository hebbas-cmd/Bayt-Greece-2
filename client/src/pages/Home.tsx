import { Navigation } from "@/components/custom/Navigation";
import { Hero } from "@/components/custom/Hero";
import { ProgramOverview } from "@/components/custom/ProgramOverview";
import { Benefits } from "@/components/custom/Benefits";
import { ProcessTimeline } from "@/components/custom/ProcessTimeline";
import { InvestmentOptions } from "@/components/custom/InvestmentOptions";
import { WhyChooseUs } from "@/components/custom/WhyChooseUs";
import { LeadForm } from "@/components/custom/LeadForm";
import { Footer } from "@/components/custom/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      <Hero />
      <ProgramOverview />
      <Benefits />
      <ProcessTimeline />
      <InvestmentOptions />
      <WhyChooseUs />
      
      {/* Lead Form Section */}
      <section id="contact" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl shadow-gray-200/50 rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:w-1/2 bg-primary text-white flex flex-col justify-center">
              <h2 className="text-3xl font-display font-medium mb-6">Start Your Journey</h2>
              <p className="text-white/70 mb-8 leading-relaxed font-light">
                Our experts are ready to guide you through the Greece Golden Visa program. Request a free eligibility assessment today.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-1 h-1 bg-accent rounded-full" />
                   <span className="text-sm">Confidential Consultation</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-1 h-1 bg-accent rounded-full" />
                   <span className="text-sm">Personalized Strategy</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-1 h-1 bg-accent rounded-full" />
                   <span className="text-sm">No Obligation</span>
                 </div>
              </div>
            </div>
            <div className="p-12 md:w-1/2">
              <LeadForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
