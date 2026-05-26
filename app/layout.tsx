// Layout raiz de la aplicacion - Define la estructura HTML base
// Configura fuentes, metadatos e importa estilos globales

import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";  // Estilos globales con Tailwind

// Configuracion de fuentes de Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",  // Fuente para texto normal
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  // Fuente monoespaciada
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",  // Fuente para titulos
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Layout principal que envuelve a todas las paginas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}  {/* Renderiza el contenido de la pagina */}
      </body>
    </html>
  );
}
