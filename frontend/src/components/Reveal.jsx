import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades + slides content up as it enters the
 * viewport. Respects prefers-reduced-motion automatically.
 */
export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
