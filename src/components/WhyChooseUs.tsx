import { 
  Users, 
  Clock, 
  Award, 
  Headphones,
  TrendingUp,
  Lock
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our seasoned professionals bring decades of combined experience in enterprise solutions.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Agile development practices ensure rapid deployment without compromising quality.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality control processes guarantee reliable, bug-free solutions.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support to address any issues and keep you running smoothly.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business, handling millions of users effortlessly.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance certifications to protect your data.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Remote</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to delivering exceptional value through innovation, 
            reliability, and a customer-first approach.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
