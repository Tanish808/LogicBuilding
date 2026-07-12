function factorofanumber(number) {
    if (!Number.isInteger(number)) {
    throw new Error("Enter a valid number not decimal")
    }

    if (isNaN(number)) {
    throw new Error("Enter a valid number")
    }

    
    if (number < 0) {
    throw new Error("Enter a positive number")
    } 


    let result = [];
    for(let i = 0; i <= number; i++) {
        if(number % i === 0){
            result.push(i);
        }
    }
    return result;
}
console.log(factorofanumber(4));
console.log(factorofanumber(14));
console.log(factorofanumber(35));
//console.log(factorofanumber(35.7));
//console.log(factorofanumber(-35));
//console.log(factorofanumber(rvgr));