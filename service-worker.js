if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"1da6b99ffb8bf4b0b5cd1779ede0e173","url":"index.html"},{"revision":"4269454f1020f9ee069fc37bb078c4de","url":"precache-manifest.4269454f1020f9ee069fc37bb078c4de.js"},{"revision":"903b016c8fcf8d63dd21c8137c085895","url":"static/js/2.4a1e6586.chunk.js"},{"revision":"4263af5172bb7d68894fd689da5fc446","url":"static/js/main.f6e7a40b.chunk.js"},{"revision":"9ccf511a8d2df1c77a616fb1cff1a9e2","url":"static/js/runtime-main.13904200.js"}]);

    /* custom cache rules */
     workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}