let s = "Hej med dig jeg hedder kaj, jeg er en bondemand jeg jeg jeg" // => 9 different words

let findDifferentWords = function(str){
    let words = str.split(" ");
    let arr = new Array;
    for (let i = 0; i < words.length; i++){
        if (!arr.includes(words[i])){
            arr.push(words[i])
        }
    }
    console.log(arr.length)
}

console.log(findDifferentWords(s))

