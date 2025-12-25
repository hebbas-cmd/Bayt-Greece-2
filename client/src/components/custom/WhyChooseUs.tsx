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
      title: "15 Years in Greece",
      description: "A decade and a half of experience navigating the Greek property market."
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
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Personal Advisory</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Personal Guidance for MENA Families</h2>
            <p className="text-xl text-primary font-medium mb-6">Hebba Soliman <span className="text-accent ml-2">|</span> Principal Advisor</p>
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

          <div className="lg:w-1/2 bg-secondary/30 p-12 rounded-sm border border-border/50">
            <h3 className="text-2xl font-display font-medium mb-6 text-primary italic">"The Golden Visa is more than a residency permit—it is a foundation for your family's future security in Europe. My role is to ensure that foundation is solid, strategic, and lasting."</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent" />
              <p className="text-primary font-medium uppercase tracking-widest text-sm">Hebba Soliman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
