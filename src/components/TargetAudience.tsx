import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Building2, GraduationCap, Users as Users2, BookOpen, Baby, Shield, Heart } from 'lucide-react';

const audiences = [
  { icon: Building2, label: 'צוותי עבודה ועובדים', desc: 'חיזוק מורל, מוטיבציה ותחושת שייכות' },
  { icon: GraduationCap, label: 'צוותי הוראה וחינוך', desc: 'השראה למחנכים שמעצבים דורות' },
  { icon: Users2, label: 'קהילות ומרכזים קהילתיים', desc: 'אירועים שמחברים ומחזקים קהילה' },
  { icon: BookOpen, label: 'סטודנטים וצעירים', desc: 'פתיחת ראש ובניית חוסן לדרך' },
  { icon: Baby, label: 'הורים', desc: 'כלים לחיים ולגידול ילדים עם ערכים' },
  { icon: Shield, label: 'מכינות קדם-צבאיות', desc: 'חיזוק ועצמה לקראת שירות משמעותי' },
  { icon: Heart, label: 'קהל בוגר ומבוגר', desc: 'השראה ומשמעות בכל גיל וכל שלב' },
];

export default function TargetAudience() {
  const ref = useScrollAnimation();

  return (
    <section
      id="audience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            הקהל המתאים
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-4">
            מי יכול{' '}
            <span className="gradient-text">להרוויח מההרצאה?</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            הסיפור של עמי-חי רלוונטי לכולם – כי כולנו בוחרים, כולנו מתמודדים, וכולנו זקוקים לתזכורת על מה שחשוב.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {audiences.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group bg-stone-800/60 hover:bg-amber-500 border border-stone-700/50 hover:border-amber-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                <Icon className="text-amber-400 group-hover:text-white" size={24} />
              </div>
              <h3 className="font-bold text-white text-base mb-1 group-hover:text-white">{label}</h3>
              <p className="text-stone-400 group-hover:text-white/80 text-sm transition-colors">{desc}</p>
            </div>
          ))}

          {/* Extra card - custom */}
          <div className="group bg-amber-500/10 border-2 border-dashed border-amber-500/40 hover:border-amber-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1">
            <p className="text-amber-400 font-semibold text-base mb-2">לא בטוח שזה מתאים?</p>
            <p className="text-stone-400 text-sm mb-4">צור קשר ונמצא יחד את הפורמט המושלם</p>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-sm px-5 py-2 rounded-full transition-colors"
            >
              דבר איתנו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
