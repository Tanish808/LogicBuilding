const prompt = require('prompt-sync')();
console.log("ENTER");
console.log("1 for Addition");
console.log("2 for subtraction");
console.log("3 for multiplication");
console.log("4 for division");
let inputnumber = Number(prompt("Enter a number for the operation: "));
let firstnumber = Number(prompt("Enter firstnumber: "));
let secondnumber = Number(prompt("Enter secondnumber: "));
if(inputnumber === 1){
    const a = firstnumber + secondnumber;
    console.log(a);
    
} else if(inputnumber === 2){
    const b = firstnumber - secondnumber;
    console.log(b);
    
}else if(inputnumber === 3){
    const c = firstnumber * secondnumber;
    console.log(c);
    
} else if(inputnumber === 4){
    const d = firstnumber / secondnumber;
    console.log(d);
    }else{
        console.log("Invalid Operation")
    }
