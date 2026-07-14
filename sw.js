const CACHE='gophey-v1';
const FILES=['/Gophey/gophey.html','/Gophey/manifest.json','/Gophey/icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
