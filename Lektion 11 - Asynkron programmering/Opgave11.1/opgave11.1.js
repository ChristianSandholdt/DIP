// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

//Med async
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

//Uden brug af async
function getWithoutAsync(url) {
    fetch(url)
    .then(respons => {
        if (respons.status !== 200) //OK
            throw new Error(respons.status)
        return respons.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

getWithoutAsync(userUrl)

get(userUrl)
    .then(data => data.forEach(d=> console.log(d)))
    .catch(error => console.log(error));


