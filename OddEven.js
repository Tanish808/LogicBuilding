function checkevenorodd(a){
    const result = a % 2;
    
    if(result === 0){
        console.log("Number is even")
    } else {
        console.log("Number is odd");
    }
}
checkevenorodd(7);
checkevenorodd(3);
checkevenorodd(2);
checkevenorodd(6);

//function checkevenorodd(a) {
//    return a % 2 === 0 ? "Even" : "Odd";
//}

//console.log(checkevenorodd(7));
//console.log(checkevenorodd(3));
//console.log(checkevenorodd(2));
//console.log(checkevenorodd(6));
