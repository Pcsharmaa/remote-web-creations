import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import ctaImage from "@/assets/cta-image.jpg";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${ctaImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                  Get Started Today
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Transform Your{" "}
                  <span className="text-gradient">Business?</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Let's discuss how our CMS solutions can help you achieve your 
                  digital goals. Schedule a free consultation with our experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="xl">
                    View Case Studies
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
                  <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                    Contact Us Directly
                  </h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@remote.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>hello@remote.com</span>
                    </a>
                    <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span>+1 (234) 567-890</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
