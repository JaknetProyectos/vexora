"use client";

import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand, Contact Info & Payments */}
        <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group active:scale-95 transition-transform duration-200">
              <img
                src="/logo.png"
                alt={t("logoAlt")}
                className="h-10 w-auto object-contain filter contrast-125 transition-transform duration-300 group-hover:rotate-6"
              />
              <img
                src="/title.png"
                alt={t("titleAlt")}
                className="h-8 w-auto object-contain filter contrast-125"
              />
            </Link>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              {t("brandDescription")}
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t("address")}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              <Link
                href="tel:+525517418008"
                className="flex items-center gap-2 text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+52 55 1741 8008</span>
              </Link>
              <Link
                href="mailto:operar@vexora.com.mx"
                className="flex items-center gap-2 text-sm text-neutral-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>operar@vexora.com.mx</span>
              </Link>
            </div>
          </div>

          {/* Payment Methods Column */}
          <div className="lg:col-span-3 lg:justify-self-end self-center mt-4 lg:mt-0">
            <div className="bg-neutral-900/60 border border-neutral-800 p-3 rounded-2xl flex items-center justify-center">
              <img
                src="/cards.png"
                alt={t("paymentAlt")}
                className="h-7 w-auto object-contain filter brightness-110"
              />
            </div>
          </div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-center md:text-left">
          <p className="text-xs text-neutral-500 font-medium">
            {t("copyright")}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="#"
              className="text-xs text-neutral-400 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {t("legal.privacy")}
            </Link>
            <Link
              href="#"
              className="text-xs text-neutral-400 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {t("legal.refunds")}
            </Link>
            <Link
              href="#"
              className="text-xs text-neutral-400 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {t("legal.terms")}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}