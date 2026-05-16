"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Mail, AtSign, Phone } from "lucide-react";

function WhatsAppIcon({ size = 16, color = "#25D366" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", color: "#fff", fontSize: "14px",
    outline: "none", transition: "border-color 0.3s ease",
    fontFamily: "var(--font-inter), sans-serif",
  };

  return (
    <section id="contacto" ref={ref} className="section-pad" style={{ position: "relative" }}>
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "500px", height: "300px",
        background: "radial-gradient(ellipse, rgba(201,169,110,0.05), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px", fontWeight: 600 }}>
            Hablemos
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px",
          }}>
            ¿Listo para tener<br />
            <span className="gold-gradient">la web que mereces?</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sent ? (
              <div style={{
                textAlign: "center", padding: "48px 24px",
                background: "rgba(201,169,110,0.05)",
                border: "1px solid rgba(201,169,110,0.2)", borderRadius: "20px",
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "22px", color: "#C9A96E", marginBottom: "10px" }}>
                  ¡Mensaje recibido!
                </h3>
                <p style={{ color: "#777", lineHeight: 1.6 }}>Te contactamos en menos de 24h.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(160px,100%), 1fr))", gap: "12px" }}>
                  <input type="text" placeholder="Tu nombre" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                  <input type="email" placeholder="Tu email" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                </div>
                <select required value={form.project}
                  onChange={e => setForm({ ...form, project: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)"}
                  onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>
                  <option value="" style={{ background: "#111" }}>¿Qué necesitas?</option>
                  <option value="basico" style={{ background: "#111" }}>Plan Básico — 290€</option>
                  <option value="advanced" style={{ background: "#111" }}>Plan Advanced — 390€</option>
                  <option value="duda" style={{ background: "#111" }}>Solo tengo una duda</option>
                </select>
                <textarea placeholder="Cuéntame sobre tu proyecto..." rows={4} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)"}
                  onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"} />
                <button type="submit" className="btn-gold" style={{
                  padding: "14px", borderRadius: "10px", border: "none", cursor: "pointer",
                  fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                }}>
                  Enviar mensaje <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>
                Respuesta en menos de 24h
              </h3>
              <p style={{ color: "#666", lineHeight: 1.7, fontSize: "14px" }}>
                Cuéntanos tu idea y te preparamos una propuesta a medida sin ningún compromiso.
              </p>
            </div>

            {[
              { icon: WhatsAppIcon, label: "WhatsApp", value: "+34 699 588 341", href: "https://wa.me/34699588341?text=Hola!%20Me%20interesa%20una%20web%20profesional", color: "#25D366" },
              { icon: Mail, label: "Email", value: "ivanlp2020@gmail.com", href: "mailto:ivanlp2020@gmail.com", color: "#C9A96E" },
              { icon: AtSign, label: "Instagram", value: "@vitrinadesign2026", href: "https://instagram.com/vitrinadesign2026", color: "#E1306C" },
              { icon: Phone, label: "Teléfono", value: "699 588 341", href: "tel:+34699588341", color: "#6EA3C9" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px", background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px",
                textDecoration: "none", transition: "all 0.3s ease", color: "#fff",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}40`; e.currentTarget.style.background = `${c.color}08`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "9px",
                  background: `${c.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <c.icon size={16} color={c.color} />
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#444", letterSpacing: "1px", textTransform: "uppercase" }}>{c.label}</div>
                  <div style={{ fontSize: "13px", fontWeight: 500 }}>{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
