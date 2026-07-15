function findword(inputstring, wordtofind){
    let result = [];
    for(let i = 0; i < inputstring.length; i++) {
      let substr = inputstring.slice(i, i + wordtofind.length);
    if (substr === wordtofind){
        result.push(i);
        }
    }
    return result;
}
console.log(findword("this is a big string with the word big repeated in the big string", "big"));