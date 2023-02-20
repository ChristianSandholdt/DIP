//Compare Functions

let compare = function(s1,s2){
    if (s1 < s2){
        return -1
    } else if (s1 > s2){
        return 1;
    } else {
        return 0;
    }
}
let s1 = "A"
let s2 = "a"
console.log(compare(s1,s2)) // => -1
console.log(compare(s2,s2)) // => 0
console.log(compare(s2,s1)) // => 1

let compareLen = function(s1,s2){
    if (s1.length < s2.length){
        return -1;
    } else if (s1.length > s2.length){
        return 1;
    } else {
        return 0;
    }
}

let s3 = "Hej"
let s4 = "Hejsa"

console.log(compareLen(s3,s4)) // => -1
console.log(compareLen(s3,s3)) // => 0
console.log(compareLen(s4,s3)) // => 1

let compareIgnoreCase = function(s1,s2){
    if (s1.toLowerCase() < s2.toLowerCase()){
        return -1;
    } else if (s1.toLowerCase() > s2.toLowerCase()){
        return 1;
    } else {
        return 0;
    }
}

let s5 = "MAD"
let s6 = "mAd"

let s7 = "and"

console.log(compareIgnoreCase(s5,s6)) // => 0
console.log(compareIgnoreCase(s5,s7)) // => 1

