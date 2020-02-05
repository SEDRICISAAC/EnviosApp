const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.Router()); 
app.set('port', 3000);
app.use(morgan('dev'));


//rutas
app.use(require('./rutas/ruta.js'));





app.listen(app.get('port'), () => {
  console.log(`Running on port ${app.get('port')}`);
});

