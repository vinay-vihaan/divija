// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import placeholderImages from "@/lib/placeholder-images.json";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import { Folder, X } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// type Image = {
//     src: string;
//     alt: string;
//     hint: string;
//     category: string;
// };

// type GroupedImages = {
//     [key: string]: Image[];
// };

// export default function GalleryPage() {
//     const allImages: Image[] = [
//         ...placeholderImages.galleryImages,
//         {
//             "src": "https://picsum.photos/seed/gal7/800/600",
//             "alt": "Modern office lobby",
//             "hint": "office lobby",
//             "category": "Hill City"
//         },
//         {
//             "src": "https://picsum.photos/seed/gal8/800/600",
//             "alt": "Luxury bathroom with marble tiles",
//             "hint": "luxury bathroom",
//             "category": "Pearl City"
//         },
//         {
//             "src": "https://picsum.photos/seed/gal9/800/600",
//             "alt": "Community clubhouse exterior",
//             "hint": "community clubhouse",
//             "category": "Ananda"
//         },
//         {
//             "src": "https://picsum.photos/seed/gal10/800/600",
//             "alt": "High-rise apartment building at night",
//             "hint": "apartment night",
//             "category": "Hill City"
//         },
//         {
//             "src": "https://picsum.photos/seed/gal11/800/600",
//             "alt": "Modern minimalist living room",
//             "hint": "minimalist interior",
//             "category": "Hill City"
//         },
//         {
//             "src": "https://picsum.photos/seed/gal12/800/600",
//             "alt": "Fitness center with modern equipment",
//             "hint": "gym fitness",
//             "category": "Hill City"
//         }
//     ];

//     const groupedImages: GroupedImages = allImages.reduce((acc, image) => {
//         const { category } = image;
//         if (!acc[category]) {
//             acc[category] = [];
//         }
//         acc[category].push(image);
//         return acc;
//     }, {} as GroupedImages);

//     const [activeCategory, setActiveCategory] = useState<string | null>(null);

//     const handleFolderClick = (category: string) => {
//         setActiveCategory(category);
//     };

//     const handleClose = () => {
//         setActiveCategory(null);
//     };

//     const imagesForCarousel = activeCategory ? groupedImages[activeCategory] : [];

//     return (
//         <div className="flex flex-col min-h-screen bg-background">
//             {/* <Header /> */}
//             <main className="flex-grow py-12 md:py-20">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
//                             Project Gallery
//                         </h1>
//                         <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
//                             A showcase of our commitment to excellence and innovation in real
//                             estate development.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
//                         {Object.keys(groupedImages).map((category) => {
//                             const firstImage = groupedImages[category][0];
//                             return (
//                                 <Card
//                                     key={category}
//                                     className="group w-full overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
//                                     onClick={() => handleFolderClick(category)}
//                                 >
//                                     <div className="relative aspect-square">
//                                         <Image
//                                             src={firstImage.src}
//                                             alt={category}
//                                             fill
//                                             className="object-cover transition-transform duration-300 group-hover:scale-110"
//                                             data-ai-hint={firstImage.hint}
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4 text-center">
//                                             <h3 className="font-headline font-semibold text-lg text-white">{category}</h3>
//                                             <p className="text-sm text-white/80">{groupedImages[category].length} items</p>
//                                         </div>
//                                     </div>
//                                 </Card>
//                             )
//                         })}
//                     </div>
//                 </div>

//                 {activeCategory && imagesForCarousel.length > 0 && (
//                     <Dialog open={true} onOpenChange={handleClose}>
//                         <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-0 flex items-center justify-center">
//                             <DialogTitle className="sr-only">{activeCategory} Gallery Carousel</DialogTitle>
//                             <Carousel
//                                 opts={{
//                                     loop: true,
//                                 }}
//                                 className="w-full"
//                             >
//                                 <CarouselContent>
//                                     {imagesForCarousel.map((image, index) => (
//                                         <CarouselItem key={index} className="flex items-center justify-center">
//                                             <div className="relative aspect-video w-full max-h-[80vh]">
//                                                 <Image
//                                                     src={image.src}
//                                                     alt={image.alt}
//                                                     fill
//                                                     className="object-contain"
//                                                     data-ai-hint={image.hint}
//                                                 />
//                                                 <div className="absolute bottom-4 left-4 right-4 text-center">
//                                                     {/* <p className="text-white bg-black/50 rounded-md px-2 py-1 text-sm font-semibold">
//                             {image.alt}
//                           </p> */}
//                                                     <p className="inline-block w-fit text-white bg-black/50 rounded-md px-2 py-1 text-sm font-semibold">
//                                                         {image.alt}
//                                                     </p>

//                                                 </div>
//                                             </div>
//                                         </CarouselItem>
//                                     ))}
//                                 </CarouselContent>
//                                 <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70" />
//                                 <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70" />
//                             </Carousel>
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 onClick={handleClose}
//                                 className="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-black/70 rounded-full"
//                             >
//                                 <X className="h-6 w-6" />
//                                 <span className="sr-only">Close</span>
//                             </Button>
//                         </DialogContent>
//                     </Dialog>
//                 )}
//             </main>
//             {/* <Footer /> */}
//         </div>
//     );
// }


"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { fetchGalleryData } from "@/lib/api";

type ImageType = {
  src: string;
  alt: string;
  hint: string;
  category: string;
};

type GalleryGroup = {
  category: string;
  images: ImageType[];
};

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<GalleryGroup[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   useEffect(() => {
//     async function loadData() {
//       const res = await fetch("api/gallery"); // we'll create proxy API
//       const data = await res.json();
//       setGalleries(data);
//     }
//     loadData();
//   }, []);

useEffect(() => {
  fetchGalleryData().then(setGalleries).catch(console.error);
}, []);


  console.log("data", galleries)

  const activeGallery = galleries.find((g) => g.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Project Gallery</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {galleries.map((gallery) => {
              const firstImage = gallery.images[0];
              return (
                <Card
                  key={gallery.category}
                  className="cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:-translate-y-2 transition-all"
                  onClick={() => setActiveCategory(gallery.category)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={firstImage?.src || "/placeholder.jpg"}
                      alt={gallery.category}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4">
                      <h3 className="text-lg font-semibold text-white">{gallery.category}</h3>
                      <p className="text-sm text-white/80">{gallery.images.length} items</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {activeGallery && (
          <Dialog open={true} onOpenChange={() => setActiveCategory(null)}>
            <DialogContent className="max-w-4xl w-full bg-transparent border-0 p-2 flex items-center justify-center">
              <DialogTitle className="sr-only">{activeGallery.category} Gallery Carousel</DialogTitle>
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {activeGallery.images.map((image, index) => (
                    <CarouselItem key={index} className="flex items-center justify-center">
                      <div className="relative aspect-video w-full max-h-[80vh]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <p className="inline-block w-fit text-white bg-black/50 rounded-md px-2 py-1 text-sm font-semibold">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70" />
              </Carousel>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  );
}
