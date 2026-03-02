"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const tr = t[lang];

  const phone = "+34 642 82 71 96";
  const whatsappUrl = `https://wa.me/34642827196?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto sin compromiso.")}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola FormaNova, me llamo ${form.nombre}. Mi teléfono es ${form.telefono}. ${form.mensaje}`;
    window.open(`https://wa.me/34642827196?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setForm({ nombre: "", telefono: "", mensaje: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">{tr.contactLabel}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">{tr.contactTitle}</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-600 max-w-lg mx-auto text-xl leading-relaxed">{tr.contactSub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-600 text-sm font-medium tracking-wide uppercase mb-2">{tr.contactName}</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required placeholder={tr.contactNamePh}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-brand-gold text-gray-900 placeholder-gray-400 px-4 py-4 rounded-sm outline-none transition-colors text-lg" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium tracking-wide uppercase mb-2">{tr.contactPhone}</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required placeholder={tr.contactPhonePh}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-brand-gold text-gray-900 placeholder-gray-400 px-4 py-4 rounded-sm outline-none transition-colors text-lg" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium tracking-wide uppercase mb-2">{tr.contactMsg}</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows={5} placeholder={tr.contactMsgPh}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-brand-gold text-gray-900 placeholder-gray-400 px-4 py-4 rounded-sm outline-none transition-colors text-lg resize-none" />
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold py-4 rounded-sm transition-all duration-200 text-lg tracking-wide hover:shadow-lg hover:shadow-brand-gold/20">
                <Send size={19} />
                {sent ? tr.contactSent : tr.contactSend}
              </button>
              <p className="text-gray-500 text-sm text-center">{tr.contactDisclaimer}</p>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { href: `tel:${phone}`, icon: Phone, label: "Teléfono", value: phone, sub: tr.contactTelSub },
              { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp", value: phone, sub: tr.contactWaSub, external: true },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 bg-gray-50 border border-gray-200 hover:border-brand-gold/40 p-5 rounded-sm transition-all duration-200">
                <div className="w-11 h-11 flex-shrink-0 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                  <item.icon className="text-brand-gold" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">{item.label}</p>
                  <p className="text-gray-900 font-semibold text-base">{item.value}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.sub}</p>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 p-5 rounded-sm">
              <div className="w-11 h-11 flex-shrink-0 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <Mail className="text-brand-gold" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">Email</p>
                <p className="text-gray-900 font-semibold text-base">info@formanova.es</p>
                <p className="text-gray-500 text-sm mt-0.5">{tr.contactEmailSub}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 p-5 rounded-sm">
              <div className="w-11 h-11 flex-shrink-0 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <MapPin className="text-brand-gold" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">{tr.contactZone}</p>
                <p className="text-gray-900 font-semibold text-base">A Coruña</p>
                <p className="text-gray-500 text-sm mt-0.5">{tr.contactZoneSub}</p>
              </div>
            </div>

            <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-sm p-5">
              <p className="text-brand-gold font-semibold text-base mb-1">{tr.contactBudgetTitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{tr.contactBudgetDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
