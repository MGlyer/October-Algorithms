/* 
Given a triangle, find the minimum path sum from top to bottom. 
Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, 
where n is the total number of rows in the triangle.
*/

const minimumTotal = (triangle) => {
  let total = 0
  let index = 0
  triangle.forEach((arr, i) => {
    if (i === 0) {
      total += arr[index]
      console.log(arr[index])
    } else {
      if (arr[index] > arr[index+1]) index += 1
      total += arr[index]
      console.log(arr[index])
    }
  })
  return total
}

let matrix1 = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]
let matrix2 = [[-1],[2,3],[1,-1,-3]]
// console.log(minimumTotal(matrix1))
console.log(minimumTotal(matrix2))