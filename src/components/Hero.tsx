import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import NetworkVisualization from "./NetworkVisualization";
import { Calendar } from "lucide-react";
import { CTAButtons } from "./CTAButtons";
import ScrollingBanner from "./ScrollingBanner";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <NetworkVisualization />
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center mb-12 lg:mt-[30vh]">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-8">
              Intelligent <span className="text-primary">Tool Selection API</span> for AI Agents
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Turn any REST API into an AI-ready endpoint.
              <br />
              Help your AI agents <span className="text-primary font-bold">take the right action</span> across 100s of integrations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButtons />
            </div>
          </div>
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                title="Tool Selection Accuracy"
                value="95%"
                comparison="vs 60% GPT-4"
              />
              <MetricCard
                title="API Coverage"
                value="2000+"
                comparison="Endpoints Supported"
              />
              <MetricCard
                title="Cost Savings"
                value="70%"
                comparison="Lower Token Usage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ title, value, comparison }: { title: string; value: string; comparison: string }) => (
  <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 text-center">
    <h3 className="text-lg font-medium text-muted-foreground mb-4">{title}</h3>
    <div className="flex items-baseline justify-center gap-2">
      <span className="text-4xl font-bold text-primary">{value}</span>
      <ArrowUpRight className="text-primary h-6 w-6" />
    </div>
    <p className="mt-2 text-sm text-muted-foreground">{comparison}</p>
  </Card>
);

export default Hero;