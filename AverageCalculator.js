function averagecalculator(arrayofnumbers){
    if (!Array.isArray(arrayofnumbers)) {
    throw new Error("Input must be an array");
}
    let average = 0;
    let result = 0; 

    for(let i = 0; i < arrayofnumbers.length; i++){
        if(isNaN(arrayofnumbers[i])) {
throw new Error("Enter a number")
        }

        if(arrayofnumbers[i] < 0) {
throw new Error("Enter a number")
        }

        result += arrayofnumbers[i];
       average = result / arrayofnumbers.length;
    }
    return average;
}
console.log(averagecalculator([1,2,3,4]));
console.log(averagecalculator([1,2,3]));
//console.log(averagecalculator([1,2,3,grggrgs]));
//console.log(averagecalculator([1,2,3,-2]));
//console.log(averagecalculator(1,2,3));