const twoSum = (array, target) => {
  let hist = {}
  let answer;
  array.forEach(el, i => {
    let pair = target - el
    if (hist.hasOwnProperty(pair)) answer = [hist[pair], i]
    else hist[el] = i
  });
  return answer
}