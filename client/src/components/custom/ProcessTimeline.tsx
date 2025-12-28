import { cn } from "@/lib/utils";

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
    <section id="process" className="py-16 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-accent font-medium tracking-widest uppercase text-xs mb-3 block">The Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium">Process Timeline</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line (Mobile/Desktop) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className={cn(
                "relative flex items-center justify-between w-full",
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}>
                {/* Content */}
                <div className="w-full md:w-[46%] pl-14 md:pl-0">
                  <div className={cn(
                    "p-5 rounded-sm bg-white/5 border border-white/10 hover:border-accent/30 transition-colors",
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  )}>
                    <h3 className="text-lg font-display font-medium mb-1">{step.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(212,163,115,0.15)]">
                    <span className="font-display text-lg font-bold text-accent">{step.number}</span>
                  </div>
                </div>

                {/* Empty Space for layout */}
                <div className="hidden md:block md:w-[46%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
