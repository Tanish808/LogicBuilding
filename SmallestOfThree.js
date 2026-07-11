function smallestofthree(a, b, c) {
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new Error("Enter a number");
} else {
    if (a <= b && a <= c) {
        console.log(a);
    } else if (b <= a && b <= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
}
smallestofthree(2,3,4);
//smallestofthree(2,"gr",4);
//smallestofthree(2,"gr",undefined);
smallestofthree(-2,-3,-4);
smallestofthree(2,0,4);