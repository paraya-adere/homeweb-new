import * as Switch from '@radix-ui/react-switch'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconExternalLink,
  IconMessageCircle,
  IconSend,
  IconShoppingCart,
  IconSparkles,
  IconUsers,
} from '@tabler/icons-react'

const STEPS = [
  {
    id: 'audience',
    icon: IconUsers,
    label: 'Audiencia',
    value: 'Carritos abandonados',
    detail: '2.400 contactos',
  },
  {
    id: 'message',
    icon: IconMessageCircle,
    label: 'Mensaje',
    value: 'Recuperación invierno',
    detail: 'Plantilla aprobada',
  },
  {
    id: 'schedule',
    icon: IconClock,
    label: 'Envío',
    value: 'Hoy, 18:00',
    detail: 'Zona horaria local',
  },
] as const

function CampaignToggle({ checked = false, label }: { checked?: boolean; label: string }) {
  return (
    <Switch.Root
      defaultChecked={checked}
      className="relative h-5 w-9 shrink-0 rounded-full bg-white/10 outline-none transition-colors data-[state=checked]:bg-[#FFD540]"
      aria-label={label}
    >
      <Switch.Thumb className="block h-4 w-4 translate-x-0.5 rounded-full bg-white shadow-sm transition-transform data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-[#0C0C0D]" />
    </Switch.Root>
  )
}

function CampaignSetup() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#131415]">
      <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-4 py-3.5 sm:px-5">
        <div>
          <p className="text-[10px] font-medium tracking-[0.16em] text-white/40 uppercase">
            Nueva campaña
          </p>
          <h3 className="mt-1 text-[16px] font-semibold text-white">
            Recuperación de carritos
          </h3>
        </div>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <span className="inline-flex shrink-0 cursor-default items-center gap-1 rounded-full border border-[#52CE5E]/10 bg-[#52CE5E]/[0.05] px-2 py-1 text-[9px] font-medium whitespace-nowrap text-[#52CE5E]/80">
              <IconCheck size={11} stroke={2} />
              Lista para enviar
            </span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={6}
              className="z-50 rounded-md border border-white/10 bg-[#1a1a1a] px-2.5 py-1.5 text-[10px] text-white shadow-xl"
            >
              Audiencia, plantilla y horario validados
              <Tooltip.Arrow className="fill-[#1a1a1a]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <Tabs.Root defaultValue="message" className="flex min-h-0 flex-1 flex-col">
        <Tabs.List className="grid grid-cols-3 border-b border-white/[0.07] px-2">
          {STEPS.map((step) => {
            const StepIcon = step.icon
            return (
              <Tabs.Trigger
                key={step.id}
                value={step.id}
                className="group relative flex items-center justify-center gap-1.5 px-2 py-3 text-[10px] font-medium text-white/35 outline-none transition-colors hover:text-white/65 data-[state=active]:text-white"
              >
                <StepIcon size={13} stroke={1.6} />
                {step.label}
                <span className="absolute inset-x-4 bottom-0 h-px scale-x-0 bg-[#FFD540]/70 transition-transform group-data-[state=active]:scale-x-100" />
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>

        <div className="min-h-0 flex-1 p-4 sm:p-5">
          <Tabs.Content value="message" className="space-y-3 outline-none">
            <div>
              <p className="mb-1.5 text-[10px] font-medium text-white/40">Plantilla aprobada</p>
              <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5">
                <div>
                  <p className="text-[12px] font-medium text-white/80">
                    Recuperación de carrito · v2
                  </p>
                  <p className="text-[10px] text-white/30">Marketing · Español</p>
                </div>
                <IconCheck size={13} stroke={2} className="text-[#52CE5E]" />
              </div>
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-medium text-white/40">Mensaje</p>
              <div className="rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5 text-[11px] leading-relaxed text-white/60">
                Hola, {'{{1}}'}. Dejaste productos en tu carrito. Los guardamos para ti por 24
                horas.
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="audience" className="space-y-3 outline-none">
            <div className="rounded-lg border border-white/[0.07] bg-[#0C0C0D] p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-medium text-white/80">Carritos abandonados</p>
                  <p className="text-[10px] text-white/30">Últimas 24 horas · Chile</p>
                </div>
                <span className="text-[18px] font-semibold text-[#FFD540]">2.400</span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[78%] rounded-full bg-[#FFD540]/70" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Con teléfono válido', 'Sin compra', 'Consentimiento activo'].map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/40"
                >
                  {filter}
                </span>
              ))}
            </div>
          </Tabs.Content>

          <Tabs.Content value="schedule" className="space-y-2 outline-none">
            <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5">
              <div>
                <p className="text-[11px] font-medium text-white/75">Hoy, 18:00</p>
                <p className="text-[9px] text-white/30">Zona horaria de cada contacto</p>
              </div>
              <IconClock size={14} stroke={1.5} className="text-white/35" />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5">
              <div>
                <p className="text-[11px] font-medium text-white/75">Optimizar horario</p>
                <p className="text-[9px] text-white/30">Envía cuando cada contacto está activo</p>
              </div>
              <CampaignToggle checked label="Optimizar horario" />
            </div>
          </Tabs.Content>
        </div>
      </Tabs.Root>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] bg-[#0C0C0D]/45 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFD540]/10 text-[#FFD540]/75">
            <IconSend size={13} stroke={2} />
          </span>
          <div>
            <p className="text-[11px] font-medium text-white">2.400 mensajes programados</p>
            <p className="text-[9px] text-white/35">WhatsApp Business · Aura Store</p>
          </div>
        </div>
        <CampaignToggle checked label="Campaña activa" />
      </div>
    </div>
  )
}

function CampaignCanvas() {
  const journey = [
    {
      icon: IconShoppingCart,
      eyebrow: 'Disparador',
      title: 'Carrito abandonado',
      detail: 'Detectado en Shopify',
    },
    {
      icon: IconClock,
      eyebrow: 'Espera inteligente',
      title: '30 minutos sin compra',
      detail: 'Evita mensajes innecesarios',
    },
    {
      icon: IconMessageCircle,
      eyebrow: 'Acción',
      title: 'WhatsApp personalizado',
      detail: 'Plantilla · Recuperación v2',
      active: true,
    },
    {
      icon: IconCheck,
      eyebrow: 'Objetivo',
      title: 'Compra recuperada',
      detail: 'Conversión atribuida',
    },
  ] as const

  return (
    <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0C0C0D]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
        <div>
          <p className="text-[12px] font-semibold text-white/80">Automatización</p>
          <p className="text-[10px] text-white/30">Del abandono a la conversión</p>
        </div>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <span className="cursor-default rounded-full border border-[#52CE5E]/10 bg-[#52CE5E]/[0.05] px-2.5 py-1 text-[9px] font-medium text-[#52CE5E]/80">
              Activa
            </span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={6}
              className="z-50 rounded-md border border-white/10 bg-[#1a1a1a] px-2.5 py-1.5 text-[10px] text-white shadow-xl"
            >
              Monitoreando nuevos carritos en tiempo real
              <Tooltip.Arrow className="fill-[#1a1a1a]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-3">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative z-10 w-full max-w-[310px] space-y-1.5">
          {journey.map((node, index) => {
            const NodeIcon = node.icon
            return (
              <div key={node.title}>
                <div
                  className={`engage-step rounded-xl border px-3 py-2.5 ${
                    'active' in node
                      ? 'border-[#FFD540]/15 bg-[#131415]'
                      : 'border-white/[0.07] bg-[#131415]'
                  }`}
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        'active' in node
                          ? 'bg-[#FFD540]/10 text-[#FFD540]'
                          : 'bg-white/[0.05] text-white/40'
                      }`}
                    >
                      <NodeIcon size={14} stroke={1.6} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[8px] font-medium tracking-[0.12em] text-white/25 uppercase">
                        {node.eyebrow}
                      </p>
                      <p className="text-[11px] font-semibold text-white/80">{node.title}</p>
                      <p className="truncate text-[9px] text-white/30">{node.detail}</p>
                    </div>
                    {'active' in node && (
                      <span className="ml-auto rounded-full border border-[#FFD540]/10 bg-[#FFD540]/[0.04] px-2 py-1 text-[8px] text-[#FFD540]/65">
                        Envío
                      </span>
                    )}
                  </div>
                </div>
                {index < journey.length - 1 && (
                  <div className="mx-auto h-3 w-px bg-gradient-to-b from-white/18 to-white/5" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-white/[0.07] bg-[#131415]">
        <div className="px-3 py-2.5">
          <p className="text-[14px] font-semibold text-white">2.400</p>
          <p className="text-[8px] text-white/30">contactos activos</p>
        </div>
        <div className="border-l border-white/[0.07] px-3 py-2.5">
          <p className="text-[14px] font-semibold text-[#FFD540]">35%</p>
          <p className="text-[8px] text-white/30">carritos recuperados</p>
        </div>
      </div>
    </div>
  )
}

function MessagePreview() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#131415]">
      <div className="flex items-center gap-2.5 border-b border-white/[0.07] px-3.5 py-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#52CE5E]/10 text-[10px] font-bold text-[#52CE5E]">
          AS
        </span>
        <div>
          <p className="text-[12px] font-semibold text-white">Aura Store</p>
          <p className="text-[9px] text-[#52CE5E]/75">WhatsApp Business</p>
        </div>
        <span className="ml-auto rounded-full bg-white/[0.06] px-2 py-1 text-[9px] text-white/40">
          Vista previa
        </span>
      </div>

      <div className="relative flex flex-1 items-center bg-[#0C0C0D] px-3.5 py-4">
        <div className="engage-message ml-auto max-w-[94%] rounded-2xl rounded-tr-[5px] border border-white/[0.07] bg-[#161817] px-3.5 py-3 text-[12px] leading-snug text-[#e8e8e8]">
          <p className="font-medium">Hola, María</p>
          <p className="mt-1.5 text-white/80">
            Dejaste 2 productos en tu carrito. Los guardamos para ti por 24 horas.
          </p>

          <div className="mt-2.5 overflow-hidden rounded-xl border border-white/[0.07] bg-[#131415]">
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2 text-[11px] font-medium text-white/75">
              <IconExternalLink size={14} stroke={1.5} className="text-white/35" />
              Completar compra
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-[11px] font-medium text-white/75">
              <IconShoppingCart size={14} stroke={1.5} className="text-white/35" />
              Ir a mi carrito
            </div>
          </div>
          <p className="mt-1.5 text-right text-[8px] text-white/35">17:58 ✓✓</p>
        </div>

        <span className="engage-spark absolute top-5 right-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#FFD540]/10 bg-[#FFD540]/[0.05] text-[#FFD540]/65 ring-2 ring-[#0C0C0D]">
          <IconSparkles size={13} stroke={1.5} />
        </span>
      </div>

      <div className="grid grid-cols-3 border-t border-white/[0.07]">
        {[
          ['98%', 'entrega'],
          ['42%', 'lectura'],
          ['35%', 'conversión'],
        ].map(([value, label], index) => (
          <div
            key={label}
            className={`px-2 py-2.5 text-center ${index ? 'border-l border-white/[0.07]' : ''}`}
          >
            <p className={`text-[12px] font-semibold ${index === 2 ? 'text-[#FFD540]' : 'text-white/75'}`}>
              {value}
            </p>
            <p className="text-[8px] text-white/25">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function EngageMockup() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="engage-linear flex h-[580px] flex-col overflow-hidden bg-[#0C0C0D] sm:h-[640px] lg:h-[700px]">
        <div className="relative flex min-h-0 flex-1 items-center overflow-hidden px-4 py-5">
          <div className="engage-readable relative z-10 mx-auto w-full max-w-[1100px] origin-center xl:scale-[1.02]">
            <div className="grid min-h-0 h-full items-stretch gap-3 max-lg:[&>*:first-child]:hidden max-lg:[&>*:last-child]:hidden lg:min-h-[555px] lg:grid-cols-[minmax(250px,0.8fr)_minmax(330px,1.15fr)_minmax(260px,0.85fr)]">
              <CampaignSetup />
              <CampaignCanvas />
              <MessagePreview />
            </div>

            <div className="mt-3 hidden gap-2 sm:grid sm:grid-cols-3 lg:grid-cols-[minmax(250px,0.8fr)_minmax(330px,1.15fr)_minmax(260px,0.85fr)]">
              {[
                ['01', 'Segmenta', '2.400 contactos calificados'],
                ['02', 'Automatiza', 'Envío inteligente por WhatsApp'],
                ['03', 'Convierte', '35% de carritos recuperados'],
              ].map(([number, title, detail], index) => (
                <div
                  key={number}
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-[#131415] px-3 py-2.5"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${
                      index === 2
                        ? 'bg-[#FFD540]/10 text-[#FFD540]'
                        : 'bg-white/[0.05] text-white/35'
                    }`}
                  >
                    {number}
                  </span>
                  <div>
                    <p className="text-[11px] font-medium text-[#e8e8e8]">{title}</p>
                    <p className="text-[9px] text-[#666]">{detail}</p>
                  </div>
                  {index < 2 && (
                    <IconArrowRight
                      size={12}
                      stroke={1.5}
                      className="ml-auto hidden text-white/15 sm:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  )
}
