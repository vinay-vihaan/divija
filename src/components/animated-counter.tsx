"use client";

import { useState, useEffect } from 'react';

type AnimatedCounterProps = {
  end: number;
  duration?: number;
};

export default function AnimatedCounter({ end, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const range = endValue - start;
    const increment = endValue > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
      start += increment;
      if (Math.abs(start - endValue) < Math.abs(increment)) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
      if (start === endValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}
