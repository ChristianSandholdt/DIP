// opgave10.1.js
class Person {
    Group; //Person har 1 gruppe
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }

    equals(p) { return Person.prototype === p.__proto__ && this.navn === p.navn; }


}

class Group {
    
    constructor() {
        this.persons = [];
    }

    add(p) {
        this.persons.push(p);
    }

    has(p) {
        return this.persons.includes(p);
    }

    remove(p) {
        let index = this.persons.indexOf(p);
        if (index !== -1){
            this.persons.splice(index,1)
        }
    }
}

class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };

    equals(s) { return Studerende.prototype === s.__proto__ && this.navn === s.navn && this.id === s.id; }

}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 12);

let liste = [p1, p2, s1, s2];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };

}

function compare(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}

let myCat = new Kat("Findus")
let myCat2 = new Kat("Pedersen")


console.log(p1.equals(p1));
console.log(s1.equals(s2));

console.log(compare(s2, s1))
liste.sort(compare);
console.log(liste.toString())
liste.push(myCat);
liste.push(myCat2);

console.log(liste.toString())
liste.sort(compare);
console.log(liste.toString())

let sui = new Group;

sui.add(p1);
sui.add(p2);

console.log(sui.persons.toString());

sui.remove(p1);
console.log(sui.persons.toString());


