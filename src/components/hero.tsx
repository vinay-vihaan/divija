// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   return (
//     <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
//       <Image
//         src="https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-1.png"
//         alt="Modern building exterior"
//         data-ai-hint="modern architecture"
//         fill
//         className="object-cover"
//         priority
//       />
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="relative z-10 text-center p-4 max-w-4xl">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 text-shadow-lg animate-fade-in-down">
//           Your Vision, Our Foundation
//         </h1>
//         <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow animate-fade-in-up">
//           We specialize in turning ambitious architectural dreams into tangible, luxurious realities. Discover the new standard of living with Divija Developers.
//         </p>
//         <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
//           Explore Projects
//         </Button>
//       </div>
//     </section>
//   );
// }


// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import * as React from "react"
// import Link from "next/link"
// import { motion } from "framer-motion";

// export default function Hero() {
//   const slides = [
//     {
//       src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-1.png",
//       title: "Your Vision, Our Foundation",
//       desc: "We specialize in turning ambitious architectural dreams into tangible, luxurious realities. Discover the new standard of living with Divija Developers.",
//     },
//     {
//       src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-2.png",
//       title: "Crafting Tomorrow’s Landmarks",
//       desc: "Our designs blend innovation and elegance, redefining modern living with premium architecture.",
//     },
//     {
//       src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-3.png",
//       title: "Luxury That Inspires",
//       desc: "Every project is built on trust, precision, and a commitment to excellence.",
//     },
//   ]

//   const [current, setCurrent] = React.useState(0)
//   const [api, setApi] = React.useState<any>()

//   React.useEffect(() => {
//     if (!api) return
//     const onSelect = () => {
//       setCurrent(api.selectedScrollSnap())
//     }
//     api.on("select", onSelect)
//     onSelect()
//     return () => {
//       api.off("select", onSelect)
//     }
//   }, [api])

//   return (
//     <section className="relative h-[60vh] md:h-[80vh] w-full text-white">
//       <Carousel
//         className="h-full"
//         opts={{ loop: true }}
//         plugins={[
//           Autoplay({ delay: 3000, stopOnInteraction: false }) // auto play every 5s
//         ]}
//         setApi={setApi}
//       >
//         <CarouselContent className="h-full">
//           {slides.map((slide, i) => (
//             <CarouselItem key={i} className="relative h-[60vh] md:h-[80vh]">
//               <Image
//                 src={slide.src}
//                 alt={slide.title}
//                 fill
//                 priority={i === 0}
//                 className="object-cover"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/50" />

//               {/* Text Content */}
//               <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
//                 {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 text-shadow-lg animate-fade-in-down">
//                  */}
//                 <motion.h1
//                   className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 text-shadow-lg animate-fade-in-down"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: [0, 1, 0, 1] }}   // fade in/out sequence
//                   transition={{
//                     duration: 3,       // total time for one full cycle
//                     ease: "easeInOut",

//                   }}
//                 >
//                   {slide.title}
//                   {/* </h1> */}
//                 </motion.h1>
//                 {/* <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow animate-fade-in-up">
//                   {slide.desc}
//                 </p> */}
//                 {/* Flashing subtitle */}
//                 <motion.p
//                   className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow animate-fade-in-up"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: [0, 1, 0.3, 1] }}
//                   transition={{
//                     duration: 4,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   {slide.desc}
//                 </motion.p>
//                 <Link
//                   href={"/#projects"}
//                   // size="lg"
//                   className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 py-2 px-4 rounded-lg"
//                 >
//                   Explore Projects
//                 </Link>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Prev / Next Buttons */}
//         {/* <CarouselPrevious className="left-4 md:-right-4 "/> */}
//         {/* <CarouselNext className="right-4" /> */}

//         {/* Pagination Dots */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => api?.scrollTo(i)}
//               className={`h-3 w-3 rounded-full transition-all ${current === i ? "bg-white scale-125" : "bg-white/50"
//                 }`}
//             />
//           ))}
//         </div>
//       </Carousel>
//     </section>
//   )
// }


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

export default function Hero() {
  const slides = [
    {
      src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/09/first-banner-final.png",
      title: "Your Vision, Our Foundation",
      desc: "We specialize in turning ambitious architectural dreams into tangible, luxurious realities. Discover the new standard of living with Divija Developers.",
    },
    {
      src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/09/banner15.png",
      title: "Crafting Tomorrow’s Landmarks",
      desc: "Our designs blend innovation and elegance, redefining modern living with premium architecture.",
    },
    {
      src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/09/flipped-banner.png",
      title: "Luxury That Inspires",
      desc: "Every project is built on trust, precision, and a commitment to excellence.",
    },
  ];

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
    <section className="relative h-[60vh] md:h-[80vh] w-full text-white overflow-hidden">
      <Carousel
        className="h-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative h-[60vh] md:h-[80vh]">
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
                      src={slide.src}
                      alt={slide.title}
                      fill
                      priority={i === 0}
                      className="object-cover"
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
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        key={`desc-${i}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-start text-lg md:text-xl mb-8 max-w-2xl text-shadow-black"
                      >
                        {slide.desc}
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
          {slides.map((_, i) => (
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
