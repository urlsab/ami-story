import { useScrollAnimation } from '../hooks/useScrollAnimation';

type ReelItem =
  | { type: 'reel'; code: string }
  | { type: 'story'; url: string };

const reels: ReelItem[] = [
  { type: 'reel', code: 'DWhCYnTkviK' },
  { type: 'story', url: 'https://www.instagram.com/stories/ami_karavani/3883242048011295924?utm_source=ig_story_item_share&igsh=Z2loZnB1bHBtc2Mw' },
  { type: 'reel', code: 'DWJ7M8ngCiH' },
];

export default function Videos() {
  const ref = useScrollAnimation();

  return (
    <section
      id="videos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-14 relative bg-sky-900 bg-cover bg-center bg-no-repeat scroll-mt-20"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-sky-950/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            הפודקאסט - <span className="gradient-text">חלק 2</span>
          </h2>
        </div>

        {/* Main video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/eHY_CFCJR0k?rel=0&modestbranding=1"
                title="עמי-חי | סיפורה של בחירה"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        {/* Reels grid */}
        <div className="mt-14">
          <h3 className="text-xl font-bold text-white text-center mb-8">קטעים נוספים</h3>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {reels.map((item, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md bg-black"
                style={{ aspectRatio: '9 / 16' }}
              >
                {item.type === 'reel' ? (
                  <iframe
                    src={`https://www.instagram.com/reel/${item.code}/embed/`}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-purple-900 to-pink-800 hover:from-purple-800 hover:to-pink-700 transition-colors"
                  >
                    <svg width={40} height={40} viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                    <span className="text-white font-bold text-sm text-center px-2">לחצו לצפייה בסטורי</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}
