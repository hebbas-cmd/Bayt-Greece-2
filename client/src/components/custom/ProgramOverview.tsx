import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Euro, IdCard, Calendar } from "lucide-react";

export function ProgramOverview() {
  return (
    <section id="overview" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-medium mb-6">Greece Golden Visa</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            The Greece Golden Visa Program is considered one of the most affordable residence-by-investment programs that provides access to Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pt-8 px-8 pb-4">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <Euro className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl font-medium">Investment</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-3xl font-display font-medium text-accent mb-2">€250,000</p>
              <p className="text-muted-foreground">Minimum real estate investment in selected areas (or €500k/€800k in prime locations).</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pt-8 px-8 pb-4">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <IdCard className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl font-medium">Residency</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-3xl font-display font-medium text-accent mb-2">5 Years</p>
              <p className="text-muted-foreground">Renewable indefinitely as long as you maintain the investment. Path to citizenship after 7 years.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pt-8 px-8 pb-4">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl font-medium">Processing</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-3xl font-display font-medium text-accent mb-2">3-4 Months</p>
              <p className="text-muted-foreground">Fast track processing time from submission to residence permit issuance.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
