"use client";

import { Search, Layers, Cpu } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Methodology() {
  const t = useTranslations("methodology");

  // Almacenamos la estructura de los pasos asociando cada clave de traducción con su icono correspondiente
  const steps = [
    {
      number: "01.",
      title: t("steps.diagnostic.title"),
      description: t("steps.diagnostic.description"),
      icon: Search,
    },
    {
      number: "02.",
      title: t("steps.architecture.title"),
      description: t("steps.architecture.description"),
      icon: Layers,
    },
    {
      number: "03.",
      title: t("steps.implementation.title"),
      description: t("steps.implementation.description"),
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-neutral-900 relative overflow-hidden">
      
      {/* Detalle decorativo superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />
          <p className="text-xs text-blue-700 font-bold tracking-wider uppercase">
            {t("badge")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-3">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase border-b-2 border-blue-600 pb-1">
                {t("subtitle")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-neutral-950 pt-2 leading-tight">
                {t("title")}
              </h2>
            </div>

            {/* List of Steps */}
            <div className="space-y-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.number} 
                    className="group flex gap-4 p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-blue-50/30 hover:border-blue-100 transition-all duration-300"
                  >
                    {/* Indicador Numérico e Icono */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 font-['Manrope']">
                        {step.number}
                      </span>
                      <div className="p-2.5 bg-white rounded-xl border border-neutral-100 text-neutral-600 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Textos */}
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
            <p className="text-neutral-500 text-base sm:text-lg leading-relaxed font-medium lg:pt-8">
              {t("rightText")}
            </p>

            {/* Contenedor de Imagen Estilizado */}
            <div className="relative group">
              {/* Resplandor decorativo trasero */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.25rem] blur opacity-5 group-hover:opacity-10 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-neutral-100 shadow-xl shadow-neutral-200/50">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=530&fit=crop"
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