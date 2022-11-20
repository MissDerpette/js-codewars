


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
