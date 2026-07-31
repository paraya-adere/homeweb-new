import type { IconType } from 'react-icons'
import { IconCpu, IconMail, IconMessageCircle, IconWebhook } from '@tabler/icons-react'

type Integration = {
  name: string
  icon?: IconType
  image?: string
}

type IntegrationGroup = {
  id: string
  title: string
  items: Integration[]
}

const CORE_GROUPS: IntegrationGroup[] = [
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    items: [
      { name: 'Shopify', image: 'integrations/shopify.svg' },
      { name: 'WooCommerce', image: 'integrations/woocommerce.svg' },
    ],
  },
  {
    id: 'crm',
    title: 'CRM',
    items: [
      { name: 'HubSpot', image: 'integrations/hubspot.svg' },
      { name: 'Salesforce', image: 'integrations/salesforce.svg' },
    ],
  },
  {
    id: 'protocols',
    title: 'Protocolos / API',
    items: [
      { name: 'Shopify UCP', image: 'integrations/shopify.svg' },
      { name: 'MCP', icon: IconCpu },
      { name: 'API + Webhooks', icon: IconWebhook },
    ],
  },
]

const CHANNELS: Integration[] = [
  { name: 'WhatsApp Business API', image: 'integrations/whatsapp.svg' },
  { name: 'Instagram Direct', image: 'integrations/instagram.svg' },
  { name: 'Facebook Messenger', image: 'integrations/messenger.svg' },
  { name: 'Chat web', icon: IconMessageCircle },
  { name: 'Email', icon: IconMail },
  { name: 'TikTok', image: 'integrations/tiktok.svg' },
  { name: 'X (Twitter)', image: 'integrations/x.svg' },
  { name: 'Gmail', image: 'integrations/gmail.svg' },
]

function IntegrationItem({ item }: { item: Integration }) {
  const Icon = item.icon

  return (
    <div className="integration-node" title={item.name}>
      <span className="integration-node__icon" aria-hidden="true">
        {Icon ? <Icon /> : <img src={item.image} alt="" />}
      </span>
      <span className="integration-node__name">{item.name}</span>
    </div>
  )
}

export function IntegrationMap() {
  return (
    <div className="connected__media integration-map" aria-label="Integraciones conectadas con Adereso">
      <div className="integration-map__topology">
        <div className="integration-hub">
          <img src="adereso-isotipo.png" alt="Adereso" width="64" height="64" />
          <div>
            <strong>Adereso</strong>
            <span>Centro de integraciones</span>
          </div>
        </div>

        <div className="integration-map__connector" aria-hidden="true">
          <span />
        </div>

        <div className="integration-map__groups">
          {CORE_GROUPS.map((group) => (
            <section className="integration-group" key={group.id}>
              <h3 className="integration-group__title">{group.title}</h3>
              <div className="integration-group__items">
                {group.items.map((item) => (
                  <IntegrationItem item={item} key={item.name} />
                ))}
                {(group.id === 'ecommerce' || group.id === 'crm') && (
                  <span className="integration-group__more">+ Integraciones</span>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="integration-group integration-group--channels">
        <h3 className="integration-group__title">Canales dentro de Adereso</h3>
        <div className="integration-group__items integration-group__items--channels">
          {CHANNELS.map((item) => (
            <IntegrationItem item={item} key={item.name} />
          ))}
        </div>
      </section>
    </div>
  )
}
