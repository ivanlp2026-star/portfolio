"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Globe, Zap, Shield, Smartphone, BarChart3, Palette } from "lucide-react";

const services = [
  { icon: Palette, title: "Diseño UI/UX Premium", desc: "Interfaces que enamoran. Cada pixel pensado para transmitir confianza y llevar al usuario a la acción." },
  { icon: Globe, title: "Desarrollo Web", desc: "Código limpio y rápido. Webs que cargan en segundos y funcionan perfecto en cualquier dispositivo." },
  { icon: Smartphone, title: "100% Responsive", desc: "Tu web perfecta en móvil, tablet y escritorio. Sin compromisos, sin bugs de diseño." },
  { icon: Zap, title: "Optimización SEO", desc: "Posicionamos tu web para que Google te encuentre. Técnicas blancas y resultados reales." },
  { icon: BarChart3, title: "Analytics & Conversión", desc: "No solo hacemos webs bonitas — las hacemos que conviertan. Medimos y mejoramos." },
  { icon: Shield, title: "Mantenimiento Web", desc: "Tu web siempre segura y actualizada. El plan Advanced incluye 1 año completo." },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" ref={ref} className="section-pad" style={{ position: "relative" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px", fontWeight: 600 }}>
            Lo que hacemos
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px",
          }}>
            Todo lo que necesita<br />
            <span className="gold-gradient">tu negocio online</span>
          </h2>
        </motion.div>

        <div className="auto-grid-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glass"
              style={{ borderRadius: "16px", padding: "28px", position: "relative", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "60px", height: "60px",
                background: "radial-gradient(circle at top right, rgba(201,169,110,0.08), transparent 70%)",
              }} />
              <div style={{
                width: "44px", height: "44px",
                background: "rgba(201,169,110,0.1)",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px", color: "#C9A96E",
              }}>
                <s.icon size={20} />
              </div>
              <h3 style={{
                fontFamily: "var(--font-playfair)", fontSize: "17px",
                fontWeight: 700, marginBottom: "8px", color: "#fff",
              }}>
                {s.title}
              </h3>
              <p style={{ color: "#777", lineHeight: 1.6, fontSize: "14px" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
