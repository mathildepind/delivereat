const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();


const menu =
  {
  item : 'Spring rolls',
  price : 3
};


app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.use('/static', express.static('static'));


app.get('/hello_world', function(req, res) {
  res.render('template', req.body);
});


app.get('/', function(req, res) {
  res.json(menu);
});



app.listen(5000, function(){
  console.log('I am listening on port 5000');
});
