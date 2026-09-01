import { useState, useEffect } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";


// Fallback logo used for any project that doesn't set its own `image`.
import projectimagek from "../assets/logokafaf.png";
import projectimageth from "../assets/logothread.png"
import projectimageco from "../assets/aa.png"
import projectimagesp from "../assets/logospace.jpg"
import projectimagepro from "../assets/logopro.png"
import projectimageai from "../assets/logoai.png"

const IN_PROGRESS = [
  {
    id: "kafaf", // unique + stable — used to talk to the backend (likes/comments)
    icon: "💚",
    name: "Kafaf",
    image: projectimagek, // swap for a real screenshot when you have one
    titleAr: "منصة التمكين الاقتصادي للأسر المنتجة",
    titleEn: "Economic Empowerment Platform for Productive Families",
    descAr: "منصة رقمية تُمكّن الأسر المنتجة من الوصول إلى الأسواق والعملاء بطريقة تحفظ استقلاليتهم وكرامتهم.",
    descEn: "A digital platform empowering productive families to reach markets and customers through a dignified, sustainable digital ecosystem.",
    tech: ["React.js", "TypeScript", "Laravel", "MySQL", "REST API", "Figma"],
    status: { ar: "قيد التنفيذ", en: "In Progress" },
   
  },
  {
    id: "thread-fashion",
    icon: "👗",
    name: "Thread Fashion",
    image: projectimageth,
    titleAr: "منصة تكنولوجيا الأزياء",
    titleEn: "Fashion Technology Platform",
    descAr: "نظام رقمي يجمع المصممين والمبتدئين والعملاء في بيئة واحدة للتصميم، التعاون، التعلم، وعرض الإبداعات.",
    descEn: "A digital ecosystem connecting designers, beginners, and clients — for creativity, collaboration, learning, and showcasing fashion ideas.",
    tech: ["React.js", "Laravel", "MySQL", "UI/UX Design", "Figma"],
    status: { ar: "قيد التنفيذ", en: "In Progress" },
    
  },
];

const COMPLETED = [
  {
    id: "space-dashboard",
    icon: "📊",
    name: "Space Management Dashboard",
    image: projectimagesp,
    titleAr: "لوحة إدارة المساحات الذكية",
    titleEn: "Smart Workspace Management System",
    descAr: "لوحة تحكم رقمية لإدارة العمليات اليومية وتحويل البيانات إلى معلومات واضحة لاتخاذ قرارات أفضل.",
    descEn: "A responsive dashboard for managing daily operations and turning data into clear insights for better decisions.",
    tech: ["React.js", "Tailwind CSS", "Recharts"],
    status: { ar: "مكتملة", en: "Completed" },
    github: "https://github.com/maymohmmad/jaru-space-dashboard",
    live: "https://jaru-space-dashboard.vercel.app",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    name: "E-Commerce Web Application",
    image: projectimageco,
    titleAr: "تجربة تجارة إلكترونية حديثة",
    titleEn: "Modern Shopping Experience",
    descAr: "تطبيق متجر إلكتروني يركز على تجربة تسوّق سلسة وسريعة باستخدام تقنيات الويب الحديثة.",
    descEn: "An e-commerce application focused on a smooth, fast shopping experience using modern web practices.",
    tech: ["React.js", "JavaScript ES6+", "REST API"],
    status: { ar: "مكتملة", en: "Completed" },
    github: "https://github.com/maymohmmad/Ecommerce-App",
    live: "https://ecommerce-app-taupe-alpha.vercel.app",
  },
  {
    id: "todo-app",
    icon: "📝",
    name: "To-Do Application",
    image: projectimagepro,
    titleAr: "تطبيق إدارة المهام",
    titleEn: "Interactive Task Management App",
    descAr: "تطبيق تفاعلي بسيط تم تطويره لبناء أساس قوي في تطوير الواجهات والتعامل مع البيانات.",
    descEn: "A simple interactive app built to strengthen frontend fundamentals and data handling.",
    status: { ar: "مكتملة", en: "Completed" },
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/maymohmmad",
    live: "https://maymohmmad.github.io/todo-app/ ",
  },
];

const FUTURE_LAB = [
  {
    id: "ai-agent",
    icon: "🔮",
    name: "AI Agent",
    image: projectimageai,
    titleAr: "وكلاء ذكاء اصطناعي لحلول أكثر ذكاءً",
    titleEn: "Intelligent AI-Powered Solutions",
    descAr: "استكشاف بناء وكلاء ذكاء اصطناعي قادرين على فهم المهام، مساعدة المستخدمين، وأتمتة العمليات الرقمية.",
    descEn: "Exploring AI agents that understand tasks, assist users, and automate digital workflows intelligently.",
    tech: ["AI Applications", "Automation", "Intelligent Systems"],
    status: { ar: "فكرة مستقبلية", en: "Future Concept" },
  },
];

const TABS = [
  { key: "inprogress", ar: "قيد التطوير", en: "In Progress", data: IN_PROGRESS },
  { key: "completed", ar: "منجزة", en: "Completed", data: COMPLETED },
  { key: "future", ar: "مختبر المستقبل", en: "Future Lab", data: FUTURE_LAB },
];

/**
 * Like + comment bar for a single project.
 * Talks to the Laravel API (see backend/routes/api.php):
 *   GET   /api/projects/{id}/engagement   -> { likes, liked, comments: [...] }
 *   POST  /api/projects/{id}/like         -> toggles like for this browser
 *   POST  /api/projects/{id}/comments     -> { name, body }
 *
 * Falls back to local-only state (no persistence) if the API isn't
 * reachable yet, so the UI still works while you wire up the backend.
 */
function LikeCommentBar({ projectId, isArabic }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetch(`/api/projects/${projectId}/engagement`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setLikes(data.likes ?? 0);
        setLiked(Boolean(data.liked));
        setComments(data.comments ?? []);
      })
      .catch(() => {
        // API not reachable yet — stay at local defaults, no crash.
      });
  }, [projectId]);

  const toggleLike = async () => {
    // Optimistic UI: update instantly, reconcile with the server after.
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikes((n) => n + (nextLiked ? 1 : -1));

    try {
      const res = await fetch(`/api/projects/${projectId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setLikes(data.likes);
      setLiked(data.liked);
    } catch {
      // Revert on failure
      setLiked(!nextLiked);
      setLikes((n) => n - (nextLiked ? 1 : -1));
    }
  };

  const submitComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setPosting(true);
    try {
      const res = await fetch(`/api/projects/${projectId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: commentName.trim() || (isArabic ? "زائر" : "Guest"),
          body: commentText.trim(),
        }),
      });
      if (!res.ok) throw new Error();
      const newComment = await res.json();
      setComments((c) => [newComment, ...c]);
      setCommentText("");
    } catch {
      // Keep the draft so nothing is lost; show inline error if you like.
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="mt-6 pt-5 border-t border-line">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLike}
          className={`inline-flex items-center gap-1.5 text-sm font-mono transition-colors ${liked ? "text-red-400" : "text-ink-dim hover:text-red-400"
            }`}
        >
          <Heart size={16} fill={liked ? "currentColor" : "none"} />
          {likes}
        </button>

        <button
          onClick={() => setShowComments((v) => !v)}
          className="inline-flex items-center gap-1.5 text-sm font-mono text-ink-dim hover:text-cyan transition-colors"
        >
          <MessageCircle size={16} />
          {comments.length} {isArabic ? "تعليق" : "comments"}
        </button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-4">
          <form onSubmit={submitComment} className="space-y-2">
            <input
              type="text"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              placeholder={isArabic ? "اسمك (اختياري)" : "Your name (optional)"}
              className="w-full rounded-lg bg-void border border-line px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder={isArabic ? "اكتبي تعليقك..." : "Write a comment..."}
                className="flex-1 rounded-lg bg-void border border-line px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal"
              />
              <button
                type="submit"
                disabled={posting || !commentText.trim()}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-signal px-3 py-2 text-sm text-white hover:bg-signal-2 transition-colors disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </div>
          </form>

          <div className="space-y-3 max-h-56 overflow-y-auto">
            {comments.length === 0 ? (
              <p className="text-xs text-ink-faint font-mono">
                {isArabic ? "لا تعليقات بعد — كوني أول من يعلّق." : "No comments yet — be the first."}
              </p>
            ) : (
              comments.map((c, i) => (
                <div key={c.id ?? i} className="rounded-lg bg-surface-2/50 px-3 py-2">
                  <p className="text-xs font-medium text-ink">{c.name}</p>
                  <p className="text-sm text-ink-dim mt-0.5">{c.body}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, isArabic }) {
  return (
    <div className="rounded-2xl border border-line bg-surface/40 card-glow overflow-hidden flex justify-between h-full mb-7 hover:bg-surface">

      <div className="p-7">
        <div className="flex items-start gap-3">
          <span className="text-3xl">{p.icon}</span>

          {p.status && (
            <span className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border border-line-strong text-amber">
              {isArabic ? p.status.ar : p.status.en}
            </span>
          )}
        </div>

        <h3 className="mt-5 font-display font-bold text-xl text-ink">
          {p.name}
        </h3>

        <p className="mt-1 font-display text-sm text-signal-2">
          {isArabic ? p.titleAr : p.titleEn}
        </p>

        <p className="mt-4 text-sm text-ink-dim leading-relaxed flex-1">
          {isArabic ? p.descAr : p.descEn}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-line text-ink-faint"
            >
              {t}
            </span>
          ))}
        </div>


         {(p.github || p.live) && (
          <div className="flex items-center gap-3 mt-7">

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Code"
                className="inline-flex items-center justify-center p-2.5 rounded-full border border-line text-ink-dim hover:text-cyan hover:border-line-strong transition-colors"
              >
                
                <FaGithub size={16} />
              </a>
            )}

            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                title="Live"
                className="inline-flex items-center justify-center p-2.5 rounded-full border border-line text-ink-dim hover:text-cyan hover:border-line-strong transition-colors"
              >
                <FiExternalLink size={16} />
              </a>
            )}

          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-between pb-10">

        <img
          src={p.image}
          alt={p.name}
          className="w-full aspect-[8/5] object-cover h-50"
        />

       

        <LikeCommentBar
          projectId={p.id}
          isArabic={isArabic}
        />

      </div>

    </div>
  );
}

export default function Projects() {
  const { isArabic } = useLanguage();
  const [tab, setTab] = useState("inprogress");
  const active = TABS.find((t) => t.key === tab);

  return (
    <div className="pt-28">
      {/**heroProjects */}


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-16 text-center">
        

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-ink">
            {isArabic ? "من الفكرة إلى" : "From Ideas To"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-2 to-cyan">
              {isArabic ? "التجربة الرقمية" : "Digital Experiences"}
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ink-dim text-lg">
            {isArabic
              ? "كل مشروع أعمل عليه يبدأ بسؤال: كيف يمكن للتكنولوجيا أن تحل مشكلة حقيقية وتصنع قيمة أكبر؟"
              : "Every project starts with a question: how can technology solve a real problem and create more value?"}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-24">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`font-display text-sm font-medium px-5 py-2.5 rounded-full border transition-colors ${tab === t.key
                ? "bg-signal text-white border-signal"
                : "border-line text-ink-dim hover:text-ink hover:border-line-strong"
                }`}
            >
              {isArabic ? t.ar : t.en}
            </button>
          ))}
        </div>

        <div className={`m-7 ${active.data.length === 1 ? "mb-7" : "mb-7"}`}>
          {active.data.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i}>
              <ProjectCard p={p} isArabic={isArabic} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-abyss">
        <div className="mx-auto max-w-2xl px-5 md:px-8 py-20 text-center">
          <p className="font-display text-xl sm:text-2xl text-ink leading-relaxed">
            {isArabic
              ? "لا أبني المشاريع فقط لإضافتها إلى معرض الأعمال، بل أبنيها لأتعلم، أحل المشكلات، وأصنع قيمة حقيقية."
              : "I don't build projects just to add them to my portfolio. I build to learn, solve problems, and create real value."}
          </p>
        </div>
      </section>
    </div>
  );
}
