'use client';

import * as React from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ProjectGalleryProps {
    acf: {
        gallery_images?: { add_image?: string }[];
    };
    title: { rendered: string };
}

export default function ProjectGallery({ acf, title }: ProjectGalleryProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [lightboxStartIndex, setLightboxStartIndex] = React.useState(0);

    React.useEffect(() => {
        if (!api) return; // this ends the effect with 'void', which is fine

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        const onSelect = () => setCurrent(api.selectedScrollSnap() + 1);
        api.on('select', onSelect);

        // ✅ cleanup: remove listener, return nothing else
        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    const openLightbox = (index: number) => {
        setLightboxStartIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };


    const images = acf?.gallery_images || [];
    if (images.length === 0) return null;

    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold mt-6 mb-3">Project Gallery</h3>

            {/* Main carousel */}
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((item, index) => (
                        <CarouselItem key={index} onClick={() => openLightbox(index)} className="cursor-pointer">
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                    src={item.add_image || 'https://placehold.co/800x600.png'}
                                    alt={
                                        item.add_image
                                            ? `Gallery image ${index + 1} for ${title.rendered}`
                                            : 'Placeholder image'
                                    }
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                />
                                {/* <div className="absolute bottom-5 left-0 right-0 mx-auto py-2 text-center text-sm text-black z-10">
                                    Image {current} of {count}
                                </div> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className="absolute md:-left-5 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute md:-right-5 top-1/2 -translate-y-1/2 z-10" /> */}
            </Carousel>

            {/* Thumbnail carousel */}
            <Carousel
                opts={{ align: 'start', dragFree: true, containScroll: 'keepSnaps' }}
                className="w-full"
            >
                <CarouselContent className="-ml-2">
                    {images.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/3 pl-2 cursor-pointer"
                            onClick={() => api?.scrollTo(index)}
                        >
                            <div className="p-1">
                                <Card
                                    className={`overflow-hidden ${index === current - 1 ? 'border-primary' : ''
                                        }`}
                                >
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={item.add_image || 'https://placehold.co/150x150.png'}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="150px"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute md:-left-5 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute md:-right-5 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>

            {lightboxOpen && images.length > 0 && (
                <Dialog open={lightboxOpen} onOpenChange={closeLightbox}>
                    <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-0 flex items-center justify-center">
                        <DialogTitle className="sr-only">{title.rendered} Gallery</DialogTitle>
                        <Carousel
                            opts={{
                                loop: true,
                                startIndex: lightboxStartIndex,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {images.map((item, index) => (
                                    <CarouselItem key={index} className="flex items-center justify-center">
                                        <div className="relative aspect-video w-full max-h-[80vh]">
                                            <Image
                                                src={item.add_image || "https://placehold.co/1280x720.png"}
                                                alt={`Gallery image ${index + 1} for ${title.rendered}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70" />
                            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70" />
                        </Carousel>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full"
                        >
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
