"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AnimatedHeadingProps extends HTMLMotionProps<"h2"> {
  as?: HeadingLevel;
}

const motionHeadings: Record<HeadingLevel, any> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
};

export default function AnimatedHeading({
  as = "h2",
  className,
  children,
  ...rest
}: AnimatedHeadingProps) {
  // pick the concrete motion heading component
  const MotionTag = motionHeadings[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx("font-headline font-bold", className)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
