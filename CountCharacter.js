function countcharacter(inputstring){
    inputstring = inputstring.toLowerCase()
    let result = {};
    for(let i = 0; i < inputstring.length; i++) {
        if(!result[inputstring[i]]){
            result[inputstring[i]] = 0;
        }
        result[inputstring[i]] += 1
    }
console.log(result);
}
countcharacter("Tanish Chopra")