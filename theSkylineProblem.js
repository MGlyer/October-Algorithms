/*
A city's skyline is the outer contour of the silhouette 
formed by all the buildings in that city when viewed from a distance. 
Now suppose you are given the locations and height of all the buildings as shown on a 
cityscape photo (Figure A), write a program to output the skyline formed by these buildings 
collectively (Figure B).
*/

const skyline(array) => {
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