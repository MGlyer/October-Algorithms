const simplePath = (str) => {
  let path = []
  let arr = str.split('/')
  arr.forEach(el => {
    if (el === "..") path.pop()
    else if (el !== '.' && el !== '') {
      path.push(el)
    }
  });
  
  let answer = path.join('/')
  return '/' + answer
}


//split by /
//decalre answer arr
//go thru split arr
  //add each item to answer
  //if item is ".."
    //pop off last item of answer arr

// let test1 = '/a/b/c/'
// let test2 = '/a/b/../c/'
// let test3 = '/a/b/./../c/..'
// let test4 = "/a//b////c/d//././/.."
// let test5 = "/a/../../b/../c//.//"

// console.log(simplePath(test1))
// console.log(simplePath(test2))
// console.log(simplePath(test3))
// console.log(simplePath(test4));
// console.log(simplePath(test5));