const CACHE_NAME = "luminus-v1"
const RUNTIME_CACHE = "luminus-runtime-v1"

const PRECACHE_URLS = [
  "/",
  "/events",
  "/schedule",
  "/contact",
  "/favicon/site.webmanifest",
  "/favicon/apple-touch-icon.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME && n !== RUNTIME_CACHE).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  )
})

self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)
  if (url.origin !== location.origin) return

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone()
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone))
          return res
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/")))
    )
    return
  }

  if (/\.(js|css|woff2?|png|ico|webmanifest)$/i.test(url.pathname) || url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((res) => {
          const clone = res.clone()
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone))
          return res
        })
      )
    )
    return
  }

  event.respondWith(fetch(request))
})
