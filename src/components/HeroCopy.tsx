export function HeroCopy() {
  return (
    <div className="mx-auto flex w-full min-w-0 max-w-[920px] flex-col items-center text-center">
      <h1 className="hero-entry__headline mb-5 text-[clamp(32px,6vw,70px)] font-medium leading-[1.04] tracking-[-0.04em] md:mb-6">
        Convierte conversaciones
        <br />
        en ventas con IA
      </h1>
      <p className="hero-entry__description max-w-full text-[clamp(15px,2.5vw,18px)] font-normal leading-snug text-[#a1a1aa] sm:max-w-[560px]">
        Adereso orquesta agentes de IA, equipos humanos y todos tus canales: WhatsApp,
        Instagram, email en un solo sistema con métricas reales.
      </p>

      <div className="hero-entry__actions mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-9">
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-full bg-[#FFD540] px-5 py-3 text-[14px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Hablar con un experto →
        </a>
        <a
          href="#cta"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3a3a3a] bg-[#141414] px-5 py-3 text-[14px] font-medium text-[#e8e8e8] transition-opacity hover:opacity-90"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>
          Pruébalo
        </a>
      </div>

      <div
        className="hero-entry__partners mt-9 flex flex-wrap items-center justify-center gap-5 sm:mt-10 sm:gap-6"
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
