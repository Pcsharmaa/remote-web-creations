import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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

              <Button
                variant="outline"
                size="xl"
                onClick={() => setOpen(true)}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 🎬 Video Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src="/demoVideo/Remote CMS Product Demo.mp4"
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
