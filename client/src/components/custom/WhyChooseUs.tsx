import { ShieldCheck, Award, Handshake, Eye } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Vetted Partners",
      description: "I connect you with top-tier legal firms and reputable developers in Greece."
    },
    {
      icon: Award,
      title: "Trusted Advisor",
      description: "Dedicated to providing personalized guidance and strategic insight for your property investment."
    },
    {
      icon: Handshake,
      title: "Strategic Advisory",
      description: "Guidance through property selection, investment strategy, and the path to residency."
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Personal Advisory</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Personal Guidance for MENA Families</h2>
            <p className="text-xl text-primary font-medium mb-6">Hebba Soliman <span className="text-accent ml-2">|</span> Principal Advisor</p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              I work directly with families seeking permanent European residency through strategic real estate investment in Greece. Every case is handled personally, with clear advice, discretion, and a long-term view of what’s best for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
    </section>
  );
}
