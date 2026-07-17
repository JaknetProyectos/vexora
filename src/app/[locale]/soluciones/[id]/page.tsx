"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import CTASection from "@/components/CTASection";
import { useCart } from "@/context/CartContext";
import { useSolutions } from "@/hooks/useSolutions";
import { formatPrice } from "@/lib/price";
import { ArrowLeft, Plus, Minus, ShoppingCart, CheckCircle2 } from "lucide-react";

export default function PlanDetailPage() {
    const params = useParams();
    const router = useRouter();
    const t = useTranslations("PlanDetail");
    const { solutions } = useSolutions();
    const { addItem } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    // 1. Buscamos el plan.
    const plan = solutions.find((solution) => solution.id === params?.id);

    // 2. Control de renderizado si no existe el plan (Guarda de tipo para TS)
    if (!plan) {
        return (
            <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold text-slate-900 font-['Manrope']">
                        {t("notFound.title")}
                    </h1>
                    <p className="text-slate-500">
                        {t("notFound.message")}
                    </p>
                    <button
                        onClick={() => router.push("/soluciones")}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                        <ArrowLeft className="w-4 h-4" /> {t("notFound.backButton")}
                    </button>
                </div>
            </main>
        );
    }

    // Manejo de cantidad
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const handleIncrease = () => setQuantity((prev) => prev + 1);

    const handleAddToCart = () => {
        setIsAdding(true);
        addItem(
            {
                id: plan.id,
                description: plan.description,
                image: plan.image || "/logo.png",
                name: plan.name,
                price: plan.price,
                features: plan.features,
                fullDescription: plan.fullDescription
            },
            quantity
        );

        setTimeout(() => {
            setIsAdding(false);
        }, 800);
    };

    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 pt-24 pb-12">
            {/* Capas sutiles de brillo de fondo azul (Aura estética) */}
            <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
                {/* Botón de regreso */}
                <button
                    onClick={() => router.back()}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    {t("backLink")}
                </button>

                {/* Grid Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Columna Izquierda: Imagen del Plan con Contenedor de Sombra Azul */}
                    <div className="lg:col-span-5 w-full aspect-square bg-white border border-slate-100 rounded-[2.5rem] p-8 flex items-center justify-center shadow-[0_20px_50px_rgba(30,58,138,0.08)] relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02),transparent_70%)]" />
                        <img
                            src={plan.image || "/logo.png"}
                            alt={plan.name}
                            className="w-4/5 h-4/5 object-contain max-h-[350px] transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Columna Derecha: Información y Compra */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-3">
                            <span className="text-xs text-blue-600 font-bold uppercase tracking-widest block">
                                {t("planIdLabel")}: {plan.id}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Manrope'] tracking-tight">
                                {plan.name}
                            </h1>
                            <div className="pt-2 flex items-baseline gap-2">
                                <span className="text-3xl font-black text-slate-900 font-['Manrope']">
                                    ${formatPrice(plan.price)}
                                </span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {t("currencySuffix")}
                                </span>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Descripción extendida */}
                        <div className="space-y-3">
                            <p className="text-slate-600 leading-relaxed text-base">
                                {plan.fullDescription || plan.description}
                            </p>
                        </div>

                        {/* Alcance / Features */}
                        {plan.features && plan.features.length > 0 && (
                            <div className="space-y-4 bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    {t("scopeTitle")}
                                </h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Selectores de cantidad y Compra */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">

                            {/* Selector de Cantidad Estilo Premium */}
                            <div className="flex items-center justify-between border-2 border-slate-200 rounded-2xl h-14 px-4 bg-white sm:w-36 shrink-0">
                                <button
                                    type="button"
                                    onClick={handleDecrease}
                                    className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                                    aria-label={t("quantityDecrease")}
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-sm font-extrabold text-slate-900 w-8 text-center font-mono">
                                    {quantity}
                                </span>
                                <button
                                    type="button"
                                    onClick={handleIncrease}
                                    className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                                    aria-label={t("quantityIncrease")}
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Botón de Agregar al carrito (Azul Premium con texto Blanco) */}
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                disabled={isAdding}
                                className="flex-1 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-sm font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isAdding ? (
                                    <>
                                        <ShoppingCart className="w-4 h-4 animate-bounce" />
                                        <span>{t("cart.adding")}</span>
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>{t("cart.add")}</span>
                                    </>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <CTASection />
        </main>
    );
}