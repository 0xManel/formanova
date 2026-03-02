"use client";

import { Shield, Clock, Star, Handshake } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

export default function Features() {
  const { lang } = useLang();
  const tr = t[lang];

  const features = [
    { icon: Shield,    title: tr.featureTitle1, desc: tr.featureDesc1 },
    { icon: Clock,     title: tr.featureTitle2, desc: tr.featureDesc2 },
    { icon: Star,      title: tr.featureTitle3, desc: tr.featureDesc3 },
    { icon: Handshake, title: tr.featureTitle4, desc: tr.featureDesc4 },
  ];

  return (
    <section className="bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors duration-300">
                <f.icon className="text-brand-gold" size={22} />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-base tracking-wide mb-1">{f.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
