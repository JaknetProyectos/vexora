"use client";

import CTASection from "@/components/CTASection";
import { Link } from "@/i18n/routing";
import { ArrowUpRight, MapPin, Phone, Mail, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useContact } from "@/hooks/useContact";
import { useTranslations } from "next-intl";

export default function ContactoPage() {
  const t = useTranslations("contacto");
  const { sendContactForm, isLoading } = useContact();

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await sendContactForm(formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || t("form.error.fallback"));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-900">

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Sutil aura azul de fondo */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-400 font-['Manrope'] tracking-tight">
              {t("hero.subtitle")}
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 font-['Manrope'] tracking-tight">
              {t("hero.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            
            {/* Left Column - Info */}
            <div className="space-y-12">
              
              {/* Payment Link */}
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Manrope'] tracking-tight leading-tight">
                  {t("payment.title.line1")}
                  <br />
                  {t("payment.title.line2")}
                </h2>
                <Link
                  href="/solucion-personalizada"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-2xl hover:bg-blue-700 shadow-[0_4px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.25)] transition-all duration-300 text-sm font-bold uppercase tracking-wider"
                >
                  <span>{t("payment.button")}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <hr className="border-slate-100" />

              {/* Contact Info Items */}
              <div className="space-y-8">
                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      {t("info.addressLabel")}
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {t("info.addressDetails.line1")}
                    <br />
                    {t("info.addressDetails.line2")}
                    <br />
                    {t("info.addressDetails.line3")}
                    <br />
                    {t("info.addressDetails.line4")}
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      {t("info.phoneLabel")}
                    </p>
                  </div>
                  <Link
                    href="tel:+525517418008"
                    className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    +52 55 1741 8008
                  </Link>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      {t("info.emailLabel")}
                    </p>
                  </div>
                  <Link
                    href="mailto:operar@vexora.com.mx"
                    className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    operar@vexora.com.mx
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2 lg:border-l lg:border-slate-100 lg:pl-20">
              {submitted ? (
                <div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-10 text-center shadow-[0_20px_50px_rgba(30,58,138,0.05)]">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(37,99,235,0.2)]">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-['Manrope'] mb-2">
                    {t("form.success.title")}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {t("form.success.description")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Backend Errors */}
                  {error && (
                    <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                      >
                        {t("form.labels.name")}
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder={t("form.placeholders.name")}
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="space-y-2">
                      <label
                        htmlFor="empresa"
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                      >
                        {t("form.labels.company")}
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder={t("form.placeholders.company")}
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                      >
                        {t("form.labels.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("form.placeholders.email")}
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    {/* Asunto */}
                    <div className="space-y-2">
                      <label
                        htmlFor="asunto"
                        className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                      >
                        {t("form.labels.subject")}
                      </label>
                      <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        placeholder={t("form.placeholders.subject")}
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1"
                    >
                      {t("form.labels.message")}
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={6}
                      placeholder={t("form.placeholders.message")}
                      className="w-full p-5 border border-slate-200 bg-slate-50/50 rounded-2xl text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 resize-none"
                    />
                  </div>

                  {/* Submit Button - Botón Azul con texto Blanco */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-sm font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.25)]"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>{t("form.button.sending")}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("form.button.idle")}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}