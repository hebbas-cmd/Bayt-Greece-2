import { ShieldCheck, Award, Handshake, Eye } from "lucide-react";
import advisorImg from "@assets/generated_images/professional_and_warm_portrait_of_a_senior_consultant.png";

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Direct Access",
      description: "You deal directly with me. No middlemen, no junior associates—just experienced, personal guidance."
    },
    {
      icon: Award,
      title: "15 Years in Greece",
      description: "A decade and a half of navigating the Greek property market and residency laws."
    },
    {
      icon: Handshake,
      title: "Local Relations",
      description: "Strong personal ties with local authorities and the best legal minds in Athens."
    },
    {
      icon: Eye,
      title: "Transparent Advice",
      description: "I'll tell you what the brochures won't. Honesty is the foundation of my practice."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative inline-block mb-8">
              <img 
                src={advisorImg} 
                alt="Nikolas Papadakis" 
                className="w-full max-w-md rounded-sm shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 text-white hidden md:block">
                <p className="font-display text-2xl mb-1">Nikolas Papadakis</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Principal Advisor</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Personal Advisory</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">A Personal Path to Your European Future</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
              The Golden Visa process is more than a transaction—it's a life transition. I provide a boutique service where your investment is handled with the personal care and attention to detail it deserves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-sm bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
