"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, Search, Compass, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CustomConfig() {
  const t = useTranslations("customConfig");

  // Definimos los pasos dinámicamente dentro del componente para consumir las traducciones de `t`
  const stepsList = [
    {
      number: "01.",
      title: t("steps.01.title"),
      description: t("steps.01.description"),
      icon: Search,
    },
    {
      number: "02.",
      title: t("steps.02.title"),
      description: t("steps.02.description"),
      icon: Compass,
    },
    {
      number: "03.",
      title: t("steps.03.title"),
      description: t("steps.03.description"),
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-neutral-900 relative overflow-hidden">
      
      {/* Detalle decorativo superior */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase border-b-2 border-blue-600 pb-1">
                {t("badge")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-neutral-950 pt-2 leading-tight">
                {t("mainTitle")}
              </h2>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 group active:scale-95"
              >
                <span className="font-bold text-sm tracking-wide">{t("ctaButton")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Steps Container */}
            <div className="space-y-4 pt-6">
              {stepsList.map((step) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.number} 
                    className="group flex gap-5 p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-blue-50/30 hover:border-blue-100 transition-all duration-300"
                  >
                    {/* Badge e Icono */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/60 font-['Manrope']">
                        {step.number}
                      </span>
                      <div className="p-2.5 bg-white rounded-xl border border-neutral-100 text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Contenido de texto */}
                    <div className="space-y-1.5 pt-0.5">
                      <h3 className="text-lg font-bold text-neutral-950 font-['Manrope'] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <p className="text-neutral-500 text-base sm:text-lg leading-relaxed font-medium lg:pt-10">
              {t("introText")}
            </p>

            {/* Imagen Lateral con efecto tecnológico */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur-md opacity-5 group-hover:opacity-10 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-neutral-100 shadow-xl shadow-neutral-200/50">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=530&fit=crop"
                  alt={t("imageAlt")}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/10 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}