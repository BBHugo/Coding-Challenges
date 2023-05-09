//A reminder that "git pull" will fetch the remote repo and update our local repo at the same time.

//"git fetch" will only show us the changes that were made for us to use it, I believe we merge it with git merge but not sure just yet.

//A tip for the for loop, the first section 'var i = ' is our variable that we will use to determine how we use the loop and where we can start. The middle ' i ? n' is saying 'this loop will run for as long as this condition is met' the last one tells the loop what to change to the variable after every run around. The code below took the function variable of 'n' which is a number greater than 0. The goal was to return a diminishing array starting at variable n and ending at 1.
const reverseSeq = n => {
    var result = []
    for(var i = n; i > 0; i -= 1){
      result.push(i)
    }
    return result
  };