import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b border-border/40 bg-secondary ">
      <div className="container flex  max-w-screen-2xl items-center">
        <div className="flex justify-between items-center flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2 py-4">
            <Image src={"https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"} alt="logo" sizes="100vw" width={180} height={150}/>
          </Link>
          <nav className="flex items-center gap-4 font-medium lg:gap-6">
            <Link
              href="/#about"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="/#testimonials"
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
