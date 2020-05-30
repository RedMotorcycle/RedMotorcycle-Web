'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e565d39f07e3418abd4b9f6ab65c7b7a",
"/": "e565d39f07e3418abd4b9f6ab65c7b7a",
"main.dart.js": "1f05076f5d0a21a298badfb5a80c87d4",
"favicon.png": "caa43920d5a06e417a340cd1d4c72bcc",
"icons/Icon-192.png": "85675ea148216b9ce658f9c94a78932c",
"icons/Icon-512.png": "f33ceb243fa44768a2507cdcb9d18b94",
"manifest.json": "8703243cf20466f71bd27ec6356f10df",
"assets/LICENSE": "3df0c4f0d254153bb88a99cdd55072fd",
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
