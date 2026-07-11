function areaofrectangle(length,width){
    if(length <= 0){
        throw new RangeError("Length should be a positive number or not equal to 0");
        }

        if(width <= 0){
        throw new RangeError("Width should be a positive number or not equal to 0");
        }

    const area = length * width;
    return area;
}
console.log(areaofrectangle(4,5));
//console.log(areaofrectangle(0,-5));
//console.log(areaofrectangle(0,5));