import express from 'express';
import session from 'express-session'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(__dirname + '/filer'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true,cookie: { maxAge: 1000 * 60 * 20 }, resave: true}));

app.post('/add', function (request, response) {
    const person = request.body;
    let people = request.session.people;
    if (people == undefined) {
        people = [];
    }
    people.push(person);
    request.session.people = people;
    response.status(201).send(`${people.length-1}`);
});

app.get('/', function (request, response) {
    let people = request.session.people;
    if (people === undefined) {
        people = []
    }
    response.render("index",{title: 'Personer',message: 'Personer'});
});



app.listen(8080);

console.log('Lytter på port 8080 ...');
