//A
//Funktionen tager to funktioner og et tal som parameter og udregner dem.
function compose(f1,f2,number){
    return f1(f2(number))
}

function square(number){
    return number * number
}

function subtract(number){
    return number-5
}

console.log(compose(subtract,square,10)); // 95



//B
//Funktionen returnerer en ny funktion som skal have en parameter x.
function compose2(f1,f2){
    return ((x) => f1(f2(x)))
}
//Funktionen gemmes i myFunc, som nu skal bruge en paramter x, da det er returneret fra compose2 funktionen.
let myFunc = compose2(subtract,square)
console.log(myFunc(20))

//C
function composeFunctions(functions) {
    return function (x) {
      return functions.reduce(function (acc, f) {
        return f(acc);
      }, x);
    };
  }

  let allDaFunk = [subtract, square];
  let composedFunction = composeFunctions(allDaFunk);
  let resultComposed = composedFunction(10); // Beregner subtract(square(x))
  console.log(resultComposed); // Resultat: 9 