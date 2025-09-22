import { getProjects } from "@/lib/api";
import { Building2, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { name: "Azure Heights", slug: "/projects/azure-heights" },
  { name: "Veridian Villas", slug: "#" },
  { name: "The Grand Canal", slug: "#" },
  { name: "Solstice Towers", slug: "#" },
];

const usefulLinks = [
  { name: "About", slug: "/#about" },
  { name: "Projects", slug: "/#projects" },
  // { name: "Showcase", slug: "/#showcase" },
  { name: "Testimonials", slug: "/#testimonials" },
  { name: "Contact", slug: "/#contact" },
];


export default async function Footer() {
    const projects = await getProjects();

  return (
    // <footer className="bg-[#040c27ff]">
    //   <div className="container mx-auto px-4 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 lg:gap-8">
    //       {/* About Section */}
    //       <div className="md:col-span-1">
    //         <Link href="/" className="mr-6 flex items-center space-x-2 py-4">
            
    //           <Image src={"https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"} alt="logo" sizes="100vw" width={180} height={150} className="filter invert brightness-0" />
    //         </Link>
    //         <p className="text-white text-sm max-w-xs mb-4">
    //           Building tomorrow's landmarks, today.
    //         </p>
    //         <div className="flex space-x-4">
              
    //           <Link href="#" className="text-white hover:text-primary"><Twitter size={20} /></Link>
    //           <Link href="#" className="text-white hover:text-primary"><Linkedin size={20} /></Link>
    //         </div>
    //       </div>

    //       {/* Projects Section */}
    //       <div>
    //         <h3 className="text-white font-headline text-lg font-semibold mb-4">Projects</h3>
    //         <ul className="space-y-2">
    //           {Array.isArray(projects) && projects?.map((project, index) => (
    //             <li key={index}>
    //               <Link href={`/projects/${project?.slug}`}  className="text-sm text-white hover:text-primary transition-colors">
    //                 {project.title?.rendered}
    //               </Link>
    //             </li>
    //           ))}
    //           <li>
    //             <Link href="/#projects" className="text-sm font-semibold text-primary hover:underline transition-colors">
    //               View All
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Useful Links Section */}
    //       <div>
    //         <h3 className="text-white font-headline text-lg font-semibold mb-4">Useful Links</h3>
    //         <ul className="space-y-2">
    //           {usefulLinks.map((link, index) => (
    //             <li key={index}>
    //               <Link href={link.slug} className="text-sm text-white hover:text-primary transition-colors">
    //                 {link.name}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Contact Info Section */}
    //       <div>
    //         <h3 className="text-white font-headline text-lg font-semibold mb-4">Contact Us</h3>
    //         <ul className="space-y-3">
    //           <li className="flex items-center gap-3">
    //             <Mail size={16} className="text-white" />
    //             <span className="text-sm text-white">info@divijadevelopers.com</span>
    //           </li>
    //           <li className="flex items-center gap-3">
    //             <Phone size={16} className="text-white" />
    //             <span className="text-sm text-white">+91 6301271539</span>
    //           </li>
    //         </ul>
    //       </div>

    //     </div>
    //     <div className="mt-8 pt-8 border-t text-center text-sm text-white">
    //       <p>&copy; {new Date().getFullYear()} Divija Developers. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#040c27ff] pt-60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 lg:gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="mr-6 flex items-center space-x-2 py-4">
            
              <Image src={"https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"} alt="logo" sizes="100vw" width={180} height={150} className="filter invert brightness-0" />
            </Link>
            <p className="text-white text-sm max-w-xs mb-4">
              Building tomorrow's landmarks, today.
            </p>
            <div className="flex space-x-4">
              
              <Link href="#" className="text-white hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="text-white hover:text-primary"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-white font-headline text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {Array.isArray(projects) && projects?.map((project, index) => (
                <li key={index}>
                  <Link href={`/projects/${project?.slug}`}  className="text-sm text-white hover:text-primary transition-colors">
                    {project.title?.rendered}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#projects" className="text-sm font-semibold text-primary hover:underline transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-white font-headline text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.slug} className="text-sm text-white hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-white font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white" />
                <span className="text-sm text-white">info@divijadevelopers.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white" />
                <span className="text-sm text-white">+91 6301271539</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Divija Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}




// import { getProjects } from "@/lib/api";
// import { Building2, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const projects = [
//   { name: "Azure Heights", slug: "/projects/azure-heights" },
//   { name: "Veridian Villas", slug: "#" },
//   { name: "The Grand Canal", slug: "#" },
//   { name: "Solstice Towers", slug: "#" },
// ];

// const usefulLinks = [
//   { name: "About", slug: "/#about" },
//   { name: "Projects", slug: "/#projects" },
//   // { name: "Showcase", slug: "/#showcase" },
//   { name: "Testimonials", slug: "/#testimonials" },
//   { name: "Contact", slug: "/#contact" },
// ];


// export default async function Footer() {
//     const projects = await getProjects();

//   return (
//     <footer className="bg-secondary">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div className="md:col-span-1">
//             <Link href="/" className="mr-6 flex items-center space-x-2 py-4">
            
//               <Image src={"https://divija.vihaandigitals.com/wp-content/uploads/2025/08/divija-logo1-removebg-preview.png"} alt="logo" sizes="100vw" width={180} height={150} />
//             </Link>
//             <p className="text-muted-foreground text-sm max-w-xs mb-4">
//               Building tomorrow's landmarks, today.
//             </p>
//             <div className="flex space-x-4">
              
//               <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
//               <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
//             </div>
//           </div>

//           {/* Projects Section */}
//           <div>
//             <h3 className="font-headline text-lg font-semibold mb-4">Projects</h3>
//             <ul className="space-y-2">
//               {Array.isArray(projects) && projects?.map((project, index) => (
//                 <li key={index}>
//                   <Link href="/#projects"  className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     {project.title?.rendered}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link href="/#projects" className="text-sm font-semibold text-primary hover:underline transition-colors">
//                   View All
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Useful Links Section */}
//           <div>
//             <h3 className="font-headline text-lg font-semibold mb-4">Useful Links</h3>
//             <ul className="space-y-2">
//               {usefulLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.slug} className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info Section */}
//           <div>
//             <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3">
//                 <Mail size={16} className="text-primary" />
//                 <span className="text-sm text-muted-foreground">info@divijadevelopers.com</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={16} className="text-primary" />
//                 <span className="text-sm text-muted-foreground">+91 6301271539</span>
//               </li>
//             </ul>
//           </div>

//         </div>
//         <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} Divija Developers. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
