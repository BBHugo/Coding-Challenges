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
  

  //The below is a good example on how to execute the function depending on how many times you want it to be done with each new iteration being done from the previous result
  function encrypt(text, n) {
    let oddString = ''
    let evenString = ''
    
    const formula = text.split('').forEach((x,i) => {
      if(i % 2 === 0 ){
        evenString += x
      }else {
        oddString += x
      }
    })
    formula * n
  //   let result1 = oddString + evenString
  //   for(let p = 1; p < n; p++){
  //     result += (oddString + evenString)
  //   }
    if(n <= 0 || !text || !text.length){ //find out if !text and !text.length do anything, trying to figure out final requirement
      return text
    }else{
      return encrypt(oddString + evenString, --n) //Here we have a --n which i'm not entirely sure what it does, but running the function seems to work with the results given of the scope. The --n was added so it could run n amount of times.
    }
  }
  
