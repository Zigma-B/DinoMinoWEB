//imports
importScripts('/assets/js/sw-util.js');


//variables del caches
const cache_estatico = 'static-v1';
const cache_dinamico = 'dinamic-v1';
const cache_inmutable = 'inmutable-v1';

//apps_shell
const app_shell = [
    '/',
    '/index.html',
    '/home.html',
    '/assets/css/style.css',
    '/assets/img/Logo2.png',
    '/assets/img/logoVersion2.png',
    '/assets/js/auth.js',
    '/assets/js/home.js',
    '/assets/js/register.js'


];

const app_shell_inmutable = [
    'https://code.jquery.com/jquery-3.6.0.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/axios/dist/axios.min.js',
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
]

//install
self.addEventListener('install',evnt=>{
    //creacion del cache estatico
    const cacheStatic = caches.open(cache_estatico).then(cache=>{
        cache.addAll(app_shell);
    });

    //creacion del cache inmutable
    const cacheinmutable = caches.open(cache_inmutable).then(cache=>{
        cache.addAll(app_shell_inmutable);
    });
    //esta instruccion esperara a que se terminen de ejecutar y se le mandan los dos arreglos anteriores 
    evnt.waitUntil(Promise.all([cacheStatic,cacheinmutable]));
});

//activate 
self.addEventListener('activate',evnt=>{
    const respuesta = caches.keys().then(keys=>{
        keys.forEach(key=>{
            if (key!== cache_estatico  && key.includes('static')){
                return caches.delete(key);
            }
        });

    });
    evnt.waitUntil(respuesta);
});

//Evento sync 
//normal mente es util cuando se pierde la conexion y la recuperamos 
self.addEventListener('sync',evnt=>{//cuando se recupere la conexion se van a disparar los tags
    console.log(`Se recupero la conexión: ${evnt}`);//mensaje de conexion recuperada
    console.log(evnt.tag);// esto hara los posteos sin conexion 
});

//Evento push:manejar las push notification 
self.addEventListener('push',evnt=>{
    console.log('Notificacion resivida')
});

//estrategia del cache 

self.addEventListener('fetch', evnt=>{
    //verificacion si exite en el cache 
   const respuestaExiste = caches.match(evnt.request).then(resp=>{
        if(resp){
            return resp;
        }else{
            
            return fetch(evnt.request).then(newResponse=>{
                return updateCacheDinamic(cache_dinamico, evnt.request,newResponse);
            });
        }

    })
    evnt.respondWith(respuestaExiste);


});

