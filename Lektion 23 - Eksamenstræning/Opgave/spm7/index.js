async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

let url = "https://www.tronalddump.io/random/quote"

const div = document.getElementById("result")
async function showThreeQuotes() {
    try {
    for (let i = 0; i < 3; i++) {
        const quote = await get(url);
        const p = document.createElement('p');
        p.id = i;
        p.textContent = `${quote.value} Tag: ${quote.tag}`
        div.appendChild(p)
    }} catch {
        err => console.log(err)
    }
}

function createButton(){
    const randomButton = document.createElement("button");
    randomButton.textContent = "Show 3 new random quotes";
    document.body.appendChild(randomButton);

    randomButton.onclick = async function(){
        for (let i = 0; i < 3; i++){
            let quote = document.getElementById(""+i);
            quote.remove();
            console.log(i);
        }
        showThreeQuotes();
    }
}

showThreeQuotes();
createButton();