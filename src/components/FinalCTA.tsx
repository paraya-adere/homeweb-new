const font = 'font-[family-name:var(--font-outfit)]'

const BG_SRC =
  'https://cms.adereso.ai/wp-content/uploads/2026/03/bg-finalcard-1024x379.webp'
const BG_SRCSET =
  'https://cms.adereso.ai/wp-content/uploads/2026/03/bg-finalcard-768x284.webp 768w, https://cms.adereso.ai/wp-content/uploads/2026/03/bg-finalcard-1024x379.webp 1024w'
const BG_LOCAL = 'bg-finalcard.webp'

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="w-full py-12 md:py-24"
      style={{ background: 'var(--bg-page)' }}
    >
      <div className="mx-auto max-w-[1200px] px-3 md:px-6">
        <div
          className="relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-[10px] px-5 py-8 text-center md:min-h-[320px] md:px-16 md:py-[64px]"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={BG_SRC}
              srcSet={BG_SRCSET}
              sizes="(min-width: 768px) 1152px, calc(100vw - 24px)"
              alt=""
              decoding="async"
              className="block h-full w-full object-cover"
              onError={(e) => {
                const img = e.currentTarget
                if (img.src.endsWith(BG_LOCAL)) return
                img.removeAttribute('srcSet')
                img.src = BG_LOCAL
              }}
            />
          </div>

          <div className="relative z-10 flex max-w-[700px] flex-col items-center">
            <h2
              className={`${font} mb-3 text-[1.875rem] font-medium leading-snug text-white md:mb-4 md:text-[3rem]`}
            >
              Estás a un paso de la
              <br />
              <span style={{ color: '#ffd540' }}>automatización</span>
            </h2>

            <p
              className="mb-6 text-[15px] leading-relaxed md:mb-8 md:text-lg"
              style={{ color: '#cccccc' }}
            >
              Agenda una demo y vive la experiencia de gestionar a tus clientes
              con Adereso.
              <br className="hidden md:block" />
              Completa el formulario y nos comunicaremos contigo.
            </p>

            <a
              href="https://adereso.ai/contacto"
              className={`${font} group inline-flex items-center gap-2 rounded-full bg-[#FFD540] px-7 py-3.5 text-[16px] font-medium text-black no-underline transition-colors duration-200 hover:bg-[#FFE37A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70`}
            >
              Hablar con un experto
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
