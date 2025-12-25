import { Plane, Users, Home, TrendingUp, Sun, Landmark } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Plane,
      title: "Visa-Free Travel",
      description: "Travel freely within the Schengen Zone without any additional visa requirements."
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Include your spouse, children under 21, and parents in the same application."
    },
    {
      icon: Home,
      title: "No Minimum Stay",
      description: "There is no requirement to live in Greece to maintain the residence permit."
    },
    {
      icon: TrendingUp,
      title: "Investment Potential",
      description: "Benefit from high rental yields and capital appreciation in Greece's booming market."
    },
    {
      icon: Sun,
      title: "Quality of Life",
      description: "Access to healthcare and education in a safe, sunny, and culturally rich European country."
    },
    {
      icon: Landmark,
      title: "Path to Citizenship",
      description: "Eligible to apply for Greek citizenship after 7 years of residence."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Key Advantages</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight">
              Unlock European Freedom & Lifestyle
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
              The Greece Golden Visa offers more than just residency; it provides a gateway to the European lifestyle, security for your family, and a solid return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-3">
                <benefit.icon className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-xl font-display font-medium">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
