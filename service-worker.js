const CACHE='canzos-manager-v3';
const FILES=['./','./index.html','./styles.css','./config.js','./app.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==location.origin)return;
 const path=new URL(event.request.url).pathname;
 const refreshFirst=event.request.mode==='navigate'||/\\/(app\\.js|index\\.html|styles\\.css)$/.test(path);
 if(refreshFirst){
  event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:'no-store'});if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}return response}catch(error){return (await caches.match(event.request))||Response.error()}})());
 }else{
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
 }
});