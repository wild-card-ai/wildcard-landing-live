import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { CTAButtons } from "./CTAButtons";

const GetStarted = () => {
  return (
    <section className="py-36 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold mb-6">Build <span className="text-primary">Powerful AI Agents</span> Today</h2>
          <p className="text-lg text-muted-foreground">
            Start with our developer package of 12 popular APIs and 2000+ endpoints. Integration typically takes less than a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;