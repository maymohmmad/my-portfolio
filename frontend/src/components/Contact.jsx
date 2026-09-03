import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import { useState } from 'react';
import { CheckCircle2, Send } from "lucide-react";
import { RotateCcw } from "lucide-react";

import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaGithub
} from "react-icons/fa";









export default function Contact() {
  const { isArabic } = useLanguage();

  const SUBJECTS_AR = ["فكرة مشروع", "فرصة تعاون", "استشارة تقنية", "أخرى"];
  const SUBJECTS_EN = ["Project idea", "Collaboration", "Technical consulting", "Other"];

  const subjects = isArabic ? SUBJECTS_AR : SUBJECTS_EN;



  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const SOCIALS = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      desc: {
        ar: "استكشف مشاريعي البرمجية وشاهد كيف أبني أفكاري",
        en: "Explore my projects and see how I turn ideas into code",
      },
      url: "https://github.com/maymohmmad",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      desc: {
        ar: "تعرّف على خبرتي ومشاريعي وتواصل معي مهنيًا",
        en: "Discover my experience, projects, and professional journey",
      },
      url: "https://www.linkedin.com/in/may-mohmmad-681287289",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      desc: {
        ar: "لنتحدث عن مشروع، فكرة، أو فرصة تعاون",
        en: "Let's talk about a project, idea, or collaboration",
      },
      url: "mailto:mai.armilat@gmail.com",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      desc: {
        ar: "تابعني واكتشف المزيد من أعمالي واهتماماتي",
        en: "Follow me for more of my work and interests",
      },
      url: "https://www.instagram.com/maya_.m.a?igsh=MXBtMDJjcHY3YnZ4YQ==",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      desc: {
        ar: "تواصل معي وكن على اطلاع بآخر أعمالي",
        en: "Stay connected and follow my latest work",
      },
      url: "https://www.facebook.com/",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      desc: {
        ar: "أشارك أفكاري وتجربتي في عالم التقنية",
        en: "Follow my thoughts and experiences in tech",
      },
      url: "https://x.com/MayMohmmad33",
    },
  ];


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      // Laravel API endpoint — see backend/routes/api.php
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("request_failed");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err) {
      setError(isArabic ? "حدث خطأ أثناء الإرسال، حاولي مرة أخرى." : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };




  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute -top-5 end-20 h-[26rem] w-[26rem] rounded-full bg-cyan/10 blur-[130px] pointer-events-none" />

      {/**hero Contact*/}
      <section className="relative overflow-hidden mt-50">
        <div className="absolute inset-0 grid-field opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-16 text-center">

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-ink">
            {isArabic ? "عندك فكرة؟" : "Have an idea?"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-2 to-cyan">
              {isArabic ? "لنحوّلها إلى واقع." : "Let's turn it into reality."}
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ink-dim text-lg">
            {isArabic
              ? "سواء كان لديك مشروع، فكرة رقمية، أو ترغب بالتعاون — يسعدني أن أسمع منك."
              : "Whether you have a project, a digital idea, or want to collaborate — I'd love to hear from you."}
          </p>
        </div>
      </section>

      {/**form Contact*/}
      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-24">
        <Reveal className="rounded-2xl border border-line-strong bg-surface/50 card-glow p-7 md:p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-ink-dim mb-2">
                    👤 {isArabic ? "الاسم" : "Your Name"}
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="May Mohamed"
                    className="w-full rounded-xl bg-void border border-line px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/30 transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-ink-dim mb-2">
                    📧 {isArabic ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-void border border-line px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/30 transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-xs text-ink-dim mb-2">
                  📌 {isArabic ? "موضوع الرسالة" : "Subject"}
                </label>
                <select
                  id="subject" name="subject" required
                  value={formData.subject} onChange={handleChange}
                  className="w-full rounded-xl bg-void border border-line px-4 py-3 text-ink focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/30 transition-shadow"
                >
                  <option value="">{isArabic ? "اختاري موضوعًا..." : "Select a subject..."}</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-ink-dim mb-2">
                  💬 {isArabic ? "التفاصيل" : "Message"}
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder={isArabic ? "احكيلي عن مشروعك أو فكرتك..." : "Tell me about your project or idea..."}
                  className="w-full rounded-xl bg-void border border-line px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/30 transition-shadow resize-none"
                />
              </div>
              {/* Honeypot field — hidden from real users, bots often fill every input */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
              />

              {error && <p className="text-sm text-red-400 font-mono">{error}</p>}

              <button
                type="submit" disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 font-display font-semibold px-7 py-3.5 rounded-xl bg-signal text-white hover:bg-signal-2 transition-colors shadow-[0_0_30px_-6px_rgba(61,107,255,0.8)] disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    {isArabic ? "جارِ الإرسال..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {isArabic ? "إرسال الرسالة" : "Send Message"}
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto text-cyan" size={52} />
              <h2 className="mt-5 font-display font-bold text-2xl text-ink">
                {isArabic ? "شكرًا لتواصلك!" : "Thank you for reaching out!"}
              </h2>
              <p className="mt-2 text-ink-dim">
                {isArabic ? "وصلت رسالتك، وسأعود إليك قريبًا." : "Your message has been received — I'll get back to you soon."}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-7 inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-full border border-line text-ink-dim hover:text-ink hover:border-line-strong transition-colors"
              >
                <RotateCcw size={14} /> {isArabic ? "إرسال رسالة أخرى" : "Send another message"}
              </button>
            </div>
          )}
        </Reveal>
      </section>

      {/**social Contact */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-24">

        <Reveal delay={0.1} className="space-y-6">
          <div className="rounded-2xl border border-line bg-surface/40 card-glow p-7">
            <h3 className="font-display font-semibold text-ink mb-5">
              🌐 {isArabic ? "لنتواصل" : "Let's Connect"}
            </h3>
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">


              {SOCIALS.map(({ name, url, icon, desc }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-50 flex cursor-pointer items-center gap-3 rounded-xl border border-line px-4 py-3 hover:border-line-strong hover:bg-surface-2/50 transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-surface-2 text-signal-2 group-hover:text-cyan transition-colors">{icon}</span>
                  <div>
                    <p className="text-sm font-medium text-ink">{name}</p>
                    <p className="text-xs text-ink-faint">{isArabic ? desc.ar : desc.en}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>



    </div>
  )
}
