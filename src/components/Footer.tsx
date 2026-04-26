import { useState } from 'react';
import { Phone, Mail, MessageCircle, Heart, X } from 'lucide-react';
import catappLogo from '../Assets/catapp-logo.png';

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

type ModalType = 'privacy' | 'terms' | null;

const MODAL_CONTENT: Record<'privacy' | 'terms', { title: string; body: React.ReactNode }> = {
  privacy: {
    title: 'מדיניות פרטיות',
    body: (
      <div className="space-y-5 text-stone-700 text-sm leading-relaxed">
        <p>מדיניות פרטיות זו מתארת כיצד האתר של עמי-חי אוסף, משתמש ומגן על המידע האישי שלך.</p>
        <h3 className="font-bold text-stone-900 text-base">איסוף מידע</h3>
        <p>אנו עשויים לאסוף מידע כגון שם, כתובת אימייל ומספר טלפון אך ורק בעת יצירת קשר מרצון דרך טפסי האתר או בפנייה ישירה.</p>
        <h3 className="font-bold text-stone-900 text-base">שימוש במידע</h3>
        <p>המידע הנאסף משמש אך ורק ליצירת קשר בחזרה אליך בנוגע להרצאות ושירותים, ולא יועבר לצדדים שלישיים לכל מטרה שהיא.</p>
        <h3 className="font-bold text-stone-900 text-base">קבצי עוגיות (Cookies)</h3>
        <p>האתר עשוי להשתמש בקבצי עוגיות לשיפור חוויית הגלישה. ניתן לבטל את השימוש בעוגיות דרך הגדרות הדפדפן שלך.</p>
        <h3 className="font-bold text-stone-900 text-base">אבטחת מידע</h3>
        <p>אנו נוקטים באמצעים סבירים להגנה על המידע האישי שלך מפני גישה בלתי מורשית, שינוי, חשיפה או מחיקה.</p>
        <h3 className="font-bold text-stone-900 text-base">זכות לעיון ומחיקה</h3>
        <p>בכל עת תוכל לפנות אלינו בבקשה לעיין במידע שנשמר אודותיך, לתקנו או למחקו, בכתובת: <a href="mailto:amka68@gmail.com" className="text-sky-600 hover:underline">amka68@gmail.com</a></p>
        <h3 className="font-bold text-stone-900 text-base">שינויים במדיניות</h3>
        <p>אנו שומרים לעצמנו את הזכות לשנות מדיניות פרטיות זו בכל עת. שינויים יפורסמו בעמוד זה.</p>
        <p className="text-stone-400 text-xs">עדכון אחרון: אפריל 2026</p>
      </div>
    ),
  },
  terms: {
    title: 'תנאי שימוש',
    body: (
      <div className="space-y-5 text-stone-700 text-sm leading-relaxed">
        <p>ברוכים הבאים לאתר עמי-חי. השימוש באתר מהווה הסכמה לתנאי השימוש המפורטים להלן.</p>
        <h3 className="font-bold text-stone-900 text-base">זכויות יוצרים</h3>
        <p>כל התכנים באתר זה – לרבות טקסטים, תמונות, סרטונים ועיצוב – הינם רכושו הבלעדי של עמי-חי ומוגנים בזכויות יוצרים. אין להעתיק, לשכפל או להפיץ תכנים אלו ללא אישור מפורש בכתב.</p>
        <h3 className="font-bold text-stone-900 text-base">שימוש מותר</h3>
        <p>מותר לצפות בתכנים לשימוש אישי ולא מסחרי בלבד. כל שימוש מסחרי, הפצה או פרסום מחדש אסורים ללא הסכמה מפורשת.</p>
        <h3 className="font-bold text-stone-900 text-base">הגבלת אחריות</h3>
        <p>המידע המוצג באתר מסופק כמות שהוא. בעל האתר אינו אחראי לכל נזק ישיר או עקיף הנובע מהשימוש באתר או בתכניו.</p>
        <h3 className="font-bold text-stone-900 text-base">קישורים חיצוניים</h3>
        <p>האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו אינם אחראים לתוכן אתרים אלו ואין לראות בקישור משום המלצה.</p>
        <h3 className="font-bold text-stone-900 text-base">שינויים</h3>
        <p>אנו שומרים לעצמנו את הזכות לשנות תנאי שימוש אלו בכל עת. המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה לתנאים המעודכנים.</p>
        <h3 className="font-bold text-stone-900 text-base">יצירת קשר</h3>
        <p>לכל שאלה בנוגע לתנאי שימוש אלו ניתן לפנות אלינו בכתובת: <a href="mailto:amka68@gmail.com" className="text-sky-600 hover:underline">amka68@gmail.com</a></p>
        <p className="text-stone-400 text-xs">עדכון אחרון: אפריל 2026</p>
      </div>
    ),
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <footer className="bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-sky-700">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <p className="text-white font-black text-2xl">עמי-חי</p>
            </div>
            <p className="text-sky-100 text-sm leading-relaxed">
              ברשתות החברתיות
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/9720525990097"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-sky-800 hover:bg-green-600 flex items-center justify-center transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="text-stone-400 group-hover:text-white" size={16} />
              </a>
              <a
                href="https://www.youtube.com/@%D7%A2%D7%9E%D7%A0%D7%95%D7%90%D7%9C%D7%A7%D7%A8%D7%95%D7%90%D7%A0%D7%99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-sky-800 hover:bg-red-600 flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">ניווט מהיר</h4>
            <ul className="space-y-3">
              {[
                ['#about', 'אודות עמי-חי'],
                ['#why', 'למה להזמין'],
                ['#videos', 'הרצאות ורילס'],
                ['#testimonials', 'המלצות'],
                ['#gallery', 'גלריה'],
                ['#contact', 'יצירת קשר'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white hover:text-black text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">קהל יעד</h4>
            <ul className="space-y-3">
              {[
                'צוותי עבודה',
                'צוותי חינוך',
                'קהילות',
                'סטודנטים',
                'הורים',
                'מכינות קדם-צבאיות',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">יצירת קשר</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0525990097"
                  className="flex items-center gap-3 text-white hover:text-black text-sm transition-colors group"
                >
                  <Phone size={15} className="text-white flex-shrink-0" />
                  052-5990097
                </a>
              </li>
              <li>
                <a
                  href="tel:0545637128"
                  className="flex items-center gap-3 text-white hover:text-black text-sm transition-colors group"
                >
                  <Phone size={15} className="text-white flex-shrink-0" />
                  054-5637128
                </a>
              </li>
              <li>
                <a
                  href="mailto:amka68@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-black text-sm transition-colors group"
                >
                  <Mail size={15} className="text-white flex-shrink-0" />
                  amka68@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/9720525990097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700/30 hover:bg-green-600/50 text-green-400 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sky-100 text-sm flex items-center gap-2">
            © {year} עמי-חי. כל הזכויות שמורות. נבנה ע"י{' '}
            <a
              href="https://catapp.it.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <img src={catappLogo} alt="catapp" className="h-5 w-auto" />
            </a>
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveModal('terms')}
              className="text-white hover:text-black text-sm transition-colors"
            >
              תנאי שימוש
            </button>
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-white hover:text-black text-sm transition-colors"
            >
              מדיניות פרטיות
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          />
          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col z-10">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
              <h2 className="text-lg font-black text-stone-900">
                {MODAL_CONTENT[activeModal].title}
              </h2>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors"
                aria-label="סגור"
              >
                <X size={18} className="text-stone-500" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5">
              {MODAL_CONTENT[activeModal].body}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
