"use client";

import { useState } from "react";
import { Camera, ArrowRight } from "lucide-react";

const categories = ["Todos", "Baños", "Cocinas", "Reformas completas", "Otros"];

const placeholders = [
  { cat: "Baños", label: "Reforma de baño completa" },
  { cat: "Cocinas", label: "Cocina moderna con isla" },
  { cat: "Reformas completas", label: "Reforma integral de vivienda" },
  { cat: "Baños", label: "Baño con ducha de obra" },
  { cat: "Cocinas", label: "Cocina abierta al salón" },
  { cat: "Reformas completas", label: "Reforma de piso completo" },
  { cat: "Otros", label: "Suelo de microcemento" },
  { cat: "Otros", label: "Pintura y acabados" },
  { cat: "Baños", label: "Baño con doble lavabo" },
];

export default function Gallery() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? placeholders
      : placeholders.filter((p) => p.cat === active);

  return (
    <section id="trabajos" className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">
            Galería
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trabajos realizados
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Cada proyecto es único. Aquí mostramos una selección de nuestros
            trabajos más recientes en A Coruña.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-sm transition-all duration-200 tracking-wide ${
                active === cat
                  ? "bg-brand-dark1 text-brand-gold border border-brand-gold/40"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="gallery-card group relative bg-brand-dark2 border border-brand-dark3 rounded-sm overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="placeholder-img absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-brand-dark3 flex items-center justify-center mb-3 group-hover:border-brand-gold/40 transition-colors">
                  <Camera className="text-gray-600 group-hover:text-brand-gold/60 transition-colors" size={22} />
                </div>
                <p className="text-gray-600 text-xs text-center px-4">{item.label}</p>
                <p className="text-gray-700 text-[10px] mt-1 uppercase tracking-wider">{item.cat}</p>
              </div>

              {/* Hover overlay */}
              <div className="gallery-overlay absolute inset-0 bg-brand-dark1/80 opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2">
                  {item.cat}
                </span>
                <p className="text-white font-medium text-center text-sm leading-snug">
                  {item.label}
                </p>
                <div className="mt-4 w-8 h-px bg-brand-gold" />
              </div>

              {/* Gold corner */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                  <ArrowRight size={12} className="text-brand-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Estamos recopilando fotos reales de nuestros proyectos.{" "}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-brand-gold hover:text-brand-gold-light underline underline-offset-2 transition-colors"
            >
              Solicita información
            </a>{" "}
            para ver ejemplos personalizados.
          </p>
        </div>
      </div>
    </section>
  );
}
