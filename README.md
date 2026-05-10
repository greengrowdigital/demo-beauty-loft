# The Beauty Loft — Demo

Sitio web demo profesional para **The Beauty Loft** — full-service salon en Kips Bay, Manhattan.
Construido por **GreenGrow Digital** como demostración de lo que se puede entregar a un cliente real.

📍 240 E 28th Street, New York, NY 10016
📷 [@beautyloftny](https://www.instagram.com/beautyloftny)

---

## ✨ Lo que incluye este demo

- **6 páginas independientes** (no un single-page) — Home, Services, Gallery, About, Contact, Booking
- **Toggle de idioma EN ↔ ES** persistente (localStorage)
- **Navbar funcional** con scroll, móvil con menú overlay y indicador activo
- **Sistema completo de reservas** en 5 pasos:
  1. Servicio (filtros por categoría)
  2. Estilista (filtrado por especialidad del servicio elegido)
  3. Fecha y hora (calendario funcional con días bloqueados, slots disponibles)
  4. Datos del cliente (validación)
  5. Pago de depósito (Apple Pay / Google Pay / tarjeta con detección de marca, formato automático)
- **Pago demo** con animación de "processing" + pantalla de éxito + descarga `.ics` para calendario
- **Galería** con filtros por categoría y lightbox (teclado, swipe)
- **Animaciones**: reveals on-scroll, marquee, hero zoom, hover spotlights en cards, count-up, custom cursor
- **Identidad visual** premium: paleta dorada (#d4af37) sobre onyx (#050505), tipografía serif Cormorant Garamond + script Italianno

## 🚀 Deploy a Vercel

```bash
# Desde la raíz del proyecto:
vercel --prod
```

O conecta el repo en [vercel.com/new](https://vercel.com/new) — no requiere build step.

El archivo `vercel.json` configura headers de cache.

## 📁 Estructura

```
beauty-loft/
├── index.html         # Home
├── services.html      # Catálogo completo
├── booking.html       # Flujo de reservas + pago
├── gallery.html       # Galería con filtros + lightbox
├── about.html         # Historia + equipo + valores
├── contact.html       # Formulario + mapa + info
├── assets/
│   ├── main.css       # Design system completo
│   ├── i18n.js        # Traducciones EN/ES + manager
│   ├── data.js        # Servicios, estilistas, slots, reseñas
│   └── app.js         # Animaciones, navbar, toasts, cursor
├── vercel.json
└── README.md
```

## 🎨 Design tokens

```css
--gold:        #d4af37  /* Primary */
--gold-light:  #f4e4ba  /* Highlight */
--onyx:        #050505  /* Background */
--carbon:      #111111  /* Cards */
--cream:       #f5f1e8  /* Body text */
```

Fonts: **Cormorant Garamond** (display), **Italianno** (script), **Inter** (body), **JetBrains Mono** (numbers).

## 🌐 Idiomas

Toggle en el navbar (esquina superior derecha). Persiste entre páginas vía `localStorage.beautyloft.lang`.

Cualquier elemento con `data-i18n="key"` se traduce automáticamente. El diccionario está en `assets/i18n.js`.

## 📞 Información del negocio (real)

- **Nombre**: The Beauty Loft
- **Dirección**: 240 E 28th Street, New York, NY 10016
- **Servicios**: Brows · Lashes · Waxing · Facials · Hair Color · Cuts · Styling · Extensions · Hair + Scalp Treatments
- **Instagram**: @beautyloftny

> Las fotos de equipo, reseñas, números de teléfono y emails son **demo** — no datos reales del cliente.

---

**Demo by GreenGrow Digital** · Para vender la idea de un sitio premium con reservas integradas.
