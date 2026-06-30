import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  Lightbulb, 
  TrendingUp, 
  Flame, 
  CalendarDays, 
  Trophy, 
  Star, 
  ShieldCheck, 
  X,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Generated images
import heroMockup from "../assets/images/hero-mockup.png";
import galleryDefensa from "../assets/images/gallery-defensa.png";
import galleryAtaque from "../assets/images/gallery-ataque.png";
import galleryTecnica from "../assets/images/gallery-tecnica.png";
import gallerySituaciones from "../assets/images/gallery-situaciones.png";
import galleryPase from "../assets/images/gallery-pase.png";
import galleryTiro from "../assets/images/gallery-tiro.png";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-2 bg-[#0a1628]/50 border border-orange-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
      <Clock className="w-4 h-4 text-orange-500" />
      <span className="font-mono text-white text-sm md:text-base">
        La oferta termina en: 00:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#0a1628]">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                700 Sesiones de <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Entrenamiento de Baloncesto</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                Planifica meses de entrenamiento en minutos con 700 sesiones listas para aplicar. Más organización, mejores resultados y jugadores más motivados desde el primer día.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col items-center gap-6 w-full md:w-auto">
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                className="w-full md:w-auto text-lg h-16 px-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                ¡QUIERO ACCEDER AHORA!
              </Button>
              <CountdownTimer />
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent z-10 h-full w-full bottom-0" />
            <img 
              src={heroMockup} 
              alt="Dispositivos mostrando la plataforma" 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-gray-800"
            />
          </FadeIn>
        </div>
      </section>

      {/* 2. LO QUE VAS A RECIBIR */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Lo Que Vas A Recibir</h2>
              <p className="mt-4 text-gray-600 text-lg">Todo lo que necesitas para llevar a tu equipo al siguiente nivel.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "700 Sesiones Completas",
                desc: "Sesiones organizadas con objetivos claros, tiempos definidos y metodologías validadas.",
                items: ["Ejercicios progresivos y estructurados", "Acceso desde celular, tablet o computadora", "Material listo para aplicar"]
              },
              {
                title: "Planificaciones Paso a Paso",
                desc: "Sesiones completas que facilitan la organización de toda la temporada.",
                items: ["Diferentes niveles de dificultad", "Resultados medibles", "Fácil implementación"]
              },
              {
                title: "Para Todos los Equipos",
                desc: "Ideal para entrenadores, academias y clubes deportivos.",
                items: ["Categorías infantiles", "Categorías juveniles", "Equipos adultos"]
              }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col hover:border-orange-500/30 transition-colors">
                  <div className="h-12 w-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{card.desc}</p>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS */}
      <section className="py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Por Qué Elegir Nuestro Material?</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Clock, text: "Ahorra horas de planificación cada semana." },
              { icon: Lightbulb, text: "Nunca más te quedarás sin ideas." },
              { icon: Star, text: "Mejora la calidad de tus entrenamientos." },
              { icon: Flame, text: "Aumenta la motivación de tus jugadores." },
              { icon: CalendarDays, text: "Organiza temporadas completas." },
              { icon: Trophy, text: "Entrena con metodología profesional." }
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#0d1f3c] p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:bg-[#11274f] transition-colors">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-gray-200 font-medium">{benefit.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BONOS GRATIS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">¡Recibe 3 Bonos Increíbles GRATIS!</h2>
              <p className="mt-4 text-orange-600 font-bold text-xl">Total en bonos: $27 — ¡HOY GRATIS!</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "100 Sesiones Extra de Baloncesto", val: 12 },
              { title: "40 Sesiones de Defensa", val: 8 },
              { title: "75 Sesiones de Táctica y Desmarque", val: 7 }
            ].map((bono, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-gradient-to-b from-orange-50 to-white p-8 rounded-2xl border border-orange-200 text-center relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-bl-full" />
                  <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 font-bold text-sm rounded-full mb-6 uppercase tracking-wider">
                    Bonus {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-4">{bono.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-lg">
                    <span className="text-gray-400 line-through">Valor: ${bono.val}</span>
                    <span className="text-orange-600 font-black">→ GRATIS</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING / OFERTA */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Elige Tu Plan</h2>
              <p className="mt-4 text-gray-600 text-lg">Inversión única. Acceso de por vida.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Plan Basico */}
            <FadeIn>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0a1628] mb-2">Plan Básico</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-xl text-gray-400 line-through mb-1">$17</span>
                  <span className="text-5xl font-black text-[#0a1628]">$7</span>
                </div>
                <Button variant="outline" className="w-full h-14 text-lg font-bold border-gray-300 text-gray-700 hover:bg-gray-50 mb-8 rounded-xl">
                  ELEGIR BÁSICO
                </Button>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-gray-600">350 Sesiones de Entrenamiento</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-gray-600">Acceso Inmediato y de Por Vida</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-gray-600">Garantía de 7 días</span></li>
                  <li className="flex items-start gap-3 opacity-50"><X className="w-5 h-5 text-red-500 shrink-0" /><span className="text-gray-500 line-through">No incluye los bonos</span></li>
                </ul>
              </div>
            </FadeIn>

            {/* Plan Completo */}
            <FadeIn delay={0.1}>
              <div className="bg-[#0a1628] rounded-3xl p-8 border-2 border-orange-500 shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest shadow-lg whitespace-nowrap">
                  MÁS POPULAR – MEJOR VALOR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Plan Completo</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-xl text-gray-400 line-through mb-1">$37</span>
                  <span className="text-6xl font-black text-white">$15</span>
                </div>
                <Button className="w-full h-16 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white mb-4 rounded-xl shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] transition-transform hover:scale-105 active:scale-95">
                  ¡OBTENER ACCESO COMPLETO!
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>Compra 100% segura · Garantía de 7 días</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "700 Sesiones de Entrenamiento",
                    "Acceso Inmediato y de Por Vida",
                    "Garantía de 7 días",
                    "100 Sesiones Extra (Bono)",
                    "40 Sesiones de Defensa (Bono)",
                    "75 Sesiones de Táctica y Desmarque (Bono)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                      <span className="text-gray-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. VISTA PREVIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Un Vistazo a Lo Que Recibirás</h2>
              <p className="mt-4 text-gray-600 text-lg">Material de calidad profesional, diseñado para entenderse fácilmente.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { img: galleryDefensa, title: "Sesión de Defensa" },
              { img: galleryAtaque, title: "Sesión de Ataque" },
              { img: galleryTecnica, title: "Técnica Individual" },
              { img: gallerySituaciones, title: "Situaciones de Juego" },
              { img: galleryPase, title: "Ejercicios de Pase" },
              { img: galleryTiro, title: "Ejercicios de Tiro" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-4/3 cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h4 className="text-white font-bold text-lg md:text-xl">{item.title}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS */}
      <section className="py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Lo Que Dicen Los Entrenadores</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Este material transformó completamente la forma en que organizo mis entrenamientos.",
                name: "Alejandro García",
                role: "Entrenador Formativo"
              },
              {
                text: "Increíble valor por el precio. Todo está organizado y listo para aplicar.",
                name: "Daniel Herrera",
                role: "Director Técnico"
              },
              {
                text: "La progresión de las sesiones es perfecta y mis jugadores han mejorado muchísimo.",
                name: "Ricardo Mendoza",
                role: "Entrenador y Preparador Físico"
              }
            ].map((testi, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0d1f3c] p-8 rounded-2xl border border-gray-800">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg italic mb-6">"{testi.text}"</p>
                  <div>
                    <h4 className="text-white font-bold">{testi.name}</h4>
                    <span className="text-orange-400 text-sm">{testi.role}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GARANTÍA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-32 h-32 shrink-0 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-orange-500">
                <ShieldCheck className="w-16 h-16 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">Garantía Incondicional de 7 Días</h3>
                <p className="text-gray-600 mb-6 text-lg">Prueba el material durante 7 días completos. Si no quedas satisfecho, te devolvemos tu dinero.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {["Devolución rápida", "Sin preguntas", "Riesgo cero"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Preguntas Frecuentes</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
              {[
                { q: "¿En qué formato recibiré el material?", a: "Recibirás acceso inmediato a una plataforma digital donde podrás ver, descargar e imprimir todas las sesiones en formato PDF de alta calidad." },
                { q: "¿Es válido para todas las edades?", a: "Sí, las sesiones están categorizadas y pueden adaptarse fácilmente desde niveles infantiles hasta equipos adultos." },
                { q: "¿Necesito experiencia previa como entrenador?", a: "No es estrictamente necesario. Las sesiones están explicadas paso a paso para que cualquier apasionado del baloncesto pueda aplicarlas." },
                { q: "¿Puedo usarlo en academias o clubes?", a: "Absolutamente. Es el material ideal para estandarizar la metodología en academias y clubes deportivos." },
                { q: "¿El acceso es inmediato?", a: "Sí. Una vez completado el pago, recibirás tus credenciales de acceso instantáneamente por correo electrónico." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0 border-gray-100">
                  <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-orange-600 hover:no-underline px-4 py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-4 pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">700 Sesiones de Entrenamiento de Baloncesto</h2>
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="w-full md:w-auto text-xl h-20 px-16 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-[0_0_50px_-10px_rgba(249,115,22,0.6)] transition-all hover:scale-105 active:scale-95"
            >
              YA ACLARÉ MIS DUDAS, ¡QUIERO COMPRAR!
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#050b14] py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Entrenamientos de Baloncesto. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
