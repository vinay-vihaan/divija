import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const showcaseProjects = [
  {
    name: "Pinnacle Residences",
    phase: "Phase 3: Finishing",
    image: "https://placehold.co/600x400.png",
    hint: "modern condo"
  },
  {
    name: "Elysian Fields",
    phase: "Phase 1: Foundation",
    image: "https://placehold.co/600x400.png",
    hint: "suburban homes"
  },
  {
    name: "Nexus Business Hub",
    phase: "Phase 2: Structure",
    image: "https://placehold.co/600x400.png",
    hint: "office building"
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Project Showcase</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Witness the evolution of our signature properties from blueprint to reality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {showcaseProjects.map((project, index) => (
            <Card key={index} className="bg-card/10 border-border/20 text-background">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.name}
                    data-ai-hint={project.hint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">{project.phase}</Badge>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
