'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bebdad435ff63c6cab76cdcc1ed043a6",
"index.html": "b542f62c43c1e4912cbd0bd660a94d8b",
"/": "b542f62c43c1e4912cbd0bd660a94d8b",
"main.dart.js": "ee6f1c1dd69ed45460e2c225eae31aca",
"signin_callback.html": "2bcdb79a8230fbf01b0df24824c97d6c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "fdb560b353aa82926cb0fc1b1c358df5",
"icons/Icon-192.png": "5825bbcc265851409ebd4257fda4cba0",
"icons/Icon-maskable-192.png": "5825bbcc265851409ebd4257fda4cba0",
"icons/Icon-maskable-512.png": "720645cb813944872ec385e412fd38fd",
"icons/Icon-512.png": "720645cb813944872ec385e412fd38fd",
"manifest.json": "d697a9179b63aa37407213528a4dbe2c",
"assets/AssetManifest.json": "cc12027a58b34d3eadf6d0e8de75b97d",
"assets/NOTICES": "8665b5bac11050b0052e15aaf69217cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a9f0a4f85c22148288701418edf22751",
"assets/fonts/MaterialIcons-Regular.otf": "5fef4d117cc6a9114bd345587f30c3bc",
"assets/assets/map-marker-green-ios.png": "f5b85b1848f8936074aecb3d0250def3",
"assets/assets/cloud_no_network.png": "d18486792b5222c7c046d5d4ef1a2daf",
"assets/assets/floorplan.jpg": "085ce2b3c375f60c8050ca90a601eaa3",
"assets/assets/dot-circle.svg": "1dccc4070443b358d2e528da9606cafb",
"assets/assets/envira.svg": "eb2f912cc81da497a1e2bdf6ee7cfb2f",
"assets/assets/omega.svg": "3f6ffdf6c173cd97628e2381c7982a43",
"assets/assets/pennant.svg": "881a8a0a7f4895fc6d7018798c9e3139",
"assets/assets/closeLarge.svg": "752f0363adf03a2783e3d877ff335e9c",
"assets/assets/yodidesk.png": "6590404d6eb88e2d34af1e84475d9013",
"assets/assets/yodishifts.png": "af372b21920d48f2677ca3a9113f57ec",
"assets/assets/map-marker-yellow.png": "11d48ca51248733a00b31152cfc720da",
"assets/assets/map-marker-red.png": "7000f66b874d31cb3bd96cb89566e4f7",
"assets/assets/battery-three-quarters.svg": "c8733ffcea37e22ff6edd2de935043bf",
"assets/assets/yodidesk_icons/meeting_booking3.svg": "b92c084b651ca9cfdb9095c21b2ca19e",
"assets/assets/yodidesk_icons/add.png": "ac73eee45fa1476a85388117f8262444",
"assets/assets/yodidesk_icons/coffeeMachine.png": "5609133a2ae3509571f44125ef550f0d",
"assets/assets/yodidesk_icons/team_booking.svg": "54cb9dc5bcdfe24b26e3261349a08b61",
"assets/assets/yodidesk_icons/meeting_booking2.svg": "326ff4302a80db19aba3ed14d0a1d871",
"assets/assets/yodidesk_icons/stationery.png": "ee1f607cf568c0f97123a9dff88915e8",
"assets/assets/yodidesk_icons/projector.png": "0990d36458ba07b5a8cc09b651db1f32",
"assets/assets/yodidesk_icons/closeLarge.svg": "752f0363adf03a2783e3d877ff335e9c",
"assets/assets/yodidesk_icons/vodafone_quote.png": "eb834c5477ed439e553fd80799b81b2c",
"assets/assets/yodidesk_icons/meeting_booking.svg": "46dc3c258a1e5133a406da45d6dc0467",
"assets/assets/yodidesk_icons/whiteboard.png": "48bce57e3c95b62c2527c096bb45e4dd",
"assets/assets/yodidesk_icons/desk.svg": "c2fd11ed5acc3d08c95f5ea94700d671",
"assets/assets/yodidesk_icons/home.png": "9dd13a608253959e521dd8868a61f0a4",
"assets/assets/yodidesk_icons/team_booking3.svg": "d18f19ce8656d83003cf29c6d2d40bc0",
"assets/assets/yodidesk_icons/list.png": "24038517a8ca6b2f650d405b1a8699a4",
"assets/assets/yodidesk_icons/team_booking2.svg": "815dd4cf4da779339451f31aef9b0d77",
"assets/assets/yodidesk_icons/workstation.png": "ef4391a6b66feea3db8bbd274fb04e62",
"assets/assets/yodidesk_icons/deskUnavailable.svg": "f2cb39322aac7c67872b0b138b07f516",
"assets/assets/yodidesk_icons/participants.svg": "7807f38a3d97bee5270a4770be8f3a0c",
"assets/assets/yodidesk_icons/single_booking2.svg": "c59442f8fb3a1074d01dadccc5466155",
"assets/assets/yodidesk_icons/single_booking3.svg": "bbd701534376e997beb8346b97ebb704",
"assets/assets/yodidesk_icons/searchColleague.png": "7b35286fa47c1b849b9df242fca1a913",
"assets/assets/yodidesk_icons/checkbox.svg": "3951ac3477aeb899fab4083ba6d6e5a9",
"assets/assets/yodidesk_icons/qr.png": "c84f1eda184f5279135597a56c3b12ba",
"assets/assets/yodidesk_icons/desk_v2.svg": "092e8f352180326cd3e3a31d0f867d63",
"assets/assets/yodidesk_icons/desk_v3.svg": "4653a05dd204aee32e424fa9514e7edb",
"assets/assets/yodidesk_icons/profile.svg": "6236c2e31d8568bf2cec1d1ac965ff50",
"assets/assets/yodidesk_icons/desk_v4.svg": "d5366176964c1518123dff9021c5ee18",
"assets/assets/yodidesk_icons/checkboxSelected.svg": "c6ee4fc829f6807893c039b685835e2d",
"assets/assets/yodidesk_icons/single_booking.svg": "9d7821327068f2f4e10a70efdad9b469",
"assets/assets/yodienergy.png": "19b63829834b7bc94825f30edbeaa933",
"assets/assets/bolt.svg": "0a899e50baa27f44418f621c844e8932",
"assets/assets/valves.png": "dcbae62e68027af5face1641f9a2a54a",
"assets/assets/valves.jpg": "1b5317905aa48b3778ee291e0c5935dd",
"assets/assets/logos/desk_booking_logo.svg": "dd7b7d5db22e967d3b0173af336122e6",
"assets/assets/logos/desk_booking_logo.png": "4e2bbd3eccaff8443abe7d8a2c777c36",
"assets/assets/logos/vodafone/vodafone_quote.png": "c2b7a1ecd560abccd2c26cdd04b50f31",
"assets/assets/logos/vodafone/vodafone_business.png": "c3ba6c28c9411f7a896fabc3e5b0618c",
"assets/assets/logos/vodafone/vodafone_appicon.png": "9d55468443ebc04aeaf75f32ea11e9e9",
"assets/assets/logos/vodafone/vodafone_quote_128.png": "46ccb916937f2482122fdacfdce75ad7",
"assets/assets/logos/yodifem/yodifem_logo.svg": "f5b7baebcc6b9a86ec0e6695833080d5",
"assets/assets/logos/yodifem/desk_background.jpg": "e8868f5df884ee34c530b572c2738c28",
"assets/assets/logos/yodifem/yodifem_appicon.png": "66fea3686c3b97ffd949b224c290e5e5",
"assets/assets/logos/yodifem/yodidesk_logo.svg": "f7128714713b4a26e1bd7b531213d90d",
"assets/assets/logos/yodifem/background.jpg": "3079c35d064daa9af04e4d8e2b8770f3",
"assets/assets/logos/yodifem/yodidesk_logo2.svg": "50be481818de9525117349943fab294b",
"assets/assets/logos/yodifem/yodilogo.png": "dfead78a5b58d7faf7342343ef7e5cea",
"assets/assets/logos/yodifem/yodiwo_logo.svg": "1d3dfbcd543c56af65f3ebb326db4a67",
"assets/assets/frown.svg": "748763759d9212d9b5d1d9b1a13c01d9",
"assets/assets/yoditask.png": "736b170d8b27ecd6fca550309c26e13b",
"assets/assets/info-circle.svg": "9526d52aac595575bb5fed76890e2eb3",
"assets/assets/wave-sine.svg": "bdac249dc096850238bd02bb5825f996",
"assets/assets/lightbulb.svg": "de316e0a485e12ca1147b475b3a16e62",
"assets/assets/resistance.png": "0fa39187ddf58c6faa158a44bf2ee82a",
"assets/assets/font_awesome/solid/list-alt.svg": "5ac250c1183bfa3101facc7352f727e7",
"assets/assets/font_awesome/solid/rotate.svg": "b21bf5317c42ec1f100282349dec0345",
"assets/assets/font_awesome/solid/project-diagram.svg": "1011d37830d70a798d37f18fc2c3666b",
"assets/assets/font_awesome/solid/thumbtack.svg": "266b4d0b8340a22ffaa2c5cd058f9a70",
"assets/assets/font_awesome/solid/edit.svg": "9d59c3a71e11e9bd89d65dd0b376605d",
"assets/assets/font_awesome/solid/history.svg": "50704a6e28542d68b2ffcb1a6676abb9",
"assets/assets/font_awesome/light/object-group.svg": "8a2beb1febedcf67a0ff7dd08798ff4c",
"assets/assets/font_awesome/light/code-branch.svg": "1fb0f44534a17bd8a6d9508afbbad056",
"assets/assets/font_awesome/light/stars.svg": "4401b2c522d1f78ef4137fb90d6fca36",
"assets/assets/font_awesome/light/chair-office.svg": "f945e066d71549dd81db0ac11ec0a185",
"assets/assets/font_awesome/light/window-maximize.svg": "f77c92096440ca928f16391b407f6214",
"assets/assets/font_awesome/light/layer-group.svg": "766d31a88bd0c83c24e1b16e55dfd370",
"assets/assets/font_awesome/light/university.svg": "0c6035562a53753fe482be478e862d7b",
"assets/assets/font_awesome/light/building.svg": "7920b3b70b5529f6860ce2d144e2f97f",
"assets/assets/font_awesome/regular/box-full.svg": "e7dff802c5c9c260b67073b43241b3af",
"assets/assets/font_awesome/regular/link.svg": "654b6d6a6030c83a18091ee2b0d51967",
"assets/assets/thumbtack.svg": "266b4d0b8340a22ffaa2c5cd058f9a70",
"assets/assets/map-marker-green.png": "eb09daa0e730c3bee804d87851af2446",
"assets/assets/humidity.svg": "08cb99848eedc650fc6b6e89c544a02d",
"assets/assets/map-marker-red-ios.png": "5447e32b2b9fa047afc29ae14599a10f",
"assets/assets/running.svg": "58e976cf0263abdf44cfbf6033cdb20e",
"assets/assets/infoLarge.svg": "5c9893d7cbc7caafb3e71fa2d50bd342",
"assets/assets/yodisense.png": "50815ab3e082bff09f15e8e66e6ee293",
"assets/assets/adjust.svg": "2cf800128b1235e925758b4b5c1994c7",
"assets/assets/success.svg": "f9672290348210c7adef1397b971a758",
"assets/assets/error.svg": "b279e67d5cf89fd91eb63ac19c1a2ef1",
"assets/assets/temperature-frigid.svg": "621beafce175914677ef66856ab7631f",
"assets/assets/outline_filter_list_crossed.png": "8ca68c2e3b4d1112e732b98f2d76ccb5",
"assets/assets/light-switch-on.svg": "0611db0cb2399e0bde53657a0038f89b",
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
