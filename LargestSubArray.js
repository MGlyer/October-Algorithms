const findLargetSubArray = (array) => {
    let longestArray = []

    const arrayChecker = (arr) => {
        let numCount = 0
        let strCount = 0
        arr.forEach((item) => {
            if (typeof item === 'string') strCount++
            if (typeof item === 'number') numCount++
        })
        return numCount === strCount
    }

    for (let i = 0; i < array.length; i++) {
        if (longestArray.length > (array.length - i)) break
        let currentArr = [array[i]]
        let evenFlag = true
        for (let j = i+1; j < array.length; j++) {
            currentArr.push(array[j])
            if (evenFlag && arrayChecker(currentArr)) {
                if (currentArr.length > longestArray.length) longestArray = currentArr.slice()
            }
            evenFlag = !evenFlag
        }
    }
    return longestArray

    // const findLargestArray = (left, right) => {
    //     while (left >= 0 && right < array.length && typeof array[left] === typeof array[right]) {
    //         left--
    //         right++
    //     }
    //     console.log(left, right)
    //     return array.slice(left+1, right)
    // }

    // for (var i = 0 ; i < array.length; i++) {
    //     let temp = findLargestArray(i, i+1)
    //     if (temp.length > longestArray.length) longestArray = temp
    // }
    // return longestArray
}