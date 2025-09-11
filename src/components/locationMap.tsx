"use client";
import { useState } from "react";
import Image from "next/image";

export default function LocationSection({ acf, title }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Location Map</h3>
            {acf.location_map && (
                <>
                    {/* Thumbnail */}
                    <div
                        className="aspect-video rounded-lg rounded-bl-none rounded-br-none overflow-hidden relative border-t border-r border-l cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        <Image
                            src={acf.location_map || "https://placehold.co/800x600.png"}
                            alt={title.rendered}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            data-ai-hint="location map"
                        />
                    </div>

                    {/* Modal */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="relative w-11/12 max-w-5xl">
                                <Image
                                    src={acf.location_map}
                                    alt={title.rendered}
                                    width={1200}
                                    height={800}
                                    className="rounded-lg object-contain"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-3 right-3 text-white bg-black/50 px-3 py-1 rounded-full"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
