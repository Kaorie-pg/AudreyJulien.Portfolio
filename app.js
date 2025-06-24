var express = require('express');
var app = express();

const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
   res.render('index', {minimalNavbar: false});
});

app.get('/projets/runathon', (req, res) => {
  res.render('projets/runathon', { minimalNavbar: true });
});

app.get('/projets/foreigngineer', (req, res) => {
  res.render('projets/foreigngineer', { minimalNavbar: true });
});

app.get('/projets/glimmerwood', (req, res) => {
  res.render('projets/glimmerwood', { minimalNavbar: true });
});

//app.listen(port, () => {
  //console.log(`Portfolio en ligne sur http://localhost:${port}`);
//});
