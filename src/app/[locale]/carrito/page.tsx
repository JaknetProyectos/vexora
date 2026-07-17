"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";

import { processOctanoPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/price";
import { useSolutions } from "@/hooks/useSolutions";

const VALID_COUPONS = [
  { code: "VEX10", discount: 0.1 },
  { code: "VEX15", discount: 0.15 },
  { code: "VEXPRO20", discount: 0.2 },
];

const BACK_CATALOG_LINK = "/soluciones"

type Step = 1 | 2 | 3;

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[2rem] border border-white/20",
        "bg-blue-800/40 shadow-xl",
        "backdrop-blur-xl transition-all duration-300",
        "hover:border-white/40 hover:shadow-[0_0_35px_rgba(255,255,255,0.1)]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute left-[-35%] top-0 h-full w-[90px] rotate-12 bg-white/[0.04] blur-2xl transition-all duration-1000 hover:left-[140%]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/20">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-[11px] font-bold text-blue-100">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={[
          "w-full rounded-xl border border-white/20 bg-blue-950/50 px-4 py-3",
          "text-xs text-white outline-none transition-all placeholder:text-blue-300",
          "focus:border-white/50 focus:ring-2 focus:ring-white/20",
          mono ? "font-mono tracking-widest" : "",
          inputClassName,
        ].join(" ")}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const locale = useLocale();
  const { solutions } = useSolutions()

  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [couponError, setCouponError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const discountAmount = appliedCoupon ? total * appliedCoupon.discount : 0;
  const totalWithDiscount = total - discountAmount;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    setCouponError("");

    const found = VALID_COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (found) {
      setAppliedCoupon(found);
      setCouponInput("");
      return;
    }

    setCouponError(t("financial.couponInvalid"));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: appliedCoupon
          ? `${t("metadata.couponApplied")}: ${appliedCoupon.code}`
          : t("metadata.standardSale"),
      },
    };

    try {
      const response = await processOctanoPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        try {
          await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
              locale
            }),
          });
        } catch (emailError) {
          console.error(
            "⚠️ Falló el despacho de correos informativos:",
            emailError
          );
        }

        clearCart();
        setStep(3);
      } else {
        setErrorMessage(response.error || t("errors.declined"));
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-blue-900 text-white selection:bg-black selection:text-white">
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-14 pt-32 md:px-6">
          <section className="relative mx-auto w-full max-w-xl">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

            <CardShell className="p-7 text-center sm:p-9">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white">
                {t("success.title")}
              </h1>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-blue-100">
                {t("success.description")}
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-white/20 bg-black/20 p-5 text-left">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-xs font-semibold text-blue-100">
                    {t("success.transactionStatus")}
                  </span>
                  <span className="text-[11px] font-bold text-white">
                    {t("success.approved")}
                  </span>
                </div>
              </div>

              <Link href={BACK_CATALOG_LINK} className="mt-8 block">
                <button className="w-full rounded-xl bg-black py-6 text-sm font-bold text-white transition-all duration-300 hover:bg-neutral-800 shadow-md border border-white/10 hover:border-white/30">
                  {t("success.backToCatalog")}
                </button>
              </Link>
            </CardShell>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-blue-900 text-white selection:bg-black selection:text-white">
      <div className="h-8" />

      <div className="sticky mt-0 z-40 border-b border-white/20 bg-blue-900/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-blue-200">
            <Link href="/" className="transition hover:text-white">
              {t("breadcrumb.home")}
            </Link>
            <span className="text-blue-400">/</span>
            <span
              className={
                step === 1 ? "font-bold text-white" : "text-blue-300"
              }
            >
              {t("breadcrumb.summary")}
            </span>
            <span className="text-blue-400">/</span>
            <span
              className={
                step === 2 ? "font-bold text-white" : "text-blue-300"
              }
            >
              {t("breadcrumb.shippingPayment")}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-white" : "bg-blue-700"
                }`}
            />
            <div
              className={`h-0.5 w-12 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-white" : "bg-blue-700"
                }`}
            />
            <div
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-white" : "bg-blue-700"
                }`}
            />
          </div>
        </div>
      </div>

      <main className="relative z-10 py-2 md:py-12">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-black/10 blur-[130px]" />

        <div className="mx-auto px-4 md:px-6">
          {items.length === 0 ? (
            <CardShell className="mx-auto max-w-lg p-8 text-center sm:p-10">
              <ShoppingBag className="mx-auto mb-5 h-14 w-14 text-white/80" />
              <h2 className="text-xl font-bold text-white">
                {t("empty.title")}
              </h2>
              <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-blue-100">
                {t("empty.description")}
              </p>
              <Link href={BACK_CATALOG_LINK} className="mt-8 inline-block">
                <button className="rounded-xl border border-white/20 bg-black px-8 py-5 text-xs font-semibold text-white transition-all duration-300 hover:bg-neutral-800">
                  {t("empty.goToStore")}
                </button>
              </Link>
            </CardShell>
          ) : (
            <div className="grid gap-8 lg:items-start">
              <div className="space-y-5">
                {errorMessage && (
                  <div className="flex items-center gap-3 rounded-2xl border border-red-500/50 bg-red-500/20 p-4 text-xs font-semibold text-white">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 text-red-300" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {step === 1 && (
                  <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
                    <CardShell className="p-5 sm:p-6 xl:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
                          {t("order.title")}
                        </h2>

                        <button
                          type="button"
                          onClick={clearCart}
                          className="flex items-center gap-1.5 text-xs font-bold text-blue-200 transition hover:text-white"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          {t("order.clear")}
                        </button>
                      </div>

                      <div className="mt-5 space-y-4">
                        {items.map((item) => {
                          // 1. Buscamos la solución real que coincide con el ID del producto en el carrito
                          const matchingSolution = solutions.find((solution) => solution.id === item.product.id);

                          // 2. Si por alguna razón no encuentra la solución en tu hook, usamos los datos del carrito como respaldo (fallback)
                          const displayProduct = matchingSolution || item.product;

                          return (
                            <div
                              key={displayProduct.id}
                              className="rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-blue-100 hover:bg-white hover:shadow-[0_10px_30px_rgba(30,58,138,0.04)]"
                            >
                              <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 sm:grid-cols-[96px_minmax(0,1fr)]">

                                {/* Contenedor de Imagen Claro Premium */}
                                <div className="relative overflow-hidden rounded-2xl  p-2 flex items-center justify-center aspect-square">
                                  <Link
                                    href={`/soluciones/${displayProduct.id}`}
                                    className="absolute inset-0 z-10"
                                  />
                                  <Image
                                    src={displayProduct.image || "/logo.png"}
                                    alt={displayProduct.name}
                                    fill
                                    className="object-contain rounded-xl p-1 transition-transform duration-500 hover:scale-105"
                                  />
                                </div>

                                {/* Información del Producto */}
                                <div className="flex min-w-0 flex-col justify-between gap-4">
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                      <p className="mb-1 inline-block rounded-md  px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.16em] text-slate-500">
                                        {displayProduct.id}
                                      </p>

                                      <h3 className="line-clamp-1 text-sm font-extrabold text-slate-900 font-['Manrope']">
                                        {displayProduct.name}
                                      </h3>
                                    </div>

                                    {/* Botón Eliminar */}
                                    <button
                                      type="button"
                                      onClick={() => removeItem(displayProduct.id)}
                                      className="rounded-xl p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                                      aria-label="Eliminar artículo"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </div>

                                  {/* Contador de Cantidad y Precio */}
                                  <div className="flex items-end justify-between gap-4">
                                    <div className="flex items-center rounded-xl border border-slate-200 bg-white p-0.5 shadow-sm">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateQuantity(
                                            displayProduct.id,
                                            item.quantity - 1
                                          )
                                        }
                                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-blue-600"
                                      >
                                        <Minus className="h-3 w-3" />
                                      </button>

                                      <span className="w-9 text-center text-xs font-mono font-bold text-slate-900">
                                        {item.quantity}
                                      </span>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateQuantity(
                                            displayProduct.id,
                                            item.quantity + 1
                                          )
                                        }
                                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-blue-600"
                                      >
                                        <Plus className="h-3 w-3" />
                                      </button>
                                    </div>

                                    {/* Precio Total en Texto Oscuro */}
                                    <span className="text-sm font-black tracking-tight text-slate-900 font-['Manrope']">
                                      {formatPrice(
                                        displayProduct.price * item.quantity,
                                        "MXN",
                                        true
                                      )}
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardShell>

                    <CardShell className="p-5 sm:p-6 xl:p-7">
                      <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between gap-4">
                          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
                            {t("financial.title")}
                          </h2>
                        </div>

                        <div className="mt-5 flex flex-row items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-4">
                          <Image
                            src="/octano.png"
                            alt={t("images.securePaymentAlt")}
                            width={150}
                            height={20}
                            className="object-contain brightness-200"
                          />
                        </div>

                        <div className="mt-5 space-y-4">
                          {!appliedCoupon ? (
                            <form
                              onSubmit={handleApplyCoupon}
                              className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-blue-950/40 p-4"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                                    {t("financial.applyCoupon")}
                                  </p>
                                  <p className="mt-1 text-[11px] leading-relaxed text-blue-200">
                                    {t("financial.couponPlaceholder")}
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder={t("financial.couponPlaceholder")}
                                  value={couponInput}
                                  onChange={(e) => setCouponInput(e.target.value)}
                                  className="min-w-0 flex-1 rounded-xl border border-white/20 bg-blue-950/50 px-4 py-3 text-xs text-white outline-none transition-all placeholder:text-blue-300 focus:border-white/50 focus:ring-2 focus:ring-white/20"
                                />
                                <button
                                  type="submit"
                                  className="shrink-0 rounded-xl border border-white/20 bg-black px-4 text-xs font-bold text-white transition hover:bg-neutral-800 hover:border-white/40"
                                >
                                  {t("financial.applyCoupon")}
                                </button>
                              </div>
                            </form>
                          ) : (
                            <div className="rounded-[1.5rem] border border-white/30 bg-white/10 p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                                    {t("financial.appliedCoupon", {
                                      code: appliedCoupon.code,
                                      discount: appliedCoupon.discount * 100,
                                    })}
                                  </p>
                                  <p className="mt-1 text-[11px] leading-relaxed text-blue-100">
                                    {t("financial.remove")}
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => setAppliedCoupon(null)}
                                  className="shrink-0 rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-bold text-white transition hover:bg-black"
                                >
                                  {t("financial.remove")}
                                </button>
                              </div>
                            </div>
                          )}

                          {couponError && (
                            <p className="pl-1 text-[10px] font-semibold text-red-300">
                              ⚠️ {couponError}
                            </p>
                          )}
                        </div>

                        <div className="mt-5 space-y-3.5 rounded-[1.5rem] border border-white/10 bg-blue-950/40 p-4 text-xs font-medium text-blue-100">
                          <div className="flex justify-between gap-4">
                            <span>{t("financial.subtotal")}</span>
                            <span className="font-mono font-bold text-white">
                              {formatPrice(total, "MXN", true)}
                            </span>
                          </div>

                          {appliedCoupon && (
                            <div className="flex justify-between gap-4 text-white">
                              <span>{t("financial.discount")}</span>
                              <span className="font-mono font-bold">
                                -{formatPrice(discountAmount, "MXN", true)}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="mt-5 rounded-[1.5rem] border border-white/20 bg-blue-950/60 p-5 shadow-inner">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="text-xs font-bold text-white">
                              {t("financial.netTotal")}
                            </span>
                            <span className="text-2xl font-black tracking-tight text-white">
                              {formatPrice(grandTotal, "MXN", true)}
                            </span>
                          </div>

                          <p className="mt-1 text-right text-[10px] text-blue-200">
                            {t("financial.tax", {
                              tax: formatPrice(iva, "MXN", true),
                            })}
                          </p>
                        </div>

                        <div className="mt-5 space-y-3">
                          <button
                            onClick={() => setStep(2)}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-xs font-bold text-white shadow-md border border-white/10 transition-all duration-300 hover:bg-neutral-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                          >
                            {t("actions.proceedToPayment")}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-5 border-t border-white/20 pt-4 text-center">
                          <p className="px-2 text-[10px] font-medium leading-relaxed text-blue-200">
                            {t("security.note")}
                          </p>

                          <div className="mt-3 flex items-center justify-center">
                            <Image
                              src="/secure-payment.png"
                              alt={t("images.securePaymentAlt")}
                              width={100}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </CardShell>
                  </div>
                )}

                {step === 2 && (
                  <form
                    id="octano-payment-form"
                    onSubmit={handleCheckoutSubmit}
                    className="grid gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
                  >
                    <div className="space-y-5">
                      <CardShell className="p-5 sm:p-8">
                        <SectionTitle
                          icon={User}
                          title={t("form.buyerTitle")}
                        />

                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Field
                            label={t("form.firstName")}
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.lastName")}
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.email")}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.phone")}
                            name="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.company")}
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleInputChange}
                            className="sm:col-span-2"
                          />
                        </div>
                      </CardShell>

                      <CardShell className="p-5 sm:p-8">
                        <SectionTitle
                          icon={MapPin}
                          title={t("form.addressTitle")}
                        />

                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Field
                            label={t("form.streetAddress")}
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleInputChange}
                            required
                            placeholder={t("form.streetAddressPlaceholder")}
                            className="sm:col-span-2"
                          />
                          <Field
                            label={t("form.neighborhood")}
                            name="direccion2"
                            value={formData.direccion2}
                            onChange={handleInputChange}
                            placeholder={t("form.neighborhoodPlaceholder")}
                            className="sm:col-span-2"
                          />
                          <Field
                            label={t("form.city")}
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.state")}
                            name="estado"
                            value={formData.estado}
                            onChange={handleInputChange}
                            required
                            placeholder={t("form.statePlaceholder")}
                          />
                          <Field
                            label={t("form.postalCode")}
                            name="cp"
                            value={formData.cp}
                            onChange={handleInputChange}
                            required
                          />
                          <div>
                            <label className="mb-1.5 block text-[11px] font-bold text-blue-100">
                              {t("form.country")}
                            </label>
                            <select
                              name="pais"
                              value={formData.pais}
                              onChange={handleInputChange}
                              className="w-full appearance-none rounded-xl border border-white/20 bg-blue-950/50 px-4 py-3 text-xs text-white outline-none transition-all focus:border-white/50 focus:ring-2 focus:ring-white/20"
                            >
                              <option value="MX" className="bg-blue-900 text-white">
                                {t("form.mexico")}
                              </option>
                            </select>
                          </div>
                        </div>
                      </CardShell>
                    </div>

                    <div className="space-y-5">
                      <CardShell className="p-5 sm:p-8">
                        <div className="flex items-center justify-between gap-4">
                          <SectionTitle
                            icon={CreditCard}
                            title={t("form.paymentTitle")}
                          />
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-6">
                          <Field
                            label={t("form.cardNumber")}
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            maxLength={16}
                            placeholder={t("form.cardNumberPlaceholder")}
                            className="sm:col-span-6"
                            mono
                          />
                          <Field
                            label={t("form.cardHolderName")}
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                            placeholder={t("form.cardHolderPlaceholder")}
                            className="sm:col-span-6"
                          />
                          <Field
                            label={t("form.expiryMonth")}
                            name="cardMonth"
                            value={formData.cardMonth}
                            onChange={handleInputChange}
                            required
                            maxLength={2}
                            placeholder={t("form.expiryMonthPlaceholder")}
                            mono
                            inputClassName="text-center"
                            className="sm:col-span-2"
                          />
                          <Field
                            label={t("form.expiryYear")}
                            name="cardYear"
                            value={formData.cardYear}
                            onChange={handleInputChange}
                            required
                            maxLength={4}
                            placeholder={t("form.expiryYearPlaceholder")}
                            mono
                            inputClassName="text-center"
                            className="sm:col-span-2"
                          />
                          <Field
                            label={t("form.cvv")}
                            name="cardCvv"
                            type="password"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            required
                            maxLength={4}
                            placeholder={t("form.cvvPlaceholder")}
                            mono
                            inputClassName="text-center"
                            className="sm:col-span-2"
                          />
                        </div>
                      </CardShell>

                      <CardShell className="p-5 sm:p-8">
                        <div className="flex items-center justify-between gap-4">
                          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-white">
                            {t("financial.title")}
                          </h2>
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-4">
                          <div className="flex items-center justify-center">
                            <Image
                              src="/octano.png"
                              alt={t("images.securePaymentAlt")}
                              width={150}
                              height={20}
                              className="object-contain brightness-200"
                            />
                          </div>
                        </div>

                        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-blue-950/40 p-4 text-xs font-medium text-blue-100">
                          <div className="flex justify-between gap-4">
                            <span>{t("financial.subtotal")}</span>
                            <span className="font-mono font-bold text-white">
                              {formatPrice(total, "MXN", true)}
                            </span>
                          </div>

                          {appliedCoupon && (
                            <div className="mt-3 flex justify-between gap-4 text-white">
                              <span>{t("financial.discount")}</span>
                              <span className="font-mono font-bold">
                                -{formatPrice(discountAmount, "MXN", true)}
                              </span>
                            </div>
                          )}

                          <div className="mt-4 border-t border-white/20 pt-4">
                            <div className="flex items-baseline justify-between gap-4">
                              <span className="text-xs font-bold text-white">
                                {t("financial.netTotal")}
                              </span>
                              <span className="text-2xl font-black tracking-tight text-white">
                                {formatPrice(grandTotal, "MXN", true)}
                              </span>
                            </div>

                            <p className="mt-1 text-right text-[10px] text-blue-200">
                              {t("financial.tax", {
                                tax: formatPrice(iva, "MXN", true),
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 space-y-3">
                          <button
                            type="submit"
                            form="octano-payment-form"
                            disabled={isProcessing}
                            className={[
                              "flex w-full items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold tracking-widest transition-all duration-300 border",
                              isProcessing
                                ? "cursor-wait bg-black/50 border-white/10 text-white/50"
                                : "bg-black border-white/20 text-white shadow-md hover:bg-neutral-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                            ].join(" ")}
                          >
                            {isProcessing ? (
                              <span className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>{t("actions.processing")}</span>
                              </span>
                            ) : (
                              t("actions.payAmount", {
                                amount: formatPrice(grandTotal, "MXN", true),
                              })
                            )}
                          </button>

                          <button
                            type="button"
                            disabled={isProcessing}
                            onClick={() => setStep(1)}
                            className="flex w-full items-center justify-center gap-1 py-1 text-xs font-bold text-blue-200 transition hover:text-white"
                          >
                            <ChevronLeft className="h-3.5 w-3.5" />
                            {t("actions.backToCart")}
                          </button>
                        </div>

                        <div className="mt-5 border-t border-white/20 pt-4 text-center">
                          <p className="px-2 text-[10px] font-medium leading-relaxed text-blue-200">
                            {t("security.note")}
                          </p>

                          <div className="mt-3 flex items-center justify-center">
                            <Image
                              src="/secure-payment.png"
                              alt={t("images.securePaymentAlt")}
                              width={100}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </CardShell>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}