"use client";

import { CheckCircle2 } from "lucide-react";

const values = [
  "Atención personalizada desde el primer contacto",
  "Materiales de calidad contrastada",
  "Equipo propio — sin subcontratas",
  "Presupuesto detallado y transparente",
  "Limpieza y orden durante la obra",
  "Garantía en todos nuestros trabajos",
];

export default function About() {
  return (
    <section id="nosotros" className="bg-gray-50 dark:bg-brand-dark1 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">Sobre nosotros</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Una empresa de reformas<br />
              <span className="text-brand-gold">en la que confiar</span>
            </h2>
            <div className="gold-divider mb-8" />

            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                En <strong className="text-gray-900 dark:text-white font-semibold">FormaNova</strong> nos dedicamos a reformas y trabajos de albañilería, ofreciendo soluciones personalizadas para cada cliente. Trabajamos con seriedad, experiencia y vocación de servicio.
              </p>
              <p>
                Nuestra forma de trabajar se basa en la comunicación constante con el cliente, el respeto a los presupuestos acordados y la entrega puntual. No prometemos lo que no podemos cumplir.
              </p>
              <p>
                Operamos en <strong className="text-gray-900 dark:text-white font-semibold">A Coruña y toda su área metropolitana</strong>, con un equipo propio de profesionales especializados.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-gold mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-600 dark:text-gray-400 text-base">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative bg-gray-200 dark:bg-brand-dark2 border border-gray-300 dark:border-brand-dark3 rounded-sm aspect-[4/3] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_70%)]" />
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold/30 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand-gold/50">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-600 text-base">Foto del equipo</p>
              <p className="text-gray-400 dark:text-gray-700 text-sm mt-1">Próximamente</p>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-brand-gold/20 rotate-45" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[{ value: "10+", label: "Años de experiencia" }, { value: "A Coruña", label: "Zona de trabajo" }].map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-brand-dark2 border border-gray-200 dark:border-brand-dark3 p-5 rounded-sm text-center">
                  <p className="text-2xl font-bold text-brand-gold">{stat.value}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
