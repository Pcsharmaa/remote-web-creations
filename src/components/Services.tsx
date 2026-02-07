import { 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Code, 
  Cloud 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Build stunning, responsive websites that captivate your audience and drive conversions.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Secure, scalable database architecture designed to handle your growing data needs.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security protocols to protect your digital assets and customer data.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and optimized performance for seamless user experiences.",
  },
  {
    icon: Code,
    title: "Custom APIs",
    description: "Tailored API development to integrate with your existing systems and workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Reliable cloud hosting with automatic scaling and 99.9% uptime guarantee.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solutions designed to accelerate your digital transformation 
            and keep you ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 card-hover glow-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
