self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll([
        "./",
        "./src/styles/style.css",
        "./src/scripts/app.js",
        "./src/scripts/main.js",
        "./public/icons/144x144.png",
        "./public/icons/192x192.png",
        "./public/icons/512x512.png",
        "./public/icons/favicon.png",
        "./public/images/logo.png"
      ])
    })
  )
})

self.addEventListener('message', e => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})