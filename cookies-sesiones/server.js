const express = require('express');
// configurar la cookie session importamos
const cookieSession = requie('cookie-session'); // es un mildeware que se encarga de incriptar las cokies para que las guarde el navegador

const app = express();

app.use(cookieSession({
  name: 'session',
// keys para firmar las cookies un array en que le puedo agregar cualquier cosa
// para firmar la llave y para que no sea tan vulnerable
// la cokkies se guardan en el cliente por eso tiene que ir incriptadas
// que no sean lejibles si no asi randon    (con estas llaves podemos volver a estender el valor original de la cookie)
  keys: ['43ufdishfoisdhfotg','1342r5321t54ref']
}));

// servidor web para que cuente las veces que as entrado a la pagina

app.get('/',function(req,res){

  req.session.visits = req.session.visits || 0;

  req.session.visits = req.session.visits + 1;

  res.send(`${req.session.visits} visita(s)`);
});

app.listen(3000);
