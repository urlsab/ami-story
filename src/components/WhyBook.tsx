import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';

export default function WhyBook() {
  const ref = useScrollAnimation();

  return (
    <section
      id="why"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-6">
            אופי <span className="gradient-text">השיחה</span>
          </h2>
        </div>

        {/* Main text block */}
        <div className="max-w-3xl mx-auto">
          <p className="text-stone-200 text-xl sm:text-2xl leading-relaxed text-center" dir="rtl">
            השיחות שהעברתי עד היום לקהלים שונים ומגוונים התאפיינו בעיקר ברגש עז שעבר ממני לקהל שהגיע ומהם אליי בחזרה. בכל שיחה אני מוצא את עצמי בסוף השיחה עומד ומדבר עם לא מעט אנשים שמשתפים, פורקים ונותנים את התחושה המדהימה שהצלחתי לגעת בהם.
          </p>

          {/* Target audience */}
          <div className="mt-12 text-center">
            <p className="text-white font-bold text-xl mb-6">
              השיחה מתאימה למגוון קהלים
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['צוותי עבודה', 'צוותי חינוך', 'קהילות', 'סטודנטים', 'הורים', 'מכינות קדם-צבאיות'].map((item) => (
                <span
                  key={item}
                  className="bg-stone-800 border border-stone-700 text-sky-300 font-medium text-base px-5 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="tel:0525990097"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/50 hover:-translate-y-1"
          >
            <span>צרו קשר</span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
