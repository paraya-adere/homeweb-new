import type { ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconCheck,
  IconCreditCard,
  IconMessageCircle,
  IconRefresh,
  IconRepeat,
  IconSend,
  IconSparkles,
  IconTruck,
} from '@tabler/icons-react'

const consultationTabClass =
  'flex-1 rounded-md px-2 py-1.5 text-[10px] font-medium text-white/35 outline-none transition-colors hover:text-white/60 data-[state=active]:bg-white/[0.07] data-[state=active]:text-white/75'

function GlowFrame({
  background,
  children,
  flushBottomRight = false,
  flushBottomLeft = false,
  borderless = false,
}: {
  background: string
  children: ReactNode
  flushBottomRight?: boolean
  flushBottomLeft?: boolean
  borderless?: boolean
}) {
  const flushClass = flushBottomRight
    ? 'pt-[clamp(12px,1.5vw,18px)] pl-[clamp(12px,1.5vw,18px)]'
    : flushBottomLeft
      ? 'pt-[clamp(12px,1.5vw,18px)] pr-[clamp(12px,1.5vw,18px)]'
      : 'p-[clamp(12px,1.5vw,18px)]'

  return (
    <div
      className={`h-full w-full overflow-hidden rounded-2xl bg-cover bg-center shadow-[0_22px_60px_rgba(0,0,0,0.28)] ${
        borderless ? '' : 'border border-white/[0.08]'
      } ${flushClass}`}
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="h-full">{children}</div>
    </div>
  )
}

function Card({
  icon,
  title,
  status,
  children,
  monochrome = false,
  cornerClass = 'rounded-xl',
}: {
  icon: ReactNode
  title: string
  status: string
  children: ReactNode
  monochrome?: boolean
  cornerClass?: string
}) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div
        className={`flex h-full flex-col overflow-hidden border border-white/[0.08] bg-[#0C0C0D] shadow-[0_18px_45px_rgba(0,0,0,0.28)] ${cornerClass}`}
      >
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
        <div className="min-h-0 flex-1">{children}</div>
      </div>
    </Tooltip.Provider>
  )
}

function ConsultationMockup() {
  return (
    <GlowFrame background="fondo-glow-1080x1080@2x (2).webp" flushBottomRight borderless>
      <Card
        icon={<IconMessageCircle size={16} stroke={1.7} />}
        title="Inbox · Consulta"
        status="IA atendiendo"
        monochrome
        cornerClass="rounded-tl-xl rounded-br-xl"
      >
        <Tabs.Root defaultValue="conversation" className="flex min-h-0 flex-1 flex-col">
          <Tabs.List className="mx-3 mt-3 flex shrink-0 rounded-lg border border-white/[0.06] bg-black/20 p-1">
            <Tabs.Trigger value="conversation" className={consultationTabClass}>
              Conversación
            </Tabs.Trigger>
            <Tabs.Trigger value="context" className={consultationTabClass}>
              Contexto
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content
            value="conversation"
            className="flex min-h-0 flex-1 flex-col p-3 outline-none"
          >
            <div className="mb-2 flex shrink-0 items-center gap-2 border-b border-white/[0.06] pb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-[10px] font-semibold text-white/65">
                CM
              </span>
              <div>
                <p className="text-[12px] font-medium text-white/75">Camila M.</p>
                <p className="flex items-center gap-1 text-[9px] text-white/30">
                  <IconBrandWhatsapp size={10} stroke={1.8} className="text-[#52CE5E]/75" />
                  WhatsApp
                </p>
              </div>
              <span className="ml-auto text-[9px] text-white/25">Ahora</span>
            </div>

            <div className="min-h-0 flex-1 space-y-2 overflow-hidden">
              <div className="max-w-[88%] rounded-xl rounded-tl-[4px] border border-white/[0.07] bg-[#171719] px-3 py-1.5">
                <p className="text-[12px] leading-[1.4] text-white/70">
                  Hola, ¿tienen la Cafetera Aura?
                </p>
              </div>

              <div className="ml-auto max-w-[92%] rounded-xl rounded-tr-[4px] border border-white/[0.08] bg-[#202122] px-3 py-1.5">
                <div className="flex items-center gap-1.5">
                  <IconSparkles size={12} stroke={1.7} className="text-white/45" />
                  <p className="text-[10px] font-medium text-white/40">Sofía · Agente IA</p>
                </div>
                <p className="mt-1 text-[12px] leading-[1.4] text-white/75">
                  Sí, hay stock. ¿Para qué comuna la necesitas?
                </p>
              </div>

              <div className="max-w-[88%] rounded-xl rounded-tl-[4px] border border-white/[0.07] bg-[#171719] px-3 py-1.5">
                <p className="text-[12px] leading-[1.4] text-white/70">
                  Providencia, idealmente mañana.
                </p>
              </div>

              <div className="ml-auto max-w-[92%] rounded-xl rounded-tr-[4px] border border-white/[0.08] bg-[#202122] px-3 py-1.5">
                <div className="flex items-center gap-1.5">
                  <IconSparkles size={12} stroke={1.7} className="text-white/45" />
                  <p className="text-[10px] font-medium text-white/40">Sofía · Agente IA</p>
                </div>
                <p className="mt-1 text-[12px] leading-[1.4] text-white/75">
                  Perfecto. Llega mañana de 14:00 a 18:00. ¿Te envío el link de pago?
                </p>
              </div>

              <div className="max-w-[50%] rounded-xl rounded-tl-[4px] border border-white/[0.07] bg-[#171719] px-3 py-1.5">
                <p className="text-[12px] leading-[1.4] text-white/70">Sí</p>
              </div>
            </div>

            <div className="mt-2 flex shrink-0 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#52CE5E]/10 text-[#52CE5E]/75">
                <IconCheck size={12} stroke={2} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-white/60">Lista para comprar</p>
                <p className="truncate text-[10px] text-white/35">tienda.link/pago/cafetera-aura</p>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="context" className="space-y-2 p-3 outline-none">
            <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
              <p className="text-[10px] text-white/30">Producto</p>
              <p className="mt-0.5 text-[12px] font-medium text-white/70">Cafetera Aura</p>
            </div>
            <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
              <p className="text-[10px] text-white/30">Entrega</p>
              <p className="mt-0.5 text-[12px] font-medium text-white/70">09/12 · Providencia</p>
            </div>
            <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
              <p className="text-[10px] text-white/30">Link de pago</p>
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                className="mt-0.5 block truncate text-[12px] font-medium text-white/80 underline underline-offset-2 decoration-white/35 hover:text-white hover:decoration-white/60"
              >
                tienda.link/pago/cafetera-aura
              </a>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </Card>
    </GlowFrame>
  )
}

function CheckoutMockup() {
  return (
    <GlowFrame background="fondo-glow-1080x1080@2x (7).webp" flushBottomLeft borderless>
      <Card
        icon={<IconCreditCard size={16} stroke={1.7} />}
        title="Checkout · Pago"
        status="Listo"
        monochrome
        cornerClass="rounded-tr-xl rounded-bl-xl"
      >
        <div className="flex h-full flex-col p-3.5">
          <div className="flex items-center gap-2">
            {['Carrito', 'Datos', 'Pago'].map((step, index) => (
              <div key={step} className="flex min-w-0 flex-1 items-center gap-1.5">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                    index === 2
                      ? 'bg-white text-[#0C0C0D]'
                      : 'border border-white/10 bg-white/[0.04] text-white/40'
                  }`}
                >
                  {index < 2 ? <IconCheck size={12} stroke={2} /> : '3'}
                </span>
                <span
                  className={`truncate text-[11px] ${
                    index === 2 ? 'font-medium text-white/75' : 'text-white/35'
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/[0.07] bg-[#171719] p-3.5">
            <div className="flex items-center gap-3">
              <img
                src="cafetera-aura.png"
                alt=""
                className="h-14 w-14 rounded-lg bg-white object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium text-white/80">Cafetera Aura</p>
                <p className="mt-0.5 text-[11px] text-white/35">Entrega 09/12 · Providencia</p>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-2.5">
            <div className="flex justify-between text-[13px] text-white/45">
              <span>Producto</span>
              <span className="text-white/70">$84.990</span>
            </div>
            <div className="flex justify-between text-[13px] text-white/45">
              <span>Despacho</span>
              <span className="text-white/70">Gratis</span>
            </div>
            <div className="flex justify-between border-t border-white/[0.07] pt-2.5 text-[15px] font-semibold text-white/85">
              <span>Total</span>
              <span>$84.990</span>
            </div>
          </div>

          <button
            type="button"
            className="mt-auto rounded-full border border-white/20 bg-[#1a1a1c] px-4 py-3 text-[13px] font-medium text-white/70"
          >
            Pagar ahora
          </button>
        </div>
      </Card>
    </GlowFrame>
  )
}

function RecoveryMockup() {
  return (
    <GlowFrame background="fondo-glow-1080x1080@2x (4).webp" flushBottomRight borderless>
      <Card
        icon={<IconRefresh size={16} stroke={1.7} />}
        title="Recuperación"
        status="Automática"
        monochrome
        cornerClass="rounded-tl-xl rounded-br-xl"
      >
        <div className="flex h-full flex-col p-3.5">
          <div className="rounded-xl border border-white/[0.07] bg-[#171719] p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] text-white/35">Carrito abandonado</p>
                <p className="mt-1 text-[15px] font-medium text-white/80">María Soto</p>
                <p className="mt-0.5 text-[13px] text-white/50">Cafetera Aura · $84.990</p>
              </div>
              <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/45">
                hace 30 min
              </span>
            </div>
          </div>

          <div className="my-3 flex items-center gap-2 px-1">
            <span className="h-px flex-1 bg-white/[0.08]" />
            <IconSend size={14} stroke={1.6} className="text-white/30" />
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#202122] p-3.5">
            <div className="flex items-center gap-2">
              <IconBrandWhatsapp size={14} stroke={1.8} className="text-[#52CE5E]/75" />
              <p className="text-[12px] font-medium text-white/55">WhatsApp enviado</p>
            </div>
            <p className="mt-2 text-[13px] leading-[1.45] text-white/75">
              María, guardamos tu Cafetera Aura. ¿Quieres retomar la compra?
            </p>
            <div className="mt-3 rounded-full border border-white/20 bg-[#1a1a1c] px-4 py-2.5 text-center text-[12px] font-medium text-white/65">
              Retomar compra
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5">
            <p className="text-[12px] text-white/40">Carritos recuperados</p>
            <p className="text-[20px] font-semibold text-white/85">35%</p>
          </div>
        </div>
      </Card>
    </GlowFrame>
  )
}

const SALE_STAGES = [
  {
    id: 'ad',
    label: 'Ad',
    title: 'Anuncio de producto',
    detail: 'Campaña en Instagram · 12.480 impresiones',
    metric: '4,8% CTR',
  },
  {
    id: 'query',
    label: 'Consulta',
    title: 'Conversación iniciada',
    detail: 'El agente entiende necesidad, presupuesto y contexto',
    metric: '1,2s respuesta',
  },
  {
    id: 'recommendation',
    label: 'Recomendación',
    title: 'Producto recomendado',
    detail: 'Pack Empresa Aura basado en stock y perfil',
    metric: '82% match',
  },
  {
    id: 'cart',
    label: 'Carrito',
    title: 'Carrito creado',
    detail: 'Productos y descuento agregados automáticamente',
    metric: '$189.900',
  },
  {
    id: 'payment',
    label: 'Pago',
    title: 'Compra confirmada',
    detail: 'Pago aprobado y pedido sincronizado',
    metric: 'Convertido',
  },
] as const

function JourneyFlow({
  title,
  subtitle,
  stages,
  background = 'fondo-glow-helpdesk.webp',
}: {
  title: string
  subtitle: string
  stages: readonly { id: string; label: string; title: string; detail: string; metric: string }[]
  background?: string
}) {
  return (
    <GlowFrame background={background}>
      <Card
        icon={<IconSparkles size={16} stroke={1.7} />}
        title={title}
        status="Flujo activo"
        monochrome
      >
        <div className="flex h-full min-h-0 flex-col p-4">
          <div className="flex shrink-0 items-center justify-between gap-4">
            <p className="text-[13px] text-white/45">{subtitle}</p>
            <p className="text-[11px] text-white/30">{stages.length} etapas conectadas</p>
          </div>

          <div className="relative mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <article
                key={stage.id}
                className="relative flex min-w-0 flex-col rounded-xl border border-white/[0.08] bg-[#141415]/95 p-4"
              >
                {index < stages.length - 1 && (
                  <span className="absolute top-7 -right-[13px] z-10 hidden h-5 w-5 items-center justify-center rounded-full border border-white/[0.08] bg-[#181819] lg:flex">
                    <IconArrowRight size={11} stroke={1.5} className="text-white/30" />
                  </span>
                )}

                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-[11px] font-semibold text-white/65">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-medium text-white/40">{stage.label}</span>
                </div>

                <h4 className="mt-3 text-[15px] leading-[1.25] font-semibold text-white/85">
                  {stage.title}
                </h4>
                <p className="mt-1.5 text-[12px] leading-[1.45] text-white/45">{stage.detail}</p>

                <div className="mt-4 border-t border-white/[0.07] pt-3">
                  <p className="text-[11px] text-white/30">Resultado</p>
                  <p className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-white/80">
                    {stage.metric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Card>
    </GlowFrame>
  )
}

function TrackingMockup() {
  return (
    <GlowFrame background="fondo-glow-postventa3.webp" flushBottomRight borderless>
      <Card
        icon={<IconTruck size={16} stroke={1.7} />}
        title="Tracking"
        status="En tránsito"
        monochrome
        cornerClass="rounded-tl-xl rounded-br-xl"
      >
        <div className="flex h-full flex-col p-3.5">
          <div className="rounded-xl border border-white/[0.07] bg-[#171719] p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] text-white/35">Pedido #1042</p>
                <p className="mt-1 text-[15px] font-medium text-white/80">Llega hoy · 14:00–16:00</p>
                <p className="mt-0.5 text-[12px] text-white/45">Cafetera Aura · Providencia</p>
              </div>
              <IconTruck size={18} stroke={1.5} className="shrink-0 text-white/40" />
            </div>
            <div className="mt-4 h-1 rounded-full bg-white/[0.06]">
              <div className="h-full w-[76%] rounded-full bg-white/40" />
            </div>
          </div>

          <div className="mt-3 space-y-0">
            {[
              ['Pedido confirmado', '09:12', true],
              ['En camino', '13:05', true],
              ['Entregado', 'Próximo', false],
            ].map(([label, time, done], index, list) => (
              <div key={label as string} className="relative flex items-center gap-2.5 pb-3">
                {index < list.length - 1 && (
                  <span className="absolute top-4 bottom-0 left-[7px] w-px bg-white/[0.07]" />
                )}
                <span
                  className={`relative z-10 h-3.5 w-3.5 rounded-full border ${
                    done
                      ? 'border-[#52CE5E]/30 bg-[#52CE5E]/20'
                      : 'border-white/10 bg-[#131415]'
                  }`}
                />
                <p className="text-[13px] text-white/65">{label as string}</p>
                <span className="ml-auto text-[11px] text-white/30">{time as string}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
            <IconBrandWhatsapp size={14} stroke={1.8} className="text-[#52CE5E]/75" />
            <p className="text-[12px] font-medium text-white/60">Cliente notificado por WhatsApp</p>
          </div>
        </div>
      </Card>
    </GlowFrame>
  )
}

function ReturnMockup() {
  return (
    <GlowFrame background="fondo-glow-postventa8.webp" flushBottomLeft borderless>
      <Card
        icon={<IconRefresh size={16} stroke={1.7} />}
        title="Devolución"
        status="Autogestión"
        monochrome
        cornerClass="rounded-tr-xl rounded-bl-xl"
      >
        <div className="flex h-full flex-col p-3.5">
          <p className="text-[12px] text-white/40">¿Qué ocurrió con tu pedido?</p>

          <div className="mt-3 space-y-2">
            {['Producto incorrecto', 'Producto dañado', 'Ya no lo necesito'].map((reason, index) => (
              <div
                key={reason}
                className={`flex w-full items-center rounded-lg border px-3 py-2.5 text-[13px] ${
                  index === 0
                    ? 'border-white/15 bg-white/[0.05] text-white/75'
                    : 'border-white/[0.07] bg-[#171719] text-white/40'
                }`}
              >
                {reason}
                {index === 0 && (
                  <IconCheck size={14} stroke={2} className="ml-auto text-white/70" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-2">
            <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
              <p className="text-[11px] text-white/30">Resolución</p>
              <p className="mt-0.5 text-[13px] font-medium text-white/70">Reembolso al medio de pago</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#52CE5E]/10 text-[#52CE5E]/75">
                <IconCheck size={12} stroke={2} />
              </span>
              <p className="text-[12px] font-medium text-white/60">Devolución disponible</p>
            </div>
          </div>
        </div>
      </Card>
    </GlowFrame>
  )
}

function ReorderMockup() {
  return (
    <GlowFrame background="fondo-glow-postventa1.webp" flushBottomRight borderless>
      <Card
        icon={<IconRepeat size={16} stroke={1.7} />}
        title="Recompra"
        status="Programada"
        monochrome
        cornerClass="rounded-tl-xl rounded-br-xl"
      >
        <div className="flex h-full flex-col p-3.5">
          <div className="rounded-xl border border-white/[0.07] bg-[#171719] p-3.5">
            <div className="flex items-center gap-3">
              <img
                src="cafetera-aura.png"
                alt=""
                className="h-14 w-14 rounded-lg bg-white object-cover"
              />
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-white/80">Cápsulas Aura · Pack 100</p>
                <p className="mt-0.5 text-[12px] text-white/40">Se agotan en ~3 días</p>
              </div>
            </div>
          </div>

          <div className="my-3 flex items-center gap-2 px-1">
            <span className="h-px flex-1 bg-white/[0.08]" />
            <IconSend size={14} stroke={1.6} className="text-white/30" />
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#202122] p-3.5">
            <div className="flex items-center gap-2">
              <IconBrandWhatsapp size={14} stroke={1.8} className="text-[#52CE5E]/75" />
              <p className="text-[12px] font-medium text-white/55">WhatsApp programado</p>
            </div>
            <p className="mt-2 text-[13px] leading-[1.45] text-white/75">
              Es hora de reponer tus cápsulas. ¿Quieres repetir el pedido?
            </p>
            <div className="mt-3 rounded-full border border-white/20 bg-[#1a1a1c] px-4 py-2.5 text-center text-[12px] font-medium text-white/65">
              Repetir pedido
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5">
            <p className="text-[12px] text-white/40">Conversión histórica</p>
            <p className="text-[20px] font-semibold text-white/85">41%</p>
          </div>
        </div>
      </Card>
    </GlowFrame>
  )
}

const POST_SALE_STAGES = [
  {
    id: 'order',
    label: 'Pedido',
    title: 'Compra confirmada',
    detail: 'Pedido #1042 sincronizado con Shopify',
    metric: 'Confirmado',
  },
  {
    id: 'tracking',
    label: 'Tracking',
    title: 'Seguimiento proactivo',
    detail: 'Notificaciones automáticas en cada cambio de estado',
    metric: '4 eventos',
  },
  {
    id: 'support',
    label: 'Soporte',
    title: 'Resolución sin fricción',
    detail: 'IA responde y escala excepciones con todo el contexto',
    metric: '92% autónomo',
  },
  {
    id: 'return',
    label: 'Devolución',
    title: 'Devolución autogestionada',
    detail: 'Validación, etiqueta y reembolso en el mismo flujo',
    metric: '3 min',
  },
  {
    id: 'reorder',
    label: 'Recompra',
    title: 'Recompra activada',
    detail: 'Recordatorio personalizado según consumo estimado',
    metric: '41% conversión',
  },
] as const

export function SalesJourneyGrid() {
  return (
    <>
      <div className="inquiry__cell">
        <ConsultationMockup />
      </div>
      <div className="inquiry__cell">
        <CheckoutMockup />
      </div>
      <div className="inquiry__cell">
        <RecoveryMockup />
      </div>
      <div className="inquiry__wide">
        <JourneyFlow
          title="De anuncio a pago"
          subtitle="Cada etapa comparte contexto, datos y métricas"
          stages={SALE_STAGES}
        />
      </div>
    </>
  )
}

export function PostSaleJourneyGrid() {
  return (
    <>
      <div className="inquiry__cell">
        <TrackingMockup />
      </div>
      <div className="inquiry__cell">
        <ReturnMockup />
      </div>
      <div className="inquiry__cell">
        <ReorderMockup />
      </div>
      <div className="inquiry__wide">
        <JourneyFlow
          title="De entrega a recompra"
          subtitle="Postventa conectada para fidelizar y volver a vender"
          stages={POST_SALE_STAGES}
          background="fondo-glow-1600x900@2x (10).webp"
        />
      </div>
    </>
  )
}
