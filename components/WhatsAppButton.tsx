"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

function WhatsAppIcon({ size = 24, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "20px", zIndex: 200 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            style={{
              position: "absolute", bottom: "64px", right: 0,
              width: "260px", background: "#111",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "18px", padding: "20px",
              boxShadow: "0 16px 50px rgba(0,0,0,0.6)",
            }}
          >
            <div style={{
              width: "42px", height: "42px", background: "#25D366",
              borderRadius: "50%", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: "12px",
            }}>
              <WhatsAppIcon size={24} color="#fff" />
            </div>
            <p style={{ fontSize: "13px", color: "#bbb", lineHeight: 1.6, marginBottom: "14px" }}>
              ¡Hola! ¿Tienes un proyecto en mente? Escríbenos y te respondemos en minutos. 👋
            </p>
            <a
              href="https://wa.me/34699588341?text=Hola!%20Me%20interesa%20una%20web%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                background: "#25D366", color: "#fff",
                textAlign: "center", padding: "11px", borderRadius: "9px",
                textDecoration: "none", fontSize: "13px", fontWeight: 600,
              }}
            >
              <WhatsAppIcon size={16} color="#fff" />
              Abrir WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <>
          <motion.div animate={{ scale: [1, 1.8], opacity: [0.35, 0] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#25D366" }} />
          <motion.div animate={{ scale: [1, 2.1], opacity: [0.2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.35 }}
            style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#25D366" }} />
        </>
      )}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen(!open)}
        style={{
          position: "relative", width: "52px", height: "52px", borderRadius: "50%",
          background: open ? "#222" : "#25D366", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: open ? "none" : "0 6px 20px rgba(37,211,102,0.4)",
          transition: "background 0.3s ease",
        }}
      >
        {open ? <X size={20} color="#fff" /> : <WhatsAppIcon size={26} color="#fff" />}
      </motion.button>
    </div>
  );
}
