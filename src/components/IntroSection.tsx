import { useEffect, useRef } from 'react';
import amiImg from '../Assets/ami no bg.png';

export default function IntroSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [imgRef.current, headerRef.current].filter(Boolean) as HTMLElement[];
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
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="py-20 bg-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row: image + title */}
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 mb-14">
          <div ref={imgRef} className="scroll-fade flex-shrink-0 w-48 sm:w-64 md:w-72">
            <img
              src={amiImg}
              alt="עמי קרואני"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
          <div ref={headerRef} className="scroll-fade scroll-fade-delay text-center sm:text-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
              קוראים לי <span className="text-sky-400">עמי קרואני</span>
            </h2>
            <p className="text-stone-300 text-xl leading-relaxed max-w-lg mb-4">
              ויש לי סיפור משנה חיים לספר לכם
            </p>
            <p className="text-stone-400 text-base leading-relaxed max-w-lg" dir="rtl">
              זהו הסיפור האישי שלי. שמי עמנואל (המכונה עמי) קרואני. בן 57, נשוי באושר לאירית. אבא לשישה וסבא לנכדים ב"ה. איש חינוך. למעלה מ-35 שנה בעמדות ניהול — ישיבת בנ"ע בנחלים, ישיבת בנ"ע רעננה, מוסדות 'מגדל אור' של הרב דוד גרוסמן שליט"א, תיכון ישיבתי 'תורה ומדע' בכפר סבא ובישיבה התיכונית 'ראשית חכמה' באלעד.
            </p>
            <p className="text-stone-400 text-base leading-relaxed max-w-lg mt-4" dir="rtl">
              בשנתיים וחצי האחרונות עברתי אירועים רפואיים שטלטלו את עולמי ועולם משפחתי. לפני כשנתיים וחצי חליתי בסרטן המעי הגס וב"ה לאחר טיפולים הבראתי. חזרתי ב"ה לשגרה מבורכת. ולפני כשנה וחצי עברתי אירוע מוחי שפגע בצד ימין ונאלצתי לעבור שיקום ממושך בבית לווינשטיין.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
