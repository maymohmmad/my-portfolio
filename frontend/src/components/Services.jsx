import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {


    const { isArabic } = useLanguage();
    const SERVICES = [
        {
            n: "01",
            // icon: Globe,
            titleAr: "تطوير تطبيقات الويب",
            titleEn: "Web Development",
            subAr: "من الفكرة إلى الإطلاق… نبني معًا منتجك الرقمي.",
            subEn: "From idea to launch — building your digital product together.",
            featuresAr: ["تطوير واجهات تفاعلية باستخدام React.js", "بناء تطبيقات Full-Stack", "هيكلية مكونات قابلة للتوسع", "تحسين الأداء وتجربة المستخدم"],
            featuresEn: ["Interactive UI with React.js", "Full-Stack applications", "Scalable component architecture", "Performance optimization"],
        },
        {
            n: "02",
            // icon: Layers,
            titleAr: "بناء المنصات الرقمية",
            titleEn: "Digital Platforms",
            subAr: "منصات مصممة لحل مشاكل حقيقية وخدمة المجتمعات.",
            subEn: "Platforms designed to solve real problems and serve communities.",
            featuresAr: ["تحليل الفكرة والمتطلبات", "تصميم تجربة المستخدم", "بناء أنظمة متعددة المستخدمين", "إدارة البيانات والعمليات"],
            featuresEn: ["Requirements analysis", "User-centered design", "Multi-role systems", "Data & workflow management"],
        },
        {
            n: "03",
            // icon: Palette,
            titleAr: "تصميم وتطوير الواجهات",
            titleEn: "UI Implementation & Frontend",
            subAr: "تحويل التصاميم إلى تجارب رقمية جذابة وسهلة الاستخدام.",
            subEn: "Turning designs into engaging, easy-to-use digital experiences.",
            featuresAr: ["تحويل Figma إلى كود", "تصميم Responsive", "مكوّنات قابلة لإعادة الاستخدام", "تحسين تجربة المستخدم"],
            featuresEn: ["Figma to React", "Responsive interfaces", "Reusable components", "UX improvements"],
        },
        {
            n: "04",
            //icon: BrainCircuit,
            titleAr: "حلول الذكاء الاصطناعي والابتكار",
            titleEn: "AI & Digital Innovation",
            subAr: "استكشاف ودمج تقنيات الذكاء الاصطناعي لجعل المنتجات أكثر ذكاءً.",
            subEn: "Exploring AI integration to make digital products smarter and more efficient.",
            featuresAr: ["دمج أدوات AI في التطبيقات", "أفكار أتمتة ذكية", "حلول تعتمد على AI لتحسين تجربة المستخدم"],
            featuresEn: ["AI-powered features", "Automation ideas", "AI-driven UX improvements"],
        },
        {
            n: "05",
            //icon: Compass,
            titleAr: "استشارات تقنية وتطوير الأفكار",
            titleEn: "Digital Product Consulting",
            subAr: "مساعدة أصحاب الأفكار على تحويلها إلى خطط ومنتجات رقمية واضحة.",
            subEn: "Helping ideas become clear, structured digital products.",
            featuresAr: ["تحليل الفكرة", "اقتراح التقنيات المناسبة", "تحديد مراحل البناء", "تحسين تجربة المنتج"],
            featuresEn: ["Idea analysis", "Technology selection", "Product planning", "Digital strategy"],
        },
    ];

    return (
        <section >
            {/**heroServices 
 <div className="absolute left-100 end-40 h-[32rem] w-[32rem] rounded-full bg-signal/20 blur-[160px]" />
<div className="absolute left-250 -top-10 start-20 h-[26rem] w-[26rem] rounded-full bg-cyan/10 blur-[130px]" />
          */}
            <section className="relative overflow-hidden mt-30">

                   <div className="absolute inset-0 grid-field opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />


                <div className="absolute inset-0 grid-field opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
                <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-16 text-center">

                    <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-ink">
                        {isArabic ? "ماذا أستطيع أن أبني لك؟" : "What Can I Build For You?"}
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-ink-dim text-lg">
                        {isArabic ? <p><span className='text-cyan'>  التكنولوجيا وسيلة </span>والأثر هو الهدف .</p> : <p><span className='text-cyan'>  Technology is a tool.  </span> Impact is the goal.  .</p>}
                    </p>

                </div>
            </section>


            {/**services */}
            <section className=" relative mt-10 ">
                <div className=" mx-auto max-w-7xl px-5 md:px-4 py-12 mb-7">
                    {SERVICES.map((s) => (
                        <>

                            <div className="border border-line rounded-2xl bg-abyss  mx-auto max-w-7xl px-5 md:px-4 py-12 mb-7 hover:bg-surface">

                                <span className="p-3 rounded-xl bg-surface-2 text-signal-2 group-hover:text-cyan group-hover:bg-signal/10 transition-colors">
                                    {s.n}
                                </span>

                                <span className="font-display text-2xl text-signal-2"> {isArabic ? s.titleAr : s.titleEn}</span>
                                <p className="mt-4 font-display text-2xl leading-snug text-ink">
                                    {isArabic
                                        ? s.subAr
                                        : s.subEn}

                                </p>

                                <ul className="mt-5 ">
                                    {(isArabic ? s.featuresAr : s.featuresEn).map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-ink-dim">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                            </div>



                        </>
                    ))}




                </div>


            </section>

            <section className="bg-abyss">
                <div className="mx-auto max-w-2xl px-5 md:px-8 py-20 text-center">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                        {isArabic ? "عندك مشروع بالبال؟" : "Have a project in mind?"}
                    </h2>
                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 font-display font-semibold px-8 py-4 rounded-full bg-signal text-white hover:bg-signal-2 transition-colors shadow-[0_0_30px_-6px_rgba(61,107,255,0.8)]"
                    >
                        {isArabic ? "لنتحدث" : "Let's Talk"}
                    </Link>
                </div>
            </section>


        </section >
    );
}

export default Services;
