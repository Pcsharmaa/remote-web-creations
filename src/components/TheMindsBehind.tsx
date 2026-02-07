import { FC, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Prafull Sharma",
    role: "Founder & CEO",
    description:
      "Leads the vision and strategy of the company, driving innovation and long-term growth.",
    image: "/images/Prafull Sharma.jpg",
  },
  {
    name: "Vipin Chandra",
    role: "Project Head",
    description:
      "Oversees project planning, execution, and delivery while ensuring team alignment and quality outcomes.",
    image: "/images/Vipin Chandra.jpg",
  },
  {
    name: "Rakesh Ranjan",
    role: "Lead Software Engineer",
    description:
      "Builds and maintains scalable web applications with a focus on performance and clean code.",
    image: "/images/Rakesh Ranjan.jpg",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    description:
      "Creates intuitive digital experiences with a strong focus on usability and aesthetics.",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Kunal Patel",
    role: "DevOps Engineer",
    description:
      "Automates CI/CD pipelines and ensures scalable, reliable infrastructure.",
    image: "https://i.pravatar.cc/300?img=56",
  },
  {
    name: "Sneha Kapoor",
    role: "QA Engineer",
    description:
      "Ensures product quality through automation, testing strategies, and performance validation.",
    image: "https://i.pravatar.cc/300?img=24",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TheMindsBehind: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.4;

    const interval = setInterval(() => {
      scrollAmount += speed;
      container.scrollLeft = scrollAmount;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our People
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Minds <span className="text-gradient">Behind</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A passionate group of engineers, designers, and innovators building
            meaningful digital experiences.
          </p>
        </motion.div>

        {/* Animated Auto-Scroll Cards */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 lg:gap-8
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-6
            [&::-webkit-scrollbar]:hidden
          "
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                snap-start
                flex-shrink-0
                w-full
                sm:w-[80%]
                lg:w-1/3
                p-6 lg:p-8
                rounded-2xl
                bg-card
                border border-border
                hover:border-primary/50
                card-hover
                text-center
              "
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-4 flex justify-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
                />
              </motion.div>

              <h3 className="font-display text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Join Our Team
          </Button>
        </div>

      </div>
    </section>
  );
};

export default TheMindsBehind;
