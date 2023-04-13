let express = require('express');
let app = express();
let pug = require('pug');
let path =  require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

let u1 = {navn: 'Freddy', alder: 80, tlf: 12345678, nationalitet: 'DK'};
let u2 = {navn: 'Birthe', alder: 60, tlf: 87654321, nationalitet: 'DK'};
let u3 = {navn: 'Mette', alder: 40, tlf: 12121212, nationalitet: 'DK'};
let u4 = {navn: 'Henrik',alder: 58, tlf: 13131313, nationalitet: 'DK'}
let u5 = {navn: 'Christian',alder: 22, tlf: 14141414, nationalitet: 'DK'}
let u6 = {navn: 'Sofie',alder: 21, tlf: 15151515, nationalitet: 'DK'}
let u7 = {navn: 'Louise',alder: 50, tlf: 16161616, nationalitet: 'DK'}
let u8 = {navn: 'Gewion',alder: 22, tlf: 17171717, nationalitet: 'DK'}
let u9 = {navn: 'Bill',alder: 25, tlf: 18181818, nationalitet: 'DK'}
let u10 = {navn: 'Penner',alder: 58, tlf: 19191919, nationalitet: 'DK'}

let users = [u1,u2,u3,u4,u5,u6,u7,u8,u9];
users.push(u10) //Bruges til at teste om listen opfylder kravet om at have 10 personer
let data = {brugere: users}

console.log(pug.renderFile(path.join(__dirname, '/views/user.pug'), data));

app.get('/', (req, res) => res.render('user', data));
app.listen(8000, () => console.log('Kører...'));