
const CACHE_NAME = 'flash-ui-v1';
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(['/'])));
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
