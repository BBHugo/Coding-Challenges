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
  
//The below example is a good exercise in finding the only array that is different amongst all other arrays that are the same as each other with atleast 3 elements given.
function findUniq(arr) {
  let result = 0
  arr.forEach((x,i) => {
    if(arr[i] === arr[i-1] || arr[i] === arr[i+1] || arr[i] === arr[i+2] || arr[i] === arr[i-2]){ //This will just return a 0 if it matches with the 2 above or below in the array
      result += 0
    }else{
      result += x //This will only return 1 number to result
    }
  })
    return result
}

  //this one takes the above one but instead breaks it down by sorting the numbers in order (Note the method to use sort to organize numbers)
  function findUniq(arr) {
    arr.sort((a,b)=>a-b); //Sort numbers like this
    return arr[0]==arr[1]?arr.pop():arr[0] //Once sorted, it'll return the first number if it doesn't match, but if it does, arr.pop() will remove the last element of an array and return it, giving us the answer without the very long block as before
  }