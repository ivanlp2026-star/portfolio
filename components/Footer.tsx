"use client";

export default function Footer() {
  return (
    <footer style={{
      padding: "32px 20px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      background: "#080808",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "24px", height: "24px",
            background: "linear-gradient(135deg, #A07840, #C9A96E)",
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#0A0A0A", fontWeight: 900, fontSize: "11px", fontFamily: "var(--font-playfair)" }}>V</span>
          </div>
          <span style={{ fontFamily: "var(--font-playfair)", fontSize: "14px", fontWeight: 700, letterSpacing: "2px", color: "#fff" }}>
            VITRINA <span style={{ color: "#C9A96E" }}>DESIGN</span>
          </span>
        </div>

        <p style={{ color: "#333", fontSize: "12px" }}>
          © {new Date().getFullYear()} Vitrina Design. Todos los derechos reservados.
        </p>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {["Privacidad", "Aviso Legal", "Cookies"].map(l => (
            <a key={l} href="#" style={{ color: "#333", fontSize: "11px", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#C9A96E"}
              onMouseLeave={e => e.currentTarget.style.color = "#333"}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
