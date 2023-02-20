// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

let swap = function(j,array){
    let temp = array[j];
    array[j] = array[j+1];
    array[j+1] = temp;
}

let bubbleSort = function(array){
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                swap(j,array)
            }
        }
    }
    console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16    
}
bubbleSort(list)

// opgave1.3.js
let binarySearch = function(array,target){
    let position = -1
    
    let left = 0;
    let right = list.length - 1;
    while (left <= right && position === -1) {
        let middle = parseInt((left + right) / 2);
        let k = list[middle];
        if (k == target) {
            position = middle;
        }
        if (k > target)
            right = middle - 1;
        else
            left = middle + 1;
    }
    console.log('target: ' + target);
    console.log('position: ' + position);
}
binarySearch(list,7)


//Opgave 2.3 omskrivning af bubbleSort med compare metode
let list1 = [7, 13, 9, 8, 4, 1, 2, 16, 0,6,9,19,20,];

let compare = function(s1,s2){
    if (s1 < s2){
        return -1
    } else if (s1 > s2){
        return 1;
    } else {
        return 0;
    }
}
console.log(list1)
let bubbleSortByCompare = function(array,compare){
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(array[j],array[j+1]) > 0) {
                swap(j,array)
            }
        }
    }
    return array.toString()
}
console.log(bubbleSortByCompare(list1,compare))
