function isalphabeticalorder(inputstring){
    for(let i = 0; i < inputstring.length; i++){
        inputstring = inputstring.replace(/ /g,"")
        inputstring = inputstring.toLowerCase()
        if(inputstring[i] > inputstring[i + 1]){
            return false
        }
    }
    return true
}
console.log(isalphabeticalorder("Tanish"))
console.log(isalphabeticalorder("abcd"))
console.log(isalphabeticalorder("abc   d"))
console.log(isalphabeticalorder("Ta   nish"))
console.log(isalphabeticalorder("TA   nish"))