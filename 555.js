//This code allows us to get the 13th letter in the alphabet (loops around) after an initial index and replace a string with the 13th. I use 2 variable to give me the original alphabet and the 13th to pull the index of both and return it for the replacement using RegEx to look through the given original input (the original function parameter not the replace parameter)
function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let other = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
    return message.replace(/[a-z]/gi, parameter => other[alphabet.indexOf(parameter)])
  }