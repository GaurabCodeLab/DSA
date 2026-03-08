// Problem Statement:
// Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.
function sumFunc(a, b) {
  let sum = a + b;
  console.log(sum);
}

// sumFunc(14, 12);

// Problem Statement:
// Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it.
function squareFunc(x) {
  let square = x * x;
  return square;
}

let result = squareFunc(12);
// console.log(result);

// Problem Statement:
// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
function checkEligibility(age) {
  if (age < 0) {
    console.log("Invalid age");
  } else if (age > 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not Eligible to vote");
  }
}

// checkEligibility(23);

// Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd.
function isEven(num) {
  if (num % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

// isEven(5);

// Problem Statement:
// Write a program to print all even numbers from an array
let arr = [10, 3, 5, 2, 7, 6, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// Problem Statement:
// Write a function that returns the number of negative numbers in an array
let arr2 = [2, -6, -4, 8, 1, -9];
function countNegativeArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const result2 = countNegativeArray(arr2);
// console.log(result2);

// Problem Statement:
// Write a function that returns the largest number in an array
let arr3 = [2, -6, -40, 18, 10, -9];
function maxArray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const result3 = maxArray(arr3);
// console.log(result3);

// Problem Statement:
// Write a function that returns the smallest number in an array
let arr4 = [2, -6, -40, -180, 10, -9];
function minArray(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const result4 = minArray(arr4);
// console.log(result4);

// Problem Statement:
// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
let arr5 = [2, -6, -40, 8, 10, -9];
function findIndex(arr, x) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      index = i;
    }
  }
  return index;
}

let result5 = findIndex(arr5, 8);
// console.log(result5);

// Problem Statement:
// Write a function secondLargest(arr) that returns the second largest distinct number in an array
// let arr6 = [0, 3, 5, 2, 7, 9];
// let arr6 = [4, 4, 4, 4];
// let arr6 = [5];
// let arr6 = [10, 20];
let arr6 = [0, 3, 5, 5, 2, 7, 7, 7, 9, 9, 9];

function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return "Array should have at least two numbers";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  if (secondLargest === -Infinity) {
    return "No second largest found";
  }
  return secondLargest;
}

// console.log(secondLargestNumber(arr6));

// Pattern 1: Print nxn Star Square
// Print a square pattern of stars (*) of size n x n.
// Output
// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j < n; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// Pattern 2: Right-Angled Star Triangle
// Print a right-angled triangle of stars with n rows.
// Output
// *
// * *
// * * *
// * * * *
// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// Pattern 3: Print a Right-Angled Number Triangle
// Write a program that prints a right-angled triangle of numbers of heightn.
// Output
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j <= i; j++) {
//     star = star + (j + 1);
//   }
//   console.log(star);
// }

// Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
// Write a program that prints a right-angled triangle where each row contains the same number repeated.
// Output
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j <= i; j++) {
//     star = star + (i + 1);
//   }
//   console.log(star);
// }

// Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
// Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.
// Output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j < n - i; j++) {
//     star = star + (j + 1);
//   }
//   console.log(star);
// }

// Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
// Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.
// Output
//       *
//     * *
//   * * *
// * * * *

// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j < n - i - 1; j++) {
//     star = star + " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
// Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.
// Output
// 1
// 1 0
// 1 0 1
// 1 0 1 0

// for (let i = 0; i < n; i++) {
//   let star = "";
//   let toggle = 1;
//   for (let j = 0; j <= i; j++) {
//     star = star + toggle;
//     if (toggle === 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(star);
// }

// Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
// Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.
// Output
// 1
// 0 1
// 0 1 0
// 1 0 1 0

// let toggle = 1;
// for (let i = 0; i < n; i++) {
//   let star = "";
//   for (let j = 0; j <= i; j++) {
//     star = star + toggle;
//     if (toggle === 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(star);
// }

// Problem Statement:
// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

function countDigits(n) {
  if (n === 0) {
    return 1;
  }
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// console.log(countDigits(0));

// Problem Statement:
// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let xCopy = x;
  let rev = 0;
  while (xCopy > 0) {
    let last = xCopy % 10;
    rev = rev * 10 + last;
    xCopy = Math.floor(xCopy / 10);
  }
  return x === rev;
}

// console.log(isPalindrome(10));

// Problem Statement:
// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

function reverse(x) {
  let xCopy = Math.abs(x);
  let rev = 0;
  while (xCopy > 0) {
    let last = xCopy % 10;
    rev = rev * 10 + last;
    xCopy = Math.floor(xCopy / 10);
  }
  let limit = Math.pow(2, 31);
  if (x < 0) {
    rev = -rev;
  }
  if (rev < -limit || rev > limit - 1) {
    return 0;
  } else {
    return rev;
  }
}

console.log(reverse(1534236469));
