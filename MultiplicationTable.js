function multiplication(inputnumber) {
    if(isNaN(inputnumber)) {
        throw new Error("Enter a number");
    }

     if(inputnumber < 0) {
        throw new Error("Enter a positive number");
    }

    for(let i = 1; i <= 10; i++) {
        const multiplicationresult = inputnumber * i;
        console.log(`${inputnumber} * ${i} = ${multiplicationresult}`);
    }
}
multiplication(3);
multiplication(6);
multiplication(56);
//multiplication("gjjnjkrc");
//multiplication(-9);
multiplication(5);