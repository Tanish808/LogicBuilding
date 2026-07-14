function isperfectnumber(inputnumber) {
    if (isNaN(inputnumber) || inputnumber <= 0) {
        throw new Error("Enter a positive number");
    }

    let result = 0;

    for (let i = 1; i < inputnumber; i++) {
        if (inputnumber % i === 0) {
            result += i;
        }
    }
    return result === inputnumber;
}
console.log(isperfectnumber(6));
console.log(isperfectnumber(28));
console.log(isperfectnumber(30));