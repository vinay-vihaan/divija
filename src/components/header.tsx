"use client"
import Link from "next/link";
import { Building2, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white px-4">
      <div className="container flex mx-auto max-w-screen-2xl items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"
            alt="logo"
            sizes="100vw"
            width={180}
            height={150}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/" className="text-foreground/60 hover:text-foreground/80 transition-colors">Home</Link>
          <Link href="/#about" className="text-foreground/60 hover:text-foreground/80 transition-colors">About</Link>
          <Link href="/#projects" className="text-foreground/60 hover:text-foreground/80 transition-colors">Projects</Link>
          <Link href="/#testimonials" className="text-foreground/60 hover:text-foreground/80 transition-colors">Testimonials</Link>
          <Link href="/gallery" className="text-foreground/60 hover:text-foreground/80 transition-colors">Gallery</Link>

        </nav>

        {/* Contact Button (Desktop Only) */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="flex flex-col items-center gap-4 font-medium bg-secondary py-4 md:hidden">
          <Link href="/#about" className="text-foreground/60 hover:text-foreground/80 transition-colors">About</Link>
          <Link href="/#projects" className="text-foreground/60 hover:text-foreground/80 transition-colors">Projects</Link>
          <Link href="/#testimonials" className="text-foreground/60 hover:text-foreground/80 transition-colors">Testimonials</Link>
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}


// "use client";

// import Link from "next/link";
// import { Building2, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { useIsMobile } from "@/hooks/use-mobile";

// const navLinks = [
//   { href: "#about", label: "About" },
//   { href: "#projects", label: "Projects" },
//   { href: "#showcase", label: "Showcase" },
//   { href: "/gallery", label: "Gallery" },
//   { href: "#testimonials", label: "Testimonials" },
// ];

// export default function Header() {
//   const isMobile = useIsMobile();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 max-w-screen-2xl items-center">
//         <div className="flex items-center flex-1">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <Building2 className="h-6 w-6 text-primary" />
//             <span className="font-bold font-headline text-lg text-primary">
//               Divija Developers
//             </span>
//           </Link>
//           {!isMobile && (
//             <nav className="flex items-center gap-4 text-sm lg:gap-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-foreground/60 transition-colors hover:text-foreground/80"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//           )}
//         </div>
//         <div className="flex items-center">
//           {isMobile ? (
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-6 w-6" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left">
//                 <nav className="grid gap-6 text-lg font-medium">
//                   {navLinks.map((link) => (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       className="text-foreground/60 transition-colors hover:text-foreground/80"
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                   <Button asChild>
//                     <Link href="#contact">Contact Us</Link>
//                   </Button>
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           ) : (
//             <Button asChild>
//               <Link href="#contact">Contact Us</Link>
//             </Button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


// "use client"
// import Link from "next/link";
// import { Building2, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useState } from "react";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-50 w-full flex justify-center border-b border-border/40 bg-secondary ">
//       <div className="container flex  max-w-screen-2xl items-center">
//         <div className="flex justify-between items-center flex-1">
//           <Link href="/" className="mr-6 flex items-center space-x-2 py-4">
//             <Image src={"https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"} alt="logo" sizes="100vw" width={180} height={150} />
//           </Link>
//           <nav className="flex items-center gap-4 font-medium lg:gap-6">
//             <Link
//               href="/#about"
//               className="text-foreground/60 transition-colors hover:text-foreground/80"
//             >
//               About
//             </Link>
//             <Link
//               href="/#projects"
//               className="text-foreground/60 transition-colors hover:text-foreground/80"
//             >
//               Projects
//             </Link>
//             <Link
//               href="/#testimonials"
//               className="text-foreground/60 transition-colors hover:text-foreground/80"
//             >
//               Testimonials
//             </Link>
//           </nav>
//           <Button asChild className="md:show">
//             <Link href="#contact">Contact Us</Link>
//           </Button>
//           <button
//             className="md:hidden text-gray-300"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       {mobileMenuOpen && (
//           <nav className="flex items-center gap-4 font-medium lg:gap-6">
//             <Link
//               href="/#about"
//               className="text-foreground/60 transition-colors hover:text-foreground/80"
//             >
//               About
//             </Link>
//             <Link
//               href="/#projects"
//               className="text-foreground/60 transition-colors hover:text-foreground/80"
//             >
//               Projects
//             </Link>
//             <Link
//               href="/#testimonials"
//               className="text-foreground/60 transition-colors hover:text-foreground/80"
//             >
//               Testimonials
//             </Link>
//           </nav>
//         )}
//     </header>
//   );
// }

