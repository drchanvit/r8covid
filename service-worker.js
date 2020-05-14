if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4ae157d4b232487e581bc542e90428fe","url":"index.html"},{"revision":"08742cce1f9a3b34d38399b8fb426c03","url":"precache-manifest.08742cce1f9a3b34d38399b8fb426c03.js"},{"revision":"903b016c8fcf8d63dd21c8137c085895","url":"static/js/2.4a1e6586.chunk.js"},{"revision":"b2035d2cc2da45bd0d42e47d25dabfa5","url":"static/js/main.27c86d71.chunk.js"},{"revision":"9ccf511a8d2df1c77a616fb1cff1a9e2","url":"static/js/runtime-main.13904200.js"}]);

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