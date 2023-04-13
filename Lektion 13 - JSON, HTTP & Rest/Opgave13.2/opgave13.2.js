const seBeskederIRum = "https://beskedserver.azurewebsites.net/api/SoegBeskeder/"
const chatrumURL = "https://beskedserver.azurewebsites.net/api/chatRum"
const alleBeskederURL = "https://beskedserver.azurewebsites.net/api/Beskeder/"
const table = document.createElement("table");
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
    if (respons.status !== 204) // Created
        throw new Error(respons.status);
    return await respons.text();
}
async function createSite(){
    //Lav chatrumsknapperne
    const chatrum = await get(chatrumURL);
    let i = 1;
    chatrum.forEach(cr => {
        const newButton = document.createElement("button");
        newButton.textContent = cr.navn;
        newButton.id = i;
        i++;
        document.body.appendChild(newButton);
        newButton.onclick = function(){
            deleteAndFillList(seBeskederIRum + cr.navn)
        }
    })
    //Hardcode tekstfelter og knap til post
    const postButton = document.createElement("button");
    postButton.onclick = function () {
        let dataForPost = {chatrum: rumfelt.value, Tekst: tekstfelt.value}
        post(alleBeskederURL + rumfelt.value,dataForPost)
    }
    const tekstfelt = document.createElement("textarea");
    const rumfelt = document.createElement("textarea");
    const labelTekstfelt = document.createElement("label")
    const labelChatRum = document.createElement("label")
    postButton.textContent = "Post"
    labelTekstfelt.textContent = "Besked"
    labelChatRum.textContent = "Chatrum"
    //Div til chatrummsknapper
    const div1 = document.createElement("div")
    div1.appendChild(postButton);
    div1.appendChild(document.createElement("br"));
    div1.appendChild(labelTekstfelt)
    div1.appendChild(tekstfelt)
    //Div til tekfelter, labels og postknap
    const div2 = document.createElement("div")
    div2.appendChild(labelChatRum)
    div2.appendChild(rumfelt)
    //Table til visning af beskeder i en ny div
    const div3 = document.createElement("div");
    div3.appendChild(table);
    const tr = document.createElement("tr");
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const th3 = document.createElement("th")
    th1.textContent = "Chatrum"
    th2.textContent = "ID"
    th3.textContent = "Besked"
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    table.appendChild(tr)
    
    

    //Linjeskift for syns skyld
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

    //Append divs til bodyen
    document.body.appendChild(div1)
    document.body.appendChild(div2)
    document.body.appendChild(div3)
}

async function deleteAndFillList(url){
    table.innerHTML = ""; 

    const beskeder = await get(url);
    beskeder.forEach(b => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        td1.textContent = b.chatRum;
        td2.textContent = b.id;
        td3.textContent = b.tekst;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
})
}


createSite();
deleteAndFillList(alleBeskederURL);


