const Integrations = () => {
  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Supported Integrations</h2>
          <p className="text-muted-foreground">
            Connect with popular frameworks and APIs without compromising performance
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder for integration logos - replace with actual logos */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-card rounded-lg flex items-center justify-center p-8"
            >
              <div className="text-muted-foreground">Logo {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;