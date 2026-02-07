import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Business with{" "}
            <span className="text-gradient">CMS Solutions</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Empower your digital presence with our cutting-edge content
            management systems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Open video in a new tab */}
            <a
              href="https://www.youtube.com/watch?v=dw4TRdptStI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
