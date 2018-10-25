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
  let grouping = {}
  nums.forEach((num) => {
    let key = num.toString()[0]
    if (grouping.hasOwnProperty(key)) grouping[key].push(num.toString())
    else grouping[key] = [num.toString()]
  })

  const arrSorter = (arr) => {
    let largestLength = 0
    let dummy = arr[0][0]
    arr.forEach((str) => {
      if (str.length > largestLength) largestLength = str.length
    })

    arr.sort((a, b) => {
      let a = a
      let b = b
      while (a.length < largestLength) {
        a += dummy
      }
      while (b.length < largestLength) {
        b += dummy
      }
      if (Number(a) > Number(b)) return -1
      else return 1
    })
  }

  let answerArr = []

  for (var key in grouping) {
    if (grouping[key].length > 1) {
      arrSorter = grouping[key]
    }
    answerArr.push(grouping[key])
  }

  answerArr.sort((a, b) => {
    if (Number(a[0]) > Number(b[0])) return -1
    else return 1
  })
  answerArr.reverse()

  let answer = ''
  answerArr.forEach((arr) => {
    let item = arr.join('')
    answer.push(item)
  })

  return answer
}