function fizzbuzz(inputnumber){  
    if(inputnumber < 0){
        throw new Error("Enter a positive number")
    }
    for(let i = 1; i <= inputnumber; i ++){
         if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        }
        if(i % 3 === 0){
            console.log("fizz");
        }
         if(i % 5 === 0){
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    } 
}
//fizzbuzz(15);
fizzbuzz(37);
//izzbuzz(-37);