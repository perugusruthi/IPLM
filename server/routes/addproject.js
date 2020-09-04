const express = require('express');
const router = express.Router();
const app = express();
var fs = require('fs');
var data ={};
// POST Project Data
data.employees = [];
router.post('/addproject',(req,res)=>{
  console.log('***********req**********',req, req.body)
  data= {
    ProjectName: req.body.ProjectName,
    ProjectDescription: req.body.ProjectDescription,
    ProjectDate: req.body.ProjectDate,
    CategoryID: req.body.CategoryID,
    Project_Catchphrases: req.body.Project_Catchphrases,
    ProjectId:null
  };
 // let projectentry = JSON.stringify(data);
  var obj = JSON.parse(fs.readFileSync('projectdata.json', 'utf8'));
  console.log(obj);
  var objarr =[];
  objarr = obj;
  objarr.push(data);

  for (i = 0; i < objarr.length; i++) {
    objarr[i]['ProjectId'] =i+1;
  }

  console.log("******************",objarr)
  let projectentry = JSON.stringify(objarr);

  fs.writeFileSync('projectdata.json', projectentry, function (err) {
    if (err) throw err;
  });

  res.status(200).send("Data Saved Successfully");

});


module.exports =router;
