// "use client"
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Project } from "@/lib/types";
// import Link from "next/link";
// import { motion } from "framer-motion";

// type ProjectsProps = {
//   projects: Project[];
// };

// export default function Showcase({ projects }: ProjectsProps) {
//   return (
//     // <section id="projects" className="py-16 md:py-24 bg-[#181826] text-background">
//     //   <div className="container mx-auto px-4">
//     //     <div className="text-center mb-20">
//     //       <h2 className="text-3xl md:text-4xl font-headline font-bold">Ongoing Projects</h2>
//     //       <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
//     //         Witness the evolution of our signature properties from blueprint to reality.
//     //       </p>
//     //     </div>
//     //     <div className="grid md:grid-cols-3 gap-8">
//     //       {projects.map((project, index) => (
//     //         <Link href={`/projects/${project.slug}`} key={index} className="group">
//     //           <div
//     //             key={index}
//     //             className="relative w-full min-h-[350px] overflow-hidden flex flex-col items-center justify-center text-center group"
//     //           >
//     //             {/* Background Image */}
//     //             <img
//     //               src={project.acf?.gallery_images?.[0]?.add_image || "/placeholder.png"}
//     //               alt={project.title?.rendered}
//     //               className="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
//     //             />

//     //             {/* Dark overlay */}
//     //             <div className="absolute inset-0 bg-black/40"></div>

//     //             {/* Content */}
//     //             <h2 className="relative text-white text-4xl font-semibold p-4 transition-transform duration-500 group-hover:scale-110">
//     //               {project.title?.rendered}
//     //             </h2>
//     //             <p className="text-white/90 text-lg mt-2 transition-opacity transition-transform duration-500 group-hover:scale-110  opacity-90">{project.acf?.sub_title}</p>
//     //           </div>
//     //         </Link>

//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>
//          <section
//       id="projects"
//       // ---- Parallax background ----
//       className="
//         relative
//         py-16 md:py-24
//         text-background
//         bg-fixed      /* <— key line for parallax */
//         bg-cover
//         bg-center
//         bg-no-repeat
//       "
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(4, 4, 44, 0.8), rgba(4, 4, 44, 0.8)), url('/bg.png')",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-20">
//           <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//                   // animate only the first time in view
//               className="text-3xl md:text-4xl font-headline font-bold mb-4"
//             >
//           {/* <h2 className="text-3xl md:text-4xl font-headline font-bold"> */}
//             Ongoing Projects
//           {/* </h2> */}
//           </motion.h2>
//               <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              
//             >
//           <p className="text-[#cac5c5ff] mt-2 max-w-2xl mx-auto">
//             Witness the evolution of our signature properties from blueprint to
//             reality.
//           </p>
//           </motion.div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <Link
//               href={`/projects/${project.slug}`}
//               key={index}
//               className="group"
//             >
//               <div className="relative w-full min-h-[350px] overflow-hidden flex flex-col items-center justify-center text-center group">
//                 {/* Card background */}
//                 <img
//                   src={
//                     project.acf?.gallery_images?.[0]?.add_image ||
//                     "/placeholder.png"
//                   }
//                   alt={project.title?.rendered}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40" />

//                 <h2 className="relative text-white text-4xl font-semibold p-4 transition-transform duration-500 group-hover:scale-110">
//                   {project.title?.rendered}
//                 </h2>
//                 <p className="relative text-white/90 text-lg mt-2 transition-transform duration-500 group-hover:scale-110 opacity-90">
//                   {project.acf?.sub_title}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

type ProjectsProps = {
  projects: Project[];
};

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Showcase({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="
        relative
        py-16 md:py-24
        text-background
        bg-fixed
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 4, 44, 0.8), rgba(4, 4, 44, 0.8)), url('/bg.png')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-headline font-bold mb-4"
          >
            Ongoing Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-[#cac5c5ff] mt-2 max-w-2xl mx-auto">
              Witness the evolution of our signature properties from blueprint
              to reality.
            </p>
          </motion.div>
        </div>

        {/* --------- Cards with staggered fade-in --------- */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }} // animate when 20% in view
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative w-full min-h-[350px] overflow-hidden flex flex-col items-center justify-center text-center group"
            >
              <Link href={`/projects/${project.slug}`} className="group w-full h-full ">
                <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                  <img
                    src={
                      project.acf?.gallery_images?.[0]?.add_image ||
                      "/placeholder.png"
                    }
                    alt={project.title?.rendered}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <h2 className="relative text-white text-4xl font-semibold p-4 transition-transform duration-500 group-hover:scale-110">
                    {project.title?.rendered}
                  </h2>
                  <p className="relative text-white/90 text-lg mt-2 transition-transform duration-500 group-hover:scale-110 opacity-90">
                    {project.acf?.sub_title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
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

//   return (
//     <section id="projects" className="py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-headline font-bold">Ongoing Projects</h2>
//           <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
//             A glimpse into the future we are building. Explore our current portfolio of groundbreaking projects.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {projects.map((project, index) => (
//             <Link href={`/projects/${project.slug}`} key={index} className="group">
//               <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full">
//                 <CardContent className="p-0">
//                   <div className="relative aspect-[4/3]">
//                     <Image
//                       src={project.acf.gallery_images[0]?.add_image || "https://placehold.co/600x400.png"}
//                       alt={project.title.rendered}
//                       data-ai-hint="skyscraper building"
//                       fill
//                       className="object-fit"
//                     />
//                   </div>
//                 </CardContent>
//                 <CardHeader>
//                   <CardTitle className="font-headline text-xl">{project.title.rendered}</CardTitle>
//                 </CardHeader>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


