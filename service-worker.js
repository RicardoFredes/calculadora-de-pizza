self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pizza-cache").then((cache) => {
      return cache.addAll([
        "https://ricardofredes.github.io/calculadora-de-pizza/",
        "https://ricardofredes.github.io/calculadora-de-pizza/index.html",
        "https://ricardofredes.github.io/calculadora-de-pizza/manifest.json",
        "https://ricardofredes.github.io/calculadora-de-pizza/service-worker.js",
        "https://ricardofredes.github.io/calculadora-de-pizza/icon-192x192.png",
        "https://ricardofredes.github.io/calculadora-de-pizza/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
