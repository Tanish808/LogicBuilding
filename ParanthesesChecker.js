const parantheses = {
    '{': '}',
    '(': ')',
    '[': ']'
}
function isbalanced(inputstring){
    const paranthesesarray = [];
    for(let char of inputstring){
        if(parantheses[char]){
            paranthesesarray.push(char);
        } else if(char === ')' || char === '}' || char === ']') {
        const lastopeningparantheses = paranthesesarray.pop();
        if(parantheses[lastopeningparantheses] !== char){
            return false 
        }
        }
    }
    return paranthesesarray.length === 0
}
console.log(isbalanced("({[]})"))
console.log(isbalanced("[}"))