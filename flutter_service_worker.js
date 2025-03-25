'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b7466f9306993ff2eaae58ee8428df2b",
"assets/AssetManifest.bin.json": "c5193124bacc771230949a4502f15f7d",
"assets/AssetManifest.json": "c83e86b6a80039cb0b33f8a455b883b4",
"assets/assets/audio/title_bgm.mp3": "20e3bdb012d73923fb3158d11281257a",
"assets/assets/common/characters/iyowa/happy.png": "bee60aede1cd80a7d73f13e0e08d04de",
"assets/assets/common/characters/iyowa/normal.png": "6d4bd22a6d7bcc1fc0da0a30a53baa83",
"assets/assets/common/characters/iyowa/sad.png": "35c56f760d88baf0aae1befe6370725e",
"assets/assets/common/characters/iyowa.png": "6d4bd22a6d7bcc1fc0da0a30a53baa83",
"assets/assets/fonts/NotoSansJP-Bold.otf": "224a46b52dfbcbbe344eae089c3c4d54",
"assets/assets/fonts/NotoSansJP-Regular.otf": "224a46b52dfbcbbe344eae089c3c4d54",
"assets/assets/images/title_background.png": "cbcfca0572bd5ccb26880982f15c7462",
"assets/assets/stages/stage_001/background.png": "a63e93a8fdd985c13f09f5e4147faa5f",
"assets/assets/stages/stage_001/bgm.mp3": "4a054f6301acd2133cb55755f4124858",
"assets/assets/stages/stage_001/character.png": "452dc4b0b2bc77f878ad2263a9d259b8",
"assets/assets/stages/stage_001/config.json": "b16c6f76ab75f5facd913937cf207564",
"assets/assets/stages/stage_001/expressions/happy.png": "c52abbc8fcc200d6425caa5a2da3d42c",
"assets/assets/stages/stage_001/expressions/normal.png": "a7c5f1d3ccee235abfbd5d0ca249ce24",
"assets/assets/stages/stage_001/expressions/sad.png": "fafe81bf9e13210feace28306f9f09be",
"assets/assets/stage_select/background.png": "cbcfca0572bd5ccb26880982f15c7462",
"assets/assets/stage_select/stage_thumbnails/stage_001.png": "b2aae053e1624391a2b6c998131f3229",
"assets/assets/stage_select/stage_thumbnails/stage_002.png": "fb823fc66ffbdf07b71ef39e6a8b52c8",
"assets/assets/stage_select/stage_thumbnails/stage_003.png": "4cec41184603dfb0dc1b2aec1083fd86",
"assets/assets/stage_select/stage_thumbnails/stage_004.png": "7e951d498090e2e5ecf521501d5c7d05",
"assets/assets/stage_select/stage_thumbnails/stage_005.png": "62bd36f260167a1c00a273f85e4485f0",
"assets/assets/stage_select/stage_thumbnails/stage_006.png": "44693bc9337b547bc09ff3a5f5d6863a",
"assets/assets/stage_select/stage_thumbnails/stage_007.png": "ed0b43682daeaf60f6ce367410c949ae",
"assets/assets/stage_select/stage_thumbnails/stage_008.png": "6fdc984f5d43782854aa81ed22cf7229",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0c154d70a15d7631fc73b61f3ead69de",
"assets/NOTICES": "3e015d8d41a3d9ae536d15b5108d69df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c2d595292cfad4ea28f8f08f893fd446",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b822567fdaa21c4345b3f24ceeff22f5",
"/": "b822567fdaa21c4345b3f24ceeff22f5",
"main.dart.js": "ec1664c2b3d30166ce1fa18704b95628",
"manifest.json": "b8b804a87a2a35ec17a48bd0496d0eff",
"version.json": "e383615f0291c158917cc45b766a2d73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
