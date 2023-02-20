// Tilføj kode for opgave 4.1 - 4.5 her!

//4.1
for (let p of document.querySelectorAll('p')) {
    p.style.color='red';
}
for (let l of document.querySelectorAll("li")){
    l.style.color='brown';
}

//4.2
for (let p of document.querySelectorAll('p:nth-child(odd)')) {
    p.style.color='brown';
}

//4.3
for (let li of document.querySelectorAll('li:nth-child(odd)')){
    li.style.backgroundColor='lightgray'
}

//4.4
for (let p of document.querySelectorAll('h1 + p')){
    p.outerHTML = '<h2>' + p.innerHTML + '</h2>';
}

//4.5
let id = 1;
let links = ""
for (let h of document.querySelectorAll('h1')){
    h.id = 'id' + id++;
    links += "<a href='#" + h.id + "'>" + "Link" + id + "</a>"
    console.log(links)
    console.log(h.id)
}
h1 = document.querySelector('h1')
document.body.innerHTML = links + document.body.innerHTML;
console.log(document.body.innerHTML)

