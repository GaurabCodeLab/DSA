// Problem Statement:
// Given a binary array nums, return the maximum number of consecutive 1’s in the array.
function required(arr) {
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(maxCount, currentCount);
}

console.log(required([1, 0, 1, 1, 0, 1]));
