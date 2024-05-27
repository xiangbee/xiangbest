'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aee9c5b7a8e4b2a22cec5fd0dd8f6cd8",
"assets/AssetManifest.bin.json": "9b72f7c2c9ecb300c61fc0811d8ccd40",
"assets/AssetManifest.json": "97e6b580b754a4496087c3c1c86837cf",
"assets/assets/%25E5%259C%2596%25E7%2589%25871.png": "7746a97019d48e014c86d61eebc07ca0",
"assets/assets/%25E5%259C%2596%25E7%2589%258710.png": "18134399f5e01d1266a5b97b12736854",
"assets/assets/%25E5%259C%2596%25E7%2589%258711.png": "232701d28c249d37c440f6b43bd3a0d2",
"assets/assets/%25E5%259C%2596%25E7%2589%258712.png": "9599a24e40da57e721e8a3f098c14382",
"assets/assets/%25E5%259C%2596%25E7%2589%258713.png": "5f020a69cc304b5a9095509e3cf876c2",
"assets/assets/%25E5%259C%2596%25E7%2589%258714.png": "72663b59e8f5bac8f989e17a69667f1e",
"assets/assets/%25E5%259C%2596%25E7%2589%258715.png": "986f7306a8c8ead805e7d466e400d23b",
"assets/assets/%25E5%259C%2596%25E7%2589%258716.png": "8d586b28b1b8b2bd206cd76ebcaa6f35",
"assets/assets/%25E5%259C%2596%25E7%2589%258717.png": "249c621b95151163b1abfd71bf205b9f",
"assets/assets/%25E5%259C%2596%25E7%2589%258718.png": "ce5bc763dd60a150c657bac6f1212d82",
"assets/assets/%25E5%259C%2596%25E7%2589%258719.png": "7e51aad5bbc87b161d90b35a0e165ac5",
"assets/assets/%25E5%259C%2596%25E7%2589%25872.png": "8919c03792be13fdf7fca0b3a3b30ee9",
"assets/assets/%25E5%259C%2596%25E7%2589%258720.png": "2b93015a2be021f178044d529e2a259b",
"assets/assets/%25E5%259C%2596%25E7%2589%258721.png": "f3949ba1604a704cd30ee9fe226134b7",
"assets/assets/%25E5%259C%2596%25E7%2589%258722.png": "8bd373cd8d51f76edad8ead726daba6c",
"assets/assets/%25E5%259C%2596%25E7%2589%258723.png": "17a58036d8e7ad88e64d9d54a98a4f3d",
"assets/assets/%25E5%259C%2596%25E7%2589%25873.png": "a0568a88965e1f0e777f53f398a3a87b",
"assets/assets/%25E5%259C%2596%25E7%2589%25874.png": "492f32528a6cb3de8403a6402fde329b",
"assets/assets/%25E5%259C%2596%25E7%2589%25875.png": "c78729679409e9099aedc827eb1dff31",
"assets/assets/%25E5%259C%2596%25E7%2589%25876.png": "924fcc89b604b5c6ec492f4540787b99",
"assets/assets/%25E5%259C%2596%25E7%2589%25877.png": "ed0c3d6dc2b56b605a639092bf2302a1",
"assets/assets/%25E5%259C%2596%25E7%2589%25878.png": "f687c714822ccb60ae8ad45dca91ce94",
"assets/assets/%25E5%259C%2596%25E7%2589%25879.png": "0bfb5ffd220cd4c8483eb722d3f24c13",
"assets/assets/beach.jpg": "f9843c72f1a531c60624199e5e6e4ec5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ad1ed7208e88a9ecff1ac2571014bcef",
"assets/NOTICES": "30c3b80001005cfd966309a7bafe37a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1477d8627a378258ab205b30ec465556",
"/": "1477d8627a378258ab205b30ec465556",
"main.dart.js": "ca7e17d4b4a4b95edca70af2f9723ef0",
"manifest.json": "cdee129d863936cf3b82755e999dc1b9",
"version.json": "325804e60264b0307dab562e969e95c5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
