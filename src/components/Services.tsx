import { motion } from 'framer-motion'
import { SERVICES } from '../constants'

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="overline" style={{ display: 'block', marginBottom: '.6rem' }}>O que fazemos</span>
          <h2 className="headline">
            Tudo que seu pet<br />
            <span className="grad-text">precisa e ama.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.25rem' }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .55, delay: i * .1 }}
              whileHover={{ y: -5 }}
              className="card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, transparent)`, borderRadius: '20px 20px 0 0' }} />

              <div className="icon-wrap" style={{ background: s.bg }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: s.icon }} />
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--c-white)', marginBottom: '.4rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--c-muted)', fontSize: '.85rem', lineHeight: 1.65 }}>{s.desc}</p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', marginTop: 'auto', paddingTop: '.5rem', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                {s.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '.55rem', fontSize: '.82rem', color: 'var(--c-soft)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0, display: 'inline-block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
