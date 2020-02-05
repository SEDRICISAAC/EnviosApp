const express = require('express');
const morgan = require('morgan');
const app = express();

//const sillaRouter=express.Router(); 
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.urlencoded({extends:false}))
//const silla=require('./silla');



//sillaRouter.route('/procesar')
 // .get((req, res) => {
   // const{query} = req;
   // mesa.find(query, (err, books) => {
   //   if (err){
    //    return res.send(err);
    //  }
    //  return res.send(mesa)
 // });
//});
//app.use('/api', sillaRouter);



app.get('/', (req, res) => {
  return res.send('holaaa');
  }
);

app.listen(app.get('port'), () => {
  console.log(`Running on port ${app.get('port')}`);
});

