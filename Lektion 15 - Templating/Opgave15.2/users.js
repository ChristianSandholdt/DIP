let express = require('express');
let app = express();
let pug = require('pug');
let path =  require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

let u1 = {navn: 'Freddy', alder: 80, tlf: 12345678};
let u2 = {navn: 'Birthe', alder: 60, tlf: 87654321};
let u3 = {navn: 'Mette', alder: 40, tlf: 12121212};
let users = [u1,u2,u3];
let data = {brugere: users}

console.log(pug.renderFile(path.join(__dirname, '/views/user.pug'), data));

app.get('/', (req, res) => res.render('user', data));
app.listen(8000, () => console.log('Kører...'));