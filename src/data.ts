import { BriefcaseBusiness, Building2, GraduationCap, Layers3, Palette, Scissors, Shirt, Sparkles } from 'lucide-react'

export const whatsappNumber = '51928821229'
export const heroImage = '/assets/maquina-bordado-hero.jpg'
export const aboutImage = '/assets/atelier-hero.jpg'
export const catalogImage = '/assets/textile-collection.jpg'
export const logoImage = '/assets/logo_cordon-de-oro.png'

export const services = [
  { title: 'Corte de telas', text: 'Preparación precisa de piezas para optimizar material y asegurar una confección consistente.', icon: Scissors, image: '/assets/services/corte-de-telas.jpg' },
  { title: 'Confección de prendas', text: 'Construcción y ensamblaje de prendas con especial atención en costuras, caída y acabados.', icon: Shirt, image: '/assets/services/confeccion-de-prendas.jpg' },
  { title: 'Bordados personalizados', text: 'Aplicación de nombres, emblemas y diseños para una presentación resistente y profesional.', icon: Sparkles, image: '/assets/services/bordados-personalizados.jpg' },
  { title: 'Estampados textiles', text: 'Personalización visual de prendas para campañas, equipos, instituciones y proyectos especiales.', icon: Palette, image: '/assets/services/estampados-textiles.jpg' },
  { title: 'Uniformes empresariales', text: 'Prendas coherentes con la identidad de tu organización y las necesidades de cada equipo.', icon: BriefcaseBusiness, image: '/assets/services/uniformes-empresariales.jpg' },
  { title: 'Uniformes escolares', text: 'Conjuntos pensados para uso cotidiano, movilidad y presentación institucional.', icon: GraduationCap, image: '/assets/services/uniformes-escolares.jpg' },
  { title: 'Prendas a medida', text: 'Ajustes y decisiones de confección guiadas por el uso, la silueta y el acabado esperado.', icon: Layers3, image: '/assets/services/prendas-a-medida.jpg' },
  { title: 'Producción por pedidos', text: 'Atención organizada de pedidos para empresas, colegios e instituciones públicas o privadas.', icon: Building2, image: '/assets/services/produccion-por-pedidos.jpg' },
]

export type Product = { name: string; category: string; description: string; image: string }
export const products: Product[] = [
  { name: 'Blusas', category: 'Corporativo', description: 'Siluetas personalizables para equipos y presentaciones institucionales.', image: '/assets/products/blusas.jpg' },
  { name: 'Camisas', category: 'Corporativo', description: 'Camisas de presentación con opciones de bordado y acabados a elección.', image: '/assets/products/camisas.jpg' },
  { name: 'Faldas', category: 'A medida', description: 'Modelos confeccionados de acuerdo con la ocasión y las medidas requeridas.', image: '/assets/products/faldas.jpg' },
  { name: 'Pantalones', category: 'Corporativo', description: 'Pantalones de corte formal o funcional para uniformes y conjuntos.', image: '/assets/products/pantalones.jpg' },
  { name: 'Buzos', category: 'Escolar', description: 'Conjuntos cómodos para instituciones educativas y equipos.', image: '/assets/products/buzos.jpg' },
  { name: 'Polos', category: 'Personalizado', description: 'Polos para campañas, uniformes y eventos con bordado o estampado.', image: '/assets/products/polos.jpg' },
  { name: 'Poleras', category: 'Escolar', description: 'Prendas abrigadoras personalizables para colegios e instituciones.', image: '/assets/products/poleras.jpg' },
  { name: 'Casacas', category: 'Corporativo', description: 'Casacas de presentación y trabajo con identidad personalizada.', image: '/assets/products/casacas.jpg' },
  { name: 'Chaquetas', category: 'A medida', description: 'Chaquetas con materiales y detalles definidos según el proyecto.', image: '/assets/products/chaquetas.jpg' },
  { name: 'Shorts', category: 'Escolar', description: 'Prendas funcionales para deporte, educación y actividades institucionales.', image: '/assets/products/shorts.jpg' },
  { name: 'Mandiles', category: 'Trabajo', description: 'Mandiles resistentes para atención, cocina, taller y producción.', image: '/assets/products/mandiles.jpg' },
  { name: 'Guardapolvos', category: 'Trabajo', description: 'Prendas de protección para actividades educativas y profesionales.', image: '/assets/products/guardapolvos.jpg' },
  { name: 'Uniformes escolares', category: 'Escolar', description: 'Conjuntos personalizables para la identidad y dinámica de cada institución.', image: '/assets/products/uniformes-escolares.jpg' },
  { name: 'Uniformes empresariales', category: 'Corporativo', description: 'Propuestas coordinadas para proyectar una imagen profesional.', image: '/assets/products/uniformes-empresariales.jpg' },
  { name: 'Uniformes institucionales', category: 'Institucional', description: 'Soluciones para entidades públicas y privadas, desarrolladas bajo cotización.', image: '/assets/products/uniformes-institucionales.jpg' },
]

export const processSteps = [
  ['01', 'Solicitud de cotización', 'Cuéntanos qué necesitas, para quién y en qué cantidad aproximada.'],
  ['02', 'Asesoramiento y materiales', 'Revisamos el uso de la prenda y las opciones de material y personalización.'],
  ['03', 'Diseño y preparación', 'Alineamos detalles, tallas y referencias antes de iniciar la producción.'],
  ['04', 'Confección y personalización', 'Realizamos corte, confección, bordado o estampado según lo acordado.'],
  ['05', 'Entrega del pedido', 'Coordinamos la entrega una vez que el pedido se encuentra listo.'],
]

export const gallery = [
  { title: 'Precisión en el corte', category: 'Confecciones', image: '/assets/services/corte-de-telas.jpg', focus: 'center' },
  { title: 'Confección especializada', category: 'Confecciones', image: '/assets/services/confeccion-de-prendas.jpg', focus: 'center' },
  { title: 'Detalles bordados', category: 'Bordados', image: '/assets/services/bordados-personalizados.jpg', focus: 'center' },
  { title: 'Identidad estampada', category: 'Estampados', image: '/assets/services/estampados-textiles.jpg', focus: 'center' },
  { title: 'Línea escolar', category: 'Uniformes', image: '/assets/products/uniformes-escolares.jpg', focus: 'center' },
  { title: 'Presentación empresarial', category: 'Uniformes', image: '/assets/products/uniformes-empresariales.jpg', focus: 'center' },
  { title: 'Confección a medida', category: 'Personalizados', image: '/assets/services/prendas-a-medida.jpg', focus: 'center' },
  { title: 'Pedidos coordinados', category: 'Personalizados', image: '/assets/services/produccion-por-pedidos.jpg', focus: 'center' },
]
