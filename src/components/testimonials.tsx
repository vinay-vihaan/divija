import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Rajesham L.",
    title: "Plotowner, Hill City",
    image: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/client-1.png",
    hint: "portrait woman",
    quote: "Working with Divija Developers was a dream. They were professional, attentive, and the quality of our new home is outstanding. We couldn't be happier!"
  },
  {
    name: "Kiran B.",
    title: "Investor, Pearl City",
    image: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/client-2.png",
    hint: "portrait man",
    quote: "The team at Divija Developers is top-notch. Their market insight and commitment to quality make them a reliable partner for any real estate investment."
  },
  {
    name: "Akash PV",
    title: "Owner, Anand Plots",
    image: "https://divija.vihaandigitals.com/wp-content/uploads/2025/08/client-3.png",
    hint: "portrait person",
    quote: "From the moment we first inquired to the day we got our keys, the process was seamless. The amenities are fantastic and the community is wonderful."
  },
   {
    name: "Michael B.",
    title: "Investor, Hill City",
    image: "https://placehold.co/100x100.png",
    hint: "portrait man",
    quote: "The team at Divija Developers is top-notch. Their market insight and commitment to quality make them a reliable partner for any real estate investment."
  },
];

export default function Testimonials() {
  return (
    // <section id="testimonials" className="py-16 md:py-24 bg-secondary">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
    //       <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
    //         Hear from our satisfied clients about their experience with Divija Developers.
    //       </p>
    //     </div>
    //     <Carousel
    //       opts={{
    //         align: "start",
    //         loop: true,
    //       }}
    //       className="w-full max-w-4xl mx-auto"
    //     >
    //       <CarouselContent>
    //         {testimonials.map((testimonial, index) => (
    //           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
    //             <div className="p-1 h-full">
    //               <Card className="h-full flex flex-col bg-white">
    //                 <CardContent className="flex-grow flex flex-col items-center text-center p-6 ">
    //                   <Avatar className="w-20 h-20 mb-4">
    //                     <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
    //                     <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
    //                   </Avatar>
    //                   <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
    //                   <p className="font-bold font-headline">{testimonial.name}</p>
    //                   <p className="text-sm text-muted-foreground">{testimonial.title}</p>
    //                 </CardContent>
    //               </Card>
    //             </div>
    //           </CarouselItem>
    //         ))}
    //       </CarouselContent>
    //       <CarouselPrevious />
    //       <CarouselNext />
    //     </Carousel>
    //   </div>
    // </section>
    <section
  id="testimonials"
  className="relative py-16 md:py-24 bg-secondary"
>
  {/* --- Background image --- */}
  <div
    className="absolute inset-0 bg-center bg-cover"
    style={{
      backgroundImage:
        "url('/testimonial-bg.png')", // ← replace with your image URL
    }}
  />

  {/* --- Semi-transparent overlay for readability --- */}
  <div className="absolute inset-0 bg-black/80" />

  {/* --- Content --- */}
  <div className="relative container mx-auto px-4">
    <div className="text-center mb-12 text-white">
      <h2 className="text-3xl md:text-4xl font-headline font-bold">
        What Our Clients Say
      </h2>
      <p className="text-white/80 mt-2 max-w-2xl mx-auto">
        Hear from our satisfied clients about their experience with Divija Developers.
      </p>
    </div>

    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full  mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full flex flex-col bg-white/90 backdrop-blur-sm shadow-xl">
                <CardContent className="flex-grow flex flex-col items-center text-center p-6">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      data-ai-hint={testimonial.hint}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-bold font-headline">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</section>

  );
}
