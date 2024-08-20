const CACHE_NAME = "minimalistic_writer_cache_v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/font/amiri_regular.ttf",
  "/css/style.css",
  "/js/script.js",
  "/manifest/icon-192x192.png",
  "/manifest/icon-256x256.png",
  "/manifest/icon-384x384.png",
  "/manifest/icon-212x212.png",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(urlsToCache);
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  self.clients.claim();
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;
      else {
        try {
          return await fetch(event.request);
        } catch (error) {
          console.error("Fetch failed:", error);
        }
      }
    })()
  );
});
