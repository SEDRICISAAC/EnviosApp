const express = require('express');
const mongoose=require('mongoose');
const app = express();
const db=mongose.conect('mongodb://localhost/bookAPI');
const bookRouter=express.Router(); 
const port = process.env.PORT || 3000;
const Book=require('./models/bookModel');

app.get('/', (req, res) => {
  res.send('Bienvenidos al Yavirac Dog!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
