import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Metrics = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Outperforming Industry Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            title="Integration Time"
            value="10x"
            comparison="Faster Development"
          />
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ title, value, comparison }: { title: string; value: string; comparison: string }) => (
  <Card className="p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
    <h3 className="text-lg font-medium text-muted-foreground mb-4">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-4xl font-bold text-primary">{value}</span>
      <ArrowUpRight className="text-primary h-6 w-6" />
    </div>
    <p className="mt-2 text-sm text-muted-foreground">{comparison}</p>
  </Card>
);

export default Metrics;