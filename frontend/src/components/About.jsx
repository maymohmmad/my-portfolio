import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from './Reveal';
import { Circle } from 'lucide-react';
import { Brain, Lightbulb, Rocket, Code2, Server, BrainCircuit, Compass } from "lucide-react";

import edrak from '../assets/edrak.png';
import google from '../assets/google.png';
import harved from '../assets/harved.png';
import hok from '../assets/hok.png';
import al from '../assets/al.png';

const About = () => {

    const { isArabic } = useLanguage();

    const PERSONALITY = [
        {
            icon: Brain,
            en: "Problem Explorer",
            ar: "مستكشفة المشكلات",
            bodyAr: "لا أبدأ بالكود، أبدأ بفهم المشكلة، لأن أفضل الحلول تبدأ بسؤال صحيح.",
            bodyEn: "I don't start with code — I start with understanding the problem. Great solutions begin with the right question.",
        },
        {
            icon: Lightbulb,
            en: "Creative Builder",
            ar: "بانية مبدعة",
            bodyAr: "أبحث دائمًا عن طرق جديدة لدمج الإبداع والتكنولوجيا لصناعة تجارب مختلفة.",
            bodyEn: "I explore new ways to combine creativity and technology to build unique experiences.",
        },
        {
            icon: Rocket,
            en: "Continuous Learner",
            ar: "متعلّمة دائمة",
            bodyAr: "التقنية لا تنتظر أحدًا، لذلك أتعلم باستمرار وأطور مهاراتي لمواكبة المستقبل.",
            bodyEn: "Technology never stops evolving, and neither do I. I keep learning to stay ready for what's next.",
        },
    ];

    const Certifications = [
        {
            icon: al,
            en: "Bachelor's Degree in Information Technology",
            ar: " بكالوريوس تكنولوجيا المعلومات",
            resouceAr: "جامعة الأقصى",
            resouceEn: " Al-Aqsa University",

        },
        {
            icon: harved,
            en: "CS50: Introduction to Computer Science",
            ar: " CS50:مدخل الى علم الحاسوب ",
            resouceAr: "جامعة هارفارد",
            resouceEn: "Harvard University ",

        },
        {
            icon: hok,
            en: "HTML, CSS, JavaScript for Web Developers",
            ar: "   HTML, CSS, JavaScript لتطوير الويب",
            resouceAr: "جامعة الأقصى",
            resouceEn: "  Johns Hopkins University",

        },
        {
            icon: google,
            en: "Digital Marketing",
            ar: " التسويق الرقمي",
            resouceAr: "قوقل ",
            resouceEn: "  Google",

        },
        {
            icon: edrak,
            en: "UI/UX Design",
            ar: "   تصميم وجهات تجربة المستخدم",
            resouceAr: " أدراك",
            resouceEn: "  Edraak",

        },
    ]

    const SKILL_GROUPS = [
        {
            icon: Code2,
            ar: "الواجهات الأمامية",
            en: "Frontend Craft",
            tags: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Design"],
        },
        {
            icon: Server,
            ar: "هندسة الخوادم",
            en: "Backend Engineering",
            tags: ["Laravel", "PHP", "REST APIs", "MVC", "MySQL"],
        },
        {
            icon: BrainCircuit,
            ar: "الابتكار والذكاء الاصطناعي",
            en: "Digital Innovation & AI",
            tags: ["Artificial Intelligence", "Generative AI", "AI Productivity Tools"],
        },
        {
            icon: Compass,
            ar: "عقلية هندسية",
            en: "Engineering Mindset",
            tags: ["Clean Code", "Architecture", "OOP", "Agile"],
        },
    ];
    const FUTURE = [
        { ar: "الذكاء الاصطناعي وتطبيقاته العملية.", en: "Artificial Intelligence and practical AI applications" },
        { ar: "بناء أنظمة ذكية تعتمد على البيانات. ", en: "Building intelligent data-driven systems . " },
        { ar: "تطوير منتجات رقمية ذات أثر اجتماعي واقتصادي.", en: "Creating digital products with social and economic impact ." },
        { ar: " استكشاف تقنيات الويب الحديثة.", en: "Exploring emerging web technologies" },
    ];

    return (
        <div>

            <div className=' rounded-[10px] rounded-ss-[900px] bg-surface pt-50 shadow-[0_0_24px_-4px_rgba(61,107,255,0.7)]'>
                {/**hero about */}
                <section className="relative overflow-hidden  ">
                    <div className="relative mx-auto max-w-5xl px-5 md:px-8 pt-10 pb-14 text-center">
                        <Reveal delay={0.05}>
                            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-ink">
                                {isArabic ? "أنا لا أكتب الكود فقط..." : "I don't just write code..."}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-2 to-cyan">
                                    {isArabic ? "أنا أبني حلولًا لها معنى." : "I build solutions that matter."}
                                </span>
                            </h1>

                            <p className='mt-7  font-body text-ink-dim text-lg  leading-relaxed'>
                                {isArabic ? "  أؤمن أن التكنولوجيا ليست مجرد أدوات و تقنيات , بل وسيلة لتحويل الأفكار الى تجارب  رقمية تخلق أثرا حقيقا في حياة الناس ." : "I believe technology is not just about tools and frameworks, but a way to  transform ideas into digital experiences that create real impact . "}
                            </p>


                        </Reveal>
                    </div>
                </section>

                {/**Who I Am && My Personality */}
                <section className="mx-auto max-w-6xl px-5 md:px-8 pb-7">
                    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
                        <Reveal className="relative rounded-3xl border border-line-strong bg-abyss card-glow p-8 md:p-10 overflow-hidden hover:bg-surface-2 hover:shadow-[0_0_24px_-4px_rgba(61,107,255,0.7)]">


                            <span className="font-display text-xs text-signal-2">{isArabic ? "من أنا ؟ " : "whoami "}</span>
                            <h2 className="mt-3 font-display font-bold text-3xl text-ink">
                                {isArabic ? "أنا مي" : "I'm May"}
                            </h2>
                            <p className="mt-1 font-display text-ink-dim">
                                {isArabic
                                    ? "مطورة Full-Stack ومهتمة بالابتكار الرقمي والذكاء الاصطناعي"
                                    : "Full-Stack Developer, passionate about digital innovation and AI"}
                            </p>
                            <p className="mt-6 text-ink-dim leading-relaxed max-w-md">
                                {isArabic ? (
                                    <>
                                        أعمل على بناء منصات رقمية تجمع بين <span className="text-ink font-medium">الأداء</span>،{" "}
                                        <span className="text-ink font-medium">سهولة الاستخدام</span>، والتصميم{" "}
                                        <span className="text-ink font-medium">المتمحور حول الإنسان</span>. شغفي يمتد إلى فهم
                                        المشكلات الحقيقية وتحويلها إلى حلول{" "}
                                        <span className="text-ink font-medium">قابلة للتوسع والاستمرار</span>.
                                    </>
                                ) : (
                                    <>
                                        I build digital platforms that combine <span className="text-ink font-medium">performance</span>,{" "}
                                        <span className="text-ink font-medium">usability</span>, and{" "}
                                        <span className="text-ink font-medium">human-centered design</span>. My passion extends to
                                        understanding real problems and turning them into{" "}
                                        <span className="text-ink font-medium">scalable solutions</span>.
                                    </>
                                )}
                            </p>
                        </Reveal>

                        <div className="space-y-4">
                            {PERSONALITY.map((p, i) => (
                                <Reveal key={p.en} delay={0.06 * i} className="rounded-2xl border border-line p-5 bg-abyss card-glow flex items-start gap-4 hover:bg-surface-2">
                                    <span className="p-2.5 rounded-xl bg-surface-2 text-cyan shrink-0"> <p.icon size={20} /></span>
                                    <div>
                                        <h3 className="font-display font-semibold text-ink">{isArabic ? p.ar : p.en}</h3>
                                        <p className="mt-1 text-sm text-ink-dim leading-relaxed">{isArabic ? p.bodyAr : p.bodyEn}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
                {/**My Certifications*/}
                <section className="mx-auto max-w-6xl px-5 md:px-8 mb-7 ">


                    <Reveal className="relative rounded-3xl border border-line-strong bg-abyss card-glow p-8 md:p-10 overflow-hidden  ">
                        <h2 className="mb-3 font-display text-xs text-signal-2 m">{isArabic ? " شهادادتي " : "  Certifications"}</h2>
                        <div className='grid lg:grid-cols-[1.1fr_1fr] '>
                            {Certifications.map((c, i) => (
                                <Reveal key={c.en} delay={0.05 * i} className="rounded-2xl border border-line p-6 bg-surface/40 card-glow mb-5 ml-5 hover:bg-surface-2 ">

                                    <div className="flex items-center gap-3">
                                        <span className="p-2 rounded-lg  text-signal-2 bg-ink-dim w-15 h-15">
                                            <img
                                                src={c.icon}
                                                alt={c.en}
                                                className=" aspect-[8/5] object-cover "
                                            />

                                        </span>
                                        <div>
                                            <h3 className="font-display font-semibold text-ink">{isArabic ? c.ar : c.en}</h3>

                                            <p className="mt-1 text-sm text-ink-dim leading-relaxed">{isArabic ? c.resouceAr : c.resouceEn}</p>
                                        </div>
                                    </div>


                                </Reveal>

                            ))}
                        </div>


                    </Reveal>

                </section>
                {/** My Tech Journey */}
                <section className="mx-auto max-w-6xl px-5 md:px-8 pb-7 ">
                    <div >
                        <Reveal className="relative rounded-3xl border border-line-strong bg-abyss card-glow p-8 md:p-10 overflow-hidden hover:bg-surface-2">

                            <span className="font-display text-xs text-signal-2">🚀 {isArabic ? "رحلتي التقنية" : "My Tech Journey"}</span>
                            <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-ink">
                                {isArabic ? "من الفكرة إلى الأثر" : "From Ideas To Impact"}
                            </h2>
                            <p className="mt-5 text-ink-dim leading-relaxed max-w-3xl">
                                {isArabic ? (
                                    <>
                                        بدأت رحلتي من <span className="text-ink">الفضول</span> لفهم كيف تُبنى الأنظمة الرقمية، ثم
                                        تطورت إلى بناء منصات كاملة بتقنيات Frontend و Backend. اليوم أركز على حلول تجمع بين{" "}
                                        <span className="text-ink">البرمجة</span> و<span className="text-ink">الذكاء الاصطناعي</span>{" "}
                                        لصناعة منتجات أكثر ذكاءً وتأثيرًا.
                                    </>
                                ) : (
                                    <>
                                        My journey started with <span className="text-ink">curiosity</span> about how digital systems
                                        are built, evolving into full platforms with modern frontend and backend technologies. Today I
                                        combine <span className="text-ink">software development</span> and{" "}
                                        <span className="text-ink">AI</span> to build smarter, more impactful products.
                                    </>
                                )}
                            </p>
                        </Reveal>

                    </div>
                </section>

                {/** My Technical Universe */}
                <section className="mx-auto max-w-6xl px-5 md:px-8 pb-7">


                    <Reveal className="relative rounded-3xl border border-line-strong bg-abyss card-glow p-8 md:p-10 overflow-hidden  ">
                        <h2 className="font-display text-xs text-signal-2">{isArabic ? "عالمي التقني " : "My Technical Universe"}</h2>
                        {SKILL_GROUPS.map((g, i) => (
                            <Reveal key={g.en} delay={0.05 * i} className="rounded-2xl border border-line p-6 bg-surface/40 card-glow m-10 hover:bg-surface-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="p-2 rounded-lg bg-surface-2 text-signal-2"><g.icon size={18} /></span>
                                    <h3 className="font-display font-semibold text-ink">{isArabic ? g.ar : g.en}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {g.tags.map((t) => (
                                        <span key={t} className="font-display text-[11px] px-3 py-1.5 rounded-full border border-line text-ink-dim">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        ))}

                    </Reveal>

                </section>

                {/** What I'm Building Next */}
                <section>
                    <section >
                        <div className="mx-auto max-w-4xl px-5 md:px-8 py-20">
                            <Reveal>
                                <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-2">
                                    🔭 {isArabic ? "إلى أين أتجه؟" : "What I'm Building Next"}
                                </h2>
                                <p className="text-ink-dim mb-10">
                                    {isArabic ? "لا أرى المستقبل كمرحلة بعيدة، بل كمساحة أستعد لبنائها." : "I don't see the future as distant — it's a space I'm preparing to build."}
                                </p>
                            </Reveal>
                            <ol className="relative  ps-8 space-y-8">
                                {FUTURE.map((f, i) => (
                                    <Reveal as="li" delay={0.06 * i} className="relative">
                                        <span className="absolute -start-[2.55rem] top-0 h-4 w-4 rounded-full bg-signal shadow-[0_0_16px_2px_rgba(61,107,255,0.7)]" />
                                        <p className="mt-1 font-display text-lg text-ink">{isArabic ? f.ar : f.en}</p>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </section>
                </section>
            </div>

            {/* BEYOND THE CODE — closer */}
            <section className=" bg-abyss">
                <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 text-center">
                    <Reveal>
                        <p className="mt-5 font-display text-2xl sm:text-3xl leading-snug text-ink p-7 rounded-4xl hover:shadow-[0_0_24px_-4px_rgba(61,107,255,0.7)]">
                            {isArabic
                                ? "أفضل المنتجات الرقمية لا تُقاس بعدد الأسطر البرمجية، بل بالقيمة التي تقدمها للناس."
                                : "Great digital products aren't measured by lines of code, but by the value they create for people."}
                        </p>

                    </Reveal>
                </div>
            </section>



        </div>

    );
}

export default About;

/* 

رﺑﻲ
: ﻟﺑﻧﺎﺋﮭﺎ. أﺳﺗﻌد ﻛﻣﺳﺎﺣﺔ ﺑل ﺑﻌﯾدة، ﻛﻣرﺣﻠﺔ اﻟﻣﺳﺗﻘﺑل أرى 
ﻻ ﻓﻲ: أﻛﺛر اﻟﺗﻌﻣق إﻟﻰ أطﻣ
ﺢ اﻟﻌﻣﻠﯾﺔ. وﺗطﺑﯾﻘﺎﺗﮫ اﻻﺻطﻧﺎﻋﻲ اﻟذﻛﺎء 
● اﻟﺑﯾﺎﻧﺎت. ﻋﻠﻰ ﺗﻌﺗﻣد ذﻛﯾﺔ أﻧظﻣﺔ ﺑﻧﺎء 
● واﻗﺗﺻﺎدي. اﺟﺗﻣﺎﻋﻲ أﺛر ذات رﻗﻣﯾﺔ ﻣﻧﺗﺟﺎت ﺗطوﯾر 
● اﻟﺣدﯾﺛﺔ. اﻟوﯾب ﺗﻘﻧﯾﺎت اﺳﺗﻛﺷﺎف 
●
 
English : 
I don't see the future as something distant; I see it as something I am preparing 
to build . 
My future direction focuses on : 
● Artificial Intelligence and practical AI applications . 
● Building intelligent data-driven systems . 
● Creating digital products with social and economic impact . 
● Exploring emerging web technologies








                
               
                <h2 className='abouttitle'>I believe technology is not just about tools and frameworks, but a way to
                    transform ideas into digital experiences that create real impact . </h2>
            </div>

            <div className='sectionone'>
                <div className='leftsection'>
                    {/* ====== Who I Am ====== 

                    <div className='cardabout'>
                        <h3>Who I Am</h3>
                        <p>I'm May, a Full-Stack Developer passionate about digital innovation and artificial
                            intelligence .<br />
                            I build digital platforms that combine performance, usability, and
                            human-centered design .<br />
                            My passion goes beyond writing software; I focus on understanding real-world
                            problems and transforming them into scalable technology solutions .</p>
                    </div>

                    ====== My Tech Journey ======

                    <div className='cardabout'>
                        <h3> My Tech Journey</h3>
                        <h4>From Ideas To Impact</h4>

                        <p>My journey started with curiosity about how digital systems are built, evolving
                            into developing complete applications and platforms using modern frontend and
                            backend technologies .
                            Today, I focus on creating solutions that combine software development, AI, and
                            user experience to build smarter and more impactful digital products . </p>
                    </div>
                </div>
               ====== My Personality ====== *

                <div className='cardabout rightsection'>
                    <h3>My Personality</h3>
                    <h4> Problem Explorer </h4>
                    <p>
                        I don't start with code, I start with understanding the problem. <br />
                        Because great solutions begin with the right questions .
                    </p>

                    <h4>Creative Builder</h4>
                    <p>I explore new ways to combine creativity and technology to build unique
                        experiences . </p>

                    <h4> Continuous Learner</h4>
                    <p>Technology never stops evolving, and neither do I. I continuously learn and
                        improve to stay ready for the future . </p>
                </div>
            </div>

            <div className='sectiontwo'>
                {/* ====== My Technical Universe ====== 
                <h3>My Technical Universe</h3>
<div className='techskills'>
                <div>
                    <h3>Frontend Craft </h3>
                    <p>React.js <br />
                        TypeScript <br />
                        JavaScript <br />
                        Tailwind CSS <br />
                        Responsive Design <br />
                        Component Architecture <br />
                        UI Performance</p>
                </div>
                <div>
                    <div>
                        <h3>Backend Engineering  </h3>
                        <p>Laravel <br />
                            PHP <br />
                            REST APIs <br />
                            MVC Architecture  <br />
                            Authentication  <br />
                            Database Integration <br />
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Digital Innovation & AI    </h3>
                        <p>Artificial Intelligence  <br />
                            Generative AI Applications <br />
                            AI Productivity Tools    <br />
                            Digital Transformation  <br />
                            Data-Driven Solutions  <br />

                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Engineering Mindset     </h3>
                        <p>Clean Code   <br />
                            Software Architecture <br />
                            OOP    <br />
                            SDLC  <br />
                            Agile Methodologies  <br />
                            Problem Solving

                        </p>
                    </div>

                </div>
</div>
            </div>


            {/* ====== What I'm Building Next ====== 

            <div className='cardabout'>
                <h2>What I'm Building Next</h2>
                <h4>I don't see the future as something distant; I see it as something I am preparing
                    to build .</h4>
                <h4>My future direction focuses on : </h4>
                <p>
                    ● Artificial Intelligence and practical AI applications . <br />
                    ● Building intelligent data-driven systems .<br />
                    ● Creating digital products with social and economic impact . <br />
                    ● Exploring emerging web technologies .

                </p>
            </div>

            {/* ====== Beyond The Code ====== 

            <div className='cardabout'>
                <h2>Beyond The Code</h2>
                <p>Behind every project I build, there is an idea bigger than technology itself .
                    I believe great digital products are not measured by lines of code, but by the
                    value they create .</p>
            </div>
        </div>
        </div>
 
*/
