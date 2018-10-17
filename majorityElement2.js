const majorityElement = (arr) => {
  let result = []
  let count = 0

  const majorityChecker = (array) => {
    let candidate
    for (var i = 0; i < array.length; i++) {
      if (result.length > 0 && array[i] === result[0]) continue

      if (candidate === undefined) {
        candidate = array[i]
      }

      if (candidate === array[i]) {
        count++
      } else {
        count --
      }

      if (count = 0) {
        count = 1
        candidate = array[i]
      }
    }
    return candidate
  }

  let candidate1 = majorityChecker(arr)
  count = 0
  arr.forEach((el) => { if (el === candidate1) count++ })

  if (count <= arr.length/3) {
    return result
  } else {
    result.push(candidate1)
    //consider removing this portion to improve DRY
    if (count > ((arr.length/3) *2)) {
      return result
    }
  }

  count = 0

  let candidate2 = majorityChecker(arr)
  count = 0
  arr.forEach((el) => { if (el === candidate2) count++ })

  if (count > arr.length/3) result.push(candidate2)

  return result
}

let test1 = [1,2,3,1,2,3,2,1]
let test2 = [3,2,3]

majorityElement(test2) // [3]
majorityElement(test1) //[1, 2]