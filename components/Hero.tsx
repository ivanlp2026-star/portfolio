"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 14,
    });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "100px 20px 60px",
    }}>
      {/* Ambient orbs */}
      <motion.div style={{
        position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.08), transparent 70%)",
        left: "50%", top: "40%", translateX: "-50%", translateY: "-50%",
        x: mousePos.x * 0.6, y: mousePos.y * 0.6,
      }} />
      <motion.div style={{
        position: "absolute", width: "280px", height: "280px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.06), transparent 70%)",
        right: "10%", top: "20%",
        x: mousePos.x * -0.3, y: mousePos.y * -0.3,
      }} />
      <motion.div style={{
        position: "absolute", width: "200px", height: "200px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(160,120,64,0.07), transparent 70%)",
        left: "8%", bottom: "25%",
        x: mousePos.x * 0.4, y: mousePos.y * 0.4,
      }} />

      {/* Decorative rings */}
      <motion.div style={{
        position: "absolute", width: "500px", height: "500px", borderRadius: "50%",
        border: "1px solid rgba(201,169,110,0.06)",
        left: "50%", top: "50%",
        translateX: "-50%", translateY: "-50%",
        x: mousePos.x * 0.3, y: mousePos.y * 0.3,
      }} />
      <motion.div style={{
        position: "absolute", width: "750px", height: "750px", borderRadius: "50%",
        border: "1px solid rgba(201,169,110,0.03)",
        left: "50%", top: "50%",
        translateX: "-50%", translateY: "-50%",
        x: mousePos.x * 0.15, y: mousePos.y * 0.15,
      }} />

      <motion.div style={{ y, opacity, position: "relative", zIndex: 10, textAlign: "center", maxWidth: "860px", width: "100%" }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(201,169,110,0.1)",
            border: "1px solid rgba(201,169,110,0.25)",
            borderRadius: "50px", padding: "7px 18px",
            marginBottom: "24px",
            fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
            color: "#C9A96E", fontWeight: 600,
          }}
        >
          <Sparkles size={11} />
          Diseño Web Premium · Desde 290€
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(40px, 9vw, 90px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginBottom: "20px",
          }}
        >
          Tu web merece
          <br />
          <span className="gold-shimmer">ser diferente.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: "clamp(15px, 2.5vw, 19px)",
            color: "#777",
            maxWidth: "540px",
            margin: "0 auto 36px",
            lineHeight: 1.7,
          }}
        >
          Diseñamos webs que no solo se ven increíbles — generan confianza, captan clientes y hacen crecer tu negocio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#precios" className="btn-gold" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "15px 32px", borderRadius: "50px",
            fontSize: "14px", letterSpacing: "0.3px", textDecoration: "none",
          }}>
            Ver Precios <ArrowRight size={16} />
          </a>
          <a href="#portfolio" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "15px 32px", borderRadius: "50px",
            fontSize: "14px", color: "#fff", textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.35)"; e.currentTarget.style.color = "#C9A96E"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}>
            Ver Portfolio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: "flex", gap: "clamp(24px, 5vw, 56px)",
            justifyContent: "center", marginTop: "56px", flexWrap: "wrap",
          }}
        >
          {[
            { num: "150+", label: "Clientes" },
            { num: "5★", label: "Valoración" },
            { num: "100%", label: "Satisfacción" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 800, color: "#C9A96E", marginBottom: "2px",
              }}>{s.num}</div>
              <div style={{ fontSize: "11px", color: "#555", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          color: "#333", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase",
        }}
      >
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, transparent, #C9A96E)" }} />
        Scroll
      </motion.div>
    </section>
  );
}
