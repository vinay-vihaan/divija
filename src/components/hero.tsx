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


"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import Link from "next/link"

export default function Hero() {
  const slides = [
    {
      src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-1.png",
      title: "Your Vision, Our Foundation",
      desc: "We specialize in turning ambitious architectural dreams into tangible, luxurious realities. Discover the new standard of living with Divija Developers.",
    },
    {
      src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-2.png",
      title: "Crafting Tomorrow’s Landmarks",
      desc: "Our designs blend innovation and elegance, redefining modern living with premium architecture.",
    },
    {
      src: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-3.png",
      title: "Luxury That Inspires",
      desc: "Every project is built on trust, precision, and a commitment to excellence.",
    },
  ]

  const [current, setCurrent] = React.useState(0)
  const [api, setApi] = React.useState<any>()

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full text-white">
      <Carousel
        className="h-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({ delay: 3000, stopOnInteraction: false }) // auto play every 5s
        ]}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative h-[60vh] md:h-[80vh]">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 text-shadow-lg animate-fade-in-down">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow animate-fade-in-up">
                  {slide.desc}
                </p>
                <Link
                href={"/#projects"}
                  // size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 py-2 px-4 rounded-lg"
                >
                  Explore Projects
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev / Next Buttons */}
        {/* <CarouselPrevious className="left-4 md:-right-4 "/> */}
        {/* <CarouselNext className="right-4" /> */}

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === i ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
