function isstrongpassword(inputstring) {
    inputstring = inputstring.trim();

    if (inputstring.length < 8) {
        return false;
    }

    let hasupper = false;
    let haslower = false;
    let hasnumber = false;
    let hasAt = false;
    let hasexclamation = false;

    for (let i = 0; i < inputstring.length; i++) {
        let char = inputstring[i];

        if (char >= "A" && char <= "Z") {
            hasupper = true;
        }

        if (char >= "a" && char <= "z") {
            haslower = true;
        }

        if (char >= "0" && char <= "9") {
            hasnumber = true;
        }

        if (char === "@") {
            hasAt = true;
        }

        if (char === "!") {
            hasexclamation = true;
        }
    }

    return hasupper && haslower && hasnumber && hasAt && hasexclamation;
}


console.log(isstrongpassword("Tanish1@!"));    
console.log(isstrongpassword("tanish1@!"));     
console.log(isstrongpassword("TANISH1@!"));     
console.log(isstrongpassword("Tanish@@!"));    
console.log(isstrongpassword("Tanish123!"));  
console.log(isstrongpassword("Tanish123@"));  
console.log(isstrongpassword("Ta1@!"));        