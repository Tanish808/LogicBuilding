//function numberofwords(inputstring){
    //let words = 1;
    //for(let i = 0; i < inputstring.length; i++){
    //if(inputstring[i] === " "){
        //words += 1;
   // }
    //}
   // return words;
//}
//console.log(numberofwords("My name is Tanish"));

function countWords(sentence) {

    sentence = sentence.trim()

    const splittedSentence = sentence.split(' ');

    const nonEmptyElements = splittedSentence.filter((element) => element != '');
   
    return nonEmptyElements.length;
}

console.log(countWords("This is a sentence"));
console.log(countWords("My name is Tanish"));

console.log(countWords("What is    the date today"));
console.log(countWords(" What is    the date today "));