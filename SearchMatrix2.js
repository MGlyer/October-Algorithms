/* Write an efficient algorithm that searches for a value in an m x n matrix. 
This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
*/

const searchMatrix2 = (matrix, target) => {
  var rowInd = [0, matrix.length-1]
  var colInd = [0, matrix[0].length-1]

  const recurse = (matrix) => {
    var rowStart = false
    for (var i = rowInd[0]; i <= rowInd[1]; i++) {
      if (target >= matrix[i][colInd[0]] && target <= matrix[i][colInd[1]]) {
        if (!rowStart) {
          rowStart = true
          rowInd[0] = i
        }
      }
      if (target < matrix[i][colInd[0]] || target > matrix[i][colInd[1]]) {
        if (rowStart) {
          rowInd[1] = i-1
          break
        }
      }
    }

    var colStart = false
    for (var i = colInd[0]; i <= colInd[1]; i++) {
      if (target >= matrix[rowInd[0]][i] && target <= matrix[rowInd[1]][i]) {
        if (!colStart) {
          colStart = true
          colInd[0] = i
        }
      }
      if (target < matrix[rowInd[0]][i] || target > matrix[rowInd[1]][i]) {
        if (colStart) {
          colInd[1] = i-1
          break
        }
      }
    }
    
    if (rowInd[1] === rowInd[0] && colInd[1] === colInd[0]) {
      return true
    }

    if (!rowStart || !colStart) {
      return false
    }

    return recurse(matrix)
  }

  return recurse(matrix)

}

let test1 = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(searchMatrix2(test1, 5)); //true
console.log(searchMatrix2(test1, 20)); //false




  //row ind arr
  //col ind arr
  //iterate thru matrix
    //check if target within row
      //if so add ind to row arr
    //check if target within col
      //if so add ind to col arr
  
  //declare flag false
  //declare recurse alg, which takes a matrix
    //if matrix length = 1
      //flag true
    //if matrix length = 0
      //return
  
    //iterate thru matrix
      //check if target is bound by rows
      //shrink matrix to those rows
    //iterate thru matrix
      //check if target is bound by cols
      //chrink matrix to those cols
    
    //recurse on this new matrix
  
    //start recursion
  
    //return flag