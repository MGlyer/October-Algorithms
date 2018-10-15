/*Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

//there is probably also a log way of doing this
//current time: 2N

const search = (matrix, target) => {
  if (matrix.length < 1) return false

  let arrToSearch = -1
  for (var i = 0; i < matrix.length; i ++) {
    if (target < matrix[i][0]) {
      arrToSearch = i - 1
      break
    }
  }

  if (arrToSearch < 0) arrToSearch = matrix.length-1
  return matrix[arrToSearch].includes(target)
}

// let matrix1= [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]

// let matrix2 = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]

// console.log(search(matrix1, 34))
// console.log(search(matrix1, 60))