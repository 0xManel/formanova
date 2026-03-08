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

          <div className="grid grid-cols-2 gap-4">
            {[{ value: "10+", label: tr.statYears }, { value: "A Coruña", label: tr.aboutStatZone }].map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-200 p-8 rounded-sm text-center">
                <p className="text-3xl font-bold text-brand-gold">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-2 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
