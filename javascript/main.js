//A reminder that "git pull" will fetch the remote repo and update our local repo at the same time.

//"git fetch" will only show us the changes that were made for us to use it, I believe we merge it with git merge but not sure just yet.

//Using Spread Operators and new Set method WITH the sort method, we're able to combine the given parameter arrays into one, sort them by number (They're all integers in this exercise) and remove any duplicates with the new Set.
function mergeArrays(arr1, arr2) {
    let sortedM = [...arr1, ...arr2].sort((a,b) => a-b) //Sorts the array as well as merging all arrays using spread operator
    return [...new Set(sortedM)] //Creates a new Set which removes the duplicates
  }