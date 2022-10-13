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

//A simple method to reverse a string. Note that this will be useful to check for palindromes.
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

//Quick example of Template Literals using the backticks:
function sayHello(name) {
  return `Hello, ${name}`
}
  //This will allow us to use the inserted param to create a customizable string using ${}

//This will be an example to find a palindrome (Text that is the same forwards and backwards) as well as palindrome numbers which will first have to be transformed into strings before reversing using the toString method
function isPalindrome(line) {
  if(line.toString().split("").reverse().join("") == line){
    return true
  }else{
    return false
  }
}
  //line will be the inserted param that we wish to check for.

//The below code is an exercise that allows us to remove the last character of a string only if it means a condition (In this case it must be an exclamation mark), if not, it'll return the string in tact. This uses the slice method
function remove (string) {
  if(string[string.length - 1] === "!"){ //We use [str.length -1] to get target the last character of this string, if it equals "!" then continue
      return string.slice(0,-1) //the -1 in .slice is the second param and targets all characters to be removed past a point, if it were a -2, it would remove the exclamation plus the next character and so on. the 0 is from the start, but we aren't removing anything with 0
  }else{
    return string
  }
}
  //Pretty neat method using the .replace method
  const remove = s => s.replace(/!$/, '') //This will replace the !, however the $ says to do it from the end. (Instead of start or all) and replace it with nothing. ('')

//A simple equation to get the multiples of parameter 1 (integer) up until the parameter 2 (limit)
function findMultiples(integer, limit) {
  let result = []
  for(let i = 1; i <= limit; i++){
    if(integer * i <= limit){
      result.push(integer * i)
    }
  }
  return result
}

  //This code makes it simpler with no conditional added
  function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int) //Instead of the i++, we use i+=int so as to not keep adding more than we need.
      result.push(i)
      
    return result
  }

//A simple way to get however many of an array (parameter 1) we want to show dependent on Parameter 2. Using .push
function take(arr, n) {
  let newArr = []
  arr.forEach((x,i) =>{
    if(i < n){
      newArr.push(x)
    }
  })
  return newArr
}
  //Here's that same code using .slice
  function take(arr, n) {
    return arr.slice(0, n);
  }

//This code appear simple, and it is.. But it also allows us to see that we can combine the || and && to add another level of conditional(xor). The parameters both pass either true or false, and only one of them can be true for the requirements to work, if both are true then it fails. This was broken down into the most driest one line code, ternary and arrow with the params equalling the results.
let xor = (a, b) => a && !b || !a && b //Notice how we put the "!" in front of the param to say one of them had to be false (Since the result was going to be either true or false)

//Some simple things with array just in case they're needed
let getLength = arr => arr.length //Return array length


let getFirst = arr => arr[0] //Return first element of array

let getLast = arr => arr[arr.length -1]  //return the last element of arr


let pushElement = arr =>{ //Add el to the end of the array
  let el = 1
  arr.push(el)
  return arr
}

let popElement = arr => {
  arr.pop() //Remove the last element of the array
  return arr
}

//The following will help us get the average of a given array (The parameter) using the reduce method. It divides the result of the reduction and divides it by the length of the array
var findAverage = function (nums) {
  return nums.reduce((acc,c) => c + acc) / nums.length
}

//The below function just turns the given parameter of binary string into a base ten digit
function binToDec(bin){
  return parseInt(bin,2)
}
  //The in the parseInt says what the first parseInt parameter is. Binary is a base 2.

//Function including the "typeof" application which will return the type of the following. Good for a boolean to check try to match it with a given word.
  //console.log(typeof ""); // 👉️ "string"
  // console.log(typeof "42"); // 👉️ "string"
  // console.log(typeof function () {}); // 👉️ "function"
  // console.log(typeof null); // 👉️ "object"
  // console.log(typeof []); // 👉️ "object"
  // console.log(typeof {}); // 👉️ "object"
  // console.log(typeof 0); // 👉️ "number"
  // console.log(typeof "hello"); // 👉️ "string"
  //The string below puts it into effect, if the typeof matches with 'string' then it'll return an error result, if not it'll return arithmetic
  function problem(x){
    if(typeof x === "string"){ //Notice how typeof has NO caps and we have to match it with the appropriate response that type of will give us to make it a boolean.
      return "Error"
    }else{
      return (x * 50) + 6
    }
  }

//The below function provides an example on how to withdraw specific information from an object
//The object is passed through the function's parameter and given the (Other than)method of color:, name:, legs:
//We use back ticks to insert it into a sentence
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}



//The below code creates a class called "Ball" which will return the given parameter in ballType (using "this.") if no parameter is given then it gives regular as the default option.
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

//This one was a challenging one only because the setting of the i variable needed to be n. The goal is to add up every multiple of n up until m. So if n = 2 and m = 9, it'd be 2 + 4 + 6 + 8. I was originally trying to have i = 0 but it needed to be n then add n to every recurring one
function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
  //It's important to know for loops like this