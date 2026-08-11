import { useEffect, useRef, useState, type MouseEvent, type PointerEvent as ReactPointerEvent } from 'react'
import { Hero } from './components/Hero'
import {
  AgentFeatureMockup,
  EngageFeatureMockup,
  HelpdeskFeatureMockup,
} from './components/feature-mockups/FeatureMockups'
import {
  PostSaleJourneyGrid,
  SalesJourneyGrid,
} from './components/journey-mockups/JourneyMockups'
import { IntegrationMap } from './components/IntegrationMap'
import { ImplementationMockup } from './components/ImplementationMockup'
import { DedicatedSupportMockup, StrategyMockup } from './components/SupportMockups'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'

const CLIENTS = [
  {
    name: 'Cencosud',
    logo: 'clientes/cencosud.svg',
    href: 'https://adereso.ai/casos-de-exitos/cencosud',
  },
  {
    name: 'Chilexpress',
    logo: 'clientes/Chilexpress-1.svg',
    native: true,
  },
  {
    name: 'Walmart Chile',
    logo: 'clientes/walmart.svg',
    href: 'https://adereso.ai/casos-de-exitos/walmart',
  },
  {
    name: 'Abastible',
    logo: 'clientes/Abastible-1.svg',
    native: true,
  },
  {
    name: 'Falabella.com',
    logo: 'clientes/Falabella.svg',
    href: 'https://adereso.ai/casos-de-exitos/falabella',
  },
  {
    name: 'BCI',
    logo: 'clientes/BCI.svg',
    native: true,
  },
  {
    name: 'Sodimac',
    logo: 'clientes/Sodimac.svg',
    href: 'https://adereso.ai/casos-de-exitos/sodimac',
  },
  {
    name: 'Kitchen Center',
    logo: 'clientes/KitchenCenter.svg',
    native: true,
  },
  {
    name: 'Chilquinta',
    logo: 'clientes/chilquinta.svg',
    href: 'https://adereso.ai/casos-de-exitos/chilquinta',
  },
  {
    name: 'Kaufmann',
    logo: 'clientes/Kaufmann-1.svg',
    native: true,
  },
  {
    name: 'Grupo K',
    logo: 'clientes/mk-blanco.svg',
    href: 'https://adereso.ai/casos-de-exitos/grupo-k',
    native: true,
  },
  {
    name: 'MetLife',
    logo: 'clientes/metlife-1.svg',
    native: true,
  },
  {
    name: 'IKEA',
    logo: 'clientes/Ikea.svg',
    native: true,
  },
  {
    name: 'Bayer',
    logo: 'clientes/Bayer-1.svg',
    native: true,
    size: 'lg',
  },
  {
    name: 'Essbio',
    logo: 'clientes/essbio-1.svg',
    native: true,
  },
] as const

const CLIENT_ROWS = [CLIENTS.slice(0, 8), CLIENTS.slice(8)] as const

function ClientLogoCard({
  client,
  duplicate = false,
}: {
  client: (typeof CLIENTS)[number]
  duplicate?: boolean
}) {
  const hasCase = 'href' in client
  const image = (
    <img
      src={client.logo}
      alt={duplicate ? '' : client.name}
      className={`logo-card__image${'native' in client && client.native ? ' logo-card__image--native' : ''}${'size' in client && client.size === 'lg' ? ' logo-card__image--lg' : ''}`}
      loading="lazy"
      decoding="async"
    />
  )

  if (hasCase) {
    return (
      <a
        href={client.href}
        className="logo-card logo-card--case"
        target="_blank"
        rel="noreferrer"
        aria-label={duplicate ? undefined : `Ver caso de éxito de ${client.name}`}
        aria-hidden={duplicate || undefined}
        tabIndex={duplicate ? -1 : undefined}
      >
        <div className="logo-card__brand">{image}</div>
        <span className="logo-card__badge">Caso de éxito</span>
      </a>
    )
  }

  return (
    <div className="logo-card" aria-hidden={duplicate || undefined}>
      <div className="logo-card__brand">{image}</div>
    </div>
  )
}

const TESTIMONIALS = [
  {
    company: 'Sodimac',
    body: 'Un equipo de profesionales dispuesto a apoyarte en todo momento. Se han ido adaptando a nuestras necesidades a medida que el negocio se mueve, y es una plataforma muy simple de usar para los ejecutivos que atienden a nuestros clientes. Totalmente recomendado.',
    author: 'Cristián Obregón',
    role: 'Jefe de mejora continua y calidad',
    metric: '+50% ventas por WhatsApp en un año',
    avatar: 'testimonials/cristian-obregon.png',
    logo: 'clientes/Sodimac.svg',
    href: 'https://adereso.ai/casos-de-exitos/sodimac',
  },
  {
    company: 'Chilquinta',
    body: 'Tenemos más del 90% de automatización con +80,000 tickets mensuales.',
    author: 'Andrés Sazo',
    role: 'Jefe Contact Center',
    metric: '+90% automatización · +80K tickets/mes',
    avatar:
      'https://adereso.ai/wp-content/uploads/2025/04/chilquinta-caso-exito-adereso.webp',
    logo: 'clientes/chilquinta.svg',
    href: 'https://adereso.ai/casos-de-exitos/chilquinta',
  },
  {
    company: 'Cencosud',
    body: 'Nos cambiamos a Adereso y fue el boom, pasamos de cerrar los casos en 2 días a cerrarlos en 2 a 3 horas.',
    author: 'Isabel Ruedlinger',
    role: 'Seller Experience Manager',
    metric: 'De 2 días a 2–3 horas',
    avatar:
      'https://adereso.ai/wp-content/uploads/2025/04/cencosud-caso-exito-adereso.webp',
    logo: 'clientes/cencosud.svg',
    href: 'https://adereso.ai/casos-de-exitos/cencosud',
  },
  {
    company: 'Chilquinta',
    body: 'Es una herramienta flexible, intuitiva y altamente personalizable, algo que con convicción te digo que no existe en el mercado hoy.',
    author: 'Francisco Cayón',
    role: 'Subgerente Experiencia Digital',
    metric: '',
    avatar:
      'https://adereso.ai/wp-content/uploads/2025/04/chilquinta-caso-exito-adereso.webp',
    logo: 'clientes/chilquinta.svg',
    href: 'https://adereso.ai/casos-de-exitos/chilquinta',
  },
  {
    company: 'Cencosud',
    body: 'Redujimos un 25% los gastos operacionales y multiplicamos por 6 la productividad gracias a la atención simultánea. Es una plataforma rápida, fácil e intuitiva.',
    author: 'Kevin Rojas',
    role: 'Supervisor Servicio al Cliente',
    metric: '−25% gastos · 6x productividad',
    avatar:
      'https://adereso.ai/wp-content/uploads/2025/04/kevin-rojas-cencosud-adereso-caso-exito.webp',
    logo: 'clientes/cencosud.svg',
    href: 'https://adereso.ai/casos-de-exitos/cencosud',
  },
] as const

const INDUSTRIES = [
  {
    id: 'automotriz',
    nav: 'Automotriz',
    title: 'Automotriz',
    summary: 'De la cotización al test drive sin perder el lead.',
    tags: ['Cotización', 'Test drive', 'WhatsApp'],
    image: 'industria-automotriz.jpg',
    alt: 'Interior de vehículo premium en un showroom',
    href: '/Automotriz',
  },
  {
    id: 'retail',
    nav: 'Retail',
    title: 'Retail & ecommerce',
    summary: 'Catálogo, carrito y recuperación en un solo flujo.',
    tags: ['Catálogo', 'Carrito', 'Recuperación'],
    image: 'industria-retail.jpg',
    alt: 'Compra online en ecommerce desde el celular',
    href: '/Retail-ecommerce',
  },
  {
    id: 'salud',
    nav: 'Salud',
    title: 'Salud',
    summary: 'Agenda, recordatorios y resultados sin fricción.',
    tags: ['Citas', 'Recordatorios', 'Resultados'],
    image: 'industria-salud.jpg',
    alt: 'Clínica moderna con agenda digital en tablet',
    href: '/Salud',
  },
  {
    id: 'finanzas',
    nav: 'Finanzas',
    title: 'Servicios financieros',
    summary: 'Onboarding y soporte con contexto completo.',
    tags: ['Onboarding', 'Soporte', 'KYC'],
    image: 'industria-finanzas.jpg',
    alt: 'Asesoría financiera en escritorio premium',
    href: '/Servicios-financieros',
  },
  {
    id: 'turismo',
    nav: 'Turismo',
    title: 'Turismo',
    summary: 'Reservas, itinerarios y check-in automatizados.',
    tags: ['Reservas', 'Itinerarios', 'Check-in'],
    image: 'industria-turismo.jpg',
    alt: 'Vista al mar desde un balcón de hotel con maleta',
    href: '/Turismo',
  },
] as const

type InquiryTab = 'venta' | 'postventa'

export default function App() {
  const [inquiryTab, setInquiryTab] = useState<InquiryTab>('venta')
  const [activeIndustry, setActiveIndustry] = useState<string>(INDUSTRIES[0].id)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [testimonialDragX, setTestimonialDragX] = useState(0)
  const [isTestimonialDragging, setIsTestimonialDragging] = useState(false)
  const industriesTrackRef = useRef<HTMLDivElement>(null)
  const testimonialsStageRef = useRef<HTMLDivElement>(null)
  const testimonialDragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    x: 0,
    lastX: 0,
    lastT: 0,
    vx: 0,
    axis: null as null | 'x' | 'y',
    moved: false,
    suppressClick: false,
    pointerId: -1,
  })
  const lockSyncRef = useRef(false)
  const unlockTimerRef = useRef(0)

  useEffect(() => {
    return () => window.clearTimeout(unlockTimerRef.current)
  }, [])

  const goToTestimonial = (index: number) => {
    const len = TESTIMONIALS.length
    setActiveTestimonial(((index % len) + len) % len)
  }

  const onTestimonialPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    const drag = testimonialDragRef.current
    drag.active = true
    drag.startX = event.clientX
    drag.startY = event.clientY
    drag.x = 0
    drag.lastX = event.clientX
    drag.lastT = performance.now()
    drag.vx = 0
    drag.axis = null
    drag.moved = false
    drag.pointerId = event.pointerId
  }

  const onTestimonialPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = testimonialDragRef.current
    if (!drag.active || drag.pointerId !== event.pointerId) return

    const dx = event.clientX - drag.startX
    const dy = event.clientY - drag.startY

    if (!drag.axis) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return
      drag.axis = Math.abs(dx) > Math.abs(dy) * 1.15 ? 'x' : 'y'
      if (drag.axis === 'y') {
        drag.active = false
        return
      }
      event.currentTarget.setPointerCapture(event.pointerId)
      setIsTestimonialDragging(true)
    }

    if (drag.axis !== 'x') return

    const now = performance.now()
    const dt = Math.max(now - drag.lastT, 8)
    drag.vx = (event.clientX - drag.lastX) / dt
    drag.lastX = event.clientX
    drag.lastT = now
    drag.x = dx
    drag.moved = Math.abs(dx) > 10

    const width = testimonialsStageRef.current?.offsetWidth ?? 360
    const maxDrag = width * 0.72
    const resisted =
      Math.sign(dx) * Math.min(Math.abs(dx), maxDrag) * (0.82 + 0.18 * (1 - Math.min(Math.abs(dx) / maxDrag, 1)))
    setTestimonialDragX(resisted)
  }

  const finishTestimonialDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = testimonialDragRef.current
    if (!drag.active && !isTestimonialDragging) return
    if (drag.pointerId !== event.pointerId && drag.pointerId !== -1) return

    const width = testimonialsStageRef.current?.offsetWidth ?? 360
    const distanceThreshold = Math.min(96, width * 0.2)
    const flicked = Math.abs(drag.vx) > 0.55
    const shouldAdvance =
      drag.axis === 'x' && (drag.x < -distanceThreshold || (flicked && drag.vx < -0.35))
    const shouldGoBack =
      drag.axis === 'x' && (drag.x > distanceThreshold || (flicked && drag.vx > 0.35))

    if (shouldAdvance) goToTestimonial(activeTestimonial + 1)
    else if (shouldGoBack) goToTestimonial(activeTestimonial - 1)

    if (drag.moved) {
      drag.suppressClick = true
      window.setTimeout(() => {
        drag.suppressClick = false
      }, 350)
    }

    drag.active = false
    drag.axis = null
    drag.moved = false
    drag.pointerId = -1
    setIsTestimonialDragging(false)
    setTestimonialDragX(0)

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const onTestimonialCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (testimonialDragRef.current.suppressClick) {
      event.preventDefault()
      testimonialDragRef.current.suppressClick = false
    }
  }

  const scrollToIndustry = (id: string) => {
    const track = industriesTrackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>(`[data-industry="${id}"]`)
    if (!card) return

    lockSyncRef.current = true
    window.clearTimeout(unlockTimerRef.current)
    setActiveIndustry(id)

    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0
    const left =
      card.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft -
      pad
    track.scrollTo({ left, behavior: 'smooth' })

    unlockTimerRef.current = window.setTimeout(() => {
      lockSyncRef.current = false
    }, 450)
  }

  const onIndustriesScroll = () => {
    if (lockSyncRef.current) return
    const track = industriesTrackRef.current
    if (!track) return

    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0
    const marker = track.scrollLeft + pad + 24
    const cards = [...track.querySelectorAll<HTMLElement>('.industry-card')]
    let current = cards[0]
    for (const card of cards) {
      const start =
        card.getBoundingClientRect().left -
        track.getBoundingClientRect().left +
        track.scrollLeft
      if (start <= marker) current = card
      else break
    }
    const id = current?.getAttribute('data-industry')
    if (id) setActiveIndustry(id)
  }

  return (
    <main className="overflow-x-hidden bg-[var(--bg-page)] text-white">
      <Hero />

      <div className="container pt-[clamp(40px,4vw,64px)]">
        <div className="logo-bar-wrap" aria-label="Marcas que confían en nosotros">
          {CLIENT_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`logo-marquee logo-marquee--${rowIndex === 0 ? 'left' : 'right'}`}
            >
              <div className="logo-marquee__track">
                {row.map((client) => (
                  <ClientLogoCard key={client.name} client={client} />
                ))}
                {row.map((client) => (
                  <ClientLogoCard key={`${client.name}-dup`} client={client} duplicate />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="page-section stats" aria-label="Métricas clave">
        <div className="container">
          <div className="stats-card">
            <div className="stats-card__header">
              <h2 className="stats-card__title">Resultados que mueven tu operación.</h2>
            </div>
            <div className="stats__grid">
              <div className="stat">
                <span className="stat__eyebrow">Conversión</span>
                <div className="stat__value">+23%</div>
                <p className="stat__label">en conversión del canal conversacional</p>
              </div>
              <div className="stat">
                <span className="stat__eyebrow">Automatización</span>
                <div className="stat__value">98%</div>
                <p className="stat__label">de conversaciones resueltas sin intervención humana</p>
              </div>
              <div className="stat">
                <span className="stat__eyebrow">Velocidad</span>
                <div className="stat__value">&lt; 30 seg</div>
                <p className="stat__label">tiempo de primera respuesta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section features" id="features">
        <div className="container">
          <article className="feature feature--agent">
            <div className="feature__copy">
              <span className="feature__eyebrow">Agentes de IA</span>
              <h2 className="feature__title">Crea agentes de IA que deciden en contexto.</h2>
              <p className="feature__desc">
                Construye agentes que conocen tu catálogo, resuelven objeciones y empujan al
                checkout. Sin flujos rígidos ni chatbots. Se conectan a tu tienda y tu CRM en
                tiempo real y operan dentro de Desk.
              </p>
              <a href="https://adereso.ai/adereso-studio" className="feature__link feature__link--pill">
                Conocer Studio →
              </a>
            </div>
            <div
              className="feature__media feature__media--agent-glow"
              aria-label="Configuración de un agente de IA"
            >
              <AgentFeatureMockup />
            </div>
          </article>
        </div>

        <div className="container">
          <article className="feature feature--reverse feature--helpdesk">
            <div className="feature__copy">
              <span className="feature__eyebrow">Helpdesk Omnicanal</span>
              <h2 className="feature__title">
                Un solo inbox.
                <br />
                Todos tus canales.
              </h2>
              <p className="feature__desc">
                Centraliza WhatsApp, Instagram, email y más en un solo sistema. La IA responde
                primero; si escala, el humano retoma el mismo ticket con todo el historial.
              </p>
              <a href="https://adereso.ai/adereso-desk" className="feature__link feature__link--pill">
                Conocer Desk →
              </a>
            </div>
            <div
              className="feature__media feature__media--helpdesk-glow"
              aria-label="Inbox omnicanal de Adereso"
            >
              <HelpdeskFeatureMockup />
            </div>
          </article>
        </div>

        <div className="container">
          <article className="feature feature--engage">
            <div className="feature__copy">
              <span className="feature__eyebrow">Marketing por WhatsApp</span>
              <h2 className="feature__title">
                Activa conversaciones antes de que el cliente se olvide.
              </h2>
              <p className="feature__desc">
                Mensajes proactivos por WhatsApp a escala: recupera carritos, activa recompras y
                notifica despachos. 98% de apertura. Si el cliente responde, Studio retoma; si
                escala, Desk recibe el ticket con historial completo.
              </p>
              <a href="https://adereso.ai/adereso-engage" className="feature__link feature__link--pill">
                Conocer Engage →
              </a>
            </div>
            <div
              className="feature__media feature__media--engage-glow"
              aria-label="Campaña automatizada por WhatsApp"
            >
              <EngageFeatureMockup />
            </div>
          </article>
        </div>
      </section>

      <section className="page-section inquiry section-band" data-tab={inquiryTab}>
        <div className="container">
          <div className="inquiry-intro">
            <div className="inquiry-intro__copy">
              <h2 className="inquiry-intro__title">Venta y postventa en un solo sistema</h2>
              <p className="inquiry-intro__desc">
                Sin herramientas separadas ni pérdida de contexto entre etapas.
              </p>
              <div className="inquiry-intro__actions" role="tablist" aria-label="Venta o postventa">
                <button
                  type="button"
                  className={`btn btn--light${inquiryTab === 'venta' ? ' is-active' : ''}`}
                  aria-selected={inquiryTab === 'venta'}
                  onClick={() => setInquiryTab('venta')}
                >
                  Venta
                </button>
                <button
                  type="button"
                  className={`btn btn--outline-light${inquiryTab === 'postventa' ? ' is-active' : ''}`}
                  aria-selected={inquiryTab === 'postventa'}
                  onClick={() => setInquiryTab('postventa')}
                >
                  Postventa
                </button>
              </div>
            </div>
          </div>

          <div className="inquiry-panels">
            <div className="inquiry-panel" data-panel="venta">
              <h3 className="inquiry-panel__label">Venta</h3>
              <div className="inquiry__grid">
                <SalesJourneyGrid />
              </div>
            </div>
            <div className="inquiry-panel" data-panel="postventa">
              <h3 className="inquiry-panel__label">Postventa</h3>
              <div className="inquiry__grid">
                <PostSaleJourneyGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section industries">
        <div className="container">
          <div className="industries-head">
            <span className="industries-head__eyebrow">Industrias</span>
            <h2 className="industries-head__title">Tu vertical. Misma plataforma.</h2>
            <p className="industries-head__desc">
              Misma plataforma, distintas operaciones. Cada vertical tiene casos de uso, agentes y
              flujos adaptados a su realidad.
            </p>
          </div>

          <nav className="industries-nav" aria-label="Ir a industria">
            <div className="industries-nav__track">
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry.id}
                  type="button"
                  className={`industries-nav__btn${activeIndustry === industry.id ? ' is-active' : ''}`}
                  data-industry={industry.id}
                  onClick={() => scrollToIndustry(industry.id)}
                >
                  {industry.nav}
                </button>
              ))}
            </div>
          </nav>

          <div
            ref={industriesTrackRef}
            className="industries__grid"
            role="region"
            aria-label="Industrias"
            tabIndex={0}
            onScroll={onIndustriesScroll}
          >
            {INDUSTRIES.map((industry, index) => (
              <article
                key={industry.id}
                className="industry-card"
                id={`industry-${industry.id}`}
                data-industry={industry.id}
              >
                <div className="industry-card__media">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="industry-card__image"
                    loading="lazy"
                  />
                  <div className="industry-card__shade" aria-hidden="true" />
                  <a
                    className="industry-card__cta"
                    href={industry.href}
                    aria-label={`Ver solución para ${industry.title}`}
                  >
                    Ver solución
                    <span aria-hidden="true">→</span>
                  </a>
                  <div className="industry-card__body">
                    <span className="industry-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="industry-card__title">{industry.title}</h3>
                    <p className="industry-card__summary">{industry.summary}</p>
                    <div className="industry-card__tags">
                      {industry.tags.map((tag) => (
                        <span key={tag} className="industry-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section testimonials section-band section-band--alt">
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">Lo que dicen nuestros clientes.</h2>
          </div>

          <div
            className={`testimonials__carousel${isTestimonialDragging ? ' is-dragging' : ''}`}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Casos de éxito"
          >
            <div
              ref={testimonialsStageRef}
              className="testimonials__stage"
              onPointerDown={onTestimonialPointerDown}
              onPointerMove={onTestimonialPointerMove}
              onPointerUp={finishTestimonialDrag}
              onPointerCancel={finishTestimonialDrag}
            >
              {TESTIMONIALS.map((item, index) => {
                const len = TESTIMONIALS.length
                let offset = index - activeTestimonial
                if (offset > len / 2) offset -= len
                if (offset < -len / 2) offset += len
                const isActive = offset === 0
                const isVisible = Math.abs(offset) <= 1
                const dragRatio = Math.max(-1, Math.min(1, testimonialDragX / 280))
                const scale = isActive
                  ? 1 - Math.abs(dragRatio) * 0.08
                  : 0.85 + (offset === -Math.sign(dragRatio) ? Math.abs(dragRatio) * 0.08 : 0)

                return (
                  <a
                    key={item.author}
                    className={`testimonial-card${isActive ? ' is-active' : ''}`}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-hidden={!isActive}
                    tabIndex={isActive ? 0 : -1}
                    draggable={false}
                    onClick={onTestimonialCardClick}
                    style={{
                      transform: `translate3d(calc(-50% + ${offset * 58}% + ${
                        isVisible ? testimonialDragX : 0
                      }px), -50%, 0) scale(${scale})`,
                      opacity: isVisible
                        ? Math.min(
                            1,
                            isActive ? 1 - Math.abs(dragRatio) * 0.12 : 0.28 + Math.abs(dragRatio) * 0.35,
                          )
                        : 0,
                      zIndex: isActive ? 3 : isVisible ? 2 : 1,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className={`testimonial-card__top${
                        item.company === 'Sodimac' ? ' testimonial-card__top--sodimac' : ''
                      }`}
                    >
                      <img
                        src={item.logo}
                        alt={item.company}
                        className={`testimonial-card__logo${
                          item.company === 'Cencosud'
                            ? ' testimonial-card__logo--cencosud'
                            : item.company === 'Sodimac'
                              ? ' testimonial-card__logo--sodimac'
                              : ''
                        }`}
                      />
                      {item.metric ? (
                        <span className="testimonial-card__metric">{item.metric}</span>
                      ) : null}
                    </div>
                    <p className="testimonial-card__quote">“{item.body}”</p>
                    <div className="testimonial-card__author">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="testimonial-card__avatar"
                        loading="lazy"
                        draggable={false}
                      />
                      <div>
                        <p className="testimonial-card__name">{item.author}</p>
                        <p className="testimonial-card__role">
                          {item.role} · {item.company}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="testimonials__controls">
              <button
                type="button"
                className="testimonials__arrow"
                onClick={() => goToTestimonial(activeTestimonial - 1)}
                aria-label="Testimonio anterior"
              >
                <span aria-hidden="true">←</span>
              </button>

              <div className="testimonials__dots" role="tablist" aria-label="Seleccionar testimonio">
                {TESTIMONIALS.map((item, index) => (
                  <button
                    key={item.author}
                    type="button"
                    className={`testimonials__dot${index === activeTestimonial ? ' is-active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Ir al testimonio de ${item.author}`}
                    aria-selected={index === activeTestimonial}
                    role="tab"
                  />
                ))}
              </div>

              <button
                type="button"
                className="testimonials__arrow"
                onClick={() => goToTestimonial(activeTestimonial + 1)}
                aria-label="Testimonio siguiente"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section integrations-section">
        <div className="container">
          <div className="connected">
            <div className="connected__copy">
              <span className="connected__eyebrow">Integraciones</span>
              <h2 className="connected__title">Tu stack, conectado.</h2>
              <p className="connected__desc">
                Stock, precios, CRM y WhatsApp certificado (BSP Meta) quedan integrados en la
                implementación, sin migrar tu stack.
              </p>
            </div>
            <IntegrationMap />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-head section-head--wide">
            <span className="section-head__eyebrow">Implementación</span>
            <h2 className="section-head__title">Te acompañamos de punta a punta.</h2>
            <p className="section-head__desc">
              Un equipo de Adereso te acompaña desde el primer día: diseño, integración,
              lanzamiento y optimización continua. Nosotros hacemos el trabajo técnico; tú te
              enfocas en tu operación.
            </p>
          </div>

          <div className="support__grid">
            <article className="support-card">
              <div className="support-card__media support-card__media--mockup">
                <ImplementationMockup />
              </div>
              <h3 className="support-card__title">Implementación</h3>
              <p className="support-card__desc">Setup guiado y migraciones sin fricción.</p>
            </article>
            <article className="support-card">
              <div className="support-card__media support-card__media--mockup">
                <StrategyMockup />
              </div>
              <h3 className="support-card__title">Estrategia</h3>
              <p className="support-card__desc">Diseño de flujos orientados a conversión.</p>
            </article>
            <article className="support-card">
              <div className="support-card__media support-card__media--mockup">
                <DedicatedSupportMockup />
              </div>
              <h3 className="support-card__title">Soporte dedicado</h3>
              <p className="support-card__desc">Acompañamiento continuo para tu equipo.</p>
            </article>
          </div>
        </div>
      </section>

      <FinalCTA />

      <div className="page-end">
        <FAQ />

        <footer className="footer">
          <div className="container">
            <div className="footer__links">
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
              <a href="#">Contacto</a>
              <a href="#">© Adereso</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
