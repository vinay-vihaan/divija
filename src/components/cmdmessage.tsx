"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Cmdmessage() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    <div>
                        {/* <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Divija Developers</h2>*/}
                        {/* Fade-in header */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            // animate only the first time in view
                            className="text-3xl md:text-4xl font-headline font-bold mb-6"
                        >
                            CMD's Message
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                        >
                            <p className="text-muted-foreground mb-4 leading-relaxed mb-8">
                                With <b>18+ years </b> of expertise in open plots and villa plot projects across Hyderabad and Telangana, Divija Developers has established itself as a trusted name in real estate. We believe land is the foundation of both financial growth and family security, and our ventures are designed to deliver long-term value. By ensuring clear titles, prime locations, and transparent processes, we have earned the confidence of thousands of customers. Moving ahead, our focus remains on providing premium plotted developments that secure wealth, build communities, and shape a brighter future.
                            </p>
                            <p className="font-semibold leading-relaxed text-xl text-accent">
                                SOMESWARA RAO AKULA
                                
                            </p>
                            <p className="text-muted-foreground font-semibold leading-relaxed">
                                Chairman & Managing Director
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative w-[100%] lg:w-[85%] h-[629px]">
                        <Image
                            src="https://divija.vihaandigitals.com/wp-content/uploads/2025/09/cmd-profile.jpeg"
                            alt="A modern office interior"
                            data-ai-hint="real estate office"
                            fill
                            className="rounded-lg object-cover shadow-lg"
                        />
                        <div className="absolute text-white font-semibold rounded-lg bg-accent bottom-10 -left-10 p-10">
                             18+ YEARS OF <br/>
                             EXPERIENCE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
