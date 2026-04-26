import { useEffect, useRef } from 'react';
import { Calendar, Star, Moon } from 'lucide-react';

const elulText = `לקראת חודש אלול, אנו מציעים לכם שיחת
התעוררות מיוחדת במינה, המעוררת את הלב,
הנשמה והמחשבה.
סיפור אישי ומטלטל הטומן בחובו התמודדות עם
משברים לא פשוטים מצד אחד, ומצד שני את
היכולת לבחור ולראות את הדברים בצורה שונה,
מתוך אמונה גדולה ומתוך היכולת לראות את
הדברים בעיניים טובות ואופטימיות.`;

export default function UpcomingEvents() {
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const elulRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      headerRef.current,
      card1Ref.current,
      card2Ref.current,
      elulRef.current,
      ctaRef.current,
    ].filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          } else {
            entry.target.classList.remove('scroll-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" className="relative py-28 bg-sky-900 overflow-hidden">
      {/* Atmospheric background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/6 rounded-full blur-3xl" />
        <div className="absolute top-10 left-0 w-64 h-64 bg-amber-400/4 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="scroll-fade text-center mb-16">

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 mb-5 leading-tight">
            אירועים <span className="text-sky-400">עתידיים</span>
          </h2>

        </div>

        {/* Cards row */}
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="scroll-fade bg-stone-900 rounded-2xl p-8 border border-stone-800 hover:border-sky-500/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                <Calendar className="text-sky-400" size={22} />
              </div>
              <h3 className="text-white font-bold text-xl">אירועים קרובים</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-sky-500 flex-shrink-0" />
                <div>
                  <p className="text-stone-100 font-semibold text-base leading-snug">
                    ימי השתלמות והיערכות לצוותי הוראה
                  </p>
                  <p className="text-stone-400 text-sm mt-1.5">סוף יוני וסוף החופש הגדול</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="scroll-fade scroll-fade-delay bg-stone-900 rounded-2xl p-8 border border-stone-800 hover:border-amber-500/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                <Star className="text-amber-400" size={22} />
              </div>
              <h3 className="text-white font-bold text-xl">תוכן לתקופות מיוחדות</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-stone-100 font-semibold text-base leading-snug">
                    שיחות לקראת אלול והימים הנוראים
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Dramatic Elul feature block */}
        <div
          ref={elulRef}
          className="scroll-fade-slow relative rounded-3xl p-10 sm:p-14 mb-14 overflow-hidden border border-amber-500/20 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #1c1917 0%, #1c1917 55%, rgba(120,53,15,0.25) 100%)' }}
        >
          {/* Background moon watermark */}
          <Moon
            size={220}
            className="absolute -bottom-8 -left-8 text-amber-300 opacity-5 pointer-events-none"
          />
          {/* Glow pulse */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 80px rgba(251,191,36,0.04)' }}
          />

          <div className="relative text-center">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-8 border border-amber-500/30 rounded-full px-5 py-1.5">
              שיחות לקראת אלול
            </span>
            <p
              dir="rtl"
              className="text-stone-100 text-xl sm:text-2xl md:text-3xl font-medium leading-[2.2] whitespace-pre-line"
            >
              {elulText}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="scroll-fade text-center">
          <a
            href="#contact"
            className="inline-block bg-sky-500 hover:bg-sky-400 text-stone-900 font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            הזמינו הרצאה לאירוע שלכם
          </a>
        </div>
      </div>
    </section>
  );
}
