function test(input){
    console.log("Hello " + `${input}`)
}

test('Hugo')

//
//Code to return the amount of vowels in a string

//method 1:
function getCount(str){
    let vowelsCount = 0
    str.split('').forEach((x,i) => {
        if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
            vowelsCount += 1
        }else{
            vowelsCount += 0 //Might be able to do without this one
        }
    })
    return vowelsCount
}

    //The above method is if we want to break it down. below for a bit dryer
function getCount(str){
    return (str.match(/[aeiou]/ig)|| [].length)
}
    //	Explanation: For anyone curious about what the "ig" portion of the .match argument does (as I was), it turns out "i" and "g" are both one of five optional "flags" that can be used in connection with regular expressions. The "g" makes it so the regex search is global (i.e., all matches in a string are returned, as opposed to a single match) and the "i" makes it so the search is case-insensitive.
//


//
//Giving each string in an array a consecutive number starting at 1: . Ex: [a,b,c] = ['1: a', '2: b', '3: c']

//method 1:
function number(array){
    let arrayNum = []
    array.forEach((x,i) => {
        let numbering = i + 1
        arrayNum.push(numbering + ": " + x)
    })
    return arrayNum
}

//Dryer Method:
function number(array){
    return array.map(function(line, index){
        return (index + 1) + ": " + line
    })
}

    //Used the map method to create a function that imitated method 1 code by adding all of the end result together but it didn't require the first vairable. using line as the x and index as i respectively

//An example of using the typeof syntax in a conditional to determine if an element in an array is a string
function filter_list(l) {
    let nums = []
    l.forEach((x,i) => {
      if( typeof x != 'string'){ //In this case, String isn't a random variable and actually needs to say 'string'
        nums.push(x)
        }
      })
    return nums
   }

//A useful way to filter out an array to only include the things we want, in this case we are looking for strings that are exactly 4 in length.
function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  //Essentially, it does the same as the code below
function friend(friends){
    let fourFriends = []
    friends.forEach( x => {
        if( x.length == 4){
            fourFriends.push(x)
        }
    })
    return fourFriends
}

//The below is code to help us turn an array of binary to decimal
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2) // We have to first join the array within the parseInt parameter.

//The below code is useful for finding characteristics within a string using the .match method
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length); //the lone x & o variables are used to check for nulls which is prevalent with .matches
  }
  //A problem I had before was, if we try to do the .length into to the original variable, null will prevent our .length from reading. So adding the o & x variables to the conditional works great
  
// The below code is just an example of using switches instead of a regular if conditional.
function arithmetic(a,b, operator){
    switch (operator){
        case "add":
          return a + b
          break
        case "subtract":
          return a - b
          break
        case "multiply":
          return a * b
          break
        default:
          return a / b
    }
  }
  //May need to add a ; in between each line but it works this way too.

//The below is used to sort an array of numbers from smallest to largest, if the array.length == 0 or is null then we return an empty array.
    //This one will be a longer version to help readability of what's happening.
function sortArray(nums){
    if(nums === null || nums.length === 0){
        return []
    }else{
        return nums.sort(function(a,b){return a-b})
    }
}
    //The next one will be a dryer version
function sortArry(nums){
    return (nums || []).sort(function(a,b){
        return a - b
    })
}
    //To go largest to smallest, we just need to have b - a.
    //The dryer version just has nums as a boolean for the conditional with an empty string still being able to have the sort function ran through it but returning it empty regardless


// The below code is for making a given string with a proper format into a date and comparing it to another
function checkDate(currentDate, expirationDate){
    return  new Date(currentDate) <= new Date(expirationDate);
  }

//The below code uses the sort method and passed through function to sort the array elements by the length of their strings
  //From shortest to longest we use
  function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };
  //From longets to shortest we switch up the a & b parameters within the .sort method
  function sortByLength (array) {
    return array.sort((a,b) => b.length - a.length)
  };

//Below is a smart way to use the .split() method to separate a string by an anything within a string and returning everything before it. This strings purpose is to return everything before '#' and remove everything after. example: www.helloWorld.com/KeepMe#removeme -> www.helloWorld.com/KeepMe
function removeUrlAnchor(url){
    return url.split('#')[0];
  }
  //Since we've split the array wherever the # appears, essentially (with the example provided) will create 2 indexes, all we have to do to return our wanted element is to recall index 0. Simple.

//This code will allow a unique type of method to find if a string contains any letters before and including m.
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") { //Notice the greater tahn to find if true
        count++;
      }
    }
    return count+"/"+s.length;
}

//New method to give us a single boolean result if each element passes the condition. Using the .every method, looks similar to .forEach
function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

//The following code will input several parameters. The goal is to get a result which first multiples each parameter times itself, adds all of them together, square roots it, divides it by two and gives the result rounded down to the nearest integer
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let array = [age1,age2,age3,age4,age5,age6,age7,age8]
  let arrayM = []
  array.forEach((x,i) => {
    arrayM.push(x*x)
  })
  return Math.floor(Math.sqrt(arrayM.reduce((acc,c) => acc + c))/2)
}
  //To break it down even further, we'll take the return and break it down. to use the square root method. The rounding down "floor" method, and reduce, all in subsequent steps
  let addedTogether = arrayM.reduce((acc,c) => acc + c) //Adds all the numbers in the array together to give one resulting number
  let Rooted = Math.sqrt(addedTogether) //Square roots the added number
  let roundedDown = Math.floor(Rooted) //Round down
  //All we would have to do is divide by 2

//Below is another example for using the switch as a conditional instead of the if method
function DNAStrand(dna){
  let result = ""
  dna.split("").forEach((x,i) => {
    switch(x){
      case "A":
        result += "T"
        break
      case "T":
        result += "A"
        break
      case "C":
        result += "G"
        break
      case "G":
        result += "C"
        break
    }
  })
  return result
}

//The below code capitalizes every other word of a string, first for even indexes then for the odd ones and creates a separate string with them, then it puts those individually into an array using the push method of the results
function capitalize(s){
  let resultEven = ''
  let resultOdd = ''
  let result = []
  let array = s.split('')
  array.forEach((x,i) => {
    if(i % 2 === 0){
      resultEven += x.toUpperCase()
    }else{
      resultEven += x
    }
  })
  array.forEach((x,i) => {
    if(i % 2 != 0){
      resultOdd += x.toUpperCase()
    }else{
      resultOdd += x
    }
  })
  result.push(resultEven)
  result.push(resultOdd)
  return result
};

//The below adds the filter method which will create a new array based on the criteria which passes through the parameter
function getEvenNumbers(numbersArray){ 
  const result = numbersArray.filter( number => number % 2 === 0) //Have to assign the method to a variable, the "number" is of my own creation and I believe works the same as the forEach method of x,i. So it goes through each element and returns the ones that pass the test given in the arrow function within the parameter.
  return result //Call the variable, although this could be added to the above line as well
}

//The below code will calculate a factorial, basically the product of a given value multiplied by every whole number preceding it. In the exercise, if the variable (n) is below 0 or above 12, we throw an error "RangeError"
function factorial(n){
  let sum = 1
   if(n < 0 || n > 12){
     throw "RangeError" //The difference between a throw and return, is a return is typically an acknowledgement of success where throw is an error or something didn't register
   }else{
     for(let i = 1; i <= n; i++){
       sum *= i
     }
   }
  return sum
}

//The goal of the code below is to get the multiple placed arrays (within the singular parameter we are able to use) and add the minimum number of each together to get the reult. The original problem begins with how to separate the the arrays using the singular parameter to get indvidual "mins" to ultimately add up. We do this using the reduce method
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
} //The "..." within the reduce method's operation is a "rest operator" used to grab the different arrays within the single parameter of "arr" (This might be wrong but is my understanding)

let TripleDotWebsite = href('https://blog.bitsrc.io/three-dots-in-javascript-7b46bc05d5c3')

//This one's a bit difficult at first and uses the slice method to bring down our given string to a desired size. The goal is to get the first parameter within the given number (second param) and return it counting 3 dots at the end of the sentence, unless the given string length is below the given number
function trim ( str, size ) {
  if ( str.length <= size ) {
    return str;
  }
  
  const real = str.slice(0, size); //The first param in slice is what index to start at, the second is where to end.
  
  return `${real.length < 4 ? real : real.slice(0, -3)}...`; //By using a ternary, we're determining if the "real" string length is within the given number, if so we return real, and using the back ticks, add the ... at the end. If it isn't smaller, it slices the real variable again. The -3 basically says to end the sliced string counting backwards in index.
}

//The code below creates 2 teams from the given parameter array. Teams are divided by the first being team 1 then second team 2 and so on. We return the "weight"(total) of the combined team1 and team2
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0); //Filter works by only including whatever the filter says, using x and i as the variable and index like in forEach.
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2] //This way it'll keep them in an array.
}
  //The below does the same thing just in a worse way
  function rowWeights(array){
    let team1 = []
    let team2 = []
    array.forEach((x,i) => {
      if(i % 2 == 0 || i == 0){
        team1.push(x)
      }else if(i % 2 != 0){
        team2.push(x)
      }
    })
    return [team1.reduce((acc,c) => acc + c, 0), team2.reduce((acc,c) => acc + c,0)]
  }

//The code below is effective at creating multiple arrays within an array from a given parameter (in this case an array). each array should be 2 sides with a string comprising of the given parameter, except each new array within the overarching array should put one more word into the left side
function partlist(arr) {
  let result = []
  for(var z = 0; z < arr.length - 1; z++){ //we use a for loop with the variable of z created to know how many times we should loop
    let first = []
    let second = []
    arr.forEach((x,i) => {
      if(i <= z){ //By having z as our controlling parameter for this loop too, we will be able to add the appropriate number of elements to the left side, and z gets added by 1 every time the loop goes around. Essentially, the for loop starts, then the forEach completes its loop within the for loop.
        first.push(x)
      }else{
        second.push(x)
      }
    })
    result.push([first.join(" "),second.join(" ")]) //at the end of each loop around, the result of the forEach gets pushed up before the first and second variables get reset ahead of the forEach when the for loop runs again.
  }
  return result
}

// The code below takes a string, and returns an array with the elements being the location of the vowels within that string including Y and capital letters, we use regex to see if it matches a vowel
function vowelIndices(word){
  let result = []
  word.split('').forEach((x,i) => {
    if(x.match(/[aeiouyAEIOUY]/ig)){
      result.push(i + 1)
    }
  })
  return result
}

//The code below tests to see if a value from the array is a string, if it is it converts into a number and groups all the new numbers to subtract it from all the added values that were already numbers
function divCon(x){
  let numbers = 0
  let strings = 0
  x.forEach((l) => {
    if(l.toString() === l){
      strings += Number(l)
    }else{
      numbers += l
    }
  })
  
  return numbers - strings
}

  //The code below makes it drier using the typeof method
  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }