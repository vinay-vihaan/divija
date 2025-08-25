import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex justify-between items-center flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg text-primary">Divija Developers</span> */}
            {/* <Image src={""}/> */}
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="#about"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="#showcase"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Showcase
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Testimonials
            </Link>
          </nav>
               <Button asChild>
                <Link href="#contact">Contact Us</Link>
            </Button>
        </div>
        {/* <div className="flex items-center">
            <Button asChild>
                <Link href="#contact">Contact Us</Link>
            </Button>
        </div> */}
      </div>
    </header>
  );
}
