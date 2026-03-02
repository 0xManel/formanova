"use client";

import { Building2, Bath, UtensilsCrossed, Hammer, Paintbrush, Layers, Wrench } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

const icons = [Building2, Bath, UtensilsCrossed, Hammer, Paintbrush, Layers, Wrench];

export default function Services() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">{tr.servicesLabel}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">{tr.servicesTitle}</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto text-xl leading-relaxed">{tr.servicesSub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.services.map((s, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 hover:border-brand-gold/60 rounded-sm p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-12 h-12 rounded-sm bg-gray-50 group-hover:bg-brand-gold/10 border border-gray-100 group-hover:border-brand-gold/30 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="text-gray-400 group-hover:text-brand-gold transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2 tracking-wide">{s.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
              </div>
            );
          })}

          <div className="group bg-gray-900 border border-gray-700 hover:border-brand-gold/40 rounded-sm p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">{tr.servicesCta1}</p>
              <h3 className="text-white font-bold text-xl mb-3">{tr.servicesCta2}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{tr.servicesCta3}</p>
            </div>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="mt-6 inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-base px-5 py-3 rounded-sm transition-colors tracking-wide"
            >
              {tr.servicesCta4}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
