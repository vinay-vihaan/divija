import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
// import Projects from '@/components/projects';
import Showcase from '@/components/showcase';
import Stats from '@/components/stats';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import { getHomePage, getProjects } from '@/lib/api';
import Projects from '@/components/projects';
import Cmdmessage from '@/components/cmdmessage';


export default async function Home() {
  const projects = await getProjects();
  const homepage = await getHomePage();
  const heroSection = homepage?.acf?.hero_section;
  const stats = homepage?.acf?.stats;
  const cmdMessage = homepage?.acf?.cmd_message;
  const aboutSection = homepage?.acf?.about_section;
  const whychoooseus = homepage?.acf?.why_chooose_us;
  const testimonials = homepage?.acf?.testimonials;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* <Header /> */}
      <main className="flex-grow">
        <Hero heroSection={heroSection} />
        <About aboutSection={aboutSection} />
        <Stats />
        <Cmdmessage cmdMessage={cmdMessage} />
        <Projects projects={projects} />
        {/* <Showcase projects={projects} /> */}
        <WhyChooseUs whychoooseus={whychoooseus} />

        <Testimonials testimonials={testimonials} />

        <Contact />
      </main>
      {/* <Footer projects={projects} /> */}
      <WhatsAppButton />
    </div>
  );
}
