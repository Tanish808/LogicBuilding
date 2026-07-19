for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= 5 - i; j++){
        row += "   ";
    }
    for(let l = 1; l <= 2 * i - 1; l++){
        row += " * " 
    }
    console.log(row)
}
for(let i = 4; i >= 1; i--){
    let star = "";
    for(let j = 1; j <= 5 - i; j++){
        star += "   ";
    }
    for(let l = 1; l <= 2 * i - 1; l++){
        star += " * "
    }
    console.log(star)
}
