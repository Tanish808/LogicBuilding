function reverseastring(inputstring) {
    if(typeof inputstring !== "string"){
        throw new Error("Not a valid string")
        }
    let result = "";
    for(i = inputstring.length - 1; i >= 0; i--){
        // result = result + inputstring[i];
        result += inputstring[i];
    }
    return result;
}
console.log(reverseastring("Tanish"));
console.log(reverseastring("Software Development"));
//console.log(reverseastring(34134134));
console.log(reverseastring("34134134"));