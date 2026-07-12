function ispalindrome(inputstring) {
    inputstring = inputstring.toLowerCase();
    for(let i = 0; i <= inputstring.length / 2; i++) {
        if(inputstring[i] !== inputstring[inputstring.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(ispalindrome("Tanish"));
console.log(ispalindrome("madam"));
console.log(ispalindrome("leveL"));