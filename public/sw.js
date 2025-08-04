// Service Worker básico para cachear recursos estáticos
const CACHE_NAME = 'umamusume-app-v1';
const BASE_PATH = self.location.pathname.includes('/umamusume_sound/') ? '/umamusume_sound' : '';
const STATIC_RESOURCES = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/images/umamusume_logo.webp`,
  `${BASE_PATH}/images/umamusume_app.webp`,
  `${BASE_PATH}/manifest.json`
];

// Instalar SW y cachear recursos estáticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cacheando recursos estáticos');
        return cache.addAll(STATIC_RESOURCES);
      })
      .catch((error) => {
        console.error('Error al cachear recursos:', error);
      })
  );
});

// Activar SW y limpiar caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones y servir desde cache cuando sea posible
self.addEventListener('fetch', (event) => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en cache, devolverlo
        if (response) {
          return response;
        }

        // Si no, hacer fetch y cachear para recursos estáticos
        return fetch(event.request).then((response) => {
          // No cachear respuestas que no sean válidas
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cachear solo recursos de nuestra app (no externos como SoundHelix)
          if (event.request.url.startsWith(self.location.origin)) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        });
      })
      .catch(() => {
        // En caso de error, si es una página, mostrar fallback
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});
