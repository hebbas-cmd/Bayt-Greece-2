import { ShieldCheck, Award, Handshake, Eye } from "lucide-react";
import advisorImg from "@assets/generated_images/professional_and_warm_portrait_of_hebba_soliman.png";

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Direct Access",
      description: "You work directly with me. No junior associates—just experienced, personal guidance for your family's future."
    },
    {
      icon: Award,
      title: "MENA Expertise",
      description: "Based in Egypt, I deeply understand the specific needs and aspirations of families across the MENA region."
    },
    {
      icon: Handshake,
      title: "Discreet Handling",
      description: "Every case is handled with the highest level of discretion and a focus on long-term security."
    },
    {
      icon: Eye,
      title: "Transparent Advice",
      description: "I provide clear, honest advice on what's truly best for your family's residency goals."
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
                alt="Hebba Soliman" 
                className="w-full max-w-md rounded-sm shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 text-white hidden md:block">
                <p className="font-display text-2xl mb-1">Hebba Soliman</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Principal Advisor</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Personal Advisory</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Personal Guidance for MENA Families</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
              I work directly with families seeking permanent European residency through strategic real estate investment in Greece. Every case is handled personally, with clear advice, discretion, and a long-term view of what’s best for your family.
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
