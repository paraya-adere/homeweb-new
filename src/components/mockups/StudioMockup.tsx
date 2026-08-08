import type { ComponentType, ReactNode } from 'react'
import {
  IconActivity,
  IconArrowLeft,
  IconArrowRight,
  IconBolt,
  IconBox,
  IconBrain,
  IconBuildingStore,
  IconChartBar,
  IconChartDots,
  IconChartLine,
  IconCheck,
  IconDeviceFloppy,
  IconFileText,
  IconHexagon,
  IconHistory,
  IconLayoutSidebarLeftCollapse,
  IconLock,
  IconMessage,
  IconMessageQuestion,
  IconMessages,
  IconPlus,
  IconRefresh,
  IconRobotFace,
  IconSend,
  IconShoppingBag,
  IconShoppingCart,
  IconSitemap,
  IconSparkles,
  IconTestPipe,
} from '@tabler/icons-react'

type NavIcon = ComponentType<{ size?: number; stroke?: number; className?: string }>

const NAV_SECTIONS: {
  label: string
  items: { name: string; icon: NavIcon; active?: boolean }[]
}[] = [
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
]

const WIZARD_STEPS = [
  'Conectar plataforma',
  'Información del negocio',
  'Base de conocimiento',
  'Comportamiento',
  'Conectar canales',
] as const

function StudioSidebar() {
  return (
    <aside className="flex w-[200px] shrink-0 flex-col border-r border-white/[0.06] bg-[#0d0d0d]">
      <div className="flex items-center gap-2 px-3.5 py-3.5">
        <img
          src="adereso-isotipo.png"
          alt=""
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="text-[13px] font-semibold tracking-tight text-white">
          Adereso Studio
        </span>
      </div>

      <nav className="scrollbar-hide flex-1 overflow-y-auto px-2.5 pb-3">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="mb-3.5">
            <p className="mb-1 px-2 text-[10px] font-medium tracking-[0.08em] text-white/30 uppercase">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const ItemIcon = item.icon
                return (
                  <li key={item.name}>
                    <span
                      className={`flex items-center gap-2 truncate rounded-md px-2.5 py-[7px] text-[12px] ${
                        item.active
                          ? 'bg-white/[0.08] font-medium text-white'
                          : 'text-white/45'
                      }`}
                    >
                      <ItemIcon
                        size={15}
                        stroke={1.5}
                        className={`shrink-0 ${item.active ? 'text-white/80' : 'text-white/40'}`}
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

      <div className="border-t border-white/[0.06] px-3.5 py-3">
        <span className="inline-flex items-center gap-2 text-[12px] text-white/40">
          <IconLayoutSidebarLeftCollapse size={15} stroke={1.5} />
          Contraer
        </span>
      </div>
    </aside>
  )
}

function WizardSteps() {
  return (
    <aside className="flex w-[200px] shrink-0 flex-col border-r border-white/[0.06] bg-[#111111]">
      <div className="px-4 pt-4 pb-3">
        <span className="inline-flex items-center gap-1.5 text-[12px] text-white/45">
          <IconArrowLeft size={14} stroke={1.6} />
          Salir
        </span>
      </div>

      <div className="flex items-start gap-2.5 px-4 pb-5">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/70">
          <IconShoppingCart size={15} stroke={1.6} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-white">Agente E-Commerce</p>
          <p className="text-[11px] text-white/35">Activación</p>
        </div>
      </div>

      <ol className="flex-1 space-y-1 px-3">
        {WIZARD_STEPS.map((step, index) => {
          const isActive = index === 0
          return (
            <li key={step}>
              <div
                className={`flex items-center gap-2.5 rounded-lg px-2 py-2 ${
                  isActive ? 'bg-white/[0.04]' : ''
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                    isActive
                      ? 'bg-white text-[#0d0d0d]'
                      : 'border border-white/15 text-white/40'
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`truncate text-[12px] ${
                    isActive ? 'font-medium text-white' : 'text-white/40'
                  }`}
                >
                  {step}
                </span>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="border-t border-white/[0.06] px-4 py-3.5">
        <span className="inline-flex items-center gap-2 text-[12px] text-white/45">
          <IconDeviceFloppy size={14} stroke={1.5} />
          Guardar borrador
        </span>
      </div>
    </aside>
  )
}

function PlatformCard({
  selected,
  name,
  description,
  icon,
}: {
  selected?: boolean
  name: string
  description: string
  icon: ReactNode
}) {
  return (
    <div
      className={`relative flex min-h-[92px] flex-col justify-between rounded-xl border p-3.5 ${
        selected
          ? 'border-white/45 bg-[#141414]'
          : 'border-white/[0.08] bg-[#121212]'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05]">
            {icon}
          </span>
          <p className="text-[14px] font-semibold text-white">{name}</p>
        </div>
        {selected ? (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#22c55e]">
            <IconCheck size={12} stroke={2.5} className="text-white" />
          </span>
        ) : (
          <span className="h-5 w-5 rounded-full border border-white/20" />
        )}
      </div>
      <p className="mt-3 text-[11px] leading-snug text-white/40">{description}</p>
    </div>
  )
}

function ConnectPlatformContent() {
  return (
    <div className="flex min-w-0 flex-1 flex-col bg-[#0f0f0f]">
      <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] px-5 py-4 sm:px-6">
        <div>
          <p className="text-[10px] font-medium tracking-[0.12em] text-white/35 uppercase">
            Paso 1 de 5
          </p>
          <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-white">
            Conectar plataforma
          </h3>
        </div>
        <div className="mt-2 hidden h-[3px] w-28 overflow-hidden rounded-full bg-white/10 sm:block">
          <div className="h-full w-1/5 rounded-full bg-white" />
        </div>
      </div>

      <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
        <div className="mb-4">
          <p className="text-[14px] font-semibold text-white">E-Commerce</p>
          <p className="mt-1 text-[12px] text-white/40">
            Conecta tu tienda para acceder a productos en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PlatformCard
            selected
            name="Shopify"
            description="Catálogo, pedidos y clientes en tiempo real."
            icon={<img src="shopify.svg" alt="" className="h-4 w-4" />}
          />
          <PlatformCard
            name="VTEX"
            description="Sincronización de catálogo. Por ahora solo productos."
            icon={<IconHexagon size={16} stroke={1.6} className="text-white/70" />}
          />
        </div>

        <div className="mt-6">
          <p className="mb-2 text-[12px] font-medium text-white/70">Elige tu tienda</p>
          <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.1] bg-[#141414] px-3.5 py-3">
            <IconShoppingBag size={16} stroke={1.5} className="shrink-0 text-white/45" />
            <span className="truncate text-[12px] text-white/80">
              https://aura-store.myshopify.com
            </span>
          </div>
          <button
            type="button"
            className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-medium text-white/55"
          >
            <IconPlus size={13} stroke={2} />
            Conectar nueva tienda
          </button>
        </div>

        <div className="mt-6 flex items-start gap-2 text-white/30">
          <IconLock size={13} stroke={1.6} className="mt-0.5 shrink-0" />
          <p className="text-[11px] leading-snug">
            Conexión segura · credenciales encriptadas, acceso de solo lectura.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-5 py-3.5 sm:px-6">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-[12px] font-medium text-white/45"
        >
          <IconArrowLeft size={14} stroke={1.6} />
          Atrás
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-[12px] font-medium text-white/70"
        >
          Continuar
          <IconArrowRight size={14} stroke={1.6} />
        </button>
      </div>
    </div>
  )
}

function PreviewPanel() {
  return (
    <aside className="flex w-[280px] shrink-0 flex-col border-l border-white/[0.06] bg-[#0d0d0d] p-3.5">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111]">
        <div className="flex items-start justify-between gap-2 border-b border-white/[0.06] px-3.5 py-3">
          <div className="flex items-start gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3b82f6]/15 text-[#60a5fa]">
              <IconMessage size={15} stroke={1.6} />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-white">Vista previa</p>
              <p className="text-[11px] text-white/35">Prueba a tu asistente en vivo</p>
            </div>
          </div>
          <IconRefresh size={14} stroke={1.5} className="mt-1 text-white/35" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-5 text-center">
          <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-white/35">
            <IconSparkles size={18} stroke={1.5} />
          </span>
          <p className="max-w-[180px] text-[12px] leading-relaxed text-white/40">
            Escribe un mensaje para ver cómo responde tu asistente.
          </p>
        </div>

        <div className="border-t border-white/[0.06] p-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d0d0d] px-3 py-2.5">
            <span className="flex-1 text-[12px] text-white/30">
              Escribe un mensaje de prueba...
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.06] text-white/35">
              <IconSend size={13} stroke={1.6} />
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

function MobileStudio() {
  return (
    <div className="flex h-full flex-col bg-[#0f0f0f]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3.5 py-3">
        <img src="adereso-isotipo.png" alt="" className="h-5 w-5 rounded-full object-cover" />
        <span className="text-[12px] font-semibold text-white">Adereso Studio</span>
        <span className="ml-auto text-[10px] tracking-[0.08em] text-white/35 uppercase">
          Paso 1 de 5
        </span>
      </div>

      <div className="border-b border-white/[0.06] px-3.5 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.06] text-white/70">
            <IconShoppingCart size={13} stroke={1.6} />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-white">Agente E-Commerce</p>
            <p className="text-[10px] text-white/35">Conectar plataforma</p>
          </div>
        </div>
      </div>

      <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto px-3.5 py-4">
        <p className="text-[13px] font-semibold text-white">E-Commerce</p>
        <p className="mt-1 mb-3 text-[11px] text-white/40">
          Conecta tu tienda para acceder a productos en tiempo real.
        </p>

        <div className="space-y-2.5">
          <PlatformCard
            selected
            name="Shopify"
            description="Catálogo, pedidos y clientes en tiempo real."
            icon={<img src="shopify.svg" alt="" className="h-4 w-4" />}
          />
          <PlatformCard
            name="VTEX"
            description="Sincronización de catálogo. Por ahora solo productos."
            icon={<IconHexagon size={16} stroke={1.6} className="text-white/70" />}
          />
        </div>

        <div className="mt-5">
          <p className="mb-2 text-[11px] font-medium text-white/70">Elige tu tienda</p>
          <div className="flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141414] px-3 py-2.5">
            <IconShoppingBag size={14} stroke={1.5} className="shrink-0 text-white/45" />
            <span className="truncate text-[11px] text-white/80">
              https://aura-store.myshopify.com
            </span>
          </div>
          <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-white/55">
            <IconPlus size={12} stroke={2} />
            Conectar nueva tienda
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-3.5 py-3">
        <span className="inline-flex items-center gap-1 text-[11px] text-white/40">
          <IconArrowLeft size={13} stroke={1.6} />
          Atrás
        </span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/70">
          Continuar
          <IconArrowRight size={13} stroke={1.6} />
        </span>
      </div>
    </div>
  )
}

export function StudioMockup() {
  return (
    <div className="flex h-[580px] overflow-hidden bg-[#0d0d0d] text-[13px] sm:h-[640px] lg:h-[700px]">
      <div className="min-h-0 flex-1 lg:hidden">
        <MobileStudio />
      </div>

      <div className="hidden min-h-0 flex-1 lg:flex">
        <StudioSidebar />
        <WizardSteps />
        <ConnectPlatformContent />
        <PreviewPanel />
      </div>
    </div>
  )
}
