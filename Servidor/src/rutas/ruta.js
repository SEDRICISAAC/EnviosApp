const  { Router } = require('express');

const router = Router();

router.get('/procesar')
 .get((req, res) => {
   const data = {
     "name":"Pao",
   }
    return res.send('data')
    
  
});
module.exports = router;