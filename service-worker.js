if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"63b316c5d2f70ced45bcbda10fd25eb0","url":"index.html"},{"revision":"385f4a03765292db6b80a59969515f49","url":"precache-manifest.385f4a03765292db6b80a59969515f49.js"},{"revision":"903b016c8fcf8d63dd21c8137c085895","url":"static/js/2.4a1e6586.chunk.js"},{"revision":"41b1dee6a4b5db3053cae995d0259344","url":"static/js/main.675c5bfc.chunk.js"},{"revision":"9ccf511a8d2df1c77a616fb1cff1a9e2","url":"static/js/runtime-main.13904200.js"}]);

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