/* eslint-disable no-restricted-globals */

var cacheName = 'book-your-book';
var filesToCache = [
  '/static/css/main.8542d530.chunk.css',
  '/static/js/main.086530ea.chunk.js',
  '/static/js/main.086530ea.chunk.js.map',
  '/static/js/runtime-main.1e386c54.js',
  '/static/js/runtime-main.1e386c54.js.map',
  '/static/js/2.0da7c9d8.chunk.js',
  '/static/js/2.0da7c9d8.chunk.js.map',
  '/index.html',
  '/static/css/main.8542d530.chunk.css.map',
  '/static/js/2.0da7c9d8.chunk.js.LICENSE.txt',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
