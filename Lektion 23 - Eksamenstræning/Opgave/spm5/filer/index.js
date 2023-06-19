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

function changeNumber(tlfnumber) {
    let number = document.getElementById("input").value;
    let oldNumber = tlfnumber;
    let data = {Telefon: number, id: oldNumber};
    console.log(number)
    post("/changeNumber",data)
        .then(id => {
            let li = document.getElementById(id)
            li.textContent = number
        }).catch(err => console.log(err))
}
