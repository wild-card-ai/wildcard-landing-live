import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CallToAction />
    </main>
  );
};

export default Index;