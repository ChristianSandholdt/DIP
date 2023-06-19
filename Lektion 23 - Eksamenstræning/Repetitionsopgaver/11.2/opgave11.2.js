// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
const tableUsers = document.createElement("table")
const tablePosts = document.createElement("table")


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function createListOfPeople() {
    const users = await get(userUrl)
    const tr = document.createElement("tr")
    const thName = document.createElement("th")
    const thPost = document.createElement("th")
    thName.textContent = "Name"
    thPost.textContent = "Post"
    tr.appendChild(thName)
    tr.appendChild(thPost)
    tableUsers.appendChild(tr);
    users.forEach(user => {
        const tr = document.createElement("tr")
        const tdName = document.createElement("td")
        const tdPost = document.createElement("td")
        tdName.textContent = user.name
        tdPost.textContent = user.id
        tr.appendChild(tdName)
        tr.appendChild(tdPost)
        tableUsers.appendChild(tr)
    })
    document.body.appendChild(tableUsers)
}
createListOfPeople()

//Ligger body og title oveni så man bibeholder de gamle på sin skærm
// async function getPost(id) {
//     try {
//     const posts = await get(postUrl + id)
//     const table = document.createElement("table")
//     const tr = document.createElement("tr")
//     const thTitle = document.createElement("th")
//     thTitle.textContent = "Title"
//     const thBody = document.createElement("th")
//     thBody.textContent = "Body"
//     tr.appendChild(thBody)
//     tr.appendChild(thTitle)
//     table.appendChild(tr)
//     posts.forEach(post => {
//         const tr = document.createElement("tr")
//         const tdTitle = document.createElement("td")
//         const tdBody = document.createElement("td")
//         tdTitle.textContent = post.title
//         tdBody.textContent = post.body
//         tr.appendChild(tdTitle)
//         tr.appendChild(tdBody)
//         table.appendChild(tr)
//     })
//     document.body.appendChild(table)
// }
// catch (error) {
//     console.log(error)
// }
// }

//Ændrer dataen så der kun står et sæt body og titles
async function getPost(id) {
    try {
        document.body.appendChild(tablePosts);
        const posts = await get(postUrl + id)
        tablePosts.innerHTML = posts.map(post => `<tr><td>${post.title}</td><td>${post.body}</td></tr>`).join('');
    }
    catch(error) {
        console.log(error)
    }
}


tableUsers.addEventListener('click', e => {
    if (e.target.tagName === 'TD') {
        getPost(e.target.textContent);
    }
});