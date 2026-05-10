/* ============================================================
   THE BEAUTY LOFT — i18n
   Toggle EN / ES, persists to localStorage.
============================================================ */

const I18N = {
  en: {
    // Top bar
    "top.bar": "Open Tue–Sun · 240 E 28th Street, Kips Bay NY · Walk-ins welcome",
    "top.cta": "Book your appointment",

    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.book": "Book",
    "nav.bookNow": "Book Now",
    "nav.admin": "Admin",

    // Hero (home)
    "hero.eyebrow": "Kips Bay · Manhattan · Est. 2021",
    "hero.title.line1": "The Beauty",
    "hero.title.line2": "Loft",
    "hero.script": "Welcome to your sanctuary",
    "hero.subtitle": "A full-service beauty destination in the heart of Kips Bay where every detail is intentional — from the products we use to the results we deliver.",
    "hero.cta.book": "Book a service",
    "hero.cta.menu": "View services",
    "hero.scroll": "Scroll to explore",

    // Marquee
    "marquee.tagline": "Brows · Lashes · Waxing · Facials · Color · Cuts · Styling · Extensions · Hair + Scalp Treatments",

    // Services preview
    "services.eyebrow": "Our Craft",
    "services.title": "A complete beauty experience",
    "services.subtitle": "Hair, skin, brows and lashes — handled by experts in a setting designed for slow luxury.",
    "services.viewAll": "Explore the full menu",
    "services.color": "Color",
    "services.lashLifts": "Lash Lifts",
    "services.cuts": "Cuts",
    "services.blowout": "Blowouts",
    "services.scalp": "Scalp",
    "services.lighten": "Lightening",
    "services.keratin": "Keratin",
    "services.brows": "Brows",
    "services.facials": "Facials",
    "services.waxing": "Waxing",
    "services.extensions": "Extensions",
    "services.styling": "Styling",

    // About preview
    "about.eyebrow": "Welcome to The Beauty Loft",
    "about.title": "A space where every detail is intentional",
    "about.body": "We are a full-service beauty destination in the heart of Kips Bay, Manhattan. We believe in using high-quality, professional products and techniques to ensure long-lasting, beautiful results.",
    "about.body2": "From cuts and color to extensions and treatments — our team of senior stylists and licensed estheticians treat every appointment as a private, unhurried experience.",
    "about.cta": "Read our story",
    "about.fact1": "Senior Stylists",
    "about.fact2": "5-Star Reviews",
    "about.fact3": "Years of Excellence",

    // Why us
    "why.eyebrow": "The Loft Difference",
    "why.title": "Why guests stay with us",
    "why.1.title": "Senior-only stylists",
    "why.1.body": "Every chair is staffed by a licensed senior with 8+ years of experience. No interns, no rushing.",
    "why.2.title": "Premium product line",
    "why.2.body": "Davines, Olaplex, K18, Kérastase. We invest in the products that actually protect your hair.",
    "why.3.title": "Private, unhurried suites",
    "why.3.body": "Our space is designed for one client at a time — quiet music, soft light, no overlap.",
    "why.4.title": "Bilingual concierge",
    "why.4.body": "EN / ES booking and consultations. Your stylist will text you the night before to confirm.",

    // Featured packages
    "packages.eyebrow": "Signature Experiences",
    "packages.title": "Loft packages",
    "packages.subtitle": "Bundled rituals built around your hair, skin and time.",
    "packages.book": "Book this ritual",
    "packages.duration": "min",
    "packages.signature.title": "The Signature Reset",
    "packages.signature.desc": "Scalp detox + custom blow-out + brow shape. Our most-booked refresh.",
    "packages.bridal.title": "Bridal Trial",
    "packages.bridal.desc": "Hair trial, lash lift, brow lamination and skin glow facial.",
    "packages.deep.title": "Deep Repair",
    "packages.deep.desc": "K18 + Olaplex bonded treatment with personalized cut and gloss finish.",

    // Gallery preview
    "gallery.eyebrow": "Gallery",
    "gallery.title": "Real work, real results",
    "gallery.subtitle": "Tap any image to view in the lightbox.",
    "gallery.viewAll": "Open the full gallery",
    "gallery.filter.all": "All",
    "gallery.filter.color": "Color",
    "gallery.filter.cuts": "Cuts",
    "gallery.filter.lashes": "Lashes",
    "gallery.filter.facials": "Facials",
    "gallery.filter.bridal": "Bridal",

    // Testimonials
    "reviews.eyebrow": "Reviews",
    "reviews.title": "Loved across Manhattan",
    "reviews.subtitle": "What our regulars say after their visit.",

    // Booking CTA
    "cta.title": "Your seat is waiting",
    "cta.subtitle": "Book online in under 90 seconds. Same-day appointments often available.",
    "cta.book": "Book now",
    "cta.call": "Call the loft",

    // Footer
    "footer.tag": "Full-service beauty · Kips Bay",
    "footer.about": "About",
    "footer.services": "Services",
    "footer.book": "Book online",
    "footer.gallery": "Gallery",
    "footer.contact": "Contact",
    "footer.hours.title": "Hours",
    "footer.hours.weekdays": "Tue–Fri · 10am – 8pm",
    "footer.hours.sat": "Saturday · 9am – 8pm",
    "footer.hours.sun": "Sunday · 10am – 6pm",
    "footer.hours.mon": "Monday · Closed",
    "footer.find.title": "Find us",
    "footer.address": "240 E 28th Street, New York, NY 10016",
    "footer.newsletter.title": "Stay in the loft",
    "footer.newsletter.body": "Seasonal looks, member-only offers and new bookings open first.",
    "footer.newsletter.placeholder": "Your email",
    "footer.newsletter.cta": "Subscribe",
    "footer.copyright": "© 2026 The Beauty Loft. All rights reserved.",
    "footer.demo": "Demo by GreenGrow Digital",

    // Services page
    "services.page.hero.eyebrow": "The Menu",
    "services.page.hero.title": "Services & pricing",
    "services.page.hero.subtitle": "Transparent pricing. No hidden upsells. Every service includes a complimentary consultation.",
    "services.cat.hair": "Hair",
    "services.cat.color": "Color",
    "services.cat.lashes": "Lashes & Brows",
    "services.cat.skin": "Skin & Facials",
    "services.cat.waxing": "Waxing",
    "services.cat.treatments": "Treatments",
    "services.cat.extensions": "Extensions",
    "services.book": "Book",
    "services.from": "from",
    "services.duration": "min",
    "services.note": "Pricing varies based on hair length, density and product needs. Final quote is given in your free consultation.",

    // Booking page
    "booking.hero.eyebrow": "Booking",
    "booking.hero.title": "Reserve your moment",
    "booking.hero.subtitle": "Choose service, stylist and time. Confirmation arrives in seconds.",
    "booking.step1": "Service",
    "booking.step2": "Stylist",
    "booking.step3": "Date & Time",
    "booking.step4": "Your Info",
    "booking.step5": "Confirm",
    "booking.next": "Continue",
    "booking.back": "Back",
    "booking.confirm": "Confirm booking",
    "booking.summary": "Summary",
    "booking.choose.service": "Choose your service",
    "booking.choose.stylist": "Choose your stylist",
    "booking.any.stylist": "First available",
    "booking.any.stylist.desc": "We'll match you with the next senior stylist available.",
    "booking.choose.date": "Pick a date",
    "booking.choose.time": "Pick a time",
    "booking.your.info": "Your information",
    "booking.first": "First name",
    "booking.last": "Last name",
    "booking.phone": "Phone",
    "booking.email": "Email",
    "booking.notes": "Notes for your stylist (optional)",
    "booking.notes.ph": "Allergies, preferences, inspiration photos…",
    "booking.deposit": "A $20 deposit secures your appointment. Fully credited toward your final price.",
    "booking.terms": "Cancel free up to 24h before. After that, the deposit is non-refundable.",
    "booking.pay": "Pay deposit & confirm",
    "booking.success.title": "You're booked.",
    "booking.success.subtitle": "Confirmation sent to your email and phone.",
    "booking.success.cta": "Add to calendar",
    "booking.success.home": "Back to home",
    "booking.success.ref": "Booking reference",

    // Checkout / Payment
    "pay.title": "Secure deposit",
    "pay.subtitle": "256-bit encrypted · Powered by Stripe",
    "pay.card": "Card information",
    "pay.cardNumber": "Card number",
    "pay.expiry": "MM / YY",
    "pay.cvc": "CVC",
    "pay.cardName": "Name on card",
    "pay.zip": "ZIP",
    "pay.applePay": "Pay with Apple Pay",
    "pay.googlePay": "Pay with Google Pay",
    "pay.or": "or pay with card",
    "pay.processing": "Processing your payment…",
    "pay.success": "Payment received",

    // About page
    "aboutPage.hero.eyebrow": "Our Story",
    "aboutPage.hero.title": "Beauty, slowly.",
    "aboutPage.hero.subtitle": "Born from the belief that good service can't be rushed.",
    "aboutPage.story.title": "Built on craft, kept on detail",
    "aboutPage.story.body1": "The Beauty Loft opened in 2021 with a simple idea: bring the precision of a downtown salon to the warmth of a private suite. We grew through word of mouth — guests sending their mothers, sisters, daughters and friends.",
    "aboutPage.story.body2": "Today our team of senior stylists and licensed estheticians serves Kips Bay and beyond, with appointments often booked weeks in advance. Yet the philosophy hasn't changed: one guest at a time, the right products, and the time to do it properly.",
    "aboutPage.team.eyebrow": "The Team",
    "aboutPage.team.title": "Senior, licensed, and yours",
    "aboutPage.values.eyebrow": "Values",
    "aboutPage.values.title": "What guides us",
    "aboutPage.value1.title": "Quality over speed",
    "aboutPage.value1.body": "We never overbook. Your time is yours.",
    "aboutPage.value2.title": "Honest consultations",
    "aboutPage.value2.body": "If a service isn't right for you, we'll say so.",
    "aboutPage.value3.title": "Clean, professional products",
    "aboutPage.value3.body": "Trusted brands. No mystery formulas.",
    "aboutPage.value4.title": "Bilingual & inclusive",
    "aboutPage.value4.body": "EN / ES service, all hair textures welcome.",

    // Contact
    "contact.hero.eyebrow": "Visit",
    "contact.hero.title": "Find the loft",
    "contact.hero.subtitle": "Walk-ins welcome when chairs are open. For best results, book ahead.",
    "contact.form.title": "Send us a note",
    "contact.form.name": "Your name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone (optional)",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.form.success": "Thank you — we'll respond within 24 hours.",
    "contact.info.title": "Direct info",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Hours",

    // Gallery page
    "galleryPage.hero.eyebrow": "Gallery",
    "galleryPage.hero.title": "Looks from the loft",
    "galleryPage.hero.subtitle": "A curated selection of recent work — color, cuts, lashes and bridal.",

    // Common
    "common.minutes": "minutes",
    "common.from": "from",
    "common.required": "required",
    "common.loading": "Loading…",
    "common.close": "Close",
  },

  es: {
    "top.bar": "Abierto Mar–Dom · 240 E 28th Street, Kips Bay NY · Sin cita previa también",
    "top.cta": "Reserva tu cita",

    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.gallery": "Galería",
    "nav.about": "Nosotras",
    "nav.contact": "Contacto",
    "nav.book": "Reservar",
    "nav.bookNow": "Reservar",
    "nav.admin": "Admin",

    "hero.eyebrow": "Kips Bay · Manhattan · Desde 2021",
    "hero.title.line1": "The Beauty",
    "hero.title.line2": "Loft",
    "hero.script": "Bienvenida a tu santuario",
    "hero.subtitle": "Un destino de belleza integral en el corazón de Kips Bay donde cada detalle es intencional, desde los productos que usamos hasta los resultados que entregamos.",
    "hero.cta.book": "Reservar servicio",
    "hero.cta.menu": "Ver servicios",
    "hero.scroll": "Desliza para explorar",

    "marquee.tagline": "Cejas · Pestañas · Depilación · Faciales · Color · Cortes · Peinado · Extensiones · Tratamientos cuero cabelludo",

    "services.eyebrow": "Nuestro oficio",
    "services.title": "Una experiencia de belleza completa",
    "services.subtitle": "Cabello, piel, cejas y pestañas — de manos expertas en un espacio diseñado para el lujo pausado.",
    "services.viewAll": "Ver el menú completo",
    "services.color": "Color",
    "services.lashLifts": "Lifting de pestañas",
    "services.cuts": "Cortes",
    "services.blowout": "Brushing",
    "services.scalp": "Cuero cabelludo",
    "services.lighten": "Aclarado",
    "services.keratin": "Keratina",
    "services.brows": "Cejas",
    "services.facials": "Faciales",
    "services.waxing": "Depilación",
    "services.extensions": "Extensiones",
    "services.styling": "Peinado",

    "about.eyebrow": "Bienvenida a The Beauty Loft",
    "about.title": "Un espacio donde cada detalle es intencional",
    "about.body": "Somos un destino de belleza integral en el corazón de Kips Bay, Manhattan. Creemos en usar productos profesionales de alta calidad y técnicas que aseguren resultados duraderos y hermosos.",
    "about.body2": "Desde cortes y color hasta extensiones y tratamientos — nuestro equipo de estilistas senior y esteticistas licenciadas trata cada cita como una experiencia privada y sin prisa.",
    "about.cta": "Conoce nuestra historia",
    "about.fact1": "Estilistas Senior",
    "about.fact2": "Reseñas 5★",
    "about.fact3": "Años de Excelencia",

    "why.eyebrow": "La diferencia del Loft",
    "why.title": "Por qué nuestras clientas se quedan",
    "why.1.title": "Solo estilistas senior",
    "why.1.body": "Cada silla es atendida por una licenciada senior con 8+ años de experiencia. Sin practicantes ni prisa.",
    "why.2.title": "Línea premium de productos",
    "why.2.body": "Davines, Olaplex, K18, Kérastase. Invertimos en los productos que realmente cuidan tu cabello.",
    "why.3.title": "Suites privadas y pausadas",
    "why.3.body": "Nuestro espacio está diseñado para una clienta a la vez — música suave, luz cálida, sin interrupciones.",
    "why.4.title": "Concierge bilingüe",
    "why.4.body": "Reservas y consultas EN / ES. Tu estilista te escribe la noche anterior para confirmar.",

    "packages.eyebrow": "Experiencias signature",
    "packages.title": "Paquetes Loft",
    "packages.subtitle": "Rituales armados alrededor de tu cabello, piel y tiempo.",
    "packages.book": "Reservar este ritual",
    "packages.duration": "min",
    "packages.signature.title": "El Reset Signature",
    "packages.signature.desc": "Detox de cuero cabelludo + brushing personalizado + diseño de cejas. Nuestro refresh más reservado.",
    "packages.bridal.title": "Prueba de Novia",
    "packages.bridal.desc": "Prueba de peinado, lifting de pestañas, laminado de cejas y facial luminoso.",
    "packages.deep.title": "Reparación Profunda",
    "packages.deep.desc": "Tratamiento K18 + Olaplex con corte personalizado y acabado en gloss.",

    "gallery.eyebrow": "Galería",
    "gallery.title": "Trabajo real, resultados reales",
    "gallery.subtitle": "Toca cualquier imagen para abrirla.",
    "gallery.viewAll": "Abrir galería completa",
    "gallery.filter.all": "Todo",
    "gallery.filter.color": "Color",
    "gallery.filter.cuts": "Cortes",
    "gallery.filter.lashes": "Pestañas",
    "gallery.filter.facials": "Faciales",
    "gallery.filter.bridal": "Novias",

    "reviews.eyebrow": "Reseñas",
    "reviews.title": "Adoradas en todo Manhattan",
    "reviews.subtitle": "Lo que dicen nuestras clientas habituales.",

    "cta.title": "Tu silla te espera",
    "cta.subtitle": "Reserva en línea en menos de 90 segundos. A menudo hay citas el mismo día.",
    "cta.book": "Reservar",
    "cta.call": "Llamar al loft",

    "footer.tag": "Belleza integral · Kips Bay",
    "footer.about": "Nosotras",
    "footer.services": "Servicios",
    "footer.book": "Reservar",
    "footer.gallery": "Galería",
    "footer.contact": "Contacto",
    "footer.hours.title": "Horario",
    "footer.hours.weekdays": "Mar–Vie · 10am – 8pm",
    "footer.hours.sat": "Sábado · 9am – 8pm",
    "footer.hours.sun": "Domingo · 10am – 6pm",
    "footer.hours.mon": "Lunes · Cerrado",
    "footer.find.title": "Encuéntranos",
    "footer.address": "240 E 28th Street, New York, NY 10016",
    "footer.newsletter.title": "Mantente en el loft",
    "footer.newsletter.body": "Looks de temporada, ofertas exclusivas y reservas abiertas primero.",
    "footer.newsletter.placeholder": "Tu correo",
    "footer.newsletter.cta": "Suscribirme",
    "footer.copyright": "© 2026 The Beauty Loft. Todos los derechos reservados.",
    "footer.demo": "Demo por GreenGrow Digital",

    "services.page.hero.eyebrow": "El Menú",
    "services.page.hero.title": "Servicios y precios",
    "services.page.hero.subtitle": "Precios transparentes. Sin sorpresas. Cada servicio incluye consulta complementaria.",
    "services.cat.hair": "Cabello",
    "services.cat.color": "Color",
    "services.cat.lashes": "Pestañas y cejas",
    "services.cat.skin": "Piel y faciales",
    "services.cat.waxing": "Depilación",
    "services.cat.treatments": "Tratamientos",
    "services.cat.extensions": "Extensiones",
    "services.book": "Reservar",
    "services.from": "desde",
    "services.duration": "min",
    "services.note": "El precio varía según largo, densidad y necesidad de producto. La cotización final se da en tu consulta gratuita.",

    "booking.hero.eyebrow": "Reservas",
    "booking.hero.title": "Reserva tu momento",
    "booking.hero.subtitle": "Elige servicio, estilista y hora. Confirmación inmediata.",
    "booking.step1": "Servicio",
    "booking.step2": "Estilista",
    "booking.step3": "Fecha y hora",
    "booking.step4": "Tus datos",
    "booking.step5": "Confirmar",
    "booking.next": "Continuar",
    "booking.back": "Atrás",
    "booking.confirm": "Confirmar reserva",
    "booking.summary": "Resumen",
    "booking.choose.service": "Elige tu servicio",
    "booking.choose.stylist": "Elige tu estilista",
    "booking.any.stylist": "Primera disponible",
    "booking.any.stylist.desc": "Te asignamos a la próxima estilista senior disponible.",
    "booking.choose.date": "Elige una fecha",
    "booking.choose.time": "Elige una hora",
    "booking.your.info": "Tu información",
    "booking.first": "Nombre",
    "booking.last": "Apellido",
    "booking.phone": "Teléfono",
    "booking.email": "Correo",
    "booking.notes": "Notas para tu estilista (opcional)",
    "booking.notes.ph": "Alergias, preferencias, fotos de inspiración…",
    "booking.deposit": "Un depósito de $20 asegura tu cita. Se acredita 100% al precio final.",
    "booking.terms": "Cancela gratis hasta 24h antes. Después, el depósito no es reembolsable.",
    "booking.pay": "Pagar depósito y confirmar",
    "booking.success.title": "Reserva confirmada.",
    "booking.success.subtitle": "Confirmación enviada a tu correo y celular.",
    "booking.success.cta": "Agregar al calendario",
    "booking.success.home": "Volver al inicio",
    "booking.success.ref": "Referencia",

    "pay.title": "Depósito seguro",
    "pay.subtitle": "Cifrado 256-bit · Procesado por Stripe",
    "pay.card": "Información de tarjeta",
    "pay.cardNumber": "Número de tarjeta",
    "pay.expiry": "MM / AA",
    "pay.cvc": "CVC",
    "pay.cardName": "Nombre en la tarjeta",
    "pay.zip": "Código postal",
    "pay.applePay": "Pagar con Apple Pay",
    "pay.googlePay": "Pagar con Google Pay",
    "pay.or": "o paga con tarjeta",
    "pay.processing": "Procesando tu pago…",
    "pay.success": "Pago recibido",

    "aboutPage.hero.eyebrow": "Nuestra historia",
    "aboutPage.hero.title": "Belleza, sin prisa.",
    "aboutPage.hero.subtitle": "Nacimos con la convicción de que el buen servicio no se apura.",
    "aboutPage.story.title": "Construido sobre el oficio, sostenido en el detalle",
    "aboutPage.story.body1": "The Beauty Loft abrió en 2021 con una idea simple: traer la precisión de un salón del downtown a la calidez de una suite privada. Crecimos por recomendación — clientas que traían a sus madres, hermanas, hijas y amigas.",
    "aboutPage.story.body2": "Hoy nuestro equipo de estilistas senior y esteticistas licenciadas atiende a Kips Bay y más allá, con citas muchas veces reservadas con semanas de anticipación. Pero la filosofía no ha cambiado: una clienta a la vez, los productos correctos, y el tiempo para hacerlo bien.",
    "aboutPage.team.eyebrow": "El Equipo",
    "aboutPage.team.title": "Senior, licenciadas, tuyas",
    "aboutPage.values.eyebrow": "Valores",
    "aboutPage.values.title": "Lo que nos guía",
    "aboutPage.value1.title": "Calidad sobre velocidad",
    "aboutPage.value1.body": "Nunca sobre-reservamos. Tu tiempo es tuyo.",
    "aboutPage.value2.title": "Consultas honestas",
    "aboutPage.value2.body": "Si un servicio no es para ti, te lo decimos.",
    "aboutPage.value3.title": "Productos limpios y profesionales",
    "aboutPage.value3.body": "Marcas confiables. Sin fórmulas misteriosas.",
    "aboutPage.value4.title": "Bilingüe e inclusivo",
    "aboutPage.value4.body": "Servicio EN / ES, todos los tipos de cabello bienvenidos.",

    "contact.hero.eyebrow": "Visítanos",
    "contact.hero.title": "Encuentra el loft",
    "contact.hero.subtitle": "Recibimos sin cita cuando hay sillas disponibles. Para mejor experiencia, reserva.",
    "contact.form.title": "Envíanos un mensaje",
    "contact.form.name": "Tu nombre",
    "contact.form.email": "Correo",
    "contact.form.phone": "Teléfono (opcional)",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar mensaje",
    "contact.form.success": "Gracias — te respondemos en menos de 24 horas.",
    "contact.info.title": "Información directa",
    "contact.info.address": "Dirección",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Correo",
    "contact.info.hours": "Horario",

    "galleryPage.hero.eyebrow": "Galería",
    "galleryPage.hero.title": "Looks del loft",
    "galleryPage.hero.subtitle": "Una selección curada de trabajo reciente — color, cortes, pestañas y novias.",

    "common.minutes": "minutos",
    "common.from": "desde",
    "common.required": "requerido",
    "common.loading": "Cargando…",
    "common.close": "Cerrar",
  }
};

const I18nManager = {
  current: 'en',

  init() {
    const saved = localStorage.getItem('beautyloft.lang');
    this.current = saved || 'en';
    document.documentElement.lang = this.current;
    this.apply();
    this.bindToggle();
  },

  set(lang) {
    if (lang !== 'en' && lang !== 'es') return;
    this.current = lang;
    localStorage.setItem('beautyloft.lang', lang);
    document.documentElement.lang = lang;
    this.apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  },

  toggle() {
    this.set(this.current === 'en' ? 'es' : 'en');
  },

  t(key) {
    const dict = I18N[this.current] || I18N.en;
    return dict[key] ?? I18N.en[key] ?? key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', this.t(key));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', this.t(key));
    });
    // Update all .lang-toggle indicators
    document.querySelectorAll('.lang-toggle').forEach(el => {
      const en = el.querySelector('[data-lang="en"]');
      const es = el.querySelector('[data-lang="es"]');
      if (en) en.classList.toggle('active-lang', this.current === 'en');
      if (es) es.classList.toggle('active-lang', this.current === 'es');
    });
  },

  bindToggle() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-lang-toggle]');
      if (btn) {
        e.preventDefault();
        this.toggle();
      }
      const direct = e.target.closest('[data-lang-set]');
      if (direct) {
        e.preventDefault();
        this.set(direct.getAttribute('data-lang-set'));
      }
    });
  }
};

window.I18N = I18N;
window.I18nManager = I18nManager;
