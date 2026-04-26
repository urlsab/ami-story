import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Headphones, ExternalLink } from 'lucide-react';

export default function Podcast() {
  const ref = useScrollAnimation();

  return (
    <section
      id="podcast"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-stone-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="פודקאסט עמי-חי"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-stone-900/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-sky-500/20 border-2 border-sky-400/50 flex items-center justify-center">
                  <Headphones className="text-sky-400" size={36} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                הקשיבו לסיפור{' '}
                <span className="gradient-text">בכל מקום</span>
              </h2>


              {/* Episode list placeholder */}
              <div className="space-y-3 mb-8">
                {[
                  'פרק 1 – כשהחיים נעצרים: מה שלמדתי',
                  'פרק 2 – הבחירה שמגדירה הכל',
                  'פרק 3 – לחזור חזק יותר',
                ].map((episode) => (
                  <div
                    key={episode}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl px-4 py-3 transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 group-hover:bg-sky-500/40 flex items-center justify-center flex-shrink-0 transition-colors">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-sky-400 mr-[-2px]" />
                    </div>
                    <span className="text-stone-300 group-hover:text-white text-sm font-medium transition-colors">
                      {episode}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@%D7%A2%D7%9E%D7%A0%D7%95%D7%90%D7%9C%D7%A7%D7%A8%D7%95%D7%90%D7%A0%D7%99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-stone-900 font-bold px-7 py-3 rounded-full transition-all duration-200 self-start"
              >
                <ExternalLink size={18} />
                האזנה לפודקאסט
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
