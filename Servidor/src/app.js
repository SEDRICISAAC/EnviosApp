const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(express.Router()); 
app.set('port', 3000);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//rutas

app.use(require('./rutas/ruta.js'));





app.listen(app.get('port'), () => {
  console.log(`Running on port ${app.get('port')}`);
});

