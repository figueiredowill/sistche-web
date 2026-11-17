import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistchê — Desenvolvimento Web e Soluções Digitais",
  description:
    "Sites, e-commerce, sistemas web e integrações. A Sistchê transforma ideias em experiências digitais construídas com estratégia e tecnologia.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sistchê — Desenvolvimento Web",
    description: "Tecnologia, estratégia e criatividade para tirar suas ideias do papel.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sistchê",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
