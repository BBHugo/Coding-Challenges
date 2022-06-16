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
    return (str.match(/[aeiou]/ig)|| [].length
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