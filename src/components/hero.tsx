import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      <Image
        src="https://divija.vihaandigitals.com/wp-content/uploads/2025/08/ananda-1.png"
        alt="Modern building exterior"
        data-ai-hint="modern architecture"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 text-shadow-lg animate-fade-in-down">
          Your Vision, Our Foundation
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow animate-fade-in-up">
          We specialize in turning ambitious architectural dreams into tangible, luxurious realities. Discover the new standard of living with Divija Developers.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
          Explore Projects
        </Button>
      </div>
    </section>
  );
}
