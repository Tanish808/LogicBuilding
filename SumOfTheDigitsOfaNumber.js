function sumofthedigits(inputnumber){
    if(isNaN(inputnumber)){
        throw new Error("Enter a number");
    }

        if(inputnumber <= 0){
        throw new Error("Enter a positive number");
    }

    let result = 0;
    const inputnumberasstring = inputnumber.toString();
    for(let i = 0; i < inputnumberasstring.length; i++ ){
        result += parseInt(inputnumberasstring[i]);
    }
    return result;
}
console.log(sumofthedigits(123));
console.log(sumofthedigits(356798));
//console.log(sumofthedigits(-445));
//console.log(sumofthedigits("vsdfvs"));
console.log(sumofthedigits(35679));