import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <div className="py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join us and start building amazing applications today
        </p>
        <div className="space-x-4">
          <Button size="lg">Sign Up Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};