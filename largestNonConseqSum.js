const largestSum = (arr) => {
  let largest = -1

  const recurse = (ind) => {
    for (let i = ind; i < arr.length; i++) {
      start += arr[i]
      if (largest < start) largest = start
      recurse(i + 2)
      start -= arr[i]
    }
  }

  for (let j = 0; j < arr.length; j++) {
    var start = arr[j]
    recurse(j+2)
  }

  return largest
}

let test1 = [3, 1, 5, 10] //13
