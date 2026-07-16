"use client";

import { useLocale } from "next-intl";

export function useSolutions() {
    const locale = useLocale()

    const solutionsSpanish = [
        {
            id: "flow-01",
            name: "Activador de Respuesta Inmediata",
            description: "Configuración de respuestas automáticas básicas y reducción de tiempos de espera.",
            price: 246,
        },
        {
            id: "flow-02",
            name: "Filtro Inicial de Prospectos",
            description: "Clasificación automática de clientes potenciales y priorización de contactos.",
            price: 360,
        },
        {
            id: "flow-03",
            name: "Seguimiento Automatizado Esencial",
            description: "Secuencia básica de seguimiento con recordatorios automáticos, evita pérdida de oportunidades.",
            price: 540,
        },
        {
            id: "flow-04",
            name: "Estructura de Atención Continua",
            description: "Flujo automatizado de atención e interacción constante con prospectos.",
            price: 943,
        },
        {
            id: "flow-05",
            name: "Ruta Básica de Conversión",
            description: "Definición de pasos hacia la venta con organización del flujo de decisión.",
            price: 1690,
        },
        {
            id: "flow-06",
            name: "Sistema de Captación Inteligente",
            description: "Captura estructurada de prospectos con integración de puntos de entrada.",
            price: 2612,
        },
        {
            id: "flow-07",
            name: "Secuencia Estratégica de Contacto",
            description: "Múltiples interacciones automatizadas con contacto progresivo.",
            price: 3180,
        },
        {
            id: "flow-08",
            name: "Conversión Guiada Automatizada",
            description: "Flujo diseñado para llevar al cierre con eliminación de fricciones.",
            price: 4217,
        },
        {
            id: "flow-09",
            name: "Sistema de Seguimiento Avanzado",
            description: "Seguimiento en múltiples etapas y automatización según comportamiento.",
            price: 4950,
        },
        {
            id: "flow-10",
            name: "Estructura de Ventas Progresiva",
            description: "Proceso comercial completo con avance automatizado por etapas.",
            price: 6855,
        },
        {
            id: "flow-11",
            name: "Motor de Conversión Optimizado",
            description: "Ajuste de puntos críticos de conversión con mejora de mensajes estratégicos.",
            price: 8630,
        },
        {
            id: "flow-12",
            name: "Automatización de Ciclo Comercial",
            description: "Automatización desde contacto hasta cierre con flujo continuo de ventas.",
            price: 10320,
        },
        {
            id: "flow-13",
            name: "Arquitectura de Ventas Digitales",
            description: "Diseño estructural del proceso comercial con automatización completa.",
            price: 12780,
        },
        {
            id: "flow-14",
            name: "Sistema Integral de Conversión",
            description: "Integración de captación, seguimiento y cierre en flujo automatizado.",
            price: 15220,
        },
        {
            id: "flow-15",
            name: "Flujo Inteligente de Ventas",
            description: "Automatización avanzada por comportamiento con respuestas dinámicas.",
            price: 16970,
        },
        {
            id: "flow-16",
            name: "Estructura de Escalamiento Comercial",
            description: "Preparación del sistema para alto volumen con múltiples interacciones.",
            price: 18990,
        },
        {
            id: "flow-17",
            name: "Sistema Predictivo de Conversión",
            description: "Organización de datos de prospectos con priorización estratégica.",
            price: 21090,
        },
        {
            id: "flow-18",
            name: "Plataforma de Automatización Total",
            description: "Automatización completa de operación comercial con flujo sin intervención manual.",
            price: 23655,
        },
        {
            id: "flow-19",
            name: "Arquitectura Comercial Avanzada",
            description: "Sistema robusto y escalable con automatización profunda.",
            price: 24960,
        },
        {
            id: "flow-20",
            name: "Dominio Comercial Automatizado",
            description: "Control total del proceso de ventas con automatización estratégica de alto nivel.",
            price: 26780,
        },
    ];

    const solutionsEnglish = [
        {
            id: "flow-01",
            name: "Immediate Response Trigger",
            description: "Basic automated response setup and wait time reduction.",
            price: 246,
        },
        {
            id: "flow-02",
            name: "Initial Lead Filter",
            description: "Automated qualification of potential clients and contact prioritization.",
            price: 360,
        },
        {
            id: "flow-03",
            name: "Essential Automated Follow-Up",
            description: "Basic follow-up sequence with automated reminders to prevent lost opportunities.",
            price: 540,
        },
        {
            id: "flow-04",
            name: "Continuous Engagement Structure",
            description: "Automated workflow for ongoing interaction and engagement with prospects.",
            price: 943,
        },
        {
            id: "flow-05",
            name: "Basic Conversion Path",
            description: "Definition of steps toward the sale with a structured decision-making flow.",
            price: 1690,
        },
        {
            id: "flow-06",
            name: "Intelligent Capture System",
            description: "Structured lead acquisition with integration of entry touchpoints.",
            price: 2612,
        },
        {
            id: "flow-07",
            name: "Strategic Contact Sequence",
            description: "Multiple automated interactions with progressive outreach.",
            price: 3180,
        },
        {
            id: "flow-08",
            name: "Guided Automated Conversion",
            description: "Flow designed to drive toward the close by removing friction points.",
            price: 4217,
        },
        {
            id: "flow-09",
            name: "Advanced Follow-Up System",
            description: "Multi-stage tracking and automation triggered by user behavior.",
            price: 4950,
        },
        {
            id: "flow-10",
            name: "Progressive Sales Structure",
            description: "Complete commercial process with automated progression through stages.",
            price: 6855,
        },
        {
            id: "flow-11",
            name: "Optimized Conversion Engine",
            description: "Fine-tuning of critical conversion steps with strategic message optimization.",
            price: 8630,
        },
        {
            id: "flow-12",
            name: "Commercial Cycle Automation",
            description: "End-to-end automation from initial contact to close with a continuous sales flow.",
            price: 10320,
        },
        {
            id: "flow-13",
            name: "Digital Sales Architecture",
            description: "Structural design of the commercial process featuring full automation.",
            price: 12780,
        },
        {
            id: "flow-14",
            name: "Comprehensive Conversion System",
            description: "Integration of capture, follow-up, and closing in a single automated workflow.",
            price: 15220,
        },
        {
            id: "flow-15",
            name: "Smart Sales Flow",
            description: "Advanced behavior-triggered automation with dynamic responses.",
            price: 16970,
        },
        {
            id: "flow-16",
            name: "Commercial Scaling Structure",
            description: "Preparing the system for high volume with multiple interactive touchpoints.",
            price: 18990,
        },
        {
            id: "flow-17",
            name: "Predictive Conversion System",
            description: "Organization of prospect data coupled with strategic prioritization.",
            price: 21090,
        },
        {
            id: "flow-18",
            name: "Total Automation Platform",
            description: "Full automation of commercial operations with zero manual intervention required.",
            price: 23655,
        },
        {
            id: "flow-19",
            name: "Advanced Commercial Architecture",
            description: "Robust, highly scalable system built with deep integration and automation.",
            price: 24960,
        },
        {
            id: "flow-20",
            name: "Automated Commercial Mastery",
            description: "Complete control of the sales process powered by high-level strategic automation.",
            price: 26780,
        },
    ];

    const solutions = locale == "es" ? solutionsSpanish : solutionsEnglish;

    return { solutions };
}