# Umamusume Music App 🎵

Una aplicación web simple para explorar y escuchar música del franchise Umamusume Pretty Derby. Construida con React y Vite para diversión sin intención comercial.

## 🚀 Características

- Navegación por álbumes de música de Umamusume
- Reproductor de audio integrado
- Interfaz responsive y moderna
- Carrusel de imágenes con Swiper
- Diseño optimizado para dispositivos móviles

## 🛠️ Tecnologías Utilizadas

- **React** 18.2.0 - Biblioteca de JavaScript para interfaces de usuario
- **Vite** 4.4.9 - Herramienta de construcción rápida
- **React Router DOM** 6.18.0 - Enrutamiento para aplicaciones React
- **Swiper** 11.2.10 - Carrusel táctil moderno

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/xgowther2102/umamusume-music-app.git
cd umamusume-music-app
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción

## 📁 Estructura del Proyecto

```
umamusume-app/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes React reutilizables
│   ├── pages/        # Páginas de la aplicación
│   ├── hooks/        # Hooks personalizados
│   ├── data/         # Datos estáticos
│   └── utils/        # Utilidades y funciones auxiliares
├── package.json
└── README.md
```

## 🎨 Componentes Principales

- **AlbumCard** - Tarjeta de álbum con información y controles
- **Player** - Reproductor de audio principal
- **SongList** - Lista de canciones del álbum
- **Navbar** - Barra de navegación

## 📱 PWA Support

La aplicación incluye soporte básico para Progressive Web App (PWA) con:
- Manifest para instalación
- Service Worker para caché básico

## 🌐 Demo en Vivo

🔗 **[Ver Demo](https://xgowther2102.github.io/umamusume-music-app/)**

La aplicación se despliega automáticamente en GitHub Pages usando GitHub Actions cada vez que se hace push a la rama `main`.

## 🚀 Despliegue

El proyecto se despliega automáticamente usando GitHub Actions. Cada push a `main` activa:

1. **Build automático** con Node.js 18
2. **Despliegue a GitHub Pages**
3. **URL de producción**: https://xgowther2102.github.io/umamusume-music-app/

Para despliegue manual:
```bash
npm run build
# Los archivos se generan en la carpeta dist/
```

## ⚠️ Nota Legal

Este proyecto es únicamente para fines educativos y de entretenimiento. No tiene intención comercial y respeta todos los derechos de autor del contenido de Umamusume Pretty Derby.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
