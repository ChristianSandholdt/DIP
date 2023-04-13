let persons = [
    {
        firstName: 'Yazeed',
        lastName: 'Hussein',
        phone: 12121212,
        age: 21
    },
    {
        firstName: 'Sam',
        lastName: 'Gamwise',
        phone: 13131313,
        age: 32
    },
    {
        firstName: 'Bill',
        lastName: 'Bailey',
        phone: 14141414,
        age: 41
    },
    {
        firstName: 'Baby',
        lastName: 'Driver',
        phone: 15151515,
        age: 24
    }
];

//9.1
let findPerson = persons.filter(p => p.phone === 14141414)
console.log(findPerson[0]);

let smallestAge = persons.sort((a, b) => a.age - b.age);
console.log(smallestAge[0]); 

persons.forEach((person, index) => (person.ID = index + 1))
for (i = 0; i < persons.length; i++){
    console.log(persons[i]);
}

function sortThatShitForReal(list) {
    // Samler navnene på personerne
    let listMapped = list.map(person => person.firstName);
    // Sorterer navne på vores nye liste
    let sortNames = listMapped.sort((a, b) => a.localeCompare(b));
    // Samler i ny streng, baby
    let theMotherOfAllStrings = sortNames.join(', ');
    return theMotherOfAllStrings;
}

console.log(sortThatShitForReal(persons));

function under30Info(list){
    let arr = [];
    //Find personer under 30
    let listFiltered = list.filter((person) => person.age < 30);
    //Gem navne og telefonnummer fra personerne i et nyt array
    listFiltered.forEach((person) => arr.push(person.firstName + " " + person.phone))
    return arr;
}
console.log(under30Info(persons));