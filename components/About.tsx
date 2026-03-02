"use client";

import { CheckCircle2 } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

export default function About() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section id="nosotros" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">{tr.aboutLabel}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {tr.aboutTitle1}<br />
              <span className="text-brand-gold">{tr.aboutTitle2}</span>
            </h2>
            <div className="gold-divider mb-8" />
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                En <strong className="text-gray-900 font-semibold">FormaNova</strong> {tr.aboutBody1.replace("En FormaNova ", "")}
              </p>
              <p>{tr.aboutBody2}</p>
              <p>{tr.aboutBody3}</p>
            </div>
            <ul className="mt-8 space-y-3">
              {tr.aboutValues.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-600 text-base">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative bg-gray-200 border border-gray-300 rounded-sm aspect-[4/3] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_70%)]" />
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold/30 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand-gold/50">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="text-gray-500 text-base">{tr.aboutPhotoLabel}</p>
              <p className="text-gray-400 text-sm mt-1">{tr.aboutPhotoSoon}</p>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-brand-gold/20 rotate-45" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[{ value: "10+", label: tr.statYears }, { value: "A Coruña", label: tr.aboutStatZone }].map((stat) => (
                <div key={stat.label} className="bg-white border border-gray-200 p-5 rounded-sm text-center">
                  <p className="text-2xl font-bold text-brand-gold">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
