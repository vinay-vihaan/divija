import { Building2, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const projects = [
  { name: "Azure Heights", slug: "/projects/azure-heights" },
  { name: "Veridian Villas", slug: "#" },
  { name: "The Grand Canal", slug: "#" },
  { name: "Solstice Towers", slug: "#" },
];

const usefulLinks = [
  { name: "About", slug: "#about" },
  { name: "Projects", slug: "#projects" },
  { name: "Showcase", slug: "#showcase" },
  { name: "Testimonials", slug: "#testimonials" },
  { name: "Contact", slug: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl text-primary">Divija Developers</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-4">
              Building tomorrow's landmarks, today.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            </div>
          </div>
          
          {/* Projects Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link href={project.slug} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {project.name}
                  </Link>
                </li>
              ))}
                <li>
                  <Link href="#projects" className="text-sm font-semibold text-primary hover:underline transition-colors">
                    View All
                  </Link>
                </li>
            </ul>
          </div>
          
          {/* Useful Links Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.slug} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary"/>
                <span className="text-sm text-muted-foreground">contact@divijadevelopers.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary"/>
                <span className="text-sm text-muted-foreground">(123) 456-7890</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Divija Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
