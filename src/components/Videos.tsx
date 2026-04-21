import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Play } from 'lucide-react';

export default function Videos() {
  const ref = useScrollAnimation();

  return (
    <section
      id="videos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            צפה בפעולה
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 mt-3 mb-4">
            תנו לסיפור{' '}
            <span className="gradient-text">לדבר</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
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
          <div className="mt-5 text-center">
            <p className="text-stone-600 font-medium text-lg">עמי-חי | סיפורה של בחירה</p>
            <p className="text-stone-400 text-sm mt-1">הרצאת השראה על חיים, בחירה ומשמעות</p>
          </div>
        </div>

        {/* More videos placeholder */}
        <div className="mt-14">
          <h3 className="text-xl font-bold text-stone-800 text-center mb-8">קטעים נוספים</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'ריל – רגע מרגש מההרצאה',
                thumb: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500',
              },
              {
                title: 'שאלות ותשובות עם הקהל',
                thumb: 'https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=500',
              },
              {
                title: 'תגובות מרגשות מהשתתפים',
                thumb: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=500',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/50 group-hover:bg-stone-900/40 transition-colors flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/90 group-hover:bg-amber-400 flex items-center justify-center mb-3 transition-colors shadow-lg">
                    <Play className="text-white mr-[-2px]" size={24} fill="white" />
                  </div>
                  <p className="text-white font-semibold text-sm text-center px-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm mt-6">
            * ניתן להוסיף קישורים לסרטונים נוספים לפי בקשה
          </p>
        </div>
      </div>
    </section>
  );
}
