"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Homepage } from "@/lib/types";

interface AboutSection {
  aboutSection?: Homepage["acf"]["about_section"]; // optional
}

export default function About({aboutSection}:AboutSection) {

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* <div className="relative w-[100%] h-[500px]">
                 <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
                  // animate only the first time in view
              className="text-3xl md:text-4xl font-headline font-bold mb-4"
            >
             <Image
              src="https://divija.vihaandigitals.com/wp-content/uploads/2025/09/about-animate.png"
              alt="A modern office interior"
              data-ai-hint="real estate office"
              fill
              className="rounded-lg  shadow-lg"
            />
            </motion.div>
                   <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
                  // animate only the first time in view
              className="text-3xl md:text-4xl font-headline font-bold mb-4"
            >
              <Image
              src="https://divija.vihaandigitals.com/wp-content/uploads/2025/09/about-animate2.png"
              alt="A modern office interior"
              data-ai-hint="real estate office"
              fill
              className="rounded-lg  shadow-lg"
            />
            </motion.div>
          </div> */}
          <div className="relative w-full h-auto">
            <div className="flex  justify-center gap-8">
              {/* First image */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", }}
                // viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
               {aboutSection?.image1 &&
                ( <Image
                  src={aboutSection?.image1}
                  alt="A modern office interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />)
               }
              </motion.div>

              {/* Second image */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                // viewport={{ once: true }}
                className="w-full md:w-1/2 pt-12"
              >
                {aboutSection?.image1 &&
                ( <Image
                  src={aboutSection?.image2}
                  alt="A modern office interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />)
               }
                {/* <Image
                  src="https://divija.vihaandigitals.com/wp-content/uploads/2025/09/about-animate2.png"
                  alt="A modern office interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                /> */}
              </motion.div>
            </div>
          </div>
          <div>
            {/* <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Divija Developers</h2>
             */}
            {/* Fade-in header */}
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-accent text-xl font-semibold mb-2"

            >{aboutSection?.sub_tittle}</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // animate only the first time in view
              className="text-3xl md:text-4xl font-headline font-bold mb-4"
            >
              {aboutSection?.tittle}
            </motion.h2>
            {/* <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded on the principles of innovation, quality, and integrity, Divija Developers has been a pivotal force in shaping modern skylines. We are committed to developing properties that are not only aesthetically pleasing but also sustainable and built to last.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of seasoned architects, engineers, and designers work in synergy to bring landmark projects to life, ensuring every detail reflects our commitment to excellence. We believe in building more than just structures; we build communities and legacies.
            </p> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-muted-foreground mb-4 leading-relaxed"

            >
              {/* <p > */}
               {aboutSection?.description}
              {/* </p> */}
              {/* <p className="text-muted-foreground leading-relaxed">
                Our team of seasoned architects, engineers, and designers work in
                synergy to bring landmark projects to life, ensuring every detail
                reflects our commitment to excellence. We believe in building more
                than just structures; we build communities and legacies.
              </p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
