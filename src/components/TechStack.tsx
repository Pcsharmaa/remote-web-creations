const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind", category: "Styling" },
];

const TechStack = () => {
  return (
    <section id="technology" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage the latest technologies to build robust, scalable, and 
            future-proof solutions for your business.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="text-xl font-bold text-primary">{tech.name.charAt(0)}</span>
              </div>
              <h4 className="font-medium text-foreground text-sm mb-1">{tech.name}</h4>
              <span className="text-xs text-muted-foreground">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
