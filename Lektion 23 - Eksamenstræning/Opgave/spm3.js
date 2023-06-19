//Create a promise which checks if a value is a 

const { rejects } = require("assert");
const { resolve } = require("path");

function gaetTalISytten() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let numberValue = Math.floor(Math.random() * 2000)
            if (numberValue % 17 === 0) {
                res(numberValue)
            } else {
                rej(numberValue)
            }
        },Math.floor(Math.random() * (3 - 1) + 1));
    })
}
gaetTalISytten()

gaetTalISytten()
    .then((numberValue) => {
        console.log(`Tallet ${numberValue} går op i 17`)
    })
    .catch((numberValue) => {
        console.log(`Tallet ${numberValue} går ikk op i 17`)
    })


function proevXGange(antal) {
    for (let i = 0; i < antal; i++) {
        let promise = gaetTalISytten()
            .then((numberValue) => {
                console.log(`Tallet ${numberValue} går op i 17`)
                
            })
            .catch((numberValue) => {
                console.log(`Tallet ${numberValue} går ikke op i 17`)
            })
    }

}




// proevXGange(1000);
