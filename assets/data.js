/* ============================================================
   THE BEAUTY LOFT — Data
   Services, packages, stylists, time slots.
============================================================ */

const SERVICES = [
  // ============ HAIR ============
  { id:'cut-women',    cat:'hair',       name:{en:"Women's Haircut", es:"Corte mujer"},                price:85,  duration:60,  desc:{en:"Consultation, custom cut, blow-dry finish.", es:"Consulta, corte personalizado, brushing final."} },
  { id:'cut-men',      cat:'hair',       name:{en:"Men's Haircut", es:"Corte hombre"},                price:55,  duration:45,  desc:{en:"Precision cut with hot towel finish.", es:"Corte de precisión con toalla caliente."} },
  { id:'cut-kids',     cat:'hair',       name:{en:"Kids Cut (under 12)", es:"Corte niñ@s (–12)"},     price:35,  duration:30,  desc:{en:"Gentle, kid-friendly cut.", es:"Corte amable, ambiente para niños."} },
  { id:'bang-trim',    cat:'hair',       name:{en:"Bang / Fringe Trim", es:"Recorte de flequillo"},  price:25,  duration:15,  desc:{en:"Free between full cuts within 4 weeks.", es:"Gratis entre cortes completos dentro de 4 semanas."} },

  // ============ COLOR ============
  { id:'gloss',        cat:'color',      name:{en:"Gloss / Toner", es:"Gloss / Tono"},                price:75,  duration:45,  desc:{en:"Refresh dimension and shine.", es:"Refresca dimensión y brillo."} },
  { id:'root-touch',   cat:'color',      name:{en:"Root Touch-up", es:"Retoque de raíz"},             price:120, duration:90,  desc:{en:"Single-process color at the roots.", es:"Color de raíz, un solo proceso."} },
  { id:'allover',      cat:'color',      name:{en:"All-over Color", es:"Color completo"},             price:160, duration:120, desc:{en:"Single-process from roots to ends.", es:"Color completo de raíz a puntas."} },
  { id:'partial',      cat:'color',      name:{en:"Partial Highlights", es:"Mechas parciales"},       price:200, duration:150, desc:{en:"Top and crown highlights, framing.", es:"Mechas en la parte superior y enmarcado."} },
  { id:'full',         cat:'color',      name:{en:"Full Highlights", es:"Mechas completas"},          price:280, duration:180, desc:{en:"All-over dimension and lift.", es:"Dimensión y aclarado completo."} },
  { id:'balayage',     cat:'color',      name:{en:"Balayage", es:"Balayage"},                         price:320, duration:210, desc:{en:"Hand-painted, natural lift.", es:"Pintado a mano, aclarado natural."} },
  { id:'lighten',      cat:'color',      name:{en:"Full Lightening", es:"Aclarado completo"},          price:380, duration:240, desc:{en:"Major lift with bond protection.", es:"Aclarado profundo con protección de enlaces."} },
  { id:'color-correct',cat:'color',      name:{en:"Color Correction", es:"Corrección de color"},      price:450, duration:300, desc:{en:"Quote based on consultation.", es:"Cotización tras consulta."} },

  // ============ LASHES & BROWS ============
  { id:'lash-lift',    cat:'lashes',     name:{en:"Lash Lift + Tint", es:"Lifting + tinte de pestañas"}, price:110, duration:60, desc:{en:"6–8 weeks of natural curl.", es:"6–8 semanas de rizo natural."} },
  { id:'classic-set',  cat:'lashes',     name:{en:"Classic Lash Set", es:"Set de pestañas clásicas"},  price:180, duration:120, desc:{en:"One extension per natural lash.", es:"Una extensión por pestaña natural."} },
  { id:'volume-set',   cat:'lashes',     name:{en:"Volume Lash Set", es:"Set de pestañas volumen"},    price:230, duration:150, desc:{en:"Hand-fanned for soft drama.", es:"Abanicos hechos a mano para drama suave."} },
  { id:'lash-fill',    cat:'lashes',     name:{en:"Lash Fill", es:"Mantenimiento pestañas"},          price:90,  duration:75,  desc:{en:"2–3 week refill.", es:"Recarga de 2–3 semanas."} },
  { id:'brow-shape',   cat:'lashes',     name:{en:"Brow Shape & Wax", es:"Diseño y depilación cejas"},price:35,  duration:30,  desc:{en:"Custom shape, threading or wax.", es:"Diseño personalizado, hilo o cera."} },
  { id:'brow-lam',     cat:'lashes',     name:{en:"Brow Lamination", es:"Laminado de cejas"},         price:75,  duration:45,  desc:{en:"Set the look for 6+ weeks.", es:"Fija el look por más de 6 semanas."} },
  { id:'brow-tint',    cat:'lashes',     name:{en:"Brow Tint", es:"Tinte de cejas"},                  price:30,  duration:20,  desc:{en:"Add depth and definition.", es:"Profundidad y definición."} },

  // ============ SKIN & FACIALS ============
  { id:'signature-facial', cat:'skin',   name:{en:"Signature Facial", es:"Facial signature"},          price:140, duration:60, desc:{en:"Cleanse, exfoliate, mask, massage.", es:"Limpieza, exfoliación, mascarilla, masaje."} },
  { id:'glow-facial',  cat:'skin',       name:{en:"Glow Facial", es:"Facial luminoso"},              price:180, duration:75,  desc:{en:"Brightening enzymes + LED.", es:"Enzimas iluminadoras + LED."} },
  { id:'deep-clean',   cat:'skin',       name:{en:"Deep Cleanse Facial", es:"Facial limpieza profunda"}, price:160, duration:75, desc:{en:"For congested, breakout-prone skin.", es:"Para piel con tendencia a brotes."} },
  { id:'hydrafacial',  cat:'skin',       name:{en:"HydraFacial", es:"HydraFacial"},                  price:220, duration:60,  desc:{en:"Cleanse, extract, hydrate.", es:"Limpia, extrae, hidrata."} },

  // ============ WAXING ============
  { id:'wax-brow',     cat:'waxing',     name:{en:"Brow Wax", es:"Depilación cejas"},                 price:25,  duration:15, desc:{en:"Clean shape and definition.", es:"Forma limpia y definición."} },
  { id:'wax-lip',      cat:'waxing',     name:{en:"Lip Wax", es:"Depilación bigote"},                price:15,  duration:10, desc:{en:"Quick and gentle.", es:"Rápido y suave."} },
  { id:'wax-face',     cat:'waxing',     name:{en:"Full Face Wax", es:"Depilación rostro completo"},  price:55,  duration:30, desc:{en:"All facial areas.", es:"Todas las áreas faciales."} },
  { id:'wax-underarm', cat:'waxing',     name:{en:"Underarm Wax", es:"Depilación axilas"},            price:35,  duration:20, desc:{en:"Smooth and clean.", es:"Suave y limpio."} },
  { id:'wax-bikini',   cat:'waxing',     name:{en:"Bikini Wax", es:"Bikini"},                         price:55,  duration:30, desc:{en:"Standard bikini line.", es:"Línea de bikini estándar."} },
  { id:'wax-brazilian',cat:'waxing',     name:{en:"Brazilian Wax", es:"Brasileña"},                   price:75,  duration:40, desc:{en:"Full Brazilian.", es:"Brasileña completa."} },
  { id:'wax-leg',      cat:'waxing',     name:{en:"Full Leg Wax", es:"Pierna completa"},              price:90,  duration:45, desc:{en:"Smooth from thigh to ankle.", es:"Suave de muslo a tobillo."} },

  // ============ TREATMENTS ============
  { id:'scalp-detox',  cat:'treatments', name:{en:"Scalp Detox", es:"Detox capilar"},                 price:60,  duration:30, desc:{en:"Clarifying scrub + steam treatment.", es:"Exfoliante clarificador + vapor."} },
  { id:'k18',          cat:'treatments', name:{en:"K18 Bond Repair", es:"Reparación K18"},            price:75,  duration:30, desc:{en:"Add to any service for instant repair.", es:"Agrega a cualquier servicio para reparación inmediata."} },
  { id:'olaplex',      cat:'treatments', name:{en:"Olaplex Stand-alone", es:"Olaplex independiente"}, price:60,  duration:45, desc:{en:"Steps 1+2 + take-home #3.", es:"Pasos 1+2 + #3 para llevar."} },
  { id:'keratin',      cat:'treatments', name:{en:"Keratin Smoothing", es:"Alisado de keratina"},     price:320, duration:180, desc:{en:"3+ months of frizz-free hair.", es:"Más de 3 meses sin frizz."} },
  { id:'glaze',        cat:'treatments', name:{en:"Shine Glaze", es:"Glaze de brillo"},               price:65,  duration:30, desc:{en:"Mirror shine, no commitment.", es:"Brillo espejo, sin compromiso."} },

  // ============ EXTENSIONS ============
  { id:'ext-consult',  cat:'extensions', name:{en:"Extensions Consultation", es:"Consulta extensiones"}, price:0,   duration:30, desc:{en:"Free, complimentary consult.", es:"Gratis, sin compromiso."} },
  { id:'ext-tape',     cat:'extensions', name:{en:"Tape-in Extensions", es:"Extensiones tape-in"},   price:600, duration:180, desc:{en:"Hair + application included.", es:"Cabello + aplicación incluido."} },
  { id:'ext-keratin',  cat:'extensions', name:{en:"Keratin K-tip Bonds", es:"Extensiones K-tip"},    price:1200,duration:300, desc:{en:"Premium individual bonds.", es:"Adheridos individuales premium."} },
  { id:'ext-move-up',  cat:'extensions', name:{en:"Extensions Move-up", es:"Reubicación de extensiones"}, price:280, duration:120, desc:{en:"Maintenance every 6–8 weeks.", es:"Mantenimiento cada 6–8 semanas."} },
];

const PACKAGES = [
  {
    id:'signature-reset',
    titleKey:'packages.signature.title',
    descKey:'packages.signature.desc',
    price:165,
    duration:90,
    image:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop',
    includes:[
      {en:'Scalp detox & steam', es:'Detox capilar y vapor'},
      {en:'Custom blow-out', es:'Brushing personalizado'},
      {en:'Brow shape', es:'Diseño de cejas'},
    ]
  },
  {
    id:'bridal-trial',
    titleKey:'packages.bridal.title',
    descKey:'packages.bridal.desc',
    price:380,
    duration:210,
    image:'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&auto=format&fit=crop',
    includes:[
      {en:'Bridal hair trial', es:'Prueba de peinado nupcial'},
      {en:'Lash lift + tint', es:'Lifting y tinte de pestañas'},
      {en:'Brow lamination', es:'Laminado de cejas'},
      {en:'Glow facial', es:'Facial luminoso'},
    ]
  },
  {
    id:'deep-repair',
    titleKey:'packages.deep.title',
    descKey:'packages.deep.desc',
    price:240,
    duration:150,
    image:'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&auto=format&fit=crop',
    includes:[
      {en:'K18 bond repair', es:'Reparación K18'},
      {en:'Olaplex No.1+2', es:'Olaplex No.1+2'},
      {en:'Custom cut', es:'Corte personalizado'},
      {en:'Gloss finish', es:'Acabado en gloss'},
    ]
  },
];

const STYLISTS = [
  {
    id:'sofia',
    name:'Sofía Reyes',
    role:{en:'Senior Color Specialist', es:'Especialista Senior en Color'},
    years:12,
    bio:{
      en:"Trained at Bumble & bumble. Sofía specializes in dimensional balayage and color correction for textured hair.",
      es:"Formada en Bumble & bumble. Sofía se especializa en balayage dimensional y corrección de color para cabello con textura."
    },
    specialties:['balayage','color-correct','full','partial'],
    image:'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop'
  },
  {
    id:'mia',
    name:'Mia Chen',
    role:{en:'Senior Cuts & Styling', es:'Senior en Cortes y Peinado'},
    years:10,
    bio:{
      en:"NYC veteran. Mia is known for soft, lived-in shapes and editorial blow-outs.",
      es:"Veterana de NYC. Mia es conocida por cortes suaves y brushing editorial."
    },
    specialties:['cut-women','cut-men','keratin','glaze'],
    image:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop'
  },
  {
    id:'isabela',
    name:'Isabela Marín',
    role:{en:'Lash & Brow Artist', es:'Artista de Pestañas y Cejas'},
    years:8,
    bio:{
      en:"Certified Lash Pro educator. Isabela's volume sets are obsession-worthy.",
      es:"Educadora certificada Lash Pro. Sus sets de volumen son irresistibles."
    },
    specialties:['lash-lift','classic-set','volume-set','brow-shape','brow-lam','brow-tint'],
    image:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop'
  },
  {
    id:'celine',
    name:'Céline Dubois',
    role:{en:'Esthetician & Skin Therapist', es:'Esteticista y Terapeuta de Piel'},
    years:9,
    bio:{
      en:"French-trained esthetician focused on luminosity and skin barrier health.",
      es:"Esteticista francesa enfocada en luminosidad y salud de la barrera cutánea."
    },
    specialties:['signature-facial','glow-facial','deep-clean','hydrafacial','wax-face'],
    image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop'
  },
];

const TIME_SLOTS = [
  '10:00','10:30','11:00','11:30','12:00','12:30',
  '13:00','13:30','14:00','14:30','15:00','15:30',
  '16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'
];

// Hardcoded "unavailable" pattern so the calendar feels real
const BUSY_PATTERN = {
  // weekday (0=Sun) -> array of busy times (always blocked these times)
  0: ['10:00','10:30','11:00','18:00','18:30','19:00','19:30'],
  1: 'closed', // Monday
  2: ['12:00','13:00','15:30','17:30'],
  3: ['10:30','14:00','16:30','19:00'],
  4: ['11:30','12:30','15:00','18:30'],
  5: ['10:00','13:30','16:00','17:30','19:30'],
  6: ['10:30','12:00','14:30','17:00','19:30']
};

// Reviews / testimonials
const REVIEWS = [
  { name:'Emma R.', rating:5, when:'2 weeks ago', service:{en:'Balayage + cut', es:'Balayage + corte'},
    text:{en:"Honestly the best color I've had in NYC. Sofía nailed it on the first try and the consultation was so detailed.", es:"Honestamente el mejor color que he tenido en NYC. Sofía lo clavó en el primer intento y la consulta fue super detallada."} },
  { name:'Sophia A.', rating:5, when:'1 month ago', service:{en:'Lash lift + tint', es:'Lifting de pestañas'},
    text:{en:"Walked out feeling like myself but elevated. The space is so calm — I almost fell asleep.", es:"Salí sintiéndome yo, pero elevada. El lugar es tan tranquilo que casi me duermo."} },
  { name:'Jenna T.', rating:5, when:'3 weeks ago', service:{en:'Bridal trial', es:'Prueba de novia'},
    text:{en:"Found my wedding day team. They listened, they took notes, and the trial was flawless.", es:"Encontré a mi equipo del día de la boda. Escucharon, tomaron notas y la prueba fue impecable."} },
  { name:'Maria L.', rating:5, when:'1 week ago', service:{en:'HydraFacial', es:'HydraFacial'},
    text:{en:"My skin was glowing for weeks. Céline is a gift. Already booked my next two visits.", es:"Mi piel brilló por semanas. Céline es un regalo. Ya reservé mis próximas dos visitas."} },
  { name:'Alyssa P.', rating:5, when:'5 days ago', service:{en:'Keratin smoothing', es:'Keratina'},
    text:{en:"Frizz: gone. Curl pattern: still there. Mia explained every step — not pushy at all.", es:"Frizz: cero. Mi rizo: intacto. Mia explicó cada paso, sin presión."} },
];

// Gallery items
const GALLERY = [
  { cat:'color',   img:'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&auto=format&fit=crop' },
  { cat:'cuts',    img:'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop' },
  { cat:'lashes',  img:'https://images.unsplash.com/photo-1583241800698-9c2e1f72a37b?w=900&auto=format&fit=crop' },
  { cat:'color',   img:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop' },
  { cat:'bridal',  img:'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&auto=format&fit=crop' },
  { cat:'facials', img:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&auto=format&fit=crop' },
  { cat:'cuts',    img:'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=900&auto=format&fit=crop' },
  { cat:'color',   img:'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=900&auto=format&fit=crop' },
  { cat:'lashes',  img:'https://images.unsplash.com/photo-1571908598047-29def2bbb7e0?w=900&auto=format&fit=crop' },
  { cat:'bridal',  img:'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&auto=format&fit=crop' },
  { cat:'facials', img:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&auto=format&fit=crop' },
  { cat:'cuts',    img:'https://images.unsplash.com/photo-1599387737877-9f6e0aac1f29?w=900&auto=format&fit=crop' },
  { cat:'color',   img:'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&auto=format&fit=crop' },
  { cat:'facials', img:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&auto=format&fit=crop' },
  { cat:'lashes',  img:'https://images.unsplash.com/photo-1571781565036-d3f759be73e4?w=900&auto=format&fit=crop' },
];

window.SERVICES = SERVICES;
window.PACKAGES = PACKAGES;
window.STYLISTS = STYLISTS;
window.TIME_SLOTS = TIME_SLOTS;
window.BUSY_PATTERN = BUSY_PATTERN;
window.REVIEWS = REVIEWS;
window.GALLERY = GALLERY;
