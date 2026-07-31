import { useEffect, useRef, useState } from 'react'

export type ProductTab = 'helpdesk' | 'studio' | 'engage'

export const PRODUCT_TABS: { id: ProductTab; label: string }[] = [
  { id: 'helpdesk', label: 'Helpdesk Omnicanal' },
  { id: 'studio', label: 'Agentes de IA' },
  { id: 'engage', label: 'Marketing por WhatsApp' },
]

const CYCLE_MS = 8500

export function ProductTabs({
  active,
  onChange,
}: {
  active: ProductTab
  onChange: (tab: ProductTab) => void
}) {
  const [paused, setPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const activeRef = useRef(active)
  activeRef.current = active

  useEffect(() => {
    setProgressKey((k) => k + 1)
  }, [active])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = window.setInterval(() => {
      const idx = PRODUCT_TABS.findIndex((t) => t.id === activeRef.current)
      const next = PRODUCT_TABS[(idx + 1) % PRODUCT_TABS.length]
      onChange(next.id)
    }, CYCLE_MS)

    return () => window.clearInterval(id)
  }, [paused, onChange])

  return (
    <div
      className="scrollbar-hide flex w-full min-w-0 justify-start overflow-x-auto overscroll-x-contain"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
    >
      <div
        className="relative grid min-w-[580px] flex-1 grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.015]"
        role="tablist"
        aria-label="Producto"
      >
        {PRODUCT_TABS.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`product-tab-${tab.id}`}
              aria-controls={`product-panel-${tab.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(tab.id)}
              className={`relative min-h-12 border-r border-white/10 px-4 py-3 text-left text-sm font-normal tracking-wide transition-colors last:border-r-0 sm:min-h-14 sm:px-5 sm:text-base ${
                isActive
                  ? 'bg-white/[0.045] text-white'
                  : 'text-white/45 hover:bg-white/[0.025] hover:text-white/70'
              }`}
            >
              {tab.label}
              {isActive && (
                <span
                  key={progressKey}
                  className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-white ${
                    paused ? '' : 'tab-underline-progress'
                  }`}
                  style={paused ? { transform: 'scaleX(1)' } : undefined}
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
