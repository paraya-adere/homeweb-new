import {
  IconCheck,
  IconPlugConnected,
  IconRocket,
} from '@tabler/icons-react'

const STEPS = [
  { label: 'Descubre', status: 'done' },
  { label: 'Conecta', status: 'done' },
  { label: 'Migra', status: 'active' },
  { label: 'Activa', status: 'pending' },
] as const

export function ImplementationMockup() {
  return (
    <div className="implementation-ui">
      <header className="implementation-ui__header">
        <div className="implementation-ui__brand">
          <img src="adereso-isotipo.png" alt="" />
          <div>
            <strong>Implementación</strong>
            <span>Proyecto Aura Retail</span>
          </div>
        </div>
      </header>

      <div className="implementation-ui__body visual-implementation">
        <section className="visual-progress">
          <div className="visual-ring visual-ring--62">
            <div>
              <strong>62%</strong>
              <span>avance</span>
            </div>
          </div>
        </section>

        <section className="visual-steps" aria-label="Progreso de implementación">
          {STEPS.map((step, index) => (
            <div className={`visual-step visual-step--${step.status}`} key={step.label}>
              <div className="visual-step__rail">
                <span>
                  {step.status === 'done' && <IconCheck size={13} stroke={2.4} />}
                  {step.status === 'active' && <IconPlugConnected size={14} stroke={1.8} />}
                  {step.status === 'pending' && <IconRocket size={14} stroke={1.7} />}
                </span>
                {index < STEPS.length - 1 && <i />}
              </div>
              <small>{step.label}</small>
            </div>
          ))}
        </section>

        <footer className="visual-footer">
          <span>Equipo asignado</span>
          <div className="visual-avatars">
            <span className="implementation-avatar">PA</span>
            <span className="implementation-avatar">CM</span>
            <span className="implementation-avatar">+2</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
