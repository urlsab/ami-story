import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, Mail, MessageCircle, Navigation, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'טלפון',
      value: '052-5990097',
      href: 'tel:0525990097',
      sub: '054-5637128',
      subHref: 'tel:0545637128',
    },
    {
      icon: Mail,
      label: 'אימייל',
      value: 'amka68@gmail.com',
      href: 'mailto:amka68@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'שלח הודעה',
      href: 'https://wa.me/9720525990097',
      external: true,
    },
    {
      icon: Navigation,
      label: 'ניווט ב-Waze',
      value: 'פתח ב-Waze',
      href: 'https://waze.com/ul?q=עמי-חי+מרצה',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            צרו קשר
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mt-3 mb-4">
            בואו נדבר{' '}
            <span className="gradient-text">על ההרצאה</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            השאירו פרטים ועמי-חי יחזור אליכם בהקדם. אין מחויבות – רק שיחה
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">הפנייה נשלחה!</h3>
                <p className="text-stone-500">עמי-חי יחזור אליכם בהקדם האפשרי.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-amber-600 hover:text-amber-500 font-medium text-sm"
                >
                  שלח פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-stone-900 mb-6">שלחו הודעה</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">שם מלא *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none px-4 py-3 text-stone-900 transition-all"
                      placeholder="ישראל ישראלי"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">טלפון *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none px-4 py-3 text-stone-900 transition-all"
                      placeholder="050-0000000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">אימייל</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none px-4 py-3 text-stone-900 transition-all"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">פרטים נוספים</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none px-4 py-3 text-stone-900 transition-all resize-none"
                    placeholder="ספרו לנו קצת – עבור מי, מתי, ומה הייתם רוצים להשיג..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  שלח פנייה
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-stone-900 text-white rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-6 text-amber-400">יצירת קשר ישיר</h3>
              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href, sub, subHref, external }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-amber-400" size={18} />
                    </div>
                    <div>
                      <p className="text-stone-400 text-xs mb-1">{label}</p>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-white font-semibold hover:text-amber-400 transition-colors text-sm"
                      >
                        {value}
                      </a>
                      {sub && subHref && (
                        <>
                          <span className="text-stone-600 mx-2">|</span>
                          <a href={subHref} className="text-white font-semibold hover:text-amber-400 transition-colors text-sm">
                            {sub}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/9720525990097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="tel:0525990097"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <Phone size={20} />
                התקשר עכשיו
              </a>
            </div>

            {/* Social */}
            <div className="bg-amber-50 rounded-2xl p-6">
              <p className="font-bold text-stone-800 mb-4">עקבו ברשתות החברתיות</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="text-stone-700" size={20} />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="text-stone-700" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
