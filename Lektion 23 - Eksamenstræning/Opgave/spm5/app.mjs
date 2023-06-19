import express from 'express';
import session from 'express-session'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'templates'));

app.use(express.static(__dirname + '/filer'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));

app.post('/changeNumber', function (request, response) {
    const tlf = request.body.Telefon;
    const id = request.body.id;
    for (let i = 0; i < kontakter.length; i++) {
        if (kontakter[i].telefonnr == id) {
            kontakter[i].telefonnr = tlf;
            break;
        }
    }
    response.status(201).send(id);
});

//Lav en liste af kontakter som vises på serveren og holdes ved lige serverside

let kontakter = [
    {navn: "Jens", telefonnr: 11111111},
    {navn: "Martin", telefonnr: 12121212},
    {navn: "Bill", telefonnr: 13131313},
    {navn: "Gwion", telefonnr: 14141414},
    {navn: "Krølle", telefonnr: 15151515}
]


app.get('/', function (request, response) {
    let data = {users: kontakter}
    response.render("index", data);
});


app.listen(8080);

console.log('Lytter på port 8080 ...');
