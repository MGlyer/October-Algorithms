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
// console.log(largestNumber(input4))