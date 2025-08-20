import { Award, CheckCircle, Handshake, Home, Landmark, ShieldCheck, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "Quality Construction",
    description: "Ensuring the best materials and practices for a lasting home.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Vastu Compliant",
    description: "Homes designed for harmony, prosperity, and well-being.",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Clear Titles",
    description: "Transparent and hassle-free ownership and legal processes.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-accent" />,
    title: "Legal Assistance",
    description: "Expert guidance through all legal aspects of property buying.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-accent" />,
    title: "On-time Delivery",
    description: "We are committed to delivering your home on the promised date.",
  },
  {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: "Best Investment",
    description: "Properties with high appreciation value for a secure future.",
  },
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: "Loan Assistance",
    description: "Easy and quick loan processing with our partner banks.",
  },
  {
    icon: <Landmark className="h-10 w-10 text-accent" />,
    title: "Best Amenities",
    description: "Luxury amenities to enhance your lifestyle and comfort.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We provide the best quality services and amenities for your dream home.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center flex flex-col items-center justify-start p-4 hover:shadow-xl transition-shadow">
                <CardHeader className="p-2">
                    {feature.icon}
                </CardHeader>
                <CardContent className="p-2">
                    <CardTitle className="font-headline text-lg mb-2">{feature.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
