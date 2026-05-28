// Problem 1:-
// Linear Search
// function func(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return target;
//     }
//   }
//   return -1;
// }

// console.log(func([6, 8, 0, 3], 5));
// Time complexity = O(n) where n = arr.length
// Space complexity = O(1)

// Problem 2:-
// Binary Search (For sorted array)
function func(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(func([-1, 0, 3, 5, 9, 12], 9));

// Time complexity = O(logn) where n = arr.length
// Space complexity = O(1)
