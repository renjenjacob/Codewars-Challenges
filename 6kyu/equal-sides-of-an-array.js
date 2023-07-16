//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
//Note: If you are given an array with multiple answers, return the lowest correct index.
//Input: An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
//Output: The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

//Example

//{1,2,3,4,3,2,1} --> 3
//{1,100,50,-51,1,1} --> 1
//{20,10,-80,10,10,15,35} --> 0

function findEvenIndex(arr) {
  let left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(let i = 0; i < arr.length; i++) {
      if(i > 0) {
        left += arr[i-1];
        right -= arr[i];
      }
      if(left == right) return i;
  }
  return -1;
}


