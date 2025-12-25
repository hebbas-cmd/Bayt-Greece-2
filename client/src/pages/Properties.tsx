import { Navigation } from "@/components/custom/Navigation";
import { Footer } from "@/components/custom/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Properties() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <div className="pt-32 pb-24 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 text-primary">Exclusive Properties</h1>
        <p className="text-lg text-muted-foreground mb-12">
          This page is currently under development. Browse our curated selection soon.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
