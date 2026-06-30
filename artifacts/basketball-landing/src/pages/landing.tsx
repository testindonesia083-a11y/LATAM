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
  ChevronDown,
  Lock,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Generated images
import heroMockup from "@assets/image_1782778145213.png";
import galleryDefensa from "../assets/images/gallery-defensa.png";
import galleryAtaque from "../assets/images/gallery-ataque.png";
import galleryTecnica from "../assets/images/gallery-tecnica.png";
import gallerySituaciones from "../assets/images/gallery-situaciones.png";
import galleryPase from "../assets/images/gallery-pase.png";
import galleryTiro from "../assets/images/gallery-tiro.png";
import bonus1Img from "../assets/images/bonus-1.png";
import bonus2Img from "../assets/images/bonus-2.png";
import bonus3Img from "../assets/images/bonus-3.png";
import test1 from "../assets/images/testimonial-1.png";
import test2 from "../assets/images/testimonial-2.png";
import test3 from "../assets/images/testimonial-3.png";
import test4 from "../assets/images/testimonial-4.png";
import test5 from "../assets/images/testimonial-5.png";
import test6 from "../assets/images/testimonial-6.png";
import test7 from "../assets/images/testimonial-7.png";
import test8 from "../assets/images/testimonial-8.png";

const t = {
  es: {
    heroTitle1: '700 Sesiones de',
    heroTitle2: 'Entrenamiento de Baloncesto',
    heroSubtitle: 'Planifica meses de entrenamiento en minutos con 700 sesiones listas para aplicar. Más organización, mejores resultados y jugadores más motivados desde el primer día.',
    heroCta: '¡QUIERO ACCEDER AHORA!',
    // Section 2
    whatYouGet: 'Lo Que Vas A Recibir',
    whatYouGetSub: 'Todo lo que necesitas para llevar a tu equipo al siguiente nivel.',
    card1Title: '700 Sesiones Completas',
    card1Desc: 'Sesiones organizadas con objetivos claros, tiempos definidos y metodologías validadas.',
    card1Items: ['Ejercicios progresivos y estructurados', 'Acceso desde celular, tablet o computadora', 'Material listo para aplicar'],
    card2Title: 'Planificaciones Paso a Paso',
    card2Desc: 'Sesiones completas que facilitan la organización de toda la temporada.',
    card2Items: ['Diferentes niveles de dificultad', 'Resultados medibles', 'Fácil implementación'],
    card3Title: 'Para Todos los Equipos',
    card3Desc: 'Ideal para entrenadores, academias y clubes deportivos.',
    card3Items: ['Categorías infantiles', 'Categorías juveniles', 'Equipos adultos'],
    // Section 3
    benefits: '¿Por Qué Elegir Nuestro Material?',
    benefitsSub: 'Deja de improvisar. Eleva el nivel de tus prácticas con un sistema comprobado que maximiza el potencial de cada jugador y te ahorra cientos de horas.',
    benefitItems: [
      'Ahorra horas de planificación cada semana.',
      'Nunca más te quedarás sin ideas para entrenar.',
      'Mejora dramáticamente la calidad de tus entrenamientos.',
      'Aumenta la motivación y compromiso de tus jugadores.',
      'Organiza temporadas completas con facilidad.',
      'Entrena con metodología y estructura profesional.'
    ],
    // Section 4
    bonuses: '¡Recibe 3 Bonos Increíbles GRATIS!',
    bonusesSub: 'Total en bonos: $27 — ¡HOY GRATIS!',
    bonusTodayFree: 'HOY GRATIS',
    bonusNormalValue: 'Valor Normal',
    bonusTitles: ['100 Sesiones Extra de Baloncesto', '40 Sesiones de Defensa', '75 Sesiones de Táctica y Desmarque'],
    // Section 5
    pricing: 'Elige Tu Camino Al Éxito',
    pricingSubtitle: 'Una inversión única. Resultados de por vida.',
    scarcity: ['Solo quedan', '5 plazas', 'a este precio'],
    planBasicName: 'Plan Básico',
    planBasicItems: ['700 Sesiones de Entrenamiento', 'Acceso Inmediato y de Por Vida', 'Garantía de 7 días', 'No incluye los bonos'],
    planBasicBtn: 'ELEGIR BÁSICO',
    planFullName: 'Plan Completo',
    planFullBadge: 'RECOMENDADO',
    planFullItems: ['700 Sesiones de Entrenamiento', 'Acceso Inmediato y de Por Vida', 'Garantía de 7 días', '100 Sesiones Extra (Bono)', '40 Sesiones de Defensa (Bono)', '75 Sesiones de Táctica y Desmarque (Bono)'],
    planFullBtn: '¡OBTENER ACCESO COMPLETO!',
    trustBadges: ['Pago Seguro', 'Garantía 7 Días', 'Acceso Inmediato'],
    // Section 6
    preview: 'Un Vistazo a Lo Que Recibirás',
    previewSub: 'Material de calidad profesional, diseñado para entenderse fácilmente.',
    previewTitles: ['Sesión de Defensa', 'Sesión de Ataque', 'Técnica Individual', 'Situaciones de Juego', 'Ejercicios de Pase', 'Ejercicios de Tiro'],
    // Section 7
    testimonials: 'Lo Que Dicen Los Entrenadores',
    // Section 8
    guarantee: 'GARANTÍA TOTAL DE 7 DÍAS',
    guaranteeSub: 'Si no estás 100% satisfecho, te devolvemos cada centavo. Sin demoras. Sin preguntas.',
    guaranteeItems: [
      { title: 'Reembolso Inmediato', desc: 'Procesamos tu solicitud el mismo día que la envías.' },
      { title: 'Sin Preguntas', desc: 'No te pediremos explicaciones ni te pondremos trabas.' },
      { title: 'Riesgo Absoluto Cero', desc: 'Tu inversión está protegida. Tienes todo por ganar.' }
    ],
    // Section 9
    faq: 'Preguntas Frecuentes',
    faqItems: [
      { q: '¿En qué formato recibiré el material?', a: 'Recibirás acceso inmediato a una plataforma digital donde podrás ver, descargar e imprimir todas las sesiones en formato PDF de alta calidad.' },
      { q: '¿Es válido para todas las edades?', a: 'Sí, las sesiones están categorizadas y pueden adaptarse fácilmente desde niveles infantiles hasta equipos adultos.' },
      { q: '¿Necesito experiencia previa como entrenador?', a: 'No es estrictamente necesario. Las sesiones están explicadas paso a paso para que cualquier apasionado del baloncesto pueda aplicarlas.' },
      { q: '¿Puedo usarlo en academias o clubes?', a: 'Absolutamente. Es el material ideal para estandarizar la metodología en academias y clubes deportivos.' },
      { q: '¿El acceso es inmediato?', a: 'Sí. Una vez completado el pago, recibirás tus credenciales de acceso instantáneamente por correo electrónico.' }
    ],
    // Section 10
    ctaTitle: '700 Sesiones de Entrenamiento de Baloncesto',
    finalCta: '¡QUIERO MIS 700 SESIONES AHORA!',
    footer: '© 2026 Entrenamientos de Baloncesto. Todos los derechos reservados.',
  },
  en: {
    heroTitle1: '700 Basketball',
    heroTitle2: 'Training Sessions',
    heroSubtitle: 'Plan months of training in minutes with 700 ready-to-use sessions. More organization, better results, and more motivated players from day one.',
    heroCta: 'I WANT ACCESS NOW!',
    // Section 2
    whatYouGet: 'What You Will Receive',
    whatYouGetSub: 'Everything you need to take your team to the next level.',
    card1Title: '700 Complete Sessions',
    card1Desc: 'Sessions organized with clear objectives, defined times, and validated methodologies.',
    card1Items: ['Progressive and structured exercises', 'Access from phone, tablet or computer', 'Ready-to-use material'],
    card2Title: 'Step-by-Step Plans',
    card2Desc: 'Complete sessions that make organizing an entire season easy.',
    card2Items: ['Different difficulty levels', 'Measurable results', 'Easy implementation'],
    card3Title: 'For All Teams',
    card3Desc: 'Ideal for coaches, academies, and sports clubs.',
    card3Items: ['Youth categories', 'Junior categories', 'Adult teams'],
    // Section 3
    benefits: 'Why Choose Our Material?',
    benefitsSub: "Stop improvising. Elevate your practice level with a proven system that maximizes each player's potential and saves you hundreds of hours.",
    benefitItems: [
      'Save hours of planning every week.',
      'Never run out of training ideas again.',
      'Dramatically improve the quality of your sessions.',
      'Increase player motivation and commitment.',
      'Organize complete seasons with ease.',
      'Train with professional methodology and structure.'
    ],
    // Section 4
    bonuses: 'Receive 3 Amazing FREE Bonuses!',
    bonusesSub: 'Total bonus value: $27 — TODAY FREE!',
    bonusTodayFree: 'TODAY FREE',
    bonusNormalValue: 'Normal Value',
    bonusTitles: ['100 Extra Basketball Sessions', '40 Defense Sessions', '75 Tactics & Movement Sessions'],
    // Section 5
    pricing: 'Choose Your Path To Success',
    pricingSubtitle: 'One-time investment. Lifetime results.',
    scarcity: ['Only', '5 spots', 'left at this price'],
    planBasicName: 'Basic Plan',
    planBasicItems: ['700 Training Sessions', 'Immediate & Lifetime Access', '7-Day Guarantee', 'Bonuses not included'],
    planBasicBtn: 'CHOOSE BASIC',
    planFullName: 'Complete Plan',
    planFullBadge: 'RECOMMENDED',
    planFullItems: ['700 Training Sessions', 'Immediate & Lifetime Access', '7-Day Guarantee', '100 Extra Sessions (Bonus)', '40 Defense Sessions (Bonus)', '75 Tactics Sessions (Bonus)'],
    planFullBtn: 'GET COMPLETE ACCESS!',
    trustBadges: ['Secure Payment', '7-Day Guarantee', 'Immediate Access'],
    // Section 6
    preview: 'A Preview of What You Will Receive',
    previewSub: 'Professional quality material, designed to be easily understood.',
    previewTitles: ['Defense Session', 'Attack Session', 'Individual Technique', 'Game Situations', 'Passing Drills', 'Shooting Drills'],
    // Section 7
    testimonials: 'What Coaches Are Saying',
    // Section 8
    guarantee: 'TOTAL 7-DAY GUARANTEE',
    guaranteeSub: 'If you are not 100% satisfied, we will refund every cent. No delays. No questions.',
    guaranteeItems: [
      { title: 'Immediate Refund', desc: 'We process your request the same day you send it.' },
      { title: 'No Questions', desc: 'We will not ask for explanations or put up barriers.' },
      { title: 'Absolutely Zero Risk', desc: 'Your investment is protected. You have everything to gain.' }
    ],
    // Section 9
    faq: 'Frequently Asked Questions',
    faqItems: [
      { q: 'In what format will I receive the material?', a: 'You will get immediate access to a digital platform where you can view, download, and print all sessions in high-quality PDF format.' },
      { q: 'Is it valid for all ages?', a: 'Yes, sessions are categorized and can be adapted from youth levels to adult teams.' },
      { q: 'Do I need prior experience as a coach?', a: 'Not strictly. The sessions are explained step by step so any basketball enthusiast can apply them.' },
      { q: 'Can I use it in academies or clubs?', a: 'Absolutely. It is the ideal material for standardizing methodology in academies and sports clubs.' },
      { q: 'Is access immediate?', a: 'Yes. Once payment is completed, you will receive your access credentials instantly by email.' }
    ],
    // Section 10
    ctaTitle: '700 Basketball Training Sessions',
    finalCta: 'I WANT MY 700 SESSIONS NOW!',
    footer: '© 2026 Basketball Training. All rights reserved.',
  }
};

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
    <div className="inline-flex items-center gap-2 bg-[#0a0a0a]/50 border border-[#c9a227]/30 px-4 py-2 rounded-full backdrop-blur-sm">
      <Clock className="w-4 h-4 text-[#c9a227]" />
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

const TestimonialCarousel = () => {
  const testimonials = [
    { text: "Este material transformó completamente la forma en que organizo mis entrenamientos.", name: "Alejandro García", role: "Entrenador Formativo", photo: test1 },
    { text: "Increíble valor por el precio. Todo está organizado y listo para aplicar.", name: "Daniel Herrera", role: "Director Técnico", photo: test2 },
    { text: "La progresión de las sesiones es perfecta y mis jugadores han mejorado muchísimo.", name: "Ricardo Mendoza", role: "Entrenador y Preparador Físico", photo: test3 },
    { text: "Ahorré horas de planificación. Ahora mis prácticas son más dinámicas y efectivas.", name: "Carlos Vega", role: "Entrenador Juvenil", photo: test4 },
    { text: "La variedad de sesiones es impresionante. Siempre encuentro algo nuevo para mis jugadores.", name: "Marcos Ruiz", role: "Preparador Físico", photo: test5 },
    { text: "Material profesional al alcance de cualquier entrenador. Totalmente recomendado.", name: "Javier Torres", role: "Entrenador de Academia", photo: test6 },
    { text: "Implementé estas sesiones con tres categorías distintas y los resultados fueron inmediatos.", name: "Luis Fernández", role: "Coordinador Técnico", photo: test7 },
    { text: "Desde que uso este material, la motivación de mis jugadores mejoró notablemente.", name: "Pablo Sánchez", role: "Entrenador Club Amateur", photo: test8 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - itemsPerPage;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-12">
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111] border border-[#2a2a2a] text-[#c9a227] hover:bg-[#1a1a1a] transition-colors z-10">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-8"
          initial={false}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {visibleTestimonials.map((testi, i) => (
            <div key={currentIndex + i} className="flex-none w-full md:w-[calc(33.333%-1.33rem)] bg-[#111111] p-8 rounded-2xl border border-[#2a2a2a]">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#c9a227] text-[#c9a227]" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-6">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testi.photo} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#c9a227]" />
                <div>
                  <h4 className="text-white font-bold">{testi.name}</h4>
                  <span className="text-[#c9a227] text-sm">{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111111] border border-[#2a2a2a] text-[#c9a227] hover:bg-[#1a1a1a] transition-colors z-10">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {[...Array(maxIndex + 1)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-[#c9a227] w-8' : 'bg-[#2a2a2a]'}`}
          />
        ))}
      </div>
    </div>
  );
};

const UpsellModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-start justify-center overflow-y-auto pt-20 pb-10 px-4">
    <div className="max-w-md w-full mx-auto bg-[#111111] rounded-2xl p-8 border border-[#c9a227]/30 shadow-2xl relative mt-10">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <X className="w-6 h-6" />
      </button>
      <div className="text-center mb-6">
        <span className="text-4xl inline-block mb-4">🏀</span>
        <h3 className="text-2xl font-bold text-white mb-2">¡ESPERA! Tenemos Una Oferta Única Para Ti</h3>
        <p className="text-[#c9a227] font-medium text-lg">Actualiza a la Oferta Premium ahora por solo $7 (en vez de $15)</p>
      </div>
      
      <ul className="space-y-4 mb-8 text-gray-200">
        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>700 Sesiones de Entrenamiento</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>100 Sesiones Extra de Baloncesto</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>40 Sesiones de Defensa en Baloncesto</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>75 Sesiones de Táctica y Desmarque</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>Acceso inmediato y de por vida</span></li>
      </ul>

      <p className="text-[#c9a227] font-bold text-center mb-6">⚡ ¡Esta oferta solo aparece una vez!</p>

      <a href="https://pay.hotmart.com/U106546551D?off=pjja75vs" target="_blank" rel="noopener noreferrer" className="block w-full h-14 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg mb-4 flex items-center justify-center transition-colors">
        Sí, quiero el Plan Premium por $7
      </a>

      <div className="text-center">
        <a href="https://pay.hotmart.com/U106546551D?off=i2x8k7hx" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer underline">
          No, continuar con el Plan Básico
        </a>
      </div>
    </div>
  </div>
);

export default function LandingPage() {
  const [lang, setLang] = useState<'es'|'en'>('es');
  const [showUpsell, setShowUpsell] = useState(false);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const today = new Date();
  const todayStr = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '/');

  const currT = t[lang];

  const cards = [
    { title: currT.card1Title, desc: currT.card1Desc, items: currT.card1Items },
    { title: currT.card2Title, desc: currT.card2Desc, items: currT.card2Items },
    { title: currT.card3Title, desc: currT.card3Desc, items: currT.card3Items },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#c9a227] selection:text-black relative">
      
      {showUpsell && <UpsellModal onClose={() => setShowUpsell(false)} />}

      <button
        onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}
        className="fixed top-14 right-4 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#2a2a2a] rounded-full px-3 py-1.5 text-white text-xs font-bold cursor-pointer hover:border-[#c9a227] transition-colors z-[99]"
      >
        {lang === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}
      </button>

      {/* 0. ANNOUNCEMENT BAR */}
      <div className="fixed top-0 left-0 w-full bg-[#dc2626] text-white text-center py-2 z-50 font-bold tracking-wide shadow-md">
        🏀 DESCUENTO EXCLUSIVO SOLO HOY • {todayStr} 🏀
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#c9a227]/10 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                {currT.heroTitle1} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8c547]">{currT.heroTitle2}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl leading-relaxed">
                {currT.heroSubtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col items-center gap-6 w-full md:w-auto">
              <Button 
                onClick={scrollToPricing}
                size="lg" 
                className="w-full md:w-auto text-lg h-16 px-12 bg-[#c9a227] hover:bg-[#a8831c] text-black font-bold rounded-full shadow-[0_0_40px_-10px_rgba(201,162,39,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                {currT.heroCta}
              </Button>
              <CountdownTimer />
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-10 relative max-w-5xl mx-auto">
            <img 
              src={heroMockup} 
              alt="Dispositivos mostrando la plataforma" 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-[#2a2a2a]"
            />
          </FadeIn>
        </div>
      </section>

      {/* 2. LO QUE VAS A RECIBIR */}
      <section className="py-14 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">{currT.whatYouGet}</h2>
              <p className="mt-4 text-gray-600 text-lg">{currT.whatYouGetSub}</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col hover:border-[#c9a227]/30 transition-colors">
                  <div className="h-12 w-12 bg-[#c9a227]/10 text-[#c9a227] rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{card.desc}</p>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
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
      <section className="py-14 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span className="text-[30vw] font-black text-[#c9a227]/5 leading-none tracking-tighter mix-blend-overlay">700</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-center">
            
            <div className="lg:w-5/12">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8c547]">{currT.benefits}</span>
                </h2>
                <p className="text-xl text-gray-400">
                  {currT.benefitsSub}
                </p>
              </FadeIn>
            </div>

            <div className="lg:w-7/12 w-full">
              <div className="flex flex-col">
                {currT.benefitItems.map((benefit, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-6 py-6 border-b border-[#2a2a2a] group hover:bg-[#111111] transition-colors px-4 rounded-lg">
                      <div className="w-12 h-12 shrink-0 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] font-bold text-lg group-hover:bg-[#c9a227] group-hover:text-black transition-colors">
                        {(i + 1).toString().padStart(2, '0')}
                      </div>
                      <p className="text-gray-200 text-lg font-medium">{benefit}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BONOS GRATIS */}
      <section className="py-14 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">{currT.bonuses}</h2>
              <p className="mt-4 text-[#c9a227] font-bold text-xl">{currT.bonusesSub}</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { img: bonus1Img, title: currT.bonusTitles[0], val: 12 },
              { img: bonus2Img, title: currT.bonusTitles[1], val: 8 },
              { img: bonus3Img, title: currT.bonusTitles[2], val: 7 }
            ].map((bono, i) => (
              <FadeIn key={i} delay={i * 0.1} className="h-full">
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col h-full border border-[#2a2a2a] hover:border-[#c9a227] transition-colors group shadow-xl">
                  <div className="h-48 relative overflow-hidden">
                    <img src={bono.img} alt={bono.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col items-center text-center relative z-10 -mt-8">
                    <div className="inline-block px-4 py-1.5 bg-[#c9a227] text-black font-bold text-sm rounded-full mb-6 uppercase tracking-widest shadow-lg">
                      BONUS {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex-grow">{bono.title}</h3>
                    <div className="flex flex-col items-center gap-1 text-lg w-full pt-6 border-t border-[#2a2a2a]">
                      <span className="text-gray-500 line-through text-sm">{currT.bonusNormalValue}: ${bono.val}</span>
                      <span className="text-[#e8c547] font-black text-xl">{currT.bonusTodayFree}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <section id="pricing" className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white">{currT.pricing}</h2>
              <p className="mt-4 text-[#c9a227] text-xl font-medium tracking-wide">{currT.pricingSubtitle}</p>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-8 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full px-6 py-3 max-w-sm mx-auto">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full bg-[#c9a227]" />)}
                {[...Array(7)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full bg-[#2a2a2a]" />)}
              </div>
              <span className="text-sm text-gray-300 font-medium">{currT.scarcity[0]} <span className="text-[#c9a227] font-bold">{currT.scarcity[1]}</span> {currT.scarcity[2]}</span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Plan Basico */}
            <FadeIn>
              <div className="bg-[#1a1a1a] rounded-3xl p-10 border border-[#2a2a2a] shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{currT.planBasicName}</h3>
                <div className="flex items-end gap-2 mb-8 border-b border-[#2a2a2a] pb-8">
                  <span className="text-xl text-gray-500 line-through mb-1">$14</span>
                  <span className="text-5xl font-black text-white">$5</span>
                </div>
                <ul className="space-y-5 mb-10">
                  {currT.planBasicItems.map((item, i) => (
                    <li key={i} className={`flex items-start gap-3 ${i === 3 ? 'opacity-50' : ''}`}>
                      {i === 3 ? <X className="w-5 h-5 text-red-500 shrink-0" /> : <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0" />}
                      <span className={i === 3 ? "text-gray-500 line-through" : "text-gray-300"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowUpsell(true)}
                  className="block w-full h-14 text-lg font-bold border border-[#2a2a2a] text-gray-300 hover:bg-[#111111] hover:text-white rounded-xl flex items-center justify-center transition-colors bg-transparent"
                >
                  {currT.planBasicBtn}
                </button>
              </div>
            </FadeIn>

            {/* Plan Completo */}
            <FadeIn delay={0.1}>
              <div className="bg-[#111111] rounded-3xl p-10 relative transform md:-translate-y-4 shadow-[0_0_50px_-12px_rgba(201,162,39,0.3)]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#c9a227] to-[#e8c547] p-[2px] -z-10" />
                <div className="absolute inset-[2px] bg-[#111111] rounded-[22px] -z-10" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#c9a227] to-[#e8c547] text-black px-8 py-2 rounded-full font-bold text-sm tracking-widest shadow-lg whitespace-nowrap">
                  {currT.planFullBadge}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{currT.planFullName}</h3>
                <div className="flex items-end gap-2 mb-8 border-b border-[#2a2a2a] pb-8">
                  <span className="text-xl text-gray-500 line-through mb-2">$37</span>
                  <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#e8c547]">$15</span>
                </div>
                
                <ul className="space-y-5 mb-10">
                  {currT.planFullItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0" />
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full h-16 text-lg font-bold bg-[#c9a227] hover:bg-[#a8831c] text-black mb-4 rounded-xl shadow-[0_0_30px_-5px_rgba(201,162,39,0.4)] transition-transform hover:scale-105 active:scale-95">
                  {currT.planFullBtn}
                </Button>
                
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-[#2a2a2a] max-w-4xl mx-auto">
              <div className="flex items-center gap-3 text-gray-400">
                <Lock className="w-5 h-5 text-[#c9a227]" />
                <span className="font-medium text-sm tracking-wide uppercase">{currT.trustBadges[0]}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <ShieldCheck className="w-5 h-5 text-[#c9a227]" />
                <span className="font-medium text-sm tracking-wide uppercase">{currT.trustBadges[1]}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Zap className="w-5 h-5 text-[#c9a227]" />
                <span className="font-medium text-sm tracking-wide uppercase">{currT.trustBadges[2]}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. VISTA PREVIA */}
      <section className="py-14 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">{currT.preview}</h2>
              <p className="mt-4 text-gray-600 text-lg">{currT.previewSub}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { img: galleryDefensa, title: currT.previewTitles[0] },
              { img: galleryAtaque, title: currT.previewTitles[1] },
              { img: galleryTecnica, title: currT.previewTitles[2] },
              { img: gallerySituaciones, title: currT.previewTitles[3] },
              { img: galleryPase, title: currT.previewTitles[4] },
              { img: galleryTiro, title: currT.previewTitles[5] }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-4/3 cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h4 className="text-white font-bold text-lg md:text-xl">{item.title}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIOS - CAROUSEL */}
      <section className="py-14 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{currT.testimonials}</h2>
            </div>
          </FadeIn>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. GARANTÍA */}
      <section className="py-16 bg-[#0a0a0a] relative overflow-hidden border-y border-[#2a2a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c9a227]/10 via-transparent to-transparent opacity-80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#c9a227] blur-3xl opacity-20 rounded-full" />
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#e8c547] to-[#a8831c] p-1 shadow-2xl relative z-10">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#c9a227]/50">
                    <ShieldCheck className="w-14 h-14 text-[#c9a227]" />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent mb-8 max-w-lg" />
              
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{currT.guarantee}</h3>
              
              <p className="text-[#e8c547] text-xl md:text-2xl font-medium mb-12 max-w-2xl leading-relaxed">
                {currT.guaranteeSub}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent mb-10 max-w-lg" />

              <div className="grid md:grid-cols-3 gap-8 w-full">
                {[
                  { icon: Clock, title: currT.guaranteeItems[0].title, desc: currT.guaranteeItems[0].desc },
                  { icon: Lightbulb, title: currT.guaranteeItems[1].title, desc: currT.guaranteeItems[1].desc },
                  { icon: ShieldCheck, title: currT.guaranteeItems[2].title, desc: currT.guaranteeItems[2].desc }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#111111] border border-[#2a2a2a] flex items-center justify-center mb-4 text-[#c9a227]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-14 bg-[#f8f6f1]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a]">{currT.faq}</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
              {currT.faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0 border-gray-100">
                  <AccordionTrigger className="text-left font-bold text-gray-800 hover:text-[#c9a227] hover:no-underline px-4 py-6">
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
      <section className="py-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c9a227] via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <img src={heroMockup} alt="Mockup" className="mx-auto mb-8 max-w-2xl w-full rounded-2xl shadow-[0_0_60px_-20px_rgba(201,162,39,0.4)]" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">{currT.ctaTitle}</h2>
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="w-full md:w-auto text-xl h-14 px-16 bg-[#c9a227] hover:bg-[#a8831c] text-black font-bold rounded-full shadow-[0_0_50px_-10px_rgba(201,162,39,0.6)] transition-all hover:scale-105 active:scale-95"
            >
              {currT.finalCta}
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#060606] py-12 border-t border-[#2a2a2a]">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm text-center">
            {currT.footer}
          </p>
        </div>
      </footer>

    </div>
  );
}