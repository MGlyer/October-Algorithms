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
  // let total = 0
  // let index = 0
  // triangle.forEach((arr, i) => {
  //   if (i === 0) {
  //     total += arr[index]
  //   } else {
  //     if (arr[index] > arr[index+1]) index += 1
  //     total += arr[index]
  //   }
  // })
  // return total

  // let least;
  // let current = 0
  // const recurse = (arr, ind, matrixInd) => {
  //   if (matrixInd === triangle.length-1) {
  //     let current1 = current + arr[ind]
  //     let current2 = current + arr[ind+1]
  //     if (current1 < least || least === undefined) {
  //       least = current1
  //     }
  //     if (current2 < least) {
  //       least = current2
  //     }
  //   } else {
  //     current += arr[ind]
  //     recurse(triangle[matrixInd+1], ind, matrixInd+1)
  //     current = current - arr[ind] + arr[ind+1]
  //     recurse(triangle[matrixInd+1], ind+1, matrixInd+1)
  //     current -= arr[ind+1]
  //   }
  // }

  // recurse(triangle[0], 0, 0)
  // return least

  let costMatrix = [triangle[0]]

  const optimalChooser = (currInd, currRowInd, prevRowInd) => {
    let currentCost = triangle[currRowInd][currInd]
    let option1 = currentCost + costMatrix[prevRowInd][currInd-1]
    let option2 = currentCost + costMatrix[prevRowInd][currInd]

    if (isNaN(option1)) return option2
    else if (isNaN(option2)) return option1
    else return Math.min(option1, option2)
  }

  const optimalRowMaker = (currRowInd) => {
    let newRow = []
    triangle[currRowInd].forEach((element, ind) => {
      let toPush = optimalChooser(ind, currRowInd, currRowInd-1)
      newRow.push(toPush)
    })
    return newRow
  }

  triangle.forEach((row, ind) => {
    if (ind !== 0) {
      let optimalRow = optimalRowMaker(ind)
      costMatrix.push(optimalRow)
    }
  })

  return Math.min(...costMatrix[costMatrix.length-1])
}

let matrix1 = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]
let matrix2 = [[-1],[2,3],[1,-1,-3]]
// console.log(minimumTotal(matrix1))
// console.log(minimumTotal(matrix2))