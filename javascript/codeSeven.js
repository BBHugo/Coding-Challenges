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
