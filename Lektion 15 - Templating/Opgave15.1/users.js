let express = require('express');
let app = express();
let pug = require('pug');
let path =  require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

let user = {navn: 'Freddy', alder: 80, tlf: 12345678};
console.log(pug.renderFile(path.join(__dirname, '/views/user.pug'), user));

app.get('/', (req, res) => res.render('user', user));
app.listen(8000, () => console.log('Kører...'));