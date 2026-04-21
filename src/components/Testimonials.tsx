import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'הסיפור שלו נותן המון פרספקטיבה על מה שחשוב באמת בחיים',
    author: 'אסתי בוקובסקי',
    role: 'מנהלת מרכז קהילתי',
    featured: true,
  },
  {
    quote: 'הסיפור של עמי היה מעורר השראה ופתח לב',
    author: 'משתתף מהרצאה',
    role: 'צוות עובדים',
    featured: false,
  },
  {
    quote: 'אדם מעורר השראה באמת',
    author: 'משתתפת',
    role: 'קהל הרצאה',
    featured: false,
  },
  {
    quote: 'הרצאה מרתקת ומעוררת השראה',
    author: 'מנהל מוסד חינוכי',
    role: 'מוסד חינוכי',
    featured: false,
  },
  {
    quote: 'עמי הוא מרצה נעים, קשוב ואדיב שמתחבר לכולם',
    author: 'מנהלת בית ספר',
    role: 'צוות מחנכים',
    featured: false,
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            מה אומרים עלינו
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mt-3 mb-4">
            המלצות שמדברות{' '}
            <span className="gradient-text">בעצמן</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            מאות אנשים שחוו את ההרצאה ומשתפים בחוויה שלהם
          </p>
        </div>

        {/* Featured testimonial */}
        {testimonials
          .filter((t) => t.featured)
          .map((t) => (
            <div
              key={t.author}
              className="relative bg-stone-900 text-white rounded-3xl p-10 mb-8 max-w-4xl mx-auto shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Quote className="text-amber-400 mb-5 opacity-80" size={48} />
                <p className="text-2xl sm:text-3xl font-light leading-relaxed mb-8 max-w-2xl">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-lg text-amber-400">{t.author}</p>
                  <p className="text-stone-400 text-sm mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}

        {/* Regular testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials
            .filter((t) => !t.featured)
            .map((t) => (
              <div
                key={t.quote}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-amber-100"
              >
                <Quote className="text-amber-300 mb-3" size={28} />
                <p className="text-stone-700 leading-relaxed text-base mb-5 font-medium">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-4 border-t border-stone-100">
                  <p className="font-bold text-stone-900 text-sm">{t.author}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Stars row */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-amber-200 px-6 py-3 rounded-full shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-stone-700 font-semibold text-sm">4.9 / 5 ממוצע מהמשתתפים</span>
          </div>
        </div>
      </div>
    </section>
  );
}
