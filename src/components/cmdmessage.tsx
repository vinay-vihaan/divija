"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Homepage } from "@/lib/types";

interface Cmdmessage {
    cmdMessage?: Homepage["acf"]["cmd_message"]; // optional
}

export default function Cmdmessage({ cmdMessage }: Cmdmessage) {
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
                            {cmdMessage?.cmd_tittle}
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                        >
                            <p className="text-muted-foreground mb-4 leading-relaxed mb-8">
                                {cmdMessage?.cmd_description}
                            </p>
                            <p className="font-semibold leading-relaxed text-xl text-accent">

                                {cmdMessage?.name}
                            </p>
                            <p className="text-muted-foreground font-semibold leading-relaxed">

                                {cmdMessage?.designation}
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative w-[100%] h-[629px]">
                        {
                            cmdMessage?.image && (
                                <>
                                    <Image
                                        src={cmdMessage?.image}
                                        alt={cmdMessage?.name}
                                        data-ai-hint="real estate office"
                                        fill
                                        className="rounded-lg object-cover shadow-lg"
                                    />
                                    <div className="absolute text-white font-semibold rounded-lg bg-accent bottom-10 -left-10 p-10">
                                        18+ YEARS OF <br />
                                        EXPERIENCE
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
