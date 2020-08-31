const express = require('express');
const router = express.Router();
const app = express();
var fs = require('fs');

// POST Project Data
router.post('/addproject',(req,res)=>{
//res.send("posts works");
console.log('***********req**********',req.body.formData, typeof req.body.formData)
  let json = JSON.stringify(req.body.formData);
  fs.appendFile('projectdata.json', json, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  res.send("Data Saved Successfully")
});


module.exports =router;
