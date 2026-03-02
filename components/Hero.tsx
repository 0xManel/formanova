"use client";

import Image from "next/image";
import { Phone, MessageCircle, FileText, ChevronDown } from "lucide-react";
import TypeWriter from "./TypeWriter";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang];
  const phone = "+34 642 82 71 96";
  const whatsappUrl = `https://wa.me/34642827196?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto sin compromiso.")}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.07),transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[520px] lg:h-[520px] drop-shadow-2xl">
            <Image src="/logo.png" alt="FormaNova logo" fill className="object-contain" priority />
          </div>
        </div>

        {/* TypeWriter */}
        <TypeWriter lang={lang} />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8 mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          {tr.heroBadge}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-5 text-gray-900">
          {tr.heroH1a}
          <br />
          <span className="text-brand-gold">{tr.heroH1b}</span>
          <br />
          <span className="text-gray-500 font-light mt-3 block">{tr.heroH1c}</span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {tr.heroSub1}
          <br className="hidden sm:block" />
          {tr.heroSub2}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-lg tracking-wide shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-0.5"
          >
            <FileText size={20} />
            {tr.heroCta1}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-lg tracking-wide hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {tr.heroCta2}
          </a>

          <a
            href={`tel:${phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-400 hover:border-brand-gold text-gray-700 hover:text-brand-gold font-medium px-8 py-4 rounded-sm transition-all duration-200 text-lg hover:-translate-y-0.5"
          >
            <Phone size={20} />
            {tr.heroCta3}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-10 border-t border-gray-200 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "10+", label: tr.statYears },
            { value: "200+", label: tr.statProjects },
            { value: "100%", label: tr.statSat },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-brand-gold">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
}
