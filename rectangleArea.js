/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
*/

const rectangleArea = (A, B, C, D, E, F, G, H) => {
  //declare helper function
    //return area of single rectangle
  const singleRect = (p1, p2, p3, p4) => {
    let height = Math.abs(p2 - p4)
    let width = Math.abs(p1 - p3)
    return height * width
  }

  let rec1Area = singleRect(A, B, C, D)
  let rec2Area = singleRect(E, F, G, H)
}