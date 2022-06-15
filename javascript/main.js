function gitTest(test){
    console.log('Hello' + test)
}

gitTest('World')


//Siete K, an example of using the typeof syntax in a conditional to determine if an element in an array is a string
function filter_list(l) {
    let nums = []
    l.forEach((x,i) => {
      if( typeof x != 'string'){
        nums.push(x)
        }
      })
    return nums
   }