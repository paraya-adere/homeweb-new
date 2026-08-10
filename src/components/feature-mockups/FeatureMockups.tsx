import * as Tabs from '@radix-ui/react-tabs'
import {
  IconActivity,
  IconBell,
  IconBolt,
  IconBox,
  IconBrain,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconBrandX,
  IconBuildingStore,
  IconChartBar,
  IconChartDots,
  IconChartLine,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconDotsVertical,
  IconFileText,
  IconHistory,
  IconInbox,
  IconLayoutSidebarLeftCollapse,
  IconMail,
  IconMessageQuestion,
  IconMessages,
  IconPackage,
  IconPlus,
  IconPuzzle,
  IconRobotFace,
  IconSearch,
  IconSend,
  IconSettings,
  IconSitemap,
  IconSparkles,
  IconTestPipe,
  IconUsers,
} from '@tabler/icons-react'

const AGENT_NAV = [
  {
    label: 'Construir',
    items: [
      { name: 'Mis Agentes', icon: IconRobotFace, active: true },
      { name: 'Activadores', icon: IconBolt },
      { name: 'Mapa', icon: IconSitemap },
      { name: 'Recursos Compartidos', icon: IconBox },
      { name: 'Tiendas', icon: IconBuildingStore },
    ],
  },
  {
    label: 'Contenido',
    items: [{ name: 'Conocimiento', icon: IconBrain }],
  },
  {
    label: 'Analítica',
    items: [
      { name: 'Analítica', icon: IconChartLine },
      { name: 'Diagrama', icon: IconChartDots },
      { name: 'Conversaciones', icon: IconMessages },
    ],
  },
  {
    label: 'Calidad',
    items: [
      { name: 'Tests', icon: IconTestPipe },
      { name: 'Diagnóstico', icon: IconActivity },
      { name: 'Versiones', icon: IconHistory },
    ],
  },
  {
    label: 'Extras',
    items: [
      { name: 'Uso', icon: IconChartBar },
      { name: 'Demos', icon: IconMessageQuestion },
      { name: 'Auditoría', icon: IconFileText },
    ],
  },
] as const

export function AgentFeatureMockup() {
  return (
    <div className="flex h-full min-h-[420px] overflow-hidden rounded-tl-2xl rounded-br-2xl border-t border-l border-white/[0.09] bg-[#0d0d0d] text-[13px] shadow-[0_22px_55px_rgba(0,0,0,0.38)]">
      <aside className="hidden w-[176px] shrink-0 flex-col overflow-hidden border-r border-white/[0.06] bg-[#0d0d0d] lg:flex">
        <div className="flex shrink-0 items-center gap-2 px-3.5 py-3.5">
          <img src="adereso-isotipo.png" alt="" className="h-6 w-6 rounded-full object-cover" />
          <span className="text-[13px] font-semibold tracking-tight text-white">
            Adereso Studio
          </span>
        </div>

        <nav className="min-h-0 flex-1 overflow-hidden px-2.5">
          {AGENT_NAV.map((section) => (
            <div key={section.label} className="mb-3.5">
              <p className="mb-1 px-2 text-[10px] font-medium tracking-[0.08em] text-white/30 uppercase">
                {section.label}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const ItemIcon = item.icon
                  const active = 'active' in item && item.active
                  return (
                    <li key={item.name}>
                      <span
                        className={`flex items-center gap-2 truncate rounded-md px-2.5 py-[7px] text-[12px] ${
                          active ? 'bg-white/[0.08] font-medium text-white' : 'text-white/45'
                        }`}
                      >
                        <ItemIcon
                          size={15}
                          stroke={1.5}
                          className={`shrink-0 ${active ? 'text-white/80' : 'text-white/40'}`}
                        />
                        <span className="truncate">{item.name}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="shrink-0 border-t border-white/[0.06] px-3.5 py-3">
          <span className="inline-flex items-center gap-2 text-[12px] text-white/40">
            <IconLayoutSidebarLeftCollapse size={15} stroke={1.5} />
            Contraer
          </span>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col bg-[#0f0f0f]">
        <header className="flex h-14 shrink-0 items-center gap-3 border-b border-white/[0.06] px-4 sm:px-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-white/60">
            <IconBrain size={16} stroke={1.6} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold text-white">Mi agente · Vera</p>
            <p className="text-[11px] text-white/35">Configuración general</p>
          </div>
          <span className="ml-auto inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-white/50">
            Publicado
          </span>
        </header>

        <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] font-medium tracking-[0.06em] text-white/30 uppercase">
                Nombre
              </p>
              <p className="mt-1 text-[14px] font-semibold text-white/80">Vera</p>
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-[0.06em] text-white/30 uppercase">
                Zona horaria
              </p>
              <p className="mt-1 text-[14px] font-medium text-white/70">Santiago</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/[0.07] bg-[#141414] p-3.5">
            <div className="flex items-center gap-2">
              <IconSparkles size={14} stroke={1.6} className="text-white/55" />
              <p className="text-[12px] font-semibold text-white/70">Objetivo principal</p>
            </div>
            <p className="mt-2 text-[12px] leading-[1.5] text-white/50">
              Entender cada consulta, recomendar el producto correcto y acompañar al cliente hasta
              completar su compra.
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-[10px] font-medium tracking-[0.08em] text-white/30 uppercase">
              Personalidad
            </p>
            <p className="truncate text-[12px] text-white/60">Clara · cercana · resolutiva</p>
          </div>

          <div className="mt-4 border-t border-white/[0.06] pt-4">
            <p className="mb-2.5 text-[10px] font-medium tracking-[0.08em] text-white/30 uppercase">
              Conocimiento conectado
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                ['Shopify', 'Stock y pedidos'],
                ['Catálogo', '1.248 productos'],
              ].map(([name, detail]) => (
                <div
                  key={name}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-[#141414] p-2.5"
                >
                  {name === 'Shopify' ? (
                    <img src="shopify.svg" alt="" className="h-4 w-4 shrink-0" />
                  ) : (
                    <IconPackage size={15} stroke={1.5} className="shrink-0 text-white/40" />
                  )}
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-white/70">{name}</p>
                    <p className="truncate text-[10px] text-white/30">{detail}</p>
                  </div>
                  <span className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
                    <IconCheck size={10} stroke={2.5} className="text-white" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 border-t border-white/[0.06] pt-4">
            <p className="mb-2.5 text-[10px] font-medium tracking-[0.08em] text-white/30 uppercase">
              Acciones activas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Recomendar', 'Cotizar', 'Escalar'].map((action) => (
                <span
                  key={action}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/50"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-white/[0.06] bg-[#0d0d0d] px-4 py-3 sm:px-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/40">
            <IconClock size={13} stroke={1.6} />
            Operando 24/7
          </span>
          <span className="text-[11px] font-medium text-white/55">
            Probar agente
          </span>
        </div>
      </div>
    </div>
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
    <div className="flex h-full min-h-[420px] overflow-hidden rounded-tr-2xl rounded-bl-2xl border-t border-r border-white/[0.09] bg-[#0C0C0D] shadow-[0_22px_55px_rgba(0,0,0,0.38)]">
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

        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div className="absolute inset-0 origin-top-left scale-[1.12] p-2.5 sm:scale-[1.18]">
            <div className="grid h-full min-h-0 grid-cols-2 gap-2.5">
              {HELPDESK_COLUMNS.map((column) => {
                const ColumnIcon = column.icon
                return (
                  <div
                    key={column.title}
                    className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#0F1011]"
                  >
                    <div className="flex h-12 shrink-0 items-center gap-2 border-b border-white/[0.07] bg-[#161718] px-3">
                      <ColumnIcon size={14} stroke={1.6} style={{ color: column.accent }} />
                      <p className="min-w-0 flex-1 truncate text-[12px] font-semibold text-white/70">
                        {column.title}
                      </p>
                      <span className="rounded-full bg-white/[0.055] px-1.5 py-0.5 text-[10px] text-white/35">
                        {column.count}
                      </span>
                      <IconDotsVertical size={13} stroke={1.5} className="text-white/20" />
                    </div>

                    <div className="min-h-0 flex-1 space-y-2 overflow-hidden p-2">
                      {column.tickets.map(([name, channel, message, time], index) => {
                        const ChannelIcon =
                          HELPDESK_CHANNEL_ICONS[
                            channel as keyof typeof HELPDESK_CHANNEL_ICONS
                          ]
                        return (
                          <div
                            key={name}
                            className={`rounded-xl border p-3 ${
                              index === 0
                                ? 'border-[#6674FF]/25 bg-white/[0.045]'
                                : 'border-white/[0.065] bg-[#131415]'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.07] text-white/75">
                                <ChannelIcon size={15} stroke={1.7} />
                              </span>
                              <div className="min-w-0">
                                <p className="truncate text-[12px] font-semibold text-white/72">
                                  {name}
                                </p>
                                <p className="text-[10px] text-white/35">{channel}</p>
                              </div>
                              <span className="ml-auto shrink-0 text-[9px] text-white/25">
                                {time}
                              </span>
                            </div>
                            <p className="mt-2.5 line-clamp-2 text-[11px] leading-[1.45] text-white/45">
                              {message}
                            </p>
                            <div className="mt-2.5 flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 text-[9px] text-white/25">
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{ backgroundColor: column.accent }}
                                />
                                #{7100 + index + column.count}
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5B7C99] text-[7px] font-semibold text-white/75">
                                  PL
                                </span>
                                <IconDotsVertical
                                  size={11}
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
      </div>
    </div>
  )
}

export function EngageFeatureMockup() {
  return (
    <div className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-tl-2xl rounded-br-2xl border-t border-l border-white/[0.09] bg-[#0C0C0D] shadow-[0_22px_55px_rgba(0,0,0,0.38)]">
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
          className="ml-auto text-[9px] font-medium text-white/55"
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
                <div className="ml-auto w-full rounded-xl rounded-tr-[4px] border border-[#08503f] bg-[#023d31] p-2.5">
                  <p className="text-[10px] font-semibold text-white/90">Hola, María</p>
                  <p className="mt-1 text-[9px] leading-[1.4] text-white/70">
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
