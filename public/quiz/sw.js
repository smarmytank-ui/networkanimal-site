const CACHE = "network-animal-built-different-v4";
const ASSETS = ["./", "./index.html", "./styles.css", "./lead.css", "./data.js", "./config.js", "./app.js", "./na_eyes.png", "./android-chrome-192x192.png", "./android-chrome-512x512.png", ...["bear", "dolphin", "eagle", "elephant", "fox", "lion", "owl", "unicorn", "wolf"].map(a => `./icons/${a}.svg`)];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
