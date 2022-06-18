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