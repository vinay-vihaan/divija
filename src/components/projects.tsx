import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    name: "Azure Heights",
    image: "https://placehold.co/600x400.png",
    hint: "skyscraper building"
  },
  {
    name: "Veridian Villas",
    image: "https://placehold.co/600x400.png",
    hint: "luxury villa"
  },
  {
    name: "The Grand Canal",
    image: "https://placehold.co/600x400.png",
    hint: "waterfront property"
  },
    {
    name: "Solstice Towers",
    image: "https://placehold.co/600x400.png",
    hint: "modern apartment"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ongoing Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A glimpse into the future we are building. Explore our current portfolio of groundbreaking projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    data-ai-hint={project.hint}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
