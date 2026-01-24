"use client"

import { motion } from "framer-motion"
import { 
  Heart, 
  Users, 
  MessageCircle, 
  Sparkles, 
  Instagram, 
  Linkedin, 
  Mail,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState } from "react"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"

// Animaciones
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "María José",
      role: "Participante del curso La Llave",
      content: "El trabajo con Gloria transformó mi manera de relacionarme con mi pareja. Aprendí a comunicarme desde el corazón y a escuchar con empatía.",
    },
    {
      name: "Carlos Andrés",
      role: "Líder empresarial",
      content: "Los talleres de liderazgo consciente cambiaron la dinámica de mi equipo. Ahora conversamos de manera más auténtica y los resultados hablan por sí solos.",
    },
    {
      name: "Ana María",
      role: "Participante individual",
      content: "Ser Consciente me ayudó a reconectar conmigo misma. Gloria tiene una sensibilidad única para guiar procesos de transformación personal.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const modules = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "El Ser",
      description: "Reconócete desde tu esencia. Cultiva la autoconciencia como base para todas tus relaciones.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "El Vínculo",
      description: "Aprende a construir conexiones auténticas basadas en la empatía y el respeto mutuo.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Comunicación Consciente",
      description: "Desarrolla habilidades de escucha activa y expresión asertiva para conversaciones transformadoras.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vínculos del Amor",
      description: "Fortalece tus relaciones de pareja, familia y amigos desde un lugar de presencia y consciencia.",
    },
  ]

  const faqs = [
    {
      question: "¿Para quién está diseñado el curso La Llave?",
      answer: "La Llave está diseñado para personas que desean mejorar sus relaciones, ya sea en pareja, familia o en el ámbito profesional. Es ideal para quienes buscan herramientas de comunicación consciente y desean cultivar vínculos más auténticos y profundos.",
    },
    {
      question: "¿Cuánto dura el programa?",
      answer: "El programa tiene una duración de 8 semanas, con sesiones semanales grupales y material de apoyo para trabajar durante la semana. También incluye sesiones individuales opcionales para profundizar en tu proceso personal.",
    },
    {
      question: "¿Se puede tomar el curso en pareja?",
      answer: "Sí, muchas parejas toman el curso juntos y es una experiencia muy enriquecedora. Sin embargo, también puedes tomarlo de manera individual. El trabajo que hagas en ti mismo impactará positivamente todas tus relaciones.",
    },
    {
      question: "¿Qué metodología utiliza Gloria Salgado?",
      answer: "Gloria combina el Coaching Ontológico con Constelaciones Familiares y herramientas de comunicación no violenta. Su metodología es experiencial y vivencial, permitiendo integrar los aprendizajes de manera profunda y duradera.",
    },
    {
      question: "¿Ofrecen programas para empresas?",
      answer: "Sí, Ser Consciente ofrece programas corporativos enfocados en liderazgo consciente, comunicación efectiva y cohesión de equipos. Contáctanos para diseñar un programa a la medida de las necesidades de tu organización.",
    },
  ]

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl text-warmgray">
            <span className="text-olive">Ser</span> Consciente
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-warmgray">
            <a href="#sobre" className="hover:text-olive transition-colors">Sobre Gloria</a>
            <a href="#curso" className="hover:text-olive transition-colors">La Llave</a>
            <a href="#testimonios" className="hover:text-olive transition-colors">Testimonios</a>
            <a href="#faq" className="hover:text-olive transition-colors">FAQ</a>
          </nav>
          <a 
            href="#contacto" 
            className="bg-olive text-white px-6 py-2 rounded-full text-sm hover:bg-olive/90 transition-colors"
          >
            Contactar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-olive text-sm uppercase tracking-widest mb-4">
              Coach Ontológico & Consteladora
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warmgray leading-tight mb-6">
              Cultiva <span className="text-olive">Vínculos</span> Conscientes
            </h1>
            <p className="text-warmgray/80 text-lg mb-8 max-w-md leading-relaxed">
              Conexión y transformación a través de la conciencia. Descubre cómo la autoconciencia 
              y la empatía pueden mejorar todos tus vínculos humanos.
            </p>
            <div className="flex gap-4">
              <a 
                href="#curso"
                className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gold/90 transition-all hover:gap-3"
              >
                Empezar Transformación
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center gap-2 border border-warmgray/30 text-warmgray px-8 py-4 rounded-full text-sm font-medium hover:border-olive hover:text-olive transition-colors"
              >
                Conocer más
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder para imagen de Gloria */}
            <div className="aspect-[4/5] bg-olive/10 rounded-3xl flex items-center justify-center border border-olive/20">
              <span className="text-olive/40 font-serif text-2xl">img</span>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-olive/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Sobre Gloria Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              {/* Placeholder para imagen */}
              <div className="aspect-square bg-cream rounded-3xl flex items-center justify-center border border-olive/20">
                <span className="text-olive/40 font-serif text-2xl">img</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <p className="text-gold text-sm uppercase tracking-widest mb-4">
                Sobre Gloria Salgado
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-warmgray mb-6">
                Fundadora con Experiencia Auténtica
              </h2>
              <div className="space-y-4 text-warmgray/80 leading-relaxed">
                <p>
                  Gloria Salgado no solo posee credenciales formales como Coach Ontológico certificada 
                  y Consteladora, sino que trae una experiencia de vida y corporativa única.
                </p>
                <p>
                  Ha sido ejecutiva en el mundo empresarial por más de 5 años como directiva comercial, 
                  lo que le permite entender profundamente los desafíos del liderazgo y las relaciones 
                  en el ámbito profesional.
                </p>
                <p>
                  Su enfoque integra la sabiduría del coaching ontológico con la profundidad de las 
                  constelaciones familiares, creando un espacio seguro para la transformación personal 
                  y relacional.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-serif text-3xl text-olive">+500</p>
                  <p className="text-sm text-warmgray/60">Personas transformadas</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-olive">+5</p>
                  <p className="text-sm text-warmgray/60">Años de experiencia</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-olive">+20</p>
                  <p className="text-sm text-warmgray/60">Empresas acompañadas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Curso La Llave Section */}
      <section id="curso" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-widest mb-4">
              Programa Insignia
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-warmgray mb-4">
              La Llave
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-warmgray/70 text-lg max-w-2xl mx-auto">
              La llave para fortalecer los vínculos del amor. Un programa transformador 
              diseñado para cultivar relaciones conscientes y auténticas.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-olive/10 rounded-2xl flex items-center justify-center text-olive mb-6">
                  {module.icon}
                </div>
                <h3 className="font-serif text-xl text-warmgray mb-3">{module.title}</h3>
                <p className="text-warmgray/70 text-sm leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="#contacto"
              className="inline-flex items-center gap-2 bg-olive text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-olive/90 transition-all"
            >
              Quiero inscribirme
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Programas Corporativos */}
      <section className="py-24 bg-warmgray/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-gold text-sm uppercase tracking-widest mb-4">
                Para Empresas
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-warmgray mb-6">
                Líderes que conversan, Líderes que transforman
              </h2>
              <p className="text-warmgray/80 leading-relaxed mb-6">
                Programas diseñados para organizaciones que buscan desarrollar un liderazgo 
                consciente y equipos de alto desempeño basados en la comunicación auténtica.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-warmgray/80">
                  <div className="w-2 h-2 bg-olive rounded-full" />
                  Talleres de liderazgo consciente
                </li>
                <li className="flex items-center gap-3 text-warmgray/80">
                  <div className="w-2 h-2 bg-olive rounded-full" />
                  Cohesión de equipos comerciales
                </li>
                <li className="flex items-center gap-3 text-warmgray/80">
                  <div className="w-2 h-2 bg-olive rounded-full" />
                  Comunicación efectiva para RRHH
                </li>
                <li className="flex items-center gap-3 text-warmgray/80">
                  <div className="w-2 h-2 bg-olive rounded-full" />
                  Servicio al cliente desde la empatía
                </li>
              </ul>
              <a 
                href="#contacto"
                className="inline-flex items-center gap-2 border border-olive text-olive px-8 py-4 rounded-full text-sm font-medium hover:bg-olive hover:text-white transition-all"
              >
                Solicitar información
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              {/* Placeholder para imagen */}
              <div className="aspect-[4/3] bg-white rounded-3xl flex items-center justify-center border border-olive/20">
                <span className="text-olive/40 font-serif text-2xl">img</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-widest mb-4">
              Testimonios
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-warmgray">
              Historias de Transformación
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-2xl text-warmgray mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-olive/20 rounded-full flex items-center justify-center">
                  <span className="text-olive/60 font-serif text-sm">img</span>
                </div>
                <div>
                  <p className="font-medium text-warmgray">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-warmgray/60">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-warmgray/20 flex items-center justify-center hover:border-olive hover:text-olive transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-warmgray/20 flex items-center justify-center hover:border-olive hover:text-olive transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-gold text-sm uppercase tracking-widest mb-4">
              Preguntas Frecuentes
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-warmgray">
              ¿Tienes dudas?
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-warmgray hover:text-olive">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-olive">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Comienza tu Transformación Hoy
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Da el primer paso hacia vínculos más conscientes y auténticos. 
              Estoy aquí para acompañarte en este camino de autoconocimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contacto@serconsciente.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-olive px-10 py-4 rounded-full text-sm font-medium hover:bg-cream transition-colors"
              >
                <Mail className="w-4 h-4" />
                Escribir un mensaje
              </a>
              <a 
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Agendar llamada
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-warmgray/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-2xl text-warmgray">
              <span className="text-olive">Ser</span> Consciente
              <p className="text-sm font-sans text-warmgray/60 mt-1">by Gloria Salgado</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-warmgray/10 flex items-center justify-center text-warmgray hover:bg-olive hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-warmgray/10 flex items-center justify-center text-warmgray hover:bg-olive hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contacto@serconsciente.com"
                className="w-10 h-10 rounded-full bg-warmgray/10 flex items-center justify-center text-warmgray hover:bg-olive hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-warmgray/10 mt-8 pt-8 text-center">
            <p className="text-sm text-warmgray/60">
              © 2026 Ser Consciente. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
