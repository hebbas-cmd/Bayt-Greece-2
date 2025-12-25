import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  budget: z.string().min(1, "Please select an investment range."),
});

export function LeadForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      budget: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, this would submit to a backend
    alert("Thank you for your inquiry. One of our advisors will contact you shortly.");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={variant === "compact" ? "sr-only" : ""}>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} className="h-12 bg-white/50 border-gray-200 focus:border-primary/50 transition-colors" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={variant === "compact" ? "sr-only" : ""}>Email</FormLabel>
                <FormControl>
                    <Input placeholder="Email Address" {...field} className="h-12 bg-white/50 border-gray-200 focus:border-primary/50 transition-colors" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel className={variant === "compact" ? "sr-only" : ""}>Phone</FormLabel>
                <FormControl>
                    <Input placeholder="Phone Number" {...field} className="h-12 bg-white/50 border-gray-200 focus:border-primary/50 transition-colors" />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={variant === "compact" ? "sr-only" : ""}>Investment Budget</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 bg-white/50 border-gray-200">
                    <SelectValue placeholder="Select Investment Range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="250k-500k">€250,000 - €500,000</SelectItem>
                  <SelectItem value="500k-1m">€500,000 - €1,000,000</SelectItem>
                  <SelectItem value="1m+">€1,000,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-14 text-lg">
          Request Free Consultation
        </Button>
      </form>
    </Form>
  );
}
