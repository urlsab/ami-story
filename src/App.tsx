import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyBook from './components/WhyBook';
import TargetAudience from './components/TargetAudience';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Podcast from './components/Podcast';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <Hero />
      <About />
      <WhyBook />
      <TargetAudience />
      <Videos />
      <Testimonials />
      <Gallery />
      <Podcast />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
