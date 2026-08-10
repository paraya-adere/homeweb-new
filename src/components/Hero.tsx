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
            'linear-gradient(180deg, #0C0C0D 0%, #0C0C0D 54%, #101218 64%, #1A2230 75%, #2A3344 92%, #12151C 100%)',
        }}
      />
      <div
        className="hero-entry__spotlight pointer-events-none absolute top-[-18%] left-1/2 z-[1] h-[58%] w-[90%] max-w-[980px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-[-10%] -bottom-[1%] h-[32%]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 58% 60% at 50% 60%, rgba(255,255,255,0.34) 0%, rgba(180,205,255,0.16) 32%, rgba(0,74,216,0.1) 55%, transparent 72%)',
          filter: 'blur(10px)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[3%] h-[24%] opacity-30"
        aria-hidden="true"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(180,205,255,0.06) 0px, rgba(180,205,255,0.06) 1px, transparent 1px, transparent 4px)',
        }}
      />

      <div className="container relative z-10 pt-[clamp(64px,11vw,128px)] pb-[clamp(72px,7vw,112px)]">
        <HeroCopy />

        <div className="hero-entry__tabs mt-12 md:mt-14">
          <ProductTabs active={tab} onChange={setTab} />
        </div>

        <div
          id={`product-panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`product-tab-${tab}`}
          className="hero-entry__mockup relative mt-7 w-full md:mt-8"
        >
          <div
            className="pointer-events-none absolute -inset-[12%] z-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 72% 60% at 50% 42%, rgba(255,255,255,0.28) 0%, rgba(180,205,255,0.18) 32%, rgba(0,74,216,0.1) 55%, transparent 74%)',
              filter: 'blur(40px)',
            }}
          />
          <div className="relative z-10 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-[0_1px_0_rgba(255,255,255,0.025)_inset,0_8px_10px_-6px_rgba(0,0,0,0.85),0_24px_34px_-18px_rgba(0,0,0,0.62),0_54px_70px_-42px_rgba(0,0,0,0.42)]">
            {tab === 'helpdesk' && <HelpdeskMockup />}
            {tab === 'studio' && <StudioMockup />}
            {tab === 'engage' && <EngageMockup />}
          </div>
        </div>
      </div>
    </section>
  )
}
