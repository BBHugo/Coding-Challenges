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


  // A better method would be to add the conditional in the beginning to check if walk.length == 10 to return false first just in case.
  
//below is code for conditionals to give a response depending on the number of arrays. We craft the result desired by adding the requirements in between the element variables.

function likes(names){
  if(names.length == 0){
    return 'no one likes this'
  }else if(names.length == 1){
    return names[0] + ' likes this'
  }else if (names.length == 2){
    return names[0] + ' and ' + names[1] + ' like this'
  }else if (names.length == 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }else if (names.length > 3){
    return names[0] + ', ' + names [1] + ' and ' + (names.length - 2) + ' others like this'
  }
}

 //The one below will be the same output of code, however done in switch conditionals instead.