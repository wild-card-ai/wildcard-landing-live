import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Rocket } from "lucide-react";

export const CTAButtons = () => {
  return (
    <>
      <Button size="xl" variant="outline" className="hover:bg-primary/30 transition-colors border-primary/50">
        <div className="flex items-center gap-4">
          Get Wildcard
          <ArrowRight className="w-5 h-5" />
        </div>
      </Button>
      <Button 
        size="xl" 
        variant="outline" 
        className="hover:bg-primary/30 transition-colors border-primary/50"
        onClick={() => window.location.href = "https://cal.com/kaushik-wildcard/30min"}
      >
        <div className="flex items-center gap-4">
          Book a Call
          <Calendar className="h-5 w-5" />
        </div>
      </Button>
    </>
);
};