function vowelsandconsonentcounter(inputstring) {
    inputstring = inputstring.toLowerCase();
    inputstring = inputstring.replace(/ /g, "");
    let vowels = 0;
    let consonents = 0;
    for(let i = 0; i < inputstring.length; i++){
        if(inputstring[i] === "a" || inputstring[i] === "e" || inputstring[i] === "i" || inputstring[i] === "o" || inputstring[i] === "u"){
    vowels += 1;
        } else if(inputstring[i] >= "a" && inputstring[i] <= "z"){
            consonents += 1;
        }
       
    }
    return {vowels, consonents};
}
console.log(vowelsandconsonentcounter("Tanish"));
console.log(vowelsandconsonentcounter("Tanish Chopra"));
console.log(vowelsandconsonentcounter("Tanish Chopra 1234!!!!"));