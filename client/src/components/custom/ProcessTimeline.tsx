export function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Eligibility Check",
      description: "Initial consultation to verify eligibility and select the best investment route."
    },
    {
      number: "02",
      title: "Property Selection",
      description: "View properties remotely or in-person with our real estate partners."
    },
    {
      number: "03",
      title: "Legal Due Diligence",
      description: "Thorough legal checks are performed to ensure a secure investment and application preparation."
    },
    {
      number: "04",
      title: "Investment",
      description: "Execution of the investment and submission of the Golden Visa application."
    },
    {
      number: "05",
      title: "Residency",
      description: "Receive your Blue Paper immediately, followed by the Residence Card."
    }
  ];

  return (
    <section id="process" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium">Application Process</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="w-16 h-16 rounded-full bg-primary border border-white/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-accent group-hover:scale-110">
                  <span className="font-display text-xl font-bold text-accent">{step.number}</span>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-white/10 pl-4 md:border-0 md:pl-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
