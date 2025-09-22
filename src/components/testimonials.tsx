"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Homepage } from "@/lib/types";

interface Testimonials {
  testimonials?: Homepage["acf"]["testimonials"]; // optional
}

export default function Testimonials({testimonials}:Testimonials) {
  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 bg-secondary"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/testimonial-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            What Our Clients Say
          </h2>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience
            with Divija Developers.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // 👇 Add autoplay plugin
          plugins={[
            Autoplay({
              delay: 4000, // 4s between slides
              stopOnInteraction: false, // keep playing after interaction
            }),
          ]}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {testimonials?.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col bg-white backdrop-blur-sm shadow-xl pt-5">
                    <CardContent className="flex-grow flex flex-col items-center text-center p-6">
                      {/* <Avatar className="w-20 h-20 mb-4">
                        <AvatarImage
                          src={t?.profile_image}
                          alt={t.name}
                        
                        />
                        <AvatarFallback>
                          {t?.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar> */}
                      <p className="text-muted-foreground italic mb-4">
                        "{t.quote}"
                      </p>
                      <p className="font-bold font-headline">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.desigantion}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:-left-3 " />
          <CarouselNext className="md:-right-18" />
        </Carousel>
      </div>
    </section>
  );
}
