"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import {
  ArrowRight,
  AlertCircle,
  Loader2,
  DollarSign,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CustomProductPage() {
  const t = useTranslations("customPlan");
  const router = useRouter();
  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | "">("");

  // Campos de contacto del cliente
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const finalPrice = Number(totalPrice) || 0;

    // Validaciones de todos los campos solicitados
    if (!firstName.trim()) {
      setError(t("errors.firstNameRequired"));
      return;
    }

    if (!lastName.trim()) {
      setError(t("errors.lastNameRequired"));
      return;
    }

    if (!phone.trim()) {
      setError(t("errors.phoneRequired"));
      return;
    }

    if (!email.trim()) {
      setError(t("errors.emailRequired"));
      return;
    }

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Nombre del producto concatenado con todos los datos
    const customProductName = `Custom - ${folioUpper} (${cleanFirstName} ${cleanLastName} - Tel: ${cleanPhone} - Email: ${cleanEmail})`;
    const customProductDescription = `Custom - ${folioUpper} (${cleanFirstName} ${cleanLastName} - Tel: ${cleanPhone} - Email: ${cleanEmail})`;

    addItem(
      {
        image: "/logo.png",
        description: customProductDescription,
        id: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
        name: customProductName,
        price: finalPrice,
        features: [],
        fullDescription: ""
      },
      1
    );

    setTimeout(() => {
      setIsAdding(false);
      router.push("/carrito");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden pb-32 selection:bg-blue-500/20 selection:text-blue-900">
      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-32 lg:pt-40">

        {/* Hero Section */}
        {/* Hero Section */}
        <section className="py-12 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
          {/* Sutil halo azul de fondo */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-blue-400 font-['Manrope'] tracking-tight">
                {t("hero.titleHighlight")}
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 font-['Manrope'] tracking-tight">
                {t("hero.titleMain")}
              </h1>
              <h1 className="text-2xl pt-10 font-extrabold text-slate-900 font-['Manrope'] tracking-tight">
                {t("hero.subtitle")}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
                {t("hero.description")}
              </p>

              {/* Sección de Entregables / Incluye */}
              <div className="mt-8">
                <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  {t("hero.includesTitle")}
                </h4>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("hero.features.item1"),
                    t("hero.features.item2"),
                    t("hero.features.item3"),
                    t("hero.features.item4"),
                    t("hero.features.item5")
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100/80 hover:border-slate-200 transition-colors duration-200"
                    >
                      {/* Icono Check Minimalista */}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm text-slate-600 font-medium leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloque de Inversión Destacada */}
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 text-white shadow-sm">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {t("hero.investmentLabel")}
                </span>
                <div className="h-4 w-[1px] bg-slate-700" />
                <p className="text-sm font-semibold">
                  {t("hero.investmentValue")}{" "}
                  <span className="text-slate-300 font-normal">
                    {t("hero.investmentTax")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección del Formulario */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(30,58,138,0.15)]">

            {/* Reflejo radial interno sutil */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.04),transparent_50%)]" />

            <div className="relative z-10 w-full">
              <div className="mb-8">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-2">
                  {t("form.badge")}
                </span>

                <h2 className="font-oswald text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {t("form.title")}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {t("authorized.description")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 backdrop-blur-md">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Grid para Nombre y Apellido */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Input Nombre */}
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                    >
                      {t("form.firstNameLabel")}
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder={t("form.firstNamePlaceholder")}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Input Apellido */}
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                    >
                      {t("form.lastNameLabel")}
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder={t("form.lastNamePlaceholder")}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Grid para Teléfono y Correo */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Input Teléfono */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                    >
                      {t("form.phoneLabel")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder={t("form.phonePlaceholder")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Input Correo Electrónico */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                    >
                      {t("form.emailLabel")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Input Folio/Cotización */}
                <div className="space-y-2">
                  <label
                    htmlFor="quoteNumber"
                    className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                  >
                    {t("form.quoteLabel")}
                  </label>
                  <input
                    id="quoteNumber"
                    type="text"
                    required
                    placeholder={t("form.quotePlaceholder")}
                    value={quoteNumber}
                    onChange={(e) => setQuoteNumber(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm font-mono uppercase tracking-widest text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Input Monto total */}
                <div className="space-y-2">
                  <label
                    htmlFor="totalPrice"
                    className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                  >
                    {t("form.amountLabel")}
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-blue-500">
                      <DollarSign className="h-4 w-4" />
                    </div>

                    <input
                      id="totalPrice"
                      type="number"
                      required
                      step="0.01"
                      min="0.01"
                      placeholder={t("form.amountPlaceholder")}
                      value={totalPrice}
                      onChange={(e) =>
                        setTotalPrice(
                          e.target.value !== "" ? Number(e.target.value) : ""
                        )
                      }
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-11 pr-16 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                      <span className="text-xs font-bold tracking-wider text-slate-400">
                        MXN
                      </span>
                    </div>
                  </div>

                  <p className="pl-1 text-[11px] text-slate-400">
                    {t("form.taxNote")}
                  </p>
                </div>

                {/* Botón de envío - Botón Azul con fondo Blanco */}
                <div className="pt-4">
                  <motion.button
                    whileTap={!isAdding ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={isAdding}
                    className={[
                      "group flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-sm font-bold transition-all duration-300 uppercase tracking-wider border-2",
                      isAdding
                        ? "cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200"
                        : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50 shadow-[0_4px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.25)]",
                    ].join(" ")}
                  >
                    {isAdding ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                        <span>{t("buttons.adding")}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("buttons.addToCart")}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}