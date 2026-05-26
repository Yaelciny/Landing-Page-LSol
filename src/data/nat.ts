// Archivo central de datos - Contiene toda la informacion estatica del sitio
// Aqui se modifican textos, imagenes y contenido sin tocar los componentes

import { StaticImageData } from "next/image";
import logo from "@/assets/Logo/Logo-LSol.webp";  // Imagen del logo de LSol
import logoWhite from "@/assets/Logo/Logo-Lsol-Blanco.webp";  // Imagen del logo de LSol
import banner1 from "@/assets/Banners/Banner-1.webp";  // Imagen del primer banner
import banner2 from "@/assets/Banners/Banner-2.webp";  // Imagen del segundo banner
import banner3 from "@/assets/Banners/Banner-3.webp";  // Imagen del tercer banner
import about from "@/assets/About/Imagen-LSol.webp"; // Imagen de sobre nostros
import sector1 from "@/assets/Sectores/Industria-Curtidora.webp";
import sector2 from "@/assets/Sectores/Plastificantes.webp";
import sector3 from "@/assets/Sectores/Sector-alimenticio.webp";
import sector4 from "@/assets/Sectores/Tratamiento-agua.webp";

// Definicion de tipos para TypeScript - Ayuda a mantener el codigo ordenado
// Cada interfaz define la estructura de una seccion especifica

export interface Banner {
  id: number;
  title: string;      // Titulo grande del banner
  subtitle: string;   // Texto debajo del titulo
  image: StaticImageData;  // Imagen de fondo
}

export interface Distinctive {
  id: number;
  title: string;        // Nombre del distintivo (ej: Abastecimiento Garantizado)
  description: string;  // Explicacion corta
}

export interface Feature {
  id: number;
  text: string;  // Caracteristicas principales de la empresa
}

export interface AboutSection {
  concept: string;     // Que es la empresa
  mission: string;     // Proposito principal
  trajectory: string;  // Historia y experiencia
  valueAdd: string;    // Que los hace diferentes
}

export interface LogisticsPoint {
  id: number;
  title: string;        // Nombre del punto logístico
  description: string;   // Explicacion de ese servicio
}

export interface LogisticsSection {
  description: string;      // Texto introductorio de la seccion
  points: LogisticsPoint[]; // Lista de puntos logísticos
}

export interface Sector {
  id: number;
  name: string;           // Nombre del sector industrial
  description: string;     // Que insumos se les provee
  image?: StaticImageData; // Imagen (opcional, para sectores principales)
  isMain?: boolean;        // true = se muestra grande arriba, false = icono pequeno
  products?: string[];     // Lista de productos que se ofrecen
}

export interface AboutSection {
  concept: string;
  mission: string;
  trajectory: string;
  valueAdd: string;
  image: StaticImageData;  // Imagen de la seccion Sobre Nosotros
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  infoTitle: string;
  email: string;      // Correo electronico de contacto
  phone: string;      // Telefono de la empresa
  address: string;    // Direccion fisica
  mapUrl: string;     // URL del mapa de Google Maps embebido
  whatsapp?: string;  // Enlace de WhatsApp (opcional)
}

export interface PhilosophyItem {
  id: number;
  title: string;        // Titulo del valor filosofico
  description: string;  // Explicacion del valor
}

// Interfaz principal que agrupa toda la informacion del sitio
export interface SiteData {
  siteLogo: StaticImageData;
  siteLogoWhite: StaticImageData;
  siteName: string;           // Nombre de la empresa
  siteDescription: string;    // Descripcion para SEO y metadatos
  banners: Banner[];          // Carrusel de la pagina principal
  distinctives: Distinctive[]; // 3 puntos destacados debajo del hero
  features: Feature[];        // 4 caracteristicas principales
  about: AboutSection;        // Informacion de Sobre Nosotros
  logistics: LogisticsSection; // Soluciones logísticas
  sectors: Sector[];          // Lista de industrias atendidas
  philosophy: PhilosophyItem[]; // Valores filosoficos
  contact: ContactInfo;       // Informacion de contacto
}


// Objeto principal con todos los datos - MODIFICA AQUI para cambiar contenido
export const siteData: SiteData = {
  siteLogo: logo,
  siteLogoWhite: logoWhite,
  siteName: "LSol Comercializadora Internacional",
  siteDescription:
    "Suministro estratégico de materias primas e insumos químicos para la industria. Importación y distribución con respaldo global.",
  // Banners del carrusel principal - 3 imagenes con texto
  banners: [
    {
      id: 1,
      title: "LSol Comercializadora Internacional",
      subtitle:
        "Suministro estratégico de materias primas e insumos químicos para la industria.",
      image: banner1,
    },
    {
      id: 2,
      title: "Continuidad en su cadena de producción",
      subtitle:
        "Abastecimiento eficaz con soluciones logísticas a la medida de su empresa.",
      image: banner2,
    },
    {
      id: 3,
      title: "Calidad que trasciende fronteras",
      subtitle:
        "Importación y distribución con respaldo global y atención personalizada.",
      image: banner3,
    },
  ],
  // 3 distintivos que aparecen debajo del carrusel
  distinctives: [
    {
      id: 1,
      title: "Abastecimiento Garantizado",
      description:
        "Flujo continuo de materiales para que su planta nunca se detenga.",
    },
    {
      id: 2,
      title: "Atención de Pronta Respuesta",
      description:
        "Gestión inmediata de pedidos y seguimiento en tiempo real.",
    },
    {
      id: 3,
      title: "Compromiso de Calidad",
      description:
        "Rigurosos estándares en la selección y manejo de cada insumo.",
    },
  ],
  // Caracteristicas principales de la empresa
  features: [
    {
      id: 1,
      text: "Atención especializada para fabricantes, mayoristas y distribuidores.",
    },
    {
      id: 2,
      text: "Expertos en la gestión de logística internacional y nacional.",
    },
    {
      id: 3,
      text: "Acompañamiento técnico en la selección de materiales.",
    },
    {
      id: 4,
      text: "Gestión ética y profesional de insumos industriales.",
    },
  ],
  // Seccion Sobre Nosotros - Informacion de la empresa
  about: {
    concept:
      "Somos una comercializadora de vanguardia dedicada a la importación y distribución de materias primas. Operamos como el enlace vital entre los productores globales de insumos químicos y la industria nacional.",
    mission:
      "Resolver de manera integral el desabasto y las complicaciones logísticas, asegurando que cada uno de nuestros clientes cuente con los materiales necesarios en el momento preciso.",
    trajectory:
      "Contamos con una estructura operativa robusta que nos permite atender sectores diversos, desde la industria textil hasta la alimenticia, siempre bajo la premisa de la transparencia y la excelencia operativa.",
    valueAdd:
      "En LSol, no solo entregamos productos; gestionamos soluciones. Nos comprometemos con el éxito de sus proyectos optimizando cada etapa del proceso de adquisición.",
    image: about
  },
  // Seccion Soluciones Logísticas
  logistics: {
    description:
      "Entendemos que un retraso en la materia prima significa una pérdida en la producción. Por ello, nuestra propuesta de valor se centra en blindar su operación:",
    points: [
      {
        id: 1,
        title: "Optimización de Eslabones",
        description:
          "Analizamos y resolvemos cualquier contratiempo en la cadena de suministro, desde el origen hasta su bodega.",
      },
      {
        id: 2,
        title: "Logística de Respuesta Rápida",
        description:
          "Implementamos procesos ágiles para resolver urgencias y asegurar entregas en tiempos competitivos.",
      },
      {
        id: 3,
        title: "Soporte ante Contingencias",
        description:
          "Contamos con la capacidad de respuesta para gestionar trámites y transporte, mitigando riesgos de desabasto.",
      },
      {
        id: 4,
        title: "Distribución Inteligente",
        description:
          "Estrategias de entrega adaptadas al volumen y frecuencia que su empresa requiere (Nacional y Mayorista).",
      },
    ],
  },
  // Sectores industriales atendidos - 4 principales con imagen, 6 con icono
  sectors: [
    {
      id: 1,
      name: "Industria Curtidora",
      description: "Especialidades químicas para el proceso de cuero.",
      image: sector1,
      isMain: true,
      products: [
        "CARBONATO DE SODIO LIGERO",
        "SULFHIDRATO DE SODIO 70% ESCAMAS",
        "SULFURO DE SODIO 60-66% ESCAMAS",
        "METABISULFITO DE SODIO ANHIDRO",
        "BICARBONATO DE AMONIO",
        "SAL LAVADA",
        "SAL MOLIDA",
        "SAL ISYSA",
        "EDTA (SECUESTRANTE) TETRASÓDICO",
        "FORMIATO DE SODIO",
        "CAL (INDUSTRIAL Y ALIMENTICIA)",
      ],
    },
    {
      id: 2,
      name: "Plastificantes / Solventes",
      description: "Insumos para la transformación de polímeros y solventes industriales.",
      image: sector2,
      isMain: true,
      products: [
        "ACETONA",
        "TOLUENO",
        "MEK",
        "IPA",
        "ALC ETILICO",
        "ALC BENCÍLICO",
        "ALC METILICO",
        "ALC CETILICO",
        "ALC N-BUTÍLICO",
        "ALC LÁURICO",
        "XILOL",
        "THINNER NAC",
        "THINER IMPORTADO",
      ],
    },
    {
      id: 3,
      name: "Sector Alimenticio",
      description: "Materias primas de grado alimenticio certificadas.",
      image: sector3,
      isMain: true,
      products: [
        "ÁCIDO CÍTRICO",
        "ÁCIDO TARTÁRICO",
        "ÁCIDO ASCÓRBICO",
        "BENZOATO DE SODIO",
        "FÉCULA DE MAÍZ",
        "ALMIDÓN DE MAÍZ NATIVO",
        "MALTODEXTRINA",
        "GOMA XANTANA",
        "ÁCIDO ACÉTICO GLACIAL",
        "BICARBONATO DE SODIO",
        "CITRATO DE SODIO",
        "CLORURO DE CALCIO",
      ],
    },
    {
      id: 4,
      name: "Tratamiento de Aguas",
      description: "Soluciones para purificación y manejo de efluentes.",
      image: sector4,
      isMain: true,
      products: [
        "SULFATO DE ALUMINIO",
        "SULFATO FÉRRICO",
        "BISULFITO DE SODIO",
        "HIDRÓXIDO DE CALCIO",
      ],
    },
    {
      id: 5,
      name: "Industria Hulera",
      description: "Compuestos para la producción de caucho.",
      products: [
        "CAOLÍN INDUSTRIAL",
        "ÁCIDO ESTEÁRICO",
      ],
    },
    {
      id: 6,
      name: "Detergentes y Cuidado del Hogar",
      description: "Tensoactivos e insumos de limpieza.",
      products: [
        "LAURIL",
        "GLICERINA",
        "CARBONATO DE SODIO DENSO",
        "EDTA (SECUESTRANTE) DISÓDICO",
        "EDTA (SECUESTRANTE)",
        "GLUCONATO DE SODIO",
      ],
    },
    {
      id: 7,
      name: "Cosmética",
      description: "Materias primas para cuidado personal y belleza.",
      products: [
        "LAURIL",
        "GLICERINA",
        "CARBONATO DE SODIO DENSO",
        "EDTA (SECUESTRANTE) DISÓDICO",
        "EDTA (SECUESTRANTE)",
        "GLUCONATO DE SODIO",
      ],
    },
    {
      id: 8,
      name: "Industria Textil",
      description: "Químicos para procesamiento y acabado de fibras.",
      products: [
        "CLORURO DE SODIO",
        "SILICATO DE SODIO",
        "BOROHIDRURO DE SODIO",
        "COLORANTES",
        "LESS",
      ],
    },
    {
      id: 9,
      name: "Papel y Celulosa",
      description: "Insumos para la fabricación y tratamiento de papel.",
    },
    {
      id: 10,
      name: "Químicos Especializados",
      description: "Portafolio diverso para necesidades técnicas específicas.",
      products: [
        "ÁCIDO MURIÁTICO",
        "ÁCIDO CLORHÍDRICO",
        "ÁCIDO SULFÚRICO",
        "ÁCIDO FÓRMICO",
        "PERÓXIDO DE HIDRÓGENO",
        "DIETILENGLICOL",
        "PROPILENGLICOL",
      ],
    },
  ],
  // Valores filosoficos de la empresa
  philosophy: [
    {
      id: 1,
      title: "Atención y servicio al cliente",
      description: "Lo primordial es la satisfacción de nuestros clientes.",
    },
    {
      id: 2,
      title: "Honestidad y respeto",
      description: "Ofrecer lo que realmente necesitan nuestros clientes.",
    },
    {
      id: 3,
      title: "Puntualidad y responsabilidad",
      description: "Entregar en tiempo y forma todos nuestros trabajos.",
    },
    {
      id: 4,
      title: "Trabajo en equipo",
      description: "El trabajo en equipo siempre da mejores resultados.",
    },
  ],
  // Informacion de contacto - IMPORTANTE: Reemplaza los placeholders [Insertar...]
  contact: {
    title: "Contacto",
    subtitle: "Estamos listos para atender sus requerimientos industriales",
    infoTitle: "Información de Contacto",
    email: "ventas@lsolgoblal.com.mx",
    phone: "479 428 87 04",
    address: "Blvd. Brisa de Sarandí 315, 37669 León de los Aldama, Gto.",
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.390133063356!2d-101.7658604883323!3d21.17665548042865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bc6dcb105c5c7%3A0x752b84dba73e2af4!2sBlvd.%20Brisa%20de%20Sarand%C3%AD%20315%2C%2037669%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1779818585533!5m2!1ses-419!2smx',
    whatsapp: "https://api.whatsapp.com/send?phone=524794288704",
  },

};
