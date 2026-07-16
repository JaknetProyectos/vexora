"use client";

import { ShieldAlert, Expand, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Differentiators() {
  const t = useTranslations("differentiators");

  // Definimos los diferenciadores de forma dinámica dentro del componente para que hereden las traducciones de `t`
  const differentiatorsList = [
    {
      number: "01.",
      title: t("items.01.title"),
      description: t("items.01.description"),
      icon: ShieldAlert,
    },
    {
      number: "02.",
      title: t("items.02.title"),
      description: t("items.02.description"),
      icon: Expand,
    },
    {
      number: "03.",
      title: t("items.03.title"),
      description: t("items.03.description"),
      icon: ArrowUpRight,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-neutral-900 relative overflow-hidden">
      
      {/* Detalle decorativo de fondo sutil */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (Texto introductorio e Imagen) */}
          <div className="space-y-10">
            <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-md font-medium">
              {t("introText")}
            </p>

            {/* Contenedor de la Imagen con efecto moderno */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur-md opacity-10 group-hover:opacity-20 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-neutral-100 shadow-xl shadow-neutral-200/50">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=560&fit=crop"
                  alt={t("imageAlt")}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right Content (Diferenciadores) */}
          <div className="space-y-10 lg:pl-4">
            
            {/* Títulos */}
            <div className="space-y-3">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase border-b-2 border-blue-600 pb-1">
                {t("badge")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-neutral-950 pt-2 leading-tight">
                {t("mainTitle")}
              </h2>
            </div>

            {/* Lista de Diferenciadores */}
            <div className="space-y-5">
              {differentiatorsList.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.number} 
                    className="group flex gap-5 p-5 rounded-2xl border border-neutral-100 bg-neutral-50/40 hover:bg-blue-50/20 hover:border-blue-100 transition-all duration-300"
                  >
                    {/* Badge e Icono */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/60 font-['Manrope']">
                        {item.number}
                      </span>
                      <div className="p-2.5 bg-white rounded-xl border border-neutral-100 text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="space-y-1.5 pt-0.5">
                      <h3 className="text-lg font-bold text-neutral-950 font-['Manrope'] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}