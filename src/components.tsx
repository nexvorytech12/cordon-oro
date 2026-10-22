import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { PropsWithChildren, useEffect, useState } from 'react'
import { whatsappNumber } from './data'

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Cordón de Oro, inicio">
      <span className="brand-mark" aria-hidden="true"><i /><b>CO</b><i /></span>
      <span><strong>CORDÓN</strong><small>DE ORO · E.I.R.L.</small></span>
    </a>
  )
}

const nav = [['Inicio','inicio'],['Nosotros','nosotros'],['Servicios','servicios'],['Productos','productos'],['Galería','galeria'],['Cotizaciones','cotizaciones'],['Contacto','contacto']]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
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
          {nav.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="button button-gold nav-cta" target="_blank" rel="noreferrer" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, Cordón de Oro. Me gustaría recibir información sobre sus servicios de confección y personalización de prendas.')}`}>Cotizar <span>por WhatsApp</span></a>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}>
          {nav.map(([label,id], index) => <motion.a initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:index*.035}} onClick={() => setOpen(false)} key={id} href={`#${id}`}>{label}</motion.a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  </>
}

export function Reveal({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : {opacity:0,y:28}} whileInView={reduced ? {} : {opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay,ease:[.2,.75,.25,1]}}>{children}</motion.div>
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <Reveal className={`section-heading ${light ? 'is-light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>
}

export function WhatsAppFloat() {
  const message = 'Hola, Cordón de Oro. Me gustaría recibir información sobre sus servicios de confección y personalización de prendas.'
  return <a className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}><MessageCircle/><span>WhatsApp</span></a>
}
