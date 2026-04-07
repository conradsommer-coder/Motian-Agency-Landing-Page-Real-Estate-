import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        gap: "The Gap",
        solutions: "Solutions",
        method: "Method",
        contact: "Contact"
      },
      hero: {
        badge: "Strategic Real Estate Marketing • Los Cabos",
        title1: "Better presentation.",
        title2: "Better positioning.",
        title3: "Better",
        title4: "leads.",
        desc: "Motion helps developers with branding, sales materials, websites, visual production, paid campaigns, and tracking to create a stronger lead generation system.",
        cta1: "Get a Free Development Marketing Audit",
        cta2: "How We Help"
      },
      problem: {
        badge: "The Challenge",
        title: "Why strong developments still struggle to generate quality leads.",
        desc: "Most developers focus 99% on the brick and mortar, leaving the funnel as an afterthought. A strong project with a weak funnel will always underperform in a competitive market.",
        p1: { title: "Weak Branding", desc: "Generic identities that fail to resonate with premium buyers." },
        p2: { title: "Generic Sales Materials", desc: "Static brochures and outdated tools that kill momentum." },
        p3: { title: "Low-Quality Leads", desc: "High volume, zero conversion. Marketing that misses the target." },
        p4: { title: "Disconnected Campaigns", desc: "Creative work and paid traffic working in silos without tracking." }
      },
      solution: {
        badge: "How We Help",
        title: "How Motion Agency can help.",
        desc: "We help developers build the materials, systems, and campaigns needed to present their project more clearly and generate higher-quality leads.",
        g1: {
          title: "Brand & Positioning",
          items: ["Branding", "Messaging", "Project story and value proposition"]
        },
        g2: {
          title: "Sales Materials",
          items: ["Sales presentations", "Mobile sales presentations", "Brochures / PDFs", "Broker kits", "WhatsApp-ready materials"]
        },
        g3: {
          title: "Digital Presence",
          items: ["Landing pages", "Full websites", "SEO structure", "Lead capture funnels"]
        },
        g4: {
          title: "Visual Production",
          items: ["Photography", "Video", "Drone", "Launch content", "Lifestyle visual direction"]
        },
        g5: {
          title: "Performance & Tracking",
          items: ["Meta Ads", "Google Ads", "Retargeting", "Conversion tracking", "Lead attribution", "Funnel optimization"]
        }
      },
      outcomes: {
        title: "What this improves for your project.",
        cta: "See Our Method",
        items: [
          "Stronger first impression",
          "More professional perception",
          "Clearer market positioning",
          "Better sales tools for brokers",
          "Improved lead capture",
          "Higher-quality inquiries",
          "Full lead attribution clarity"
        ]
      },
      performance: {
        badge: "Performance First",
        title: "Built for presentation and performance.",
        desc: "We connect high-end creative work with precision-targeted paid traffic. Our systems ensure every lead is tracked, attributed, and optimized for maximum ROI.",
        stat1: "Lead Attribution",
        stat2: "Funnel Optimization",
        item1: "Meta & Google Ads Integration",
        item2: "Precision Retargeting",
        item3: "Advanced Conversion Tracking"
      },
      audit: {
        badge: "Limited Opportunity",
        title: "Request a Free Project Marketing Audit.",
        desc: "We will analyze your current development's positioning and funnel to identify growth opportunities.",
        cta: "Claim Your Free Audit",
        items: [
          "Branding and positioning review",
          "Sales presentation review",
          "Website / landing page review",
          "Lead generation observations",
          "Paid traffic opportunities",
          "Action points tailored to the project"
        ]
      },
      process: {
        badge: "The Method",
        title: "How we improve your lead generation system.",
        desc: "A strategic framework designed for real estate conversion and tracking.",
        s1: { title: "Review", desc: "Deep dive into your current materials and funnel." },
        s2: { title: "Position", desc: "Crafting the unique narrative that justifies premium value." },
        s3: { title: "Build", desc: "Developing the sales tools and digital infrastructure." },
        s4: { title: "Launch", desc: "Market entry with precision-targeted campaigns." },
        s5: { title: "Track", desc: "Full attribution setup to monitor every lead." },
        s6: { title: "Optimize", desc: "Continuous improvement based on real performance data." }
      },
      credibility: {
        title: "Selected Work.",
        desc: "Strategic assets built for high-value real estate projects.",
        view: "View Project"
      },
      contact: {
        title: "Let's review your project.",
        desc: "Fill out the form to request your free strategic audit or schedule a discovery call with our team.",
        email: "Email us",
        whatsapp: "WhatsApp",
        office: "Office",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone / WhatsApp",
          company: "Company or Development Name",
          stage: "Project Stage",
          stage_options: {
            pre: "Pre-Launch / Planning",
            launch: "Launch / Sales Started",
            const: "Under Construction",
            stagnant: "Stagnant Sales / Re-branding"
          },
          needs: "What do you need help with?",
          needs_placeholder: "Tell us about your project goals...",
          submit: "Request Your Free Audit",
          privacy: "By submitting, you agree to our privacy policy."
        }
      },
      faq: {
        title: "Strategic Questions.",
        q1: { q: "Do you work only with large developments?", a: "We work with projects of all sizes, from boutique 10-unit developments to large master-planned communities. What matters is the commitment to quality and strategic positioning." },
        q2: { q: "Can you work alongside our internal team?", a: "Absolutely. We often act as a strategic layer, providing the high-level branding, performance strategy, and creative direction that internal teams can then execute or manage alongside us." },
        q3: { q: "Can you help if we already have branding or a website?", a: "Yes. We can audit your current assets and identify where the conversion leaks are. We can either improve what you have or build a more robust system from scratch." },
        q4: { q: "Do you handle both creative and performance marketing?", a: "Yes. We believe branding without performance is a waste of money, and performance without branding is a waste of leads. We integrate both for a cohesive funnel." },
        q5: { q: "Can you support project launches and pre-sale campaigns?", a: "This is our specialty. We build the momentum needed for successful 'Friends & Family' phases and official launches to ensure high absorption rates from day one." }
      },
      footer: {
        desc: "A strategic boutique agency in Los Cabos dedicated to elevating real estate developments through high-end branding, cinematic production, and performance marketing.",
        nav: "Navigation"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        gap: "La Brecha",
        solutions: "Soluciones",
        method: "Método",
        contact: "Contacto"
      },
      hero: {
        badge: "Marketing Estratégico Inmobiliario • Los Cabos",
        title1: "Mejor presentación.",
        title2: "Mejor posicionamiento.",
        title3: "Mejores",
        title4: "leads.",
        desc: "Motion ayuda a desarrolladores con branding, materiales de venta, sitios web, producción visual, campañas pagadas y rastreo para crear un sistema de generación de leads más sólido.",
        cta1: "Obtén una Auditoría Gratuita de Marketing",
        cta2: "Cómo Ayudamos"
      },
      problem: {
        badge: "El Desafío",
        title: "Por qué los desarrollos sólidos aún luchan por generar leads de calidad.",
        desc: "La mayoría de los desarrolladores se enfocan 99% en la construcción, dejando el embudo como una ocurrencia tardía. Un gran proyecto con un embudo débil siempre tendrá un bajo rendimiento en un mercado competitivo.",
        p1: { title: "Branding Débil", desc: "Identidades genéricas que no logran resonar con compradores premium." },
        p2: { title: "Materiales de Venta Genéricos", desc: "Folletos estáticos y herramientas obsoletas que matan el impulso." },
        p3: { title: "Leads de Baja Calidad", desc: "Alto volumen, cero conversión. Marketing que no da en el blanco." },
        p4: { title: "Campañas Desconectadas", desc: "Trabajo creativo y tráfico pagado trabajando en silos sin rastreo." }
      },
      solution: {
        badge: "Cómo Ayudamos",
        title: "Cómo Motion Agency puede ayudar.",
        desc: "Ayudamos a los desarrolladores a construir los materiales, sistemas y campañas necesarios para presentar su proyecto con mayor claridad y generar leads de mayor calidad.",
        g1: {
          title: "Marca y Posicionamiento",
          items: ["Branding", "Mensajería", "Historia del proyecto y propuesta de valor"]
        },
        g2: {
          title: "Materiales de Venta",
          items: ["Presentaciones de venta", "Presentaciones móviles", "Folletos / PDFs", "Kits para brokers", "Materiales listos para WhatsApp"]
        },
        g3: {
          title: "Presencia Digital",
          items: ["Landing pages", "Sitios web completos", "Estructura SEO", "Embudos de captura de leads"]
        },
        g4: {
          title: "Producción Visual",
          items: ["Fotografía", "Video", "Drone", "Contenido de lanzamiento", "Dirección visual de estilo de vida"]
        },
        g5: {
          title: "Rendimiento y Rastreo",
          items: ["Meta Ads", "Google Ads", "Retargeting", "Rastreo de conversiones", "Atribución de leads", "Optimización del embudo"]
        }
      },
      outcomes: {
        title: "Lo que esto mejora para tu proyecto.",
        cta: "Ver Nuestro Método",
        items: [
          "Impresión inicial más fuerte",
          "Percepción más profesional",
          "Posicionamiento de mercado más claro",
          "Mejores herramientas de venta para brokers",
          "Captura de leads mejorada",
          "Consultas de mayor calidad",
          "Claridad total en la atribución de leads"
        ]
      },
      performance: {
        badge: "Rendimiento Primero",
        title: "Construido para presentación y rendimiento.",
        desc: "Conectamos el trabajo creativo de alto nivel con tráfico pagado dirigido con precisión. Nuestros sistemas aseguran que cada lead sea rastreado, atribuido y optimizado para el máximo ROI.",
        stat1: "Atribución de Leads",
        stat2: "Optimización del Embudo",
        item1: "Integración de Meta y Google Ads",
        item2: "Retargeting de Precisión",
        item3: "Rastreo Avanzado de Conversiones"
      },
      audit: {
        badge: "Oportunidad Limitada",
        title: "Solicita una Auditoría Gratuita de Marketing.",
        desc: "Analizaremos el posicionamiento y el embudo de tu desarrollo actual para identificar oportunidades de crecimiento.",
        cta: "Reclama Tu Auditoría Gratuita",
        items: [
          "Revisión de branding y posicionamiento",
          "Revisión de presentación de ventas",
          "Revisión de sitio web / landing page",
          "Observaciones de generación de leads",
          "Oportunidades de tráfico pagado",
          "Puntos de acción adaptados al proyecto"
        ]
      },
      process: {
        badge: "El Método",
        title: "Cómo mejoramos tu sistema de generación de leads.",
        desc: "Un marco estratégico diseñado para la conversión y el rastreo inmobiliario.",
        s1: { title: "Revisión", desc: "Inmersión profunda en tus materiales y embudo actuales." },
        s2: { title: "Posicionamiento", desc: "Creación de la narrativa única que justifica el valor premium." },
        s3: { title: "Construcción", desc: "Desarrollo de las herramientas de venta e infraestructura digital." },
        s4: { title: "Lanzamiento", desc: "Entrada al mercado con campañas dirigidas con precisión." },
        s5: { title: "Rastreo", desc: "Configuración de atribución total para monitorear cada lead." },
        s6: { title: "Optimización", desc: "Mejora continua basada en datos de rendimiento reales." }
      },
      credibility: {
        title: "Trabajo Seleccionado.",
        desc: "Activos estratégicos construidos para proyectos inmobiliarios de alto valor.",
        view: "Ver Proyecto"
      },
      contact: {
        title: "Revisemos tu proyecto.",
        desc: "Completa el formulario para solicitar tu auditoría estratégica gratuita o programar una llamada de descubrimiento con nuestro equipo.",
        email: "Escríbenos",
        whatsapp: "WhatsApp",
        office: "Oficina",
        form: {
          name: "Nombre Completo",
          email: "Correo Electrónico",
          phone: "Teléfono / WhatsApp",
          company: "Empresa o Nombre del Desarrollo",
          stage: "Etapa del Proyecto",
          stage_options: {
            pre: "Pre-Lanzamiento / Planeación",
            launch: "Lanzamiento / Ventas Iniciadas",
            const: "En Construcción",
            stagnant: "Ventas Estancadas / Re-branding"
          },
          needs: "¿En qué necesitas ayuda?",
          needs_placeholder: "Cuéntanos sobre los objetivos de tu proyecto...",
          submit: "Solicitar Auditoría Gratuita",
          privacy: "Al enviar, aceptas nuestra política de privacidad."
        }
      },
      faq: {
        title: "Preguntas Estratégicas.",
        q1: { q: "¿Solo trabajan con grandes desarrollos?", a: "Trabajamos con proyectos de todos los tamaños, desde desarrollos boutique de 10 unidades hasta grandes comunidades planificadas. Lo que importa es el compromiso con la calidad y el posicionamiento estratégico." },
        q2: { q: "¿Pueden trabajar junto a nuestro equipo interno?", a: "Absolutamente. A menudo actuamos como una capa estratégica, proporcionando el branding de alto nivel, la estrategia de rendimiento y la dirección creativa que los equipos internos pueden ejecutar o gestionar junto a nosotros." },
        q3: { q: "¿Pueden ayudar si ya tenemos branding o un sitio web?", a: "Sí. Podemos auditar tus activos actuales e identificar dónde están las fugas de conversión. Podemos mejorar lo que tienes o construir un sistema más robusto desde cero." },
        q4: { q: "¿Manejan tanto el marketing creativo como el de rendimiento?", a: "Sí. Creemos que el branding sin rendimiento es un desperdicio de dinero, y el rendimiento sin branding es un desperdicio de leads. Integramos ambos para un embudo cohesivo." },
        q5: { q: "¿Pueden apoyar lanzamientos de proyectos y campañas de preventa?", a: "Esta es nuestra especialidad. Construimos el impulso necesario para fases exitosas de 'Friends & Family' y lanzamientos oficiales para asegurar altas tasas de absorción desde el primer día." }
      },
      footer: {
        desc: "Una agencia boutique estratégica en Los Cabos dedicada a elevar desarrollos inmobiliarios a través de branding de alto nivel, producción cinematográfica y marketing de rendimiento.",
        nav: "Navegación"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
