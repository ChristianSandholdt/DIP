const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

MOUNTAINS.forEach(mountain => {
    let table = document.getElementById("table")
    let tr = document.createElement("tr")
    table.append(tr);
    
    let nameCell = document.createElement("td")
    let heightCell = document.createElement("td");
    let placeCell = document.createElement("td")
    tr.appendChild(nameCell);
    tr.appendChild(heightCell);
    tr.appendChild(placeCell);
    console.log(mountain.name)
    nameCell.textContent = mountain.name;
    heightCell.textContent = mountain.height;
    placeCell.textContent = mountain.place;
})