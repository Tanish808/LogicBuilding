function ispalindrome(inputstring) {
    inputstring = inputstring.toLowerCase();
    for(let i = 0; i <= inputstring.length / 2; i++) {
        if(inputstring[i] !== inputstring[inputstring.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findpalindrome(inputstring){
const result = [];
for(let i = 0; i < inputstring.length; i++) {
    for(let j = i +1; j <= inputstring.length; j++){
const substr = inputstring.slice(i, j);
if(ispalindrome(substr) && substr.length > 1){
    result.push(substr);
}
    }
}
return result;
}
console.log(findpalindrome("radar"))
console.log(findpalindrome("madam"))