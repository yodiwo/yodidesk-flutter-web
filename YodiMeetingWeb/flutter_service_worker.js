'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d5d530d26cd2001b0af1649f5af8fd88",
"index.html": "bbdae764df66b6d234f9863eb5d82bc9",
"/": "bbdae764df66b6d234f9863eb5d82bc9",
"main.dart.js": "d9dbc190419d4674dd0baa5c54a68295",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "000e9af47a446521be7dc60cebae56fe",
"assets/AssetManifest.json": "4895294d8c46f9f18e31dbc64f0cdc89",
"assets/NOTICES": "9d9c577ec17987940d5b82900b1e9d1b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c7ff4a78448ff974564572bcabdcbb3e",
"assets/fonts/MaterialIcons-Regular.otf": "11a74f2b06cb527b1fc2797355c99fc7",
"assets/assets/settings_screen/meetingroom.svg": "dd8ce14f4b9ca887bd732925e10a4a7f",
"assets/assets/settings_screen/tablet.svg": "14a5c3d8add3549c0b6a23e3afbc4b2f",
"assets/assets/app_icon.png": "719fe6c90212f12c6257348067d0682b",
"assets/assets/cosmote_logo.svg": "1dee3ff2b87c372c3f7ddf3bfe861d1b",
"assets/assets/yodiwo_logo_white.svg": "ee61c11a8654a9932c9283044cc490bf",
"assets/assets/login_screen/Illustration.svg": "6ffa71fcefce9312e9d127cd2e570362",
"assets/assets/login_screen/startTabletApplication,_disabled.png": "56a069e6e5f06d8217964e3eb39df11a",
"assets/assets/login_screen/setupMeetingRoom.png": "5b1dfeda4711b8c17a7be7e77d0da00f",
"assets/assets/login_screen/ellipse.svg": "eebbddbe881c81c6e6391b8fe950eec5",
"assets/assets/login_screen/loginPage.svg": "0f39427cbb9c267190c91c605ea361f7",
"assets/assets/login_screen/login.svg": "21e299a954e86db2395962fe5fdd8b99",
"assets/assets/login_screen/illustration.png": "03a2ed118f2f33b451542983e1842d26",
"assets/assets/login_screen/startTabletApplication.png": "ee899edf1a582cd1319a2c9041064bd2",
"assets/assets/login_screen/setupMeetingRoom,_disabled.png": "32aa75c4e0313b79d8940548e5ed4f69",
"assets/assets/background_image.png": "a13334202367d53bb2a343955701d46f",
"assets/assets/set_meetingroom_screen/building_small.svg": "f8378198051355d3e4f26280e0eb796b",
"assets/assets/set_meetingroom_screen/floor_small.svg": "4b6b4cedc4b9e0ff7bb82fd8883cde9a",
"assets/assets/set_meetingroom_screen/arrowRight.svg": "55b7a56c39190a2663d64cb501ee45b2",
"assets/assets/set_meetingroom_screen/infoLarge.svg": "d3eb027e75d8c0a2ed0865edd91f3d4c",
"assets/assets/set_meetingroom_screen/meetingroom.svg": "3408eaf24ef9eac7ecf91fcbb1affe59",
"assets/assets/set_meetingroom_screen/meetingroom_small.svg": "afa8f0358d740374c8c660a87cb45024",
"assets/assets/set_meetingroom_screen/floor.svg": "165008667e1823963bfbef5f67cea41e",
"assets/assets/set_meetingroom_screen/success.svg": "0ad666a17569dc50cb7d4087c0fd2aae",
"assets/assets/set_meetingroom_screen/deskgroup_small.svg": "ccd7c0ca29f692092ea0446ff272b74e",
"assets/assets/set_meetingroom_screen/deskgroup.svg": "b26b768287230ac9ec0c1f9dbbee77b1",
"assets/assets/set_meetingroom_screen/building.svg": "ab9fd637c2459d427891d3ca55a3ab4a",
"assets/assets/icons/loader.png": "35e8f89f3a46a43b19acb15a775db3e4",
"assets/assets/icons/meetroom_status_available.svg": "cb40b6ce42e1f2975c49aab91b5b5e1c",
"assets/assets/icons/file.svg": "f41f9af6660748af9bd69067df354c30",
"assets/assets/icons/settings.svg": "3377e89ede5b24642fca670464c53ce0",
"assets/assets/icons/meetroom_status_unavailable.svg": "5b7367c3a4ca6fe16da0cfd49e7a32ff",
"assets/assets/icons/current_day.svg": "e1e1874907fd5e98943c8ffe266071b6",
"assets/assets/icons/warning.svg": "07a11c552119e40d7fc532927c8d9bb7",
"assets/assets/icons/loader.svg": "d0a7feda428725d23b57ce077e0d6585",
"assets/assets/icons/close.svg": "6e5ce4a400b521af0dd272db92419348",
"assets/assets/icons/listview.svg": "5dee8e0a578ab5acc643d051b9c25701",
"assets/assets/icons/participants.svg": "e03ab47b33ada074e4862a3969951910",
"assets/assets/icons/clock.svg": "04ed312d458a7e72dc0a5430030f40d9",
"assets/assets/icons/calendar.svg": "ce7763f03051bc1d86894b1c34942fbf",
"assets/assets/icons/meetroom_status_booked.svg": "3fbd1d6a0f668f340ebac8bfb5cb621e",
"assets/assets/icons/calendar_time.svg": "230ef3127b1ba1b3a62a6c01c54a2119",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
