const express = require('express');
const router = express.Router();
const app = express();
var fs = require('fs');


//GET Project List
router.get('/listproject',(req,res)=>{
  let rawdata = fs.readFileSync('projectdata.json');
  let project = JSON.parse(rawdata);
  console.log(project);
  res.send(project)
});


module.exports =router;
