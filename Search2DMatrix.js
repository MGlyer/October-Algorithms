/*Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

//there is probably also a log way of doing this

const search = (matrix, target) => {
  let arrToSearch = -1
  for (var i = 0; i < matrix.length; i ++) {
    if (target < matrix[i][0]) {
      arrToSearch = i - 1
      break
    }
  }

  if (arrToSearch < 0) arrToSearch = matrix.length-1
  return matrix[arrToSearch].contains(target)
}