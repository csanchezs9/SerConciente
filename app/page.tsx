"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
  ChevronRight,
  Briefcase,
  Menu,
  X,
  Phone
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // Los 3 programas principales
  const programas = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "La Llave",
      subtitle: "Vínculos del Amor",
      description: "La llave para fortalecer los vínculos del amor. Un programa transformador diseñado para cultivar relaciones conscientes, auténticas y profundas en pareja, familia y amigos.",
      color: "from-primary to-amber",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Relaciones Honorables",
      subtitle: "Ventas Conscientes",
      description: "Transforma tus relaciones comerciales en vínculos genuinos. Aprende a vender desde la autenticidad, creando conexiones duraderas con tus clientes.",
      color: "from-amber to-gold",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Líderes que Conversan",
      subtitle: "Transformación Organizacional",
      description: "Desarrolla un liderazgo consciente que inspire y transforme. Equipos de alto desempeño basados en la comunicación auténtica y la empatía.",
      color: "from-gold to-primary",
    },
  ]

  const faqs = [
    {
      question: "¿Para quién está diseñado el programa La Llave?",
      answer: "La Llave está diseñado para personas que desean mejorar sus relaciones de pareja, familia y amigos. Es ideal para quienes buscan herramientas de comunicación consciente y desean cultivar vínculos más auténticos y profundos desde el amor.",
    },
    {
      question: "¿Qué diferencia hay entre los programas?",
      answer: "La Llave se enfoca en relaciones personales y del amor. Relaciones Honorables está orientado a profesionales de ventas y negocios. Líderes que Conversan está diseñado para ejecutivos y equipos de trabajo que buscan transformación organizacional.",
    },
    {
      question: "¿Cuánto duran los programas?",
      answer: "Cada programa tiene una duración de 8 semanas, con sesiones semanales grupales y material de apoyo para trabajar durante la semana. También incluye sesiones individuales opcionales para profundizar en tu proceso personal.",
    },
    {
      question: "¿Qué metodología utiliza Gloria Salgado?",
      answer: "Gloria combina 15 años de experiencia con el Coaching Ontológico y herramientas de comunicación consciente. Su metodología es experiencial y vivencial, permitiendo integrar los aprendizajes de manera profunda y duradera.",
    },
    {
      question: "¿Ofrecen programas para empresas?",
      answer: "Sí, Ser Consciente ofrece programas corporativos a través de 'Líderes que Conversan' y 'Relaciones Honorables'. Contáctanos para diseñar un programa a la medida de las necesidades de tu organización.",
    },
  ]

  return (
    <main className="min-h-screen bg-cream">
      {/* Header - Nueva Arquitectura */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image 
              src="/header (1).png" 
              alt="Ser Consciente" 
              width={300} 
              height={80}
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Navegación Desktop - Nuevo orden */}
          <nav className="hidden lg:flex gap-8 text-sm text-warmgray font-medium">
            <a href="#ser-consciente" className="hover:text-primary transition-colors">Ser Consciente</a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
            <a href="#programas" className="hover:text-primary transition-colors">Programas</a>
            <a href="#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</a>
          </nav>

          {/* Botón de Contacto */}
          <a 
            href="#contacto" 
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-amber text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Contactar
          </a>

          {/* Menú Móvil */}
          <button 
            className="lg:hidden text-warmgray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Móvil Expandido */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-cream border-t border-primary/10 px-6 py-4"
          >
            <nav className="flex flex-col gap-4 text-warmgray">
              <a href="#ser-consciente" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Ser Consciente</a>
              <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Sobre Mí</a>
              <a href="#programas" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Programas</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Preguntas Frecuentes</a>
              <a 
                href="#contacto" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-amber text-white px-6 py-3 rounded-full text-sm font-medium text-center"
              >
                Contactar
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-40 sm:pt-36 md:pt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              Coach Ontológico · 15 años de experiencia
            </p>
            <h1 className="font-buffalo text-5xl md:text-6xl lg:text-7xl text-warmgray leading-tight mb-6">
              Transforma tu <span className="gradient-text">Conciencia</span>
            </h1>
            <p className="text-warmgray/80 text-lg mb-8 max-w-md leading-relaxed">
              Conexión y transformación a través de la conciencia. Desde el SER hacia el HACER, 
              descubre programas que elevan tu vida personal, relacional y profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#programas"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-amber text-white px-8 py-4 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-all hover:gap-3"
              >
                Explorar Programas
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#ser-consciente"
                className="inline-flex items-center gap-2 border-2 border-burnt text-burnt px-8 py-4 rounded-full text-sm font-medium hover:bg-burnt hover:text-white transition-colors"
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
            {/* Visual decorativo */}
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-amber/20 rounded-3xl flex items-center justify-center border-2 border-primary/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber/10" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-amber rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <p className="font-buffalo text-3xl text-warmgray">Del SER</p>
                <p className="font-buffalo text-3xl text-primary">al HACER</p>
              </div>
            </div>
            {/* Decorative elements con nuevos colores */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber/30 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -right-3 w-16 h-16 bg-gold/40 rounded-full blur-xl" />
          </motion.div>
        </div>
      </section>

      {/* Sección Ser Consciente - Nueva */}
      <section id="ser-consciente" className="py-24 bg-gradient-to-br from-primary/5 to-amber/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="font-buffalo text-4xl md:text-5xl lg:text-6xl text-warmgray mb-6">
              Conexión y transformación a través de la <span className="text-primary">conciencia</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-warmgray/80 text-xl leading-relaxed mb-8">
              Ser Consciente es un espacio de transformación personal donde cada programa nace 
              con el propósito de elevar la conciencia. Creemos en el poder de la conexión auténtica 
              y en la transformación que surge cuando trabajamos desde el <strong className="text-primary">SER</strong> hacia 
              el <strong className="text-primary">HACER</strong>.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-buffalo text-xl text-warmgray mb-2">Amor Consciente</h3>
                <p className="text-warmgray/70 text-sm">Relaciones desde el corazón y la autenticidad.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-amber/10">
                <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-amber" />
                </div>
                <h3 className="font-buffalo text-xl text-warmgray mb-2">Comunicación Auténtica</h3>
                <p className="text-warmgray/70 text-sm">Conversaciones que transforman y conectan.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gold/20">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-burnt" />
                </div>
                <h3 className="font-buffalo text-xl text-warmgray mb-2">Transformación Profunda</h3>
                <p className="text-warmgray/70 text-sm">Cambios duraderos desde la esencia del ser.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Mí - Gloria Salgado */}
      <section id="sobre-mi" className="py-24 bg-white">
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
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-amber/10 rounded-3xl flex items-center justify-center border-2 border-primary/20 relative overflow-hidden">
                <span className="text-primary/40 font-buffalo text-2xl">Foto Gloria</span>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <p className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
                Sobre Mí
              </p>
              <h2 className="font-buffalo text-4xl md:text-5xl text-warmgray mb-6">
                Gloria Salgado
              </h2>
              <p className="text-burnt font-medium mb-4">
                Coach Ontológica · 15 años de experiencia
              </p>
              <div className="space-y-4 text-warmgray/80 leading-relaxed">
                <p>
                  Gloria Salgado es una Coach Ontológica certificada con más de <strong className="text-warmgray">15 años de experiencia</strong> transformando vidas y relaciones. 
                  Su enfoque ontológico único combina la profundidad del ser con herramientas prácticas de transformación.
                </p>
                <p>
                  Ha acompañado a cientos de personas en su camino hacia relaciones más auténticas, 
                  liderazgo consciente y comunicación efectiva. Su metodología experiencial permite 
                  integrar los aprendizajes de manera profunda y duradera.
                </p>
                <p>
                  Fundadora de Ser Consciente, Gloria cree firmemente que la transformación personal 
                  es el primer paso hacia un mundo más conectado y empático.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div className="text-center">
                  <p className="font-buffalo text-3xl text-primary">+15</p>
                  <p className="text-sm text-warmgray/60">Años de experiencia</p>
                </div>
                <div className="text-center">
                  <p className="font-buffalo text-3xl text-amber">+500</p>
                  <p className="text-sm text-warmgray/60">Personas transformadas</p>
                </div>
                <div className="text-center">
                  <p className="font-buffalo text-3xl text-burnt">+50</p>
                  <p className="text-sm text-warmgray/60">Empresas acompañadas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programas - Grid Visual Impactante */}
      <section id="programas" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              Nuestros Programas
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-buffalo text-4xl md:text-5xl text-warmgray mb-4">
              Tres pilares de <span className="text-primary">transformación</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-warmgray/70 text-lg max-w-2xl mx-auto">
              Programas diseñados para elevar tu conciencia en todas las áreas de tu vida. 
              Desde el amor hasta el liderazgo, cada programa es un viaje de transformación.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {programas.map((programa, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header con gradiente */}
                <div className={`h-32 bg-gradient-to-r ${programa.color} flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                    {programa.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-primary text-xs uppercase tracking-widest mb-2 font-medium">
                    {programa.subtitle}
                  </p>
                  <h3 className="font-buffalo text-2xl text-warmgray mb-4 group-hover:text-primary transition-colors">
                    {programa.title}
                  </h3>
                  <p className="text-warmgray/70 leading-relaxed mb-6">
                    {programa.description}
                  </p>
                  <a 
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-br from-primary/5 to-amber/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              Testimonios
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-buffalo text-4xl md:text-5xl text-warmgray">
              Historias de <span className="text-primary">Transformación</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-buffalo text-2xl text-warmgray mb-8 leading-relaxed">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
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
                className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all text-warmgray"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all text-warmgray"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              Preguntas Frecuentes
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-buffalo text-4xl md:text-5xl text-warmgray">
              ¿Tienes <span className="text-primary">dudas</span>?
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-3xl p-8 md:p-10 border border-primary/10"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-primary/10">
                  <AccordionTrigger className="text-left text-warmgray hover:text-primary font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-warmgray/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-gradient-to-r from-primary to-burnt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-buffalo text-4xl md:text-5xl text-white mb-6">
              Comienza tu Transformación Hoy
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Da el primer paso hacia una vida más consciente y conectada. 
              Estoy aquí para acompañarte en este camino de transformación personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/573004817101?text=Hola%20Gloria%2C%20me%20gustaría%20recibir%20información%20sobre%20los%20programas%20de%20Ser%20Consciente."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-full text-sm font-medium hover:bg-cream hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir un mensaje
              </a>
              <a 
                href="https://wa.me/573004817101?text=Hola%20Gloria%2C%20quisiera%20agendar%20una%20llamada%20para%20conocer%20más%20sobre%20Ser%20Consciente."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Agendar llamada
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-cream border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Logo Centrado */}
          <div className="flex justify-center mb-12">
            <Image 
              src="/footer (1).png" 
              alt="Ser Consciente" 
              width={600} 
              height={200}
              className="h-44 w-auto object-contain"
            />
          </div>

          {/* Contacto e Información - Centrado */}
          <div className="grid md:grid-cols-2 gap-12 text-center mb-12">
            <div>
              <h4 className="font-buffalo text-xl text-warmgray mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contacto@serconsciente.com" className="text-warmgray/70 hover:text-primary transition-colors text-sm flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    contacto@serconsciente.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/573004817101?text=Hola%20Gloria%2C%20me%20gustaría%20recibir%20información%20sobre%20los%20programas%20de%20Ser%20Consciente.%20%F0%9F%8C%B8" className="text-warmgray/70 hover:text-primary transition-colors text-sm flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    +57 300 4817101
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-buffalo text-xl text-warmgray mb-4">Información</h4>
              <p className="text-warmgray/70 text-sm leading-relaxed">
                Transformación personal a través de la conciencia. Coach Ontológica con 15 años de experiencia acompañando procesos de cambio.
              </p>
            </div>
          </div>

          {/* Redes Sociales Centradas */}
          <div className="flex justify-center gap-3 mb-12">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/573004817101?text=Hola%20Gloria%2C%20me%20gustaría%20recibir%20información%20sobre%20los%20programas%20de%20Ser%20Consciente.%20%F0%9F%8C%B8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary/10 pt-8 text-center">
            <p className="text-sm text-warmgray/60">
              © 2026 Ser Consciente by Gloria Salgado. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
