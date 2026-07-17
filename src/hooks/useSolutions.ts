"use client";

import { getOptimizedUrl } from "@/lib/images";
import { Product } from "@/types/product";
import { useLocale } from "next-intl";


export function useSolutions() {
    const locale = useLocale()


    const solutionsSpanish: Product[] = [
        {
            id: "flow-01",
            name: "Activador de Respuesta Inmediata",
            description: "Configuración de respuestas automáticas básicas y reducción de tiempos de espera.",
            price: 246,
            fullDescription: "Primer paso para automatizar tu operación comercial. Respuestas automáticas que eliminan tiempos muertos en el primer contacto con prospectos.",
            features: [
                "Configuración de respuestas automáticas básicas",
                "Reducción de tiempos de espera",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1516321318423-f06f85e504b3")
        },
        {
            id: "flow-02",
            name: "Filtro Inicial de Prospectos",
            description: "Clasificación automática de clientes potenciales y priorización de contactos.",
            price: 360,
            fullDescription: "Estructura automática para clasificar y priorizar los contactos que llegan a tu operación comercial. Enfocas esfuerzos en los prospectos correctos.",
            features: [
                "Clasificación automática de clientes potenciales",
                "Priorización de contactos",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1543269865-cbf427effbad")
        },
        {
            id: "flow-03",
            name: "Seguimiento Automatizado Esencial",
            description: "Secuencia básica de seguimiento con recordatorios automáticos, evita pérdida de oportunidades.",
            price: 540,
            fullDescription: "Secuencia básica de seguimiento automatizado para que ningún prospecto quede sin respuesta o se pierda por falta de contacto.",
            features: [
                "Secuencia básica de seguimiento",
                "Recordatorios automáticos de contacto",
                "Evita pérdida de oportunidades",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1506784983877-45594efa4cbe")
        },
        {
            id: "flow-04",
            name: "Estructura de Atención Continua",
            description: "Flujo automatizado de atención e interacción constante con prospectos.",
            price: 943,
            fullDescription: "Sistema de atención continua que mantiene conversations activas con prospectos sin intervención manual. Mejora la experiencia de contacto.",
            features: [
                "Flujo de atención automatizado",
                "Interacción constante con prospectos",
                "Mejora de experiencia de contacto",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1534536281715-e28d76689b4d")
        },
        {
            id: "flow-05",
            name: "Ruta Básica de Conversión",
            description: "Definición de pasos hacia la venta con organización del flujo de decisión.",
            price: 1690,
            fullDescription: "Diseño de la ruta comercial que lleva al prospecto hacia la venta. Cada paso claro, ordenado y optimizado para avanzar decisiones.",
            features: [
                "Definición de pasos hacia la venta",
                "Organización del flujo de decisión",
                "Optimización inicial del proceso",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1460925895917-afdab827c52f")
        },
        {
            id: "flow-06",
            name: "Sistema de Captación Inteligente",
            description: "Captura estructurada de prospectos con integración de puntos de entrada.",
            price: 2612,
            fullDescription: "Estructura inteligente de captación que integra múltiples puntos de entrada y organiza los contactos en un solo flujo centralizado.",
            features: [
                "Captura estructurada de prospectos",
                "Integración de puntos de entrada",
                "Organización de contactos",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1551836022-d5d88e9218df")
        },
        {
            id: "flow-07",
            name: "Secuencia Estratégica de Contacto",
            description: "Múltiples interacciones automatizadas con contacto progresivo.",
            price: 3180,
            fullDescription: "Secuencia de múltiples interacciones automatizadas y progresivas que incrementan la conversión sin saturar al prospecto.",
            features: [
                "Configuración de múltiples interacciones",
                "Contacto progresivo automatizado",
                "Mejora en la conversión",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1557200134-90327ee9fafa")
        },
        {
            id: "flow-08",
            name: "Conversión Guiada Automatizada",
            description: "Flujo diseñado para llevar al cierre con eliminación de fricciones.",
            price: 4217,
            fullDescription: "Flujo de conversión que guía al prospecto hacia el cierre eliminando fricciones del proceso y optimizando cada decisión.",
            features: [
                "Flujo diseñado para llevar al cierre",
                "Eliminación de fricciones en el proceso",
                "Optimización de decisiones del cliente",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
            id: "flow-09",
            name: "Sistema de Seguimiento Avanzado",
            description: "Seguimiento en múltiples etapas y automatización según comportamiento.",
            price: 4950,
            fullDescription: "Sistema avanzado de seguimiento que se adapta al comportamiento de cada prospecto en múltiples etapas del proceso comercial.",
            features: [
                "Seguimiento en múltiples etapas",
                "Automatización según comportamiento del cliente",
                "Mejora en tasa de cierre",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
            id: "flow-10",
            name: "Estructura de Ventas Progresiva",
            description: "Proceso comercial completo con avance automatizado por etapas.",
            price: 6855,
            fullDescription: "Estructura completa del proceso de ventas con avance automatizado por etapas. Mayor control sobre prospectos y transiciones entre fases.",
            features: [
                "Desarrollo de proceso comercial completo",
                "Avance automatizado por etapas",
                "Mayor control de prospectos",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
            id: "flow-11",
            name: "Motor de Conversión Optimizado",
            description: "Ajuste de puntos críticos de conversión con mejora de mensajes estratégicos.",
            price: 8630,
            fullDescription: "Motor de conversión ajustado en los puntos críticos del proceso comercial. Mensajes estratégicos optimizados para maximizar resultados.",
            features: [
                "Ajuste de puntos críticos de conversión",
                "Mejora de mensajes estratégicos",
                "Incremento en resultados comerciales",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1551288049-bebda4e38f71")
        },
        {
            id: "flow-12",
            name: "Automatización de Ciclo Comercial",
            description: "Automatización desde contacto hasta cierre con flujo continuo de ventas.",
            price: 10320,
            fullDescription: "Automatización del ciclo comercial completo, desde el primer contacto hasta el cierre. Integración de todas las etapas en un flujo continuo.",
            features: [
                "Automatización desde contacto hasta cierre",
                "Integración de etapas comerciales",
                "Flujo continuo de ventas",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1512486130939-2c4f79935e4f")
        },
        {
            id: "flow-13",
            name: "Arquitectura de Ventas Digitales",
            description: "Diseño estructural del proceso comercial con automatización completa.",
            price: 12780,
            fullDescription: "Arquitectura estructural de todo tu proceso de ventas digitales con automatización completa y control total del flujo de clientes.",
            features: [
                "Diseño estructural del proceso comercial",
                "Integración de automatización completa",
                "Control del flujo de clientes",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1451187580459-43490279c0fa")
        },
        {
            id: "flow-14",
            name: "Sistema Integral de Conversión",
            description: "Integración de captación, seguimiento y cierre en flujo automatizado.",
            price: 15220,
            fullDescription: "Sistema integral que integra captación, seguimiento y cierre en un solo flujo automatizado. Optimización total del proceso comercial.",
            features: [
                "Integración de captación, seguimiento y cierre",
                "Flujo automatizado completo",
                "Optimización total del proceso",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1519389950473-47ba0277781c")
        },
        {
            id: "flow-15",
            name: "Flujo Inteligente de Ventas",
            description: "Automatización avanzada por comportamiento con respuestas dinámicas.",
            price: 16970,
            fullDescription: "Flujo de ventas inteligente que se adapta al comportamiento del prospecto con respuestas dinámicas y optimización continua del proceso.",
            features: [
                "Automatización avanzada por comportamiento",
                "Respuestas dinámicas",
                "Optimización continua del proceso",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1485827404703-89b55fcc595e")
        },
        {
            id: "flow-16",
            name: "Estructura de Escalamiento Comercial",
            description: "Preparación del sistema para alto volumen con múltiples interacciones.",
            price: 18990,
            fullDescription: "Estructura comercial preparada para manejar alto volumen de prospectos con automatización de múltiples interacciones simultáneas.",
            features: [
                "Preparación del sistema para alto volumen",
                "Automatización de múltiples interacciones",
                "Mayor capacidad operativa",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5")
        },
        {
            id: "flow-17",
            name: "Sistema Predictivo de Conversión",
            description: "Organización de datos de prospectos con priorización estratégica.",
            price: 21090,
            fullDescription: "Sistema predictivo que organiza los datos de tus prospectos y prioriza estratégicamente las acciones comerciales para mejorar decisiones.",
            features: [
                "Organización de datos de prospectos",
                "Priorización estratégica",
                "Mejora en decisiones comerciales",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3")
        },
        {
            id: "flow-18",
            name: "Plataforma de Automatización Total",
            description: "Automatización completa de operación comercial con flujo sin intervención manual.",
            price: 23655,
            fullDescription: "Plataforma de automatización total donde la operación comercial funciona sin intervención manual. Todos los puntos de contacto integrados.",
            features: [
                "Automatización completa de operación comercial",
                "Integración de todos los puntos de contacto",
                "Flujo sin intervención manual",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1461749280684-dccba630e2f6")
        },
        {
            id: "flow-19",
            name: "Arquitectura Comercial Avanzada",
            description: "Sistema robusto y escalable con automatización profunda.",
            price: 24960,
            fullDescription: "Arquitectura comercial robusta y escalable con automatización profunda. Optimización integral del proceso en todos los niveles.",
            features: [
                "Desarrollo de sistema robusto y escalable",
                "Automatización profunda",
                "Optimización integral del proceso",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4")
        },
        {
            id: "flow-20",
            name: "Dominio Comercial Automatizado",
            description: "Control total del proceso de ventas con automatización estratégica de alto nivel.",
            price: 26780,
            fullDescription: "El nivel más alto: dominio comercial completamente automatizado. Control total del proceso de ventas listo para crecimiento continuo.",
            features: [
                "Control total del proceso de ventas",
                "Automatización estratégica de alto nivel",
                "Sistema listo para crecimiento continuo",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40")
        }
    ];

    const solutionsEnglish: Product[] = [
        {
            id: "flow-01",
            name: "Immediate Response Trigger",
            description: "Setup of basic automated responses and reduction of wait times.",
            price: 246,
            fullDescription: "The first step to automate your commercial operations. Automated responses that eliminate dead times during the initial contact with prospects.",
            features: [
                "Setup of basic automated responses",
                "Reduction of wait times",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1516321318423-f06f85e504b3")
        },
        {
            id: "flow-02",
            name: "Initial Lead Filter",
            description: "Automatic classification of potential clients and contact prioritization.",
            price: 360,
            fullDescription: "An automated framework to classify and prioritize incoming contacts for your sales team. Focus your efforts on the right prospects.",
            features: [
                "Automatic classification of potential clients",
                "Contact prioritization",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1543269865-cbf427effbad")
        },
        {
            id: "flow-03",
            name: "Essential Automated Follow-Up",
            description: "Basic follow-up sequence with automatic reminders, preventing missed opportunities.",
            price: 540,
            fullDescription: "A basic automated follow-up sequence to ensure no prospect is left unanswered or lost due to a lack of contact.",
            features: [
                "Basic follow-up sequence",
                "Automatic contact reminders",
                "Prevents missed opportunities",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1506784983877-45594efa4cbe")
        },
        {
            id: "flow-04",
            name: "Continuous Engagement Structure",
            description: "Automated engagement flow and constant interaction with prospects.",
            price: 943,
            fullDescription: "A continuous care system that keeps conversations active with prospects without manual intervention. Enhances the contact experience.",
            features: [
                "Automated attention flow",
                "Constant interaction with prospects",
                "Contact experience improvement",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1534536281715-e28d76689b4d")
        },
        {
            id: "flow-05",
            name: "Basic Conversion Path",
            description: "Definition of steps leading to the sale with structured decision flows.",
            price: 1690,
            fullDescription: "Design of the sales path that guides the prospect toward the purchase. Each step is clear, orderly, and optimized to advance decision-making.",
            features: [
                "Definition of steps leading to the sale",
                "Decision flow organization",
                "Initial process optimization",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1460925895917-afdab827c52f")
        },
        {
            id: "flow-06",
            name: "Intelligent Capture System",
            description: "Structured lead capturing with entry-point integration.",
            price: 2612,
            fullDescription: "An intelligent capture architecture that integrates multiple entry points and organizes contacts into a single centralized flow.",
            features: [
                "Structured lead capturing",
                "Entry-point integration",
                "Contact organization",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1551836022-d5d88e9218df")
        },
        {
            id: "flow-07",
            name: "Strategic Contact Sequence",
            description: "Multiple automated interactions featuring progressive outreach.",
            price: 3180,
            fullDescription: "A sequence of multiple automated and progressive interactions that boost conversion rates without overwhelming the prospect.",
            features: [
                "Setup of multiple interactions",
                "Automated progressive outreach",
                "Conversion rate improvement",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1557200134-90327ee9fafa")
        },
        {
            id: "flow-08",
            name: "Automated Guided Conversion",
            description: "Flow designed to drive the closing process by eliminating friction.",
            price: 4217,
            fullDescription: "A conversion flow that smoothly steers the prospect toward the close, removing bottlenecks from the process and optimizing every milestone.",
            features: [
                "Flow designed to drive the closing process",
                "Friction removal in the process",
                "Customer decision optimization",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
            id: "flow-09",
            name: "Advanced Follow-Up System",
            description: "Multi-stage tracking and behavior-triggered automation.",
            price: 4950,
            fullDescription: "An advanced tracking system that adapts dynamically to each prospect's behavior across multiple stages of the sales journey.",
            features: [
                "Multi-stage tracking",
                "Behavior-triggered customer automation",
                "Closing rate improvement",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
            id: "flow-10",
            name: "Progressive Sales Structure",
            description: "Complete commercial pipeline with automated stage-by-stage progression.",
            price: 6855,
            fullDescription: "A fully realized pipeline structure with automated step-by-step advancement. Greater command over leads and transitions between funnel phases.",
            features: [
                "Complete commercial pipeline development",
                "Automated stage-by-stage progression",
                "Greater lead management and control",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
            id: "flow-11",
            name: "Optimized Conversion Engine",
            description: "Fine-tuning of critical conversion touchpoints with strategic messaging upgrades.",
            price: 8630,
            fullDescription: "A performance-tuned conversion engine acting on critical nodes of the sales pipeline. Strategic messaging optimized to maximize output.",
            features: [
                "Fine-tuning of critical conversion touchpoints",
                "Strategic messaging upgrades",
                "Boost in commercial results",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1551288049-bebda4e38f71")
        },
        {
            id: "flow-12",
            name: "Sales Cycle Automation",
            description: "End-to-end automation from first touch to close with a seamless sales pipeline.",
            price: 10320,
            fullDescription: "Complete automation of the business cycle, spanning from the initial inquiry up to closing the deal. Integrates every phase into an uninterrupted stream.",
            features: [
                "End-to-end automation from touch to close",
                "Integration of commercial stages",
                "Seamless sales pipeline",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1512486130939-2c4f79935e4f")
        },
        {
            id: "flow-13",
            name: "Digital Sales Architecture",
            description: "Structural design of the commercial process backed by fully-fledged automation.",
            price: 12780,
            fullDescription: "A top-tier structural architecture of your digital sales process featuring absolute automation and rigorous oversight over client workflows.",
            features: [
                "Structural design of the commercial process",
                "Integration of absolute automation",
                "Rigorous client workflow oversight",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1451187580459-43490279c0fa")
        },
        {
            id: "flow-14",
            name: "Comprehensive Conversion System",
            description: "Unified capture, follow-up, and closing mechanisms in an automated ecosystem.",
            price: 15220,
            fullDescription: "An all-in-one system unifying capture, tracking, and closing operations into a single automated pipeline. Complete optimization of the sales framework.",
            features: [
                "Unified capture, follow-up, and closing",
                "Fully automated pipeline ecosystem",
                "Total optimization of the framework",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1519389950473-47ba0277781c")
        },
        {
            id: "flow-15",
            name: "Intelligent Sales Flow",
            description: "Behavior-driven advanced automation utilizing dynamic responses.",
            price: 16970,
            fullDescription: "Smart sales tracking that reacts smoothly to prospect behavior via dynamic messaging and continuous process refining.",
            features: [
                "Behavior-driven advanced automation",
                "Dynamic messaging responses",
                "Continuous process refining",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1485827404703-89b55fcc595e")
        },
        {
            id: "flow-16",
            name: "Commercial Scaling Architecture",
            description: "System engineering geared toward high volume and multi-tiered touchpoints.",
            price: 18990,
            fullDescription: "A powerhouse commercial setup engineered to sustain high volumes of leads through concurrent multi-interaction automated systems.",
            features: [
                "System engineering for high volume",
                "Concurrent multi-interaction automation",
                "Expanded operational capacity",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5")
        },
        {
            id: "flow-17",
            name: "Predictive Conversion System",
            description: "Lead data orchestration paired with strategic priority sorting.",
            price: 21090,
            fullDescription: "A forecasting framework that orchestrates your lead assets and filters priorities strategically to assist smarter commercial actions.",
            features: [
                "Lead data orchestration",
                "Strategic priority sorting",
                "Smarter commercial decisions",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3")
        },
        {
            id: "flow-18",
            name: "Total Automation Platform",
            description: "Full automation of the commercial department achieving hands-free operational flow.",
            price: 23655,
            fullDescription: "A total automation deployment where the entire revenue department operates without manual triggers. Every single interface is completely linked.",
            features: [
                "Full commercial automation",
                "Complete link across all interfaces",
                "Hands-free operational flow",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1461749280684-dccba630e2f6")
        },
        {
            id: "flow-19",
            name: "Advanced Revenue Infrastructure",
            description: "A robust and highly scalable setup utilizing deep-level automation matrices.",
            price: 24960,
            fullDescription: "A robust, battle-tested revenue blueprint ready to scale using complex automated systems. High-level performance tuning across every layer.",
            features: [
                "Robust and scalable infrastructure",
                "Complex deep-level automation",
                "High-level performance tuning",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4")
        },
        {
            id: "flow-20",
            name: "Automated Commercial Mastery",
            description: "Absolute command over the sales environment via high-tier corporate strategic automation.",
            price: 26780,
            fullDescription: "The absolute pinnacle: complete automated commercial command. Total control over your entire conversion architecture, primed for compounding growth.",
            features: [
                "Absolute command over the sales environment",
                "High-tier strategic corporate automation",
                "Ecosystem primed for compounding growth",
            ],
            image: getOptimizedUrl("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40")
        }
    ];

    const solutions = locale == "es" ? solutionsSpanish : solutionsEnglish;

    return { solutions };
}