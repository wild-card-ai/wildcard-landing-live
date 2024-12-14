import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="hero-gradient min-h-[70vh] flex items-center justify-center text-white px-4">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Our Test Project
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          A beautiful and functional React application built with modern tools
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};