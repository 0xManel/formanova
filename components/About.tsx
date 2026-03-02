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
    <section id="nosotros" className="bg-brand-dark1 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">
              Sobre nosotros
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Una empresa de reformas
              <br />
              <span className="text-brand-gold">en la que confiar</span>
            </h2>
            <div className="gold-divider mb-8" />

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                En <strong className="text-white font-medium">FormaNova</strong> nos dedicamos a
                reformas y trabajos de albañilería, ofreciendo soluciones personalizadas
                para cada cliente. Trabajamos con seriedad, experiencia y vocación de
                servicio.
              </p>
              <p>
                Nuestra forma de trabajar se basa en la comunicación constante con el
                cliente, el respeto a los presupuestos acordados y la entrega puntual de
                cada proyecto. No prometemos lo que no podemos cumplir.
              </p>
              <p>
                Operamos en <strong className="text-white font-medium">A Coruña y toda su área
                metropolitana</strong>, con un equipo propio de profesionales especializados
                en cada área.
              </p>
            </div>

            {/* Values list */}
            <ul className="mt-8 space-y-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-brand-gold mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-400 text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className="relative">
            {/* Main placeholder */}
            <div className="relative bg-brand-dark2 border border-brand-dark3 rounded-sm aspect-[4/3] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_70%)]" />
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold/30 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand-gold/50">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="text-gray-600 text-sm">Foto del equipo</p>
              <p className="text-gray-700 text-xs mt-1">Próximamente</p>

              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-brand-gold/20 rotate-45" />
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { value: "10+", label: "Años de experiencia" },
                { value: "A Coruña", label: "Zona de trabajo" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-dark2 border border-brand-dark3 p-5 rounded-sm text-center"
                >
                  <p className="text-2xl font-bold text-brand-gold">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
