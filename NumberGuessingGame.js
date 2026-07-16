const prompt = require('prompt-sync')();

const maxnumber = 100;
let number = Math.floor(Math.random() * maxnumber) + 1;

function guessnumber() {
    let result = null;
while (result === null) {
        let inputnumber = Number(prompt("Enter your guess: "));
    if (number === inputnumber) {
    console.log("Congratulations! You have found the right number");
    result = true;
}
else if (number > inputnumber && number - inputnumber <= 5) {
    console.log("Low");
}
else if (number < inputnumber && inputnumber - number <= 5) {
    console.log("High");
}
else if (number > inputnumber) {
    console.log("Too Low");
}
else {
    console.log("Too High");
}
    }
}

guessnumber();