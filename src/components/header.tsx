"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Reusable link for the mobile sheet that closes the menu on click
  const MobileLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="text-foreground/60 transition-colors hover:text-foreground/80"
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white px-4">
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"
            alt="Divija logo"
            width={180}
            height={150}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#testimonials">Testimonials</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/#contact">Contact&nbsp;Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <VisuallyHidden>
              <SheetTitle>Main menu</SheetTitle>
            </VisuallyHidden>
            <nav className="grid gap-6 text-lg font-medium">
              <MobileLink href="/">Home</MobileLink>
              <MobileLink href="/#about">About</MobileLink>
              <MobileLink href="/#projects">Projects</MobileLink>
              <MobileLink href="/#testimonials">Testimonials</MobileLink>
              <MobileLink href="/gallery">Gallery</MobileLink>
              <Button asChild>
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Contact&nbsp;Us
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-foreground/60 transition-colors hover:text-foreground/80"
    >
      {children}
    </Link>
  );
}

