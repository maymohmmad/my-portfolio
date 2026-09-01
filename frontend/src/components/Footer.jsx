import React from 'react'
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { isArabic } = useLanguage();
  const PRINCIPLES = [
    { ar: " أتعلم بشغف", en: "I keep learning" },
    { ar: " أبتكر باستمرار", en: "I create with curiosity" },
    { ar: " وأبني بفضول", en: " I build with passion" },
  ];
  return (
    <div >

      {/* CTA STRIP */}
      <section className="relative  overflow-hidden ">


        <div className="absolute inset-0 grid-field opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 text-center">
          <div className="absolute left-50 end-40 h-[32rem] w-[32rem] rounded-full bg-signal/20 blur-[160px]" />
          <div className="absolute left-120 -top-40 start-20 h-[26rem] w-[26rem] rounded-full bg-cyan/10 blur-[130px]" />
          
          <div className='mb-10'>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink max-w-2xl mx-auto">
              <p className='flix item-center gap-2 text-2xl'>
                {isArabic ? "أتعلم بشغف , أبتكر باستمرار , و أبني بفضول" : "I keep learning ,I create with curiosity,and I build with passion"}</p>
            </h2>
            <p>{isArabic ? "مي م.  م. محفوظ" : "May M.M Mhfoaz"}<br />2026-2027</p>
          </div>
        </div>
      </section>



    </div>
  )
}

