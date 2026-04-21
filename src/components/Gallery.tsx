import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Camera } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'עמי-חי על הבמה',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'קהל מקשיב',
    span: 'col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'אווירת ההרצאה',
    span: 'col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'שאלות ותשובות',
    span: 'col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'קהל גדול',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'רגע מיוחד',
    span: 'col-span-1',
  },
];

export default function Gallery() {
  const ref = useScrollAnimation();

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Camera size={16} />
            גלריית תמונות
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mt-3 mb-4">
            רגעים מן{' '}
            <span className="gradient-text">המפגשים</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            תמונות מהרצאות, מקהלים שנגעו ורגעים שנחרטו בזיכרון
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className={`${image.span} group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          * ניתן להוסיף תמונות ממוזמנים ומהרצאות ספציפיות
        </p>
      </div>
    </section>
  );
}
