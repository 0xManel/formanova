"use client";

import { Phone, MessageCircle, FileText, ChevronDown } from "lucide-react";

export default function Hero() {
  const phone = "+34 642 82 71 96";
  const whatsappUrl = `https://wa.me/34642827196?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto sin compromiso.")}`;

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark1"
    >
      {/* Background texture grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.08),transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          A Coruña y alrededores
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Reformas y obras
          <br />
          <span className="text-brand-gold">de calidad</span>
          <br />
          <span className="text-gray-300 font-light">en A Coruña</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Seriedad, compromiso y resultados profesionales.
          <br className="hidden sm:block" />
          Desde reformas integrales hasta pequeñas reparaciones.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base tracking-wide shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-0.5"
          >
            <FileText size={18} />
            Solicitar Presupuesto
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base tracking-wide hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href={`tel:${phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-brand-gold/60 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-sm transition-all duration-200 text-base hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Llamar ahora
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-12 border-t border-brand-dark3 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Años de experiencia" },
            { value: "200+", label: "Proyectos realizados" },
            { value: "100%", label: "Satisfacción garantizada" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-brand-gold">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
