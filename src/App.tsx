import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import About from './components/About';
import WhyBook from './components/WhyBook';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full" dir="rtl">
      <Navbar />
      <Hero />
      <IntroSection />
      <About />
      <WhyBook />
      <Videos />
      <Testimonials />
      <Gallery />
      <UpcomingEvents />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
