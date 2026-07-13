function isprimenumber(inputnumber){
    let result = true;
    for(let i = 2; i < inputnumber; i++) {
        if(inputnumber % i === 0 ){
    result = false;
    break;
    }
}
return result;
}

console.log(isprimenumber(5));
console.log(isprimenumber(2));
console.log(isprimenumber(4));
console.log(isprimenumber(97));