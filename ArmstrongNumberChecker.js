function isarmstrong(inputnumber){

    if(inputnumber < 0){
        throw new Error("Enter a positive number")
    }

    let inputnumberasstring = inputnumber.toString()
    let result = 0;

    for(let i = 0; i < inputnumberasstring.length; i ++){
        result += inputnumberasstring[i] ** inputnumberasstring.length;
    } 
    if(inputnumber === result){
        return true
    
    }else {
        return false
    }
}
console.log(isarmstrong(153));
console.log(isarmstrong(123));
console.log(isarmstrong(370));
console.log(isarmstrong(243));
//console.log(isarmstrong(-243));
console.log(isarmstrong(371));
console.log(isarmstrong(92727));
console.log(isarmstrong(123344));