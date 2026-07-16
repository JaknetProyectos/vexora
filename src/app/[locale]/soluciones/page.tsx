"use client";

import CTASection from "@/components/CTASection";

import { ArrowRight } from "lucide-react";
import { useSolutions } from "@/hooks/useSolutions";
import { formatPrice } from "@/lib/price";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

export default function SolucionesPage() {
  const t = useTranslations("soluciones");
  const { solutions } = useSolutions();
  const { addItem } = useCart();

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-900">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Sutil halo azul de fondo */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-blue-400 font-['Manrope'] tracking-tight">
              {t("hero.subtitle")}
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 font-['Manrope'] tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="group border border-slate-100 rounded-[1.8rem] bg-white p-8 hover:border-blue-200/60 shadow-[0_10px_30px_rgba(30,58,138,0.04)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Reflejo de fondo sutil al hacer hover en la tarjeta */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.02),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">
                      {solution.id}
                    </span>
                    <span className="text-xs text-slate-300">•</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      {t("solutionStatus")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-['Manrope'] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.name}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex items-baseline">
                    <span className="text-3xl font-extrabold text-slate-900 font-['Manrope']">
                      ${formatPrice(solution.price)}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 ml-2 uppercase tracking-wider">
                      {t("currencyTax")}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addItem({
                        id: solution.id,
                        description: solution.description,
                        image: "/logo.png",
                        name: solution.name,
                        price: solution.price
                      })
                    }}
                    className="inline-flex hover:cursor-pointer items-center justify-center w-full gap-2 border-2 border-blue-600 text-blue-600 bg-white px-5 py-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 text-sm font-bold uppercase tracking-wider group/btn"
                  >
                    <span>{t("hireButton")}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}