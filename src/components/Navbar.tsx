import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BUSINESS } from '../constants'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem somos', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  
  const promoWaUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar o primeiro Banho & Tosa do meu pet com o cupom de 15% de desconto de boas-vindas!')}`
  const defaultWaUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMsg)}`

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(26,18,8,.94)' : 'rgba(26,18,8,.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(245,158,11,.15)' : '1px solid rgba(255,255,255,.05)',
        transition: 'background .3s, border-color .3s',
      }}
    >
      {/* Dynamic Promo Banner */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'linear-gradient(90deg, #ea580c 0%, #f59e0b 50%, #ea580c 100%)',
              color: '#000',
              fontSize: '.78rem',
              fontWeight: 800,
              textAlign: 'center',
              letterSpacing: '.03em',
              boxShadow: '0 4px 12px rgba(0,0,0,.25)',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 101,
            }}
          >
            <a 
              href={promoWaUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '.5rem',
                padding: '.5rem 1rem',
                textDecoration: 'none',
                color: '#1a1208',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span className="promo-pulse" style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: '#1a1208',
                borderRadius: '50%',
              }} />
              <span>🎁 OFERTA DE BOAS-VINDAS: Agende o 1º Banho & Tosa do seu pet com 15% OFF! </span>
              <span style={{ textDecoration: 'underline', fontWeight: 900 }}>Garantir Cupom →</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: scrolled ? '.75rem 1.5rem' : '1.1rem 1.5rem',
          transition: 'padding .3s',
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', textDecoration: 'none' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/>
            <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5"/>
            <path d="M8 14v.5"/>
            <path d="M16 14v.5"/>
            <path d="M11.25 16.25h1.5L12 17l-.75-.75z"/>
            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.25rem', color: 'var(--c-white)', letterSpacing: '-0.02em' }}>
            Mundo Pet<span style={{ color: 'var(--c-amber)' }}> Love</span>
          </span>
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: 'var(--c-muted)', fontSize: '.875rem', fontWeight: 600, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-soft)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-muted)')}
            >{l.label}</a>
          ))}
          <a href={defaultWaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '.55rem 1.3rem', fontSize: '.82rem', borderRadius: '50px' }}>
            Agendar agora
          </a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="mobile-burger" aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '.4rem', display: 'none' }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, background: 'var(--c-white)', borderRadius: 2,
              marginBottom: i < 2 ? 5 : 0,
              transition: 'transform .2s, opacity .2s',
              transform: open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,.06)', marginTop: '.75rem' }}>
              {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: 'var(--c-soft)', fontWeight: 600, textDecoration: 'none' }}>{l.label}</a>)}
              <a href={defaultWaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center' }}>Agendar agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .mobile-burger{display:block!important}
        }
        @keyframes promo-pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }
        .promo-pulse {
          animation: promo-pulse 1.8s infinite ease-in-out;
        }
      `}</style>
    </motion.header>
  )
}
