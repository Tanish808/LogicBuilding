function simpleinterestcalculator(principleamout, interest, time){
    if(isNaN(principleamout) || isNaN(interest) || isNaN(time)) {
        throw new Error("Enter a number");
    }
    let result = (principleamout * interest * time) / 100;
    result = result.toFixed(2);
    return result;
}
console.log(simpleinterestcalculator(1000,5,1));
console.log(simpleinterestcalculator(20000,8.755,5));