import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Showcase from '@/components/showcase';
import Stats from '@/components/stats';
import WhyChooseUs from '@/components/why-choose-us';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Showcase />
        <WhyChooseUs />
        <Stats />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
