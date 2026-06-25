import { BUSINESS } from '../constants'

export default function Footer() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.waMsg)}`
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.05)', padding: '3rem 1.5rem' }}>
      <div className="container footer-inner" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.35rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309"/></svg>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--c-white)' }}>Mundo Pet Love</span>
          </div>
          <p style={{ color: 'var(--c-muted)', fontSize: '.78rem' }}>{BUSINESS.address}</p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Serviços', href: '#servicos' },
            { label: 'Sobre', href: '#sobre' },
            { label: 'Contato', href: '#contato' },
            { label: 'WhatsApp', href: waUrl, ext: true },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noopener noreferrer' : undefined}
              style={{ color: 'var(--c-muted)', fontSize: '.82rem', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-amber)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-muted)')}
            >{l.label}</a>
          ))}
        </div>

        <p style={{ color: 'var(--c-muted)', fontSize: '.75rem' }}>
          © {new Date().getFullYear()} Mundo Pet Love · Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
