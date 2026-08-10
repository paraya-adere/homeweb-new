import { useEffect, useRef, useState } from 'react'

const font = 'font-[family-name:var(--font-outfit)]'

const FAQ_ITEMS = [
  {
    q: '¿En qué consiste el proceso de implementación?',
    a: 'Implementar Adereso para automatizar ventas y soporte por WhatsApp toma entre 2-4 semanas y no requiere equipo técnico interno. Partimos definiendo objetivos claros basados en tus desafíos específicos y establecemos KPIs medibles en conjunto para garantizar resultados tangibles. Desde ahí, nuestro equipo de servicios profesionales se encarga de conectar WhatsApp Business API, integrar nativamente con Shopify, HubSpot, Salesforce o tu CRM actual, y entrenar el agente con tu base de conocimiento, catálogo de productos y flujos conversacionales específicos de tu negocio. Realizamos pruebas controladas, refinamos respuestas según feedback real, capacitamos a tu equipo en el uso de la plataforma, y lanzamos en producción con acompañamiento continuo. A diferencia de plataformas DIY donde quedas solo después de contratar, incluimos reuniones periódicas de optimización y monitoreo para que el agente evolucione y mejore con cada conversación.',
  },
  {
    q: '¿Con qué sistemas se integra Adereso?',
    a: 'Adereso se integra nativamente con las plataformas más utilizadas: Salesforce, HubSpot y Shopify, permitiendo que tus conversaciones automatizadas se sincronicen directamente con tu CRM y ecommerce sin necesidad de desarrollos adicionales. Además, nuestro equipo técnico puede desarrollar integraciones custom con cualquier sistema o herramienta que utilices actualmente, asegurando que la solución se conecte perfectamente con tu stack tecnológico existente sin interrumpir tus operaciones.',
  },
  {
    q: '¿En qué canales funciona Adereso?',
    a: 'Adereso centraliza y automatiza conversaciones en todos los canales donde tus clientes te buscan: WhatsApp Business API, Instagram, Facebook Messenger, Twitter (X), LinkedIn, Webchat y correo electrónico. Esto te permite gestionar todas las interacciones desde una sola plataforma, manteniendo el contexto completo del cliente sin importar por dónde te contacte, y asegurando que tu equipo no tenga que saltar entre múltiples herramientas para dar seguimiento.',
  },
  {
    q: '¿Qué pasa cuando el agente de IA no puede resolver una consulta?',
    a: 'A diferencia de otras plataformas donde el cliente debe reiniciar la conversación, en Adereso el agente de IA deriva la consulta dentro del mismo chat directamente al departamento o ejecutivo específico que puede resolverla. El cliente no tiene que repetir su duda y el agente humano recibe todo el contexto de la conversación automáticamente, eliminando la frustración del típico "cuénteme nuevamente su problema" y acelerando así la resolución.',
  },
  {
    q: '¿Cómo funciona el modelo de pricing?',
    a: 'Cobramos por conversación, no por usuario. Esto significa que puedes agregar todos los agentes que necesites a la plataforma sin incrementar costos, permitiéndote escalar tu equipo de atención libremente conforme crece tu operación. Sin límites artificiales ni sorpresas en la factura cuando necesites sumar más personas al sistema.',
  },
  {
    q: '¿Los agentes de IA van a reemplazar a mi equipo de soporte?',
    a: 'No. Adereso está diseñado para potenciar a tu equipo, no reemplazarlo. La IA automatiza consultas repetitivas (horarios, tracking, políticas, FAQs) que actualmente consumen 60-70% del tiempo de tus agentes, liberándolos para enfocarse en casos complejos, ventas consultivas y situaciones que requieren empatía humana. En promedio, nuestros clientes logran que sus equipos de soporte dediquen 3x más tiempo a conversaciones de alto valor, reduciendo burnout y aumentando satisfacción laboral. El resultado: mejor atención, no menos personas.',
  },
  {
    q: '¿Los agentes de IA para WhatsApp realmente mejoran las ventas o solo automatizan soporte?',
    a: 'Los agentes de IA para WhatsApp no solo automatizan soporte—son herramientas de venta directa que cierran negocios en tiempo real. Cuando un cliente potencial te contacta con dudas sobre un producto, el agente puede resolver todas sus objeciones al instante, recomendar productos complementarios y enviar directamente el link de pago o checkout de tu ecommerce para cerrar la venta en el momento. Además, puede recuperar carritos abandonados, hacer upselling inteligente durante la conversación y reactivar leads que consultaron antes pero no compraron, convirtiendo WhatsApp en tu canal de ventas más efectivo sin ampliar tu equipo.',
  },
  {
    q: '¿Qué significa que Adereso sea WhatsApp Business Partner oficial?',
    a: 'Adereso es WhatsApp Business Solution Provider oficial, lo que significa que estamos certificados y autorizados directamente por Meta para conectar empresas con la API de WhatsApp Business. Esto te garantiza acceso confiable y cumplimiento de todas las políticas de WhatsApp, sin riesgo de suspensiones o bloqueos que pueden sufrir soluciones no autorizadas. Como partner oficial, gestionamos todo el proceso de verificación y aprobación de tu cuenta de WhatsApp Business API, que es el requisito técnico para automatizar conversaciones a escala profesional. La API te permite conectar múltiples agentes simultáneamente, automatizar con IA, integrar con tus sistemas, enviar notificaciones transaccionales y centralizar todos tus canales de atención en una sola plataforma, todo con el respaldo y soporte técnico directo de un partner certificado.',
  },
] as const

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const update = () => {
      setMaxHeight(isOpen ? el.scrollHeight : 0)
    }

    update()

    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [isOpen, answer])

  return (
    <div
      className="rounded-[12px] overflow-hidden transition-colors duration-200"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: isOpen
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <button
        id={`faq-button-${index}`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        className="grid w-full gap-3 text-left px-4 md:px-[18px] py-4 md:py-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 focus-visible:rounded-[10px]"
        style={{ gridTemplateColumns: '1fr 34px' }}
      >
        <span
          className={`${font} text-base md:text-[17px] font-medium leading-snug text-white`}
          style={{ overflowWrap: 'anywhere' }}
        >
          {question}
        </span>
        <span
          className="relative flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px]"
          style={{
            border: '1px solid #434343',
            background: 'rgba(255,255,255,0.03)',
          }}
          aria-hidden="true"
        >
          <span className="absolute h-[2px] w-[14px] bg-white" />
          <span
            className="absolute h-[14px] w-[2px] bg-white transition-transform duration-150"
            style={{ transform: isOpen ? 'scaleY(0)' : 'scaleY(1)' }}
          />
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        aria-hidden={!isOpen}
        className="faq-answer-panel"
        style={{
          maxHeight,
          overflow: 'hidden',
          transition: 'max-height 0.25s ease',
        }}
      >
        <div
          ref={contentRef}
          className="px-4 md:px-[18px] pb-4 md:pb-[18px]"
        >
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [visible, setVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const enterTransition = 'opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1)'

  return (
    <section
      className="w-full py-10 md:py-20"
      style={{ background: 'var(--bg-page)' }}
    >
      <div className="max-w-[1200px] mx-auto px-3 md:px-6">
        <div
          ref={headerRef}
          className="faq-entry max-w-[720px] mx-auto mb-8 flex flex-col items-center text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: enterTransition,
          }}
        >
          <span
            className={`${font} inline-block px-4 py-2 rounded-[10px] text-[13px] font-medium text-white mb-4`}
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              letterSpacing: '1px',
            }}
          >
            FAQ
          </span>
          <h2
            className={`${font} text-[1.75rem] md:text-[2.25rem] font-medium leading-snug text-white mb-3`}
          >
            Preguntas frecuentes
          </h2>
          <p
            className="text-[15px] md:text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Todo lo que necesitas para entender implementación, integraciones y
            operación.
          </p>
        </div>

        <div
          className="faq-entry flex flex-col gap-3.5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: enterTransition,
            transitionDelay: visible ? '0.1s' : '0s',
          }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              index={index}
              onToggle={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
