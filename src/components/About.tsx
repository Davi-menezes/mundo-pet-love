import { motion } from 'framer-motion'

const pillars = [
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    title: 'Equipe apaixonada',
    desc: 'Veterinários e groomers que amam o que fazem e cuidam do seu pet com dedicação real.',
  },
  {
    icon: '<path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>',
    title: 'Produtos selecionados',
    desc: 'Só usamos produtos de alta qualidade, seguros e testados para o bem-estar do seu animal.',
  },
  {
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    title: 'Ambiente acolhedor',
    desc: 'Um espaço limpo, tranquilo e pensado para deixar seu pet confortável e seguro.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '4rem', alignItems: 'center' }}>

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="about-mosaic"
            style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '200px 200px', gap: 12, paddingBottom: 32 }}
          >
            <div style={{ gridRow: '1/3', borderRadius: 24, overflow: 'hidden' }}>
              <img src="https://images.pexels.com/photos/6816860/pexels-photo-6816860.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cachorro no banho" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 24, overflow: 'hidden' }}>
              <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gato fofo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 24, overflow: 'hidden' }}>
              <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cachorro feliz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)', background: 'var(--c-amber)', color: '#1a1208', borderRadius: 16, padding: '.8rem 1.4rem', textAlign: 'center', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(245,158,11,.3)' }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', lineHeight: 1 }}>8+ anos</div>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.06em', marginTop: 2 }}>cuidando com amor</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .1 }}
            style={{ paddingTop: '1rem' }}
          >
            <span className="overline" style={{ display: 'block', marginBottom: '.6rem' }}>Quem somos</span>
            <h2 className="headline" style={{ marginBottom: '1.1rem' }}>
              Mais que um pet shop.<br />
              <span className="grad-text">Uma família.</span>
            </h2>
            <p style={{ color: 'var(--c-muted)', lineHeight: 1.75, fontSize: '.95rem', marginBottom: '2rem' }}>
              Desde que abrimos as portas em Porto Velho, nossa missão é simples: tratar cada pet como se fosse nosso. Com carinho, técnica e produtos de qualidade.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .5, delay: .15 + i * .1 }}
                  style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(245,158,11,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: p.icon }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '.95rem', marginBottom: '.2rem' }}>{p.title}</div>
                    <div style={{ color: 'var(--c-muted)', fontSize: '.82rem', lineHeight: 1.55 }}>{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
