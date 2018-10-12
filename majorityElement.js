const majorityElement = (array) => {
  let count = 1
  let candidate = array[0]
  for (let i = 1; i < array.length; i++) {
    let el = array[i];
    if (el === candidate) count ++
    else {
      count--
      if (count === 0) {
        candidate = el
        count = 1
      }
    }
  }
  count = 0
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (el === candidate) count ++
  }
  return count >= array.length/2 ? candidate : 'no majority element'
}

let test1 = [2, 3, 2, 2, 5, 6, 2, 7, 3, 2, 2, 1]
let test2 = [1, 2, 2, 3, 4]

console.log(majorityElement(test1));
console.log(majorityElement(test2));

//let count equal 1
//assume first item of array is candidate
//loop thru array, start at 2nd index
  //if item is equal to candidate
    //count++
  //else
    //count --
    //if count = 0
      //candidate = item at that index
      //count = 1
//count = 0
//loop thru again
//if item = candidate
//count ++
//return count >= length of array/2 (is majority)