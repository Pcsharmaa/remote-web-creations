import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Banknote,
  Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Real Estate & Property",
    description: "Manage listings, virtual tours, and client relationships with our specialized property management CMS.",
    features: ["Property Listings", "Virtual Tours", "Lead Management"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "Powerful e-commerce solutions with inventory management, payment processing, and analytics.",
    features: ["Product Catalog", "Payment Gateway", "Order Tracking"],
  },
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description: "Create engaging learning experiences with course management, assessments, and progress tracking.",
    features: ["Course Builder", "Student Portal", "Certification"],
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    description: "HIPAA-compliant solutions for patient management, scheduling, and medical records.",
    features: ["Patient Records", "Appointment Booking", "Telehealth"],
  },
  {
    icon: Banknote,
    title: "Finance & Banking",
    description: "Secure financial platforms with compliance management and real-time analytics.",
    features: ["Secure Transactions", "Compliance", "Reporting"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Streamline production with inventory tracking, supply chain management, and quality control.",
    features: ["Inventory", "Supply Chain", "Quality Control"],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Industry Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Industry-Specific <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailored CMS solutions designed to meet the unique challenges and 
            requirements of your industry.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {solution.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore All Industries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
