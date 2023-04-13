const compareSort = (compare) => {
    if (typeof compare !== 'function'){
        throw new console.error("You are gay for trying to do this without a function");
    }
return (list) => {list.sort((a,b) => compare(a,b))}}
