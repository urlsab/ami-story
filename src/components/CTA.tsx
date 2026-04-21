import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-900/80 to-stone-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-medium px-5 py-2 rounded-full mb-6">
          מוכנים לצעד הבא?
        </span>
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
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1"
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

        <p className="text-stone-400 text-sm mt-8">
          זמינים לצוותי עבודה, מוסדות חינוך, קהילות ועוד
        </p>
      </div>
    </section>
  );
}
