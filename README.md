# Mellisarmiento - Landing Page

![Mellisarmiento](https://img.shields.io/badge/Status-Production_Ready-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff)

## 🚀 Descripción

Landing page profesional y moderna para **Mellisarmiento** - un equipo de 3 desarrolladores senior especializados en software de alta complejidad. La página está diseñada para generar confianza y captar clientes empresariales que buscan soluciones robustas.

### ✨ Características

- **Design Premium**: Interfaz moderna y minimalista con colores sobrios y profesionales
- **100% Responsive**: Mobile-first design que se adapta perfectamente a todos los dispositivos
- **Interactivo**: Animaciones suaves, carrusel de proyectos y efectos hover
- **Optimizado**: Construido con Vite para máximo rendimiento
- **SEO Friendly**: Estructura semántica y meta tags optimizados

## 🎯 Secciones

1. **Hero** - Presentación impactante con estadísticas clave
2. **Servicios** - 3 servicios principales (Software a Medida, E-commerce, IA)
3. **Portfolio** - Carrusel interactivo con 5 proyectos complejos
4. **El Tridente** - Presentación del equipo y sus especialidades
5. **Contacto** - Formulario de contacto funcional
6. **Footer** - Navegación y enlaces sociales

## 🛠️ Tecnologías

- **React 18.3** - Biblioteca UI
- **Vite 5.4** - Build tool ultra-rápido
- **TailwindCSS 3.4** - Framework CSS utility-first
- **Lucide React** - Iconos modernos y ligeros

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
LandingTeam/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navegación sticky
│   │   ├── Hero.jsx         # Sección principal
│   │   ├── Services.jsx     # Servicios ofrecidos
│   │   ├── Portfolio.jsx    # Carrusel de proyectos
│   │   ├── Team.jsx         # El Tridente
│   │   ├── Contact.jsx      # Formulario de contacto
│   │   └── Footer.jsx       # Pie de página
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- **Primary**: Azul vibrante (#0ea5e9)
- **Dark**: Grises oscuros para el fondo
- **Gradient**: Degradados de azul a morado/rosa

### Contenido

Para modificar el contenido:

1. **Servicios**: Edita el array `services` en `Services.jsx`
2. **Proyectos**: Modifica el array `projects` en `Portfolio.jsx`
3. **Equipo**: Actualiza `teamMembers` en `Team.jsx`

### Formulario de Contacto

El formulario en `Contact.jsx` actualmente simula el envío. Para conectarlo con un backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  
  try {
    const response = await fetch('TU_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  } catch (error) {
    setStatus('error')
  }
}
```

## 🌐 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages

```bash
# Agrega a vite.config.js:
# base: '/nombre-repo/'

npm run build
# Sube la carpeta 'dist' a gh-pages branch
```

## 📊 Proyectos Destacados

1. **Stock-in-Order** - ERP con microservicios en Go
2. **ConectarProfesionales** - Marketplace con geolocalización
3. **VOID E-Commerce** - Tienda online con IA
4. **Orion** - Chatbot con NLP avanzado
5. **Crow-v2** - Frontend e-commerce de alto rendimiento

## 👥 El Equipo

- **Juani Sarmiento** - Backend & Project Lead (FastAPI, Go, IA)
- **Lautaro Salinas** - Frontend Lead (Next.js, React, UI/UX)
- **Franco Mellimaci** - DevOps & Security (Docker, Microservicios)

## 📝 Licencia

© 2025 Mellisarmiento. Todos los derechos reservados.

---

**Construido con ❤️ por el Tridente**

¿Necesitas un equipo senior para tu proyecto complejo? [Contáctanos](mailto:contacto@mellisarmiento.com)
