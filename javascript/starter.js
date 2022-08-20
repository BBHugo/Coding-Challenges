//Given 2 values, n and s, I return the string (s) n amount of times
	function repeatStr( n, s){
    let stringArr = []
    for(let i = 0; i < n; i++){
        stringArr.push(s)
    }
    return stringArr.join('')
 }

 //the Above string is far too wet, trimming it down to below.
 function repeatStr (n, s) {
	return s.repeat(n)
}
// the repeat string repeats its attached value the parameter(n) amount of times.

//This code is to help replace certain parts of a string with whatever you want
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }
  //the g means global to replace more than just the first find in the string, and the i is for case sensitivity

//A ternary example to use later on, this one returns health - damage, but can't fall below 0
const combat = (health,damage) =>  health - damage > 0 ? health - damage : 0
  //Tried it with curly braces following the arrow but didn't work. Works this way though.


//A simple way to remove vowels (or any character) from a string using the replace method
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

  //If we wish to make it case sensitive, we'll have to add the cap vowels like so:
  function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g,'')
  } //However this will only work appropriately for lower requirements. For a universal tool we'll use the regEx of "gi" instead of just "g".
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi,'')
  }

//A simple method to reverse a string
let solution = (str) => str.split("").reverse().join("")

//An example of the reduce method used with ternary and arrow functions, if the array given is empty (numbers) then we will return 0
let sum = numbers => numbers.length ? numbers.reduce((acc,c) => acc + c ) : 0
  //This could be further broken down to just have the return of the reduce method without having to add the ternary:
  let sum2 = numbers => numbers.reduce((acc,c) => acc + c,0)
  //The 0 is placed as the starting point of our reduce. This will make it so that we start at 0 and since there's nothing else to add, it'll stay at 0 just as we wanted

//Incredibly simple arrow function that uses floor to round down any number times .5
let litres = time => Math.floor(time * .5)
 //Math.ceil will round up Ex:
 let litres2 = time => Math.ceil(time * .5)
 //This will now return rounded up

 //Simple function using math with the Math.floor to return how many one times another would go into the third parameter
 function dutyFree(normPrice, discount, hol){
  let percentage = normPrice * .01
  return Math.floor(hol / (discount * percentage)) 
}

//Below is a function which has the includes method to find if the given array (first param) contains the second parameter anywhere in there.
function include(arr,item){
  if(arr.includes(item)){
    return true
  }else{
    return false
  }
}
  //This can easily be dryer using arrow functions and ternary conditionals
    let include = (arr, item) => arr.includes(item) ? true : false
  //It can be even drier than that where it doesn't include the ternary and just has the return have the result
    let include = (arr, item) => arr.includes(item)