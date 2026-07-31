import type { ReactNode } from 'react'
import {
  IconBell,
  IconChevronDown,
  IconPlus,
  IconPuzzle,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react'

export function ProductMockupShell({
  activeLabel,
  navItems,
  children,
}: {
  activeLabel: string
  navItems: string[]
  children: ReactNode
}) {
  return (
    <div className="flex h-[700px] overflow-hidden bg-[#0a0a0a] text-[13px]">
      <aside className="hidden w-[56px] shrink-0 flex-col items-center border-r border-[#1f1f1f] bg-[#0d0d0d] py-3 sm:flex">
        {[IconPlus, IconPuzzle, IconSearch, IconSettings].map((Icon, index) => (
          <span
            key={index}
            className={`mb-0.5 flex h-9 w-9 items-center justify-center rounded-lg ${
              index === 1 ? 'bg-[#1a1a1a] text-[#e8e8e8]' : 'text-[#8a8a8a]'
            }`}
          >
            <Icon size={17} stroke={1.5} />
          </span>
        ))}
        <img
          src="adereso-isotipo.png"
          alt=""
          className="mt-auto mb-1 h-8 w-8 rounded-full object-cover"
        />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center gap-3 border-b border-[#1f1f1f] bg-[#121212] px-3">
          <img src="adereso-isotipo.png" alt="" className="h-7 w-7 rounded-full object-cover" />
          <span className="text-[14px] font-semibold tracking-tight text-[#e8e8e8]">Adereso</span>

          <nav className="ml-3 hidden items-center gap-1 md:flex">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] font-medium text-[#e8e8e8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5b6cff]" />
              {activeLabel}
            </span>
            {navItems.map((item, index) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[12px] text-[#8a8a8a]"
              >
                {item}
                {index === 0 && <IconChevronDown size={13} stroke={1.5} />}
              </span>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md text-[#8a8a8a]">
              <IconBell size={16} stroke={1.5} />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#f87171]" />
            </span>
            <div className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[12px] text-[#e8e8e8]">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#5b7c99] text-[8px] font-semibold text-white">
                PL
              </span>
              <span className="hidden sm:inline">Pedro L.</span>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1">{children}</div>
      </div>
    </div>
  )
}
