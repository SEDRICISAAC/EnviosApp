const  { Router } = require('express');
const Envio = require('../modelo/Envio');

const routerApi = Router();

routerApi.route('/procesar')
  .get((req, res) => {
    let ubicaciones = new Envio();

    res.json(ubicaciones);
  });


module.exports = routerApi;