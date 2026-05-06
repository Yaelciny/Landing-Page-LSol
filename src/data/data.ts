export interface Banner {
  id: number;
  title: string;
  subtitle: string;
}

export interface Distinctive {
  id: number;
  title: string;
  description: string;
}

export interface Feature {
  id: number;
  text: string;
}

export interface AboutSection {
  concept: string;
  mission: string;
  trajectory: string;
  valueAdd: string;
}

export interface LogisticsPoint {
  id: number;
  title: string;
  description: string;
}

export interface LogisticsSection {
  description: string;
  points: LogisticsPoint[];
}

export interface Sector {
  id: number;
  name: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapUrl: string;
}

export interface SiteData {
  siteName: string;
  siteDescription: string;
  banners: Banner[];
  distinctives: Distinctive[];
  features: Feature[];
  about: AboutSection;
  logistics: LogisticsSection;
  sectors: Sector[];
  contact: ContactInfo;
}

export const siteData: SiteData = {
  siteName: "LSol Comercializadora Internacional",
  siteDescription:
    "Suministro estratégico de materias primas e insumos químicos para la industria. Importación y distribución con respaldo global.",
  banners: [
    {
      id: 1,
      title: "LSol Comercializadora Internacional",
      subtitle:
        "Suministro estratégico de materias primas e insumos químicos para la industria.",
    },
    {
      id: 2,
      title: "Continuidad en su cadena de producción",
      subtitle:
        "Abastecimiento eficaz con soluciones logísticas a la medida de su empresa.",
    },
    {
      id: 3,
      title: "Calidad que trasciende fronteras",
      subtitle:
        "Importación y distribución con respaldo global y atención personalizada.",
    },
  ],
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
  about: {
    concept:
      "Somos una comercializadora de vanguardia dedicada a la importación y distribución de materias primas. Operamos como el enlace vital entre los productores globales de insumos químicos y la industria nacional.",
    mission:
      "Resolver de manera integral el desabasto y las complicaciones logísticas, asegurando que cada uno de nuestros clientes cuente con los materiales necesarios en el momento preciso.",
    trajectory:
      "Contamos con una estructura operativa robusta que nos permite atender sectores diversos, desde la industria textil hasta la alimenticia, siempre bajo la premisa de la transparencia y la excelencia operativa.",
    valueAdd:
      "En LSol, no solo entregamos productos; gestionamos soluciones. Nos comprometemos con el éxito de sus proyectos optimizando cada etapa del proceso de adquisición.",
  },
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
  sectors: [
    {
      id: 1,
      name: "Industria Curtidora",
      description: "Especialidades químicas para el proceso de cuero.",
    },
    {
      id: 2,
      name: "Plastificantes",
      description: "Insumos para la transformación de polímeros.",
    },
    {
      id: 3,
      name: "Sector Alimenticio",
      description: "Materias primas de grado alimenticio certificadas.",
    },
    {
      id: 4,
      name: "Tratamiento de Aguas",
      description: "Soluciones para purificación y manejo de efluentes.",
    },
    {
      id: 5,
      name: "Industria Hulera",
      description: "Compuestos para la producción de caucho.",
    },
    {
      id: 6,
      name: "Detergentes y Cuidado del Hogar",
      description: "Tensoactivos e insumos de limpieza.",
    },
    {
      id: 7,
      name: "Cosmética",
      description: "Materias primas para cuidado personal y belleza.",
    },
    {
      id: 8,
      name: "Industria Textil",
      description: "Químicos para procesamiento y acabado de fibras.",
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
    },
  ],
  contact: {
    email: "contacto@lsol.com",
    phone: "+52 55 1234 5678",
    address: "Ciudad de México, México",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.288981944748!2d-99.133208!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x789c79fe9f16b7e2!2sZocalo%2C%20Mexico%20City!5e0!3m2!1sen!2smx!4v1234567890",
  },
};
