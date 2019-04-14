self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});

self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('the-magic-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/background2.png',
          '/Cannon-sprite.png',
          '/favicon.png',
          '/ball-blast.html',
          '/sw.js'
        ]);
      })
    );
});