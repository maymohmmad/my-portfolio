import React from 'react';
import { useLanguage } from "../context/LanguageContext";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Clock, Sparkles, TrendingUp, Code2, Coffee, BookOpen } from "lucide-react";
import heroImage from "../assets/11.png";
import Reveal from '../components/Reveal';


const Home = () => {

   const believe = [
      {
         n: "*",
         titleAr: "الوقت",
         titleEn: "Time",
         descAr: "أؤمن أن الوقت من أثمن الموارد, وأن كل لحظة تستثمر في العمل و التعلم يجب ان تقود الى نتيجة ذات قيمة",
         descEn: "I believe time is one of the most valuable resources. Every moment invested inlearning and creating should lead to meaningful results ."
      },
      {
         n: "*",
         titleAr: "الابتكار",
         titleEn: "Innovation",
         descAr: "أؤمن أن الاختلاف يبدأ بفكرة جديدة ,وأن الابتكار الحقيقي لا يتعلق فقط بصناعة شئ مختلف  بل بصناعة شئ أفضل.",
         descEn: "I believe true innovation starts with a different perspective. It's not only aboutcreating something new, but creating something better ."
      },
      {
         n: "*",
         titleAr: "التطوير المستمر",
         titleEn: "Continuous Growth",
         descAr: " أؤمن أن التعلم رحلة لا تنتهي, وأن أفضل ما يمكن أن يفعله الأنسان هو أن يطور نفسه باستمرار",

         descEn: "I believe learning is a lifelong journey, and the best way to grow is bycontinuously improving ourselves ."
      },
   ]

   const { isArabic } = useLanguage();
   return (
      <div >


         {/* HERO */}
         <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
         >

            <div className="absolute inset-0 grid-field opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="absolute -top-40 -end-40 h-[32rem] w-[32rem] rounded-full bg-signal/20 blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-40 -start-20 h-[26rem] w-[26rem] rounded-full bg-cyan/10 blur-[130px] pointer-events-none" />

            <div className='w-[60%] m-auto text-center relative z-10'>
               <Reveal>



                  <h1 className="font-display font-bold text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] lg:leading-[1.05] text-ink glow-text">
                     {isArabic ? (

                        <> العادي لا يصنع أثرًا.<br />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-2 to-cyan transform-gpu" style={{ backfaceVisibility: 'hidden', isolation: 'isolate' }}> أنا أبحث عن الاستثنائي.</span></>
                   ) : (

   <> Ordinary doesn't<br />create impact.{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-2 to-cyan transform-gpu"
         style={{ backfaceVisibility: 'hidden', isolation: 'isolate' }}> I chase the extraordinary.</span></>

)}</h1>

                  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                     <p className="mt-7 max-w-xl font-body text-ink-dim text-lg  leading-relaxed ">
                        {isArabic
                           ? "أنا مي، مطورة Full-Stack شغوفة بتحويل الأفكار إلى تجارب رقمية مبتكرة تجمع بين الإبداع، الأداء، وسهولة الاستخدام."
                           : "I'm May, a Full-Stack Developer passionate about turning ideas into innovative digital experiences that combine creativity, performance, and usability."}
                     </p>

                  </div>
                  <div className="relative z-20 mt-10 flex flex-wrap items-center justify-center gap-4">


                     <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 font-display font-semibold px-7 py-3.5 rounded-full bg-signal text-white hover:bg-signal-2 transition-all  hover:shadow-[0_0_24px_-4px_rgba(61,107,255,0.7)]"
                     >
                        {isArabic ? "استكشف أعمالي" : "Explore My Work"}
                        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />

                     </Link>
                     <Link
                        to="/contact"
                        className="relative z-20 font-display font-semibold px-7 py-3.5 rounded-full border border-line-strong text-ink hover:bg-surface transition-colors"
                     >
                        {isArabic ? "لنصنع شيئًا مميزًا" : "Let's Build Something"}
                     </Link>


                  </div>



               </Reveal>
            </div>


         </section>



         {/**Mission&& Vision*/}
         <section className=" relative mt-10 ">
            <Reveal>
               <div className="border border-line rounded-4xl bg-abyss mx-auto max-w-7xl px-5 md:px-4 py-12 mb-7 hover:bg-surface">

                  <span className="font-mono text-2xl text-signal-2">⚡ {isArabic ? "الرسالة" : "Mission"}</span>
                  <p className="mt-4 font-display text-2xl leading-snug text-ink">
                     {isArabic
                        ? "تحويل الأفكار المعقدة إلى حلول رقمية بسيطة وذكية، تترك أثرًا حقيقيًا لدى المستخدم."
                        : "Turning complex ideas into simple, intelligent digital solutions that create real value for users."}
                  </p>

               </div>
            </Reveal>
            <Reveal>
               <div className="border border-line rounded-4xl  bg-abyss  mx-auto max-w-7xl px-5 md:px-4 py-12  hover:bg-surface ">
                  <span className="font-mono text-2xl text-cyan">⚡{isArabic ? "الرؤية" : "Vision"}</span>
                  <p className="mt-4 font-display text-2xl leading-snug text-ink">
                     {isArabic
                        ? "بناء مستقبل رقمي أكثر إبداعًا، حيث تتحول التكنولوجيا إلى تجارب ذات قيمة وتأثير."
                        : "Building a more creative digital future, where technology becomes experiences of real value and impact."}
                  </p>

               </div>
            </Reveal>

         </section>

         {/**What I Believe In */}
         <section className="border-b border-line">
            <div className="mx-auto max-w-4xl px-5 md:px-8 py-20">
               <Reveal>
                  <h2 className="font-display font-bold text-4xl sm:text-3xl text-ink mb-2">
                     🔭 {isArabic ? "ما أؤمن به " : "What I Believe In"}

                  </h2>
               </Reveal>
               <ol className="relative border-s border-line ps-8 space-y-8">
                  {believe.map((f, i) => (
                     <Reveal as="li" key={f.n} delay={0.06 * i} className="relative">
                        <span className="absolute -start-[2.55rem] top-0 h-4 w-4 rounded-full bg-signal shadow-[0_0_16px_2px_rgba(61,107,255,0.7)]" />
                        <span className="font-mono text-1xl text-cyan">{isArabic ? f.titleAr : f.titleEn}</span>
                        <p className="mt-1 font-display text-lg text-ink-dim">{isArabic ? f.descAr : f.descEn}</p>
                     </Reveal>
                  ))}
               </ol>
            </div>
         </section>




         {/* CTA STRIP */}
         <section className="relative border-t border-line overflow-hidden">
            <div className="absolute inset-0 grid-field opacity-20 pointer-events-none" />
            <Reveal>
               <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 text-center">
                  <p className="font-mono text-xs text-signal-2 mb-4">{isArabic ? "دعنا نتحدث الأن.." : "$ let's_talk --now"}</p>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink max-w-2xl mx-auto">
                     {isArabic ? "عندك فكرة؟ لنحولها إلى منتج رقمي." : "Have an idea? Let's turn it into a product."}
                  </h2>
                  <Link
                     to="/contact"
                     className="mt-8 inline-flex items-center gap-2 font-display font-semibold px-8 py-4 rounded-full bg-signal text-white hover:bg-signal-2 transition-colors shadow-[0_0_30px_-6px_rgba(61,107,255,0.8)]"
                  >
                     {isArabic ? "ابدأ المحادثة" : "Start the Conversation"}
                  </Link>
               </div>
            </Reveal>
         </section>


      </div>
   );
}

export default Home;
