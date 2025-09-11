"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function StickyForm() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API.
    // For this example, we'll just show a success toast.
    toast({
      title: "Enquiry Sent!",
      description: "Thank you for your interest. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Interested?</CardTitle>
          <CardDescription>Request a callback for more details.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="tel" placeholder="Your Phone Number" required />
            <Button type="submit" className="w-full">Request Callback</Button>
          </form>
        </CardContent>
      </Card>
   
    </div>
  );
}
