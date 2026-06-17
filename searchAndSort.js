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
// function func(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (right >= left) {
//     let middle = Math.floor((left + right) / 2);
//     if (target === arr[middle]) {
//       return middle;
//     } else if (target > arr[middle]) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
//   return -1;
// }

// console.log(func([-1, 0, 3, 5, 9, 12], 9));

// Time complexity = O(logn) where n = arr.length
// Space complexity = O(1)

// Problem 3:-
// Bubble Sort Algorithm
// function func(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     let isSwapped = false;
//     for (j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         isSwapped = true;
//       }
//     }
//     if (!isSwapped) break;
//   }
//   return arr;
// }

// console.log(func([4, 5, 1, 3, 9]));
// Time complexity = O(n^2) where n = arr.length
// Space complexity = O(1)

// Problem 4:-
// Selection Sort Algorithm
// const arr = [4, 5, 1, 3, 9];
// function func(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }

// console.log(func(arr));
// Time complexity = O(n^2) where n = arr.length
// Space complexity = O(1)

// Problem 4:-
// Insertion Sort Algorithm
const arr = [4, 5, 1, 3, 9];
function func(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}
console.log(func(arr));
// Time complexity = O(n^2) where n = arr.length
// Space complexity = O(1)
