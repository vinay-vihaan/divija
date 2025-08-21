import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Contact Us</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a question or want to work with us? Leave a message.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold">Our Office</h3>
            <div className="flex items-start gap-4">
              <Building2 className="h-6 w-6 text-primary mt-1"/>
              <div>
                <p className="font-semibold">Divija Developers Headquarters</p>
                <p className="text-muted-foreground">123 Luxury Lane, Metropolis, 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1"/>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-muted-foreground">contact@divijadevelopers.com</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1"/>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
