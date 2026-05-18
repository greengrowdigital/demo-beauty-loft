/* ============================================================
   THE BEAUTY LOFT — Live Square catalog
   Synced with client's Square Appointments (2026).
============================================================ */

const SERVICES = [
  // ============ GRAND OPENING — LIMITED TIME ============
  { id:'ppb', cat:'lashes', featured:true, name:{en:"Picture Perfect Brows", es:"Picture Perfect Brows"}, price:18, duration:20,
    desc:{en:"Limited-time signature brow shape & finish — grand opening special.", es:"Diseño y acabado de cejas, especial de apertura por tiempo limitado."} },
  { id:'glow-getter', cat:'skin', featured:true, name:{en:"The Glow Getter", es:"The Glow Getter"}, price:0, priceLabel:'Variable', duration:30,
    desc:{en:"Limited-time signature glow ritual — grand opening special.", es:"Ritual luminoso especial de apertura, por tiempo limitado."} },
  { id:'perfect-match', cat:'hair', featured:true, name:{en:"We're the Perfect Match", es:"We're the Perfect Match"}, price:150, duration:30,
    desc:{en:"Limited-time signature package — grand opening special.", es:"Paquete signature especial de apertura, por tiempo limitado."} },

  // ============ EYEBROWS ============
  // (Currently only "Picture Perfect Brows" is loaded in Square)

  // ============ EYELASHES ============
  { id:'lash-lift', cat:'lashes', name:{en:"Lash Lift", es:"Lifting de pestañas"}, price:95, duration:30,
    desc:{en:"Lifts and curls your natural lashes for a longer, fuller look — no extensions.", es:"Levanta y riza tus pestañas naturales para un look más largo, sin extensiones."} },
  { id:'lash-tint', cat:'lashes', name:{en:"Lash Tint", es:"Tinte de pestañas"}, price:20, duration:10,
    desc:{en:"Semi-permanent color for darker, more defined lashes.", es:"Color semi-permanente para pestañas más oscuras y definidas."} },
  { id:'lash-flare', cat:'lashes', name:{en:"Flare Cluster Lashes", es:"Pestañas en clúster"}, price:75, duration:30,
    desc:{en:"Temporary lash clusters for added volume — perfect for events.", es:"Clusters temporales para más volumen — ideal para eventos."} },
  { id:'lash-mink', cat:'lashes', name:{en:"Mink Individual Lashes", es:"Pestañas individuales de mink"}, price:140, duration:60,
    desc:{en:"Lightweight individual lashes for natural, longer-lasting enhancement.", es:"Pestañas individuales ligeras para un realce natural y duradero."} },

  // ============ FACE — THREAD OR WAX ============
  { id:'wax-full-face', cat:'waxing', name:{en:"Full Face", es:"Rostro completo"}, price:40, duration:15,
    desc:{en:"Removes facial hair using threading or waxing.", es:"Remueve el vello facial con hilo o cera."} },
  { id:'wax-upper-lip', cat:'waxing', name:{en:"Upper Lip", es:"Bigote"}, price:6, duration:5,
    desc:{en:"Quick removal of upper lip hair.", es:"Depilación rápida del bigote."} },
  { id:'wax-lower-lip', cat:'waxing', name:{en:"Lower Lip", es:"Labio inferior"}, price:6, duration:5,
    desc:{en:"Targets fine hair on the lower lip.", es:"Remueve el vello fino del labio inferior."} },
  { id:'wax-forehead', cat:'waxing', name:{en:"Forehead", es:"Frente"}, price:10, duration:5,
    desc:{en:"Cleans up the forehead area for a sharper hairline.", es:"Limpia la línea de la frente."} },
  { id:'wax-sideburns', cat:'waxing', name:{en:"Sideburns", es:"Patillas"}, price:12, duration:5,
    desc:{en:"Shapes and cleans sideburns.", es:"Diseña y limpia las patillas."} },
  { id:'wax-neck', cat:'waxing', name:{en:"Neck", es:"Cuello"}, price:12, duration:5,
    desc:{en:"Cleans up hair along the neck.", es:"Limpia el vello del cuello."} },
  { id:'wax-nose', cat:'waxing', name:{en:"Nose Wax", es:"Cera nasal"}, price:12, duration:5,
    desc:{en:"Quick and effective nose hair removal.", es:"Remoción rápida y efectiva del vello nasal."} },

  // ============ FACIALS ============
  { id:'fac-express', cat:'skin', name:{en:"Express Cleansing Facial", es:"Facial limpieza express"}, price:35, duration:30,
    desc:{en:"Quick refresh: cleanse, exfoliate, mask.", es:"Refresco rápido: limpieza, exfoliación y mascarilla."} },
  { id:'fac-sculpt', cat:'skin', name:{en:"Sculpt & Glow Facial", es:"Facial Sculpt & Glow"}, price:90, duration:90,
    desc:{en:"Signature contouring + glow facial. Sculpts and brightens for a lifted, luminous finish.", es:"Facial signature de contouring + glow. Esculpe e ilumina para un acabado luminoso."} },
  { id:'fac-lymph', cat:'skin', name:{en:"Lymphatic Drainage Massage Add-On", es:"Drenaje linfático (Add-on)"}, price:50, duration:15,
    desc:{en:"Manual lymphatic drainage to depuff and define facial contours.", es:"Drenaje linfático manual para desinflamar y definir el contorno facial."} },

  // ============ BODY WAXING ============
  { id:'wax-full-body', cat:'waxing', name:{en:"Full Body Wax", es:"Cera cuerpo completo"}, price:325, duration:90,
    desc:{en:"Removes unwanted hair from neck to toe.", es:"Remueve el vello del cuello a los pies."} },
  { id:'wax-underarm', cat:'waxing', name:{en:"Underarm Wax", es:"Depilación axilas"}, price:20, duration:10,
    desc:{en:"Removes hair from the entire underarm area.", es:"Depilación completa de las axilas."} },

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

  // ============ HAIRCUT ============
  { id:'haircut', cat:'hair', name:{en:"Haircut", es:"Corte de cabello"}, price:85, duration:75,
    desc:{en:"Customized cut, shampoo and blowout finish.", es:"Corte personalizado con shampoo y brushing."} },

  // ============ HAIR STYLING ============
  { id:'sty-formal', cat:'hair', name:{en:"Formal Hair Styling", es:"Peinado formal"}, price:125, duration:50,
    desc:{en:"Updos, curls or half-up styles for events.", es:"Recogidos, rizos o semi-recogidos para eventos."} },
  { id:'sty-special', cat:'hair', name:{en:"Special Occasion Styling", es:"Peinado ocasión especial"}, price:150, duration:75,
    desc:{en:"Glam styling: waves, updos or looks with extensions.", es:"Peinado glam con ondas, recogidos o looks con extensiones."} },

  // ============ HAIR TREATMENTS ============
  { id:'tr-scalp-spa', cat:'treatments', name:{en:"Hair + Scalp Spa", es:"Spa capilar + cuero cabelludo"}, price:135, duration:150,
    desc:{en:"Luxury combo: scalp therapy + deep hair care for balance and growth.", es:"Combo de lujo: terapia del cuero cabelludo + cuidado profundo del cabello."} },
  { id:'tr-scalp-detox', cat:'treatments', name:{en:"Scalp Detox Treatment", es:"Detox del cuero cabelludo"}, price:99, duration:90,
    desc:{en:"Removes buildup, rebalances the scalp, promotes healthier growth.", es:"Limpia, rebalancea el cuero cabelludo y promueve crecimiento."} },
  { id:'tr-keratin', cat:'treatments', name:{en:"Keratin Treatment", es:"Tratamiento de keratina"}, price:175, duration:120,
    desc:{en:"Smooths, strengthens and reduces frizz — keeps volume.", es:"Suaviza, fortalece y reduce frizz manteniendo el volumen."} },
  { id:'tr-hot-oil', cat:'treatments', name:{en:"Hot Oil Massage", es:"Masaje con aceite caliente"}, price:75, duration:20,
    desc:{en:"Relaxing scalp massage with nourishing oils.", es:"Masaje relajante con aceites nutritivos."} },

  // ============ ADD-ONS ============
  { id:'add-scrub', cat:'treatments', name:{en:"Scalp Scrub", es:"Exfoliante cuero cabelludo"}, price:15, duration:10,
    desc:{en:"Exfoliates and refreshes the scalp.", es:"Exfolia y refresca el cuero cabelludo."} },
  { id:'add-shine', cat:'treatments', name:{en:"Shine Treatment", es:"Tratamiento de brillo"}, price:25, duration:10,
    desc:{en:"Adds gloss and smoothness.", es:"Aporta brillo y suavidad."} },
  { id:'add-hydrate', cat:'treatments', name:{en:"Hydrating Treatment", es:"Tratamiento hidratante"}, price:25, duration:5,
    desc:{en:"Deeply nourishes dry or damaged hair.", es:"Nutre cabello seco o dañado."} },
  { id:'add-k18', cat:'treatments', name:{en:"K18 Treatment", es:"Tratamiento K18"}, price:45, duration:15,
    desc:{en:"Repairs and strengthens damaged hair at a molecular level.", es:"Repara y fortalece el cabello a nivel molecular."} },
  { id:'add-olaplex', cat:'treatments', name:{en:"Olaplex Treatment", es:"Tratamiento Olaplex"}, price:45, duration:15,
    desc:{en:"Rebuilds bonds inside the hair.", es:"Reconstruye los enlaces internos del cabello."} },

  // ============ HAIR EXTENSIONS ============
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

// Real team profiles pending — Naveen + colleague headshots to be added.
const STYLISTS = [];

const TIME_SLOTS = [
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '12:00','12:30','13:00','13:30','14:00','14:30',
  '15:00','15:30','16:00','16:30'
];

const BUSY_PATTERN = {
  0: ['10:00','10:30','11:00','13:00','15:30'],
  1: 'closed',
  2: ['12:00','13:00','15:30'],
  3: ['10:30','14:00','16:30'],
  4: ['11:30','12:30','15:00'],
  5: ['10:00','13:30','16:00'],
  6: ['09:30','12:00','14:30','16:00']
};

const REVIEWS = [
  { name:'Emma R.', rating:5, when:'2 weeks ago', service:{en:'Full Lightening', es:'Aclarado completo'},
    text:{en:"Honestly the best color I've had in NYC. Sofía nailed it on the first try and the consultation was so detailed.", es:"Honestamente el mejor color que he tenido en NYC. Sofía lo clavó en el primer intento y la consulta fue super detallada."} },
  { name:'Sophia A.', rating:5, when:'1 month ago', service:{en:'Lash Lift + Tint', es:'Lifting + tinte'},
    text:{en:"Walked out feeling like myself but elevated. The space is so calm — I almost fell asleep.", es:"Salí sintiéndome yo, pero elevada. El lugar es tan tranquilo que casi me duermo."} },
  { name:'Jenna T.', rating:5, when:'3 weeks ago', service:{en:'Special Occasion Styling', es:'Peinado ocasión especial'},
    text:{en:"Found my wedding day team. They listened, they took notes, and the trial was flawless.", es:"Encontré a mi equipo del día de la boda. Escucharon, tomaron notas y la prueba fue impecable."} },
  { name:'Maria L.', rating:5, when:'1 week ago', service:{en:'Sculpt & Glow Facial', es:'Facial Sculpt & Glow'},
    text:{en:"My skin was glowing for weeks. Céline is a gift. Already booked my next two visits.", es:"Mi piel brilló por semanas. Céline es un regalo. Ya reservé mis próximas dos visitas."} },
  { name:'Alyssa P.', rating:5, when:'5 days ago', service:{en:'Keratin Treatment', es:'Keratina'},
    text:{en:"Frizz: gone. Curl pattern: still there. Mia explained every step — not pushy at all.", es:"Frizz: cero. Mi rizo: intacto. Mia explicó cada paso, sin presión."} },
];

const GALLERY = [
  // Real videos (reels)
  { type:'video', cat:'cuts',    src:'assets/video/real-reel-1.mp4', poster:'assets/img/real-blowout-bangs.jpg' },
  { type:'video', cat:'color',   src:'assets/video/real-reel-5.mp4', poster:'assets/img/real-color-highlights.jpg' },
  { type:'video', cat:'cuts',    src:'assets/video/real-reel-2.mp4', poster:'assets/img/real-long-extensions.jpg' },
  { type:'video', cat:'color',   src:'assets/video/real-reel-4.mp4', poster:'assets/img/real-balayage.jpg' },
  { type:'video', cat:'cuts',    src:'assets/video/real-reel-6.mp4', poster:'assets/img/real-brunette-curls.jpg' },
  { type:'video', cat:'cuts',    src:'assets/video/real-reel-3.mp4', poster:'assets/img/real-keratin.jpg' },
  // Real photos
  { cat:'color',   img:'assets/img/real-balayage.jpg' },
  { cat:'color',   img:'assets/img/real-color-highlights.jpg' },
  { cat:'color',   img:'assets/img/real-highlights.jpg' },
  { cat:'cuts',    img:'assets/img/real-brunette-curls.jpg' },
  { cat:'cuts',    img:'assets/img/real-blowout-bangs.jpg' },
  { cat:'cuts',    img:'assets/img/real-long-extensions.jpg' },
  { cat:'cuts',    img:'assets/img/real-keratin.jpg' },
  { cat:'facials', img:'assets/img/real-scalp-treatment.jpg' },
];

window.SERVICES = SERVICES;
window.PACKAGES = PACKAGES;
window.STYLISTS = STYLISTS;
window.TIME_SLOTS = TIME_SLOTS;
window.BUSY_PATTERN = BUSY_PATTERN;
window.REVIEWS = REVIEWS;
window.GALLERY = GALLERY;
