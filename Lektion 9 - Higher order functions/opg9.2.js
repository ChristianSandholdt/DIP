function compareSort(compare){
    return (list) => {list.sort((a,b) => compare(a,b));}};


function lenSort(a,b){
    return a.length - b.length;
}

function ignoreCaseSort(a,b){
    return a.toLowerCase().localeCompare(b.toLowerCase());
}




let names1 = ['Mogens','Martin','Gordon','Anton']
let names2 = ['Mogens','Martin','Gordon','Anton']

let test = compareSort(lenSort)
test(names1);

let test2 = compareSort(ignoreCaseSort)
test2(names2);

console.log(names1);
console.log(names2);