'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "35e981b5c913b857c2e06cb4849cdfdf",
"/": "35e981b5c913b857c2e06cb4849cdfdf",
"main.dart.js": "12cc7d11f7b20d8da204d3bc3ef823f1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "4315ccf03a79ed0d42f612384803827d",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "1fdfc04f6ec0173e569796c6db6f8342",
".git/ORIG_HEAD": "71460b869d1c1f2c8915dc46a3356902",
".git/config": "afdeed6c152e5d05980cc15e68ef75bb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/51/b1cf3738fd50f510a3d8d0b6df9d839ba73332": "0e8fed067ca742b7c98a47365e383e95",
".git/objects/0b/ec7d93925810b76cd81910a2b9209e916f5022": "3d868756ec870f3bd18e5d71e43df649",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/b5/2347bab377ac3229c709b1d6f0d66fccc83dc0": "6fb201427e728517413b32cce03f8162",
".git/objects/b5/ac5869d9d736df19cd5d452044bd2ae222e115": "f998d89bc14187efaca20e5565c6237a",
".git/objects/ac/45300646e78ea9a9a15bfd8b8200838438210a": "e70b804b80ed33f218409a684c8b9e95",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/92a04540e02606c6723efc268aef1363ab16e4": "10d963a6d14b4171a9a407b322cf06c9",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/d8c8707cbc112ad53ccbe1b3e4b5b79b5ceb55": "8c406ab4d15e2c1fd5d4bef3a3c34f8b",
".git/objects/e2/4a14cb3c5adf2a8819681bf2d88f2e23032744": "3d2ec7184007cff3c5657472cccdb60d",
".git/objects/e2/147e3718d4cea41282fc837107df21af8fd261": "972225201d0ca58d6846fec4b999de18",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/c7/f16d0f5754682f4fc02881a2dcd17d4e6ce01f": "a22f63c998e21b5c74f196ed894ceec7",
".git/objects/fd/91186bb65bbf28ecb4831336f0c9de02aaf4e4": "f11f81fd4f0b15fd9fc02d94f3360d64",
".git/objects/c6/3e5b182c0f0dac6750d24743ea0e69696e990a": "825a451dde571b9f976a5cc1a35298bb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/ad91f5ce307e84b1a03a9ee5438804c9603e76": "7a8848acfc71febbc1904cbc85f8953a",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/87/fd63690fd5b616e7507a67e7742160a04ef6e7": "a1eb0d71c0af2377d4d95cad255ba406",
".git/objects/80/7ee2a085264cd7a17c1b5ccf3637ffe6f33802": "a6fde9e246a30740160286e0a285290e",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/17/58116030d57acfc02c0f56f02b56684c273d49": "22bb84cecabc1ca5cae127da64d7e0f9",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/26/07f02f2da9a4528aaff33c6c5f8e28c66ba2de": "42f52302df9a8d1db95bc84697c943ab",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/31ea531a06d7f8f566edbbd8c44988180235f4": "21260eb09f3a63a91cf91be2e9457fbf",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/53/5d3e844012cf751b57f40bfd3e6cd94938b390": "4e9f8a397d935090ce994fd8fec4db63",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/674d08314597a7358e40a53014c0bea005a6c4": "02f1403a26128afac0442c2e2d9f537b",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/a44d3015e484a6356543786c8acca90b6f8936": "3520e74dda51acc07c126b664fefb081",
".git/objects/01/9ed586ae78543c1cb9cb6ac3ec5c6567ba947b": "f5f5a53100e328d11e607346c8fa9aed",
".git/objects/97/067285fff337f69a767f76d962bd34d6dc0a13": "aa1654ab19ca0e0eff9805d1892fec77",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/d4/d6379a79a9e83e080787e77e5369c859e2b99a": "d5ed055cec2a76dd531a05bafe20d949",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/d2/34d81f64f6eab80253a2d433e0f2d4c6f738b3": "e0ef4300b12ecd4bcced62ee7b3f23f8",
".git/objects/db/1957c7d0f692f44a380557d56ffa37f8e20a6e": "c4068d897fed6996e5b3186227eebe26",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/cd/d923774fc042f38234445b3e624ab03aa50ea2": "73612914458a3f360808a2714f0c4bbf",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f9/4be919fbe7326a885b9df5e7205eef6fd78ec8": "89d9939dc29d68aeed6372805c5865d6",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/83/941acbcbfc4efcf1aecf759c579a507a1d0297": "8433456974112d849e1e8e15c2d618c8",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/0394ed21f9af7890e349615d3f9fd1e4a3437c": "3c9c30db779a20418b8ab3253f5196cd",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/76/b139621d8d7093bdf39942e09b015e3a196bc7": "1f7f5414fcebf151d8e4f91fa8b72aa1",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/78/1173a46138e9abeb656a73883f478e76456c53": "e62e40e9fbbb355bc7f82fc789ea490d",
".git/objects/7a/54b109709288046c6fae81761fbb416c52f19f": "4173a968d1e3a8f75bd1406e33ccd90f",
".git/objects/14/c0c86b0cef706d99018e53dc98fdb7ee528617": "762163431e6d1116e9277208083673db",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "398739a38861a94006eca9091a528adc",
".git/logs/refs/heads/main": "51751aaf7a27f72ff9debf0037606127",
".git/logs/refs/remotes/origin/main": "dcc3d309104d75d93285cf249df2792f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "71460b869d1c1f2c8915dc46a3356902",
".git/refs/remotes/origin/main": "71460b869d1c1f2c8915dc46a3356902",
".git/index": "486bd677984ed621d2746312a3ff1f5f",
".git/COMMIT_EDITMSG": "31ee69729f50cded788492ace53f364a",
".git/FETCH_HEAD": "86853cb27c66d1967d83926a275e7160",
"assets/AssetManifest.json": "d721636130b6386322b7c20886275c43",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "e188eef501b2160d30ad278361d04233",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "b7e9539d7124c282c5ecbbf79bef1aa9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "af6442dedf502ee929ca07814f580bd7",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/about_img.png": "5861c929480954ea843c1ff652b6303f",
"assets/assets/images/nyun_icon.png": "4bf6c19ae9176e20b8104463199640e7",
"assets/assets/images/dev_img.png": "b6b5ea00e11fb2b73aeb72f0293cc63f",
"assets/assets/images/service3.png": "d9c018a87cd839a0612d11b566e4cc89",
"assets/assets/images/service2.png": "d98f687a6d6a0fba311cae1dc1f8a67a",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/home_btn_img.png": "182a4e93809821c8c0b9dacdb81fdf7f",
"assets/assets/images/service1.png": "48e30a0eae9834668db776f6db8bd5a6",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/contact.jpg": "04f27f32bd30e30ff6210ef7ac3e3349",
"assets/assets/images/home_line.png": "2326d684329fd9353b01ad331326f939",
"assets/assets/images/home_star.png": "53ab27bfaae69815b7e99b3658ec9cfa",
"assets/assets/images/resumeClient.png": "b350131ca2f87a407f1b9a3d667a7108",
"assets/assets/images/resumeTitle.png": "0631733ff7e70a41caf75ca6533e65e5",
"assets/assets/images/home_img.png": "c6f7ce95be35db61b54acbf10dff9add",
"assets/assets/images/serviceBg.png": "8bd22a679ded6ec17761f637addd896a",
"assets/assets/images/resumeFooter.png": "64a986e13ecfd137c3dc6e7c2c71001f",
"assets/assets/images/quote_up.png": "5a23df1efb624e02b12a61cc54114d64",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
