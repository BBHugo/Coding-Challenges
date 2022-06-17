// Whole point of this code is creating a conditional which returns us to the same starting point and returning true if it meets that condition as well as having exactly 10 strings in the array
function isValidWalk(walk) {
    let xAxis = 0 
    let yAxis = 0 // I used a Y and X Axis to split them up for easy +1 or -1 math
    
    walk.forEach((x,i) =>{ //ForEach method goes through the array and just adds or subtracts one in the respective axis. If the end result is 0 for both, we're back at the starting point
      if( x === 'n'){
        xAxis += 1
      }else if(x === 's'){
        xAxis -= 1
      }else if(x === 'e'){
        yAxis += 1
      }else if(x === 'w'){
        yAxis -= 1
      }
    })
    
    if( walk.length === 10 && xAxis === 0 && yAxis === 0 ){
      return true
    }else {
      return false
    }
  }

  