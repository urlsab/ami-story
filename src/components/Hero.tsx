
import heroImg from '../Assets/tell 1.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/70 to-stone-950/90" />

      {/* Decorative warm glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="animate-fade-in-up delay-100 text-shadow-lg text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          <span className="block">עמי-חי</span>
          <span className="gradient-text block mt-1">סיפורה של בחירה</span>
        </h1>

        <p className="animate-fade-in-up delay-300 text-shadow text-stone-200 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-10">
          סיפור חיים עוצמתי על מחלה, ניתוח, תקומה ובחירה.
          <br className="hidden sm:block" />
          הרצאה שמשנה פרספקטיבה, פותחת לב ומותירת רושם לכל החיים.
        </p>

        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:0525990097"
            className="group bg-sky-500 hover:bg-sky-400 text-stone-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            הזמן הרצאה עכשיו
          </a>
          <a
            href="https://youtu.be/43RyJqatSzQ?si=M__HNHk8IXGvzMkd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            לצפייה בפודקאסט - חלק 1
          </a>
        </div>
      </div>


    </section>
  );
}
