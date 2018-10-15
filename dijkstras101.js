//declare visited {}
//declare other {all nodes}

//while other != empty
  
/*
for all nodes connected to current node: 
  add current nodes v to distance traveled to next node
  compare to current v of that node
    if not in visited, add with that v
    else if higher, ignore
    else replace with new v
  remove from other array
*/