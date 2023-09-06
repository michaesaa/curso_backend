// libreria http
// crer servidor

// para decargar la libreria (express) es npm install express
// Express es el framework web más popular de Node,
// y es la librería subyacente para un gran número de otros frameworks web de Node populares.
//  Proporciona mecanismos para: Escritura
// de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas)

const http = require('http');

function responderPeticion(request,response){
  response.end('Hola mundo');
}

let server = http.createServer(responderPeticion);

// evento de escucha para dar respuesa ade nuestro servicio
server.listen(3000);
