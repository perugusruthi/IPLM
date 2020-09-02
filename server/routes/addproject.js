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
  };
  let projectentry = JSON.stringify(data);
  fs.appendFile('projectdata.json', projectentry, function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  res.status(200).send("Data Saved Successfully");







});


module.exports =router;
