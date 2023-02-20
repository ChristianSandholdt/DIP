let arr = [7,3,2,8,9,1];


// let maxArray = function(array){
//     let max = 0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > max){
//             max = array[i]
//         }
//     }
//     return max;
// }

let maxArray2 = function(){
    let max = this[0];
    for (let e of this){
        if (e>max){
            max = e;
        }
    }
    return max;
}


let contains = function(array, target){
    let found = false;
    i = 0;
    while (!found && i < array.length)
        if (array[i] === target ){
            found = true;
        } else {
            i++;
        }
        return found;
    }
    
    let sumOfArray = function(array){
        let sum = 0;
        for (let n in array){
            sum += array[n]
        }
        return sum
    }

    let sumOfArray2 = function(){
        let sum = 0;
        for (let e of this){
            sum += e;
        }
        return sum;
    }

arr.max = maxArray2;
console.log(arr.max());

arr.contains = contains(arr,4);
console.log(arr.contains);

arr.sum2 = sumOfArray2;
console.log(arr.sum2());
