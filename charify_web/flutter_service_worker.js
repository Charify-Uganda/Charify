'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "5cbeb96675bc5fb6dc60287430e89469",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"manifest.json": "300d9297d40f62abfc263c091527d441",
"main.dart.js": "c6747c01af1c28b9c1d0c8727129b794",
"index.html": "e5acb27e073b1ff43697e6e8a85a89d6",
"/": "e5acb27e073b1ff43697e6e8a85a89d6",
"assets/FontManifest.json": "9ffecb1e07925f603266fc9334fdfd8d",
"assets/AssetManifest.json": "9e00264b8714d1f73220303e4c4a51c4",
"assets/fonts/DancingScript-Bold.ttf": "76c145c2f3f1c17fd11ec9a3740521f6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterwave/fonts/FLW-Regular.ttf": "b91eb127b110b658f39d85d4b8069c95",
"assets/packages/flutterwave/fonts/FLW-Bold.ttf": "d57fcc27db265025ef404e8b4bbec5d5",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/NOTICES": "f69d3601a89ce42d2db374be60e671da",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/twitter.svg": "ce897e80d1e04fc007bce0cc770f07e7",
"assets/assets/icons/charify_icon.svg": "569e8d6a5ce3c0192bdb8053ae6d3c9a",
"assets/assets/icons/google-plus.svg": "4651560e3dee407a0a545610d5987ea3",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/icons/star.svg": "4cf7d66ffc8010c43f3571b0f584e5e7",
"assets/assets/icons/star_fill.svg": "f2690d460ea47505ff358f7778efef74",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/charify.svg": "37cfcfb12d10d9012cdb0af779fef3fe",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/images/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/images/twitter.svg": "ce897e80d1e04fc007bce0cc770f07e7",
"assets/assets/images/PicsArt_05-29-01.32.33.png": "3afefe249b0b9656e119a2f199833c61",
"assets/assets/images/clothes1.jpg": "5b87905fca9ebead9cbbd44a0ea73412",
"assets/assets/images/img2.jpg": "97ad452913b69d3463171ffcd1f88edb",
"assets/assets/images/b4.jpg": "0b8819bfb66954e152e2d486920e4ffb",
"assets/assets/images/senior.jpg": "775a1b016d330fb2245eea80d0c453a1",
"assets/assets/images/blood.jpg": "2b35834ca338f7f0e597edee57531891",
"assets/assets/images/george.jpg": "ba7b7dd3792f3342b263212b0b31f5c6",
"assets/assets/images/eddie_image.jpg": "721a8f667cda706c2626c8b0b03f841a",
"assets/assets/images/b1.jpg": "c35f590468c25664d9a422ea180858b3",
"assets/assets/images/a3.jpg": "1523f656199167165522676d5f4fc17a",
"assets/assets/images/google-plus.svg": "4651560e3dee407a0a545610d5987ea3",
"assets/assets/images/a2.jpg": "fbffb3329c215a993e46ecb738f3b44b",
"assets/assets/images/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/images/poster_1.jpg": "36164755ca22ee212e8f9be10cc16413",
"assets/assets/images/b3.jpg": "b8575093415333bb87c297f1eee9e0cc",
"assets/assets/images/MI.png": "fc601aa4e547ed9c2de68e5f56fa0ac5",
"assets/assets/images/img3.jpg": "543afd906cbc8795a44bf7490332f07e",
"assets/assets/images/ce7.jpg": "3e34f07ec46d4410ef633a849805e72c",
"assets/assets/images/img4.jpg": "5027c5b20d449cf89f45db8fa74ee16b",
"assets/assets/images/b5.jpg": "3d15a5c17be75434bc3fd8c80a6e5b45",
"assets/assets/images/food.jpg": "132c5f616ac4faf15938d41bd72a5900",
"assets/assets/images/b2.png": "3f55d974fb357b1ea0c475d04ec20134",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/img1.jpg": "66fad870b5d6fa6738709c2516f98ac0",
"assets/assets/images/Movie-Info-logo.png": "2f295dd574ffb19b202a526ae9c94a68",
"assets/assets/images/google-1.png": "7d223f3451e2fe41b47ee34e21c44f7b",
"assets/assets/images/MI-11.png": "63e45401b4d45964a0161038a516a8c0",
"assets/assets/images/ce9.png": "cc01b584462029609d92baefbb2dd03e",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/ce6.png": "3e7ab252b18f110a42d37205d613fe92",
"assets/assets/images/edu.jpg": "92d35966865902f36435cda30d9bfa39",
"assets/assets/images/facebook-1.png": "096cad1a951779fa609ff5c7e639532c",
"assets/assets/images/b6.jpg": "6c8bd2579e25a7d7afd8e56e82834602",
"assets/assets/images/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/images/a5.jpg": "87edbbaf31b5101582dc9ddd913f2781",
"assets/assets/images/a1.jpg": "71f66996a2fb45bab889fbba2290675d",
"assets/assets/images/a6.jpg": "1007f6dfe33241468c39b48a2cb3503e",
"assets/assets/images/ce10.jpg": "57c6d1fade7476b6631d7c51d86f3272",
"assets/assets/images/facebook.png": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/a4.jpg": "ea60a1659603f10e253972f4136e4bfe",
"assets/assets/images/MI-1.png": "69cd3c0cb5084bdc36f22a61a78f8ddd",
"assets/assets/images/ce2.jpg": "cb8f5e30de92ee2e083f4d4beff8a7f6",
"assets/assets/images/ce8.jpg": "45edf9a68a9e142b262e1ddfd13cb166",
"assets/assets/images/google.png": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/george_image.PNG": "9b04b610000f24e34b84ee062f73fe6e",
"assets/assets/images/ce4.jpg": "eb9c39c12d9b4e7fe01c3250936d1879",
"assets/assets/images/a7.jpg": "36b43c7abca4025843a2a3126f2bb9c3",
"assets/assets/images/charify_logo.png": "055abbed6078124ec2816b61a620fda3",
"assets/assets/images/charify.png": "7c6c40f739b2c1175d606bd8af301899",
"assets/assets/images/wash.jpg": "71987d4a363d9c11983edd951222e302",
"assets/assets/images/PicsArt_05-29-01.16.12-3.png": "06b3a5634b81029a7a2ea7598c084dba",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/mylogo1.png": "fec762a2e254d5228e98d62d082b1193",
"assets/assets/images/img5.jpg": "1388f8840cb9626d3c301d584d42656d",
"assets/assets/images/ronnie_image.jpg": "b0ea4ff4e43f400e243889e9eaebf3c3",
"assets/assets/images/b7.png": "90b940ebe1aad1b7ddefe592ddec690d",
"assets/assets/images/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
