"use client";
import { useScroll, useTransform, motion } from "motion/react";

const codeSnippets = [
  "<header>", "</div>", "display: flex", "border-radius:", "@media", "const App", "return (", "import {",
  ".container", "font-size:", "grid-template", "position:", "<!DOCTYPE>", "useState()", "async/await", "z-index:",
  "<section>", "max-width:", "transition:", "flex-direction", "box-shadow:", "transform:", "padding:", "margin: auto",
];

export default function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -120]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -60]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {/* Dot grid layer 1 - moves with scroll */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%", left: "-20%", right: "-20%", bottom: "-20%",
          backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          y: y1,
        }}
      />

      {/* Dot grid layer 2 - larger, slower */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%", left: "-20%", right: "-20%", bottom: "-20%",
          backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "80px 80px",
          y: y2,
        }}
      />

      {/* Code snippets floating */}
      <motion.div style={{ position: "absolute", inset: 0, y: y3 }}>
        {codeSnippets.map((snippet, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${8 + col * 24}%`,
                top: `${6 + row * 22}%`,
                fontSize: "11px",
                fontFamily: "'Courier New', monospace",
                color: "rgba(201,169,110,0.06)",
                whiteSpace: "nowrap",
                letterSpacing: "0.5px",
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                userSelect: "none",
              }}
            >
              {snippet}
            </div>
          );
        })}
      </motion.div>

      {/* Subtle vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.7) 100%)",
      }} />

      {/* Top and bottom fades */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to bottom, #0A0A0A, transparent)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to top, #0A0A0A, transparent)",
      }} />
    </div>
  );
}
