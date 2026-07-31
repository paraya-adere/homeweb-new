import type { ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  IconBell,
  IconBrain,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandX,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconDatabase,
  IconDotsVertical,
  IconInbox,
  IconMail,
  IconPackage,
  IconPlus,
  IconPuzzle,
  IconSearch,
  IconSend,
  IconSettings,
  IconSparkles,
  IconUsers,
} from '@tabler/icons-react'

function Frame({
  icon,
  title,
  status,
  children,
  cornerClass = 'rounded-2xl',
}: {
  icon: ReactNode
  title: string
  status: string
  children: ReactNode
  cornerClass?: string
}) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div
        className={`flex h-full min-h-[420px] flex-col overflow-hidden border border-white/[0.08] bg-[#0C0C0D] shadow-[0_22px_55px_rgba(0,0,0,0.28)] ${cornerClass}`}
      >
        <header className="flex h-12 shrink-0 items-center gap-2.5 border-b border-white/[0.07] bg-[#131415] px-3.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.055] text-white/55">
            {icon}
          </span>
          <p className="text-[13px] font-semibold text-white/85">{title}</p>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className="ml-auto inline-flex cursor-default items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.035] px-2 py-1 text-[9px] font-medium text-white/45">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52CE5E]" />
                {status}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={6}
                className="z-50 rounded-md border border-white/10 bg-[#1a1a1a] px-2.5 py-1.5 text-[10px] text-white shadow-xl"
              >
                Sincronizado en tiempo real
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

export function AgentFeatureMockup() {
  return (
    <Frame
      icon={<IconBrain size={14} stroke={1.7} />}
      title="Mi agente · Aura Ventas"
      status="Publicado"
      cornerClass="rounded-tl-2xl rounded-br-2xl"
    >
      <div className="relative h-full min-h-0 overflow-hidden bg-[#0C0C0D]">
        <div className="absolute inset-0 pl-[30%] opacity-45">
          <div className="flex h-full flex-col p-3">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold text-white/60">Vista general</p>
                <p className="text-[8px] text-white/22">Últimos 30 días</p>
              </div>
              <span className="rounded-md border border-white/[0.07] px-2 py-1 text-[8px] text-white/25">
                Actualizado ahora
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                ['Interacciones', '1.284'],
                ['Conversión', '35%'],
                ['Derivación', '8%'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="h-[68px] rounded-lg border border-white/[0.07] bg-[#131415] p-2.5"
                >
                  <p className="text-[7px] tracking-[0.06em] text-white/25 uppercase">{label}</p>
                  <p className="mt-1 text-[16px] font-semibold text-white/70">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex h-[100px] items-end gap-1.5 rounded-lg border border-white/[0.07] bg-[#131415] p-3">
              {[38, 54, 46, 70, 60, 82, 74, 92].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-sm bg-white/[0.08]"
                  style={{ height: `${height * 0.62}px` }}
                />
              ))}
            </div>
            <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
              {['Personalidad', 'Flujos activos', 'Base de conocimiento', 'Versiones'].map(
                (title) => (
                  <div
                    key={title}
                    className="rounded-lg border border-white/[0.07] bg-[#131415] p-3"
                  >
                    <p className="text-[9px] font-medium text-white/45">{title}</p>
                    <div className="mt-3 h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
                    <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/[0.045]" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,13,0)_38%,rgba(12,12,13,0.18)_66%,rgba(12,12,13,0.82)_100%)]" />

        <div className="absolute top-3 bottom-3 left-3 z-10 flex w-[84%] max-w-[390px] flex-col overflow-hidden rounded-xl border border-white/[0.1] bg-[#111213] shadow-[0_22px_55px_rgba(0,0,0,0.55)] sm:w-[68%]">
          <div className="flex h-14 shrink-0 items-center gap-3 border-b border-white/[0.07] px-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.045] text-white/45">
              <IconBrain size={16} stroke={1.6} />
            </span>
            <div>
              <p className="text-[14px] font-semibold text-white/80">Configuración del agente</p>
              <p className="text-[10px] text-white/30">Información general sobre tu negocio</p>
            </div>
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#52CE5E]" />
          </div>

          <div className="min-h-0 flex-1 overflow-hidden p-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[10px] font-medium text-white/30">Nombre</p>
                <p className="mt-1 text-[13px] font-semibold text-white/75">Aura Ventas</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white/30">Zona horaria</p>
                <p className="mt-1 text-[13px] font-medium text-white/65">Santiago</p>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
              <div className="flex items-center gap-2">
                <IconSparkles size={14} stroke={1.6} className="text-white/55" />
                <p className="text-[11px] font-semibold text-white/65">Objetivo principal</p>
              </div>
              <p className="mt-2 text-[12px] leading-[1.5] text-white/52">
                Entender cada consulta, recomendar el producto correcto y acompañar al cliente
                hasta completar su compra.
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-[10px] font-medium tracking-[0.08em] text-white/28 uppercase">
                Personalidad
              </p>
              <p className="truncate text-[11px] text-white/55">Clara · cercana · resolutiva</p>
            </div>

            <div className="mt-3 border-t border-white/[0.07] pt-3">
              <p className="mb-2.5 text-[10px] font-medium tracking-[0.08em] text-white/28 uppercase">
                Conocimiento conectado
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  [IconPackage, 'Shopify', 'Stock y pedidos'],
                  [IconPackage, 'Catálogo', '1.248 productos'],
                ].map(([Icon, name, detail]) => {
                  const SourceIcon = Icon as typeof IconDatabase
                  return (
                    <div
                      key={name as string}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2"
                    >
                      {name === 'Shopify' ? (
                        <img src="shopify.svg" alt="" className="h-[13px] w-[13px] shrink-0" />
                      ) : (
                        <SourceIcon
                          size={13}
                          stroke={1.5}
                          className="shrink-0 text-white/35"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-white/65">{name as string}</p>
                        <p className="truncate text-[9px] text-white/25">{detail as string}</p>
                      </div>
                      <IconCheck
                        size={10}
                        stroke={2}
                        className={`ml-auto shrink-0 ${
                          name === 'Shopify' ? 'text-[#95BF47]' : 'text-white/55'
                        }`}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-3 border-t border-white/[0.07] pt-3">
              <p className="mb-2 text-[10px] font-medium tracking-[0.08em] text-white/28 uppercase">
                Acciones activas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Recomendar', 'Cotizar', 'Escalar'].map((action) => (
                  <span
                    key={action}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/45"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-between border-t border-white/[0.07] bg-[#131415] px-4 py-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52CE5E]" />
              Operando 24/7
            </span>
            <button
              type="button"
              className="rounded-full bg-white px-3.5 py-2 text-[10px] font-semibold text-[#18181B]"
            >
              Probar agente
            </button>
          </div>
        </div>
      </div>
    </Frame>
  )
}

const HELPDESK_COLUMNS = [
  {
    title: 'Esperando respuesta',
    icon: IconClock,
    count: 5,
    accent: '#FFD540',
    tickets: [
      ['Fernando Rojas', 'WhatsApp', 'Sí, agrégala a mi carrito', '12m'],
      ['Camila Soto', 'Instagram', '¿Me sirve el cambio mañana?', '18m'],
      ['Elena Muñoz', 'Email', 'Faltan dos unidades del pedido', '24m'],
    ],
  },
  {
    title: 'En atención',
    icon: IconUsers,
    count: 4,
    accent: '#8B9CFF',
    tickets: [
      ['María Soto', 'WhatsApp', '¿Tienen stock disponible?', '2m'],
      ['Jorge Peña', 'Facebook', 'Necesito cambiar mi pedido', '8m'],
      ['Diego Silva', 'X', 'Quiero cotizar para mi oficina', '11m'],
    ],
  },
  {
    title: 'Resueltas',
    icon: IconCheck,
    count: 38,
    accent: '#52CE5E',
    tickets: [
      ['Laura Campos', 'WhatsApp', 'Pedido confirmado, gracias', '3m'],
      ['Andrés Vidal', 'Email', 'El reembolso ya fue recibido', '9m'],
      ['Paula Reyes', 'TikTok', 'Listo, agendé el despacho', '16m'],
    ],
  },
] as const

const HELPDESK_CHANNEL_ICONS = {
  WhatsApp: IconBrandWhatsapp,
  Instagram: IconBrandInstagram,
  Email: IconMail,
  Facebook: IconBrandFacebook,
  X: IconBrandX,
  TikTok: IconBrandTiktok,
} as const

export function HelpdeskFeatureMockup() {
  return (
    <div className="flex h-full min-h-[420px] overflow-hidden rounded-tr-2xl rounded-bl-2xl border border-white/[0.09] bg-[#0C0C0D] shadow-[0_22px_55px_rgba(0,0,0,0.38)]">
      <aside className="hidden w-11 shrink-0 flex-col items-center border-r border-white/[0.07] bg-[#0E0F10] py-2.5 lg:flex">
        {[IconPlus, IconPuzzle, IconSearch, IconSettings].map((Icon, index) => (
          <span
            key={index}
            className={`mb-1 flex h-8 w-8 items-center justify-center rounded-lg ${
              index === 1 ? 'bg-white/[0.055] text-white/65' : 'text-white/28'
            }`}
          >
            <Icon size={14} stroke={1.5} />
          </span>
        ))}
        <img
          src="adereso-isotipo.png"
          alt=""
          className="mt-auto h-7 w-7 rounded-full object-cover"
        />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center gap-3 border-b border-white/[0.07] bg-[#111213] px-3">
          <img src="adereso-isotipo.png" alt="" className="h-6 w-6 rounded-full object-cover" />
          <span className="text-[12px] font-semibold text-white/78">Adereso</span>
          <nav className="ml-2 flex min-w-0 items-center gap-1">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.045] px-2.5 py-1.5 text-[10px] font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6775FF]" />
              <IconInbox size={11} stroke={1.6} />
              Bandeja de entrada
            </span>
            <span className="hidden items-center gap-1 px-2 py-1.5 text-[10px] text-white/30 md:inline-flex">
              Analítica
              <IconChevronDown size={10} stroke={1.5} />
            </span>
            <span className="hidden px-2 py-1.5 text-[10px] text-white/30 md:inline-flex">
              Módulos
            </span>
            <span className="hidden px-2 py-1.5 text-[10px] text-white/30 lg:inline-flex">
              Administrador
            </span>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <span className="relative text-white/30">
              <IconBell size={14} stroke={1.5} />
              <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-[#F87171]" />
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B7C99] text-[8px] font-semibold text-white">
              PL
            </span>
            <span className="hidden text-[10px] text-white/55 xl:inline">Pedro L.</span>
          </div>
        </header>

        <div className="flex h-10 shrink-0 items-center gap-2 border-b border-white/[0.07] bg-[#0F1011] px-3">
          {['Todas', 'WhatsApp', 'Instagram', 'Email'].map((channel, index) => (
            <span
              key={channel}
              className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
                index > 1 ? 'hidden sm:inline-flex' : ''
              } ${
                index === 0
                  ? 'border border-white/[0.08] bg-white/[0.055] text-white/65'
                  : 'text-white/28'
              }`}
            >
              {channel}
            </span>
          ))}
          <span className="ml-auto hidden text-[9px] text-white/25 sm:inline">
            Orden: más urgente
          </span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 p-2 lg:grid-cols-3">
          {HELPDESK_COLUMNS.map((column, columnIndex) => {
            const ColumnIcon = column.icon
            return (
              <div
                key={column.title}
                className={`min-w-0 flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#0F1011] ${
                  columnIndex === 0 ? 'flex' : 'hidden lg:flex'
                }`}
              >
                <div className="flex h-11 shrink-0 items-center gap-2 border-b border-white/[0.07] bg-[#161718] px-2.5">
                  <ColumnIcon size={13} stroke={1.6} style={{ color: column.accent }} />
                  <p className="min-w-0 flex-1 truncate text-[11px] font-semibold text-white/65">
                    {column.title}
                  </p>
                  <span className="rounded-full bg-white/[0.055] px-1.5 py-0.5 text-[9px] text-white/35">
                    {column.count}
                  </span>
                  <IconDotsVertical size={12} stroke={1.5} className="text-white/20" />
                </div>

                <div className="min-h-0 flex-1 space-y-1.5 overflow-hidden p-1.5">
                  {column.tickets.map(([name, channel, message, time], index) => {
                    const ChannelIcon =
                      HELPDESK_CHANNEL_ICONS[
                        channel as keyof typeof HELPDESK_CHANNEL_ICONS
                      ]
                    return (
                      <div
                        key={name}
                        className={`rounded-lg border p-2.5 ${
                          index === 0
                            ? 'border-[#6674FF]/25 bg-white/[0.045]'
                            : 'border-white/[0.065] bg-[#131415]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.07] text-white/75">
                            <ChannelIcon size={14} stroke={1.7} />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-[11px] font-semibold text-white/68">
                              {name}
                            </p>
                            <p className="text-[9px] text-white/35">{channel}</p>
                          </div>
                          <span className="ml-auto shrink-0 text-[8px] text-white/25">
                            {time}
                          </span>
                        </div>
                        <p className="mt-2 line-clamp-2 text-[10px] leading-[1.4] text-white/42">
                          {message}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 text-[8px] text-white/22">
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: column.accent }}
                            />
                            #{7100 + index + column.count}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B7C99] text-[6px] font-semibold text-white/75">
                              PL
                            </span>
                            <IconDotsVertical
                              size={10}
                              stroke={1.5}
                              className="text-white/18"
                            />
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function EngageFeatureMockup() {
  return (
    <div className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-tl-2xl rounded-br-2xl border border-white/[0.09] bg-[#0C0C0D] shadow-[0_22px_55px_rgba(0,0,0,0.38)]">
      <header className="flex h-12 shrink-0 items-center gap-2.5 border-b border-white/[0.07] bg-[#111213] px-3.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.055] text-white/55">
          <IconSend size={14} stroke={1.7} />
        </span>
        <div>
          <p className="text-[12px] font-semibold text-white/78">Analítica de campañas</p>
          <p className="text-[9px] text-white/28">Marketing por WhatsApp</p>
        </div>
        <button
          type="button"
          className="ml-auto rounded-md bg-[#E4E4E7] px-3 py-1.5 text-[9px] font-semibold text-[#18181B]"
        >
          Crear campaña +
        </button>
      </header>

      <Tabs.Root defaultValue="analytics" className="flex min-h-0 flex-1 flex-col">
        <Tabs.List className="grid h-10 shrink-0 grid-cols-2 border-b border-white/[0.07] bg-[#0F1011] px-2">
          <Tabs.Trigger
            value="analytics"
            className="border-b border-transparent text-[9px] font-medium text-white/30 outline-none data-[state=active]:border-white/55 data-[state=active]:text-white/70"
          >
            Campaña activa
          </Tabs.Trigger>
          <Tabs.Trigger
            value="sends"
            className="border-b border-transparent text-[9px] font-medium text-white/30 outline-none data-[state=active]:border-white/55 data-[state=active]:text-white/70"
          >
            Envíos individuales
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="analytics" className="flex min-h-0 flex-1 flex-col p-2.5 outline-none">
          <div className="flex shrink-0 items-center gap-3 rounded-lg border border-white/[0.07] bg-[#151617] p-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.055] text-white/55">
              <IconBrandWhatsapp size={15} stroke={1.7} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-white/70">
                Recuperación de carritos · Julio
              </p>
              <p className="text-[8px] text-white/28">Carritos abandonados · envío automático</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.035] px-2 py-1 text-[8px] text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
              Activa
            </span>
          </div>

          <div className="mt-2 grid shrink-0 grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ['2.400', 'Mensajes'],
              ['98%', 'Entregados'],
              ['82%', 'Leídos'],
              ['35%', 'Recuperados'],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-lg border border-white/[0.07] bg-[#131415] p-2.5"
              >
                <span
                  className={`absolute inset-y-0 left-0 w-0.5 ${
                    index === 3 ? 'bg-white/55' : 'bg-white/20'
                  }`}
                />
                <p
                  className={`text-[18px] font-semibold tracking-[-0.03em] ${
                    index === 3 ? 'text-white/90' : 'text-white/72'
                  }`}
                >
                  {value}
                </p>
                <p className="mt-1 text-[8px] text-white/28">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 grid min-h-0 flex-1 grid-cols-1 gap-2 max-sm:[&>*:last-child]:hidden sm:grid-cols-[0.82fr_1.18fr]">
            <div className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#131415]">
              <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
                <IconBrandWhatsapp size={12} stroke={1.7} className="text-white/45" />
                <p className="text-[9px] font-semibold text-white/55">Vista del mensaje</p>
              </div>
              <div className="flex min-h-0 flex-1 items-center p-2.5">
                <div className="ml-auto w-full rounded-xl rounded-tr-[4px] border border-white/[0.08] bg-[#181819] p-2.5">
                  <p className="text-[10px] font-semibold text-white/75">Hola, María</p>
                  <p className="mt-1 text-[9px] leading-[1.4] text-white/42">
                    Tu cafetera sigue disponible. La guardamos para ti por 24 horas.
                  </p>
                  <div className="mt-2 overflow-hidden rounded-lg border border-white/[0.08] bg-[#111213]">
                    <img
                      src="cafetera-aura.png"
                      alt="Cafetera Aura"
                      className="h-[74px] w-full bg-[#E4E4E7] object-contain"
                    />
                    <div className="p-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[9px] font-semibold text-white/68">Cafetera Aura Pro</p>
                          <p className="mt-0.5 text-[8px] text-white/28">Despacho gratis</p>
                        </div>
                        <p className="text-[10px] font-semibold text-white/75">$84.990</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 rounded-full bg-[#E4E4E7] px-2.5 py-1.5 text-center text-[8px] font-semibold text-[#18181B]">
                    Volver al carrito
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#131415]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2">
                <p className="text-[9px] font-semibold text-white/55">Últimos envíos</p>
                <span className="text-[8px] text-white/22">Tiempo real</span>
              </div>
              <div className="min-h-0 flex-1">
                {[
                  ['María Soto', 'Leído', 'Compra recuperada', '#D4D4D8'],
                  ['Jorge Peña', 'Entregado', 'Esperando respuesta', '#A1A1AA'],
                  ['Camila Rojas', 'Leído', 'Compra recuperada', '#D4D4D8'],
                  ['Diego Silva', 'Enviado', 'Mensaje saliente', '#71717A'],
                ].map(([name, status, result, color]) => (
                  <div
                    key={name}
                    className="grid grid-cols-[1fr_0.65fr_1fr] items-center gap-2 border-b border-white/[0.055] px-3 py-2 last:border-0"
                  >
                    <p className="truncate text-[9px] font-medium text-white/55">{name}</p>
                    <span className="inline-flex items-center gap-1 text-[8px] text-white/30">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
                      {status}
                    </span>
                    <p className="truncate text-right text-[8px] text-white/25">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="sends" className="min-h-0 flex-1 p-3 outline-none">
          <div className="h-full overflow-hidden rounded-lg border border-white/[0.07] bg-[#131415]">
            {[
              ['María Soto', '+56 9 8123 4567', 'Leído'],
              ['Jorge Peña', '+56 9 7345 8890', 'Entregado'],
              ['Camila Rojas', '+56 9 6123 9087', 'Leído'],
              ['Diego Silva', '+56 9 9981 2456', 'Enviado'],
            ].map(([name, phone, status]) => (
              <div
                key={name}
                className="flex items-center border-b border-white/[0.06] px-3 py-2.5 last:border-0"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-[8px] font-semibold text-white/45">
                  {name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
                </span>
                <div className="ml-2">
                  <p className="text-[10px] font-medium text-white/60">{name}</p>
                  <p className="text-[8px] text-white/25">{phone}</p>
                </div>
                <span className="ml-auto text-[9px] text-white/45">{status}</span>
              </div>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
