let listOfPersons = new Array;
let indtastetNavn = document.querySelector("#navn")
let indtastetAlder = document.querySelector("#alder")
let personer = document.querySelector("#personer")
let button = document.querySelector("button");

button.addEventListener('click', () =>{
    let navn = indtastetNavn.value;
    let alder = indtastetAlder.value;
    listOfPersons.push({navn, alder});
    updatetable()
    indtastetAlder.value = "";
    indtastetNavn.value = "";
})

function updatetable(){
    let table = '<table>';
    table += '<tr><th>Navn</th><th>Alder</th></tr>'
    for (let person of listOfPersons){
        table += '<tr><td>' + person.navn + '</td><td>' + person.alder + '</td></tr>';
    }
    table += '</table>'
    personer.innerHTML = table;
}
