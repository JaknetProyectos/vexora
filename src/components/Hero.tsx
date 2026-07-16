"use client";

import { Zap } from "lucide-react"; // Importamos un ícono para el detalle tecnológico
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section 
      id="inicio" 
      className="relative overflow-hidden bg-indigo-900 py-12 md:py-20 lg:py-28 animate-fade-in"
    >
      {/* Fondo decorativo sutil: patrón de malla tecnológica */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid-pattern.svg')] bg-center"></div>
      
      {/* Resplandor radial de fondo para profundidad */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
            
            {/* Pequeño badge introductorio */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-800 text-blue-200 text-xs font-semibold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              {t("badge")}
            </div>

            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium text-white font-['Manrope'] leading-[1.05] italic tracking-tight">
                {t("title.line1")}
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium text-blue-100 font-['Manrope'] leading-[1.05] tracking-tight">
                {t("title.line2")}
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white font-['Manrope'] leading-[1.05] tracking-tighter">
                {t("title.line3")}
              </h1>
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white font-['Manrope'] leading-[1.05] tracking-tighter">
                  {t("title.line4")}
                  {/* Subrayado modernizado: Gradiente y bordes redondeados */}
                  <span className="absolute -bottom-3 left-0 w-[110%] h-[8px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/20" />
                </h1>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white font-['Manrope'] leading-[1.05] tracking-tighter pl-12 sm:pl-20 lg:pl-24">
                {t("title.line5")}
              </h1>
            </div>

            <p className="text-blue-100 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed pt-2 font-medium">
              {t("description")}
            </p>
          </div>

          {/* Right Image / Mockup */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 animate-fade-in-right">
            {/* Contenedor estilo "Ventana de Software" */}
            <div className="relative rounded-3xl p-1 bg-white/5 border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-sm transform hover:scale-[1.03] transition-all duration-500 ease-out">
              
              {/* Barra superior de la ventana */}
              <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/10 mb-1">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              {/* Imagen con bordes redondeados internos */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt={t("imageAlt")}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Superposición de gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}