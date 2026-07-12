function findbiggestnumber(arrayofnumber){
    if(!arrayofnumber || arrayofnumber.length === 0) {
        throw new Error("Enter a number");
    }

let biggestnumber = arrayofnumber[0];
for(let i = 0; i < arrayofnumber.length; i++) {

     if(isNaN(arrayofnumber[i])) {
        throw new Error("Enter a number");
    }

    if(arrayofnumber[i] > biggestnumber) {
        biggestnumber = arrayofnumber[i];
    }
}
return biggestnumber;
}
console.log(findbiggestnumber([2,4,5,6,7]));
console.log(findbiggestnumber([12,23,34,45,56]));
//console.log(findbiggestnumber([]));
//console.log(findbiggestnumber(null));
//console.log(findbiggestnumber(undefined));
//console.log(findbiggestnumber([12,23,34,45,"fsvsv"]));