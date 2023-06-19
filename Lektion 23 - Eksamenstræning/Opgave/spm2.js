class Bil {
    bilMaerke;
    pris;
    static antal = 0;
    toString() {
        return this.bilMaerke + " " + this.pris
    }

    constructor(bilMaerke, pris) {
        if (typeof (bilMaerke) != "string" || typeof (pris) != "number") {
            throw new Error("Bil er ikke gyldig");
            }
            this.bilMaerke = bilMaerke;
            this.pris = pris;
            Bil.antal++;
            }

    static getAntal() {
        return Bil.antal;
    }
}

class Varevogn extends Bil {
    lasteEvneIKG;
    constructor(bilMaerke, pris, lasteEvneIKG) {
        if (!lasteEvneIKG) {
            throw new Error("Lasteevne er ikke gyldig");
        } else {
            super(bilMaerke,pris)
            this.lasteEvneIKG = lasteEvneIKG
            // Bil.antal--; Afhængig af om man vil tælle varevognene med som biler
            }
        }
}

var bil1 = new Bil("Ford", 5000);
var bil2 = new Bil("Honda", 1000);
var bil3 = new Bil("VW", 650);
var bil4 = new Bil("Skoda", 150);
var varevogn1 = new Varevogn("Mercedes", 12000, 5600);
var varevogn2 = new Varevogn("Man", 15000, 6000);

let koeretoejer = [bil1,bil2,bil3,bil4,varevogn1,varevogn2]

koeretoejer.forEach((bil) => {
    console.log(bil.toString())
})

console.log(Bil.getAntal())