// "use client";

// import {
//   Award,
//   CheckCircle,
//   Handshake,
//   Home,
//   Landmark,
//   ShieldCheck,
//   Star,
//   Users,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import AnimatedHeading from "./animations/AnimatedHeading";
// import { AnimatedParagraph } from "./animations/AnimatedParagraph";
// import { Homepage } from "@/lib/types";
// import * as LucideIcons from "lucide-react";
// import { LucideIcon } from "lucide-react"; 

// interface Whychoooseus {
//   whychoooseus?: Homepage["acf"]["why_chooose_us"]; // optional
// }

// // interface Feature {
// //   icon_type: string;
// //   title: string;
// //   description: string;
// // }

// // --- Framer Motion Variants ---
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// export default function WhyChooseUs({ whychoooseus }: Whychoooseus) {
// const IconComponent = LucideIcons[whychoooseus?.icon_type as keyof typeof LucideIcons] as LucideIcon;
//   return (
//     <section id="why-choose-us" className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <AnimatedHeading as="h2" className="text-3xl md:text-4xl">
//             Why Choose Us
//           </AnimatedHeading>
//           {/* <h2 className="text-3xl md:text-4xl font-headline font-bold">
//             Why Choose Us
//           </h2> */}
//           <AnimatedParagraph>
//             We provide the best quality services and amenities for your dream
//             home.
//           </AnimatedParagraph>
//           {/* <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
//             We provide the best quality services and amenities for your dream
//             home.
//           </p> */}
//         </div>

//         <motion.div
//           className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ amount: 0.2 }}
//         >
//           {whychoooseus?.map((feature, index) => {
//             // const IconComponent = LucideIcons[feature.icon_type as keyof typeof LucideIcons];

//             return (
//               <motion.div key={index} variants={item}>
//                 <Card className="group text-center flex flex-col items-center justify-start p-4 hover:shadow-xl transition-shadow">
//                   <CardHeader className="p-2">
//                     {IconComponent ? (
//                       <IconComponent className="w-10 h-10 text-blue-500 transform transition-transform duration-300 group-hover:scale-125" />
//                     ) : null}
//                   </CardHeader>
//                   <CardContent className="p-2">
//                     <CardTitle className="font-headline text-lg mb-2">
//                       {feature.tittle}
//                     </CardTitle>
//                     <p className="text-muted-foreground text-sm">
//                       {feature.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}

//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants, easeOut } from "framer-motion";
import AnimatedHeading from "./animations/AnimatedHeading";
import { AnimatedParagraph } from "./animations/AnimatedParagraph";
import { Homepage } from "@/lib/types";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface WhyChooseUsProps {
  whychoooseus?: Homepage["acf"]["why_chooose_us"];
}

// --- Framer Motion Variants ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function WhyChooseUs({ whychoooseus }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedHeading as="h2" className="text-3xl md:text-4xl">
            Why Choose Us
          </AnimatedHeading>
          <AnimatedParagraph>
            We provide the best quality services and amenities for your dream home.
          </AnimatedParagraph>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          {whychoooseus?.map((feature, index) => {
            const IconComponent = LucideIcons[
              feature.icon_type as keyof typeof LucideIcons
            ] as LucideIcon;

            return (
              <motion.div key={index} variants={item}>
                <Card className="group text-center flex flex-col items-center justify-start p-4 hover:shadow-xl transition-shadow">
                  <CardHeader className="p-2">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-accent  transform transition-transform duration-300 group-hover:scale-125" />
                    )}
                  </CardHeader>
                  <CardContent className="p-2">
                    <CardTitle className="font-headline text-lg mb-2">
                      {feature.tittle || feature.tittle} {/* fallback in case API uses 'tittle' */}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
