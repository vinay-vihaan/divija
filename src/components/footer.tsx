import { Building2, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import FooterResources from "./footer-resources";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl text-primary">EstateView</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building tomorrow's landmarks, today.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <FooterResources />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EstateView. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
