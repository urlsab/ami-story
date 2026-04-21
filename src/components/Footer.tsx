import { Phone, Mail, MessageCircle, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-stone-800">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <p className="text-amber-400 font-black text-2xl">עמי-חי</p>
              <p className="text-stone-500 text-sm mt-1">סיפורה של בחירה</p>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              הרצאות השראה מרגשות ומשפיעות. סיפור אמיתי שמשנה פרספקטיבה ומוטיב לפעולה.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-500 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="text-stone-400 group-hover:text-stone-900" size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-amber-500 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="text-stone-400 group-hover:text-stone-900" size={16} />
              </a>
              <a
                href="https://wa.me/9720525990097"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-green-600 flex items-center justify-center transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="text-stone-400 group-hover:text-white" size={16} />
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
                    className="text-stone-500 hover:text-amber-400 text-sm transition-colors"
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
                  <span className="text-stone-500 text-sm">{item}</span>
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
                  className="flex items-center gap-3 text-stone-500 hover:text-amber-400 text-sm transition-colors group"
                >
                  <Phone size={15} className="text-amber-500 flex-shrink-0" />
                  052-5990097
                </a>
              </li>
              <li>
                <a
                  href="tel:0545637128"
                  className="flex items-center gap-3 text-stone-500 hover:text-amber-400 text-sm transition-colors group"
                >
                  <Phone size={15} className="text-amber-500 flex-shrink-0" />
                  054-5637128
                </a>
              </li>
              <li>
                <a
                  href="mailto:amka68@gmail.com"
                  className="flex items-center gap-3 text-stone-500 hover:text-amber-400 text-sm transition-colors group"
                >
                  <Mail size={15} className="text-amber-500 flex-shrink-0" />
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
          <p className="text-stone-600 text-sm flex items-center gap-1">
            © {year} עמי-חי. כל הזכויות שמורות. עוצב באהבה{' '}
            <Heart size={13} className="text-amber-500 fill-amber-500" />
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-600 hover:text-amber-400 text-sm transition-colors">
              תנאי שימוש
            </a>
            <a href="#" className="text-stone-600 hover:text-amber-400 text-sm transition-colors">
              מדיניות פרטיות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
