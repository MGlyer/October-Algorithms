const waterblocks = (arr) => {
  //left pass, right pass
  //calculate water from each pass, but only where the stopping wall
  //is greater than or equal to the height of the starting wall on each pass.

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

    let hist = {}
    let wall = false
    let wallIndex = -1
    let wallHeight = -1
    let waterCount = 0

    //left pass

    for (let i = 0; i < arr.length; i++) {
      if (wall) {
        if (wallHeight > arr[i]) {
          waterCount+= (wallHeight - arr[i])
          continue
        } else {
          wall = false
          if (wallHeight === arr[i]) {
            hist[i] = wallIndex
          }
        }
      }

      if (!wall && arr[i] > arr[i+1]) {
        wall = true
        wallHeight = arr[i]
        wallIndex = i
      } 
    }

    //rightpass

    for (let i = arr.length-1; i > 0; i--) {
      if (hist.hasOwnProperty(i)) {
        i = hist[i] + 1
      }

      if (wall) {
        if (wallHeight > arr[i]) {
          waterCount+= (wallHeight - arr[i])
            continue
        } else {
          wall - false
        }
      }

      if (!wall && arr[i] > arr[i-1]) {
        wall = true
        wallHeight = arr[i]
      }
    }
    
}