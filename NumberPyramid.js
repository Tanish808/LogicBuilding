function numberpyramid(inputnumber){
    if(inputnumber < 0) {
        throw new Error("Enter a positive number")
    }
       
for(let i = 1; i <= inputnumber; i++){
    let linecontent = "";
    for(let space = 1; space <= inputnumber - i; space++){
        linecontent = linecontent + " ";
    }
    for(let count = 1; count <= i; count++){
        linecontent = linecontent + count
    }
    for(let reversecount = i - 1; reversecount >= 1; reversecount--){
        linecontent = linecontent + reversecount
    }
    console.log(linecontent)
}}
numberpyramid(5)
numberpyramid(9)
//numberpyramid(-9)
