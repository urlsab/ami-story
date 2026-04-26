import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, Mail, MessageCircle } from 'lucide-react';

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useScrollAnimation();

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
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-sky-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sky-300 font-semibold text-sm uppercase tracking-widest">
            צרו קשר
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            בואו נדבר{' '}
            <span className="gradient-text">על ההרצאה</span>
          </h2>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto">
            השאירו פרטים ועמי-חי יחזור אליכם בהקדם. אין מחויבות – רק שיחה
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-stone-900 text-white rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-6 text-sky-400">יצירת קשר ישיר</h3>
              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href, sub, subHref, external }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-sky-400" size={18} />
                    </div>
                    <div>
                      <p className="text-stone-400 text-xs mb-1">{label}</p>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-white font-semibold hover:text-sky-400 transition-colors text-sm"
                      >
                        {value}
                      </a>
                      {sub && subHref && (
                        <>
                          <span className="text-stone-600 mx-2">|</span>
                          <a href={subHref} className="text-white font-semibold hover:text-sky-400 transition-colors text-sm">
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
                className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-stone-900 font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <Phone size={20} />
                התקשר עכשיו
              </a>
            </div>

            {/* Social section removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
