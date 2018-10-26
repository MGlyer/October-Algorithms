/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.

*/

const largestNumber = (nums) => {
  // let grouping = {}
  // nums.forEach((num) => {
  //   let key = num.toString()[0]
  //   if (grouping.hasOwnProperty(key)) grouping[key].push(num.toString())
  //   else grouping[key] = [num.toString()]
  // })

  // const arrSorter = (arr) => {
  //   let largestLength = 0
  //   let dummy = arr[0][0]
  //   arr.forEach((str) => {
  //     if (str.length > largestLength) largestLength = str.length
  //   })

  //   arr.sort((a, b) => {
  //     let first = a
  //     let second = b
  //     while (first.length < largestLength) {
  //       first += dummy
  //     }
  //     while (second.length < largestLength) {
  //       second += dummy
  //     }
  //     if (Number(first) > Number(second)) return -1
  //     else return 1
  //   })
  // }

  // let answerArr = []

  // for (var key in grouping) {
  //   if (grouping[key].length > 1) {
  //     arrSorter(grouping[key])
  //   }
  //   answerArr.push(grouping[key])
  // }

  // answerArr.sort((a, b) => {
  //   if (Number(a[0][0]) > Number(b[0][0])) return -1
  //   else return 1
  // })
  // console.log(answerArr)

  // let answer = ''
  // answerArr.forEach((arr) => {
  //   let item = arr.join('')
  //   answer += item
  // })

  // return answer

  let answer = []
  let onlyZeros = true
  nums.forEach((num) => {
    if (num !== 0) onlyZeros = false
    answer.push(num.toString())
  })

  answer.sort((a, b) => {
    let first = a + b
    let second = b + a
    if (Number(first) > Number(second)) return -1
    else return 1
  })
  if (onlyZeros) return "0"
  return answer.join('')
}

let input1 = [10, 2]
let input2 = [3,30,34,5,9]
let input3 = [7, 12, 2353, 24, 9, 97]
let input4 = [0,0]

let output1 = largestNumber(input1) // ​​​​​210​​​​​
let output2 = largestNumber(input2) // ​​​​​9534330​​​​​
let output3 = largestNumber(input3) // ​​​​​997724235312​​​​​

// console.log(output1) 
// console.log(output2) 
// console.log(output3) 
console.log(largestNumber(input4))