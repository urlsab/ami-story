import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';
import estiImg from '../Assets/esti recommand.jpg';

const testimonials = [
  {
    quote: 'הסיפור שלו נותן המון פרספקטיבה על מה שחשוב באמת בחיים',
    author: 'אסתי בוקובסקי',
    role: 'משתתף מההרצאה',
    featured: true,
  },
  {
    quote: 'הסיפור של עמי היה מעורר השראה ופתח לב',
    author: 'משתתף מההרצאה',
    
    featured: false,
  },
  {
    quote: 'אדם מעורר השראה באמת',
    author: 'משתתף מההרצאה',
    
    featured: false,
  },
  {
    quote: 'הרצאה מרתקת ומעוררת השראה',
    author: 'משתתף מההרצאה',
    
    featured: false,
  },
  {
    quote: 'עמי הוא מרצה נעים, קשוב ואדיב שמתחבר לכולם',
    author: 'משתתף מההרצאה',
    
    featured: false,
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            המלצות שמדברות{' '}
            <span className="gradient-text">בעצמן</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            מאות אנשים שחוו את ההרצאה ומשתפים בחוויה שלהם
          </p>
        </div>

        {/* Featured testimonial */}
        {testimonials
          .filter((t) => t.featured)
          .map((t) => (
            <div
              key={t.author}
              className="relative bg-stone-900 text-white rounded-3xl p-10 mb-8 max-w-4xl mx-auto shadow-2xl overflow-hidden border-2 border-sky-500"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full -translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Quote className="text-sky-400 mb-5 opacity-80" size={48} />
                <p className="text-2xl sm:text-3xl font-light leading-relaxed mb-8 max-w-2xl">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-lg text-sky-400">{t.author}</p>
                  <p className="text-stone-400 text-sm mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}

        {/* Esti recommendation image */}
        <div className="flex justify-center mb-8">
          <img
            src={estiImg}
            alt="המלצה של אסתי בוקובסקי"
            className="rounded-2xl shadow-xl max-w-sm w-full"
            loading="lazy"
          />
        </div>

        {/* Regular testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials
            .filter((t) => !t.featured)
            .map((t) => (
              <div
                key={t.quote}
                className="bg-stone-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-sky-500"
              >
                <Quote className="text-sky-300 mb-3" size={28} />
                <p className="text-stone-200 leading-relaxed text-base mb-5 font-medium">
                  "{t.quote}"
                </p>
                <div className="mt-auto pt-4 border-t border-stone-600">
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
        </div>


      </div>
    </section>
  );
}
