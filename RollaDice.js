const prompt = require('prompt-sync')();
function rolladice(numberofdice, sidesofadice) {
    let result = [];

    for (let i = 0; i < numberofdice; i++) {
        let roll = Math.floor(Math.random() * sidesofadice) + 1;
        result.push(roll);
    }

    return result;
}
const a = prompt("Please tell number of dices: ")
const b = prompt("Please tell number of sides: ")
console.log(rolladice(a,b));