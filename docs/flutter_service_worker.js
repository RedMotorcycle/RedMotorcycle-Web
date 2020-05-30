'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ce4657cc9c2663fcb4127909e1f7a078",
"/": "ce4657cc9c2663fcb4127909e1f7a078",
"main.dart.js": "16369606ff799d5bb40e220f8597f747",
"favicon.png": "4a1a4c74fd396f01f7f19b0217ee3034",
"icons/Icon-192.png": "b70fb9f3e622fd81fe09a2cd7f478452",
"icons/Icon-512.png": "05c1832baf6e9cd6b2bf24ccfced0881",
"manifest.json": "0be05307b4871fa48df4bf146c56ee9c",
"assets/LICENSE": "638481329f190f3533ef04c102487ba3",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
