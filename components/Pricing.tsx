"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, Star, MessageCircle, Wrench, Zap, Globe } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "290",
    subtitle: "Perfecto para empezar",
    featured: false,
    features: [
      { icon: Globe, text: "Diseño web profesional completo" },
      { icon: Zap, text: "Responsive en todos los dispositivos" },
      { icon: Check, text: "Optimización SEO básica" },
      { icon: Check, text: "Formulario de contacto" },
      { icon: Check, text: "Integración redes sociales" },
      { icon: Check, text: "Entrega en 7-14 días" },
      { icon: Check, text: "Dominio y hosting 1er año" },
    ],
    notIncluded: ["Botón WhatsApp integrado", "Mantenimiento web anual"],
    cta: "Empezar con Básico",
  },
  {
    name: "Advanced",
    price: "390",
    subtitle: "La elección profesional",
    featured: true,
    features: [
      { icon: Globe, text: "Todo lo del plan Básico" },
      { icon: MessageCircle, text: "Botón WhatsApp integrado" },
      { icon: Wrench, text: "1 año de mantenimiento incluido" },
      { icon: Zap, text: "Velocidad avanzada optimizada" },
      { icon: Check, text: "Actualizaciones de contenido" },
      { icon: Check, text: "Copias de seguridad automáticas" },
      { icon: Check, text: "Soporte prioritario 12 meses" },
    ],
    notIncluded: [],
    cta: "Quiero el Advanced",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precios" ref={ref} className="section-pad">
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px", fontWeight: 600 }}>
            Inversión
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "14px",
          }}>
            Planes transparentes,<br />
            <span className="gold-gradient">resultados reales</span>
          </h2>
          <p style={{ color: "#666", fontSize: "15px" }}>Sin sorpresas. Sin costes ocultos. Precio cerrado desde el primer día.</p>
        </motion.div>

        <div className="auto-grid-2" style={{ alignItems: "start" }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                borderRadius: "20px",
                border: `1px solid ${plan.featured ? "rgba(201,169,110,0.4)" : "rgba(255,255,255,0.08)"}`,
                padding: plan.featured ? "36px 28px" : "28px",
                background: plan.featured
                  ? "linear-gradient(135deg, rgba(201,169,110,0.07), rgba(160,120,64,0.03))"
                  : "rgba(255,255,255,0.02)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {plan.featured && (
                <>
                  <div style={{
                    position: "absolute", top: "16px", right: "16px",
                    background: "linear-gradient(135deg, #A07840, #C9A96E)",
                    color: "#0A0A0A", fontSize: "9px", fontWeight: 700,
                    letterSpacing: "1px", textTransform: "uppercase",
                    padding: "5px 12px", borderRadius: "50px",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <Star size={9} fill="#0A0A0A" /> Popular
                  </div>
                  <div style={{
                    position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
                    width: "250px", height: "250px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,169,110,0.1), transparent 70%)",
                    pointerEvents: "none",
                  }} />
                </>
              )}

              <h3 style={{
                fontFamily: "var(--font-playfair)", fontSize: "20px", fontWeight: 700,
                color: plan.featured ? "#C9A96E" : "#fff", marginBottom: "4px",
              }}>{plan.name}</h3>
              <p style={{ color: "#555", fontSize: "13px", marginBottom: "20px" }}>{plan.subtitle}</p>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "3px", marginBottom: "24px" }}>
                <span style={{ color: plan.featured ? "#C9A96E" : "#777", fontSize: "18px", fontWeight: 700, marginTop: "6px" }}>€</span>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(52px, 8vw, 68px)",
                  fontWeight: 900, color: "#fff", lineHeight: 1,
                }}>{plan.price}</span>
              </div>
              <p style={{ color: "#444", fontSize: "12px", marginBottom: "24px" }}>Pago único · Sin cuotas mensuales</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "24px" }}>
                {plan.features.map((f) => (
                  <div key={f.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%",
                      background: "rgba(201,169,110,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <f.icon size={11} color="#C9A96E" />
                    </div>
                    <span style={{ fontSize: "13px", color: "#bbb" }}>{f.text}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", opacity: 0.3 }}>
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%",
                      background: "rgba(255,255,255,0.04)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <span style={{ color: "#555", fontSize: "11px" }}>—</span>
                    </div>
                    <span style={{ fontSize: "13px", color: "#555", textDecoration: "line-through" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className={plan.featured ? "btn-gold" : ""}
                style={{
                  display: "block", textAlign: "center", padding: "14px",
                  borderRadius: "10px", fontSize: "13px", fontWeight: 600,
                  letterSpacing: "0.3px", textDecoration: "none",
                  border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                  color: plan.featured ? "#0A0A0A" : "#fff",
                  background: plan.featured ? undefined : "rgba(255,255,255,0.02)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { if (!plan.featured) { e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; e.currentTarget.style.color = "#C9A96E"; }}}
                onMouseLeave={e => { if (!plan.featured) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "28px", color: "#444", fontSize: "13px" }}
        >
          ¿Tienes dudas? <a href="#contacto" style={{ color: "#C9A96E", textDecoration: "none" }}>Hablemos sin compromiso →</a>
        </motion.p>
      </div>
    </section>
  );
}
