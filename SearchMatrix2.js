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
}