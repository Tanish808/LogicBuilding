for(let i = 1; i <= 5; i++){
    let stars = "";
    for(let j = 1; j <= i; j++){
        stars += " * "
    }
    for(let k = 1; k <= 2 * (5 - i); k++){
        stars += "   "
    }
    for(let l = 1; l <= i; l++){
        stars += " * "
    }
    console.log(stars)
}
for(let i = 5; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += " * "
    }
    for(let k = 1; k <= 2 * (5 - i); k++){
        row += "   "
    }
    for(let l = 1; l <= i; l++){
        row += " * "
    }
    console.log(row)
}