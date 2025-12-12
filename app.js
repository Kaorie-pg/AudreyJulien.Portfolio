var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
const port = parseInt(process.env.PORT, 10) || 3000;

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

app.listen(port, () => {
  console.log(`Portfolio en ligne sur http://localhost:${port}`);
});

function loadSecret() {
  if (process.env.APP_SECRET) return process.env.APP_SECRET;
  const filePath = process.env.APP_SECRET_FILE || '/run/secrets/app_secret';
  try {
    const value = fs.readFileSync(filePath, 'utf8').toString().trim();
    return value;
  } catch (err) {
    return null;
  }
}

app.locals.APP_SECRET = loadSecret();