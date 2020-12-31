
self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});

/* 
  This is all the stuff that we want to save in the cache.
  In order for the app to work offline/be installable,
  we have to save not just images but our HTML, JS, and CSS
  as well - anything we want to use when offline.
*/
const ASSETS = [
    "/style.css",
    "/index.html",
    "/goodbye.html",
    "/lib/main.bundle.js",
    "/lib/player-0.0.11.min"
];



let cache_name = "SimiCart"; // The string used to identify our cache

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});
