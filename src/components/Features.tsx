import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Fast Development",
    description: "Quick iterations with hot reload and modern tooling",
    icon: Zap,
  },
  {
    title: "Beautiful Design",
    description: "Clean and modern UI with attention to detail",
    icon: Palette,
  },
  {
    title: "Best Practices",
    description: "Following React and TypeScript best practices",
    icon: Code2,
  },
];

export const Features = () => {
  return (
    <div className="py-24 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};