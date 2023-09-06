// mi sercidor es un proveedor de recursos asi lo tengo que recordar
// los recursos pueden ser imagenes scrip de codigo archivos css etc
// el pricimpal achivo que se envia atraves del servidor es html

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// ahora usan el objecto app de Express pedimos que utilice el analizador de body_parser
app.use( bodyParser.urlencoded({extend: true}) );

// BACTLIE STRING QUE SOPORTA INTERFERENCIA CON INTERPOLACION CON SIGNO DE PESO $ Y LAS LLAVES {DENTRO VA CODIGO JS}

app.get('/saludo',function(req,res){
  res.send(`Hola ${req.query.name}`);
});


// analizador de cuerpo express
//instalar body parshel
app.post('/',function(req,res){
  res.send(`Hola2 ${req.body.name}`);
     req.body
});



// objecto escucha listen
app.listen(3000);
