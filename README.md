# 🎬 CinemaPedia

Una aplicación web moderna y elegante para descubrir y explorar información sobre películas. Construida con tecnologías de vanguardia y un diseño excepcional.

![CinemaPedia](https://img.shields.io/badge/CinemaPedia-Landing%20Page-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y responsive con animaciones fluidas
- 🌐 **Grid Scan Animation**: Animación 3D interactiva con WebGL usando Three.js
- 🎯 **Búsqueda Inteligente**: Descubre películas populares, estrenos y próximos lanzamientos
- ❤️ **Favoritos**: Guarda tus películas favoritas localmente
- 🌙 **Modo Oscuro**: Soporte completo para temas claro y oscuro
- 📱 **Responsive**: Optimizado para todos los tamaños de pantalla
- ⚡ **Rendimiento**: Construido con Vite para tiempos de carga ultrarrápidos
- 🎭 **Animaciones**: Efectos visuales impresionantes con post-processing

## 🚀 Tecnologías

### Core
- **React 18.3** - Biblioteca UI
- **TypeScript 5.8** - Tipado estático
- **Vite 5.4** - Build tool y dev server
- **React Router 6** - Enrutamiento

### UI & Estilos
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI accesibles
- **Radix UI** - Componentes primitivos sin estilos
- **Lucide React** - Iconos modernos
- **tailwindcss-animate** - Animaciones CSS

### Efectos Visuales
- **Three.js** - Gráficos 3D y WebGL
- **postprocessing** - Efectos post-procesamiento (Bloom, Chromatic Aberration)
- **face-api.js** - Detección facial (opcional)

### Herramientas
- **ESLint** - Linter de código
- **TypeScript ESLint** - Reglas TypeScript
- **Autoprefixer** - Compatibilidad CSS

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- npm, yarn, pnpm o bun

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <YOUR_GIT_URL>
   cd cinespot-light
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con hot-reload

# Producción
npm run build        # Construye la aplicación para producción
npm run build:dev    # Construye en modo desarrollo
npm run preview      # Previsualiza el build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 📁 Estructura del Proyecto

```
cinespot-light/
├── public/                 # Archivos estáticos
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Imágenes y recursos
│   │   ├── hero.png
│   │   └── icon/
│   ├── components/        # Componentes React
│   │   ├── ui/            # Componentes shadcn/ui
│   │   ├── Footer.tsx
│   │   ├── GridScan.tsx   # Animación 3D interactiva
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilidades
│   ├── pages/             # Páginas/rutas
│   │   ├── Index.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html
├── package.json
├── tailwind.config.ts     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
└── vite.config.ts         # Configuración Vite
```

## 🎨 Características Destacadas

### Grid Scan Animation
Animación 3D interactiva creada con Three.js que responde al movimiento del mouse, creando un efecto de escaneo de cuadrícula futurista.

```tsx
<GridScan
  sensitivity={0.55}
  lineThickness={1}
  linesColor="#392e4e"
  scanColor="#FF9FFC"
  enablePost
  bloomIntensity={0.6}
/>
```

### Componentes UI
Todos los componentes están construidos con shadcn/ui, proporcionando:
- ✅ Accesibilidad completa
- 🎨 Personalización fácil
- 📱 Responsive por defecto
- 🌙 Soporte de temas

### Secciones de la Landing

1. **Hero Section** - Presentación principal con Grid Scan animation
2. **Features Section** - Características principales de la app
3. **Tech Stack Section** - Tecnologías utilizadas con iconos
4. **Download Section** - Botones de descarga para Android/iOS
5. **Footer** - Enlaces legales y contacto

## 🎯 Páginas

- **/** - Landing page principal
- **/privacy** - Política de privacidad
- **/terms** - Términos y condiciones

## 🔧 Configuración

### Variables de Entorno

Actualmente no se requieren variables de entorno, pero puedes agregarlas en un archivo `.env`:

```env
VITE_API_URL=your_api_url
VITE_APP_NAME=CinemaPedia
```

### Personalización de Tema

Los colores y estilos se configuran en `src/index.css` usando variables CSS:

```css
:root {
  --primary: 280 80% 60%;
  --secondary: 200 80% 55%;
  /* ... más variables */
}
```

## 🚀 Despliegue

### Vercel / Netlify

1. Conecta tu repositorio
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. ¡Despliega!

### Build Manual

```bash
npm run build
# Los archivos estarán en la carpeta dist/
```

## 📝 Licencia

Este proyecto es privado. Todos los derechos reservados.

## 👤 Autor

**Cristhian Recalde**

- Email: [recaldecd@gmail.com](mailto:recaldecd@gmail.com)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Términos y Privacidad

- [Política de Privacidad](/privacy)
- [Términos y Condiciones](/terms)

## 🙏 Agradecimientos

- [The Movie Database (TMDB)](https://www.themoviedb.org/) - API de información de películas
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI increíbles
- [Lucide](https://lucide.dev/) - Iconos hermosos
- [Three.js](https://threejs.org/) - Biblioteca 3D

---

Hecho con ❤️ usando React, TypeScript y Vite
