let express = require('express');
let app = express();
let pug = require('pug');
let path =  require('path');
const { url } = require('inspector');
let URL = 'https://randomuser.me/api/?nat=dk&results=100'

async function main(){
    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '/views'));
    
    let data = await get(URL);
    let valuesForTemplate = {data: data}
    console.log(data);
    
    console.log(pug.renderFile(path.join(__dirname, '/views/user.pug'), valuesForTemplate));
    
    app.get('/', (req, res) => res.render('user', valuesForTemplate));
    app.listen(8000, () => console.log('Kører...'));
}

main()


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}