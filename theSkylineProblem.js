/*
A city's skyline is the outer contour of the silhouette 
formed by all the buildings in that city when viewed from a distance. 
Now suppose you are given the locations and height of all the buildings as shown on a 
cityscape photo (Figure A), write a program to output the skyline formed by these buildings 
collectively (Figure B).
*/

const skyline = (array) => {
  //left pass, right pass method
  //high level: left pass would push tuples of the top
  //rigth pass would push tuples of the low part of the jump
  //sort by left index
  let city = [];

  let currentHeight = 0;
  let blockEnd = -1

  //left Pass
  for (var i = 0; i < array.length; i++) {
    let building = array[i]

    if (building[0] > blockEnd) {
      currentHeight = 0
    }
    
    if (building[2] > currentHeight) {
      console.log(currentHeight)
      currentHeight = building[2]
      console.log(currentHeight)
      city.push([building[0], currentHeight])
    }

    //tracks when the height should go back to 0
    if (building[1] > blockEnd) {
      blockEnd = building[1]
    }
  }

  currentHeight = 0
  for (var i = array.length-1; i >= 0; i--) {
    let building = array[i]

    if (building[1] < blockEnd) {
      currentHeight = 0
    }

    if (building[2] > currentHeight) {
      city.push([building[1], currentHeight])
      currentHeight = building[2]
    }

    if (building[0] < blockEnd) {
      blockEnd = building[0]
    }
  }

  city.sort((a, b) => a[0] - b[0])
  return city

  //THE BELOW IS A LIE.  DO THE ABOVE INSTEAD
  //sort array by index 0 of triplet (start of building)
  //declar answer arr
  //declare current height
  //declare heightBeneath = 0
  //declare currentTallEnd = 0
  //iterate thru array
    //if height of new building higher than current height
      //push [LI, Hieght] into answer
      //current Height = height of building
      //currentTallEnd = RI
      //continue to next iteration
    //else if height less
      //if RI < currentTall End
        //continue
      //else
        //if heightBene
        //heightBeneth set to that building's height
}

let figureA = [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]

let outputA = skyline(figureA)

console.log(outputA)