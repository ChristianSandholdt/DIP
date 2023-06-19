// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) {return Person.prototype === p.___proto && this.navn === p.navn}
}
class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals (s) {return Studerende.prototype === s.___proto && this.navn === s.navn && this.id === s.id}
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let liste = [p1, p2, s1, s2];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

function compare(a,b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}

let c1 = new Kat("Gwion")
let c2 = new Kat("Bill")

let arrPerStu = [p1,p2,s1,s2,c1,c2];

arrPerStu.sort(compare);
console.log(arrPerStu.toString())

