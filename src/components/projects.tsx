import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Project } from "@/lib/types";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {

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
            <Link href={`/projects/${project.slug}`} key={index} className="group">
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.acf.gallery_images[0]?.add_image || "https://placehold.co/600x400.png"}
                      alt={project.title.rendered}
                      data-ai-hint="skyscraper building"
                      fill
                      className="object-fit"
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title.rendered}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Link from "next/link";
// import { Project } from "@/lib/types";

// type ProjectsProps = {
//   projects: Project[];
// };

// export default function Projects({ projects }: ProjectsProps) {
//   console.log("projects", projects)
//   return (
//     <section id="projects" className="py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-headline font-bold">
//             Ongoing Projects
//           </h2>
//           <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
//             A glimpse into the future we are building. Explore our current portfolio of groundbreaking projects.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {projects.map((project, index) => {
//             // Try to get image from embedded media (featured image / attachments)
//             const embeddedImage =
//               project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//               project._embedded?.["wp:attachment"]?.[0]?.source_url;

//             // fallback: just placeholder if no image
//             const imageUrl = embeddedImage || "https://placehold.co/600x400.png";

//             return (
//               <Link
//                 href={`/projects/${project.slug}`}
//                 key={index}
//                 className="group"
//               >
//                 <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full">
//                   <CardContent className="p-0">
//                     <div className="relative aspect-[4/3]">
//                       <Image
//                         src={imageUrl}
//                         alt={project.title.rendered}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </CardContent>
//                   <CardHeader>
//                     <CardTitle className="font-headline text-xl">
//                       {project.title.rendered}
//                     </CardTitle>
//                   </CardHeader>
//                 </Card>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
