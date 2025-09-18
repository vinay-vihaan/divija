// import { Award, CheckCircle, Handshake, Home, Landmark, ShieldCheck, Star, Users } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: <Award className="h-10 w-10 text-accent" />,
//     title: "Quality Construction",
//     description: "Ensuring the best materials and practices for a lasting home.",
//   },
//   {
//     icon: <ShieldCheck className="h-10 w-10 text-accent" />,
//     title: "Vastu Compliant",
//     description: "Homes designed for harmony, prosperity, and well-being.",
//   },
//   {
//     icon: <Users className="h-10 w-10 text-accent" />,
//     title: "Clear Titles",
//     description: "Transparent and hassle-free ownership and legal processes.",
//   },
//   {
//     icon: <Handshake className="h-10 w-10 text-accent" />,
//     title: "Legal Assistance",
//     description: "Expert guidance through all legal aspects of property buying.",
//   },
//   {
//     icon: <CheckCircle className="h-10 w-10 text-accent" />,
//     title: "On-time Delivery",
//     description: "We are committed to delivering your home on the promised date.",
//   },
//   {
//     icon: <Star className="h-10 w-10 text-accent" />,
//     title: "Best Investment",
//     description: "Properties with high appreciation value for a secure future.",
//   },
//   {
//     icon: <Home className="h-10 w-10 text-accent" />,
//     title: "Loan Assistance",
//     description: "Easy and quick loan processing with our partner banks.",
//   },
//   {
//     icon: <Landmark className="h-10 w-10 text-accent" />,
//     title: "Best Amenities",
//     description: "Luxury amenities to enhance your lifestyle and comfort.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section id="why-choose-us" className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us</h2>
//           <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
//             We provide the best quality services and amenities for your dream home.
//           </p>
//         </div>
//         {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
//          */}
//           <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ amount: 0.2 }} // animate when 20% in view
//         >
//           {features.map((feature, index) => (
//             <Card key={index} className="text-center flex flex-col items-center justify-start p-4 hover:shadow-xl transition-shadow">
//                 <CardHeader className="p-2">
//                     {feature.icon}
//                 </CardHeader>
//                 <CardContent className="p-2">
//                     <CardTitle className="font-headline text-lg mb-2">{feature.title}</CardTitle>
//                     <p className="text-muted-foreground text-sm">{feature.description}</p>
//                 </CardContent>
//             </Card>
//           ))}
//         {/* </div>
//          */}
//          </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  Award,
  CheckCircle,
  Handshake,
  Home,
  Landmark,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedHeading from "./animations/AnimatedHeading";
import { AnimatedParagraph } from "./animations/AnimatedParagraph";

const features = [
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "Quality Construction",
    description: "Ensuring the best materials and practices for a lasting home.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Vastu Compliant",
    description: "Homes designed for harmony, prosperity, and well-being.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Clear Titles",
    description: "Transparent and hassle-free ownership and legal processes.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-accent" />,
    title: "Legal Assistance",
    description: "Expert guidance through all legal aspects of property buying.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-accent" />,
    title: "On-time Delivery",
    description: "We are committed to delivering your home on the promised date.",
  },
  {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: "Best Investment",
    description: "Properties with high appreciation value for a secure future.",
  },
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: "Loan Assistance",
    description: "Easy and quick loan processing with our partner banks.",
  },
  {
    icon: <Landmark className="h-10 w-10 text-accent" />,
    title: "Best Amenities",
    description: "Luxury amenities to enhance your lifestyle and comfort.",
  },
];

// --- Framer Motion Variants ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <AnimatedHeading as="h2" className="text-3xl md:text-4xl">
               Why Choose Us
            </AnimatedHeading>
          {/* <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Why Choose Us
          </h2> */}
          <AnimatedParagraph>
             We provide the best quality services and amenities for your dream
            home.
          </AnimatedParagraph>
          {/* <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We provide the best quality services and amenities for your dream
            home.
          </p> */}
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group text-center flex flex-col items-center justify-start p-4 hover:shadow-xl transition-shadow">
                <CardHeader className="transform transition-transform duration-300 group-hover:scale-125 p-2 ">{feature.icon}</CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="font-headline text-lg mb-2">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
