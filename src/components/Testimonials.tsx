import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../constants'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section" style={{ background: `linear-gradient(180deg, transparent, rgba(245,158,11,.03) 50%, transparent)` }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="overline" style={{ display: 'block', marginBottom: '.6rem' }}>Depoimentos</span>
          <h2 className="headline">
            Quem ama,<br />
            <span className="grad-text">recomenda.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.25rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .55, delay: i * .1 }}
              className="card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{ display: 'flex', gap: 3 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} style={{ color: 'var(--c-amber)', fontSize: '.9rem' }}>★</span>
                ))}
              </div>

              <p style={{ color: 'var(--c-soft)', fontSize: '.9rem', lineHeight: 1.7, flex: 1 }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '.95rem', color: '#1a1208', flexShrink: 0 }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '.87rem', color: 'var(--c-white)' }}>{t.name}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--c-muted)' }}>{t.pet}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
