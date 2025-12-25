import { ShieldCheck, Award, Handshake, Eye } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Partners",
      description: "We work exclusively with top-tier legal firms and reputable developers."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Over 10 years of experience in the investment migration industry."
    },
    {
      icon: Handshake,
      title: "End-to-End Support",
      description: "From property selection to permit issuance and renewals."
    },
    {
      icon: Eye,
      title: "Total Transparency",
      description: "Clear fee structures with no hidden costs or surprises."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our Difference</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Why Choose Aegean Residency?</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Navigating a foreign real estate market and legal system requires a partner you can trust. We are dedicated to protecting your interests at every step.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
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
