"use client";

import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang];
  const year = new Date().getFullYear();

  const navLinks = [
    { label: tr.nav.inicio, href: "#inicio" },
    { label: tr.nav.servicios, href: "#servicios" },
    { label: tr.nav.nosotros, href: "#nosotros" },
    { label: tr.nav.contacto, href: "#contacto" },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 bg-white rounded-sm p-0.5 shadow-sm">
                <Image src="/logo.png" alt="FormaNova" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold tracking-widest uppercase text-sm leading-none">
                  <span className="text-gray-400">FORMA</span>
                  <span className="text-brand-gold">NOVA</span>
                </p>
                <p className="text-[10px] text-gray-600 tracking-widest uppercase mt-0.5">REFORMAS & OBRAS</p>
              </div>
            </div>
            <p className="text-gray-500 text-base leading-relaxed mb-5">{tr.footerTagline}</p>
            <div className="space-y-2">
              <a href="tel:+34642827196" className="flex items-center gap-2 text-gray-500 hover:text-brand-gold transition-colors text-base"><Phone size={14} />+34 642 82 71 96</a>
              <a href="https://wa.me/34642827196" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#25D366] transition-colors text-base"><MessageCircle size={14} />{tr.footerWa}</a>
              <div className="flex items-center gap-2 text-gray-600 text-base"><MapPin size={14} />A Coruña</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">{tr.footerNav}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="text-gray-500 hover:text-brand-gold transition-colors text-base">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">{tr.footerServices}</h4>
            <ul className="space-y-2.5">
              {tr.footerServices2.map((s) => (
                <li key={s}><a href="#servicios" className="text-gray-500 hover:text-brand-gold transition-colors text-base">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">{tr.footerCta1}</h4>
            <p className="text-gray-500 text-base leading-relaxed mb-5">{tr.footerCta2}</p>
            <a href="https://wa.me/34642827196?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-base px-5 py-3 rounded-sm transition-colors tracking-wide w-full justify-center">
              <MessageCircle size={16} />{tr.footerCta3}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-sm">© {year} FormaNova. {tr.footerCopy}</p>
          <p className="text-gray-700 text-sm">{tr.footerCity}</p>
        </div>
      </div>
    </footer>
  );
}
