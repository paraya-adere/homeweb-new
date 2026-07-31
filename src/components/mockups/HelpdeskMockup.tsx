import { useEffect, useMemo, useState } from 'react'
import {
  IconBell,
  IconChecks,
  IconChevronDown,
  IconClock,
  IconDotsVertical,
  IconHourglass,
  IconInbox,
  IconLoader2,
  IconLock,
  IconMoodSmile,
  IconPaperclip,
  IconPlus,
  IconPuzzle,
  IconSearch,
  IconSend,
  IconSettings,
  IconSparkles,
  IconX,
} from '@tabler/icons-react'

type Channel = 'whatsapp' | 'instagram' | 'facebook' | 'email'
type ColumnId = 'nuevos' | 'en-proceso' | 'esperando'

interface Message {
  id: string
  role: 'customer' | 'agent' | 'system'
  text: string
  time: string
  isAi?: boolean
  isInternal?: boolean
  product?: { name: string; price: string; imageUrl: string }
  cart?: { items: { name: string; qty: number; price: string }[]; total: string }
}

interface Ticket {
  id: string
  ticketNumber: number
  columnId: ColumnId
  createdAt: string
  name: string
  initials: string
  avatarColor: string
  detail: string
  email?: string
  channel: Channel
  slaAlert?: string
  preview: string
  previewInternal?: boolean
  unreadCount?: number
  thread: Message[]
}

const AGENT = { initials: 'PL', name: 'Pedro L.', color: '#5B7C99' }

const CHANNEL_COLOR: Record<Channel, string> = {
  whatsapp: '#25D366',
  instagram: '#E1306C',
  facebook: '#1877F2',
  email: '#F59E0B',
}

const CHANNEL_LABEL: Record<Channel, string> = {
  whatsapp: 'WhatsApp',
  instagram: 'Instagram',
  facebook: 'Facebook',
  email: 'Email',
}

function defaultThread(ticket: Ticket): Message[] {
  return [
    {
      id: `${ticket.id}-c1`,
      role: 'customer',
      text: ticket.preview,
      time: ticket.createdAt.split(', ')[1] ?? '10:00',
    },
    {
      id: `${ticket.id}-a1`,
      role: 'agent',
      text: `Hola ${ticket.name.split(' ')[0]}, gracias por escribirnos. Estoy revisando tu caso ahora mismo.`,
      time: '14:30',
    },
  ]
}

const TICKETS: Ticket[] = [
  {
    id: 't1',
    ticketNumber: 71117,
    columnId: 'nuevos',
    createdAt: '15 Jul, 09:12',
    name: 'María Castillo',
    initials: 'MC',
    avatarColor: '#7B6B99',
    detail: '+56 9 8765 4321',
    email: 'maria.castillo@email.com',
    channel: 'whatsapp',
    slaAlert: 'hace 3h',
    preview: 'Hola, necesito ayuda con mi pedido #4521 que no ha llegado…',
    unreadCount: 3,
    thread: [
      {
        id: 't1-m1',
        role: 'customer',
        text: 'Hola, necesito ayuda con mi pedido #4521 que no ha llegado…',
        time: '09:12',
      },
      {
        id: 't1-m2',
        role: 'customer',
        text: 'Lo pedí el lunes y el tracking no se actualiza desde ayer.',
        time: '09:13',
      },
      {
        id: 't1-m3',
        role: 'agent',
        text: 'Hola María, gracias por escribirnos. Estoy revisando el estado de tu pedido ahora.',
        time: '14:28',
      },
      {
        id: 't1-m4',
        role: 'agent',
        text: 'El paquete está en reparto y debería llegar hoy entre 16:00 y 20:00. ¿Te parece bien si te aviso cuando salga a ruta?',
        time: '14:30',
      },
    ],
  },
  {
    id: 't2',
    ticketNumber: 71118,
    columnId: 'nuevos',
    createdAt: '15 Jul, 10:05',
    name: 'Roberto Díaz',
    initials: 'RD',
    avatarColor: '#996B6B',
    detail: '@robertodiaz',
    channel: 'instagram',
    preview: '¿Tienen stock del modelo azul en talla M?',
    unreadCount: 1,
    thread: [],
  },
  {
    id: 't3',
    ticketNumber: 71119,
    columnId: 'nuevos',
    createdAt: '15 Jul, 08:40',
    name: 'Ana López',
    initials: 'AL',
    avatarColor: '#6B8B7A',
    detail: 'ana.lopez@email.com',
    email: 'ana.lopez@email.com',
    channel: 'email',
    slaAlert: 'hace 5h',
    preview: 'Cliente VIP — priorizar respuesta urgente',
    previewInternal: true,
    unreadCount: 5,
    thread: [
      {
        id: 't3-m1',
        role: 'system',
        text: 'Nota interna: Cliente VIP — priorizar respuesta urgente',
        time: '08:40',
        isInternal: true,
      },
      {
        id: 't3-m2',
        role: 'customer',
        text: 'Necesito una respuesta hoy sobre mi cuenta enterprise.',
        time: '08:42',
      },
    ],
  },
  {
    id: 't4',
    ticketNumber: 71120,
    columnId: 'nuevos',
    createdAt: '15 Jul, 11:30',
    name: 'Carlos Mena',
    initials: 'CM',
    avatarColor: '#6B7A99',
    detail: '+56 9 1234 5678',
    channel: 'facebook',
    preview: 'Buenas, quisiera cambiar la dirección de envío…',
    thread: [],
  },
  {
    id: 't5',
    ticketNumber: 71121,
    columnId: 'nuevos',
    createdAt: '15 Jul, 07:55',
    name: 'Sofía Ruiz',
    initials: 'SR',
    avatarColor: '#996B8B',
    detail: '@sofiaruiz',
    channel: 'instagram',
    slaAlert: 'hace 45m',
    preview: 'Mi pago fue rechazado pero me cobraron igual 😕',
    unreadCount: 2,
    thread: [
      {
        id: 't5-m1',
        role: 'customer',
        text: 'Mi pago fue rechazado pero me cobraron igual 😕',
        time: '07:55',
      },
      {
        id: 't5-m2',
        role: 'customer',
        text: 'El banco me aparece el cargo duplicado.',
        time: '07:56',
      },
    ],
  },
  {
    id: 't6',
    ticketNumber: 71098,
    columnId: 'en-proceso',
    createdAt: '14 Jul, 16:20',
    name: 'Sandra Vega',
    initials: 'SV',
    avatarColor: '#7A6B8B',
    detail: '+56 9 5555 1234',
    channel: 'whatsapp',
    preview: 'Perfecto, espero la confirmación del reembolso…',
    unreadCount: 1,
    thread: [
      {
        id: 't6-m1',
        role: 'customer',
        text: 'Quiero cancelar mi compra de ayer.',
        time: '16:20',
      },
      {
        id: 't6-m2',
        role: 'agent',
        text: 'Listo Sandra, inicié el reembolso. Debería verse en 3 a 5 días hábiles.',
        time: '17:05',
      },
      {
        id: 't6-m3',
        role: 'customer',
        text: 'Perfecto, espero la confirmación del reembolso…',
        time: '17:10',
      },
    ],
  },
  {
    id: 't7',
    ticketNumber: 71099,
    columnId: 'en-proceso',
    createdAt: '14 Jul, 14:10',
    name: 'Diego Torres',
    initials: 'DT',
    avatarColor: '#6B996B',
    detail: 'diego.t@empresa.cl',
    email: 'diego.t@empresa.cl',
    channel: 'email',
    slaAlert: 'hace 1d',
    preview: 'Esperando factura del proveedor para avanzar',
    previewInternal: true,
    thread: [
      {
        id: 't7-m1',
        role: 'system',
        text: 'Esperando factura del proveedor para avanzar',
        time: '14:10',
        isInternal: true,
      },
      {
        id: 't7-m2',
        role: 'customer',
        text: '¿Tienen novedades de mi cotización B2B?',
        time: '14:15',
      },
    ],
  },
  {
    id: 't8',
    ticketNumber: 71100,
    columnId: 'en-proceso',
    createdAt: '15 Jul, 08:00',
    name: 'Valentina Paz',
    initials: 'VP',
    avatarColor: '#8B7A6B',
    detail: '@valenpaz',
    channel: 'instagram',
    preview: 'Gracias! Ya adjunto el comprobante de pago.',
    unreadCount: 4,
    thread: [],
  },
  {
    id: 't9',
    ticketNumber: 71101,
    columnId: 'en-proceso',
    createdAt: '14 Jul, 18:45',
    name: 'Luis Herrera',
    initials: 'LH',
    avatarColor: '#6B8B99',
    detail: '+56 9 9876 5432',
    channel: 'whatsapp',
    preview: '¿Me pueden confirmar el horario de retiro?',
    thread: [],
  },
  {
    id: 't10',
    ticketNumber: 71102,
    columnId: 'en-proceso',
    createdAt: '13 Jul, 11:00',
    name: 'Patricia Gómez',
    initials: 'PG',
    avatarColor: '#996B7A',
    detail: 'patricia.g@mail.com',
    email: 'patricia.g@mail.com',
    channel: 'facebook',
    slaAlert: 'hace 2d',
    preview: 'Sigo sin respuesta sobre la garantía del producto…',
    unreadCount: 7,
    thread: [
      {
        id: 't10-m1',
        role: 'customer',
        text: 'El producto falló a los 10 días. Quiero garantía.',
        time: '11:00',
      },
      {
        id: 't10-m2',
        role: 'agent',
        text: 'Patricia, ya elevamos el caso a garantía. Te respondemos con el RMA.',
        time: '15:20',
      },
      {
        id: 't10-m3',
        role: 'customer',
        text: 'Sigo sin respuesta sobre la garantía del producto…',
        time: '09:40',
      },
    ],
  },
  {
    id: 't11',
    ticketNumber: 71050,
    columnId: 'esperando',
    createdAt: '12 Jul, 09:30',
    name: 'Fernando Rojas',
    initials: 'FR',
    avatarColor: '#7A8B6B',
    detail: '+56 9 7841 2396',
    email: 'fernando.rojas@gmail.com',
    channel: 'whatsapp',
    slaAlert: 'hace 12m',
    preview: 'Si! Agrégala a mi carrito',
    thread: [
      {
        id: 't11-m1',
        role: 'agent',
        text: '',
        time: '15:42',
        isAi: true,
        product: {
          name: 'Cafetera de Cápsulas Aura',
          price: '$84.990',
          imageUrl: 'cafetera-aura.png',
        },
      },
      {
        id: 't11-m2',
        role: 'customer',
        text: 'Vi esta cafetera en la tienda, me interesa comprarla',
        time: '15:44',
      },
      {
        id: 't11-m3',
        role: 'agent',
        text: 'Sí, está en stock. ¿La agrego a tu carrito?',
        time: '15:44',
        isAi: true,
      },
      {
        id: 't11-m4',
        role: 'customer',
        text: 'Si! Agrégala a mi carrito',
        time: '15:45',
      },
      {
        id: 't11-m5',
        role: 'agent',
        text: 'Listo, la agregué a tu carrito de Shopify.',
        time: '15:46',
        isAi: true,
        cart: {
          items: [{ name: 'Cafetera de Cápsulas Aura', qty: 1, price: '$84.990' }],
          total: '$84.990',
        },
      },
    ],
  },
  {
    id: 't12',
    ticketNumber: 71051,
    columnId: 'esperando',
    createdAt: '13 Jul, 15:20',
    name: 'Camila Soto',
    initials: 'CS',
    avatarColor: '#8B6B99',
    detail: '@camisoto',
    channel: 'instagram',
    preview: 'Ok, les confirmo mañana si me sirve el cambio.',
    unreadCount: 12,
    thread: [
      {
        id: 't12-m1',
        role: 'customer',
        text: 'Pedí talla S pero necesito M. ¿Puedo cambiar?',
        time: '15:20',
      },
      {
        id: 't12-m2',
        role: 'agent',
        text: 'Claro Camila. Te dejamos el cambio habilitado por 48 hrs.',
        time: '15:40',
        isAi: true,
      },
      {
        id: 't12-m3',
        role: 'customer',
        text: 'Ok, les confirmo mañana si me sirve el cambio.',
        time: '16:02',
      },
    ],
  },
  {
    id: 't13',
    ticketNumber: 71052,
    columnId: 'esperando',
    createdAt: '11 Jul, 10:00',
    name: 'Jorge Peña',
    initials: 'JP',
    avatarColor: '#6B7A8B',
    detail: 'jorge.pena@corp.cl',
    email: 'jorge.pena@corp.cl',
    channel: 'email',
    slaAlert: 'hace 4d',
    preview: 'Escalado a supervisor — pendiente aprobación commercial',
    previewInternal: true,
    thread: [
      {
        id: 't13-m1',
        role: 'system',
        text: 'Escalado a supervisor — pendiente aprobación commercial',
        time: '10:00',
        isInternal: true,
      },
      {
        id: 't13-m2',
        role: 'customer',
        text: 'Necesito factura electrónica del pedido corporativo.',
        time: '10:05',
      },
    ],
  },
  {
    id: 't14',
    ticketNumber: 71053,
    columnId: 'esperando',
    createdAt: '14 Jul, 12:15',
    name: 'Elena Muñoz',
    initials: 'EM',
    avatarColor: '#997A6B',
    detail: '+56 9 4444 1111',
    channel: 'facebook',
    preview: 'Recibí el paquete, pero faltan 2 unidades del pedido.',
    unreadCount: 2,
    thread: [],
  },
  {
    id: 't15',
    ticketNumber: 71054,
    columnId: 'esperando',
    createdAt: '10 Jul, 08:50',
    name: 'Andrés Silva',
    initials: 'AS',
    avatarColor: '#6B998B',
    detail: '@andressilva',
    channel: 'instagram',
    slaAlert: 'hace 5d',
    preview: '¿Ya tienen novedades del envío internacional?',
    unreadCount: 1,
    thread: [],
  },
]

const COLUMNS: {
  id: ColumnId
  title: string
  icon: 'inbox' | 'spinner' | 'hourglass'
  count: number
  newUpdates?: number
}[] = [
  { id: 'nuevos', title: 'Nuevos', icon: 'inbox', count: 12, newUpdates: 2 },
  { id: 'en-proceso', title: 'En proceso', icon: 'spinner', count: 8 },
  { id: 'esperando', title: 'Esperando respuesta', icon: 'hourglass', count: 104 },
]

function Avatar({
  initials,
  color,
  size = 40,
}: {
  initials: string
  color: string
  size?: number
}) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: Math.max(10, size * 0.32),
      }}
    >
      {initials}
    </span>
  )
}

function ChannelBadge({ channel }: { channel: Channel }) {
  return (
    <span
      className="absolute -right-0.5 -bottom-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#141414] text-white"
      style={{ backgroundColor: CHANNEL_COLOR[channel] }}
      title={CHANNEL_LABEL[channel]}
    >
      {channel === 'whatsapp' && (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )}
      {channel === 'instagram' && (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )}
      {channel === 'facebook' && (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )}
      {channel === 'email' && (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 7L2 7" />
        </svg>
      )}
    </span>
  )
}

function TicketCard({
  ticket,
  selected,
  onSelect,
  compact,
}: {
  ticket: Ticket
  selected?: boolean
  onSelect: (id: string) => void
  compact?: boolean
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(ticket.id)}
      className={`group relative w-full rounded-lg border bg-[#141414] text-left transition-colors ${
        compact ? 'px-3.5 py-3' : 'px-4 py-4'
      } ${
        selected
          ? 'border-[rgba(91,108,255,0.45)]'
          : 'border-transparent hover:border-white/8'
      }`}
    >
      <div className={`mb-3 flex items-center gap-2.5 ${compact ? 'mb-2' : ''}`}>
        <div className="relative shrink-0">
          <Avatar initials={ticket.initials} color={ticket.avatarColor} size={compact ? 34 : 40} />
          <ChannelBadge channel={ticket.channel} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-[#e8e8e8]">{ticket.name}</p>
        </div>
        <span
          className={`shrink-0 text-[11px] ${
            ticket.slaAlert ? 'font-medium text-[#f87171]' : 'text-[#5a5a5a]'
          }`}
        >
          {ticket.slaAlert ?? ticket.createdAt.split(', ')[1] ?? 'hoy'}
        </span>
      </div>

      <p className="mb-3 line-clamp-2 text-[12.5px] leading-relaxed text-[#8a8a8a]">
        {ticket.previewInternal && (
          <IconLock size={11} stroke={1.5} className="mr-1 inline -translate-y-px text-[#5a5a5a]" />
        )}
        <span className={ticket.previewInternal ? 'italic text-[#5a5a5a]' : undefined}>
          {ticket.preview}
        </span>
      </p>

      <div className="flex items-center gap-2">
        <span className="text-[11px] text-[#5a5a5a]">#{ticket.ticketNumber}</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#1a1a1a] px-1.5 py-0.5">
          <Avatar initials={AGENT.initials} color={AGENT.color} size={16} />
          <span className="pr-0.5 text-[10px] text-[#8a8a8a]">{AGENT.name}</span>
        </span>
        <IconDotsVertical size={13} stroke={1.5} className="text-[#5a5a5a]" />
      </div>
    </button>
  )
}

function ChatBubble({ msg }: { msg: Message }) {
  if (msg.role === 'system' || msg.isInternal) {
    return (
      <p className="self-center rounded-full bg-[#262626] px-3 py-1 text-[11px] text-[#8a8a8a]">
        {msg.text}
      </p>
    )
  }

  const isAgent = msg.role === 'agent'
  return (
    <div
      className={`flex max-w-[82%] flex-col gap-1 ${
        isAgent ? 'self-end items-end' : 'self-start items-start'
      }`}
    >
      <div
        className={`overflow-hidden rounded-[10px] text-[13px] leading-relaxed ${
          isAgent
            ? msg.isAi
              ? 'rounded-br-[4px] bg-[#1f3a2a] text-[#e8e8e8]'
              : 'rounded-br-[4px] bg-[#5b6cff] text-white'
            : 'rounded-bl-[4px] border border-[#1f1f1f] bg-[#141414] text-[#e8e8e8]'
        } ${msg.product || msg.cart ? 'p-2.5' : 'px-3.5 py-2.5'}`}
      >
        {msg.product && (
          <div>
            <img
              src={msg.product.imageUrl}
              alt={msg.product.name}
              className="h-32 w-full rounded-md object-cover"
            />
            <div className="space-y-0.5 px-0.5 pt-2.5 pb-0.5">
              <p className="font-semibold text-white">{msg.product.name}</p>
              <p className="text-[14px] font-medium text-white/90">{msg.product.price}</p>
            </div>
          </div>
        )}
        {msg.cart && (
          <div className="space-y-2.5 px-0.5">
            {msg.text && <p>{msg.text}</p>}
            <ul className="space-y-1.5 border-y border-white/10 py-2">
              {msg.cart.items.map((item) => (
                <li key={item.name} className="flex justify-between gap-3 text-[13px]">
                  <span className="text-white">{item.name}</span>
                  <span className="tabular-nums text-white/70">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-[13px] text-white/70">
              <span>Total</span>
              <strong className="text-white">{msg.cart.total}</strong>
            </div>
            <span className="inline-block text-[13px] font-medium text-[#9fd4b5] underline underline-offset-2">
              Ver carrito en Shopify
            </span>
          </div>
        )}
        {msg.text && !msg.cart && (
          <p className={msg.product ? 'mt-2 border-t border-white/10 px-0.5 pt-2.5' : undefined}>
            {msg.text}
          </p>
        )}
      </div>
      <div className="flex items-center gap-1 px-1 text-[11px] text-[#5a5a5a]">
        <span>{msg.time}</span>
        {isAgent && <IconChecks size={12} stroke={1.5} className="text-[#5b6cff]" />}
      </div>
    </div>
  )
}

function ColumnIcon({ icon }: { icon: 'inbox' | 'spinner' | 'hourglass' }) {
  const className = 'text-[#5b6cff] opacity-80'
  if (icon === 'inbox') return <IconInbox size={15} stroke={1.5} className={className} />
  if (icon === 'spinner') {
    return (
      <IconLoader2
        size={15}
        stroke={1.5}
        className={`${className} animate-spin`}
        style={{ animationDuration: '3s' }}
      />
    )
  }
  return <IconHourglass size={15} stroke={1.5} className={className} />
}

function BoardView({
  onSelect,
  compact = false,
}: {
  onSelect: (id: string) => void
  compact?: boolean
}) {
  const visibleColumns = compact
    ? COLUMNS.filter((col) => col.id === 'esperando')
    : COLUMNS

  return (
    <div
      className={`scrollbar-hide flex h-full min-h-0 overflow-x-auto ${
        compact ? 'gap-2 p-2' : 'gap-3 p-3'
      }`}
      role="region"
      aria-label="Columnas de tickets"
    >
      {visibleColumns.map((col) => {
        const tickets = TICKETS.filter((t) => t.columnId === col.id).slice(
          0,
          compact ? 4 : 3,
        )
        return (
          <div
            key={col.id}
            className={`flex h-full shrink-0 flex-col overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] ${
              compact ? 'w-full' : 'w-[320px]'
            }`}
          >
            <div className="flex items-center gap-2 border-b border-[#1f1f1f] bg-[#1a1a1a] px-3 py-2.5">
              <ColumnIcon icon={col.icon} />
              <span className="min-w-0 flex-1 truncate text-[13px] font-semibold text-[#e8e8e8]">
                {col.title}
              </span>
              <span className="rounded-full bg-[#262626] px-2 py-0.5 text-[11px] tabular-nums text-[#8a8a8a]">
                {col.count > 99 ? '99+' : col.count}
              </span>
              <IconDotsVertical size={14} stroke={1.5} className="text-[#5a5a5a]" />
            </div>

            {col.newUpdates ? (
              <button
                type="button"
                className="mx-2 mt-2 rounded-md bg-[#1e2444] px-2.5 py-1.5 text-left text-[11px] font-medium text-[#a5b4fc]"
              >
                {col.newUpdates} actualizaciones nuevas
              </button>
            ) : null}

            <div className="flex-1 space-y-2 overflow-hidden p-2">
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
              ))}
            </div>

            <div className="flex h-10 shrink-0 items-center justify-center border-t border-[#1f1f1f] text-[11px] text-[#5a5a5a]">
              Ver más
            </div>
          </div>
        )
      })}
    </div>
  )
}

function TicketDetail({
  ticket,
  columnTickets,
  columnTitle,
  onSelect,
  onClose,
}: {
  ticket: Ticket
  columnTickets: Ticket[]
  columnTitle: string
  onSelect: (id: string) => void
  onClose: () => void
}) {
  const thread = ticket.thread.length ? ticket.thread : defaultThread(ticket)
  const [firstName, ...rest] = ticket.name.split(' ')
  const lastName = rest.join(' ') || '—'

  return (
    <div className="flex h-full min-h-0 gap-3 p-3">
      <aside className="hidden w-[290px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] sm:flex">
        <div className="flex items-center gap-2 border-b border-[#1f1f1f] bg-[#1a1a1a] px-3 py-2.5">
          <IconHourglass size={14} stroke={1.5} className="text-[#5b6cff] opacity-80" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-[#e8e8e8]">{columnTitle}</p>
            <p className="text-[11px] text-[#5a5a5a]">{columnTickets.length} visibles</p>
          </div>
        </div>
        <div className="flex-1 space-y-2 overflow-hidden p-2">
          {columnTickets.slice(0, 4).map((t) => (
            <TicketCard
              key={t.id}
              ticket={t}
              selected={t.id === ticket.id}
              onSelect={onSelect}
              compact
            />
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#141414]">
        <header className="flex shrink-0 items-start gap-3 border-b border-[#1f1f1f] px-4 py-3.5">
          <div className="relative shrink-0">
            <Avatar initials={ticket.initials} color={ticket.avatarColor} size={42} />
            <ChannelBadge channel={ticket.channel} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-[15px] font-semibold tracking-tight text-[#e8e8e8]">
              {ticket.name}{' '}
              <span className="font-normal text-[#5a5a5a]">#{ticket.ticketNumber}</span>
            </h2>
            <p className="mt-0.5 text-[12px] text-[#8a8a8a]">
              {ticket.detail} · {CHANNEL_LABEL[ticket.channel]} · creado {ticket.createdAt}
            </p>
          </div>
          {ticket.slaAlert && (
            <span className="rounded-full bg-[#f87171]/15 px-2.5 py-1 text-[11px] font-medium text-[#f87171]">
              {ticket.slaAlert}
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5a5a5a] hover:bg-white/5 hover:text-[#e8e8e8]"
            aria-label="Cerrar"
          >
            <IconX size={16} stroke={1.5} />
          </button>
        </header>

        <div className="scrollbar-hide flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-3">
          {thread.map((msg) => (
            <ChatBubble key={msg.id} msg={msg} />
          ))}
        </div>

        <footer className="shrink-0 border-t border-[#1f1f1f] px-3 py-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[12px] text-[#8a8a8a]"
            >
              <IconClock size={13} stroke={1.5} />
              Ignorar
            </button>
            <div className="flex items-center gap-2 text-[11px] text-[#5a5a5a]">
              <Avatar initials={AGENT.initials} color={AGENT.color} size={18} />
              {AGENT.name}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]">
            <div className="px-3.5 py-3 text-[13px] text-[#5a5a5a]">Escribe un mensaje...</div>
            <div className="flex items-center gap-1 border-t border-[#1f1f1f] px-2 py-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5a5a5a]">
                <IconPaperclip size={15} stroke={1.5} />
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5a5a5a]">
                <IconMoodSmile size={15} stroke={1.5} />
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5a5a5a]">
                <IconSparkles size={15} stroke={1.5} />
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-3 py-1.5 text-[12px] font-medium text-[#c8c8c8]">
                <IconSend size={13} stroke={1.5} />
                Enviar
              </span>
            </div>
          </div>
        </footer>
      </div>

      <aside className="hidden w-[260px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#141414] lg:flex">
        <div className="border-b border-[#1f1f1f] px-4 py-3">
          <p className="text-[13px] font-semibold text-[#e8e8e8]">Datos del perfil</p>
        </div>
        <div className="overflow-hidden p-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
            {[
              ['Nombre', firstName],
              ['Apellido', lastName],
              ['Email', ticket.email ?? '—'],
              ['Teléfono', ticket.detail.startsWith('+') ? ticket.detail : '—'],
              ['Canal', CHANNEL_LABEL[ticket.channel]],
              ['Ticket', `#${ticket.ticketNumber}`],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0">
                <p className="mb-1 text-[9px] tracking-wide text-[#5a5a5a] uppercase">{label}</p>
                <p className="truncate text-[12px] leading-snug text-[#e8e8e8]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-[#1f1f1f] pt-2.5">
            <p className="mb-1.5 text-[9px] tracking-wide text-[#5a5a5a] uppercase">
              Integración
            </p>
            <div className="flex items-center gap-2 rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1.5">
              <img
                src="https://cdn.simpleicons.org/shopify/96bf48"
                alt="Shopify"
                className="h-4 w-4 shrink-0"
              />
              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium text-[#e8e8e8]">Shopify</p>
                <p className="truncate text-[10px] text-[#8a8a8a]">Aura Store · conectada</p>
              </div>
            </div>
          </div>

          <div className="mt-3 border-t border-[#1f1f1f] pt-2.5">
            <p className="mb-1.5 text-[9px] tracking-wide text-[#5a5a5a] uppercase">
              Pedidos anteriores
            </p>
            <div className="space-y-1.5">
              <div className="rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-[#e8e8e8]">#1042</p>
                  <span className="text-[10px] text-[#22c55e]">Entregado</span>
                </div>
                <p className="truncate text-[10px] text-[#8a8a8a]">
                  Cápsulas Intensidad Fuerte · $12.990
                </p>
              </div>
              <div className="rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-[#e8e8e8]">#0987</p>
                  <span className="text-[10px] text-[#22c55e]">Entregado</span>
                </div>
                <p className="truncate text-[10px] text-[#8a8a8a]">
                  Pack mugs Aura ×2 · $18.900
                </p>
              </div>
              <div className="rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-[#e8e8e8]">#0911</p>
                  <span className="text-[10px] text-[#22c55e]">Entregado</span>
                </div>
                <p className="truncate text-[10px] text-[#8a8a8a]">
                  Cápsulas Vainilla · $11.490
                </p>
              </div>
              <div className="rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-[#e8e8e8]">#0844</p>
                  <span className="text-[10px] text-[#fbbf24]">En tránsito</span>
                </div>
                <p className="truncate text-[10px] text-[#8a8a8a]">
                  Descafeinado Aura · $13.490
                </p>
              </div>
              <div className="rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] px-2 py-1.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-medium text-[#e8e8e8]">#0780</p>
                  <span className="text-[10px] text-[#22c55e]">Entregado</span>
                </div>
                <p className="truncate text-[10px] text-[#8a8a8a]">
                  Filtros reutilizables · $9.990
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export function HelpdeskMockup() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false,
  )
  const [selectedId, setSelectedId] = useState<string | null>(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 767px)').matches
      ? null
      : 't11',
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => {
      const mobile = mq.matches
      setIsMobile(mobile)
      // Switching to mobile always lands on the conversation column.
      if (mobile) setSelectedId(null)
      // Switching to desktop restores the default open ticket if nothing is selected.
      else setSelectedId((prev) => prev ?? 't11')
    }
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const selected = useMemo(
    () => TICKETS.find((t) => t.id === selectedId) ?? null,
    [selectedId],
  )
  const columnMeta = COLUMNS.find((c) => c.id === selected?.columnId)
  const columnTickets = selected
    ? TICKETS.filter((t) => t.columnId === selected.columnId)
    : []
  const showDetail = Boolean(selected && columnMeta)

  return (
    <div className="flex h-[580px] overflow-hidden bg-[#0a0a0a] text-[13px] sm:h-[640px] lg:h-[700px]">
      <aside className="hidden w-[56px] shrink-0 flex-col items-center border-r border-[#1f1f1f] bg-[#0d0d0d] py-3 sm:flex">
        {[IconPlus, IconPuzzle, IconSearch, IconSettings].map((Icon, i) => (
          <span
            key={i}
            className="mb-0.5 flex h-9 w-9 items-center justify-center rounded-lg text-[#8a8a8a]"
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
              <IconInbox size={14} stroke={1.5} />
              Bandeja de entrada
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[12px] text-[#8a8a8a]">
              Analítica
              <IconChevronDown size={13} stroke={1.5} />
            </span>
            <span className="px-2.5 py-1.5 text-[12px] text-[#8a8a8a]">Módulos</span>
            <span className="px-2.5 py-1.5 text-[12px] text-[#8a8a8a]">Administrador</span>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md text-[#8a8a8a]">
              <IconBell size={16} stroke={1.5} />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#f87171]" />
            </span>
            <div className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[12px] text-[#e8e8e8]">
              <Avatar initials={AGENT.initials} color={AGENT.color} size={22} />
              <span className="hidden sm:inline">{AGENT.name}</span>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1">
          {showDetail && selected && columnMeta ? (
            <TicketDetail
              ticket={selected}
              columnTickets={columnTickets}
              columnTitle={columnMeta.title}
              onSelect={setSelectedId}
              onClose={() => setSelectedId(null)}
            />
          ) : (
            <BoardView compact={isMobile} onSelect={setSelectedId} />
          )}
        </div>
      </div>
    </div>
  )
}
