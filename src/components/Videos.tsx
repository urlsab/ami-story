import { useScrollAnimation } from '../hooks/useScrollAnimation';
import reel6 from '../Assets/6.mp4';
import reel9 from '../Assets/9.mp4';

const reels = [reel6, reel9];

export default function Videos() {
  const ref = useScrollAnimation();

  return (
    <section
      id="videos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-sky-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            תנו לסיפור{' '}
            <span className="gradient-text">לדבר</span>
          </h2>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto">
            כמה דקות שמשנות הכל. צפו בהרצאה וחוו בעצמכם את העוצמה
          </p>
        </div>

        {/* Main video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/43RyJqatSzQ?rel=0&modestbranding=1"
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
            {reels.map((src, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md bg-black"
                style={{ aspectRatio: '9 / 16' }}
              >
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}
