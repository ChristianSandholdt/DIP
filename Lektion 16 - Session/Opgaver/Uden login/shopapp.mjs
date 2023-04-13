import express from 'express';
const app = express();
import sessions from 'express-session';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 20 }, resave: false }));
app.use(express.static(__dirname + '/filer'));
app.use(express.json())

let products = [
    {name: 'Coffee', price: 69.50, id: 1},
    {name: 'Tea', price: 10.69, id: 2},
    {name: 'Fortnite Premium', price: 21.69, id: 3},
    {name: 'COD MW2', price: 85.99, id: 4},
    {name: 'Phone', price: 150.69, id: 5},
]
let data = {products: products}

app.post('/add', (request,response) => {
    const {id} = request.body;
    let kurv = request.session.kurv;
    if (kurv == undefined) {
        kurv = [];
    }
    kurv.push(id);
    request.session.kurv = kurv;
    response.status(201).send(['added'])
    for (let i = 0; i < kurv.length; i++){
        console.log(kurv[i])
    }
})

app.get('/index', (request, response) => {
    let kurv = request.session.kurv;
    if (kurv == undefined) {
        kurv = [];
    }
    let valueForTemplate = {kurv:kurv, products: products};
    response.render('index', valueForTemplate)
})

app.get('/index', (req, res) => res.render('index', data));
app.listen(6969, () => console.log('up and running yo'));