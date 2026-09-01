import { ArrowUpRight, Key, Menu, Terminal, X } from 'lucide-react';
import React, { useEffect } from 'react';
import logo from '../assets/logomay.png';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const Header = () => {

  const { isArabic, setIsArabic } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Links = [
    { Key: 'home', to: '/', ar: 'الرئيسية', en: 'Home' },
    { Key: 'about', to: '/about', ar: 'عني', en: 'About' },
    { Key: 'projects', to: '/projects', ar: 'مشاريعي', en: 'Projects' },
    { Key: 'services', to: '/services', ar: 'خدماتي', en: 'Services' },
  ]
  return (
    <div>


{/** 
  className={`fixed top-1 left-0 right-0 md:top-1 md:mx-20 md:rounded-full md:border md:border-line rounded-full px-3.5 py-1.5 mb-8 bg-surface/50 z-50 transition-all duration-300
    ${scrolled
      ? "bg-void/85 backdrop-blur-xl border-b border-line"
      : "border border-line bg-abyss"
    }`}*/}

<header
  className={`fixed top-0 left-0 right-0
    md:top-1 md:left-20 md:right-20 md:rounded-full
    px-3.5 py-1.5 z-50 transition-all duration-300
    
    ${
      scrolled
       ? "bg-void/85 backdrop-blur-xl border-b border-l border-r border-line"
        : "bg-abyss border-b border-l border-r border-line"
    }`}



>
        <div className='flex gap-3 items-center justify-between'>
          {/**logo */}
          
            <img src={logo} alt="My logo name" className="w-15 h-15 mr-8" />
          {/**link desctop */}
          <div className='hidden md:flex items-center gap-1 font-display text-sm font-medium font-display text-sm font-medium flex gap-3 items-center justify-between'>
            {Links.map((l) => (
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full transition-colors ${isActive
                    ? "text-ink"
                    : "text-ink-dim hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{isArabic ? l.ar : l.en}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-surface-2 border border-line-strong" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/**contact & language*/}
          <div className='flex gap-3 items-center justify-between'>
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="hidden sm:flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-full border border-line text-ink-dim hover:text-ink hover:border-line-strong transition-colors"
              aria-label="toggle language"
            >
              <span className={isArabic ? "text-cyan" : ""}>ع</span>
              <span className="text-ink-faint">/</span>
              <span className={!isArabic ? "text-cyan" : ""}>EN</span>
            </button>

            <NavLink to='/contact'
              className="hidden md:inline-flex items-center gap-1.5 font-mono
            text-xs px-3 py-2 rounded-full bg-signal text-white hover:bg-signal-2
            transition-color shadow-[0_0_24px_-4px_rgba(61,107,255,0.7)]
           "

            >
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />

              {isArabic ? "تواصل معي" : "Contact Me"}</NavLink>



            <button
              className="md:hidden p-2 text-ink"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/**link mobile */}
        {open && (
          <div className="md:hidden border-t border-line bg-void/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-1 font-display z-50">
            {Links.map((l) => (
              <NavLink
                key={l.key}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${isActive ? "bg-surface-2 text-ink" : "text-ink-dim"
                  }`
                }
              >
                {isArabic ? l.ar : l.en}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className=" mt-2 text-center px-4 py-3 rounded-xl bg-signal text-white font-semibold text-sm"
            >
              {isArabic ? "تواصل معي" : "Contact Me"}
            </NavLink>
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="mt-2 self-start font-mono text-xs px-3 py-2 rounded-full border border-line text-ink-dim"
            >
              {isArabic ? "English" : "عربي"}
            </button>
          </div>
        )}
      </header>

      <div className={`fixed top-22 ml-22 mr-22  z-40 transition-all duration-300 
        ${scrolled
          ? "hidden"
          : "  "}`}>
            
        <span className="inline-flex items-center  font-mono text-sm text-cyan rounded-full  px-3.5 py-1.5 mb-2 shadow-[0_0_24px_-4px_rgba(61,107,255,0.7)]">
          {isArabic ? " ● متاحة للتعاون الآن" : "● Available for new projects "}</span>
      </div>
    </div>
  );
}

export default Header;

