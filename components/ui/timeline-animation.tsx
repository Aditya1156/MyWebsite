import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { RefObject } from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  animationNum?: number;
  timelineRef?: RefObject<HTMLDivElement>;
  customVariants?: any;
  className?: string;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  as: Component = "div",
  animationNum = 0,
  customVariants,
  className,
  ...props
}) => {
  const variants = customVariants || {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {Component === "div" ? (
        children
      ) : (
        React.createElement(Component, {}, children)
      )}
    </motion.div>
  );
};
