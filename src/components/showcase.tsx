import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";
import Link from "next/link";

// const showcaseProjects = [
//   {
//     name: "Pinnacle Residences",
//     phase: "Phase 3: Finishing",
//     image: "https://placehold.co/600x400.png",
//     hint: "modern condo"
//   },
//   {
//     name: "Elysian Fields",
//     phase: "Phase 1: Foundation",
//     image: "https://placehold.co/600x400.png",
//     hint: "suburban homes"
//   },
//   {
//     name: "Nexus Business Hub",
//     phase: "Phase 2: Structure",
//     image: "https://placehold.co/600x400.png",
//     hint: "office building"
//   },
// ];

type ProjectsProps = {
  projects: Project[];
};

export default function Showcase({ projects }: ProjectsProps) {
  return (
    <section id="showcase" className="py-16 md:py-24 bg-[#181826] text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Ongoing Projects</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Witness the evolution of our signature properties from blueprint to reality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index} className="group">
              <div
                key={index}
                className="relative w-full min-h-[350px] overflow-hidden flex flex-col items-center justify-center text-center group"
              >
                {/* Background Image */}
                <img
                  src={project.acf?.gallery_images?.[0]?.add_image || "/placeholder.png"}
                  alt={project.title?.rendered}
                  className="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <h2 className="relative text-white text-4xl font-semibold p-4 transition-transform duration-500 group-hover:scale-110">
                  {project.title?.rendered}
                </h2>
                  {/* {project.acf?.sub_title && (
          <p className="text-white/90 text-lg mt-2 transition-opacity duration-500 group-hover:opacity-100 opacity-80">
            {project.acf.sub_title}
          </p>
        )} */}
                <p className="text-white/90 text-lg mt-2 transition-opacity transition-transform duration-500 group-hover:scale-110  opacity-90">{project.acf?.sub_title}</p>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}
