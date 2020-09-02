const express = require('express');
const router = express.Router();
const app = express();
var fs = require('fs');


//GET Project List
router.get('/listproject',(req,res)=>{
  var obj = JSON.parse(fs.readFileSync('projectdata.json', 'utf8'));
  console.log(obj);
  res.send(obj);


});


module.exports =router;
