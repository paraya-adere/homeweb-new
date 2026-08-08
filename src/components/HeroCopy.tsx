export function HeroCopy() {
  return (
    <div className="flex w-full min-w-0 max-w-[920px] flex-col items-start text-left">
      <h1 className="hero-entry__headline mb-4 text-[clamp(32px,6vw,70px)] font-medium leading-[1.04] tracking-[-0.04em]">
        Convierte conversaciones
        <br />
        en ventas con IA
      </h1>
      <p className="hero-entry__description max-w-full text-[clamp(15px,2.5vw,18px)] font-normal leading-snug text-[#a1a1aa] sm:max-w-[560px]">
        Adereso orquesta agentes de IA, equipos humanos y todos tus canales: WhatsApp,
        Instagram, email en un solo sistema con métricas reales.
      </p>

      <div className="hero-entry__actions mt-7 flex flex-wrap items-center gap-3">
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-full bg-[#f5e547] px-5 py-3 text-[14px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Hablar con un experto →
        </a>
        <a
          href="#cta"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3a3a3a] bg-[#141414] px-5 py-3 text-[14px] font-medium text-[#e8e8e8] transition-opacity hover:opacity-90"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2.2c-5.1 0-9.3 4-9.3 9 0 1.6.4 3.1 1.2 4.4L2.5 21l5.5-1.4c1.3.7 2.7 1.1 4 1.1 5.1 0 9.3-4 9.3-9s-4.2-9.5-9.3-9.5z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M9.2 9.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.3l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.4.7 1.1 1.4 1.8 1.8.2.1.3.1.4 0l.5-.4c.2-.1.4-.2.6-.1l1.7.7c.2.1.3.3.3.5v.5c0 .3 0 .5-.5.7-.4.2-1 .3-1.6.2-1.5-.3-3.2-1.4-4.5-2.7-1.3-1.3-2.3-3-2.6-4.5-.1-.6 0-1.2.2-1.6z"
              fill="currentColor"
            />
          </svg>
          Pruébalo
        </a>
      </div>

      <div
        className="hero-entry__partners mt-5 flex flex-wrap items-center gap-4 sm:gap-5"
        aria-label="Partners oficiales"
      >
        <img
          src={`${import.meta.env.BASE_URL}partners/meta-business-partner.webp`}
          alt="Meta Business Partner"
          width={140}
          height={56}
          className="h-6 w-auto object-contain sm:h-7"
          loading="eager"
          decoding="async"
        />
        <img
          src={`${import.meta.env.BASE_URL}partners/shopify-partners.webp`}
          alt="Shopify Partners"
          width={140}
          height={56}
          className="h-6 w-auto object-contain sm:h-7"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  )
}
