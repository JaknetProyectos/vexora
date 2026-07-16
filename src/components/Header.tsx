"use client";

import { Link } from "@/i18n/routing";
import { useState } from "react";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Home, 
  Cpu, 
  Mail 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  // Definimos la navegación de forma dinámica dentro del componente para que herede las traducciones de `t`
  const navLinks = [
    { href: "/", label: t("nav.home"), icon: Home, active: true },
    { href: "/soluciones", label: t("nav.solutions"), icon: Cpu, active: false },
    { href: "/contacto", label: t("nav.contact"), icon: Mail, active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      {/* Línea superior milimétrica de acento con gradiente de automatización */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-row items-center gap-2 group transition-transform duration-200 active:scale-95">
            <img
              src="/logo.png"
              alt={t("logoAlt")}
              className="h-10 w-auto object-contain filter contrast-125 transition-transform duration-300 group-hover:rotate-6"
            />
            <img
              src="/title.png"
              alt={t("titleAlt")}
              className="h-8 w-auto object-contain filter contrast-125 hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 h-full">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase font-bold rounded-xl transition-all duration-300 ${
                    link.active
                      ? "text-indigo-600 bg-indigo-50/60"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${link.active ? "scale-110" : "group-hover:scale-110"}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">

            {/* Shopping Cart Link */}
            <Link
              href="/carrito"
              className="p-2.5 text-neutral-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300 relative rounded-xl border border-neutral-100 hover:border-indigo-100 active:scale-95"
              aria-label={t("cartAriaLabel")}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center bg-indigo-600 text-[10px] font-black text-white rounded-full animate-bounce-short shadow-md shadow-indigo-200">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2.5 text-neutral-700 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300 rounded-xl border border-neutral-100 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t("closeMenuAriaLabel") : t("openMenuAriaLabel")}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-100 bg-white animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between text-xs tracking-wider uppercase font-bold px-4 py-3.5 rounded-xl transition-all duration-200 ${
                      link.active
                        ? "text-indigo-600 bg-indigo-50/60"
                        : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </div>
                    {link.active && (
                      <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}