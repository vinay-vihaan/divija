"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Homepage } from "@/lib/types";

interface HeroProps {
  heroSection?: Homepage["acf"]["hero_section"]; // optional
}

export default function Hero({heroSection}:HeroProps) {

  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full text-white overflow-hidden">
      <Carousel
        className="h-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {heroSection?.map((slide, i) => (
            <CarouselItem key={i} className="relative h-[80vh] md:h-[90vh]">
              {/* Animated background image */}
              <AnimatePresence mode="wait">
                {current === i && (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                  >
                    <Image
                      src={slide?.first_image}
                      alt={slide.tittle}
                      fill
                      priority={i === 0}
                      className="object-cover object-[right_center] h-full w-full hidden md:block"
                    />
                      <Image
                      src={slide?.mobile_view}
                      alt={slide.tittle}
                      fill
                      priority={i === 0}
                      className="object-cover object-[right_center] h-full w-full block md:hidden"
                    />
                    {/* <div className="absolute inset-0 bg-black/50" /> */}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animated text content */}
              <div className="container relative z-10 flex flex-col items-start justify-center h-full text-start p-4 mx-auto">
                <AnimatePresence mode="wait">
                  {current === i && (
                    <>
                      <motion.h1
                        key={`title-${i}`}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-5xl font-headline font-bold mb-7 max-w-xl text-shadow-black"
                      >
                        {slide.tittle}
                      </motion.h1>

                      <motion.p
                        key={`desc-${i}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-start text-lg md:text-xl mb-8 max-w-2xl text-shadow-black"
                      >
                        {slide.description}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>

                <Link
                  href="/#projects"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 py-2 px-4 rounded-lg"
                >
                  Explore Projects
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroSection?.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className="relative h-3 w-3 rounded-full overflow-hidden"
            >
              <motion.span
                animate={{
                  scale: current === i ? 1.4 : 1,
                  opacity: current === i ? 1 : 0.4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 bg-white rounded-full"
              />
            </button>
          ))}
        </div>
      </Carousel>
    </section>
  );
}
