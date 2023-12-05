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

  //This is another example with the split and forEach methods to output. The function of this block is to split up camelCase string by putting a space in front of the Capitalized letter, I use conditionals with the boolean using .toUpperCase() within the forEach. However, we can refactor this using Regex which will be the following.
  function solution(string) {
    let result = ''
    string.split('').forEach( x =>{
       x === x.toUpperCase() ? result += ( " " + x ) : result += x
    })
    return result
  }

    //This will be the refactored of above using RegEx
    function solution(string) {
      return(string.replace(/([A-Z])/g, ' $1'));
    }

//The goal of this is to return ONLY the domain name and remove the https or any varients of it and anything after the domain
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

  //What this does is ruse the replace to remove any of those by subsequently removing another thing if the url has it. Eventually returning the domain by splitting it at the first period and returning the first element of the split

//The code below takes in an array as its parameter. The function will go through the array and return the index where all the added numbers to the left of that index equal all the added values of the right of that index.
function findEvenIndex(arr)
{
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0); //By having the right side be the complete summed value of the array we can start subtracting as we move down the array.
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i]; //Every time the for loop, loops, we subtract a "left" value from the right side. It also removes the initial/targeted index value since we dont count that in our sum anyways.
    if (left === right) return i; //Returning before we add the left side allows us to have the left of index 0 equal 0. This immediately stops the loop since we are using a return
    left += arr[i]; //If the condition in the row above isn't met, we run this line, and repeat the loop with the new information.
  }
  return -1; //If we go through the entire loop and still both sides don't equal each other, we return -1. Remember that this only happens if the loop doesn't find something.
}


//The code below takes 2 different lists(arrays). List a gets subtracted anything that is in list b. So if list b contains the number 44, then any 44 in list a will get filtered out and returned only the elements that arent in list b
function arrayDiff(a, b) {
  let array = []
  a.forEach((x) => {
    if(!b.includes(x)){
      array.push(x)
    }
  })
  
  return array
}

//The Code below takes in a string and encodes any vowel into their appropriate number (1-5), then the decode function will do the opposite
function encode(string) {
  let result = ''
  string.split('').forEach((x,i)=> {
    if(x === 'u') {
      result += '5'
    }else if(x === 'a'){
      result += '1'
    }else if(x === 'e'){
      result += '2'
    }else if(x === 'i'){
      result += '3'
    }else if(x === 'o'){
      result += '4'
    }else{
      result += x
    }
  })
  
  return result
}

function decode(string) {
  let dResult = ''
  string.split('').forEach((x)=> {
    if(x === '1'){
      dResult += 'a'
    }else if(x === '2'){
      dResult += 'e'
    }else if(x === '3'){
      dResult += 'i'
    }else if(x === '4'){
      dResult += 'o'
    }else if(x === '5'){
      dResult += 'u'
    }else{
      dResult += x
    }
  })
  return dResult
}