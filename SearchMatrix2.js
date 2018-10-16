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

const searchMatrix2 = (matix, target) => {
  //row ind arr
  //col ind arr
  let rowInd = [0, matrix.length-1]
  let colInd = [0, matrix[0].length-1]
  //iterate thru matrix
    //check if target within row
      //if so add ind to row arr
    //check if target within col
      //if so add ind to col arr

  let flag = false
  const recurse = (matrix) => {
    let rowStart = false
    for (var i = rowInd[0]; i <= rowInd[1]; i++) {
      if (target > matrix[i][colInd[0]] && target < matrix[i][colInd[1]]) {
        if (!rowStart) {
          rowStart = true
          rowInd[0] = i
        }
      }
      if (target < matrix[i][colInd[0]] || target > matrix[i][colInd[1]]) {
        if (rowStart) {
          rowInd[1] = i
          break
        }
      }
    }


    let colStart = false
    for (var i = colInd[0]; i <= colInd[1]; i++) {
      if (target > matrix[rowInd[0]][i] && target < matrix[rowInd[1]][i]) {
        if (!colStart) {
          colStart = true
          colInd[0] = i
        }
      }
      if (target < matrix[rowInd[0]][i] || target > matrix[rowInd[1]][i]) {
        if (rowStart) {
          colInd[1] = i
          break
        }
      }
    }

    if (!rowStart || !colStart) {
      flag = false
      return
      // return false
    }

    if (rowInd[1] === rowInd[0] && colInd[1] === colInd[0]) {
      flag = true
      return
      // return true
    }

    recurse(matrix)
  }

  recurse(matrix)
  return flag
  
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
}