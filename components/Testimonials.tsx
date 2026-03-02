"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "María G.",  location: "A Coruña", text: "Reformaron nuestro baño completo en tiempo récord. El resultado es espectacular y el precio fue muy ajustado. Muy recomendables.", service: "Reforma de baño",    rating: 5 },
  { name: "Carlos M.", location: "A Coruña", text: "Contratamos a FormaNova para una reforma integral del piso. Trabajo limpio, puntual y de gran calidad. Repetiremos sin duda.",  service: "Reforma integral", rating: 5 },
  { name: "Ana R.",    location: "Arteixo",  text: "Muy profesionales desde el primer momento. El presupuesto fue claro y detallado, sin sorpresas al final. La cocina quedó perfecta.", service: "Reforma de cocina", rating: 5 },
];

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
  return (
    <section className="bg-gray-100 dark:bg-brand-dark2 py-20 lg:py-28 border-y border-gray-200 dark:border-brand-dark3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">Opiniones</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">Lo que dicen nuestros clientes</h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="group bg-white dark:bg-brand-dark1 border border-gray-200 dark:border-brand-dark3 hover:border-brand-gold/30 rounded-sm p-7 transition-all duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={44} className="text-brand-gold" />
              </div>
              <Stars count={t.rating} />
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-4 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 dark:border-brand-dark3 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold text-base">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-600 text-sm mt-0.5">{t.location}</p>
                </div>
                <span className="text-brand-gold text-sm font-medium border border-brand-gold/20 bg-brand-gold/5 px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
