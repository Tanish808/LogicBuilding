function isleapyear(year) {
    if(isNaN(year)) {
        throw new Error("Enter a number");
    }
    
    if(year <= 0){
        throw new Error("Enter a positive number");
        }

    if(year % 4 === 0) {
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
}
isleapyear(2025);
isleapyear(2024);
isleapyear(2026);
//isleapyear("bxg2j");
//isleapyear(-2026);
isleapyear(4);
