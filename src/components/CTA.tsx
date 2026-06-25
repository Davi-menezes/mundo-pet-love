import { motion } from 'framer-motion'
import { BUSINESS } from '../constants'

const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMsg)}`

export default function CTA() {
  return (
    <section style={{ padding: 'clamp(4rem,8vw,7rem) 1.5rem', position: 'relative', overflow: 'hidden' }}>

      {/* Background */}
      <div aria-hidden style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,18,8,.96) 0%, rgba(26,18,8,.82) 60%, rgba(26,18,8,.7) 100%)' }} />
        {/* amber glow */}
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(245,158,11,.14) 0%, transparent 65%)' }} />
      </div>

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="overline" style={{ display: 'block', marginBottom: '1rem' }}>
            Seu pet merece mais
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-.03em',
            color: 'var(--c-white)',
            marginBottom: '1.5rem',
            maxWidth: 700,
            margin: '0 auto 1.5rem',
          }}>
            Mais de <span className="grad-text">4.000 pets</span> já<br />
            encontraram o cuidado<br />que merecem aqui.
          </h2>

          <p style={{
            color: 'var(--c-muted)',
            fontSize: 'clamp(.95rem, 2vw, 1.15rem)',
            lineHeight: 1.75,
            maxWidth: 520,
            margin: '0 auto 2.5rem',
          }}>
            Saúde, beleza e bem-estar animal num único lugar — com uma equipe que trata seu pet como família. Venha conhecer ou agende agora pelo WhatsApp.
          </p>

          <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ fontSize: '1rem', padding: '1rem 2.25rem', boxShadow: '0 8px 32px rgba(245,158,11,.35)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.122 1.523 5.859L0 24l6.296-1.497A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.002-1.37l-.36-.213-3.736.889.938-3.63-.235-.374A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Agendar agora — é grátis
            </a>
            <a href="#servicos" className="btn-ghost" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
              Ver todos os serviços
            </a>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .3, duration: .6 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}
          >
            {[
              { icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>', text: 'Avaliação 4.9 no Google' },
              { icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', text: 'Equipe especializada' },
              { icon: '<path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>', text: 'Atendimento humanizado' },
            ].map(t => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: 'var(--c-muted)', fontSize: '.82rem', fontWeight: 500 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: t.icon }} />
                {t.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
