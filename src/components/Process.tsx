import { 
  MessageSquare, 
  Lightbulb, 
  Code2, 
  Rocket,
  RefreshCw
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, challenges, and requirements through in-depth consultations.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Planning",
    description: "Our team creates a comprehensive roadmap, architecture design, and project timeline tailored to your needs.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description: "Using agile methodologies, we build your solution with regular updates and transparent communication.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We handle deployment, testing, and optimization to ensure a smooth and successful launch.",
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "Support",
    description: "Ongoing maintenance, updates, and support to keep your platform running at peak performance.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Development <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that ensures successful project delivery while 
            keeping you informed every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative group text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-card border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <div className="p-4 rounded-xl bg-card border border-border group-hover:border-primary/30 transition-colors duration-300">
                  <span className="text-primary font-display font-bold text-lg mb-2 block">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
