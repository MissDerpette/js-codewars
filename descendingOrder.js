function descendingOrder(n){
    console.log(n);
   let string = n.toString();
   let sortedString = string.split("").reverse();
  //  let reverse = sortedString.reverse();
    console.log(sortedString);
    sortedString.sort(function(a, b){return b-a});
  let finalData = parseInt(sortedString.join("")) ;
  //   step 1 turn to string 
  //   step 2 sort string descending 
  //   step 3 convert final data to integer again
    
    return finalData;
  }

//   BEST PRACTICE
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

