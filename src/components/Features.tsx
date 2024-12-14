import { Code, Users, Plug, Database, Zap, Shield, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <div id="features" className="pt-32 pb-10 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Go Beyond Standard Function Calling Limits
          </h2>
          <p className="text-xl text-muted-foreground">
            LLM APIs struggle to select the right tools beyond 5 functions. 
            <br />
            <span className="text-primary font-bold">Wildcard eliminates this constraint. </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 border border-primary/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <Zap />,
    title: "Unlimited Tool Integration",
    description: "Add thousands of API endpoints to a single agent with high accuracy. Reduce agent orchestration."
  },
  {
    icon: <Code />,
    title: "Framework Agnostic",
    description: "Works with LangGraph, CrewAI, AutoGen, or your custom framework. No architecture changes needed."
  },
  {
    icon: <Shield />,
    title: "Local Function Execution",
    description: "Execute functions on your infrastructure, ensuring customer data never leaves your servers."
  },
  {
    icon: <Lock />,
    title: "Flexible Authentication",
    description: "Choose between managed cloud authentication or self-hosted options for complete control."
  },
  {
    icon: <Database />,
    title: "Automatic Updates",
    description: "Stay current with API changes automatically. No manual maintenance required."
  },
  {
    icon: <Plug />,
    title: "Simple Integration",
    description: "Start with our developer package of 12 popular APIs and 2000+ endpoints, ready to use."
  }
];

export default Features;