const maxnumber1 = 5;
console.log(Math.floor(Math.random() * maxnumber1) + 1);
let i = 0;
while(i < 20){
    console.log(Math.floor(Math.random() * maxnumber1) + 1);
    i++
}

const mininumber = 11;
const maxnumber = 21;
let j = 0;
while(j < 20) {
    console.log(Math.floor(Math.random() * (maxnumber - mininumber) + mininumber));
    j++
}