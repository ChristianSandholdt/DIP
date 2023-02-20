function isPrime(num) {
    if (num == 2 || num == 3)
      return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;  
    for (let i = 5; i * i <= num ; i+=6)
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    return true;
  }

let primeUpTo = function(limit){
    let arr = new Array;
    for (let index = 0; index < limit; index++) {
        if (isPrime(index)){
            arr.push(index)
        }       
    }
    return arr.toString()
}

console.log(primeUpTo(15))