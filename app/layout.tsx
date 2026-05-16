import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitrina Design — Diseño y Desarrollo Web Premium",
  description: "Creamos webs que venden. Diseño y desarrollo web profesional desde 290€. Más de 150 clientes satisfechos.",
  keywords: "diseño web, desarrollo web, landing page, páginas web profesionales, diseño web España",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
