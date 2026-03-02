"use client";

import { Star, Quote } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="text-brand-gold fill-brand-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section className="bg-gray-100 py-20 lg:py-28 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">{tr.testiLabel}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">{tr.testiTitle}</h2>
          <div className="gold-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tr.testimonials.map((tst, i) => (
            <div key={i} className="group bg-white border border-gray-200 hover:border-brand-gold/30 rounded-sm p-7 transition-all duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={44} className="text-brand-gold" />
              </div>
              <Stars count={5} />
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-6 italic">
                &ldquo;{tst.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-semibold text-base">{tst.name}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{tst.location}</p>
                </div>
                <span className="text-brand-gold text-sm font-medium border border-brand-gold/20 bg-brand-gold/5 px-3 py-1 rounded-full">
                  {tst.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
