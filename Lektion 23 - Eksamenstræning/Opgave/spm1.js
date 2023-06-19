let carsWith8Wheels = [];
let licensePlateArray = [];
let cars = 
[
    {
        "plate": "BZ42056",
        "weight": 400,
        "brand": "VW",
        "wheels": 4
    },
    {
        "plate": "NP46750",
        "weight": 500,
        "brand": "Ford",
        "wheels": 8
    },
    {
        "plate": "OK56847",
        "weight": 600,
        "brand": "Toyota",
        "wheels": 8
    },
    {
        "plate": "GD84756",
        "weight": 700,
        "brand": "Mercedes",
        "wheels": 12
    }
]

//Push cars with 8 wheels to new array
let resultArray = cars.filter(car => {
    return car.wheels === 8
})

resultArray.forEach(index => {
    console.log(index);
})

cars.forEach(car => {
    if (car.wheels === 8) {
        carsWith8Wheels.push(car);
    }
});
// Check if cars with 8 wheels are in new array
carsWith8Wheels.forEach(car => {
    console.log(car.plate)
})

//Push every cars license plate to a new array
cars.forEach(car => {
    licensePlateArray.push(car.plate)
})

//Check if array with licenseplate has all plates
// licensePlateArray.forEach(plate => {
//     console.log(plate)
// })

//Find and return the car with the lowest weight
let lowest = cars[0];
for (let i = 0; i < cars.length; i++) {
    if (cars[i].weight < lowest.weight) {
        lowest = cars[i];
        } 
    }
    console.log(lowest.plate)


//Find highest amount of wheels and collect in an array
let wheels = cars[0].wheels
cars.forEach(car => {
    if (car.wheels > wheels) {
        wheels = car.wheels;
    }
})
let amount = 0;
cars.forEach(car => {
    if (car.wheels === wheels) {
        amount++;
    }
})
console.log("Highest amount of wheels are " + wheels + ", " + amount + " of the cars have that many wheels")

let antalBilerMedHjul = cars.reduce((acc,bil) => {
    let hjul = bil.wheels;
    if (acc[hjul] == undefined) {
        acc[hjul] = 1;
    }
    else {
        acc[hjul]++
    }
    return acc;
}
, {});

for (let hjul in antalBilerMedHjul) {
    if (antalBilerMedHjul[hjul] > 1) {
        console.log(`${antalBilerMedHjul[hjul]} biler med ${hjul} hjul`)
    } else {
        console.log(`${antalBilerMedHjul[hjul]} bil med ${hjul}`)
    }
}
