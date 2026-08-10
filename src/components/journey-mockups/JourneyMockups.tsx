import { useEffect, useState, type ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconCalendarCheck,
  IconCalendarEvent,
  IconCheck,
  IconHeadset,
  IconLink,
  IconMail,
  IconMinus,
  IconPlus,
  IconShoppingCart,
  IconSparkles,
  IconStar,
  IconStarFilled,
  IconTag,
} from '@tabler/icons-react'

function Card({
  icon,
  title,
  status,
  children,
  monochrome = false,
  hideHeader = false,
}: {
  icon?: ReactNode
  title?: string
  status?: string
  children: ReactNode
  monochrome?: boolean
  hideHeader?: boolean
}) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-[#0C0C0D]">
        {!hideHeader && (
        <header className="flex h-12 shrink-0 items-center gap-2.5 border-b border-white/[0.07] bg-[#131415] px-4">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              monochrome ? 'bg-white/[0.055] text-white/55' : 'bg-[#FFD540]/[0.06] text-[#FFD540]/70'
            }`}
          >
            {icon}
          </span>
          <p className="text-[15px] font-semibold text-white/85">{title}</p>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span
                className={`ml-auto inline-flex cursor-default items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  monochrome
                    ? 'border border-white/[0.07] bg-white/[0.035] text-white/45'
                    : 'border border-[#52CE5E]/10 bg-[#52CE5E]/[0.05] text-[#52CE5E]/80'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#52CE5E]" />
                {status}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={6}
                className="z-50 rounded-md border border-white/10 bg-[#1a1a1a] px-2.5 py-1.5 text-[10px] text-white shadow-xl"
              >
                Datos sincronizados en tiempo real
                <Tooltip.Arrow className="fill-[#1a1a1a]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </header>
        )}
        <div className="min-h-0 flex-1">{children}</div>
      </div>
    </Tooltip.Provider>
  )
}

function BentoCell({
  title,
  description,
  wide = false,
  children,
}: {
  title: string
  description: string
  wide?: boolean
  children: ReactNode
}) {
  return (
    <div className={wide ? 'inquiry__wide' : 'inquiry__cell'}>
      <div className="inquiry__card">
        <div className="inquiry__mock">{children}</div>
        <p className="inquiry__caption">
          <span className="inquiry__caption-title">{title}.</span> {description}
        </p>
      </div>
    </div>
  )
}

const RECOMMENDED_PRODUCTS = [
  { name: 'Cafetera Aura', price: '$84.990', img: 'prod-cafetera.png' },
  { name: 'Molinillo Pro', price: '$39.990', img: 'prod-molinillo.png' },
  { name: 'Pack Cápsulas', price: '$24.990', img: 'prod-capsulas.png' },
] as const

const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const PANEL_SHADOW = 'shadow-[0_10px_24px_-8px_rgba(0,0,0,0.65)]'
const PANEL_BASE = 'border-white/[0.06] bg-gradient-to-b from-[#232427] to-[#161719]'
const PANEL_TOP = 'border-white/[0.1] bg-gradient-to-b from-[#2b2c30] to-[#191a1c]'

function MockShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden p-3.5">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 95% at 50% -15%, rgba(255,255,255,0.07), rgba(255,255,255,0) 58%)',
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{ backgroundImage: NOISE_BG, backgroundSize: '180px 180px' }}
      />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  )
}

function MockHeader({ label, chip }: { label: string; chip?: string }) {
  return (
    <div className="flex shrink-0 items-center justify-between gap-2">
      <p className="text-[12px] text-white/40">{label}</p>
      {chip ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-white/45">
          <IconSparkles size={11} stroke={1.7} />
          {chip}
        </span>
      ) : null}
    </div>
  )
}

function RecommendationMockup() {
  return (
    <Card monochrome hideHeader>
      <MockShell>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-end justify-end gap-2">
            <div
              className={`max-w-[78%] rounded-2xl rounded-br-sm border px-3.5 py-2 ${PANEL_BASE}`}
            >
              <p className="text-[12px] leading-snug text-white/75">
                ¿Qué cafetera me recomiendan para espresso en casa?
              </p>
            </div>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-semibold text-white/55">
              CM
            </span>
          </div>

          <div className="mt-3 max-w-[86%]">
            <div className="mb-1 flex items-center gap-1.5 pl-0.5">
              <IconSparkles size={11} stroke={1.9} className="anim-pulse text-[#52CE5E]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.09em] text-[#52CE5E]/80">
                Adereso IA
              </span>
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-[#52CE5E]/25 bg-[#52CE5E]/[0.08] px-3.5 py-2">
              <p className="text-[12px] leading-snug text-white/85">
                Estas son nuestras favoritas para espresso:
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {RECOMMENDED_PRODUCTS.map((product, i) => (
              <div
                key={product.name}
                style={{ animationDelay: `${i * 1.3}s` }}
                className={`anim-scan flex flex-col rounded-lg border p-1.5 ${PANEL_BASE} ${PANEL_SHADOW}`}
              >
                <div className="mb-2 overflow-hidden rounded-md bg-white">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <p className="truncate text-[10px] font-medium text-white/80">{product.name}</p>
                <p className="mt-0.5 text-[10px] text-white/45">{product.price}</p>
                <button
                  type="button"
                  className="mt-2 flex items-center justify-center gap-1 rounded-md border border-white/15 bg-white/[0.04] py-1 text-[9px] font-medium text-white/60"
                >
                  <IconShoppingCart size={10} stroke={1.8} />
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      </MockShell>
    </Card>
  )
}

const CAFETERA_ITEM = {
  name: 'Cafetera Aura',
  variant: 'Negro mate',
  price: '$84.990',
  img: 'prod-cafetera.png',
}

// Loop: 0 → solo cafetera · 1 → aparece Pack (x1) · 2 → Pack sube a x2
const CART_PHASES = [
  { packQty: 0, packPrice: '$24.990', strike: '$84.990', total: '$76.491' },
  { packQty: 1, packPrice: '$24.990', strike: '$109.980', total: '$98.982' },
  { packQty: 2, packPrice: '$49.980', strike: '$134.970', total: '$121.473' },
] as const

const CART_PHASE_MS = [1500, 1600, 3000]

function CartBuilderMockup() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => (p + 1) % CART_PHASES.length), CART_PHASE_MS[phase])
    return () => clearTimeout(t)
  }, [phase])

  const { packQty, packPrice, strike, total } = CART_PHASES[phase]
  const packVisible = packQty > 0
  const count = packVisible ? 2 : 1

  return (
    <Card monochrome hideHeader>
      <MockShell>
        <div className="flex shrink-0 items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white/60">
              <IconShoppingCart size={16} stroke={1.7} />
            </span>
            <div>
              <p className="text-[13px] font-medium text-white/85">Carrito de Camila M.</p>
              <p className="text-[10px] text-white/40">
                {count} producto{count > 1 ? 's' : ''} · armado por IA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 mb-3.5 flex flex-col">
          <div
            className={`flex items-center gap-2.5 rounded-xl border p-2 ${PANEL_BASE} ${PANEL_SHADOW}`}
          >
            <img
              src={CAFETERA_ITEM.img}
              alt={CAFETERA_ITEM.name}
              className="h-10 w-10 shrink-0 rounded-md bg-white object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium text-white/85">{CAFETERA_ITEM.name}</p>
              <p className="truncate text-[10px] text-white/40">{CAFETERA_ITEM.variant}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1">
              <IconMinus size={11} stroke={2} className="text-white/40" />
              <span className="w-3 text-center text-[11px] font-medium text-white/70">1</span>
              <IconPlus size={11} stroke={2} className="text-white/40" />
            </div>
            <span className="w-14 shrink-0 text-right text-[12px] font-semibold text-white/80">
              {CAFETERA_ITEM.price}
            </span>
          </div>

          <div className={`reveal-collapse${packVisible ? ' is-in' : ''}`}>
            <div className="min-h-0">
              <div
                className={`reveal-row flex items-center gap-2.5 rounded-xl border p-2 ${PANEL_BASE} ${PANEL_SHADOW}`}
              >
                <img
                  src="prod-capsulas.png"
                  alt="Pack Cápsulas"
                  className="h-10 w-10 shrink-0 rounded-md bg-white object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-medium text-white/85">Pack Cápsulas</p>
                  <p className="truncate text-[10px] text-white/40">Intenso · x100</p>
                </div>
                <div
                  className={`flex items-center gap-2 rounded-full border px-1.5 py-1 ${
                    phase === 2
                      ? 'border-[#52CE5E]/40 bg-[#52CE5E]/[0.12]'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <IconMinus size={11} stroke={2} className="text-white/40" />
                  <span
                    key={packQty}
                    className="qty-pop w-3 text-center text-[11px] font-medium text-white/70"
                  >
                    {packQty || 1}
                  </span>
                  <IconPlus
                    size={11}
                    stroke={2}
                    className={phase === 2 ? 'text-[#52CE5E]' : 'text-white/40'}
                  />
                </div>
                <span className="w-14 shrink-0 text-right text-[12px] font-semibold text-white/80">
                  {packPrice}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-auto rounded-xl border p-3 ${PANEL_TOP} ${PANEL_SHADOW}`}>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#52CE5E]/25 bg-[#52CE5E]/[0.1] px-2 py-0.5 text-[10px] font-medium text-[#52CE5E]/90">
              <IconTag size={11} stroke={1.8} />
              Cupón AURA10 · -10%
            </span>
            <span className="text-[11px] text-white/35 line-through">{strike}</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-white/[0.08] pt-2">
            <span className="text-[13px] font-medium text-white/70">Total</span>
            <span
              key={total}
              className="val-pop text-[18px] font-semibold tracking-[-0.01em] text-white/90"
            >
              {total}
            </span>
          </div>
          <button
            type="button"
            className="anim-cta mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] py-2 text-[12px] font-medium text-white/75"
          >
            <IconLink size={13} stroke={1.8} />
            Generar link de pago
          </button>
        </div>
      </MockShell>
    </Card>
  )
}

const LEADS = [
  {
    name: 'Camila M.',
    channel: 'WhatsApp · Intención de compra',
    initials: 'CM',
    score: 92,
    temp: 'Caliente',
    accent: '#FF7A59',
    top: true,
  },
  {
    name: 'Rodrigo P.',
    channel: 'Instagram · Consulta de precio',
    initials: 'RP',
    score: 64,
    temp: 'Tibio',
    accent: '#FFD540',
    top: false,
  },
  {
    name: 'Valentina S.',
    channel: 'Webchat · Explorando',
    initials: 'VS',
    score: 38,
    temp: 'Frío',
    accent: '#5B9BFF',
    top: false,
  },
] as const

function LeadScoreMockup() {
  return (
    <Card monochrome hideHeader>
      <MockShell>
        <MockHeader label="Leads calificados" />
        <div className="leads-list mt-3 flex min-h-0 flex-1 flex-col justify-between gap-2.5">
          {LEADS.map((lead) => (
            <div
              key={lead.name}
              className={`rounded-xl border px-3 py-2.5 ${lead.top ? PANEL_TOP : PANEL_BASE} ${PANEL_SHADOW}`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold"
                  style={{ backgroundColor: `${lead.accent}1A`, color: lead.accent }}
                >
                  {lead.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-white/85">{lead.name}</p>
                  <p className="truncate text-[10px] text-white/40">{lead.channel}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium"
                  style={{
                    borderColor: `${lead.accent}33`,
                    backgroundColor: `${lead.accent}14`,
                    color: lead.accent,
                  }}
                >
                  {lead.temp}
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="anim-bar h-full rounded-full"
                    style={{
                      width: `${lead.score}%`,
                      backgroundColor: lead.accent,
                    }}
                  />
                </div>
                <span className="w-6 text-right text-[12px] font-semibold tabular-nums text-white/75">
                  {lead.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </MockShell>
    </Card>
  )
}

const APPT_DATES = [
  { weekday: 'Lun', day: '12' },
  { weekday: 'Mar', day: '13' },
  { weekday: 'Mié', day: '14', selected: true },
  { weekday: 'Jue', day: '15' },
  { weekday: 'Vie', day: '16' },
] as const

const APPT_TIMES = ['09:00', '10:30', '12:00', '15:30', '17:00', '18:30'] as const
const APPT_SELECTED_DAY = '14'
const APPT_SELECTED_TIME = '10:30'

// Loop: 0 idle → 1 elige día → 2 elige hora → 3 cita confirmada
const APPT_PHASE_MS = [450, 620, 720, 2200]

function AppointmentMockup() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => (p + 1) % APPT_PHASE_MS.length), APPT_PHASE_MS[phase])
    return () => clearTimeout(t)
  }, [phase])

  const dayPicked = phase >= 1
  const timePicked = phase >= 2
  const confirmed = phase >= 3

  return (
    <Card monochrome hideHeader>
      <MockShell>
        <div className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/60">
            <IconCalendarEvent size={17} stroke={1.7} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium text-white/85">Agendar con Camila M.</p>
            <p className="text-[10px] text-white/40">WhatsApp · Asesoría de compra</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-white/45">
            <IconSparkles size={11} stroke={1.7} />
            IA
          </span>
        </div>

        <p className="mt-3.5 text-[11px] text-white/40">Diciembre 2025</p>
        <div className="mt-1.5 grid grid-cols-5 gap-1.5">
          {APPT_DATES.map((date) => {
            const selected = dayPicked && date.day === APPT_SELECTED_DAY
            return (
              <button
                key={date.day}
                type="button"
                className={`flex flex-col items-center rounded-lg border py-1.5 ${
                  selected
                    ? 'appt-pick border-[#52CE5E]/35 bg-[#52CE5E]/[0.12]'
                    : `${PANEL_BASE}`
                }`}
              >
                <span className="text-[9px] text-white/45">{date.weekday}</span>
                <span
                  className={`text-[13px] font-semibold ${
                    selected ? 'text-[#52CE5E]' : 'text-white/80'
                  }`}
                >
                  {date.day}
                </span>
              </button>
            )
          })}
        </div>

        <p className="mt-3.5 text-[11px] text-white/40">Horarios disponibles</p>
        <div className="mt-1.5 grid grid-cols-3 gap-1.5">
          {APPT_TIMES.map((time) => {
            const selected = timePicked && time === APPT_SELECTED_TIME
            return (
              <button
                key={time}
                type="button"
                className={`rounded-lg border py-1.5 text-center text-[11px] font-medium ${
                  selected
                    ? 'appt-pick border-[#52CE5E]/35 bg-[#52CE5E]/[0.12] text-[#52CE5E]'
                    : `${PANEL_BASE} text-white/55`
                }`}
              >
                {time}
              </button>
            )
          })}
        </div>

        <div className={`reveal-collapse mt-auto${confirmed ? ' is-in' : ''}`}>
          <div className="min-h-0">
            <div
              className={`reveal-row flex items-center gap-2.5 rounded-xl border p-3 ${PANEL_TOP} ${PANEL_SHADOW}`}
            >
              <span className="anim-pulse flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#52CE5E]/10 text-[#52CE5E]">
                <IconCalendarCheck size={16} stroke={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-medium text-white/85">
                  Cita confirmada · Mié 14, 10:30
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-[10px] text-white/40">
                  <IconBrandWhatsapp size={11} stroke={1.8} className="text-[#52CE5E]/75" />
                  Recordatorio enviado por WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </MockShell>
    </Card>
  )
}

const APPT_FEATURES = [
  'Muestra solo los horarios disponibles',
  'Sincroniza y agenda en tu calendario',
  'Recordatorios automáticos por WhatsApp',
] as const

function AppointmentFeatureCell() {
  return (
    <div className="inquiry__wide">
      <div className="inquiry__card inquiry__card--split">
        <div className="inquiry__split-mock">
          <AppointmentMockup />
        </div>
        <div className="inquiry__split-copy">
          <span className="inline-flex w-fit items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/50">
            Agenda citas
          </span>
          <h3 className="mt-3 text-[clamp(20px,2.2vw,28px)] font-medium leading-[1.15] tracking-[-0.02em] text-white/90">
            Reserva y confirma citas sin fricción
          </h3>
          <p className="mt-2.5 max-w-[46ch] text-[15.5px] leading-relaxed text-white/55">
            El agente ofrece los horarios disponibles, agenda directo en tu calendario y envía
            recordatorios por WhatsApp para reducir las inasistencias.
          </p>
          <ul className="mt-4 space-y-2">
            {APPT_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[13px] text-white/70">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#52CE5E]/[0.12] text-[#52CE5E]">
                  <IconCheck size={12} stroke={2.2} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function TechSupportMockup() {
  return (
    <Card monochrome hideHeader>
      <MockShell>
        <div className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/60">
            <IconHeadset size={17} stroke={1.7} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium text-white/85">Soporte · Camila M.</p>
            <p className="text-[10px] text-white/40">WhatsApp · Falla técnica</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-white/45">
            <IconSparkles size={11} stroke={1.7} />
            IA
          </span>
        </div>

        <div className="mt-3 flex min-h-0 flex-1 flex-col">
          <div className="flex items-end justify-end gap-2">
            <div className={`max-w-[80%] rounded-2xl rounded-br-sm border px-3.5 py-2.5 ${PANEL_BASE}`}>
              <p className="text-[14px] leading-snug text-white/80">
                Mi Cafetera Aura no enciende después de la actualización 😕
              </p>
            </div>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[9px] font-semibold text-white/55">
              CM
            </span>
          </div>

          <div className="mt-3 max-w-[86%]">
            <div className="mb-1 flex items-center gap-1.5 pl-0.5">
              <IconSparkles size={12} stroke={1.9} className="text-[#52CE5E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.09em] text-[#52CE5E]/80">
                Adereso IA
              </span>
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-[#52CE5E]/25 bg-[#52CE5E]/[0.08] px-3.5 py-2.5">
              <p className="text-[14px] leading-snug text-white/85">
                Hice un diagnóstico rápido y tu equipo requiere revisión técnica. Te derivo con un
                especialista.
              </p>
            </div>
          </div>

          <div className="mt-3.5 flex items-center gap-2.5 px-0.5">
            <span className="h-px flex-1 bg-white/[0.08]" />
            <span className="anim-handoff inline-flex shrink-0 items-center gap-2 rounded-full border border-dashed border-[#52CE5E]/35 bg-[#52CE5E]/[0.08] px-3.5 py-1.5 text-[13px] font-medium text-white/75">
              <IconHeadset size={15} stroke={1.8} className="text-[#52CE5E]" />
              Derivando a un especialista
            </span>
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <div className="mt-3 flex items-end gap-2">
            <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B9BFF]/20 text-[9px] font-semibold text-[#5B9BFF]">
              DR
              <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full border border-[#0a0a0b] bg-[#52CE5E]" />
            </span>
            <div className={`max-w-[82%] rounded-2xl rounded-bl-sm border px-3.5 py-2.5 ${PANEL_BASE}`}>
              <p className="text-[11px] font-medium text-[#5B9BFF]/80">Diego R. · Especialista</p>
              <p className="mt-0.5 text-[14px] leading-snug text-white/80">
                Hola Camila, ya tengo tu caso. Activo la garantía y coordinamos la visita.
              </p>
            </div>
          </div>
        </div>
      </MockShell>
    </Card>
  )
}

const SUPPORT_FEATURES = [
  'Diagnóstico y respuestas automáticas 24/7',
  'Deriva al especialista con todo el contexto',
  'El cliente no repite información ni pierde el hilo',
] as const

function TechSupportFeatureCell() {
  return (
    <div className="inquiry__wide">
      <div className="inquiry__card inquiry__card--split">
        <div className="inquiry__split-mock">
          <TechSupportMockup />
        </div>
        <div className="inquiry__split-copy">
          <span className="inline-flex w-fit items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/50">
            Soporte técnico asistido
          </span>
          <h3 className="mt-3 text-[clamp(20px,2.2vw,28px)] font-medium leading-[1.15] tracking-[-0.02em] text-white/90">
            Resuelve con IA y deriva a un experto cuando hace falta
          </h3>
          <p className="mt-2.5 max-w-[46ch] text-[15.5px] leading-relaxed text-white/55">
            La IA atiende y resuelve las consultas técnicas, y cuando se necesita intervención
            humana deriva al especialista con todo el contexto de la conversación.
          </p>
          <ul className="mt-4 space-y-2">
            {SUPPORT_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[13px] text-white/70">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#52CE5E]/[0.12] text-[#52CE5E]">
                  <IconCheck size={12} stroke={2.2} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const HELPDESK_TICKETS = [
  {
    name: 'Camila M.',
    message: '¿Pueden ayudarme con el cambio de mi pedido?',
    time: '2m',
    icon: IconBrandWhatsapp,
    accent: '#52CE5E',
    active: true,
  },
  {
    name: 'Rodrigo P.',
    message: 'El producto llegó dañado, ¿cómo lo cambio?',
    time: '8m',
    icon: IconBrandInstagram,
    accent: '#E1306C',
    active: false,
  },
  {
    name: 'Valentina S.',
    message: 'Necesito el estado de mi reembolso #1042',
    time: '14m',
    icon: IconMail,
    accent: '#5B9BFF',
    active: false,
  },
] as const

// Loop: 0 vacío → 1..3 tickets → hold → reset
const HELPDESK_STEP_MS = [450, 1000, 1000, 2200]

function HelpdeskJourneyMockup() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const delay =
      visibleCount >= HELPDESK_TICKETS.length
        ? HELPDESK_STEP_MS[HELPDESK_STEP_MS.length - 1]
        : HELPDESK_STEP_MS[visibleCount]

    const t = setTimeout(() => {
      setVisibleCount((count) =>
        count >= HELPDESK_TICKETS.length ? 0 : count + 1,
      )
    }, delay)

    return () => clearTimeout(t)
  }, [visibleCount])

  return (
    <Card monochrome hideHeader>
      <MockShell>
        <MockHeader label="Bandeja unificada" chip="Omnicanal" />
        <div className="mt-3 flex min-h-0 flex-1 flex-col justify-center gap-1.5">
          {HELPDESK_TICKETS.map((ticket, index) => {
            const ChannelIcon = ticket.icon
            const visible = index < visibleCount
            return (
              <div
                key={ticket.name}
                className={`rounded-xl border px-3 py-2.5 transition-[opacity,transform] duration-500 ease-out ${
                  ticket.active ? PANEL_TOP : PANEL_BASE
                } ${PANEL_SHADOW} ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-1.5 opacity-0'
                }`}
                aria-hidden={!visible}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${ticket.accent}1A`, color: ticket.accent }}
                  >
                    <ChannelIcon size={15} stroke={1.7} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-white/85">{ticket.name}</p>
                    <p className="truncate text-[10px] text-white/40">{ticket.message}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-white/30">{ticket.time}</span>
                </div>
              </div>
            )
          })}
        </div>
      </MockShell>
    </Card>
  )
}

const RETURN_MESSAGES = [
  {
    side: 'ai' as const,
    text: '¿Qué ocurrió con tu pedido?',
  },
  {
    side: 'user' as const,
    text: 'Me llegó el producto incorrecto',
  },
  {
    side: 'ai' as const,
    text: 'Ok. Dime el número de orden para gestionar el reembolso o el cambio.',
  },
  {
    side: 'user' as const,
    text: '#ORD-48291',
  },
  {
    side: 'ai' as const,
    text: 'Ok, gestionando tu devolución…',
  },
  {
    side: 'ai' as const,
    text: 'Devolución resuelta. Tu reembolso ya está en camino.',
  },
] as const

// Loop: 0 vacío → 1..6 mensajes → hold → reset
const RETURN_STEP_MS = [350, 950, 950, 1100, 950, 1100, 2200]

function ReturnMockup() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const delay =
      visibleCount >= RETURN_MESSAGES.length
        ? RETURN_STEP_MS[RETURN_STEP_MS.length - 1]
        : RETURN_STEP_MS[visibleCount]

    const t = setTimeout(() => {
      setVisibleCount((count) =>
        count >= RETURN_MESSAGES.length ? 0 : count + 1,
      )
    }, delay)

    return () => clearTimeout(t)
  }, [visibleCount])

  return (
    <Card monochrome hideHeader>
      <MockShell>
        <div className="flex h-full min-h-0 flex-col justify-center gap-1.5 overflow-hidden">
          {RETURN_MESSAGES.map((message, index) => {
            const visible = index < visibleCount
            const rowClass = `flex shrink-0 items-end gap-2 transition-[opacity,transform] duration-500 ease-out ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-1.5 opacity-0'
            }`

            if (message.side === 'user') {
              return (
                <div
                  key={`${message.text}-${index}`}
                  className={`${rowClass} justify-end`}
                  aria-hidden={!visible}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl rounded-br-sm border px-3 py-1.5 ${PANEL_TOP}`}
                  >
                    <p className="text-[13px] leading-snug text-white/85">{message.text}</p>
                  </div>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[8px] font-semibold text-white/55">
                    CM
                  </span>
                </div>
              )
            }

            return (
              <div
                key={`${message.text}-${index}`}
                className={rowClass}
                aria-hidden={!visible}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#52CE5E]/15 text-[#52CE5E]">
                  <IconSparkles size={11} stroke={1.7} />
                </span>
                <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-[#52CE5E]/25 bg-[#52CE5E]/[0.1] px-3 py-1.5">
                  <p className="text-[13px] leading-snug text-white/85">{message.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </MockShell>
    </Card>
  )
}

// Loop: 0 idle (5 empty) → 1..5 fill stars → hold → reset
const SURVEY_STEP_MS = [1400, 320, 320, 320, 320, 320, 2200]

function SurveyMockup() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t = setTimeout(
      () => setPhase((p) => (p + 1) % SURVEY_STEP_MS.length),
      SURVEY_STEP_MS[phase],
    )
    return () => clearTimeout(t)
  }, [phase])

  const filledStars = Math.max(0, Math.min(5, phase))

  return (
    <Card monochrome hideHeader>
      <MockShell>
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <div className="flex items-end gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#52CE5E]/15 text-[#52CE5E]">
              <IconSparkles size={13} stroke={1.7} />
            </span>
            <div className="min-w-0 flex-1 rounded-2xl rounded-bl-sm border border-[#52CE5E]/25 bg-[#52CE5E]/[0.1] p-2.5">
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src="prod-cafetera.png"
                  alt=""
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
              <p className="mt-2.5 px-1 text-[12px] leading-snug text-white/85">
                Nos gustaría saber tu opinión. ¿Qué te pareció tu compra?
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-1.5 border-t border-white/10 pt-2.5">
                {Array.from({ length: 5 }, (_, index) => {
                  const filled = index < filledStars
                  const StarIcon = filled ? IconStarFilled : IconStar
                  return (
                    <span
                      key={index}
                      className={`transition-transform duration-300 ${
                        filled ? 'scale-110 text-[#FFD540]' : 'scale-100 text-white/25'
                      }`}
                    >
                      <StarIcon
                        size={18}
                        stroke={1.7}
                        className={
                          filled && index === filledStars - 1 ? 'anim-pulse' : undefined
                        }
                      />
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </MockShell>
    </Card>
  )
}

export function SalesJourneyGrid() {
  return (
    <>
      <BentoCell
        title="Recomienda productos"
        description="La IA sugiere el producto ideal según la consulta, el stock y el perfil de cada cliente."
      >
        <RecommendationMockup />
      </BentoCell>
      <BentoCell
        title="Arma carritos"
        description="Crea el carrito con productos, cantidades y descuentos listos para pagar, sin intervención manual."
      >
        <CartBuilderMockup />
      </BentoCell>
      <BentoCell
        title="Califica leads"
        description="La IA puntúa y prioriza cada conversación según intención y probabilidad de compra."
      >
        <LeadScoreMockup />
      </BentoCell>
      <AppointmentFeatureCell />
    </>
  )
}

export function PostSaleJourneyGrid() {
  return (
    <>
      <BentoCell
        title="Mesa de ayuda Omnicanal"
        description="Centraliza WhatsApp, Instagram, email y más en un solo inbox, con historial completo."
      >
        <HelpdeskJourneyMockup />
      </BentoCell>
      <BentoCell
        title="Devoluciones autogestionadas"
        description="El cliente resuelve su cambio o reembolso solo, con validación automática."
      >
        <ReturnMockup />
      </BentoCell>
      <BentoCell
        title="Envía encuestas de satisfacción"
        description="Crea y envía encuestas por WhatsApp tras la entrega para medir la satisfacción del cliente."
      >
        <SurveyMockup />
      </BentoCell>
      <TechSupportFeatureCell />
    </>
  )
}
