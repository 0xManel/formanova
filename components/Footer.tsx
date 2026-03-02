"use client";

import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Reformas integrales",
  "Reformas de baños",
  "Reformas de cocinas",
  "Albañilería general",
  "Pintura",
  "Suelos y azulejos",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-dark3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image src="/logo.jpeg" alt="FormaNova" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold tracking-widest uppercase text-sm leading-none">
                  <span className="text-gray-400">FORMA</span>
                  <span className="text-brand-gold">NOVA</span>
                </p>
                <p className="text-[10px] text-gray-600 tracking-widest uppercase mt-0.5">
                  Reformas & Obras
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Empresa de reformas y obras en A Coruña. Seriedad, calidad y
              resultados profesionales.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+34642827196"
                className="flex items-center gap-2 text-gray-500 hover:text-brand-gold transition-colors text-sm"
              >
                <Phone size={13} />
                +34 642 82 71 96
              </a>
              <a
                href="https://wa.me/34642827196"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-[#25D366] transition-colors text-sm"
              >
                <MessageCircle size={13} />
                WhatsApp disponible
              </a>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin size={13} />
                A Coruña y alrededores
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-gray-500 hover:text-brand-gold transition-colors text-sm"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              ¿Tienes un proyecto?
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Solicita tu presupuesto sin compromiso y te respondemos rápidamente.
            </p>
            <a
              href="https://wa.me/34642827196?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black font-semibold text-sm px-5 py-3 rounded-sm transition-colors tracking-wide w-full justify-center"
            >
              <MessageCircle size={15} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-dark3 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-xs">
            © {year} FormaNova. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Empresa de reformas en{" "}
            <span className="text-gray-600">A Coruña, Galicia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
