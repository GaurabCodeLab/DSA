// Problem Statement:
// Given a binary array nums, return the maximum number of consecutive 1’s in the array.
// function required(arr) {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       currentCount++;
//     } else {
//       maxCount = Math.max(currentCount, maxCount);
//       currentCount = 0;
//     }
//   }
//   return Math.max(maxCount, currentCount);
// }

// console.log(required([1, 0, 1, 1, 0, 1]));

// Problem Statement:
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// First method:-
// function required(arr) {
//   arr.sort((a, b) => a - b);
//   if (arr[0] !== 0) {
//     return 0;
//   }
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i - 1] + 1;
//     }
//   }
//   return arr.length;
// }

// console.log(required([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Second Method:-
// function required2(arr) {
//   let n = arr.length;
//   let sum = (n * (n + 1)) / 2;
//   let partialSum = 0;
//   for (let i = 0; i < n; i++) {
//     partialSum += arr[i];
//   }
//   return sum - partialSum;
// }

// console.log(required2([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Problem Statement:
// Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

// function required(arr) {
//   let x = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[x] = arr[i];
//       x++;
//     }
//   }
//   for (let i = x; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }
// console.log(required([0]));

// Problem Statement:
// Given an integer array nums and an integer val, remove all occurrences of val in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// function required(arr, val) {
//   let x = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== val) {
//       arr[x] = arr[i];
//       x++;
//     }
//   }
//   for (let i = x; i < arr.length; i++) {
//     arr[i] = "_";
//   }
//   console.log(arr);
//   return x;
// }

// console.log(required([0, 1, 2, 2, 3, 0, 4, 2], 2));

// Problem Statement:
// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.
// function required(arr) {
//   let n = Math.floor(arr.length / 2);
//   for (let i = 0; i < n; i++) {
//     let xCopy = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = xCopy;
//   }
//   return arr;
// }

// console.log(required(["H", "a", "n", "n", "a", "h"]));

// Problem Statement:
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
function required(arr) {
  let x = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  for (let i = x + 1; i < arr.length; i++) {
    arr[i] = "_";
  }
  console.log(arr);
  return x + 1;
}

console.log(required([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
