const trumpURL = "https://www.tronalddump.io/random/quote"
const picOfTrump = "https://globalnews.ca/wp-content/uploads/2022/12/5462a86495fdf134-e1671134597130.jpg?quality=85&strip=all"
const img = new Image;
const goAway = document.createElement("button");
const trumpButton = document.createElement("button");



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

async function getTrump() {
    for (let i = 0; i < 3; i++) {
        const trump = await get(trumpURL);
        const p = document.createElement('p');
        p.id = i;
        p.textContent = trump.value + " - " + "Tag: " + trump.tags + " - " + trump._embedded.source[0].url;
        document.body.appendChild(p);
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
        getTrump();
    }
}

function showMeTrump(){
    trumpButton.textContent = "show me trump!"
    document.body.appendChild(trumpButton);

    trumpButton.onclick = function() {
        img.src = picOfTrump;
        document.body.appendChild(img)
        trumpButton.disabled = true;
        goAway.disabled = false;
    }
}

function makeHimGoAway(){
    goAway.textContent = "get him away";
    document.body.appendChild(goAway)
    goAway.onclick = function() {
        img.remove();
        trumpButton.disabled = false;
        goAway.disabled = true;
    }
}

getTrump();
createButton();
showMeTrump();
makeHimGoAway();


