"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimationFrame } from "motion/react";
import { Star } from "lucide-react";

type Review = { name: string; role: string; text: string; stars: number; avatar: string };

const reviews: Review[] = [
  { name: "María García", role: "Restaurante El Rincón", text: "Flipé con el resultado. En 2 semanas teníamos la web y en el primer mes triplicamos las reservas online.", stars: 5, avatar: "MG" },
  { name: "Carlos Ruiz", role: "Abogado Independiente", text: "Muy profesionales. La web transmite exactamente la seriedad que necesito para mis clientes.", stars: 5, avatar: "CR" },
  { name: "Laura Sánchez", role: "Centro de Estética Bella", text: "Increíble. La web es preciosa y mis clientas me preguntan constantemente cómo la hice.", stars: 5, avatar: "LS" },
  { name: "Javier López", role: "CEO StartupTech", text: "Vinieron con ideas que yo no había pensado. El resultado superó mis expectativas. Gran equipo.", stars: 5, avatar: "JL" },
  { name: "Ana Martínez", role: "Inmobiliaria Premium", text: "El plan Advanced valió cada euro. El mantenimiento es tranquilidad total.", stars: 5, avatar: "AM" },
  { name: "David Torres", role: "Gimnasio FitPro", text: "Rápidos, profesionales y el resultado es espectacular. Mucho mejor que la competencia.", stars: 5, avatar: "DT" },
  { name: "Isabel Fernández", role: "Consultora de Imagen", text: "Sabían exactamente lo que quería antes de que yo lo supiera. El diseño es perfecto.", stars: 5, avatar: "IF" },
  { name: "Roberto Molina", role: "Clínica Dental", text: "Transmite mucha confianza. Los pacientes nuevos me dicen que la web fue lo que les convenció.", stars: 5, avatar: "RM" },
  { name: "Sofía Herrera", role: "Fotógrafa Profesional", text: "Mi portfolio nunca había lucido así. Las animaciones son brutales. Feliz con el resultado.", stars: 5, avatar: "SH" },
  { name: "Miguel Ángel", role: "Arquitecto", text: "Puntualidad total, diseño impecable y atención al detalle increíble.", stars: 5, avatar: "MÁ" },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div style={{
      flexShrink: 0, width: "280px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(201,169,110,0.1)",
      borderRadius: "16px", padding: "22px", marginRight: "16px",
    }}>
      <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} size={12} fill="#C9A96E" color="#C9A96E" />
        ))}
      </div>
      <p style={{ color: "#999", fontSize: "13px", lineHeight: 1.65, marginBottom: "16px", fontStyle: "italic" }}>
        "{review.text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "linear-gradient(135deg, #A07840, #C9A96E)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", fontWeight: 700, color: "#0A0A0A", flexShrink: 0,
        }}>{review.avatar}</div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{review.name}</div>
          <div style={{ fontSize: "11px", color: "#555" }}>{review.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = 1 }: { items: Review[]; direction?: 1 | -1 }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    if (!trackRef.current) return;
    xRef.current -= 0.35 * direction;
    const totalWidth = 296 * items.length;
    if (Math.abs(xRef.current) >= totalWidth) xRef.current = 0;
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  const tripled = [...items, ...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div ref={trackRef} style={{ display: "flex", width: "max-content" }}>
        {tripled.map((r, i) => <ReviewCard key={i} review={r} />)}
      </div>
    </div>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} style={{
      fontFamily: "var(--font-playfair)",
      fontSize: "clamp(36px, 6vw, 60px)",
      fontWeight: 900, color: "#C9A96E",
    }}>{count}{suffix}</span>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resenas" ref={ref} style={{ paddingTop: "72px", paddingBottom: "72px", overflow: "hidden", background: "rgba(255,255,255,0.01)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "48px", padding: "0 20px" }}
      >
        <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px", fontWeight: 600 }}>
          Reseñas verificadas
        </span>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(30px, 5vw, 52px)",
          fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "36px",
        }}>
          Lo que dicen nuestros<br />
          <span className="gold-gradient">clientes satisfechos</span>
        </h2>

        <div style={{ display: "flex", gap: "clamp(32px, 6vw, 72px)", justifyContent: "center", flexWrap: "wrap" }}>
          {[{ target: 150, suffix: "+", label: "Clientes" }, { target: 98, suffix: "%", label: "Satisfacción" }, { target: 5, suffix: "★", label: "Valoración" }].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <Counter target={s.target} suffix={s.suffix} />
              <div style={{ fontSize: "11px", color: "#444", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.25, duration: 0.8 }}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <MarqueeRow items={reviews} direction={1} />
        <MarqueeRow items={[...reviews].reverse()} direction={-1} />
      </motion.div>
    </section>
  );
}
