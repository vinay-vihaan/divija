import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://placehold.co/600x600.png"
              alt="A modern office interior"
              data-ai-hint="real estate office"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Divija Developers</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded on the principles of innovation, quality, and integrity, Divija Developers has been a pivotal force in shaping modern skylines. We are committed to developing properties that are not only aesthetically pleasing but also sustainable and built to last.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of seasoned architects, engineers, and designers work in synergy to bring landmark projects to life, ensuring every detail reflects our commitment to excellence. We believe in building more than just structures; we build communities and legacies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
