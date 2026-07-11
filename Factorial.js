function calculatefactorial(inputnumber) {
    if(isNaN(inputnumber)) {
        throw new Error("Enter a number");
    }

    if(inputnumber < 0){
        throw new Error("Enter a positive number")
    }

    let result = 1;
    for(let i = 1; i <= inputnumber; i++) {
        //result = result * i;
        result *= i;
    } 
return result;
}
console.log(calculatefactorial(5));
console.log(calculatefactorial(4));
//console.log(calculatefactorial("gyc"));
//console.log(calculatefactorial(-4));
console.log(calculatefactorial(0));
//console.log(calculatefactorial(undefined));