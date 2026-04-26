import { useScrollAnimation } from '../hooks/useScrollAnimation';
import aboutImg from '../Assets/tell 2.jpg';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-sky-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="עמי-חי מרצה"
                className="w-full h-[500px] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-sky-800/40 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-800/30 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-6 leading-tight">
              הבחירה
            </h2>
            <div className="space-y-6 text-sky-100 text-lg leading-relaxed">
              <p>
                אירועים כאלה מטלטלים את כל העולמות של האדם. העולם הפנימי, האישי, המשפחתי, הכלכלי. ואני מוצא את עצמי בצומת דרכים שאני לא ממש מכיר. אני מוצא את עצמי, האדם העוצמתי שקיבל החלטות בשביל לא מעט אנשים – ללא עצמאות בסיסית ובתלות כמעט מוחלטת בסובבים אותו. אני נמצא בבת אחת במקום מאוד נמוך שעלול להוביל ח"ו למקומות חשוכים. לשמחתי קיבלתי החלטה מודעת לבחור בדרך החיים ובמקום לשאול למה אני מחליט לשאול למה. היה לי ברור שיש כאן מסר. אפשרות להבין. אפשרות לתקן. הזדמנות לשנות ולהשתנות.
              </p>
              <div>
                <p className="font-bold text-white text-xl mb-2">המסר</p>
                <p>
                  בשיחה פתוחה מלב אל לב אני פורס בפניכם סיפור אישי ללא מסיכות הנוגע בכל פינה בחיים של כל אחד מאיתנו, ועל הכוחות שנותנים לנו את היכולת לראות את ההזדמנות שיש בקשיים המונחים לפתחינו — אמונה, משפחה, קהילה, ערכים וכלים שרכשנו במשך השנים.
                </p>
              </div>
            </div>

            {/* Highlights removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
