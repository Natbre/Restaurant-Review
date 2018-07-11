
self.addEventListener('fetch', function(event){
	event.respondWith(
		fetch(event.reuest).then(function(response){
			if(response.status===404){
				return fetch ('Error');
			}
			return response;
		}).catch(function(){
			return new Response('Uh totally failed');
		})
		);
})


self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(restaurant-static-v1).then(function(cache){
			return cache.addAll([
		'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'css/styles.css',
        'index.html',
        'restaurant.html',
        'data/restaurants.json'
		])
		}))
})

self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			if(response) return response;
			return fetch(event.request);
		})
		);
});