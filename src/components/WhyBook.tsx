import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Zap, Eye, Users, ArrowUpRight, Shield, Sparkles } from 'lucide-react';

const points = [
  {
    icon: Zap,
    title: 'עוצמה רגשית',
    desc: 'הרצאה שמגעת לרגשות העמוקים ביותר ומשאירה חותם בלב',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Eye,
    title: 'שינוי פרספקטיבה',
    desc: 'רואים את החיים אחרת – מה שנדמה לרוחב לפתע נראה גבוה',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Users,
    title: 'חיבור קהל',
    desc: 'עמי-חי מדבר מהלב אל הלב – הקהל נמשך ומזדהה באופן מיידי',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: ArrowUpRight,
    title: 'מוטיבציה לפעולה',
    desc: 'המשתתפים יוצאים עם רצון ואנרגיה לשנות ולצמוח',
    color: 'bg-stone-100 text-stone-700',
  },
  {
    icon: Shield,
    title: 'מסר אותנטי',
    desc: 'לא סיסמאות – סיפור אמיתי שמדבר אל כל אחד ואחד',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: Sparkles,
    title: 'רושם בלתי נשכח',
    desc: 'שנים אחרי ההרצאה, המשתתפים עדיין זוכרים ומספרים',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function WhyBook() {
  const ref = useScrollAnimation();

  return (
    <section
      id="why"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            למה כדאי להזמין
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mt-3 mb-4">
            מה הופך את ההרצאה הזו{' '}
            <span className="gradient-text">למיוחדת</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            זו לא עוד הרצאת מוטיבציה. זהו מפגש אנושי שמשנה את הדרך שבה אנחנו רואים את עצמנו ואת החיים.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100 group"
            >
              <div className={`w-13 h-13 w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon size={26} />
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-2">{title}</h3>
              <p className="text-stone-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span>בואו נדבר על ההרצאה</span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
