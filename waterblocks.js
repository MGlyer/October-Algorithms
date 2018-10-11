const waterblocks = (arr) => {
  //left pass, right pass
  //calculate water from each pass, but only where the stopping wall
  //is greater than or equal to the height of the starting wall on each pass.
  
    let hist = {}
    let wall = false
    let wallIndex;
    let wallHeight;
    let waterCount = 0
    let currentWater = 0

    //left pass

    for (let i = 0; i < arr.length; i++) {
      if (wall) {
        if (wallHeight > arr[i]) {
          currentWater += (wallHeight - arr[i])
          continue
        } else {
          //finds the ending wall, dump currnetWater count into total water
          wall = false
          waterCount += currentWater
          currentWater = 0
          //this prevents double counting, for right pass to skip
          if (wallHeight === arr[i]) {
            hist[i] = wallIndex
          }
        }
      }

      //check if we need to start counting water again
      if (!wall && arr[i] > arr[i+1]) {
        wall = true
        wallHeight = arr[i]
        wallIndex = i
      } 
    }

    //rightpass, reset items
    wall = false
    currentWater = 0

    for (let i = arr.length-1; i >= 0; i--) {
      //check if we need to skip a section of water. avoids double counting
      if (hist.hasOwnProperty(i)) {
        i = hist[i] + 1
      }

      if (wall) {
        if (wallHeight > arr[i]) {
          currentWater += (wallHeight - arr[i])
          continue
        } else {
          wall = false
          waterCount += currentWater
          currentWater = 0
        }
      }

      if (!wall && arr[i] > arr[i-1]) {
        wall = true
        wallHeight = arr[i]
      }
    }
    return waterCount

    
}

//declare evenHeightHist = {}
  //declare wall = false
  //declare wallHeight = -1
  //declare waterCount = 0

  //loop thru array
    //if wall
      //if current height lower than wallHeight
        //add difference to waterCount
        //continue
      //else
        //set wall to false
        //if equal to wallheight
          //put stopping wall index in histObject (to avoid double counting)
    
    //if not wall
      //compare current height to next height
        //if heigher, wall = true