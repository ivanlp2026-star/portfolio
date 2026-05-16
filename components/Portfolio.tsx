"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Restaurante El Rincón", category: "Restaurante & Gastronomía", desc: "Landing premium con reservas online y carta digital.", color: "#C9A96E", bg: "linear-gradient(135deg, #1a1008, #2d1e0a)", tag: "Restaurante", url: "/demos/demo-restaurante.html" },
  { title: "Estudio Elisa", category: "Peluquería & Estética", desc: "Web elegante con citas online y galería de servicios.", color: "#C96E9A", bg: "linear-gradient(135deg, #1a0810, #250a18)", tag: "Peluquería", url: "/demos/demo-peluqueria.html" },
  { title: "Fontanería García", category: "Servicios · Urgencias 24h", desc: "Landing optimizada para captar llamadas urgentes.", color: "#6EA3C9", bg: "linear-gradient(135deg, #080e1a, #0a1525)", tag: "Fontanería", url: "/demos/demo-fontanero.html" },
  { title: "Taller Rueda", category: "Taller Mecánico", desc: "Web profesional con diagnosis y servicios técnicos.", color: "#C96E6E", bg: "linear-gradient(135deg, #1a0808, #250a0a)", tag: "Taller", url: "/demos/demo-taller.html" },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" ref={ref} className="section-pad" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px", fontWeight: 600 }}>
            Nuestro trabajo
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px",
          }}>
            Proyectos que<br />
            <span className="gold-gradient">hablan por sí solos</span>
          </h2>
        </motion.div>

        <div className="auto-grid-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: "18px", overflow: "hidden", cursor: "pointer",
                border: `1px solid ${hovered === i ? p.color + "40" : "rgba(255,255,255,0.06)"}`,
                transition: "all 0.35s ease",
                transform: hovered === i ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hovered === i ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${p.color}12` : "none",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div style={{
                height: "180px", background: p.bg,
                position: "relative", display: "flex",
                alignItems: "center", justifyContent: "center", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", width: "140px", height: "140px", borderRadius: "50%",
                  border: `1px solid ${p.color}30`, top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                }} />
                <div style={{
                  fontFamily: "var(--font-playfair)", fontSize: "22px", fontWeight: 800,
                  color: p.color, letterSpacing: "1px", position: "relative", zIndex: 1,
                  textShadow: `0 0 30px ${p.color}60`,
                }}>
                  {p.title}
                </div>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{
                        position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                      }}
                    >
                      <ExternalLink size={14} color="#C9A96E" />
                      <span style={{ color: "#C9A96E", fontWeight: 600, fontSize: "13px" }}>Ver Demo</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div style={{ padding: "18px", background: "#111" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px", gap: "8px" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "16px", fontWeight: 700, color: "#fff" }}>{p.title}</h3>
                  <span style={{
                    fontSize: "9px", letterSpacing: "0.5px", textTransform: "uppercase",
                    color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30`,
                    padding: "3px 8px", borderRadius: "50px", whiteSpace: "nowrap", flexShrink: 0,
                  }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: "11px", color: "#666", marginBottom: "2px" }}>{p.category}</p>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
