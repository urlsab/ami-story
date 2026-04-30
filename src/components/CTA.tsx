import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  const ref = useScrollAnimation();

  return (
    <section
      id="cta"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 bg-stone-950 relative overflow-hidden"
    >
      {/* Subtle glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/6 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-shadow-lg mb-6 leading-tight">
          הביאו את עמי-חי
          <span className="gradient-text block mt-1">לארגון שלכם</span>
        </h2>
        <p className="text-stone-300 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          הרצאה שתשאיר חותם. צוות שיצא משם שונה. חוויה שלא ישכחו.
          <br className="hidden sm:block" />
          צרו קשר עכשיו – ובואו נבנה יחד משהו מיוחד.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0525990097"
            className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-stone-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-1"
          >
            <Phone size={20} />
            התקשרו עכשיו
          </a>
          <a
            href="https://wa.me/9720525990097"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            שלחו הודעה ב-WhatsApp
          </a>
        </div>

        {/* availability text removed */}
      </div>
    </section>
  );
}
