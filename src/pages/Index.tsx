import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TheMindsBehind from "@/components/TheMindsBehind";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <TechStack />
        <Process />
        <WhyChooseUs />
        <TheMindsBehind />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
