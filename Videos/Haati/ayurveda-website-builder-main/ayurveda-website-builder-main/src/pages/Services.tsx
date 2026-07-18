import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import {
  Stethoscope, Leaf, HeartPulse, Apple, Brain, Weight,
  Sparkles, Bone, Activity, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Ayurvedic Consultation",
    desc: "A thorough evaluation of your body constitution (Prakriti), current imbalances (Vikriti), and health history to create a personalized treatment plan.",
    benefits: ["Personalized health assessment", "Dosha identification", "Custom treatment plan", "Ongoing guidance"],
  },
  {
    icon: Leaf,
    title: "Panchakarma Therapy",
    desc: "The ultimate Ayurvedic detoxification program consisting of five therapeutic procedures that cleanse and rejuvenate the body at the deepest level.",
    benefits: ["Deep detoxification", "Immune system boost", "Mental clarity", "Rejuvenation"],
  },
  {
    icon: HeartPulse,
    title: "Herbal Medicine Prescription",
    desc: "Customized herbal formulations using time-tested Ayurvedic herbs, prepared specifically for your unique condition and body type.",
    benefits: ["Natural ingredients", "No side effects", "Targeted healing", "Sustainable wellness"],
  },
  {
    icon: Apple,
    title: "Diet & Lifestyle Counseling",
    desc: "Personalized dietary plans and daily routine (Dinacharya) recommendations aligned with your Dosha type for optimal health.",
    benefits: ["Dosha-specific diet", "Seasonal guidance", "Routine optimization", "Long-term health"],
  },
  {
    icon: Brain,
    title: "Stress & Anxiety Management",
    desc: "Holistic therapies including Shirodhara, meditation, and herbal supplements to calm the mind and restore emotional balance.",
    benefits: ["Mental peace", "Better sleep", "Emotional balance", "Natural approach"],
  },
  {
    icon: Weight,
    title: "Weight Management",
    desc: "A holistic weight management program combining Ayurvedic therapies, dietary modifications, and lifestyle changes for sustainable results.",
    benefits: ["Metabolism boost", "Healthy digestion", "Sustainable results", "Body-type specific"],
  },
  {
    icon: Sparkles,
    title: "Skin & Hair Treatment",
    desc: "Natural Ayurvedic treatments for skin conditions like eczema, acne, and hair issues using herbal remedies and specialized therapies.",
    benefits: ["Natural glow", "Hair nourishment", "Chemical-free", "Root cause treatment"],
  },
  {
    icon: Bone,
    title: "Joint & Arthritis Treatment",
    desc: "Specialized Ayurvedic therapies including Janu Basti, herbal oil massages, and internal medicines for joint pain and arthritis relief.",
    benefits: ["Pain relief", "Improved mobility", "Reduced inflammation", "Strengthened joints"],
  },
  {
    icon: Activity,
    title: "Digestive Disorders Treatment",
    desc: "Comprehensive treatment for IBS, acidity, constipation, and other digestive issues through Ayurvedic medicine and dietary corrections.",
    benefits: ["Improved digestion", "Gut health restoration", "Appetite regulation", "Toxin elimination"],
  },
];

const Services = () => (
  <>
    <title>Ayurvedic Services | Vaidyam Hospital Wellness Center</title>
    <meta name="description" content="Explore our comprehensive Ayurvedic services including Panchakarma, herbal medicine, diet counseling, and more at Vaidyam Hospital Wellness Center." />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="overflow-hidden hover:shadow-elevated transition-shadow bg-background">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.benefits.map((b) => (
                          <span key={b} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button asChild>
                        <Link to="/consultation">Book Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
