import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6"> <span className="text-primary">Wildcard</span> in Action</h2>
          <p className="text-lg text-muted-foreground">
            Build integrations faster. Use more tools with fewer tokens. Ready to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20">
            <h3 className="text-2xl font-semibold mb-6 text-destructive">Native Tool Calling</h3>
            <div className="space-y-4">
              {traditionalApproach.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-primary/10 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Wildcard</h3>
            <div className="space-y-4">
              {wildcardApproach.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const traditionalApproach = [
  "Define tools manually",
  "Tedious prompt engineering of tool definitions",
  "Degraded performance with >5 tools per agent",
  "Orchestrator agent complexity increases with new tools",
  "Tool definitions count against token limits",
  "Setup authentication flow individually",
  "Manually update tool definition when external API changes",

];

const wildcardApproach = [
  "Simple integration with Wildcard's API or SDK",
  "Optimized tool definitions out of the box",
  "Integrate thousands of tools simultaneously per agent",
  "Minimize orchestration complexity",
  "Only pay tokens for tools you use",
  "Unified authentication system with self-hosted option",
  "Sync tool definitions automatically with API changes",
];

export default HowItWorks;