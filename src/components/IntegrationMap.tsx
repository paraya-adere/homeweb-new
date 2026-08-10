import * as Tooltip from '@radix-ui/react-tooltip'
import { useState } from 'react'

type OrbitItem = {
  name: string
  image: string
  description: string
}

type OrbitNode = OrbitItem & {
  x: number
  y: number
  path: string
  begin: string
}

const VB_W = 1000
const VB_H = 480
const CENTER = { x: 500, y: 240 }
const GAP = 82
const LEFT_X = 96
const RIGHT_X = 904
const NODE_SIZE = 56

const LEFT_ITEMS: OrbitItem[] = [
  {
    name: 'Shopify',
    image: 'integrations/shopify.svg',
    description: 'Sincroniza catálogo, stock y pedidos con tu tienda.',
  },
  {
    name: 'HubSpot',
    image: 'integrations/hubspot.svg',
    description: 'Conecta contactos y deals del CRM con cada conversación.',
  },
  {
    name: 'Salesforce',
    image: 'integrations/salesforce.svg',
    description: 'Une tu CRM enterprise con el inbox y los agentes de IA.',
  },
  {
    name: 'MCP',
    image: 'integrations/mcp.svg',
    description: 'Extiende Adereso con herramientas y contexto vía MCP.',
  },
  {
    name: 'API + Webhooks',
    image: 'integrations/api.svg',
    description: 'Integra sistemas propios con eventos y APIs abiertas.',
  },
]

const RIGHT_ITEMS: OrbitItem[] = [
  {
    name: 'WhatsApp',
    image: 'integrations/whatsapp.svg',
    description: 'Canal principal de ventas y postventa con BSP Meta.',
  },
  {
    name: 'Instagram',
    image: 'integrations/instagram.svg',
    description: 'Atiende DMs y comentarios desde el mismo inbox.',
  },
  {
    name: 'Messenger',
    image: 'integrations/messenger.svg',
    description: 'Centraliza mensajes de Facebook Messenger.',
  },
  {
    name: 'Gmail',
    image: 'integrations/gmail.svg',
    description: 'Gestiona emails de clientes junto al resto de canales.',
  },
  {
    name: 'X',
    image: 'integrations/x.svg',
    description: 'Monitorea y responde menciones y DMs de X.',
  },
  {
    name: 'TikTok',
    image: 'integrations/tiktok.svg',
    description: 'Gestiona mensajes de TikTok en la mesa de ayuda.',
  },
]

function buildSide(items: OrbitItem[], side: 'left' | 'right'): OrbitNode[] {
  const x = side === 'left' ? LEFT_X : RIGHT_X
  const span = (items.length - 1) * GAP
  const startY = CENTER.y - span / 2

  return items.map((item, index) => {
    const y = startY + index * GAP
    const c1x = side === 'left' ? CENTER.x - 170 : CENTER.x + 170
    const c2x = side === 'left' ? x + 200 : x - 200
    // Path drawn from the outer node → Adereso center, so the signal travels inward.
    const path = `M${x},${y} C ${c2x},${y} ${c1x},${CENTER.y} ${CENTER.x},${CENTER.y}`
    const begin = `${(index * 0.4 + (side === 'right' ? 0.2 : 0)).toFixed(2)}s`
    return { ...item, x, y, path, begin }
  })
}

const NODES: OrbitNode[] = [...buildSide(LEFT_ITEMS, 'left'), ...buildSide(RIGHT_ITEMS, 'right')]

// Comet tail built from short dashes chained along the real curve (head → tail).
const COMET_STEP = 8
const COMET_SEGMENTS = [
  { color: '#ffffff', opacity: 1, width: 2.6 },
  { color: '#eef1f8', opacity: 0.82, width: 2.4 },
  { color: '#cfd6e6', opacity: 0.62, width: 2.2 },
  { color: '#aab3c6', opacity: 0.44, width: 2 },
  { color: '#828da3', opacity: 0.28, width: 1.7 },
  { color: '#5c6578', opacity: 0.14, width: 1.4 },
]

export function IntegrationMap() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <Tooltip.Provider delayDuration={100} disableHoverableContent>
      <div
        className="connected__media integration-orbit"
        role="img"
        aria-label="Adereso conectado con Shopify, HubSpot, Salesforce, MCP, API, WhatsApp, Instagram, Messenger, Gmail, X y TikTok"
      >
        <div className="integration-orbit__glow" aria-hidden="true" />
        <div className="integration-orbit__beam" aria-hidden="true" />

        <svg
          className="integration-orbit__svg"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="orbitLine"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2={VB_W}
              y2="0"
            >
              <stop offset="0%" stopColor="rgba(190,190,198,0.06)" />
              <stop offset="50%" stopColor="rgba(190,190,198,0.4)" />
              <stop offset="100%" stopColor="rgba(190,190,198,0.06)" />
            </linearGradient>
          </defs>

          {NODES.map((node) => (
            <path
              key={`line-${node.name}`}
              d={node.path}
              className="integration-orbit__line"
              fill="none"
            />
          ))}

          {NODES.map((node) => (
            <g key={`signal-${node.name}`} className="integration-orbit__comet">
              {COMET_SEGMENTS.map((seg, i) => (
                <path
                  key={i}
                  d={node.path}
                  fill="none"
                  pathLength={1000}
                  stroke={seg.color}
                  strokeOpacity={seg.opacity}
                  strokeWidth={seg.width}
                  strokeLinecap="round"
                  strokeDasharray="14 1000"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from={`${i * COMET_STEP}`}
                    to={`${i * COMET_STEP - 1014}`}
                    dur="2.6s"
                    begin={node.begin}
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </g>
          ))}

          {NODES.map((node) => (
            <g
              key={`node-${node.name}`}
              className={`integration-orbit__node${hovered === node.name ? ' is-hovered' : ''}`}
            >
              <rect
                x={node.x - NODE_SIZE / 2}
                y={node.y - NODE_SIZE / 2}
                width={NODE_SIZE}
                height={NODE_SIZE}
                rx="15"
                className="integration-orbit__node-bg"
              />
              <image
                href={node.image}
                x={node.x - 15}
                y={node.y - 15}
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          ))}

          <g className="integration-orbit__center">
            <g className="integration-orbit__center-float">
              <rect
                x={CENTER.x - 52}
                y={CENTER.y - 52}
                width="104"
                height="104"
                rx="26"
                className="integration-orbit__center-bg"
              />
              <image
                href="adereso-isotipo.png"
                x={CENTER.x - 34}
                y={CENTER.y - 34}
                width="68"
                height="68"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </g>
        </svg>

        <div className="integration-orbit__hits">
          {NODES.map((node) => {
            const side = node.x < CENTER.x ? 'right' : 'left'
            const isOpen = hovered === node.name
            return (
              <Tooltip.Root key={`hit-${node.name}`} open={isOpen}>
                <Tooltip.Trigger asChild>
                  <button
                    type="button"
                    className="integration-orbit__hit"
                    style={{
                      left: `${(node.x / VB_W) * 100}%`,
                      top: `${(node.y / VB_H) * 100}%`,
                      width: `${(NODE_SIZE / VB_W) * 100}%`,
                      height: `${(NODE_SIZE / VB_H) * 100}%`,
                    }}
                    aria-label={`${node.name}: ${node.description}`}
                    onPointerEnter={() => setHovered(node.name)}
                    onPointerLeave={() => setHovered(null)}
                    onFocus={() => setHovered(node.name)}
                    onBlur={() => setHovered(null)}
                  />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side={side}
                    sideOffset={10}
                    onPointerDownOutside={(e) => e.preventDefault()}
                    className="pointer-events-none z-50 max-w-[220px] rounded-lg border border-white/10 bg-[#161618] px-3 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
                  >
                    <p className="text-[12px] font-medium text-white/90">{node.name}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/55">
                      {node.description}
                    </p>
                    <Tooltip.Arrow className="fill-[#161618]" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            )
          })}
        </div>
      </div>
    </Tooltip.Provider>
  )
}
