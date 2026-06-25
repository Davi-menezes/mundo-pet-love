import { motion } from 'framer-motion'
import { BUSINESS } from '../constants'

const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMsg)}`

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.122 1.523 5.859L0 24l6.296-1.497A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.002-1.37l-.36-.213-3.736.889.938-3.63-.235-.374A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
)

const cards = [
  {
    icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    label: 'Endereço',
    value: BUSINESS.address,
    link: { href: BUSINESS.mapsUrl, text: 'Ver no mapa →' },
  },
  {
    icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.99 5.99l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
    label: 'Telefone',
    value: BUSINESS.phone,
    link: { href: `tel:${BUSINESS.phone}`, text: 'Ligar →' },
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    label: 'Horário',
    value: 'Seg–Sex: 8h–18h\nSáb: 8h–14h',
    link: null,
  },
]

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}
          style={{ background: 'linear-gradient(135deg, #2e2010, #1f160a)', border: '1px solid rgba(245,158,11,.18)', borderRadius: 28, padding: 'clamp(2rem,5vw,3.5rem)', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', right: '-5%', top: '-40%', width: 320, height: 320, background: 'radial-gradient(ellipse, rgba(245,158,11,.12), transparent 70%)', pointerEvents: 'none' }} />
          <div>
            <h2 className="headline" style={{ marginBottom: '.5rem' }}>
              Pronto para agendar?<br />
              <span className="grad-text">A gente cuida do resto.</span>
            </h2>
            <p style={{ color: 'var(--c-muted)', fontSize: '.95rem' }}>Resposta rápida no WhatsApp, sem complicação.</p>
          </div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem', boxShadow: '0 8px 28px rgba(245,158,11,.3)', flexShrink: 0 }}>
            <WaIcon />
            Chamar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}
        >
          {cards.map(c => (
            <div key={c.label} className="card" style={{ padding: '1.5rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(245,158,11,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: c.icon }} />
              </div>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--c-amber)', marginBottom: '.35rem' }}>{c.label}</div>
              <div style={{ color: 'var(--c-soft)', fontSize: '.88rem', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{c.value}</div>
              {c.link && (
                <a href={c.link.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '.5rem', color: 'var(--c-amber)', fontSize: '.8rem', fontWeight: 600, textDecoration: 'none' }}>
                  {c.link.text}
                </a>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
