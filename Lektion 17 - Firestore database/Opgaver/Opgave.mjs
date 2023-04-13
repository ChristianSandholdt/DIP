import express from 'express';
const app = express();
import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

const port = 8000;
// let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" }, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }];
// let chatRum = [{ navn: "rum1" }, { navn: "rum2" }];

//Tillad cors requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCZwl13SS0arLhihgqjgmsNwp40_H1W8XY",
    authDomain: "myproject-eab3f.firebaseapp.com",
    projectId: "myproject-eab3f",
    storageBucket: "myproject-eab3f.appspot.com",
    messagingSenderId: "535498819767",
    appId: "1:535498819767:web:2ec76c60c038fa25722532",
    measurementId: "G-RWWE89N5Z1"
  };
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);


async function getBesked() {
    let beskedCol=collection(db,'Beskeder')
    let beskeder = await getDocs(beskedCol)

    let beskedList = beskeder.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return beskedList;
}

async function searchBeskeder(chatrum) {
    let beskedCol=collection(db, 'beskeder');
    let q = query(beskedCol, where('chatrum', '==', chatrum));
    let beskeder = await getDocs(q);

    let beskedList = beskeder-docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return beskedList;
}

async function opretBesked(besked, chatrum, afsender) {
    addDoc(collection(db,'Beskeder'), {besked: besked, chatrum, afsender})
}

//Express endpoints

//henter beskeder fra firebase
app.get('/beskeder', async (request, response) => {
    const beskeder = await getBesked();
    response.render('index', {beskeder: beskeder})
})

app.get('/searchBeskeder', async (request, response) => {
    let chatRum = request.query.chatrum;
    const beskeder = await searchBeskeder(chatRum);
    response.render('index', {beskeder: beskeder})
})

app.get('/addBeskedPage', async(request, response) =>  {
    response.render('addBesked')
})

//Opretter en besked og sender den til firebase databasen
app.post('/addBesked', async (request, response) => {
    let {besked, chatrum, afsender} = request.body;
    console.log(request.body);
    await opretBesked(besked, chatrum, afsender)
    response.redirect('/beskeder')
})


app.listen(port);
console.log('Lytter på port ' + port + ' ...');