for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= 5 - i; j++){
        row += "   ";
    }
    for(let l = 1; l <= 2 * i - 1; l++){
        if(l === 1 || l === 2 * i - 1 || i === 5){
            row += " * ";
        }else{
          row += "   ";
        }
    }
    console.log(row)
}