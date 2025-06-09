import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}