function celciustofahrenheit(temperature){
    if(isNaN(temperature)){
        throw new Error("Enter a valid number");
    }

    let result = Math.round((temperature * 9/5) + 32);
    return result;

}
console.log(celciustofahrenheit(27));
console.log(celciustofahrenheit(34));
//console.log(celciustofahrenheit(ndfd));