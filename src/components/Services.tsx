"use client";

import { Target, Workflow, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  // Definimos la configuración de servicios utilizando llaves dinámicas para las traducciones
  const servicesList = [
    {
      key: "capture",
      icon: Target,
      colorClass: "from-blue-500 to-indigo-500 text-blue-400 bg-blue-500/10",
    },
    {
      key: "conversion",
      icon: Workflow,
      colorClass: "from-indigo-500 to-purple-500 text-indigo-400 bg-indigo-500/10",
    },
    {
      key: "measurement",
      icon: BarChart3,
      colorClass: "from-purple-500 to-pink-500 text-purple-400 bg-purple-500/10",
    },
  ];

  return (
    <section id="servicios" className="relative py-20 lg:py-28 bg-black text-white overflow-hidden">
      
      {/* Resplandor radial de fondo para dar profundidad tecnológica */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center">
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase border-b-2 border-indigo-500 pb-1">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white font-['Manrope'] tracking-tight leading-tight max-w-3xl mx-auto">
            {t("mainTitle")}
          </h2>
        </div>

        {/* Grilla de Servicios */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.key} 
                className="group relative rounded-3xl p-6 lg:p-8 border border-neutral-900 bg-neutral-950/50 hover:bg-neutral-900/40 hover:border-neutral-800 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Sutil brillo interactivo en la esquina de la tarjeta al hacer hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Icono encapsulado */}
                  <div className={`inline-flex p-3 rounded-2xl border border-neutral-800 ${service.colorClass} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Textos */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white font-['Manrope'] tracking-tight">
                      {t(`items.${service.key}.title`)}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                      {t(`items.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}