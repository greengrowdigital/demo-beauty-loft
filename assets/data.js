/* ============================================================
   THE BEAUTY LOFT — Real menu
   Source: client-provided service list (2026).
============================================================ */

const SERVICES = [
  // ============ BROWS (cat: lashes & brows) ============
  { id:'brow-shape', cat:'lashes', name:{en:"Brow Shaping", es:"Diseño de cejas"}, price:8, duration:15,
    desc:{en:"Customized brow shaping using threading or waxing for clean, defined brows.", es:"Diseño personalizado con hilo o cera para cejas limpias y definidas."} },
  { id:'brow-tint', cat:'lashes', name:{en:"Brow Tinting", es:"Tinte de cejas"}, price:20, duration:20,
    desc:{en:"Semi-permanent color for fuller, more polished brows.", es:"Color semi-permanente para cejas más completas y pulidas."} },
  { id:'brow-lam', cat:'lashes', name:{en:"Brow Lamination", es:"Laminado de cejas"}, price:70, duration:45,
    desc:{en:"Smoothing treatment that lifts and sets brow hairs for a fuller, fluffy look.", es:"Tratamiento que levanta y fija las cejas para un look completo y voluminoso."} },

  // ============ LASHES ============
  { id:'lash-lift', cat:'lashes', name:{en:"Lash Lift", es:"Lifting de pestañas"}, price:100, duration:60,
    desc:{en:"Lifts and curls your natural lashes for a longer, fuller look — no extensions.", es:"Levanta y riza tus pestañas naturales para un look más largo, sin extensiones."} },
  { id:'lash-flare', cat:'lashes', name:{en:"Flare Cluster Lashes", es:"Pestañas en clúster"}, price:55, duration:45,
    desc:{en:"Temporary lash clusters for added volume — perfect for events.", es:"Clusters temporales para más volumen — ideal para eventos."} },
  { id:'lash-mink', cat:'lashes', name:{en:"Mink Individual Lashes", es:"Pestañas individuales de mink"}, price:140, duration:90,
    desc:{en:"Lightweight individual lashes for natural, longer-lasting enhancement.", es:"Pestañas individuales ligeras para un realce natural y duradero."} },

  // ============ FACE WAXING ============
  { id:'wax-full-face', cat:'waxing', name:{en:"Full Face Wax", es:"Cera rostro completo"}, price:40, duration:15,
    desc:{en:"Removes facial hair using threading or waxing.", es:"Remueve el vello facial con hilo o cera."} },
  { id:'wax-upper-lip', cat:'waxing', name:{en:"Upper Lip", es:"Bigote"}, price:6, duration:5,
    desc:{en:"Quick removal of upper lip hair.", es:"Depilación rápida del bigote."} },
  { id:'wax-lower-lip', cat:'waxing', name:{en:"Lower Lip", es:"Labio inferior"}, price:6, duration:5,
    desc:{en:"Targets fine hair on the lower lip.", es:"Remueve el vello fino del labio inferior."} },
  { id:'wax-forehead', cat:'waxing', name:{en:"Forehead", es:"Frente"}, price:10, duration:5,
    desc:{en:"Cleans up the forehead area for a sharper hairline.", es:"Limpia la línea de la frente."} },
  { id:'wax-sideburns', cat:'waxing', name:{en:"Sideburns", es:"Patillas"}, price:12, duration:5,
    desc:{en:"Shapes and cleans sideburns.", es:"Diseña y limpia las patillas."} },
  { id:'wax-chin', cat:'waxing', name:{en:"Chin", es:"Mentón"}, price:8, duration:5,
    desc:{en:"Removes unwanted chin hair.", es:"Remueve el vello del mentón."} },
  { id:'wax-neck', cat:'waxing', name:{en:"Neck", es:"Cuello"}, price:12, duration:5,
    desc:{en:"Cleans up hair along the neck.", es:"Limpia el vello del cuello."} },
  { id:'wax-nose', cat:'waxing', name:{en:"Nose Wax", es:"Cera nasal"}, price:12, duration:5,
    desc:{en:"Quick and effective nose hair removal.", es:"Remoción rápida y efectiva del vello nasal."} },

  // ============ FACIALS (cat: skin) ============
  { id:'fac-express', cat:'skin', name:{en:"Express Cleansing Facial", es:"Facial limpieza express"}, price:35, duration:30,
    desc:{en:"Quick refresh: cleanse, exfoliate, mask.", es:"Refresco rápido: limpieza, exfoliación y mascarilla."} },
  { id:'fac-deep', cat:'skin', name:{en:"Deep Cleansing Facial", es:"Facial limpieza profunda"}, price:75, duration:60,
    desc:{en:"Customized facial: deep cleansing, exfoliation and treatment mask.", es:"Facial personalizado: limpieza profunda, exfoliación y mascarilla."} },
  { id:'fac-derma', cat:'skin', name:{en:"Dermaplaning Add-On", es:"Dermaplaning (Add-on)"}, price:50, duration:15,
    desc:{en:"Gently exfoliates and removes peach fuzz.", es:"Exfolia suavemente y remueve el vello fino."} },

  // ============ BODY WAXING ============
  { id:'wax-full-body', cat:'waxing', name:{en:"Full Body Wax", es:"Cera cuerpo completo"}, price:325, duration:90,
    desc:{en:"Removes unwanted hair from neck to toe.", es:"Remueve el vello del cuello a los pies."} },
  { id:'wax-underarm', cat:'waxing', name:{en:"Underarm", es:"Axilas"}, price:20, duration:10,
    desc:{en:"Removes hair from the entire underarm area.", es:"Depilación completa de las axilas."} },
  { id:'wax-back', cat:'waxing', name:{en:"Back", es:"Espalda"}, price:50, duration:10,
    desc:{en:"Removes hair from the full back.", es:"Depilación de la espalda completa."} },
  { id:'wax-chest', cat:'waxing', name:{en:"Chest", es:"Pecho"}, price:50, duration:20,
    desc:{en:"Removes hair from the chest area.", es:"Depilación del pecho."} },

  // ============ BIKINI & BRAZILIAN ============
  { id:'wax-brazilian-full', cat:'waxing', name:{en:"Brazilian Front & Back", es:"Brasileña frente y atrás"}, price:65, duration:20,
    desc:{en:"Complete hair removal from front and back.", es:"Depilación completa de frente y atrás."} },
  { id:'wax-brazilian', cat:'waxing', name:{en:"Brazilian Front", es:"Brasileña frente"}, price:55, duration:20,
    desc:{en:"Removes all hair from the front bikini area.", es:"Depilación completa de la zona frontal del bikini."} },
  { id:'wax-bikini', cat:'waxing', name:{en:"Bikini Line", es:"Línea del bikini"}, price:35, duration:15,
    desc:{en:"Cleans up the bikini line for a neat, natural shape.", es:"Limpia la línea del bikini para un acabado natural."} },

  // ============ HAIR COLOR ============
  { id:'col-full-light', cat:'color', name:{en:"Full Lightening", es:"Aclarado completo"}, price:250, duration:240,
    desc:{en:"Customized blonding with highlights, babylights and balayage.", es:"Servicio personalizado con mechas, babylights y balayage."} },
  { id:'col-face-frame', cat:'color', name:{en:"Face Framing Foils", es:"Foils enmarcando rostro"}, price:190, duration:90,
    desc:{en:"Brightens face-framing area to refresh balayage.", es:"Aclara la zona del rostro para refrescar el balayage."} },
  { id:'col-no-bleach', cat:'color', name:{en:"No-Bleach Highlights", es:"Mechas sin decoloración"}, price:225, duration:120,
    desc:{en:"Gentle high-lift color for soft, natural dimension on virgin hair.", es:"Aclarado suave en cabello virgen, sin bleach."} },
  { id:'col-root', cat:'color', name:{en:"Single Process — Roots", es:"Proceso único — raíz"}, price:75, duration:90,
    desc:{en:"Seamless gray coverage or color refresh on the new growth.", es:"Retoque de raíz para cubrir canas o refrescar color."} },
  { id:'col-full', cat:'color', name:{en:"Single Process — Roots to Ends", es:"Proceso único — completo"}, price:120, duration:120,
    desc:{en:"Full color from roots to ends for a rich, even tone.", es:"Color completo de raíz a puntas para un tono uniforme."} },
  { id:'col-glaze', cat:'color', name:{en:"Glaze", es:"Glaze de brillo"}, price:65, duration:60,
    desc:{en:"Enhances shine, refreshes color, neutralizes tones.", es:"Realza el brillo, refresca el color y neutraliza tonos."} },
  { id:'col-black-rem', cat:'color', name:{en:"Black Removal", es:"Decapado de negro"}, price:400, duration:240,
    desc:{en:"Corrective service to remove dark dye buildup.", es:"Servicio correctivo para remover acumulación de tinte oscuro."} },

  // ============ HAIRCUT ============
  { id:'haircut', cat:'hair', name:{en:"Haircut", es:"Corte de cabello"}, price:85, duration:75,
    desc:{en:"Customized cut, shampoo and blowout finish.", es:"Corte personalizado con shampoo y brushing."} },

  // ============ HAIR STYLING ============
  { id:'sty-blowout', cat:'hair', name:{en:"Blowout", es:"Brushing"}, price:50, duration:30,
    desc:{en:"Smooth blowout finish.", es:"Acabado suave de brushing."} },
  { id:'sty-blowout-style', cat:'hair', name:{en:"Blowout Style", es:"Brushing con peinado"}, price:75, duration:45,
    desc:{en:"Wash, blow-dry and styling for a polished finish.", es:"Lavado, brushing y peinado para acabado pulido."} },
  { id:'sty-formal', cat:'hair', name:{en:"Formal Hair Styling", es:"Peinado formal"}, price:125, duration:50,
    desc:{en:"Updos, curls or half-up styles for events.", es:"Recogidos, rizos o semi-recogidos para eventos."} },
  { id:'sty-special', cat:'hair', name:{en:"Special Occasion Styling", es:"Peinado ocasión especial"}, price:150, duration:75,
    desc:{en:"Glam styling: waves, updos or looks with extensions.", es:"Peinado glam con ondas, recogidos o looks con extensiones."} },
  { id:'add-bang', cat:'hair', name:{en:"Bang Trim", es:"Recorte de flequillo"}, price:15, duration:10,
    desc:{en:"Quick trim to maintain your fringe.", es:"Recorte rápido del flequillo."} },

  // ============ HAIR + SCALP TREATMENTS ============
  { id:'tr-scalp-spa', cat:'treatments', name:{en:"Hair + Scalp Spa", es:"Spa capilar + cuero cabelludo"}, price:135, duration:150,
    desc:{en:"Luxury combo: scalp therapy + deep hair care for balance and growth.", es:"Combo de lujo: terapia del cuero cabelludo + cuidado profundo del cabello."} },
  { id:'tr-scalp-detox', cat:'treatments', name:{en:"Scalp Detox", es:"Detox del cuero cabelludo"}, price:99, duration:90,
    desc:{en:"Removes buildup, rebalances the scalp, promotes healthier growth.", es:"Limpia, rebalancea el cuero cabelludo y promueve crecimiento."} },
  { id:'tr-keratin', cat:'treatments', name:{en:"Keratin Treatment", es:"Tratamiento de keratina"}, price:175, duration:120,
    desc:{en:"Smooths, strengthens and reduces frizz — keeps volume.", es:"Suaviza, fortalece y reduce frizz manteniendo el volumen."} },
  { id:'tr-hot-oil', cat:'treatments', name:{en:"Hot Oil Massage", es:"Masaje con aceite caliente"}, price:75, duration:20,
    desc:{en:"Relaxing scalp massage with nourishing oils.", es:"Masaje relajante con aceites nutritivos."} },

  // ============ ADD-ONS (under treatments) ============
  { id:'add-scrub', cat:'treatments', name:{en:"Scalp Scrub", es:"Exfoliante cuero cabelludo"}, price:15, duration:10,
    desc:{en:"Exfoliates and refreshes the scalp.", es:"Exfolia y refresca el cuero cabelludo."} },
  { id:'add-shine', cat:'treatments', name:{en:"Shine Treatment", es:"Tratamiento de brillo"}, price:25, duration:30,
    desc:{en:"Adds gloss and smoothness.", es:"Aporta brillo y suavidad."} },
  { id:'add-hydrate', cat:'treatments', name:{en:"Hydrating Treatment", es:"Tratamiento hidratante"}, price:25, duration:30,
    desc:{en:"Deeply nourishes dry or damaged hair.", es:"Nutre cabello seco o dañado."} },
  { id:'add-k18', cat:'treatments', name:{en:"K18 Treatment", es:"Tratamiento K18"}, price:60, duration:30,
    desc:{en:"Repairs and strengthens damaged hair at a molecular level.", es:"Repara y fortalece el cabello a nivel molecular."} },
  { id:'add-olaplex', cat:'treatments', name:{en:"Olaplex Treatment", es:"Tratamiento Olaplex"}, price:55, duration:45,
    desc:{en:"Rebuilds bonds inside the hair.", es:"Reconstruye los enlaces internos del cabello."} },

  // ============ EXTENSIONS ============
  { id:'ext-tape', cat:'extensions', name:{en:"Tape-In Extensions", es:"Extensiones tape-in"}, price:200, duration:60,
    desc:{en:"Install of tape-in extensions for added length and volume.", es:"Instalación de tape-in para más largo y volumen."} },
  { id:'ext-itip', cat:'extensions', name:{en:"I-Tip Extensions", es:"Extensiones I-Tip"}, price:300, duration:120,
    desc:{en:"Individual bead method for flexible, natural movement.", es:"Cuentas individuales para movimiento natural."} },
  { id:'ext-keratin-tip', cat:'extensions', name:{en:"Keratin Tip Extensions", es:"Extensiones keratin tip"}, price:400, duration:120,
    desc:{en:"Long-lasting bonded extensions for a seamless finish.", es:"Extensiones adheridas duraderas para acabado natural."} },
  { id:'ext-removal', cat:'extensions', name:{en:"Extension Removal", es:"Remoción de extensiones"}, price:50, duration:45,
    desc:{en:"Safe removal of any extension method.", es:"Remoción segura de cualquier tipo de extensión."} },
];

// Packages removed — not in client's service list.
const PACKAGES = [];

const STYLISTS = [
  {
    id:'sofia',
    name:'Sofía Reyes',
    role:{en:'Senior Color Specialist', es:'Especialista Senior en Color'},
    years:12,
    bio:{
      en:"Trained at Bumble & bumble. Sofía specializes in dimensional balayage, foil highlights and color correction.",
      es:"Formada en Bumble & bumble. Sofía se especializa en balayage dimensional, foils y corrección de color."
    },
    specialties:['col-full-light','col-face-frame','col-no-bleach','col-root','col-full','col-glaze','col-black-rem'],
    image:'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&auto=format&fit=crop'
  },
  {
    id:'mia',
    name:'Mia Chen',
    role:{en:'Senior Cuts & Styling', es:'Senior en Cortes y Peinado'},
    years:10,
    bio:{
      en:"NYC veteran. Mia is known for soft, lived-in shapes, editorial blow-outs and keratin work.",
      es:"Veterana de NYC. Conocida por cortes suaves, brushing editorial y tratamientos de keratina."
    },
    specialties:['haircut','sty-blowout','sty-blowout-style','sty-formal','sty-special','tr-keratin','add-bang'],
    image:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop'
  },
  {
    id:'isabela',
    name:'Isabela Marín',
    role:{en:'Lash & Brow Artist', es:'Artista de Pestañas y Cejas'},
    years:8,
    bio:{
      en:"Certified Lash Pro educator. Isabela's brow laminations and mink sets are the most-requested in the loft.",
      es:"Educadora certificada Lash Pro. Sus laminados y sets de mink son los más pedidos en el loft."
    },
    specialties:['brow-shape','brow-tint','brow-lam','lash-lift','lash-flare','lash-mink'],
    image:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop'
  },
  {
    id:'celine',
    name:'Céline Dubois',
    role:{en:'Esthetician & Skin Therapist', es:'Esteticista y Terapeuta de Piel'},
    years:9,
    bio:{
      en:"French-trained esthetician focused on luminosity, skin-barrier health and body waxing.",
      es:"Esteticista francesa enfocada en luminosidad, salud de la barrera y depilación corporal."
    },
    specialties:['fac-express','fac-deep','fac-derma','wax-full-face','wax-back','wax-bikini','wax-brazilian','wax-brazilian-full'],
    image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop'
  },
];

const TIME_SLOTS = [
  '10:00','10:30','11:00','11:30','12:00','12:30',
  '13:00','13:30','14:00','14:30','15:00','15:30',
  '16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'
];

const BUSY_PATTERN = {
  0: ['10:00','10:30','11:00','18:00','18:30','19:00','19:30'],
  1: 'closed',
  2: ['12:00','13:00','15:30','17:30'],
  3: ['10:30','14:00','16:30','19:00'],
  4: ['11:30','12:30','15:00','18:30'],
  5: ['10:00','13:30','16:00','17:30','19:30'],
  6: ['10:30','12:00','14:30','17:00','19:30']
};

const REVIEWS = [
  { name:'Emma R.', rating:5, when:'2 weeks ago', service:{en:'Full Lightening', es:'Aclarado completo'},
    text:{en:"Honestly the best color I've had in NYC. Sofía nailed it on the first try and the consultation was so detailed.", es:"Honestamente el mejor color que he tenido en NYC. Sofía lo clavó en el primer intento y la consulta fue super detallada."} },
  { name:'Sophia A.', rating:5, when:'1 month ago', service:{en:'Lash Lift + Brow Lamination', es:'Lifting + laminado'},
    text:{en:"Walked out feeling like myself but elevated. The space is so calm — I almost fell asleep.", es:"Salí sintiéndome yo, pero elevada. El lugar es tan tranquilo que casi me duermo."} },
  { name:'Jenna T.', rating:5, when:'3 weeks ago', service:{en:'Bridal Trial', es:'Prueba de novia'},
    text:{en:"Found my wedding day team. They listened, they took notes, and the trial was flawless.", es:"Encontré a mi equipo del día de la boda. Escucharon, tomaron notas y la prueba fue impecable."} },
  { name:'Maria L.', rating:5, when:'1 week ago', service:{en:'Deep Cleansing Facial', es:'Facial profundo'},
    text:{en:"My skin was glowing for weeks. Céline is a gift. Already booked my next two visits.", es:"Mi piel brilló por semanas. Céline es un regalo. Ya reservé mis próximas dos visitas."} },
  { name:'Alyssa P.', rating:5, when:'5 days ago', service:{en:'Keratin Treatment', es:'Keratina'},
    text:{en:"Frizz: gone. Curl pattern: still there. Mia explained every step — not pushy at all.", es:"Frizz: cero. Mi rizo: intacto. Mia explicó cada paso, sin presión."} },
];

const GALLERY = [
  { cat:'color',   img:'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&auto=format&fit=crop' },
  { cat:'cuts',    img:'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop' },
  { cat:'lashes',  img:'https://images.unsplash.com/photo-1571908598047-29def2bbb7e0?w=900&auto=format&fit=crop' },
  { cat:'color',   img:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop' },
  { cat:'bridal',  img:'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&auto=format&fit=crop' },
  { cat:'facials', img:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&auto=format&fit=crop' },
  { cat:'cuts',    img:'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=900&auto=format&fit=crop' },
  { cat:'color',   img:'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=900&auto=format&fit=crop' },
  { cat:'lashes',  img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&auto=format&fit=crop' },
  { cat:'bridal',  img:'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&auto=format&fit=crop' },
  { cat:'facials', img:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&auto=format&fit=crop' },
  { cat:'cuts',    img:'https://images.unsplash.com/photo-1599387737877-9f6e0aac1f29?w=900&auto=format&fit=crop' },
  { cat:'color',   img:'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&auto=format&fit=crop' },
  { cat:'facials', img:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&auto=format&fit=crop' },
  { cat:'lashes',  img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop' },
];

window.SERVICES = SERVICES;
window.PACKAGES = PACKAGES;
window.STYLISTS = STYLISTS;
window.TIME_SLOTS = TIME_SLOTS;
window.BUSY_PATTERN = BUSY_PATTERN;
window.REVIEWS = REVIEWS;
window.GALLERY = GALLERY;
