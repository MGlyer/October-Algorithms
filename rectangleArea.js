/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
*/

const rectangleArea = (A, B, C, D, E, F, G, H) => {
  //declare helper function
    //return area of single rectangle

  // const singleRect = (p1, p2, p3, p4) => {
  //   let height = Math.abs(p2 - p4)
  //   let width = Math.abs(p1 - p3)
  //   return height * width
  // }

  // let rec1Area = singleRect(A, B, C, D)
  // let rec2Area = singleRect(E, F, G, H)

  // let alt1Area = singleRect(A, D, G, F)
  // let alt2Area = singleRect(E, H, C, B)

  //what a bout a history object, adding every "square" to the object
  let hist = {}
  let count = 0
  const newSingle = (p1, p2, p3, p4) => {
    for (var i = p1; i < p3; i++) {
      for (var j = p2; j < p4; j++) {
        var square = `${i}${j}-${i+1}${j+1}`
        // console.log(square)
        if (!hist.hasOwnProperty(square)) {
          count++
          hist[square] = null
        }
      }
    }
  }

  newSingle(A, B, C, D)
  newSingle(E, F, G, H)
  // console.log(hist)
  return count
}

console.log(rectangleArea(0, 0, 9, 2, 7, -1, 10, 2))