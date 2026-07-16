"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section
      id="contacto"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-950 text-white overflow-hidden"
    >
      {/* Elementos decorativos de fondo (Esferas de luz tecnológica) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Badge de llamada a la acción */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-indigo-300 animate-pulse" />
          <p className="text-xs text-indigo-200 font-bold tracking-wider uppercase">
            {t("badge")}
          </p>
        </div>

        {/* Título */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Manrope'] tracking-tight leading-tight max-w-3xl mx-auto">
          {t("title")}
        </h2>

        {/* Descripción */}
        <p className="text-blue-100/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          {t("description")}
        </p>

        {/* Botón Principal Blanco e Interactivo */}
        <div className="pt-4">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-white text-indigo-950 hover:bg-neutral-50 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 group shadow-lg shadow-black/10 hover:shadow-white/10 active:scale-95"
          >
            <span>{t("buttonText")}</span>
            {/* Animación customizada de rebote (bounce) al hacer hover en el botón */}
            <ArrowUpRight className="w-4 h-4 text-indigo-950 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}