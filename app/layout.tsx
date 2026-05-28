import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Notaría Pública No. 2 Monterrey | Lic. Raúl Ricardo Pedraza Rodríguez",
  description:
    "Notaría Pública número 2 en Monterrey, Nuevo León. Servicios notariales desde 1972: compraventa de inmuebles, testamentos, constitución de sociedades, poderes notariales y más.",
  keywords:
    "notaría, notario público, Monterrey, Nuevo León, Raúl Pedraza, compraventa, testamento, escritura",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`h-full ${playfairDisplay.variable}`}>
      <body className={`min-h-full flex flex-col ${playfairDisplay.className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
