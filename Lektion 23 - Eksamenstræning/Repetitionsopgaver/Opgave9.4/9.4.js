//A
function compose(f1, f2, x) {
    return f1(f2(x))
}

function function1(x) {
    return x * 3;
}

function function2(x) {
    return x + 10;
}

console.log(compose(function1, function2, 10)) // 60

//B
function c2(f1,f2) {
    return ((x) => f1(f2(x)))
}
let myFunc = c2(function1, function2)
console.log(myFunc(10)) // 60

//C
function composeAllFunctions(functions) {
    return function(x) {
        return functions.reduce(function(acc,f) {
            return f(acc)
        }, x);
    };
}

let funcArray = [function1, function2];
let composedFunction = composeAllFunctions(funcArray);
let resultComposed = composedFunction(5);
console.log(resultComposed);