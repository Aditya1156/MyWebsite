"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Code, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for small projects and landing pages",
    price: 2000,
    yearlyPrice: 18000,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Single Page Website", icon: <Briefcase size={20} /> },
      { text: "Responsive Design", icon: <Layers size={20} /> },
      { text: "Basic SEO Setup", icon: <Database size={20} /> },
    ],
    includes: [
      "Package includes:",
      "Modern landing page design",
      "Mobile & tablet responsive",
      "Contact form",
      "Social media integration",
      "2 weeks support",
      "Fast delivery (3-5 days)",
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for portfolios and small business websites",
    price: 5000,
    yearlyPrice: 45000,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Multi-Page Website", icon: <Code size={20} /> },
      { text: "CMS Integration", icon: <Database size={20} /> },
      { text: "Advanced SEO", icon: <Layers size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Up to 10 pages",
      "Content Management System",
      "Google Analytics setup",
      "Email integration",
      "1 month support",
      "Performance optimization",
      "Image optimization",
    ],
  },
  {
    name: "Premium",
    description:
      "Complete solution with backend and advanced features",
    price: 10000,
    yearlyPrice: 90000,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Full Stack Application", icon: <Code size={20} /> },
      { text: "Database & Backend", icon: <Database size={20} /> },
      { text: "Custom Features", icon: <Layers size={20} /> },
    ],
    includes: [
      "Everything in Professional, plus:",
      "Node.js/React backend",
      "MongoDB database",
      "User authentication",
      "API development",
      "Admin panel",
      "2 months support",
      "Unlimited revisions",
      "Cloud deployment",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-white p-1 kp-shadow-ambient">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0"
              ? "text-white"
              : "text-charcoal/70 hover:text-charcoal",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-full kp-gradient-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">One-time Payment</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1"
              ? "text-white"
              : "text-charcoal/70 hover:text-charcoal",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-full kp-gradient-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly Maintenance
            <span className="rounded-full bg-secondary/15 text-secondary px-2 py-0.5 text-xs font-semibold">
              Save 10%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 py-20 min-h-screen max-w-7xl mx-auto relative bg-surface"
      ref={pricingRef}
    >
      <article className="text-left mb-6 space-y-4 max-w-2xl">
        <h2 className="md:text-6xl text-4xl capitalize font-medium text-charcoal mb-4">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-start"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Transparent Pricing for Your Project
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-base text-sm text-charcoal/70 w-[80%]"
        >
          Affordable web development solutions tailored to your needs. 
          From landing pages to full-stack applications.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 gap-4 py-6">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative rounded-[2rem] kp-shadow-ambient-lg border-0 ${
                plan.popular
                  ? "bg-surface-highest"
                  : "bg-white"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="xl:text-3xl md:text-2xl text-3xl font-semibold text-charcoal mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div className="">
                      <span className="kp-gradient-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <p className="xl:text-sm md:text-xs text-sm text-charcoal/70 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-charcoal">
                    ₹
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-charcoal/70 ml-1">
                    {isYearly ? "/year" : ""}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <a
                  href="mailto:adicodes@outlook.com?subject=Project Inquiry - ${plan.name} Plan"
                  className={`block w-full mb-4 p-4 text-center text-xl rounded-full ${
                    plan.popular
                      ? "kp-gradient-primary text-white kp-shadow-ambient"
                      : "bg-secondary text-white"
                  } hover:scale-105 hover:brightness-110 transition-all duration-300`}
                >
                  {plan.buttonText}
                </a>
                <a
                  href={`https://wa.me/919108453756?text=Hi! I'm interested in the ${plan.name} Plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mb-6 p-4 text-center text-xl rounded-full bg-white text-charcoal hover:bg-surface-highest hover:scale-105 transition-all duration-300 kp-shadow-ambient"
                >
                  💬 WhatsApp
                </a>

                <div className="space-y-3 pt-4 mt-2 -mx-6 px-6 bg-surface-low/50 rounded-b-[2rem]">
                  <h2 className="text-xl font-semibold uppercase text-charcoal mb-3">
                    Features
                  </h2>
                  <h4 className="font-medium text-base text-charcoal mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 kp-gradient-primary rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-white" />
                        </span>
                        <span className="text-sm text-charcoal/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
