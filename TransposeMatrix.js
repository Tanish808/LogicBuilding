function transposematrix(inputarray){
    const numberofrows = inputarray.length
    const numberofcolumns = inputarray[0].length
    const result = [];
    for(let i = 0; i < numberofrows; i++){
        for(let j = 0; j < numberofcolumns; j++){
            
            if(!result[j]){
                result[j] = []
            }
            result[j][i] = inputarray[i][j]
        }
    }
    return result
}
const inputmatrix = [ [3, 4, 8, 12],
                      [5, 6, 9, 24] ]
console.log(transposematrix(inputmatrix))

const inputmatrix1 = [ [3, 4],
                      [5, 6,],
                       [1, 2] ]
console.log(transposematrix(inputmatrix1))