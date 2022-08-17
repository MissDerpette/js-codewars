function removeEveryOther(arr){
    console.log (arr)
    let array = arr
  
    //   let array = ["Hello", "Goodbye", "Hello again"]
    console.log(array)
    let i = array.length;
  
    while (i--) (i + 1) % 2 === 0 && (array.splice(i, 1));
    console.log(array)
  
    return array;
  }


//   Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!