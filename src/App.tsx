import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Clock3, HeartHandshake, MapPin, MessageCircle, Search, ShieldCheck, Sparkles, X } from 'lucide-react'
import { FormEvent, useMemo, useState } from 'react'
import { Brand, Header, Reveal, SectionHeading, WhatsAppFloat } from './components'
import { catalogImage, gallery, heroImage, processSteps, products, services, whatsappNumber, type Product } from './data'

const waLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 120])
  return <section id="inicio" className="hero">
    <motion.div className="hero-media" style={{y}}><img src={heroImage} alt="Escena demostrativa de confección en taller textil" fetchPriority="high" /><div className="hero-overlay" /></motion.div>
    <div className="hero-lines" aria-hidden="true" />
    <div className="container hero-content">
      <motion.span className="hero-kicker" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.15}}>Confección & personalización textil · Perú</motion.span>
      <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.28,duration:.8}}>CORDÓN<br/><em>DE ORO</em></motion.h1>
      <motion.p className="hero-lead" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:.42,duration:.7}}>Transformamos tus ideas en prendas de calidad</motion.p>
      <motion.p className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.54,duration:.7}}>Especialistas en corte, confección, bordado y estampado para empresas, colegios, instituciones y clientes particulares.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.66}}><a className="button button-gold" href="#servicios">Explorar servicios <ArrowRight/></a><a className="button button-ghost" href="#cotizaciones">Solicitar cotización</a></motion.div>
    </div>
    <a className="scroll-cue" href="#nosotros" aria-label="Ir a la siguiente sección"><span>Descubrir</span><ArrowDown/></a>
  </section>
}

function About() {
  const values = [
    { Icon: ShieldCheck, name: 'Calidad', text: 'Cuidamos cada decisión, desde el material hasta el acabado final.' },
    { Icon: HeartHandshake, name: 'Compromiso', text: 'Acompañamos cada pedido con comunicación clara y cercana.' },
    { Icon: Sparkles, name: 'Personalización', text: 'Adaptamos prendas, detalles y técnicas a las necesidades del proyecto.' },
    { Icon: MessageCircle, name: 'Atención', text: 'Escuchamos primero para proponer una solución coherente con tu objetivo.' },
  ]
  return <section id="nosotros" className="section about"><div className="container about-grid">
    <Reveal className="about-image"><img src={heroImage} alt="Detalle demostrativo de confección textil" loading="lazy"/><div className="image-caption"><span>01</span>Precisión en cada costura</div></Reveal>
    <div><SectionHeading eyebrow="Nuestra esencia" title="Pasión por cada detalle" text="Cordón de Oro E.I.R.L. se dedica a confeccionar y personalizar prendas con atención a los materiales, los acabados y las necesidades de cada cliente." />
      <Reveal><p className="about-copy">Trabajamos para convertir una idea, una referencia o una necesidad institucional en una prenda bien resuelta. Atendemos proyectos para particulares, colegios, empresas e instituciones con un proceso claro y personalizado.</p></Reveal>
      <div className="values-grid">{values.map(({ Icon, name, text },i) => <Reveal key={name} className="value-card" delay={i*.06}><Icon/><div><h3>{name}</h3><p>{text}</p></div></Reveal>)}</div>
    </div>
  </div></section>
}

function Services() {
  return <section id="servicios" className="section services"><div className="container">
    <SectionHeading eyebrow="Lo que hacemos" title="Soluciones textiles, de principio a fin" text="Un servicio flexible para desarrollar prendas funcionales, representativas y alineadas con cada necesidad." />
    <div className="services-grid">{services.map((service,i) => { const Icon=service.icon; return <Reveal className="service-card" delay={(i%4)*.05} key={service.title}><div className="service-photo"><img src={catalogImage} style={{objectPosition:service.focus}} alt="" loading="lazy"/><span>{String(i+1).padStart(2,'0')}</span></div><div className="service-body"><Icon/><h3>{service.title}</h3><p>{service.text}</p><a target="_blank" rel="noreferrer" href={waLink(`Hola, Cordón de Oro. Quisiera cotizar el servicio de ${service.title.toLowerCase()}.`)}>Cotizar servicio <ArrowRight/></a></div></Reveal>})}</div>
  </div></section>
}

function ProductModal({ product, onClose, onMove }: { product: Product; onClose:()=>void; onMove:(step:number)=>void }) {
  return <motion.div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="product-title" onClick={onClose} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div className="product-modal" onClick={e=>e.stopPropagation()} initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96}}>
      <button className="modal-close" onClick={onClose} aria-label="Cerrar"><X/></button>
      <div className="modal-image"><img src={catalogImage} alt={`Referencia demostrativa: ${product.name}`} style={{objectPosition:product.focus}}/><button className="carousel prev" onClick={()=>onMove(-1)} aria-label="Producto anterior"><ChevronLeft/></button><button className="carousel next" onClick={()=>onMove(1)} aria-label="Producto siguiente"><ChevronRight/></button></div>
      <div className="modal-copy"><span className="eyebrow">{product.category}</span><h3 id="product-title">{product.name}</h3><p>{product.description}</p><ul><li><Check/>Materiales a definir según el uso</li><li><Check/>Opciones de bordado o estampado</li><li><Check/>Tallas y cantidades bajo cotización</li></ul><a className="button button-gold" target="_blank" rel="noreferrer" href={waLink(`Hola, Cordón de Oro. Quisiera consultar por ${product.name}.`)}>Consultar por WhatsApp</a></div>
    </motion.div>
  </motion.div>
}

function Catalog() {
  const [query,setQuery]=useState(''); const [category,setCategory]=useState('Todos'); const [selected,setSelected]=useState<Product|null>(null)
  const categories=['Todos',...Array.from(new Set(products.map(p=>p.category)))]
  const filtered=useMemo(()=>products.filter(p=>(category==='Todos'||p.category===category)&&`${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase())),[query,category])
  const move=(step:number)=>{if(!selected)return; const i=products.indexOf(selected); setSelected(products[(i+step+products.length)%products.length])}
  return <section id="productos" className="section catalog"><div className="container">
    <SectionHeading eyebrow="Catálogo" title="Prendas hechas para tu propósito" text="Explora las líneas disponibles. Los materiales, colores, tallas y cantidades se definen mediante cotización; no mostramos precios ni stock." />
    <Reveal className="catalog-controls"><label className="search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar una prenda..." aria-label="Buscar productos"/></label><div className="filters" aria-label="Filtrar productos">{categories.map(c=><button className={category===c?'active':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div></Reveal>
    <motion.div layout className="products-grid"><AnimatePresence mode="popLayout">{filtered.map((product,i)=><motion.article layout initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}} className="product-card" key={product.name} onClick={()=>setSelected(product)}><div className="product-image"><img src={catalogImage} alt={`Referencia demostrativa de ${product.name}`} style={{objectPosition:product.focus}} loading="lazy"/><span>{product.category}</span><button aria-label={`Ver detalles de ${product.name}`}><ArrowRight/></button></div><div><small>{String(i+1).padStart(2,'0')}</small><h3>{product.name}</h3><p>{product.description}</p><span className="quote-label">Bajo cotización</span></div></motion.article>)}</AnimatePresence></motion.div>
    {!filtered.length&&<p className="empty-state">No encontramos prendas con ese término. Prueba otra búsqueda.</p>}
  </div><AnimatePresence>{selected&&<ProductModal product={selected} onClose={()=>setSelected(null)} onMove={move}/>}</AnimatePresence></section>
}

function Process() { return <section className="section process"><div className="container"><SectionHeading light eyebrow="Cómo trabajamos" title="Un proceso claro, de la idea a la entrega" text="Cada etapa ayuda a ordenar decisiones y mantener el pedido alineado con lo conversado."/><div className="timeline">{processSteps.map(([n,t,d],i)=><Reveal className="timeline-item" delay={i*.07} key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section> }

function Gallery() {
  const [category,setCategory]=useState('Todos'); const [active,setActive]=useState<typeof gallery[number]|null>(null)
  const cats=['Todos',...Array.from(new Set(gallery.map(g=>g.category)))]; const visible=gallery.filter(g=>category==='Todos'||g.category===category)
  return <section id="galeria" className="section gallery-section"><div className="container"><SectionHeading eyebrow="Galería" title="Texturas, oficio y posibilidades" text="Imágenes de demostración para visualizar el tipo de trabajo. Podrás sustituirlas por fotografías reales del taller y de pedidos terminados."/><div className="gallery-filters">{cats.map(c=><button className={c===category?'active':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div><motion.div layout className="gallery-grid"><AnimatePresence mode="popLayout">{visible.map((item,i)=><motion.button layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={`gallery-item item-${i%4}`} key={item.title} onClick={()=>setActive(item)}><img src={item.image} alt={item.title} style={{objectPosition:item.focus}} loading="lazy"/><span><small>{item.category}</small>{item.title}</span></motion.button>)}</AnimatePresence></motion.div></div><AnimatePresence>{active&&<motion.div className="lightbox" onClick={()=>setActive(null)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><button onClick={()=>setActive(null)} aria-label="Cerrar galería"><X/></button><motion.figure initial={{scale:.96}} animate={{scale:1}} onClick={e=>e.stopPropagation()}><img src={active.image} alt={active.title} style={{objectPosition:active.focus}}/><figcaption>{active.title}<small>{active.category} · Imagen demostrativa</small></figcaption></motion.figure></motion.div>}</AnimatePresence></section>
}

type FormState={name:string;company:string;phone:string;garment:string;service:string;quantity:string;sizes:string;details:string;date:string}
const emptyForm:FormState={name:'',company:'',phone:'',garment:'',service:'',quantity:'',sizes:'',details:'',date:''}
function QuoteForm(){
  const [form,setForm]=useState(emptyForm); const [errors,setErrors]=useState<Record<string,string>>({})
  const set=(key:keyof FormState,value:string)=>setForm(v=>({...v,[key]:value}))
  const submit=(e:FormEvent)=>{e.preventDefault(); const next:Record<string,string>={}; if(!form.name.trim())next.name='Ingresa tu nombre'; if(!/^\+?[\d\s-]{7,}$/.test(form.phone))next.phone='Ingresa un número válido'; if(!form.garment)next.garment='Selecciona una prenda'; if(!form.service)next.service='Selecciona un servicio'; if(!form.quantity||Number(form.quantity)<1)next.quantity='Indica una cantidad'; if(!form.details.trim())next.details='Describe brevemente tu pedido'; setErrors(next); if(Object.keys(next).length)return;
    const message=`Hola, Cordón de Oro. Quisiera solicitar una cotización.\n\n*Nombre:* ${form.name}\n*Empresa o institución:* ${form.company||'No aplica'}\n*WhatsApp:* ${form.phone}\n*Tipo de prenda:* ${form.garment}\n*Servicio:* ${form.service}\n*Cantidad aproximada:* ${form.quantity}\n*Tallas:* ${form.sizes||'Por definir'}\n*Fecha estimada:* ${form.date||'Por coordinar'}\n*Descripción:* ${form.details}\n\nTengo entendido que las imágenes de referencia deben adjuntarse directamente en este chat.`; window.open(waLink(message),'_blank','noopener,noreferrer')}
  const field=(key:keyof FormState,label:string,required=false)=><label className={errors[key]?'has-error':''}><span>{label}{required&&' *'}</span><input value={form[key]} onChange={e=>set(key,e.target.value)} aria-invalid={!!errors[key]}/>{errors[key]&&<small>{errors[key]}</small>}</label>
  return <form className="quote-form" onSubmit={submit} noValidate><div className="form-grid">{field('name','Nombre completo',true)}{field('company','Empresa o institución')}{field('phone','Número de WhatsApp',true)}<label className={errors.garment?'has-error':''}><span>Tipo de prenda *</span><select value={form.garment} onChange={e=>set('garment',e.target.value)}><option value="">Seleccionar</option>{products.map(p=><option key={p.name}>{p.name}</option>)}</select>{errors.garment&&<small>{errors.garment}</small>}</label><label className={errors.service?'has-error':''}><span>Servicio requerido *</span><select value={form.service} onChange={e=>set('service',e.target.value)}><option value="">Seleccionar</option>{services.slice(0,4).map(s=><option key={s.title}>{s.title}</option>)}</select>{errors.service&&<small>{errors.service}</small>}</label><label className={errors.quantity?'has-error':''}><span>Cantidad aproximada *</span><input type="number" min="1" value={form.quantity} onChange={e=>set('quantity',e.target.value)}/>{errors.quantity&&<small>{errors.quantity}</small>}</label>{field('sizes','Tallas')}{field('date','Fecha estimada de entrega')}</div><label className={`wide ${errors.details?'has-error':''}`}><span>Descripción del pedido *</span><textarea rows={5} value={form.details} onChange={e=>set('details',e.target.value)} placeholder="Cuéntanos sobre colores, uso, acabados o referencias..."/>{errors.details&&<small>{errors.details}</small>}</label><div className="attachment-note"><Sparkles/><p><strong>¿Tienes una imagen de referencia?</strong><br/>Adjúntala manualmente cuando se abra el chat de WhatsApp; este formulario no carga archivos.</p></div><button className="button button-gold" type="submit">Enviar cotización por WhatsApp <MessageCircle/></button></form>
}

function Quote(){return <section id="cotizaciones" className="section quote-section"><div className="container quote-layout"><div><SectionHeading light eyebrow="Cuéntanos tu proyecto" title="Recibe una cotización personalizada" text="Completa los datos principales y prepararemos un mensaje ordenado para iniciar la conversación por WhatsApp."/><Reveal className="quote-aside"><p>Antes de enviar</p><ul><li><Check/>Define una cantidad aproximada.</li><li><Check/>Indica las tallas si ya las conoces.</li><li><Check/>Describe colores, uso y personalización.</li></ul><small>Los detalles finales, disponibilidad y fecha se confirman directamente durante la atención.</small></Reveal></div><Reveal><QuoteForm/></Reveal></div></section>}

function Contact(){return <section id="contacto" className="section contact"><div className="container"><SectionHeading eyebrow="Contacto" title="Hablemos de lo que necesitas" text="Atendemos consultas de particulares, colegios, empresas e instituciones en Perú."/><div className="contact-grid"><Reveal className="contact-primary"><span className="eyebrow">Canal de atención</span><h3>WhatsApp</h3><a href={waLink('Hola, Cordón de Oro. Me gustaría recibir información sobre sus servicios de confección y personalización de prendas.')} target="_blank" rel="noreferrer">+51 928 821 229 <ArrowRight/></a><p>Escríbenos para conversar sobre tu prenda, uniformes o pedido personalizado.</p></Reveal><Reveal className="contact-card"><Clock3/><h3>Horario de atención</h3><p>Horario por confirmar.<br/>Contáctanos por WhatsApp para coordinar.</p><small>Contenido editable</small></Reveal><Reveal className="contact-card map-card"><MapPin/><h3>Ubicación</h3><p>Perú</p><div><MapPin/><span>El mapa se habilitará cuando se proporcione una dirección real.</span></div></Reveal></div></div></section>}

function Footer(){return <footer><div className="container footer-grid"><div><Brand light/><p>Confección y personalización de prendas con atención cercana y acabados cuidados.</p></div><div><h3>Explora</h3><a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#productos">Productos</a><a href="#galeria">Galería</a></div><div><h3>Servicios</h3><a href="#servicios">Confección</a><a href="#servicios">Bordado</a><a href="#servicios">Estampado</a><a href="#servicios">Uniformes</a></div><div><h3>Contacto</h3><a target="_blank" rel="noreferrer" href={waLink('Hola, Cordón de Oro. Me gustaría recibir información.')}>+51 928 821 229</a><span>Perú</span><small>Redes sociales: configurables</small></div></div><div className="container footer-bottom"><span>© 2026 Cordón de Oro E.I.R.L. Todos los derechos reservados.</span><a href="#privacidad" onClick={e=>{e.preventDefault();alert('La política de privacidad se publicará cuando la empresa proporcione el contenido legal correspondiente.')}}>Política de privacidad</a></div></footer>}

export default function App(){const {scrollYProgress}=useScroll();return <><motion.div className="scroll-progress" style={{scaleX:scrollYProgress}}/><Header/><main><Hero/><About/><Services/><Catalog/><Process/><Gallery/><Quote/><Contact/></main><Footer/><WhatsAppFloat/></>}
