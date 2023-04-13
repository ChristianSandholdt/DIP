function animal(name,age){
    this.name = name;
    this.age = age;
    this.canRun = function() {
        console.log(this.name + " can also run");
    }
}

let giraf = new animal("Plet", 15);
let abekat = new animal("Nelsson",10);

console.log(giraf.name);
giraf.canRun();
abekat.canRun();


//Også en måde at gøre det på som er lidt pænere end at sætte den
//i constructoren
// animal.prototype.canRun = function(){
//     console.log(this.name + " can run");
// }


function human(name,age,money){
    animal.call(this,name,age)
    this.money = money;
    this.canEarn = function() {
        console.log(name + " can earn " + money*12 + " in a year")
    }
}

let p1 = new human("Martin", 23, 10);
let p2 = new human("Anton", 22, 15);

p1.canEarn();
p2.canEarn();


human.prototype.__proto__ = animal.prototype;

p2.canEarn = function() {
    console.log("det her er " + this.name + "'s egen funktion")
}

p2.canEarn();
p1.canEarn();