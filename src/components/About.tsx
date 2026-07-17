"use client";

import { Infinity, Target, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden">
      {/* Sutil resplandor de fondo morado/azul para dar profundidad */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Image (Contenedor Estilizado) */}
          <div className="relative group">
            {/* Efecto de resplandor trasero al hacer hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=690&fit=crop"
                alt={t("imageAlt")}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            
            {/* Título Principal */}
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Manrope'] tracking-tight">
                <span className="font-light text-neutral-400">{t("title.light")} </span>
                <span className="relative inline-block text-white">
                  {t("title.brandLine1")}
                  {/* Subrayado con gradiente azul-morado redondeado */}
                  <span className="absolute -bottom-2 left-0 w-full h-[5px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                </span>
              </h2>
            </div>

            {/* Bloque de Cita Rediseñado */}
            <div className="relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-indigo-500/10 pointer-events-none" />
              <blockquote className="text-xl sm:text-2xl text-neutral-100 font-['Manrope'] font-medium leading-relaxed">
                {t("quote")}
              </blockquote>
            </div>

            {/* Texto Descriptivo */}
            <div className="space-y-4 text-neutral-400 leading-relaxed text-sm sm:text-base">
              <p>{t("description.p1")}</p>
              <p>{t("description.p2")}</p>
              <p>{t("description.p3")}</p>
            </div>

            {/* Indicadores de Éxito (Features con Iconos de Lucide) */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/30 border border-neutral-900 hover:border-indigo-500/20 transition-all duration-300">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                  <Infinity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-100 font-bold">{t("features.f1")}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/30 border border-neutral-900 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-medium leading-snug">
                    {t("features.f2")}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}