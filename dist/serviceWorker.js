importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

if (workbox) {
    console.log("Yay! Workbox is loaded !");
    workbox.precaching.precacheAndRoute([]);

    /*  cache images in the e.g others folder; edit to other folders you got
    and config in the sw-config.js file
    */
    workbox.routing.registerRoute(
        /(.*)others(.*)\.(?:png|gif|jpg)/,
        new workbox.strategies.CacheFirst({
            cacheName: "images",
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );
    /* Make your JS and CSS âš¡ fast by returning the assets from the cache,
     while making sure they are updated in the background for the next use.
    */
    workbox.routing.registerRoute(
    // cache js, css, scc files
        /.*\.(?:css|js|scss|)/,
        // use cache but update in the background ASAP
        new workbox.strategies.StaleWhileRevalidate({
            // use a custom cache name
            cacheName: "assets",
        })
    );

   //  /* Install a new service worker and have it update
   // and control a web page as soon as possible
   //  */
   //  workbox.precaching.precacheAndRoute([
   //      'template-offline.html',
   //      'styles/maintenance.css'
   //  ]);

   //  workbox.routing.setCatchHandler(({ event }) => {
   //      switch (event.request.destination) {
   //          case 'document':
   //              return caches.match('template-offline.html');
   //              break;
   //          default:
   //              return Response.error();
   //      }
   //  });

    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

} else {
    console.log("Oops! Workbox didn't load");
}