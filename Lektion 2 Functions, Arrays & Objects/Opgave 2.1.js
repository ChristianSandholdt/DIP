let arr = [1,2,3,4,5,6,7,8,9]

let maxArray = function(array){
    max = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max;
}

console.log(maxArray(arr))

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
    
    console.log(contains(arr,5))

    let sumOfArray = function(array){
        sum = 0;
        for (let n in array){
            sum += array[n]
        }
        return sum
    }
    console.log(sumOfArray(arr))