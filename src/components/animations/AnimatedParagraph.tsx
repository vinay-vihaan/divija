"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

export function AnimatedParagraph({
  children,
  className,
  ...rest
}: HTMLMotionProps<"p">) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx("text-muted-foreground mt-2 max-w-2xl mx-auto", className)}
      {...rest}
    >
      {children}
    </motion.p>
  );
}
