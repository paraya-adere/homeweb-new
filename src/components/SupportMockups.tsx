import {
  IconArrowUpRight,
  IconCheck,
  IconMessageCircle,
  IconRoute,
  IconShoppingCart,
  IconTargetArrow,
} from '@tabler/icons-react'

const JOURNEY_STEPS = [
  { value: '92%', icon: IconMessageCircle },
  { value: '78%', icon: IconTargetArrow },
  { value: '64%', icon: IconRoute },
  { value: '35%', icon: IconShoppingCart },
] as const

function MockupHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="implementation-ui__header">
      <div className="implementation-ui__brand">
        <img src="adereso-isotipo.png" alt="" />
        <div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
      </div>
    </header>
  )
}

export function StrategyMockup() {
  return (
    <div className="implementation-ui strategy-ui">
      <MockupHeader title="Estrategia" subtitle="Plan Aura Retail" />

      <div className="implementation-ui__body visual-strategy">
        <section className="visual-chart">
          <div className="visual-chart__metric">
            <div>
              <strong>34,8%</strong>
              <span>conversión</span>
            </div>
            <span>
              <IconArrowUpRight size={13} stroke={1.8} />
              8,2%
            </span>
          </div>

          <svg
            className="visual-chart__svg"
            viewBox="0 0 300 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="visual-chart__grid" d="M0 30H300 M0 75H300 M0 120H300" />
            <path className="visual-chart__area" d="M0 126 C35 119 45 85 78 97 C110 108 117 72 149 79 C180 87 190 48 220 58 C251 68 267 27 300 19 L300 150 L0 150 Z" />
            <path className="visual-chart__line" d="M0 126 C35 119 45 85 78 97 C110 108 117 72 149 79 C180 87 190 48 220 58 C251 68 267 27 300 19" />
          </svg>
        </section>

        <section className="visual-funnel" aria-label="Journey de conversión">
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div className="visual-funnel__step" key={step.value}>
                <div>
                  <span><Icon size={16} stroke={1.65} /></span>
                  {index < JOURNEY_STEPS.length - 1 && <i />}
                </div>
                <strong>{step.value}</strong>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export function DedicatedSupportMockup() {
  return (
    <div className="implementation-ui dedicated-support-ui">
      <MockupHeader title="Soporte dedicado" subtitle="Operación Aura Retail" />

      <div className="implementation-ui__body visual-support">
        <section className="visual-health">
          <div className="visual-ring visual-ring--96">
            <div>
              <strong>96%</strong>
              <span>salud</span>
            </div>
          </div>
          <div className="visual-health__metrics">
            <div><span>SLA</span><strong>99,8</strong></div>
            <div><span>CSAT</span><strong>4,8</strong></div>
            <div><span>Resp.</span><strong>4m</strong></div>
          </div>
        </section>

        <section className="visual-activity" aria-label="Actividad reciente">
          <div className="visual-activity__top">
            <span>Actividad</span>
            <span><IconCheck size={12} stroke={2} /> estable</span>
          </div>
          <div className="visual-bars">
            {[42, 68, 52, 86, 64, 94, 72, 58, 88, 70, 100, 82].map((height, index) => (
              <i style={{ height: `${height}%` }} key={index} />
            ))}
          </div>
        </section>

        <footer className="visual-specialist">
          <span className="support-specialist__avatar">FM</span>
          <div>
            <span>Especialista</span>
            <strong>Fernanda</strong>
          </div>
          <i aria-label="Disponible" />
        </footer>
      </div>
    </div>
  )
}
