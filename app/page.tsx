import { Metadata } from "next";
import { siteData } from "@/data/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Logistics from "@/components/Logistics";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Contact/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: siteData.siteName,
    template: `%s | ${siteData.siteName}`,
  },
  description: siteData.siteDescription,
  keywords: [
    "comercializadora internacional",
    "materias primas",
    "insumos químicos",
    "importación",
    "distribución",
    "logística",
    "industria",
    "LSol",
  ],
  authors: [{ name: siteData.siteName }],
  openGraph: {
    title: siteData.siteName,
    description: siteData.siteDescription,
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.siteName,
    description: siteData.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Logistics />
        <Sectors />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
