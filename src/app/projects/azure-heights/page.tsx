import Image from 'next/image';
import {
  Building,
  MapPin,
  CheckCircle,
  Home,
  Sun,
  Wind,
  Droplets,
  Trees,
  Car,
  Plane,
  Train,
  School,
  Hospital,
  ShoppingBag,
} from 'lucide-react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyForm from '@/components/sticky-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projectDetails = {
  title: 'Azure Heights',
  overview:
    'Azure Heights is a landmark of luxury living, offering breathtaking views and unparalleled amenities. This residential masterpiece is designed for those who seek an extraordinary lifestyle, combining modern architecture with sophisticated interiors. Each residence is a sanctuary of comfort and elegance, crafted with the finest materials and attention to detail. Experience the pinnacle of urban living at Azure Heights.',
  gallery: [
    { image: 'https://placehold.co/800x600.png', hint: 'modern apartment living room', alt: 'Modern living room with city view' },
    { image: 'https://placehold.co/800x600.png', hint: 'luxury kitchen', alt: 'Luxury kitchen with high-end appliances' },
    { image: 'https://placehold.co/800x600.png', hint: 'bedroom city view', alt: 'Spacious bedroom with a panoramic city view' },
    { image: 'https://placehold.co/800x600.png', hint: 'sleek bathroom', alt: 'Sleek and modern bathroom design' },
  ],
  highlights: [
    'Ultra-modern apartments with panoramic city views',
    'Designed by world-renowned architects',
    'State-of-the-art home automation systems',
    'Expansive balconies and floor-to-ceiling windows',
    'Sustainable and eco-friendly construction',
  ],
  amenities: [
    { image: 'https://placehold.co/150x150.png', hint: 'infinity pool', name: 'Rooftop Infinity Pool' },
    { image: 'https://placehold.co/150x150.png', hint: 'modern gym', name: 'Fully Equipped Gym' },
    { image: 'https://placehold.co/150x150.png', hint: 'zen garden', name: 'Landscaped Gardens' },
    { image: 'https://placehold.co/150x150.png', hint: 'spa wellness', name: 'Spa and Wellness Center' },
    { image: 'https://placehold.co/150x150.png', hint: 'kids playground', name: "Children's Play Area" },
    { image: 'https://placehold.co/150x150.png', hint: 'parking garage', name: 'Multi-level Parking' },
  ],
  locationHighlights: [
    { icon: <Plane className="h-6 w-6 text-primary" />, name: 'International Airport - 20 mins' },
    { icon: <Train className="h-6 w-6 text-primary" />, name: 'Metro Station - 5 mins' },
    { icon: <School className="h-6 w-6 text-primary" />, name: 'Prestige School - 10 mins' },
    { icon: <Hospital className="h-6 w-6 text-primary" />, name: 'City Hospital - 12 mins' },
    { icon: <ShoppingBag className="h-6 w-6 text-primary" />, name: 'Grand Mall - 15 mins' },
  ],
};

export default function AzureHeightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Page Title Header */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{projectDetails.title}</h1>
              </div>

              {/* Overview */}
              <section id="overview">
                <h2 className="text-3xl font-headline font-semibold mb-4 flex items-center gap-3">
                  <Building className="h-8 w-8" /> Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{projectDetails.overview}</p>
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {projectDetails.gallery.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            data-ai-hint={item.hint}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-16" />
                  <CarouselNext className="mr-16" />
                </Carousel>
              </section>

              <Separator />

              {/* Project Highlights */}
              <section id="highlights">
                <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8" /> Project Highlights
                </h2>
                <ul className="space-y-3">
                  {projectDetails.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <Separator />

              {/* Amenities */}
              <section id="amenities">
                <h2 className="text-3xl font-headline font-semibold mb-8 flex items-center gap-3">
                  <Home className="h-8 w-8" /> Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                  {projectDetails.amenities.map((amenity, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={amenity.image}
                          alt={amenity.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={amenity.hint}
                        />
                      </div>
                      <p className="font-semibold mt-2">{amenity.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Location Highlights */}
              <section id="location-highlights">
                <h2 className="text-3xl font-headline font-semibold mb-6 flex items-center gap-3">
                  <MapPin className="h-8 w-8" /> Location Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectDetails.locationHighlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg">
                      {item.icon}
                      <p className="text-muted-foreground">{item.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Location Map */}
              <section id="location-map">
                <h2 className="text-3xl font-headline font-semibold mb-6">Location Map</h2>
                <div className="aspect-video relative rounded-lg overflow-hidden border">
                  <Image
                    src="https://placehold.co/1200x675.png"
                    alt="Location map of Azure Heights"
                    fill
                    className="object-cover"
                    data-ai-hint="city map"
                  />
                </div>
                 <div className="mt-4 aspect-video rounded-lg overflow-hidden border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135078857!3d-6.194741395534446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42c6a4d5b2d%3A0x1d4d5cd9a7b3c2a4!2sNational%20Monument!5e0!3m2!1sen!2sid!4v162209 नेशनल%20मोन्यूमेंट"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
              </section>
            </div>

            {/* Sticky Form */}
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
