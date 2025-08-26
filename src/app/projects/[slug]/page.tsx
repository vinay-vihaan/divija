import Image from 'next/image';
import {
  Building,
  MapPin,
  CheckCircle,
  Home,
  Plane,
  Train,
  School,
  Hospital,
  ShoppingBag,
} from 'lucide-react';
import { notFound } from 'next/navigation';

import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyForm from '@/components/sticky-form';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getProjectBySlug } from '@/lib/wordpress';
import type { Project } from '@/lib/types';

type ProjectPageParams = {
  params: {
    slug: string;
  };
};

console.log("json",)

// Helper function to create icon components from a string
const iconComponents: { [key: string]: React.ReactNode } = {
  plane: <Plane className="h-6 w-6 text-primary" />,
  train: <Train className="h-6 w-6 text-primary" />,
  school: <School className="h-6 w-6 text-primary" />,
  hospital: <Hospital className="h-6 w-6 text-primary" />,
  shopping: <ShoppingBag className="h-6 w-6 text-primary" />,
};

function getLocationIcon(name: string): React.ReactNode {
  const lowerCaseName = name.toLowerCase();
  const iconKey = Object.keys(iconComponents).find(key => lowerCaseName.includes(key));
  return iconKey ? iconComponents[iconKey] : <MapPin className="h-6 w-6 text-primary" />;
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const project: Project | null = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { title, content, acf } = project;


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pb-4 md:pb-20">

        {/* <section className="relative w-full h-64 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${project.acf?.gallery_images?.[0]?.add_image || '/placeholder.png'})` }}>
          <div className='container'>

          </div>
        </section> */}
        <div
                className="relative w-full min-h-[350px] overflow-hidden flex flex-col items-center justify-center text-center group mb-20"
              >
                {/* Background Image */}
                <img
                  src={project.acf?.gallery_images?.[0]?.add_image || "/placeholder.png"}
                  alt={project.title?.rendered}
                  className="absolute inset-0 w-full h-full object-fill"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <h2 className="relative text-white text-4xl font-semibold p-4">
                  {project.title?.rendered}
                </h2>
                <p className="text-white/90 text-lg mt-2 transition-opacity opacity-90">{project.acf?.sub_title}</p>
              </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{title.rendered}</h1>
              </div> */}


              <section id="overview">
                <h2 className="text-3xl font-headline font-semibold mb-4 flex items-center gap-3">
                  <Building className="h-8 w-8" /> Overview
                </h2>
                <div className="text-muted-foreground leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: content.rendered }} />

                {/* {acf.gallery_images && acf.gallery_images.length > 0 && (
                  <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                    <CarouselContent>
                      {acf.gallery_images.map((item, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                              src={item.add_image || "https://placehold.co/800x600.png"}
                              alt={item.add_image ? `Gallery image for ${title.rendered}` : 'Placeholder image'}
                              fill
                              className="object-fit"
                              data-ai-hint="modern apartment building"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-16" />
                  </Carousel>
                )} */}
                {acf.gallery_images && acf.gallery_images.length > 0 && (
                  <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                    <CarouselContent>
                      {acf.gallery_images.map((item, index) => (
                        <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3 lg:basis-1/3'>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                              src={item.add_image || "https://placehold.co/800x600.png"}
                              alt={item.add_image ? `Gallery image for ${title.rendered}` : 'Placeholder image'}
                              fill
                              className="object-fit"
                              data-ai-hint="modern apartment building"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-16" />
                  </Carousel>
                )}
              </section>

              <Separator />

              {acf.project_highlights && acf.project_highlights.length > 0 && (
                <section id="highlights">
                  <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle className="h-8 w-8" /> Project Highlights
                  </h2>
                  <ul className="space-y-3">
                    {acf.project_highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight.add_item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <Separator />

              {acf.amenities && acf.amenities.length > 0 && (
                <section id="amenities">
                  <h2 className="text-3xl font-headline font-semibold mb-8 flex items-center gap-3">
                    <Home className="h-8 w-8" /> Amenities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                    {acf.amenities.map((amenity, index) => (
                      <div key={index} className="flex flex-col items-center group">
                        <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={amenity.add_image || "https://placehold.co/150x150.png"}
                            alt={amenity.add_item}
                            fill
                            className="object-fit transition-transform duration-300 group-hover:scale-110"
                            data-ai-hint="luxury amenity"
                          />
                        </div>
                        <p className="font-semibold mt-2">{amenity.add_item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <Separator />

              {acf.location_highlights && acf.location_highlights.length > 0 && (
                <section id="location-highlights">
                  <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                    <MapPin className="h-8 w-8" /> Location Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {acf.location_highlights.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg">
                        {getLocationIcon(item.add_item)}
                        <p className="text-muted-foreground">{item.add_item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <Separator />

              {/* {acf.google_map && (
                <section id="location-map">
                  <h2 className="text-3xl font-headline font-semibold mb-6">Location Map</h2>
                  <div className="aspect-video rounded-lg overflow-hidden border">
                       <Image
                              src={acf.location_map || "https://placehold.co/800x600.png"}
                              alt={title.rendered }
                              fill
                              className="object-cover"
                              data-ai-hint="lcation map"
                              sizes='100vw'
                            />
                    <div
                      className="aspect-video rounded-lg overflow-hidden border"
                      dangerouslySetInnerHTML={{ __html: acf.google_map }}
                    />
                  </div>
                </section>
              )} */}
              {(acf.google_map || acf.location_map) && (
                <section id="location-map">
                  <h2 className="text-3xl font-headline font-semibold mb-6">Location Map</h2>

                  {/* Location Image */}
                  {acf.location_map && (
                    <div className="aspect-video rounded-lg rounded-bl-none rounded-br-none overflow-hidden relative border-t border-r border-l ">
                      <Image
                        src={acf.location_map || "https://placehold.co/800x600.png"}
                        alt={title.rendered}
                        fill
                        className="object-fit"
                        sizes="100vw"
                        data-ai-hint="location map"
                      />
                    </div>
                  )}

                  {/* Google Map Embed */}
                  {acf.google_map && (
                    <div
                      className="aspect-video rounded-lg overflow-hidden rounded-tl-none rounded-tr-none border-r border-b border-l"
                      dangerouslySetInnerHTML={{ __html: acf.google_map }}
                    />
                  )}
                </section>
              )}

            </div>
            {/* https://maps.app.goo.gl/JFsu9xVLXD41ppE88 */}

            <div className="hidden lg:block">
              <StickyForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


// import Image from "next/image";
// import {
//   Building,
//   MapPin,
//   CheckCircle,
//   Home,
//   Plane,
//   Train,
//   School,
//   Hospital,
//   ShoppingBag,
// } from "lucide-react";
// import { notFound } from "next/navigation";

// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import StickyForm from "@/components/sticky-form";
// import { Separator } from "@/components/ui/separator";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { getProjectBySlug } from "@/lib/wordpress";
// import type { Project } from "@/lib/types";

// type ProjectPageParams = {
//   params: { slug: string };
// };

// // icons mapping
// const iconComponents: { [key: string]: React.ReactNode } = {
//   plane: <Plane className="h-6 w-6 text-primary" />,
//   train: <Train className="h-6 w-6 text-primary" />,
//   school: <School className="h-6 w-6 text-primary" />,
//   hospital: <Hospital className="h-6 w-6 text-primary" />,
//   shopping: <ShoppingBag className="h-6 w-6 text-primary" />,
// };

// function getLocationIcon(name: string): React.ReactNode {
//   const lowerCaseName = name.toLowerCase();
//   const iconKey = Object.keys(iconComponents).find((key) =>
//     lowerCaseName.includes(key)
//   );
//   return iconKey ? iconComponents[iconKey] : <MapPin className="h-6 w-6 text-primary" />;
// }

// export default async function ProjectPage({ params }: ProjectPageParams) {
//   const project: Project | null = await getProjectBySlug(params.slug);

//   if (!project) {
//     notFound();
//   }

//   const { title, content, acf, _embedded } = project;

//   // Helper: map WP media IDs -> URLs from _embedded
//   const resolveMediaUrl = (id: number): string | null => {
//     const attachment = _embedded?.["wp:attachment"]?.find((a) => a.id === id);
//     return attachment?.source_url || null;
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-background">
//       <Header />
//       <main className="flex-grow py-12 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//             <div className="lg:col-span-2 space-y-12">
//               <div className="text-center lg:text-left">
//                 <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
//                   {title.rendered}
//                 </h1>
//               </div>

//               {/* Overview + Gallery */}
//               <section id="overview">
//                 <h2 className="text-3xl font-headline font-semibold mb-4 flex items-center gap-3">
//                   <Building className="h-8 w-8" /> Overview
//                 </h2>
//                 <div
//                   className="text-muted-foreground leading-relaxed mb-8"
//                   dangerouslySetInnerHTML={{ __html: content.rendered }}
//                 />

//                 {acf.gallery_images?.length > 0 && (
//                   <Carousel className="w-full" opts={{ align: "start", loop: true }}>
//                     <CarouselContent>
//                       {acf.gallery_images.map((item, index) => {
//                         const url = resolveMediaUrl(item.add_image) || "https://placehold.co/800x600.png";
//                         return (
//                           <CarouselItem key={index}>
//                             <div className="relative aspect-video rounded-lg overflow-hidden">
//                               <Image
//                                 src={url}
//                                 alt={`Gallery image ${index + 1} for ${title.rendered}`}
//                                 fill
//                                 className="object-cover"
//                                 data-ai-hint="modern apartment building"
//                               />
//                             </div>
//                           </CarouselItem>
//                         );
//                       })}
//                     </CarouselContent>
//                     <CarouselPrevious className="ml-16" />
//                     <CarouselNext className="mr-16" />
//                   </Carousel>
//                 )}
//               </section>

//               <Separator />

//               {/* Highlights */}
//               {acf.project_highlights?.length > 0 && (
//                 <section id="highlights">
//                   <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
//                     <CheckCircle className="h-8 w-8" /> Project Highlights
//                   </h2>
//                   <ul className="space-y-3">
//                     {acf.project_highlights.map((highlight, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
//                         <span className="text-muted-foreground">{highlight.add_item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </section>
//               )}

//               <Separator />

//               {/* Amenities */}
//               {acf.amenities?.length > 0 && (
//                 <section id="amenities">
//                   <h2 className="text-3xl font-headline font-semibold mb-8 flex items-center gap-3">
//                     <Home className="h-8 w-8" /> Amenities
//                   </h2>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
//                     {acf.amenities.map((amenity, index) => {
//                       const url = resolveMediaUrl(amenity.add_image) || "https://placehold.co/150x150.png";
//                       return (
//                         <div key={index} className="flex flex-col items-center group">
//                           <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden shadow-lg">
//                             <Image
//                               src={url}
//                               alt={amenity.add_item}
//                               fill
//                               className="object-cover transition-transform duration-300 group-hover:scale-110"
//                               data-ai-hint="luxury amenity"
//                             />
//                           </div>
//                           <p className="font-semibold mt-2">{amenity.add_item}</p>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </section>
//               )}

//               <Separator />

//               {/* Location Highlights */}
//               {acf.location_highlights?.length > 0 && (
//                 <section id="location-highlights">
//                   <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
//                     <MapPin className="h-8 w-8 text-primary" /> Location Highlights
//                   </h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {acf.location_highlights.map((item, index) => (
//                       <div key={index} className="flex items-center gap-4 p-3 rounded-lg">
//                         {getLocationIcon(item.add_item)}
//                         <p className="text-muted-foreground">{item.add_item}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               )}

//               <Separator />

//               {/* Google Map */}
//               {acf.google_map && (
//                 <section id="location-map">
//                   <h2 className="text-3xl font-headline font-semibold mb-6">
//                     Location Map
//                   </h2>
//                   <div className="aspect-video rounded-lg overflow-hidden border">
//                     <iframe
//                       src={acf.google_map}
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen={false}
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                   </div>
//                 </section>
//               )}
//             </div>

//             {/* Sidebar */}
//             <div className="hidden lg:block">
//               <StickyForm />
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
