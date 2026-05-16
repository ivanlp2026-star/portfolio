"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Precios", href: "#precios" },
  { label: "Reseñas", href: "#resenas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: scrolled ? "10px" : "16px",
          left: "16px",
          right: "16px",
          zIndex: 100,
          transition: "top 0.4s ease",
        }}
      >
        <div style={{
          background: scrolled ? "rgba(10,10,10,0.96)" : "rgba(10,10,10,0.55)",
          border: "1px solid rgba(201,169,110,0.2)",
          backdropFilter: "blur(24px)",
          borderRadius: "14px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          transition: "background 0.4s ease",
        }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: "28px", height: "28px",
              background: "linear-gradient(135deg, #A07840, #C9A96E)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ color: "#0A0A0A", fontWeight: 900, fontSize: "13px", fontFamily: "var(--font-playfair)" }}>V</span>
            </div>
            <span style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(13px, 2vw, 17px)",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#fff",
              whiteSpace: "nowrap",
            }}>
              VITRINA <span style={{ color: "#C9A96E" }}>DESIGN</span>
            </span>
          </a>

          {/* Desktop links — visible ≥1024px via CSS */}
          <div className="nav-desktop-links" style={{ gap: "20px", alignItems: "center", flex: 1, justifyContent: "center" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{
                color: "#777", fontSize: "11px", letterSpacing: "1.5px",
                textTransform: "uppercase", textDecoration: "none",
                transition: "color 0.3s", fontWeight: 500, whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
              onMouseLeave={e => (e.currentTarget.style.color = "#777")}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA — visible ≥1024px via CSS */}
          <a href="#contacto" className="nav-desktop-cta btn-gold" style={{
            padding: "9px 18px", borderRadius: "50px",
            fontSize: "11px", letterSpacing: "0.5px",
            textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
          }}>
            Solicitar Proyecto
          </a>

          {/* Mobile hamburger — visible <1024px via CSS */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{
              color: "#C9A96E", background: "none", border: "none",
              cursor: "pointer", padding: "4px", alignItems: "center",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              style={{
                marginTop: "8px",
                background: "rgba(10,10,10,0.97)",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "14px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                transformOrigin: "top",
              }}
            >
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: "#ccc", textDecoration: "none", fontSize: "15px",
                    padding: "11px 12px", borderRadius: "8px", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.08)"; e.currentTarget.style.color = "#C9A96E"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ccc"; }}>
                  {l.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setOpen(false)} className="btn-gold"
                style={{ padding: "13px", borderRadius: "10px", textAlign: "center", textDecoration: "none", fontSize: "14px", marginTop: "6px" }}>
                Solicitar Proyecto
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
