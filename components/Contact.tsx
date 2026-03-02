"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const phone = "+34 642 82 71 96";
  const whatsappUrl = `https://wa.me/34642827196?text=${encodeURIComponent(
    "Hola, me gustaría solicitar un presupuesto sin compromiso."
  )}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect with form data
    const msg = `Hola FormaNova, me llamo ${form.nombre}. Mi teléfono es ${form.telefono}. ${form.mensaje}`;
    window.open(
      `https://wa.me/34642827196?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
    setForm({ nombre: "", telefono: "", mensaje: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="bg-brand-dark1 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Solicita tu presupuesto
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            Respondemos rápidamente. Sin compromiso y sin costes ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-brand-dark2 border border-brand-dark3 focus:border-brand-gold/60 text-white placeholder-gray-600 px-4 py-3.5 rounded-sm outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+34 000 000 000"
                  className="w-full bg-brand-dark2 border border-brand-dark3 focus:border-brand-gold/60 text-white placeholder-gray-600 px-4 py-3.5 rounded-sm outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="w-full bg-brand-dark2 border border-brand-dark3 focus:border-brand-gold/60 text-white placeholder-gray-600 px-4 py-3.5 rounded-sm outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold py-4 rounded-sm transition-all duration-200 text-base tracking-wide hover:shadow-lg hover:shadow-brand-gold/20"
              >
                <Send size={17} />
                {sent ? "¡Mensaje enviado!" : "Enviar por WhatsApp"}
              </button>

              <p className="text-gray-600 text-xs text-center">
                Al enviar, serás redirigido a WhatsApp con tu mensaje.
              </p>
            </form>
          </div>

          {/* Info — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact cards */}
            <a
              href={`tel:${phone}`}
              className="group flex items-start gap-4 bg-brand-dark2 border border-brand-dark3 hover:border-brand-gold/30 p-5 rounded-sm transition-all duration-200"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                <Phone className="text-brand-gold" size={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">
                  Teléfono
                </p>
                <p className="text-white font-semibold">{phone}</p>
                <p className="text-gray-600 text-xs mt-0.5">Lunes–Sábado, 8–20h</p>
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-brand-dark2 border border-brand-dark3 hover:border-[#25D366]/40 p-5 rounded-sm transition-all duration-200"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-sm bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="text-[#25D366]" size={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">
                  WhatsApp
                </p>
                <p className="text-white font-semibold">{phone}</p>
                <p className="text-gray-600 text-xs mt-0.5">Respuesta rápida garantizada</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-brand-dark2 border border-brand-dark3 p-5 rounded-sm">
              <div className="w-10 h-10 flex-shrink-0 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <Mail className="text-brand-gold" size={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">
                  Email
                </p>
                <p className="text-white font-semibold">info@formanova.es</p>
                <p className="text-gray-600 text-xs mt-0.5">Respondemos en 24h</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-brand-dark2 border border-brand-dark3 p-5 rounded-sm">
              <div className="w-10 h-10 flex-shrink-0 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <MapPin className="text-brand-gold" size={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-wide uppercase mb-1">
                  Zona de trabajo
                </p>
                <p className="text-white font-semibold">A Coruña</p>
                <p className="text-gray-600 text-xs mt-0.5">
                  Y toda el área metropolitana
                </p>
              </div>
            </div>

            {/* CTA highlight */}
            <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-sm p-5">
              <p className="text-brand-gold font-semibold text-sm mb-1">
                Presupuesto sin compromiso
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Visitamos la obra, evaluamos el proyecto y te enviamos un
                presupuesto detallado sin coste alguno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
