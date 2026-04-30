import { useScrollAnimation } from '../hooks/useScrollAnimation';
import tell1 from '../Assets/tell 1.jpg';
import tell2 from '../Assets/tell 2.jpg';
import tell3 from '../Assets/tell 3.jpg';
import tell4 from '../Assets/tell 4.jpg';

const images = [
  { src: tell1, alt: 'רגע מהמפגש 1' },
  { src: tell2, alt: 'רגע מהמפגש 2' },
  { src: tell3, alt: 'רגע מהמפגש 3' },
  { src: tell4, alt: 'רגע מהמפגש 4' },
];

export default function Gallery() {
  const ref = useScrollAnimation();

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-sky-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            רגעים מן{' '}
            <span className="gradient-text">המפגשים</span>
          </h2>
        </div>

        {/* 2-column responsive grid – natural aspect ratio preserved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {images.map((image, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
