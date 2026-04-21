import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'למה להזמין', href: '#why' },
  { label: 'הרצאות', href: '#videos' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'יצירת קשר', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex flex-col leading-tight">
            <span className="text-amber-400 font-bold text-xl tracking-wide">עמי-חי</span>
            <span className="text-stone-300 text-xs font-light">סיפורה של בחירה</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-200 hover:text-amber-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0525990097"
              className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <Phone size={15} />
              <span>הזמן הרצאה</span>
            </a>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="תפריט"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-stone-900/98 backdrop-blur-md px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-stone-200 hover:text-amber-400 font-medium border-b border-stone-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0525990097"
            className="flex items-center justify-center gap-2 mt-4 bg-amber-500 text-stone-900 font-bold py-3 rounded-full"
          >
            <Phone size={16} />
            <span>הזמן הרצאה עכשיו</span>
          </a>
        </div>
      </div>
    </header>
  );
}
