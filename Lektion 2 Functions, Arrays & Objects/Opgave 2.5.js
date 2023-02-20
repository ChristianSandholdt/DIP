let P1 = {name: "Martin", email: "Martin@gmail.com", number: 12121212}
let P2 = {name: "Andrew", email: "Andrew@gmail.com", number: 13131313}
let P3 = {name: "Kasper", email: "Kasper@gmail.com", number: 14141414}
let P4 = {name: "Jesper", email: "Jesper@gmail.com", number: 15151515}
let P5 = {name: "Jonathan", email: "Jonathan@gmail.com", number: 16161616}
let P6 = {name: "Aladdin", email: "Aladdin@gmail.com", number: 17171717}
let P7 = {name: "Mulan", email: "Mulan@gmail.com", number: 18181818}


let arr = [P1,P2,P3,P4,P5,P6];

console.log(arr)

arr[6] = (P7) // => Added to end of array
for (let p in arr){
    console.log(p)
}

console.log(arr[4]) // => Displays person on index 4

delete arr[2] // => Deletes person on index 2
console.log(arr)