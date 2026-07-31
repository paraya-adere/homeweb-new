import { useState } from 'react'
import { HeroCopy } from './HeroCopy'
import { ProductTabs, type ProductTab } from './ProductTabs'
import { EngageMockup } from './mockups/EngageMockup'
import { HelpdeskMockup } from './mockups/HelpdeskMockup'
import { StudioMockup } from './mockups/StudioMockup'

export function Hero() {
  const [tab, setTab] = useState<ProductTab>('helpdesk')

  return (
    <section className="hero-entry relative overflow-hidden bg-[#0C0C0D]">
      <div
        className="hero-entry__backdrop pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, #0C0C0D 0%, #0C0C0D 54%, #111214 64%, #24272B 75%, #51565D 92%, #1A1B1E 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-[-10%] -bottom-[1%] h-[32%]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 58% 60% at 50% 60%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 38%, transparent 74%)',
          filter: 'blur(10px)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[3%] h-[24%] opacity-30"
        aria-hidden="true"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 4px)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(20px,4vw,48px)] pt-[clamp(56px,10vw,112px)] pb-[clamp(112px,10vw,160px)]">
        <HeroCopy />

        <div className="hero-entry__tabs mt-9 md:mt-10">
          <ProductTabs active={tab} onChange={setTab} />
        </div>

        <div
          id={`product-panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`product-tab-${tab}`}
          className="hero-entry__mockup relative mt-6 w-full md:mt-7"
        >
          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-[0_1px_0_rgba(255,255,255,0.025)_inset,0_8px_10px_-6px_rgba(0,0,0,0.85),0_24px_34px_-18px_rgba(0,0,0,0.62),0_54px_70px_-42px_rgba(0,0,0,0.42)]">
            {tab === 'helpdesk' && <HelpdeskMockup />}
            {tab === 'studio' && <StudioMockup />}
            {tab === 'engage' && <EngageMockup />}
          </div>
        </div>
      </div>
    </section>
  )
}
