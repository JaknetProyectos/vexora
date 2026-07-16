"use client";

import { Loader2 } from "lucide-react";
import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Cambiar idioma"
      className="
        group
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        gap-0
        hover:gap-3
        rounded-full
        bg-white/80
        backdrop-blur-md
        border border-slate-200
        p-1.5
        shadow-[0_10px_30px_rgba(30,58,138,0.12)]
        hover:shadow-[0_15px_35px_rgba(30,58,138,0.2)]
        transition-all
        duration-500
        ease-out
        active:scale-90
        disabled:cursor-not-allowed
      "
    >
      {/* Círculo de Idioma Giratorio */}
      <div
        className={`
          relative
          h-11
          w-11
          rounded-full
          bg-slate-900
          text-white
          font-bold
          text-xs
          tracking-wider
          flex
          items-center
          justify-center
          shadow-md
          transition-transform
          duration-500
          ease-out
          border border-slate-800
          ${isPending ? "animate-spin" : "group-hover:rotate-[360deg]"}
        `}
      >
        {/* Idioma dentro del círculo */}
        <span className="select-none">
          {locale.toUpperCase()}
        </span>
      </div>

      {/* Etiqueta de Idioma Revelable (Se desliza en hover o pantallas táctiles) */}
      <div 
        className="
          max-w-0
          overflow-hidden
          group-hover:max-w-[100px]
          transition-all
          duration-500
          ease-out
          flex
          flex-col
          items-start
          justify-center
          pr-0
          group-hover:pr-3
        "
      >
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 leading-none">
          Idioma
        </span>
        <span className="text-xs font-black uppercase text-slate-900 leading-none mt-1">
          {locale === "es" ? "ES" : "EN"}
        </span>
      </div>

      {/* Spinner superpuesto sutilmente en caso de demora */}
      {isPending && (
        <div className="absolute inset-0 bg-white/60 rounded-full flex items-center justify-center z-30">
          <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
        </div>
      )}
    </button>
  );
}