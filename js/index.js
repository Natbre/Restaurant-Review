
IndexController.prototype._registerServiceWorker= function () {
  if(!navigator.serviceWorker) return;
  navigator.serviceWorker.register('sw.js').then(function(){
    console.log('Registration worked!');
  }).catch(function(){
  });