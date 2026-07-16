import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./[locale]/ClientBody";

// Configuración de las fuentes de Google
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Vexora - Sistemas que convierten sin intervención",
  description: "Diseñamos y desplegamos arquitecturas de conversión automatizadas que capturan, califican y dan seguimiento a tus oportunidades comerciales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>

      </head>
      <body
        suppressHydrationWarning
        className="antialiased font-body bg-[#0b0f12] text-black-100 selection:bg-[#79a1ea] selection:text-[#0b0f12]"
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}