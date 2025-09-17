"use client";

import { useState, useEffect, useRef } from "react";
import { Building, Milestone, Smile } from "lucide-react";
import AnimatedCounter from "./animated-counter";

const stats = [
  {
    icon: <Building className="h-10 w-10 text-accent" />,
    value: 75,
    label: "Projects Completed"
  },
  {
    icon: <Milestone className="h-10 w-10 text-accent" />,
    value: 20,
    label: "Years in Business"
  },
  {
    icon: <Smile className="h-10 w-10 text-accent" />,
    value: 1200,
    label: "Families Housed"
  }
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <p className="text-4xl md:text-5xl font-bold font-headline text-primary mt-4">
                {isVisible ? <AnimatedCounter end={stat.value} /> : 0}+
              </p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
