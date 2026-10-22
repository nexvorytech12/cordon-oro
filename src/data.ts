import { BriefcaseBusiness, Building2, GraduationCap, Layers3, Palette, Scissors, Shirt, Sparkles } from 'lucide-react'

export const whatsappNumber = '51928821229'
export const heroImage = '/assets/atelier-hero.jpg'
export const catalogImage = '/assets/textile-collection.jpg'

export const services = [
  { title: 'Corte de telas', text: 'Preparación precisa de piezas para optimizar material y asegurar una confección consistente.', icon: Scissors, focus: '20% 62%' },
  { title: 'Confección de prendas', text: 'Construcción y ensamblaje de prendas con especial atención en costuras, caída y acabados.', icon: Shirt, focus: '58% 50%' },
  { title: 'Bordados personalizados', text: 'Aplicación de nombres, emblemas y diseños para una presentación resistente y profesional.', icon: Sparkles, focus: '88% 18%' },
  { title: 'Estampados textiles', text: 'Personalización visual de prendas para campañas, equipos, instituciones y proyectos especiales.', icon: Palette, focus: '85% 82%' },
  { title: 'Uniformes empresariales', text: 'Prendas coherentes con la identidad de tu organización y las necesidades de cada equipo.', icon: BriefcaseBusiness, focus: '78% 55%' },
  { title: 'Uniformes escolares', text: 'Conjuntos pensados para uso cotidiano, movilidad y presentación institucional.', icon: GraduationCap, focus: '18% 58%' },
  { title: 'Prendas a medida', text: 'Ajustes y decisiones de confección guiadas por el uso, la silueta y el acabado esperado.', icon: Layers3, focus: '46% 32%' },
  { title: 'Producción por pedidos', text: 'Atención organizada de pedidos para empresas, colegios e instituciones públicas o privadas.', icon: Building2, focus: '48% 78%' },
]

export type Product = { name: string; category: string; description: string; focus: string }
export const products: Product[] = [
  { name: 'Blusas', category: 'Corporativo', description: 'Siluetas personalizables para equipos y presentaciones institucionales.', focus: '43% 18%' },
  { name: 'Camisas', category: 'Corporativo', description: 'Camisas de presentación con opciones de bordado y acabados a elección.', focus: '43% 17%' },
  { name: 'Faldas', category: 'A medida', description: 'Modelos confeccionados de acuerdo con la ocasión y las medidas requeridas.', focus: '63% 35%' },
  { name: 'Pantalones', category: 'Corporativo', description: 'Pantalones de corte formal o funcional para uniformes y conjuntos.', focus: '65% 20%' },
  { name: 'Buzos', category: 'Escolar', description: 'Conjuntos cómodos para instituciones educativas y equipos.', focus: '18% 57%' },
  { name: 'Polos', category: 'Personalizado', description: 'Polos para campañas, uniformes y eventos con bordado o estampado.', focus: '17% 18%' },
  { name: 'Poleras', category: 'Escolar', description: 'Prendas abrigadoras personalizables para colegios e instituciones.', focus: '18% 57%' },
  { name: 'Casacas', category: 'Corporativo', description: 'Casacas de presentación y trabajo con identidad personalizada.', focus: '80% 67%' },
  { name: 'Chaquetas', category: 'A medida', description: 'Chaquetas con materiales y detalles definidos según el proyecto.', focus: '80% 64%' },
  { name: 'Shorts', category: 'Escolar', description: 'Prendas funcionales para deporte, educación y actividades institucionales.', focus: '64% 25%' },
  { name: 'Mandiles', category: 'Trabajo', description: 'Mandiles resistentes para atención, cocina, taller y producción.', focus: '48% 67%' },
  { name: 'Guardapolvos', category: 'Trabajo', description: 'Prendas de protección para actividades educativas y profesionales.', focus: '49% 63%' },
  { name: 'Uniformes escolares', category: 'Escolar', description: 'Conjuntos personalizables para la identidad y dinámica de cada institución.', focus: '18% 58%' },
  { name: 'Uniformes empresariales', category: 'Corporativo', description: 'Propuestas coordinadas para proyectar una imagen profesional.', focus: '42% 18%' },
  { name: 'Uniformes institucionales', category: 'Institucional', description: 'Soluciones para entidades públicas y privadas, desarrolladas bajo cotización.', focus: '81% 65%' },
]

export const processSteps = [
  ['01', 'Solicitud de cotización', 'Cuéntanos qué necesitas, para quién y en qué cantidad aproximada.'],
  ['02', 'Asesoramiento y materiales', 'Revisamos el uso de la prenda y las opciones de material y personalización.'],
  ['03', 'Diseño y preparación', 'Alineamos detalles, tallas y referencias antes de iniciar la producción.'],
  ['04', 'Confección y personalización', 'Realizamos corte, confección, bordado o estampado según lo acordado.'],
  ['05', 'Entrega del pedido', 'Coordinamos la entrega una vez que el pedido se encuentra listo.'],
]

export const gallery = [
  { title: 'Precisión en confección', category: 'Confecciones', image: heroImage, focus: '72% 50%' },
  { title: 'Detalles bordados', category: 'Bordados', image: catalogImage, focus: '84% 19%' },
  { title: 'Identidad textil', category: 'Estampados', image: catalogImage, focus: '82% 83%' },
  { title: 'Línea escolar', category: 'Uniformes', image: catalogImage, focus: '18% 57%' },
  { title: 'Acabados de taller', category: 'Confecciones', image: heroImage, focus: '38% 76%' },
  { title: 'Pedidos personalizados', category: 'Personalizados', image: catalogImage, focus: '50% 65%' },
]
