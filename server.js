const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const addproject = require('./server/routes/addproject');
const listproject = require('./server/routes/listproject');


app.use(express.static(path.join(__dirname,'dist/Iplm')));
app.post('/addproject',addproject);
app.get('/listproject',listproject);

// app.get('/posts',(req,res)=>{
// res.sendFile(path.join(__dirname,'dist/Iplm/index.html'))
// });
app.route('/api/cats').post((req, res) => {
  res.send(200,{
    cats: [{ name: 'lilly' }, { name: 'lucy' }],
  })
});
app.route('/login').get((req, res) => {
  var user_name="test";
  var password="pass";
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

const port = process.env.PORT || 4200;
app.listen(port,(req,res)=> {
console.log('Running on port..........');
console.log(port);
});
