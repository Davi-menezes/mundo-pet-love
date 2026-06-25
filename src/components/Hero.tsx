import { motion } from 'framer-motion'
import { BUSINESS, STATS } from '../constants'

const promoWaUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar o primeiro Banho & Tosa do meu pet com o cupom de 15% de desconto de boas-vindas!')}`

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: .7, ease: [.25, .46, .45, .94] as const, delay },
})

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', padding: 'clamp(6rem,14vw,9rem) 1.5rem clamp(4rem,8vw,5rem)', overflow: 'hidden' }}>

      {/* ── Background: fullscreen photo + video motion layer ── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <video autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .22 }}>
          <source src="https://videos.pexels.com/video-files/3191390/3191390-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(26,18,8,.95) 0%, rgba(26,18,8,.8) 55%, rgba(26,18,8,.4) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to bottom, transparent, var(--c-bg))' }} />
      </div>

      {/* Warm ambient glows on top */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 700, background: 'radial-gradient(ellipse, rgba(245,158,11,.12) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(251,146,60,.08) 0%, transparent 65%)' }} />
      </div>

      {/* Content — centered, single column */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 720 }}>
          <motion.div {...up(0)} style={{ marginBottom: '1.25rem' }}>
            <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} className="promo-pulse" />
              Atendimento hoje em Porto Velho, RO
            </span>
          </motion.div>

          <motion.h1 {...up(.1)} className="display" style={{ marginBottom: '1.25rem', fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}>
            {BUSINESS.tagline.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === 1 ? <span className="grad-text">{line}</span> : line}
              </span>
            ))}
          </motion.h1>

          <motion.p {...up(.2)} style={{ color: 'var(--c-muted)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 520, marginBottom: '2.5rem' }}>
            {BUSINESS.sub}
          </motion.p>

          <motion.div {...up(.3)} style={{ display: 'flex', flexWrap: 'wrap', gap: '.9rem', marginBottom: '2.5rem' }}>
            <a href={promoWaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '0.95rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.122 1.523 5.859L0 24l6.296-1.497A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.002-1.37l-.36-.213-3.736.889.938-3.63-.235-.374A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              Quero 15% OFF no Banho & Tosa
            </a>
            <a href="#servicos" className="btn-ghost" style={{ padding: '1rem 2rem', fontSize: '0.95rem' }}>Ver serviços</a>
          </motion.div>

          {/* Attention-grabbing Welcome Offer Card */}
          <motion.div 
            {...up(.4)}
            className="card-warm"
            style={{
              padding: '1.25rem 1.5rem',
              marginBottom: '3rem',
              maxWidth: '520px',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              border: '1px dashed rgba(245,158,11,.45)',
              background: 'linear-gradient(135deg, rgba(46,32,16,0.85) 0%, rgba(31,22,10,0.85) 100%)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient decorative light inside the card */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(245,158,11,.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            <div style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              🎁
            </div>
            <div>
              <span className="badge" style={{ padding: '.15rem .6rem', fontSize: '.6rem', backgroundColor: 'var(--c-amber)', color: '#000', marginBottom: '.4rem', fontWeight: 900, border: 'none' }}>
                EXCLUSIVO SITE
              </span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '.95rem', color: 'var(--c-white)', marginTop: '0.2rem' }}>
                Primeira vez cuidando do seu pet conosco?
              </h4>
              <p style={{ color: 'var(--c-muted)', fontSize: '.78rem', lineHeight: 1.4, marginTop: '.2rem' }}>
                Use este cupom pelo WhatsApp e ganhe <strong style={{ color: 'var(--c-amber-lt)' }}>15% de desconto</strong> no Banho e Tosa ou <strong style={{ color: 'var(--c-amber-lt)' }}>avaliação clínica gratuita</strong> na primeira consulta.
              </p>
            </div>
          </motion.div>

          <motion.div {...up(.5)} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div className="stat-num">{s.value}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--c-muted)', fontWeight: 600, marginTop: '.2rem', letterSpacing: '.04em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
