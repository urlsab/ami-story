import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Lightbulb, Star } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    title: 'מסע אמיתי',
    desc: 'סיפור חיים אמיתי של התמודדות עם מחלה קשה ואירוע רפואי משמעותי',
  },
  {
    icon: Lightbulb,
    title: 'תובנות עמוקות',
    desc: 'תובנות על חיים, בחירות, פרספקטיבה והכוח שיש בנו לשנות כיוון',
  },
  {
    icon: Star,
    title: 'השראה לפעולה',
    desc: 'הרצאה שמותירת אנשים עם כלים ומוטיבציה לשנות את חייהם',
  },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3321796/pexels-photo-3321796.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="עמי-חי מרצה"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 text-white text-center">
                  <p className="text-lg font-bold">"כל בחירה מעצבת מציאות"</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-50 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              אודות עמי-חי
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mt-3 mb-6 leading-tight">
              סיפור שמשנה{' '}
              <span className="gradient-text">את כל מה שחשבת שאתה יודע</span>
            </h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                עמי-חי הוא איש פשוט שעבר מסע יוצא דופן. מחלה קשה, ניתוח גדול, ורגעים שבהם כל מה שנשאר הוא הבחירה – איך מתמודדים, מה מרגישים, ואיפה מוצאים את הכוח להמשיך.
              </p>
              <p>
                מאותם רגעים קריטיים צמחו תובנות שמשנות חיים – על מה שחשוב באמת, על הכוח שיש בנו, ועל היכולת של כל אחד לבחור את הסיפור שהוא מספר לעצמו.
              </p>
              <p className="font-medium text-stone-800">
                כיום עמי-חי מביא את הסיפור הזה לקהלים ברחבי הארץ – ומשאיר כל מי שנוכח עם משהו שלא ישכח.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                    <Icon className="text-amber-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">{title}</h3>
                    <p className="text-stone-500 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
