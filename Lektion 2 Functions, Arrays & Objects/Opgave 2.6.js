let str = "(()[]{[]})"

let balanceString = function(s){
    let words = s.split("");
    let arr = new Array;
    for (let i = 0; i < words.length; i++){
        if (words[i] === "("){
            arr.push(words[i])
        }
        if (words[i] === ")"){
            if (arr.includes("(")){
                arr.pop("(")
            } else {
                arr.push(words[i])
            }
        }
        if (words[i] === "{"){
            arr.push(words[i])
        }
        if (words[i] === "}"){
            if (arr.includes("{")){
                arr.pop("{")
            }else {
                arr.push(words[i])
            }
        }
        if (words[i] === "["){
            arr.push(words[i])
        }
        if (words[i] === "]"){
            if (arr.includes("[")){
                arr.pop("[")
            }else {
                arr.push(words[i])
            }
        }


    }
    if (arr.length === 0){
        console.log("Is balanced")
    } else {
        console.log("Is not balanced")
    }

}
balanceString(str);
