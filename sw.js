// Necesario para que el móvil ofrezca «Instalar app». No guarda nada: todo se pide siempre a internet.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sin caché: la app siempre al día */ });
