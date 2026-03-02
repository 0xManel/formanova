import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormaNova | Empresa de Reformas en A Coruña",
  description:
    "Reformas integrales, baños, cocinas y albañilería en A Coruña. Seriedad, compromiso y resultados profesionales. Presupuesto sin compromiso. ☎ +34 642 82 71 96",
  keywords: [
    "reformas en A Coruña",
    "empresa de reformas A Coruña",
    "albañil A Coruña",
    "reformas integrales",
    "reformas de baños",
    "reformas de cocinas",
    "albañilería A Coruña",
    "pintura A Coruña",
    "reformas integrales A Coruña",
    "presupuesto reformas A Coruña",
  ],
  authors: [{ name: "FormaNova" }],
  openGraph: {
    title: "FormaNova | Empresa de Reformas en A Coruña",
    description:
      "Reformas y obras de calidad en A Coruña. Seriedad, compromiso y resultados profesionales.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-brand-dark1 text-white antialiased">{children}</body>
    </html>
  );
}
