const express = require('express');

const app = express();
// para utilizar nuestro motor de vistas debemos utilizar el metodo set del objeto app
// para que express sepa que es un motor de vista el que vamos a montar
app.set('view engine','ejs');

// asi conecto mi con otra carpeta para poder utilizar sus propiedades
app.use('/public',express.static('assets',{
// que ya no genere respuesta etag para el cache
  etag: false
  maxAge: '5h'
})); // middleware


app.get('/',function(req,res){
 res.render('index');
});

app.listen(3000);



// podemos establecer un tiempo de los datos guardados en cahce   con  maxAge:''



// res.sendFile recibe como argumento el archivo que queremos enviar
// podemos especificar con un  json de rura la carpeta que requerimos  (debemos espciaficar la ruta asi la carpeta de nuestro proyecto )

// con la variable __dirname obtemos la ruta asia nuestro proyecto


  // con esto le decimos al servido que envie una ruta con el mensaje


// instruciones basicas para crear un servidor http con Express   const app = express();  const express = require('express');
