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
                            {/* <p className="text-muted-foreground mb-4 leading-relaxed mb-8">
                                {cmdMessage?.cmd_description}
                            </p> */}
                            <div className="text-muted-foreground mb-4 leading-relaxed mb-8" dangerouslySetInnerHTML={
                                cmdMessage?.cmd_description
                                    ? { __html: cmdMessage?.cmd_description }
                                    : undefined
                            }>
                                {/* {cmdMessage?.cmd_description} */}
                            </div>
                            <p className="font-semibold leading-relaxed text-xl  italic">

                                {cmdMessage?.name}
                            </p>
                            <p className="text-muted-foreground font-semibold leading-relaxed">

                                {cmdMessage?.designation}
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative w-[100%] h-[350px] md:h-[629px]">
                        {
                            cmdMessage?.image && (
                                <>
                                    <Image
                                        src={cmdMessage?.image}
                                        alt={cmdMessage?.name}
                                        data-ai-hint="real estate office"
                                        fill
                                        className="rounded-lg w-full h-full"
                                    />
                                    <div className="absolute font-semibold h-[90px] w-[90px] md:w-[120px] md-h[120px] lg:w-[180px] lg:h-[180px] top-5 left-3 md:left-10 p-10">
                                        {/* 18+ YEARS OF <br />
                                        EXPERIENCE */}
                                         <Image
                                        src="https://divija.vihaandigitals.com/wp-content/uploads/2025/09/bg-removed-2.png"
                                        alt={cmdMessage?.name}
                                        data-ai-hint="real estate office"
                                        fill
                                        className="rounded-lg object-cover"
                                    />
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
