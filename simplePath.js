const simplePath = (str) => {

  //split by /
  //decalre answer arr
  //go thru split arr
    //add each item to answer
    //if item is ".."
      //pop off last item of answer arr
  let path = []
  let arr = str.split('/')
  arr.forEach(el => {
    if (el === "..") path.pop()
    else if (el !== '.') {
      path.push(el)
    }
  });

  let answer = path.join('/')
  return '/' + answer
}

