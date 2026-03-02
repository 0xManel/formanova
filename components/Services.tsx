"use client";

import { Building2, Bath, UtensilsCrossed, Hammer, Paintbrush, Layers, Wrench } from "lucide-react";

const services = [
  { icon: Building2,       title: "Reformas integrales",        desc: "Transformamos tu vivienda de principio a fin con un equipo completo y coordinado." },
  { icon: Bath,            title: "Reformas de baños",          desc: "Renovación completa de cuartos de baño con acabados modernos y funcionales." },
  { icon: UtensilsCrossed, title: "Reformas de cocinas",        desc: "Diseñamos y ejecutamos cocinas a medida, adaptadas a tu estilo y necesidades." },
  { icon: Hammer,          title: "Albañilería general",        desc: "Todo tipo de trabajos de albañilería: tabiques, techos, estructuras y más." },
  { icon: Paintbrush,      title: "Pintura",                    desc: "Pintura interior y exterior con preparación de superficies y acabados perfectos." },
  { icon: Layers,          title: "Suelos y azulejos",          desc: "Colocación de todo tipo de pavimentos: gres, porcelana, tarima y más." },
  { icon: Wrench,          title: "Reparaciones y mantenimiento", desc: "Resolvemos averías y problemas puntuales con rapidez y eficacia." },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white dark:bg-brand-dark1 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">Lo que ofrecemos</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">Nuestros servicios</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-xl leading-relaxed">
            Soluciones completas de reforma y construcción para particulares y empresas en A Coruña.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-brand-dark1 border border-gray-200 dark:border-brand-dark3 hover:border-brand-gold/60 dark:hover:border-brand-gold/40 rounded-sm p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-12 h-12 rounded-sm bg-gray-50 dark:bg-brand-dark2 group-hover:bg-brand-gold/10 border border-gray-100 dark:border-brand-dark3 group-hover:border-brand-gold/30 flex items-center justify-center mb-5 transition-all duration-300">
                <s.icon className="text-gray-400 group-hover:text-brand-gold transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2 tracking-wide">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="group bg-brand-dark1 border border-brand-dark3 hover:border-brand-gold/40 rounded-sm p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">¿No encuentras lo que buscas?</p>
              <h3 className="text-white font-bold text-xl mb-3">Cuéntanos tu proyecto</h3>
              <p className="text-gray-400 text-base leading-relaxed">Cada reforma es única. Contáctanos y te ofrecemos una solución personalizada.</p>
            </div>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="mt-6 inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-base px-5 py-3 rounded-sm transition-colors tracking-wide"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
