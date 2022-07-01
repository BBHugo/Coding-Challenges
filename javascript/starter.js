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