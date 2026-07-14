function matrixmultiplication(array1, array2) {
    const rowsinresult = array1.length;
    const columnsinresult = array2[0].length;

    const rowninsecondarray = array2.length;
    const result = [];

    for(let i = 0; i < rowsinresult; i++) {
        for(let j = 0; j < columnsinresult; j++) {
            let cellvalue = 0;
            for(let n = 0; n < rowninsecondarray; n++) {
                cellvalue += array1[i][n] * array2[n][j];
            }

            if(!result[i]) {
                result[i] = [];
            }
            result[i][j] = cellvalue;
            
        }
    }
    return result;
}

 const firstarray = [ [1,2],
                       [3,4] ];
 const secondarray = [ [5,6],
                       [7,8]   ];

console.log(matrixmultiplication(firstarray, secondarray));