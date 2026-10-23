import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { CSSProperties, PropsWithChildren, useEffect, useState } from 'react'
import { whatsappNumber } from './data'

const siteBase = import.meta.env.BASE_URL

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href={siteBase} className={`brand ${light ? 'brand-light' : ''}`} aria-label="Cordón de Oro, inicio">
      <span className="brand-logo-shell">
        <img src={`${siteBase}assets/logo-mark-gold.png`} alt="" aria-hidden="true" />
        <span className="brand-wordmark"><strong>CORDÓN DE ORO</strong><small>E.I.R.L.</small></span>
      </span>
    </a>
  )
}

const nav = [
  ['Inicio', 'inicio', 'home'],
  ['Nosotros', 'nosotros', 'home'],
  ['Servicios', 'servicios', 'home'],
  ['Productos', 'productos', 'catalog'],
  ['Galería', 'galeria', 'catalog'],
  ['Cotizaciones', 'cotizaciones', 'home'],
  ['Contacto', 'contacto', 'home'],
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const catalogPage = window.location.pathname.replace(/\/+$/, '').endsWith('/productos')
  const navHref = (id: string, page: string) => {
    if (page === 'catalog') return catalogPage ? `#${id}` : `${siteBase}productos#${id}`
    return catalogPage ? `${siteBase}#${id}` : `#${id}`
  }
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <>
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container nav-wrap">
        <Brand light={!scrolled && !open} />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map(([label,id,page]) => <a key={id} href={navHref(id, page)}>{label}</a>)}
        </nav>
        <a className="button button-gold nav-cta" target="_blank" rel="noreferrer" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, Cordón de Oro. Me gustaría recibir información sobre sus servicios de confección y personalización de prendas.')}`}>Cotizar <span>por WhatsApp</span></a>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}>
          {nav.map(([label,id,page], index) => <motion.a initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:index*.035}} onClick={() => setOpen(false)} key={id} href={navHref(id, page)}>{label}</motion.a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  </>
}

export function Reveal({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : {opacity:0,y:58,scale:.97,filter:'blur(5px)'}} whileInView={reduced ? {} : {opacity:1,y:0,scale:1,filter:'blur(0px)'}} viewport={{once:true,amount:.18}} transition={{duration:.82,delay,ease:[.16,.8,.24,1]}}>{children}</motion.div>
}

export function ScrollImage({ src, alt, loading = 'lazy', className, style }: { src: string; alt: string; loading?: 'lazy' | 'eager'; className?: string; style?: CSSProperties }) {
  const reduced = useReducedMotion()
  return <motion.img src={src} alt={alt} loading={loading} className={className} style={style} initial={reduced ? false : {opacity:0,scale:1.14}} whileInView={reduced ? {} : {opacity:1,scale:1}} viewport={{once:true,amount:.22}} transition={{duration:1.05,ease:[.16,.8,.24,1]}} />
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <Reveal className={`section-heading ${light ? 'is-light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>
}

export function WhatsAppFloat() {
  const message = 'Hola, Cordón de Oro. Me gustaría recibir información sobre sus servicios de confección y personalización de prendas.'
  return <a className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}><MessageCircle/><span>WhatsApp</span></a>
}
