const longestSubPaly = function(s) {
    // let hist = {}

    // const isPaly = (str) => {
    //     if (hist.hasOwnProperty(str)) return true
    //     let j = str.length-1
    //     for (var i = 0; i < str.length/2; i++, j--) {
    //         if (str[i] !== str[j]) {
    //             return false
    //         } else {
    //             let temp = str.slice(i+1, j)
    //             if (hist.hasOwnProperty(temp)) {
    //                 hist[str] = null
    //                 return true
    //             }
    //         }
    //     }
    //     hist[str] = null
    //     return true
    // }

    // if (s === '') return ''
    // if (s.length === 1) return s
    // let longestPaly = ''

    // for (var m = 0; m < s.length; m++) {
    //     let currentSub = s[m]
    //     if (longestPaly.length > (s.length - m)) break
    //     for (var k = m+1; k< s.length; k++) {
    //         currentSub+= s[k]
    //         if (currentSub.length > longestPaly.length && isPaly(currentSub)) {
    //             longestPaly = currentSub
    //         }
    //     }
    // }
    // return longestPaly
    const findLongestPaly = (left, right) => {
        let paly = true
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left+1, right)
    }

    let longestPaly = ''
    for (var i = 0; i < s.length; i++) {
        let oddLengthPal = findLongestPaly(i-1, i+1)
        let evenLengthPal = findLongestPaly(i, i+1)
        if (oddLengthPal.length > longestPaly.length) longestPaly = oddLengthPal
        if (evenLengthPal.length > longestPaly.length) longestPaly = evenLengthPal
    }
    return longestPaly
}