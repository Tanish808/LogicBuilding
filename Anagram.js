function areanagram(inputstring1, inputstring2){
    if(inputstring1.length !== inputstring2.length){
        return false;
    }

    let result1 = {};
    for(let i = 0; i < inputstring1.length; i++) {
        if(!result1[inputstring1[i]]){
            result1[inputstring1[i]] = 0;
        }
        result1[inputstring1[i]] += 1
    }

    let result2 = {};
    for(let i = 0; i < inputstring2.length; i++) {
        if(!result2[inputstring2[i]]){
            result2[inputstring2[i]] = 0;
        }
        result2[inputstring2[i]] += 1
    }

        for (let key in result1) {
        if (result1[key] !== result2[key]) {
            return false;
        }
    }

    return true;
}

console.log(areanagram("pools", "spool"))
console.log(areanagram("cat", "act"))
console.log(areanagram("night", "thing"))
console.log(areanagram("night", "think"))