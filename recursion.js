// Problem: Print numbers from n to 1 using recursion.
// let n = 12;
// function func(num) {
//   if (num === 0) return;
//   console.log(num);
//   num = num - 1;
//   func(num);
// }

// func(n);
// Time complexity = O(n)
// Space complexity = O(n)

// Problem: Print numbers from 1 to n using recursion.
// let n = 12;
// function func(num) {
//   if (num === 0) return;
//   console.log(n - num + 1);
//   num = num - 1;
//   func(num);
// }

// func(n);
// Time complexity = O(n)
// Space complexity = O(n)

// Problem Statement:
// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
// let n = 12;
// function func(num) {
//   if (num === 1) return 1;
//   return num + func(num - 1);
// }
// console.log(func(n));
// Time complexity = O(n)
// Space complexity = O(n)

// Write a recursive function fact(n) that returns the factorial of a number n
// let n = 5;
// function func(num) {
//   if (num === 0 || num === 1) return 1;
//   return num * func(num - 1);
// }

// console.log(func(n));
// Time complexity = O(n)
// Space complexity = O(n)

// Problem Statement:
// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.
// let arr = [5, 2, 6, 1, 3];
// function func(n) {
//   if (n === 0) {
//     return arr[n];
//   }
//   return arr[n] + func(n - 1);
// }

// console.log(func(arr.length - 1));

// Problem Statement:
// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.
// let arr = [5, 2, 6, 1, 3];
// function func(n) {
//   if (n === 0) {
//     return arr[n] % 2 === 0 ? 0 : arr[n];
//   }
//   return arr[n] % 2 === 0 ? func(n - 1) : arr[n] + func(n - 1);
// }

// console.log(func(arr.length - 1));

// Problem Statement:
// Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.
// function func(n) {
//   if (n === 1) return true;
//   if (n % 2 !== 0 || n < 1) return false;
//   return func(n / 2);
// }

// console.log(func(18));
// Time complexity = O(logn)
// Space complexity = O(logn)

// Problem Statement:
// Write a recursive function to find fibonacci series
// function func(n) {
//   if (n <= 1) return n;
//   return func(n - 1) + func(n - 2);
// }

// console.log(func(8));
// Time complexity = O(2^n)
// Space complexity = O(n)
