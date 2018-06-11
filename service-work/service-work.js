const cacheStrageKey = 'blog-pwa-2018060100'

const cacheList = [
    '/',
    '/index.html',
    '/index.css'
]

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheStrageKey)
        .then(caches => caches.addAll(cacheList))
        .then(() => {
            self.skipWaiting()
            // console.log(navigator)
        })
    )
})

this.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response){
            if(response != null) {
                return response
            } 
            return fetch(e.request.url)
        }) 
    )
})
