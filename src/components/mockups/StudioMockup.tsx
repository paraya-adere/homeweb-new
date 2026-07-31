import * as Switch from '@radix-ui/react-switch'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  IconBrain,
  IconCheck,
  IconDatabase,
  IconFlask,
  IconMessageCircle,
  IconPackage,
  IconPlayerPlay,
  IconRobot,
  IconSettings,
  IconShoppingCart,
  IconSparkles,
  IconUserCheck,
} from '@tabler/icons-react'

const KNOWLEDGE = [
  { icon: IconShoppingCart, name: 'Shopify', detail: 'Catálogo, stock y pedidos' },
  { icon: IconDatabase, name: 'Base de conocimiento', detail: 'Políticas y respuestas' },
  { icon: IconPackage, name: 'Productos', detail: '1.248 items sincronizados' },
] as const

const SKILLS = [
  { label: 'Recomendar productos', enabled: true },
  { label: 'Crear cotizaciones', enabled: true },
  { label: 'Aplicar descuentos', enabled: false },
  { label: 'Escalar a ejecutivo', enabled: true },
] as const

function Toggle({ checked }: { checked: boolean }) {
  return (
    <Switch.Root
      defaultChecked={checked}
      className="relative h-5 w-9 shrink-0 rounded-full bg-white/10 outline-none transition-colors data-[state=checked]:bg-[#FFD540]"
      aria-label={checked ? 'Activo' : 'Inactivo'}
    >
      <Switch.Thumb className="block h-4 w-4 translate-x-0.5 rounded-full bg-white shadow-sm transition-transform data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-[#0C0C0D]" />
    </Switch.Root>
  )
}

function AgentSettings() {
  return (
    <div className="flex h-full flex-col border-r border-white/[0.07] bg-[#131415]">
      <div className="border-b border-white/8 px-4 py-3.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD540]/[0.06] text-[#FFD540]/70">
              <IconRobot size={17} stroke={1.6} />
            </span>
            <div>
              <p className="text-[14px] font-semibold text-white">Agente Aura</p>
              <p className="text-[11px] text-white/35">Ventas · WhatsApp</p>
            </div>
          </div>
          <Toggle checked />
        </div>
      </div>

      <Tabs.Root defaultValue="config" className="flex min-h-0 flex-1 flex-col">
        <Tabs.List className="grid grid-cols-3 border-b border-white/8 px-2">
          {[
            ['config', 'Configurar'],
            ['knowledge', 'Fuentes'],
            ['skills', 'Acciones'],
          ].map(([value, label]) => (
            <Tabs.Trigger
              key={value}
              value={value}
              className="relative px-1 py-3 text-[11px] font-medium text-white/35 outline-none transition-colors hover:text-white/70 data-[state=active]:text-white"
            >
              {label}
              <span className="absolute inset-x-2 bottom-0 h-px scale-x-0 bg-[#FFD540]/70 transition-transform data-[state=active]:scale-x-100" />
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto p-3.5">
          <Tabs.Content value="config" className="space-y-3 outline-none">
            <div>
              <label className="mb-1.5 block text-[11px] font-medium text-white/45">
                Objetivo del agente
              </label>
              <div className="rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5 text-[12px] leading-relaxed text-white/75">
                Recomendar productos, resolver dudas y convertir conversaciones en ventas.
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-medium text-white/45">
                Personalidad
              </label>
              <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5">
                <div>
                  <p className="text-[12px] font-medium text-white/80">Asesor experto</p>
                  <p className="text-[10px] text-white/30">Claro, cercano y resolutivo</p>
                </div>
                <IconSettings size={14} stroke={1.5} className="text-white/30" />
              </div>
            </div>
            <div className="rounded-lg border border-[#FFD540]/10 bg-[#FFD540]/[0.025] p-3">
              <div className="flex items-center gap-2">
                <IconSparkles size={14} stroke={1.7} className="text-[#FFD540]/60" />
                <p className="text-[11px] font-medium text-white/70">Instrucción principal</p>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/55">
                Prioriza resolver la necesidad del cliente. Consulta stock real antes de ofrecer y
                escala si detectas una excepción.
              </p>
            </div>
          </Tabs.Content>

          <Tabs.Content value="knowledge" className="space-y-2 outline-none">
            {KNOWLEDGE.map((source) => {
              const SourceIcon = source.icon
              return (
                <div
                  key={source.name}
                  className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-white/45">
                    <SourceIcon size={14} stroke={1.6} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-white/80">{source.name}</p>
                    <p className="truncate text-[10px] text-white/30">{source.detail}</p>
                  </div>
                  <IconCheck size={13} stroke={2} className="ml-auto text-[#52CE5E]" />
                </div>
              )
            })}
          </Tabs.Content>

          <Tabs.Content value="skills" className="space-y-2 outline-none">
            {SKILLS.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5"
              >
                <span className="text-[11px] font-medium text-white/70">{skill.label}</span>
                <Toggle checked={skill.enabled} />
              </div>
            ))}
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  )
}

function AgentCanvas() {
  const nodes = [
    {
      icon: IconMessageCircle,
      eyebrow: 'Entrada',
      title: 'Cliente pregunta',
      detail: '“Necesito una cafetera para 20 personas”',
    },
    {
      icon: IconBrain,
      eyebrow: 'Razonamiento',
      title: 'Entiende y consulta',
      detail: 'Necesidad B2B · stock · políticas',
      active: true,
    },
    {
      icon: IconShoppingCart,
      eyebrow: 'Acción',
      title: 'Cotiza y responde',
      detail: 'Pack Empresa Aura · $189.900',
    },
  ] as const

  return (
    <div className="relative flex h-full min-w-0 flex-col bg-[#0C0C0D]">
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/8 px-4">
        <div>
          <p className="text-[12px] font-semibold text-white/85">Flujo del agente</p>
          <p className="text-[10px] text-white/30">Así decide durante una conversación</p>
        </div>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              className="flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-3 text-[11px] font-medium text-white/60 transition-colors hover:border-white/15 hover:bg-white/[0.06] hover:text-white/80"
            >
              <IconPlayerPlay size={13} stroke={1.8} />
              Probar agente
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={6}
              className="z-50 rounded-md border border-white/10 bg-[#1a1a1a] px-2.5 py-1.5 text-[10px] text-white shadow-xl"
            >
              Ejecuta una conversación de prueba
              <Tooltip.Arrow className="fill-[#1a1a1a]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 w-full max-w-[330px] space-y-2.5">
          {nodes.map((node, index) => {
            const NodeIcon = node.icon
            return (
              <div key={node.title}>
                <div
                  className={`studio-node rounded-xl border p-3.5 ${
                    'active' in node
                      ? 'border-[#FFD540]/15 bg-[#131415]'
                      : 'border-white/[0.07] bg-[#131415]'
                  }`}
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        'active' in node
                          ? 'bg-[#FFD540]/10 text-[#FFD540]'
                          : 'bg-white/[0.05] text-white/45'
                      }`}
                    >
                      <NodeIcon size={16} stroke={1.6} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] font-medium tracking-[0.12em] text-white/25 uppercase">
                        {node.eyebrow}
                      </p>
                      <p className="text-[12px] font-semibold text-white/85">{node.title}</p>
                      <p className="truncate text-[10px] text-white/35">{node.detail}</p>
                    </div>
                    {'active' in node && (
                      <span className="ml-auto flex items-center gap-1 rounded-full border border-[#FFD540]/10 bg-[#FFD540]/[0.04] px-2 py-1 text-[9px] text-[#FFD540]/65">
                        <IconSparkles size={9} />
                        IA
                      </span>
                    )}
                  </div>
                </div>
                {index < nodes.length - 1 && (
                  <div className="mx-auto h-5 w-px bg-gradient-to-b from-white/20 to-white/5" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function TestConversation() {
  return (
    <div className="flex h-full flex-col bg-[#131415] lg:border-l lg:border-white/[0.07]">
      <div className="flex h-12 shrink-0 items-center gap-2.5 border-b border-white/8 px-3.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.05] text-white/45">
          <IconFlask size={13} stroke={1.7} />
        </span>
        <div>
          <p className="text-[11px] font-semibold text-white/80">Conversación de prueba</p>
          <p className="text-[9px] text-[#52CE5E]">Agente respondiendo</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:p-4">
        <div className="ml-auto max-w-[90%] rounded-xl rounded-tr-[4px] border border-white/[0.06] bg-[#161817] px-3 py-2.5 text-[12px] leading-relaxed text-white/70 lg:text-[11px]">
          Necesito una cafetera para una oficina de 20 personas.
        </div>
        <div className="studio-reply max-w-[94%] rounded-xl rounded-tl-[4px] border border-white/[0.07] bg-[#131415] px-3 py-2.5">
          <p className="text-[12px] leading-relaxed text-white/70 lg:text-[11px]">
            Te recomiendo el Pack Empresa Aura. Incluye 2 máquinas, cápsulas e instalación.
          </p>
          <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#0C0C0D] p-2">
            <img
              src="cafetera-aura.png"
              alt=""
              className="h-10 w-10 rounded-md bg-white object-cover"
            />
            <div>
              <p className="text-[11px] font-medium text-white/80 lg:text-[10px]">
                Pack Empresa Aura ×2
              </p>
              <p className="text-[12px] font-semibold text-white lg:text-[11px]">$189.900</p>
            </div>
          </div>
        </div>
        <div className="studio-action flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
          <IconCheck size={13} stroke={2} className="text-[#52CE5E]" />
          <div>
            <p className="text-[11px] font-medium text-white/75 lg:text-[10px]">
              Cotización creada
            </p>
            <p className="text-[10px] text-white/30 lg:text-[9px]">Acción ejecutada en Shopify</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 p-3">
        <div className="flex items-center rounded-lg border border-white/[0.07] bg-[#0C0C0D] px-3 py-2.5 text-[11px] text-white/25 lg:text-[10px]">
          Escribe como si fueras un cliente…
          <IconMessageCircle size={13} stroke={1.5} className="ml-auto" />
        </div>
      </div>
    </div>
  )
}

function MobileAgentFlowSummary() {
  const steps = [
    { icon: IconMessageCircle, label: 'Pregunta' },
    { icon: IconBrain, label: 'Razona', active: true },
    { icon: IconShoppingCart, label: 'Cotiza' },
  ] as const

  return (
    <div className="shrink-0 border-t border-white/8 bg-[#0C0C0D] px-3 py-3">
      <p className="mb-2 text-[10px] font-medium tracking-[0.08em] text-white/30 uppercase">
        Flujo del agente
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {steps.map((step, index) => {
          const StepIcon = step.icon
          return (
            <div key={step.label} className="relative">
              <div
                className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
                  'active' in step && step.active
                    ? 'border-[#FFD540]/15 bg-[#FFD540]/[0.04]'
                    : 'border-white/[0.07] bg-[#131415]'
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                    'active' in step && step.active
                      ? 'bg-[#FFD540]/10 text-[#FFD540]'
                      : 'bg-white/[0.05] text-white/40'
                  }`}
                >
                  <StepIcon size={12} stroke={1.6} />
                </span>
                <span
                  className={`text-[11px] font-medium ${
                    'active' in step && step.active ? 'text-white/80' : 'text-white/55'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 ? (
                <span className="pointer-events-none absolute top-1/2 -right-[7px] z-10 h-px w-2.5 bg-white/15" />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function StudioMockup() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="studio-radix flex h-[580px] flex-col overflow-hidden bg-[#0C0C0D] sm:h-[640px] lg:h-[700px]">
        <div className="flex min-h-0 flex-1 flex-col lg:hidden">
          <div className="min-h-0 flex-1 overflow-hidden">
            <TestConversation />
          </div>
          <MobileAgentFlowSummary />
        </div>

        <div className="hidden min-h-0 flex-1 lg:grid lg:grid-cols-[minmax(230px,0.8fr)_minmax(300px,1.15fr)_minmax(240px,0.85fr)]">
          <AgentSettings />
          <AgentCanvas />
          <TestConversation />
        </div>

        <footer className="hidden shrink-0 grid-cols-3 border-t border-white/[0.07] bg-[#131415] lg:grid lg:grid-cols-[minmax(230px,0.8fr)_minmax(300px,1.15fr)_minmax(240px,0.85fr)]">
          {[
            [IconBrain, 'Entiende el contexto', 'Usa datos reales del negocio'],
            [IconShoppingCart, 'Ejecuta acciones', 'Cotiza y actualiza pedidos'],
            [IconUserCheck, 'Escala excepciones', 'Entrega el historial al humano'],
          ].map(([Icon, title, detail], index) => {
            const ItemIcon = Icon as typeof IconBrain
            return (
              <div
                key={title as string}
                className={`flex items-center gap-2.5 px-4 py-3 ${
                  index ? 'border-l border-white/8' : ''
                }`}
              >
                <ItemIcon size={18} stroke={1.5} className="shrink-0 text-white/40" />
                <div>
                  <p className="text-[13px] font-medium text-white/70">{title as string}</p>
                  <p className="text-[11px] text-white/35">{detail as string}</p>
                </div>
              </div>
            )
          })}
        </footer>
      </div>
    </Tooltip.Provider>
  )
}
