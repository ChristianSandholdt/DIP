
let tal = document.querySelector("#tal");
tal.outerHTML = '<label>Tal: </label>' + tal.outerHTML;
let tid = document.querySelector("#tid");
tid.outerHTML = '<label>Tid: </label>' + tid.outerHTML;

tal = document.querySelector('#tal');
tal.onclick = () => tal.value = Math.random()*100;

tid = document.querySelector('#tid');
tid.onclick = () => tid.value = Date()