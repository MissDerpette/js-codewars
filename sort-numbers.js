// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


function solution(nums){
  var sortedList =  (nums || [] ).sort((a,b) => a - b)
  console.log(sortedList)
  return sortedList
}


//  Clever
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

// Clever
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}
