for(let i = 5; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= 5 - i; j++){
        row += "   ";
    }
    for(let k = 1; k <= 2 * i - 1; k++){
        row += " * "
    }

    console.log(row)
}
for(let i = 2; i <= 5; i++){
    let row = "";
    for(let l = 1; l <= 5 - i; l++){
        row += "   "
    }
    for(let m = 1; m <= 2 * i - 1; m++){
        row += " * "
    }
    console.log(row)
}